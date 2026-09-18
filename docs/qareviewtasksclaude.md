# QA Review — Task List for Claude (VS Code)

Generated 2026-07-27 from a front-end/build-hygiene review of the English site
(HTML, SCSS, Liquid, YAML, JS; `pl/` and binary images skipped).
Verdict: **Needs work** — no launch blockers for a personal blog, but several
real HTML/SEO/a11y defects. Work top-down; tasks are ordered by severity.

Rules for the executor: minimal working fixes, no rearchitecting unless a task
says so. After each group, run the verification listed at the bottom.

---

## P1 — Broken / invalid output

### 1. Close the unclosed `<nav>` in `_layouts/post.html`
`<nav class="expertise__nav">` opens at `_layouts/post.html:233` and is never
closed — `{% include disqus.html %}` and `</article>` follow at lines 263–264
with no `</nav>`. Every post page ships misnested HTML.
**Fix:** add `</nav>` after the last nav link (before the disqus include), and
move `{% include disqus.html %}` outside the nav.

### 2. Remove `<link rel="alternate" hreflang>` emitted into `<body>`
`_layouts/post.html:5-12` renders hreflang `<link>` tags inside the page body.
`rel="alternate"` links are not body-ok, so this is invalid HTML — and
`_layouts/default.html:47-54` already emits the same links in `<head>`, so
they're duplicates too. **Fix:** delete lines 5–12 of `post.html`.

### 3. Guard prev/next post links against nil
`_layouts/post.html:242` and `:256` render `<a href="{{ prev_post.url }}">`
unconditionally. On the newest/oldest post, `prev_post`/`next_post` is nil →
`<a href="" title="">Prev</a>` links pointing at the current page.
**Fix:** wrap each anchor in `{% if prev_post %}` / `{% if next_post %}`.

### 4. Fix or remove the dead `/feed.xml` reference
`_layouts/default.html:44` links `feed.xml`, but `plugins:` is commented out in
`_config.yml:224-226`, so jekyll-feed never runs and `/feed.xml` is a 404.
**Fix (preferred):** enable in `_config.yml`:
```yaml
plugins:
  - jekyll-feed
  - jekyll-sitemap
```
Both are on the GitHub Pages whitelist. Otherwise remove the `<link>`.

### 5. Exclude `archived/` from the build (duplicate pages + ref collision)
`archived/` is not in the `exclude:` list (`_config.yml:229-235`), so:
- `archived/portfolio_en.md` publishes at `/en/portfolio/` **and** carries
  `ref: portfolio` — the same ref as `en/expertise.md` — corrupting the
  hreflang loop in `default.html` (two `hreflang="en"` alternates) and creating
  duplicate content.
- `archived/arch_about.md` has `permalink: -archived-` (a junk URL that still
  gets published).
**Fix:** add `- archived` to `exclude:` in `_config.yml`.

### 6. Stop publishing junk files
These are committed and, being extension-less/static, get copied into `_site`
and served from the site root:
`tmpclaude-0ec4-cwd`, `tmpclaude-36e3-cwd`, `tmpclaude-52f7-cwd`,
`tmpclaude-595c-cwd`, `tmpclaude-746b-cwd`, `tmpclaude-c2e3-cwd`,
`tmpclaude-c913-cwd`, `tmpclaude-d09f-cwd`, `tmpclaude-e995-cwd`.
Also dead weight: `_sass/_portfolio-tiles.scss.backup`,
`images/logos/Logo_Fire_Favicon_Alpha_1024x1024.txt`, unreferenced
`_layouts/prism.js` + `_layouts/prism.css`, and a stale `.gitmodules` entry for
`Solution4Design.github.io` (no gitlink exists in the index).
**Fix:** `git rm` the tmp files/backup/txt, delete the stale `.gitmodules`
entry, add `tmpclaude-*` to `.gitignore`. Confirm prism.js/css are truly
unreferenced before deleting (grep shows no references today).

