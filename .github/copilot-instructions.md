# BimShamans Agent Guide
## Architecture snapshot
- Static Jekyll 4.3 site with English and Polish parity; bundler targets Ruby 3.2 per [README.md](../README.md).
- Root [index.html](../index.html) redirects to the English home; every routed page must set page.lang so navigation in [_layouts/default.html](../_layouts/default.html) highlights correctly and alternate links render.
- Localization strings, nav labels, and misc UI copy live in site.t inside [_config.yml](../_config.yml); extend that map instead of hardcoding text in layouts or includes.
- Production domain is fixed in [CNAME](../CNAME); keep URLs and asset paths baseurl-aware so both local preview and production work.
## Build and preview
- First-time setup: run gem install bundler, then bundle install in the repository root; day-to-day preview uses bundle exec jekyll serve (outputs into [_site](../_site)).
- Never edit [_site](../_site); that directory is regenerated on each serve or build.
- Keep the dependency list minimal: if you add a plugin, mirror it in [Gemfile](../Gemfile) and the gems list inside [_config.yml](../_config.yml).
## Content and localization
- Markdown pages live under [en](../en) and [pl](../pl); posts mirror under [_posts/en](../_posts/en) and [_posts/pl](../_posts/pl).
- Maintain mirrored filenames and shared ref values so [_layouts/default.html](../_layouts/default.html) can surface hreflang alternates; align permalinks to /en/... and /pl/....
- Front matter should include layout (defaults to default), lang, permalink, title, ref, and optionally excerpt for SEO meta pulled by [_includes/meta.html](../_includes/meta.html).
- Use {{ site.baseurl }} when linking assets or includes so generated URLs respect both localhost and production domain.
## Layout and scripts
- [_layouts/default.html](../_layouts/default.html) renders header, language/theme toggles, post listings, analytics include, and only injects alternate links when page.ref exists.
- Global scripts in [assets](../assets) expect consistent markup: language switcher buttons need data-lang, the theme toggle is the checkbox with id theme-switcher, and collapsible sections rely on a button followed by its .collapsible-content sibling.
- The hero partial at [_includes/sections/hero.html](../_includes/sections/hero.html) ships with inline placeholder styles and lazy loads [assets/background-plexus.js](../assets/background-plexus.js) when a canvas with id plexusCanvas is present.
- Additional scripts follow the same pattern as [assets/hero-glitch.js](../assets/hero-glitch.js): they run after DOMContentLoaded and must guard against missing DOM nodes.
## Styling
- [style.scss](../style.scss) is the Sass entry point; keep the opening triple-dash front matter so Jekyll processes the file.
- Shared tokens and theme colors are centralized in [_sass/_variables.scss](../_sass/_variables.scss); extend styling through partials under [_sass](../_sass) and import them in style.scss instead of leaving large inline style blocks.
- Theme switching toggles light-theme and dark-theme classes on documentElement; new components should read CSS variables defined in those scopes to stay in sync.
## Conventions and pitfalls
- Navigation assumes four top-level pages (home, blog, about, contact); adding one requires updating the markup in [_layouts/default.html](../_layouts/default.html) plus translations in [_config.yml](../_config.yml).
- JavaScript runs after DOMContentLoaded; wrap new logic in guards or feature checks so pages without the target markup do not throw errors.
- Asset paths in [images](../images) stay lowercase with hyphen separators; provide both light and dark logo variants when swapping graphics because layout selectors expect both.
- Keep English and Polish content synchronized to avoid orphaned hreflang alternates and ensure language switching always finds a counterpart.
