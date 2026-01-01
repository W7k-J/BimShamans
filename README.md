# BimShamans

Static Jekyll site for BIM Shamans with English and Polish content.

## Requirements
- RubyInstaller 3.2.9-1 with DevKit (x64)
- Bundler (`gem install bundler`)

## First-time setup (Windows)
1. Download RubyInstaller 3.2.9-1 (with DevKit) from rubyinstaller.org and run it with the default options.
2. When the installer finishes, allow it to launch the MSYS2 toolchain setup and let the script install all core components.
3. Close the MSYS2 window when the prompt returns and restart PowerShell.

## Local development
1. Open PowerShell and move into the repo folder: `cd c:\ProjectConfig\BimShamans\BimShamans`
2. Install Bundler if needed: `gem install bundler`
3. Install project gems: `bundle install`
4. Run the site locally: `bundle exec jekyll serve`
5. Open http://127.0.0.1:4000 (or the address printed in the console) in your browser.
6. Press `Ctrl+C` in PowerShell to stop the server when you are done testing.

## Structure notes
- Content lives in language folders (`en`, `pl`) and `_posts/<lang>`.
- Styles are composed in `style.scss` and `_sass/*` partials.
- Scripts sit in `assets/`, e.g. language/theme switchers.

## Content Structure
- Regular pages: `en/` and `pl/` directories
- Blog posts: `_posts/en/` and `_posts/pl/` subdirectories
- All content files need matching `ref` value for language switching