### 7. Custom 404 never served by GitHub Pages
There is no root `404.html`; `en/404.md` publishes at `/en/404/`, which GitHub
Pages ignores — visitors get the default GitHub 404.
**Fix:** create root `404.html` with front matter `permalink: /404.html`
(layout page, content can redirect or duplicate `en/404.md`).

---

## P2 — SEO & metadata

### 8. Fix the `<title>` template
`_layouts/default.html:4-8` builds
`Title | Site name | <150-char site description>` on every page — the full
marketing description is appended to every title, and surrounding Liquid
whitespace ends up inside `<title>`.
**Fix:**
```liquid
<title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.name }}</title>
```
(keep the description in `meta name="description"` only).

### 9. Complete social/canonical metadata in `_includes/meta.html`
Missing entirely: `og:image`, `og:url`, `og:type`, `og:site_name`,
`twitter:card`, and `<link rel="canonical">`. Posts already have an `image`
front-matter key to feed `og:image`.
**Fix:** either adopt `jekyll-seo-tag` (whitelisted on GH Pages; replaces most
of meta.html) or add the tags manually:
```liquid
<link rel="canonical" href="{{ page.url | absolute_url }}">
<meta property="og:url" content="{{ page.url | absolute_url }}">
<meta property="og:type" content="{% if page.id %}article{% else %}website{% endif %}">
<meta property="og:image" content="{{ page.image | default: '/images/logos/Logo_BIMShamans_Baner_Light_1024x222.png' | absolute_url }}">
<meta name="twitter:card" content="summary_large_image">
```
Also escape the description: `{{ page.excerpt | strip_html | normalize_whitespace | escape }}`
(`meta.html:10-11` currently injects raw excerpt text into an attribute).

### 10. robots.txt + sitemap
No `robots.txt`, no sitemap. **Fix:** enable `jekyll-sitemap` (see task 4) and
add `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://bimshamans.com/sitemap.xml
```

### 11. Blog index is invisible without JavaScript
`en/blog.md:102-124` renders the entire card grid client-side from an inline
`blogPosts` array; `#blog-cards` is empty in the HTML. Crawlers that don't
execute JS (and all no-JS users) see an empty blog.
**Fix (minimal):** render the cards server-side with Liquid inside
`#blog-cards` (same markup blog-filter.js produces) and let the JS
filter/sort/re-render on top; also wrap controls in `<noscript>` fallback or
leave static cards as the noscript state.

---

## P3 — Accessibility (WCAG 2.2 AA)

### 12. Missing/broken `<h1>` on key pages
- `en/home.md` — no h1; first heading is `<h2>` (line 56). The hero has only a
  visually-hidden `<span>BIM Shamans</span>`. Make that span an `<h1>`.
- `en/blog.md:12` — h1 is commented out. Restore it (style it or keep
  `.visually-hidden` if design requires).
- `en/expertise.md:15` — same, h1 commented out.
- `en/expertise-collection.md` — no h1 before the `<h2>` tiles.
- `en/about.md` — starts at `##` (line 9), an `<h1>` appears mid-page at line
  984, then jumps to `####` (988–998) skipping h3. Restructure: one h1 at top,
  demote/promote the rest to a clean h1→h2→h3 outline.

### 13. Add a skip-to-content link
No skip link exists in `_layouts/default.html`. **Fix:** first element in
`<body>`:
```html
<a class="skip-link visually-hidden-focusable" href="#main">Skip to content</a>
```
plus SCSS making it visible on focus. `#main` already exists (`default.html:212`).

### 14. Give footer social icons accessible names
`_includes/svg-icons.html` renders links containing only an empty
`<i class="svg-icon linkedin"></i>` — no text, no aria-label. Screen readers
announce the raw URL. **Fix:** add `aria-label="BIM Shamans on LinkedIn"` (etc.)
to each `<a>`. Also the privacy link (lines 13-16) contains two `<img>` both
with `alt="Privacy Policy"` (light/dark variants) → name read twice; keep alt
on one and set `alt=""` + `aria-hidden="true"` on the theme duplicate.

