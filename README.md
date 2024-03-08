# 📚 MiguelPimentel.do 🦝

![code size](https://img.shields.io/github/languages/code-size/semanticdata/miguelpimentel.do)
![repository size](https://img.shields.io/github/repo-size/semanticdata/miguelpimentel.do)
![commits](https://img.shields.io/github/commit-activity/t/semanticdata/miguelpimentel.do)
![last commit](https://img.shields.io/github/last-commit/semanticdata/miguelpimentel.do)
![is website up?](https://img.shields.io/website/https/miguelpimentel.do.svg)

My personal website built using [Eleventy](https://www.11ty.dev/) with some [Vite](https://vitejs.dev/) and a few other things under the hood.

## ✨ Features

-   Vite as Middleware in Eleventy Dev Server (uses [eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite/))
-   Eleventy build output is post-processed by [Vite](https://vitejs.dev) (with Rollup)
-   CSS/Sass post-processing with PostCSS incl. [Autoprefixer](https://github.com/postcss/autoprefixer) and cssnano
-   Uses [my own opinionated CSS/Sass structure](https://matthiasott.com/notes/how-i-structure-my-css)
-   Critical CSS, generated and inlined via [rollup-plugin-critical](https://github.com/nystudio107/rollup-plugin-critical). The main CSS file is then loaded asynchronously with [Scott Jehl’s `media` loading strategy](https://www.filamentgroup.com/lab/load-css-simpler/) (adds `media="print"` and swaps to `media="all"` once loaded)
-   Example implementation of a web font loading strategy ([critical FOFT with preload](https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-preload))
-   Basic fluid typography based on [Utopia](https://utopia.fyi)
-   Basic dark mode support (using `prefers-color-scheme` and CSS Custom Properties)
-   Polyfill for [focus-visible](https://matthiasott.com/notes/focus-visible-is-here)

## 🛠 Enhancements and Additions

-   Blog section (w/ new blog and post layouts)
    -   RSS Feed (w/ style via XSL)
-   Notes section (w/ new notes layout)
    -   Wikilinks ([Obsidian](https://obsidian.md/) compatible)
    -   Backlinks
    -   Hover previews (backlinks)
-   New Journal, About, Uses, and Now pages.
-   Partial CSS/SCSS refactor.
-   [Prettier](https://prettier.io/) and new scripts to format entire codebase.

## ⛑ Useful Commands

```sh
# Install dependencies
pnpm install

# Update dependencies
pnpm update

# Start local dev server
pnpm start

# Check formatting w/ Prettier
pnpm run check

# Fix formatting w/ Prettier
pnpm run format
```

## 🎨 Customization

### Stylesheets

Add your custom CSS code within `/src/assets/css/_custom.scss`.

## 🧬 Quirks

Only compatible with `"title-case": "^3.0.3",` as `^4.0.0` breaks the site. Will look into it at some point.

## ❤ Acknowledgements and Inspirations

This project is made possible by these amazing people and projects:

-   Andy Bell – [any-bell.co.uk](https://andy-bell.co.uk/)
-   Binyamin Aron Green – [Eleventy Garden](https://github.com/binyamin/eleventy-garden)
-   Lene Saile – [lenesaile.com](https://www.lenesaile.com/en/)
-   Jacky Zhao – [Quartz](https://github.com/jackyzha0/quartz)
-   Matthias Ott – [matthiasott.com](https://matthiasott.com) – [Eleventy Plus Vite](https://github.com/matthiasott/eleventy-plus-vite)
-   Max Böck — [Eleventastic](https://github.com/maxboeck/eleventastic)
-   Miriam Suzanne – [miriamsuzanne.com](https://www.miriamsuzanne.com)
-   Scott Evans – [elva](https://github.com/scottsweb/elva)
-   Stephanie Eckles – [11ty Netlify Jumpstart](https://github.com/5t3ph/11ty-netlify-jumpstart)
-   Zach Leatherman – [zachleat.com](https://github.com/zachleat/zachleat.com)

## © License

© 2024 Miguel Pimentel • [MIT License](LICENSE)
