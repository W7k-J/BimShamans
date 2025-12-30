# BimShamans Agent Guide
## Project overview
- Static Jekyll 4.3 site with bilingual structure; see [README.md](../README.md) for Windows-specific setup notes.
- Root redirect in [index.html](../index.html) sends visitors to the English home; every page must declare the front matter field page.lang to keep navigation translations working.
- Global defaults, localization settings, and translation strings live in [_config.yml](../_config.yml); adjust site.t entries instead of hardcoding UI text.
- Production domain is pinned via [CNAME](../CNAME); keep URLs and asset paths baseurl-aware.
## Build & preview
- Install dependencies with gem install bundler (once) then bundle install; bundler targets Ruby 3.2 per [README.md](../README.md).
- Run bundle exec jekyll serve from the repository root to compile into [_site/](../_site) and host at http://127.0.0.1:4000.
- Do not edit files inside [_site/](../_site); they are regenerated on every serve or build.
- Keep dependencies minimal as in [Gemfile](../Gemfile); add new plugins alongside matching entries in the gems list in [_config.yml](../_config.yml).
## Content authoring
- English pages live in [en/](../en) and Polish in [pl/](../pl); mirror structure and permalinks so language switching stays aligned.
- Posts are split under [_posts/en](../_posts/en) and [_posts/pl](../_posts/pl); keep matching filenames plus front matter ref and permalink values for each pair.
- Use the ref key to link translations; hreflang alternates are assembled in [_layouts/default.html](../_layouts/default.html).
- Navigation labels pull from site.t in [_config.yml](../_config.yml); add new keys there before referencing them in layouts or includes.
## Layout & includes
- [_layouts/default.html](../_layouts/default.html) handles navigation, language and theme toggles, and script injection; reuse it via layout: default unless you need a bespoke shell.
- Section partials live under [_includes/sections](../_includes/sections); they currently embed placeholder styles that should move into Sass when polished.
- Meta tags centralize in [_includes/meta.html](../_includes/meta.html); supply page.excerpt in front matter for SEO-friendly descriptions.
- Root layout loads the decorative plexus background only when a canvas with id plexusCanvas exists, driven by [assets/background-plexus.js](../assets/background-plexus.js).
## Styling
- Global styling compiles from [style.scss](../style.scss); keep the opening triple-dash front matter so Jekyll runs the Sass pipeline.
- Add component partials under [_sass](../_sass) and import them from style.scss instead of embedding large inline style blocks in pages.
- Theme colors and shared tokens live in [_sass/_variables.scss](../_sass/_variables.scss); update CSS custom properties there rather than scattering new values.
- Light and dark logos rely on the selectors in style.scss; include both logo-light and logo-dark assets when swapping imagery.
## JavaScript
- Behavior scripts reside in [assets](../assets) and run globally after DOMContentLoaded; follow the existing feature-detection pattern when adding new files.
- Language switching in [assets/language-EN-PL-switcher.js](../assets/language-EN-PL-switcher.js) expects .language-switcher elements with data-lang buttons; keep markup synchronized with [_layouts/default.html](../_layouts/default.html).
- Theme persistence in [assets/theme-switcher.js](../assets/theme-switcher.js) toggles light and dark classes on documentElement; adjust styling by targeting those classes.
- Collapsible sections in [assets/buttons-collapsible-content.js](../assets/buttons-collapsible-content.js) assume a button.collapsible followed immediately by .collapsible-content; preserve that structure.
## Localization tips
- When creating new pages, duplicate the English file into Polish (and vice versa), update lang, permalink, title, content, and keep ref identical so alternate links generate.
- Keep asset URLs baseurl-aware by prefixing with {{ site.baseurl }} as shown in [_layouts/default.html](../_layouts/default.html) and [en/home.md](../en/home.md).
- Translatable UI strings belong in the site.t map; avoid hardcoding English or Polish labels inside shared templates.
- Monitor encoding in [_includes/sections/hero.html](../_includes/sections/hero.html); maintain clean UTF-8 content and migrate styling into Sass partials when finalizing design.
