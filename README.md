# 🦝 MiguelPimentel.do

> A saturday afternoon at the beach.

![code size](https://img.shields.io/github/languages/code-size/semanticdata/miguelpimentel.do) ![repository size](https://img.shields.io/github/repo-size/semanticdata/miguelpimentel.do) ![commits](https://img.shields.io/github/commit-activity/t/semanticdata/miguelpimentel.do) ![last commit](https://img.shields.io/github/last-commit/semanticdata/miguelpimentel.do) ![website online check](https://img.shields.io/website/https/miguelpimentel.do.svg)

Personal website built with [Eleventy](https://www.11ty.dev/) and [Vite](https://vitejs.dev/).

## Table of Contents

- [🦝 MiguelPimentel.do](#-miguelpimenteldo)
  - [Table of Contents](#table-of-contents)
  - [📄 Description](#-description)
  - [🚀 Getting Started](#-getting-started)
    - [☑ Prerequisites](#-prerequisites)
    - [⚙ Installation](#-installation)
  - [✨ Features](#-features)
  - [🗺 Roadmap](#-roadmap)
    - [Styles](#styles)
    - [Sections](#sections)
    - [New pages](#new-pages)
    - [Markdown](#markdown)
    - [Sitewide](#sitewide)
    - [Under Consideration](#under-consideration)
  - [🎨 Customization](#-customization)
  - [🧬 Quirks](#-quirks)
  - [⛑ Useful Commands](#-useful-commands)
  - [🛠️ Technology](#️-technology)
  - [❤ Acknowledgements](#-acknowledgements)
  - [© License](#-license)

## 📄 Description

This repository holds the source code for my personal website—currently built with [Eleventy](https://www.11ty.dev/).

I'm trying to learn some [CI/CD](https://www.redhat.com/en/topics/devops/what-is-ci-cd) by deploying this project to all these places:

- [Vercel](https://miguelpimentel.do/) (Production)
- [GitHub Pages](https://semanticdata.github.io/miguelpimentel.do/)

## 🚀 Getting Started

### ☑ Prerequisites

- [Node.js 18](https://github.com/nodejs/node)

### ⚙ Installation

**1. Clone repo**

```sh
git clone https://github.com/semanticdata/miguelpimentel.do.git
```

**2. Install dependencies**

```sh
pnpm install
```

**3. Run the project locally**

```sh
pnpm start
```

or, all of the above:

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

- [x] [Prettier](https://prettier.io/)
- [x] Robots.txt
- [x] Sitemap
- [ ] [ESLint](https://github.com/eslint/eslint)
- [ ] Full text search
- [ ] Graph view
- [ ] Content Security Policy (CSP)
- [ ] Fix incompatibility with [title-case](https://www.npmjs.com/package/title-case) v3. Version 4 breaks the site.

### Styles

- [x] [Sass](https://sass-lang.com/) integration
- [ ] Partial CSS/SCSS refactor
- [ ] Extend fluid typography based on [Utopia](https://utopia.fyi)
- [ ] Extend basic dark mode support
- [ ] Color theme toggle

### Sections

- [x] Blog section layout
- [x] Blog posts layout
- [x] RSS Feed (w/ style via XSL)
- [x] Note section layout
- [x] Individual notes layout
- [ ] Tags (including Tag / Tags page)
- [ ] Pagination
- [ ] Notes explorer (ala Quartz)
- [ ] Recent notes (as highlight section)

### New pages

- [x] About page
- [x] Journal page
- [x] Uses page
- [x] Now page
- [x] Meta page

### Markdown

- [x] Syntax highlighting
- [x] Wikilinks ([Obsidian](https://obsidian.md/) compatible)
- [x] Backlinks
- [x] Floating backlinks previews
- [ ] Floating internal link previews
- [ ] Admonition-style callouts
- [ ] Table of Contents

### Sitewide

### Under Consideration

- [ ] TailwindCSS
- [ ] DaisyUI

<!--
| Feature | Status |
| --- | --- |
| **Formatting and Linting** | ⏳ |
| [Prettier](https://prettier.io/) | ⏳ |
| [ESLint](https://github.com/eslint/eslint) | ⏳ |
| **Styles** | ⏳ |
| [Sass](https://sass-lang.com/) integration | ⏳ |
| Partial CSS/SCSS refactor | ⏳ |
| Extend fluid typography based on [Utopia](https://utopia.fyi) | ⏳ |
| Extend basic dark mode support | ⏳ |
| **Blog section** | ⏳ |
| Blog section layout | ⏳ |
| Blog posts layout | ⏳ |
| RSS Feed (w/ style via XSL) | ⏳ |
| Tags (including Tag page) | ⏳ |
| Pagination | ⏳ |
| **Notes section** | ⏳ |
| Note section layout | ⏳ |
| Individual notes layout | ⏳ |
| Wikilinks ([Obsidian](https://obsidian.md/) compatible) | ⏳ |
| Backlinks | ⏳ |
| Floating backlinks previews | ⏳ |
| Floating internal links previews | ⏳ |
| **New page layouts** | ⏳ |
| About page | ⏳ |
| Journal page | ⏳ |
| Uses page | ⏳ |
| Now page | ⏳ |
| Meta page | ⏳ |
| **Markdown** | ⏳ |
| Syntax highlighting | ⏳ |
| Admonition-style callouts | ⏳ |
| Floating internal link previews | ⏳ |
| **Others** | ⏳ |
| Robots.txt | ⏳ |
| Sitemap | ⏳ |
| Dark theme | ⏳ |
| Color theme toggle | ⏳ |
| Fluid typography (with [Utopia](https://utopia.fyi)) | ⏳ |
| Full text search | ⏳ |
| Table of Contents | ⏳ |
| Graph view | ⏳ |
| Notes explorer (ala Quartz) | ⏳ |
| Recent notes (as highlight section) | ⏳ |
| TailwindCSS | ⏳ |
| DaisyUI | ⏳ |
| Content Security Policy (CSP) | ⏳ |
| Fix incompatibility with [title-case](https://www.npmjs.com/package/title-case) v3. Version 4 breaks the site. | ⏳ |

- ✅ = Ready to use
- ⏳ = In progress
-->

## 🎨 Customization

Add your custom CSS code within `/src/assets/css/_custom.scss`.

## 🧬 Quirks

Only compatible with `"title-case": "^3.0.3",` as `^4.0.0` breaks the site. Will look into it at some point.

## ⛑ Useful Commands

**Install dependencies**

```sh
pnpm install
```

**Update dependencies**

```sh
pnpm update
```

**Start local dev server**

```sh
pnpm start
```

**Check formatting w/ Prettier**

```sh
pnpm run check
```

**Fix formatting w/ Prettier**

```sh
pnpm run format
```

## 🛠️ Technology

The site uses various technologies cobbled together. Some of those are:

- [Eleventy](https://www.11ty.dev/): a static site generator with a rich feature set for fetching data, composing layouts, and inserting content with "shortcodes."

- [Vite](https://vitejs.dev/): a bundler that takes the boilerplate out of your set up. It'll compile JS component frameworks, handle CSS preprocessors with little-to-no config (say, SCSS and PostCSS), and show dev changes on-the-fly using hot module replacement (HMR).

## ❤ Acknowledgements

This site is based on [Eleventy Plus Vite](https://github.com/matthiasott/eleventy-plus-vite).

It would not be possible without these amazing people and their projects:

- [Andy Bell](https://andy-bell.co.uk)
- [Binyamin Aron Green](https://github.com/binyamin)
- [Lene Saile](https://www.lenesaile.com/en)
- [Jacky Zhao](https://github.com/jackyzha0)
- [Matthias Ott](https://matthiasott.com)
- [Zach Leatherman](https://github.com/zachleat/zachleat.com)

## © License

© 2024 Miguel Pimentel • [MIT License](LICENSE)