### 15. Remove inline event handlers
- `onclick="switchLanguage('en')"` ×4 in `_layouts/default.html`
  (134, 142, 176, 184) — bind in `language-EN-PL-switcher.js` via the existing
  `data-lang` attributes instead.
- `onclick="window.scrollTo(...)"` in `_layouts/post.html:249` and
  `en/blog.md` nav — move to a small shared listener.
- `en/blog.md` sort button: remove `onclick="return false"` and the redundant
  `role="button"` on a `<button>`.
This also moves you closer to dropping `'unsafe-inline'` from the CSP later.

### 16. `target="_blank"` without `rel="noopener noreferrer"`
`_includes/sections/feature-cards.html:26`, `en/authors.md:75`,
`en/about.md:998`. **Fix:** add `rel="noopener noreferrer"`.

### 17. `index.html` root redirect page
- `<html>` missing `lang="en"` (line 2).
- Body text bug: `follow this link<a href='/en/home/'>link</a>` — missing
  space and duplicated word; also bare "link" text. Rewrite:
  `If you are not redirected, <a href="/en/home/">go to the homepage</a>.`
- Meta refresh with delay 0 is acceptable under WCAG, but keep it 0.

### 18. Contrast + focus audit (needs a browser, don't guess from source)
36 `:focus`/`:focus-visible` rules exist and reduced-motion is handled
(`style.scss:1044` + partials) — good. But contrast of themed custom
properties (e.g. `--secondBlue-color: #32D7E6` on light backgrounds, SVG logo
fills at 0.75 opacity) can't be verified from source. Run Lighthouse/axe on the
built site in both themes and fix any reported pairs. Do not tweak colors
without a measured ratio.

---

## P4 — Performance

### 19. Font loading: trim weights, drop `@import` chains
`style.scss:22-24` loads via CSS `@import`: Montserrat in **all 18
weight/style variants**, Michroma (3), Syncopate (2), Source Code Pro,
Cascadia Code from fonts.cdnfonts.com, and a second Google request for
Inter+Jura **without `display=swap`**. That's a serialized render-blocking
chain (style.css → 3 font CSS files → font binaries) and hundreds of KB of
fonts.
**Fix:** keep only the weights actually used (grep `font-weight` usage;
typically 400/600/700 + italic 400), merge into one `css2` request with
`display=swap`, move it to `<head>` as
`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
`<link rel="stylesheet" ...>` instead of CSS `@import`. Evaluate whether
Inter/Jura/Cascadia are used at all before keeping them.

### 20. De-block head JavaScript
`_layouts/default.html:57-58` loads `storage-rate-limiter.js` and
`theme-switcher.js` synchronously (no `defer`). theme-switcher waits for
DOMContentLoaded anyway → safe to `defer`. Note: the inline pre-paint theme
script (lines 18-42) checks `window.SafeStorage`, but storage-rate-limiter.js
loads *after* it, so that branch is dead code — either inline the SafeStorage
bootstrap before it or simplify the inline script to plain localStorage.

### 21. Load page-specific JS conditionally
`default.html:65-75` loads hero-glitch, hero-slogan, hero-circuit,
feature-cards, portfolio-tiles, portfolio-tile-click, form-validator,
progression-bar, fade-overlay, animate-expertise on **every** page, including
posts that use none of them (each script no-ops after querying the DOM). Use
`{% if %}` guards like the existing search-bar guard (line 62), or a
`page.scripts` front-matter list.

### 22. Drop the html5shiv IE<9 conditional
`default.html:12-16`. Dead code in 2026; removing it also lets you remove
`https://cdnjs.cloudflare.com` from the CSP script-src.

---

## P5 — Maintainability / SCSS

### 23. Reduce `!important` usage (58 occurrences)
Counts: `_form.scss` 13, `_portfolio-tiles.scss` 11, `_feature-cards.scss` 9,
`_buttons.scss` 8, `style.scss` 5, others smaller. Fix specificity instead
where practical; keep only justified ones (e.g. inside
`prefers-reduced-motion` overrides) with a comment.

