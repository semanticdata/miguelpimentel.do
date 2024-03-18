# 📚 MiguelPimentel.do 🦝

> A saturday afternoon at the beach.

![code size](https://img.shields.io/github/languages/code-size/semanticdata/miguelpimentel.do) ![repository size](https://img.shields.io/github/repo-size/semanticdata/miguelpimentel.do) ![commits](https://img.shields.io/github/commit-activity/t/semanticdata/miguelpimentel.do) ![last commit](https://img.shields.io/github/last-commit/semanticdata/miguelpimentel.do) ![website online check](https://img.shields.io/website/https/miguelpimentel.do.svg)

Personal website built with [Eleventy](https://www.11ty.dev/).

## Table of Contents

- [📚 MiguelPimentel.do 🦝](#-miguelpimenteldo-)
  - [Table of Contents](#table-of-contents)
  - [📄 Description](#-description)
  - [🚀 Getting Started](#-getting-started)
    - [☑ Prerequisites](#-prerequisites)
    - [⚙ Installation](#-installation)
  - [✨ Features](#-features)
  - [🗺 Roadmap](#-roadmap)
    - [Formatting and Linting](#formatting-and-linting)
    - [Styles](#styles)
    - [Blog section](#blog-section)
    - [Notes section](#notes-section)
    - [New page layouts](#new-page-layouts)
    - [Markdown](#markdown)
    - [Others](#others)
  - [🎨 Customization](#-customization)
  - [🧬 Quirks](#-quirks)
  - [⛑ Useful Commands](#-useful-commands)
  - [❤ Acknowledgements](#-acknowledgements)
  - [Changelog](#changelog)
  - [© License](#-license)

## 📄 Description

This is my personal website currently built with [Eleventy](https://www.11ty.dev/).

## 🚀 Getting Started

### ☑ Prerequisites

- [Node.js 18](https://github.com/nodejs/node)

### ⚙ Installation

```sh
# 1. Clone repo
git clone https://github.com/semanticdata/miguelpimentel.do.git

# 2. Install dependencies
pnpm install

# 3. Run the project locally
pnpm start
```

## ✨ Features

- [Vite](https://vitejs.dev) as Middleware in Eleventy Dev Server (uses [eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite/))
- Eleventy build output is post-processed by [Vite](https://vitejs.dev) (with Rollup)
- CSS/[Sass](https://github.com/sass/sass) post-processing with [PostCSS](https://github.com/postcss/postcss) including [Autoprefixer](https://github.com/postcss/autoprefixer) and [cssnano](https://github.com/cssnano/cssnano).
- Uses [my own opinionated CSS/Sass structure](https://matthiasott.com/notes/how-i-structure-my-css)
- Critical CSS, generated and inlined via [rollup-plugin-critical](https://github.com/nystudio107/rollup-plugin-critical). The main CSS file is then loaded asynchronously with [Scott Jehl’s `media` loading strategy](https://www.filamentgroup.com/lab/load-css-simpler/) (adds `media="print"` and swaps to `media="all"` once loaded)
- Example implementation of a web font loading strategy ([critical FOFT with preload](https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-preload))
- Basic fluid typography based on [Utopia](https://utopia.fyi)
- Basic dark mode support (using `prefers-color-scheme` and CSS Custom Properties)
- Polyfill for [focus-visible](https://matthiasott.com/notes/focus-visible-is-here)

## 🗺 Roadmap

### Formatting and Linting

- [x] [Prettier](https://prettier.io/)
- [ ] [ESLint](https://github.com/eslint/eslint)

### Styles

- [x] [Sass](https://sass-lang.com/) integration
- [ ] Partial CSS/SCSS refactor
- [ ] Extend fluid typography based on [Utopia](https://utopia.fyi)
- [ ] Extend basic dark mode support

### Blog section

- [x] Blog section layout
- [x] Blog posts layout
- [x] RSS Feed (w/ style via XSL)
- [ ] Tags (including Tag page)
- [ ] Pagination

### Notes section

- [x] Note section layout
- [x] Individual notes layout
- [x] Wikilinks ([Obsidian](https://obsidian.md/) compatible)
- [x] Backlinks
- [x] Floating backlinks previews
- [ ] Floating internal links previews

### New page layouts

- [x] About page
- [x] Journal page
- [x] Uses page
- [x] Now page
- [ ] Meta page

### Markdown

- [x] Syntax highlighting
- [ ] Admonition-style callouts
- [ ] Floating internal link previews

### Others

- [x] Robots.txt
- [x] Sitemap
- [ ] Dark theme
- [ ] Color theme toggle
- [ ] Fluid typography (with [Utopia](https://utopia.fyi))
- [ ] Full text search
- [ ] Table of Contents
- [ ] Graph view
- [ ] Notes explorer (ala Quartz)
- [ ] Recent notes (as highlight section)
- [ ] TailwindCSS
- [ ] DaisyUI
- [ ] Content Security Policy (CSP)
- [ ] Fix incompatibility with [title-case](https://www.npmjs.com/package/title-case) v3. Version 4 breaks the site.

## 🎨 Customization

Add your custom CSS code within `/src/assets/css/_custom.scss`.

## 🧬 Quirks

Only compatible with `"title-case": "^3.0.3",` as `^4.0.0` breaks the site. Will look into it at some point.

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

## ❤ Acknowledgements

This site is based on [Eleventy Plus Vite](https://github.com/matthiasott/eleventy-plus-vite). It would not be possible without these amazing people and their projects:

- [Andy Bell](https://andy-bell.co.uk)
- [Binyamin Aron Green](https://github.com/binyamin)
- [Lene Saile](https://www.lenesaile.com/en)
- [Jacky Zhao](https://github.com/jackyzha0)
- [Matthias Ott](https://matthiasott.com)
- [Zach Leatherman](https://github.com/zachleat/zachleat.com)

## Changelog

We use [Semantic Versioning](https://semver.org/) for releases.

- 0.1.0 (example)
  - Initial release
  - CHANGE:
    - Rename
  - FIX:
    - Crash when calling `pleasedonotcrash()`.
- 0.0.1 (example)
  - Work in progress.

## © License

© 2024 Miguel Pimentel • [MIT License](LICENSE)