### 24. Data-drive the repeated tile markup
`en/expertise-collection.md` (944 lines) and `en/expertise.md` (428 lines) are
hand-copied `project-tile`/`portfolio-tile` blocks; `en/about.md` (1027 lines)
similar. Move tile content to `_data/` YAML and render with one parameterized
include + `{% for %}`. This is the largest maintainability win but touches a
lot of content — do it as its own PR.

### 25. Config cleanup (`_config.yml`)
- `languages` / `default_lang` / `exclude_from_localization` (lines 11-13) are
  jekyll-polyglot keys; the plugin isn't loaded (and isn't GH Pages-safe), the
  i18n is folder-based. `default_lang` is read by layouts — keep it; delete the
  other two or comment why they stay.
- Dead template leftovers: the whole `footer-links` block except `linkedin`,
  `disqus:` (empty — disqus.html never renders), `google_analytics:` (empty),
  `avatar:` (trailing spaces), `version: v1.2.0`.
- Root `permalink:` (line 16) is shadowed by per-scope post permalinks — fine,
  but note collections.posts `permalink: /:lang/...` uses a nonstandard
  `:lang` placeholder; it's also shadowed. Simplify to avoid confusion.
- `sass.sourcemap` key is ignored by the GH Pages sass converter — harmless,
  optional removal.

### 26. Remove or unpublish the test post
`_posts/en/2025-01-26-test.md` ("Test Article - Template Showcase") is live in
production and appears in the blog grid. Either delete it or add
`published: false`.

### 27. Rename image files with spaces/parentheses
`images/images-posts/2026-01-03-DigitalDelivery-CDE (1).png` / `(2).png` are
referenced from post front matter and end up unencoded in the inline
`blogPosts` JS and future og:image tags. Rename to hyphenated names and update
the two post front-matter references. Note both posts currently share the same
image and the BIMSmith 2024 post points at a 2026 CDE image — likely a
placeholder to replace.

---

## P6 — Static-site security (mostly informational)

### 28. Header expectations vs GitHub Pages reality
- `_headers` (Netlify/Cloudflare format) is **ignored by GitHub Pages** — none
  of the documented headers (HSTS, X-Frame-Options, Permissions-Policy…) are
  actually served. Either accept that (GH Pages does serve HSTS on
  *.github.io but for custom domains only after enforce-HTTPS) or move hosting
  to Cloudflare Pages/Netlify if those headers matter. Don't keep the file as
  false documentation — add a comment in it stating it's aspirational on GH
  Pages.
- In `_includes/meta.html:7`, the CSP `frame-ancestors` directive is ignored
  when delivered via `<meta>` (spec) — clickjacking protection is not actually
  active. Keep the directive only if you move to real headers; otherwise note
  it.
- CSP `'unsafe-inline'` in script-src is currently required by the inline
  scripts and onclick handlers; after task 15 you can consider hashes/nonces —
  low priority for a static blog.
- No secrets found in the repo (Formspree form ID is public by design). Pass.

---

## How to verify (run after fixes)

```bash
# Build locally with the GH Pages gem set
bundle exec jekyll build   # (create Gemfile with `gem "github-pages"` locally; it's gitignored)

# HTML validity (tasks 1, 2, 12)
html5validator --root _site --also-check-css --ignore-re 'trailing slash'

# Broken links, missing alt, feed/sitemap existence (tasks 3, 4, 7, 10)
htmlproofer ./_site --disable-external --allow-hash-href

# SCSS lint (task 23)
npx stylelint "**/*.scss" --config stylelint-config-standard-scss

# Accessibility + performance, both themes (tasks 18, 19, 20, 21)
npx lighthouse https://bimshamans.com/en/home/ --only-categories=accessibility,performance,seo
npx @axe-core/cli https://bimshamans.com/en/home/ https://bimshamans.com/en/blog/

# Metadata spot-check (tasks 8, 9)
curl -s https://bimshamans.com/en/blog/ | grep -E '<title>|og:|canonical|twitter'
```
