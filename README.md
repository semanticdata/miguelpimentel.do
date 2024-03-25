# 🦝 MiguelPimentel.do

> A saturday afternoon at the beach. 🏖

## 📑 Table of Contents

- [🦝 MiguelPimentel.do](#-miguelpimenteldo)
  - [📑 Table of Contents](#-table-of-contents)
  - [📄 Description](#-description)
  - [⚡ Quick start](#-quick-start)
  - [✨ Features](#-features)
  - [🛠️ Technology](#️-technology)
  - [🗺 Roadmap](#-roadmap)
  - [🔎 References](#-references)
  - [💜 Acknowledgements](#-acknowledgements)
  - [© License](#-license)

## 📄 Description

This repository contains the source code for my personal website and blog. It is currently built with [Astro](https://astro.build/).

<!-- > I'm a big fan of Astro, as it combines two things I really like: A component-based approach and zero client-side JavaScript! This template is pretty opinionated, as it's composed how I would set up my projects. But sharing is caring, so feel free to use it for your own projects or customize it. After cloning it, run `npm install` or `pnpm install` to install all necessary dependencies. -->

## ⚡ Quick start

**1. Clone repo**

```bash
git clone https://github.com/semanticdata/astro-naut.git
```

**2. Install dependencies**

```sh
pnpm install
```

**3. Run the project locally**

```sh
pnpm start
```

## ✨ Features

### Absolute imports

Tired of imports looking like this?

```javascript
import Layout from "../../../../../layouts/Layout.astro"
```

Me too, which is why I'm using absolute imports to make it look nice and clean:

```javascript
import Layout from "@layouts/Layout.astro"
```

### CSS reset

I never start a project without Andy Bell's (more) modern CSS reset! It lays the foundation for what I'm about to do with Utopia's fluid responsive design. Click here for more info about these settings: [A (more) modern CSS reset](https://andy-bell.co.uk/a-more-modern-css-reset/)

### Custom fonts

Using system fonts is a safe and performant way to add some identity to your typography, but let's be honest: They're overused and quite boring. Which is why I like to use custom fonts, usually one for headlines and one for body text. You can of course always change them to Lobster or Papyrus, I won't judge.

### Fluid design

I need you to sit down for this one. You don't really need breakpoints to define your layout for mobile, tablet and desktop devices. How could you even anticipate what device will be used to gaze upon your beautiful website?

Wouldn't make it more sense if you had a fluid, yet robust design which works for every viewport? Which requires less code and no `breakpoints.css` nearing 1000 lines of code? Let me introduce you to [Utopia](https://utopia.fyi/), which is used to generate adaptive font sizes and spacing.

You should also check out [The ideal viewport doesn’t exist](https://viewports.fyi/) for a deep-dive into this topic. And while you're at it, have a look at [Be the browser’s mentor, not its micromanager.](https://buildexcellentwebsit.es/) as well.

### Pre-commit hooks

Committing to something can sometimes take a lot of effort. Committing code is no exception, but at least here we can pull out the safety net to soften our fall in case we made a mistake. When committing your changes, it's running `npm run build`, which will look for the following things in your project before building it:

- Errors
- Warnings
- Hints

When your pipeline is free of errors AND the build was successful, it'll commit your changes. You're welcome. 🤗

### Preference detection

This template automatically changes the theme based on your operating settings by utilizing `prefers-color-scheme`. It also checks if you prefer reduced motion via `prefers-reduced-motion`. Look and behold, the power of CSS!

### Prettier

I don't know about you, but if my code is not nicely formatted after hitting save, I'm starting to feel very weird. Which is why this comes with a Prettier configuration, in case you're using it. Or a you one of those people who do this manually?!

### Search engine optimization (SEO)

Predefined values for improved SEO can be found in `Layout.astro`. These settings have been my reliable companion for a couple of years now and I put a lot of research, work and testing into it.

### Security headers

Better safe than sorry, am I right? There are multiple ways to add security headers to your website and I decided to store them in a `vercel.json` file, cause this website was deployed to (you guessed it) [Vercel](https://vercel.com/). It contains the following headers, feel free to adjust them to your needs:

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

### Usability

I've added a bunch of handy utilities which will not only improve usability, but accessibility as well. Here's a list of them:

- "Back to top" button
- External link (showing icon)
- Improved focus behaviour (thanks to [Stephanie Eckles](https://css-tricks.com/standardizing-focus-styles-with-css-custom-properties/) & [Adam Argyle](https://codepen.io/argyleink/pen/JjEzeLp))
- Skip link

## 🛠️ Technology

The site uses various technologies cobbled together. Here's some of them:

- [Astro](https://astro.build/): website build tool for the modern web — powerful developer experience meets lightweight output.
- [Prettier](https://github.com/prettier/prettier): an opinionated code formatter.
- [Sass](https://github.com/sass/sass): makes CSS fun!
- [TypeScript](https://github.com/microsoft/TypeScript): superset of JavaScript that compiles to clean JavaScript output.
- [Husky](https://github.com/typicode/husky): Git hooks made easy.

## 🗺 Roadmap

List of things I'm considering doing to/with the site. Here's a [good resource](https://github.com/withastro/astro/blob/main/examples/component/README.md) on examples for reference.

- [x] About page
- [x] Blog section
- [x] Notes section
- [ ] Journal page
- [ ] Uses page
- [ ] Now page
- [ ] Meta page
- [ ] 404 error page
- [ ] Projects page
- [ ] Robots.txt
- [ ] RSS feed(s)
- [ ] Sitemap
- [ ] Tags/Categories
- [x] Fluid typography (with [Utopia](https://utopia.fyi))

### Deployments

- [x] Vercel integration (`vercel.json`)
- [x] Netlify integration (`netlify.toml`)
- [x] GitHub Pages integration (`.github/workflows/deploy.yml`)
- [x] Available via [StackBlitz](https://stackblitz.com/github/semanticdata/astro-naut/tree/main/)
- [x] Available via [CodeSandbox](https://codesandbox.io/p/devbox/github/semanticdata/miguelpimentel.do/tree/main)
- [ ] Available via GitHub Codespaces

### Markdown Specific

- [ ] Admonition-style callouts
- [ ] Recent posts/notes/projects
- [ ] Syntax Highlighting

### Components

- [ ] Table of Contents
- [ ] Card view (used in the Notes section)
- [ ] Theme toggle

<!-- [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/semanticdata/astro-naut/tree/main/) [![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/semanticdata/astro-naut/tree/main) -->

<!-- [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json) -->

## 🔎 References

```css
:root {
  --accent: 136, 58, 234;
  --accent-light: 224, 204, 250;
  --accent-dark: 49, 10, 101;
  --accent-gradient: linear-gradient(
    45deg,
    rgb(var(--accent)),
    rgb(var(--accent-light)) 30%,
    white 60%
  );
}
html {
  font-family: system-ui, sans-serif;
  background: #13151a;
  background-size: 224px;
}
code {
  font-family:
    Menlo,
    Monaco,
    Lucida Console,
    Liberation Mono,
    DejaVu Sans Mono,
    Bitstream Vera Sans Mono,
    Courier New,
    monospace;
}
.astro-a {
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translatex(-50%);
  width: 220px;
  height: auto;
  z-index: -1;
}
.text-gradient {
  background-image: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400%;
  background-position: 0%;
}
.instructions {
  margin-bottom: 2rem;
  border: 1px solid rgba(var(--accent-light), 25%);
  background: linear-gradient(
    rgba(var(--accent-dark), 66%),
    rgba(var(--accent-dark), 33%)
  );
  padding: 1.5rem;
  border-radius: 8px;
}
.instructions code {
  font-size: 0.8em;
  font-weight: bold;
  background: rgba(var(--accent-light), 12%);
  color: rgb(var(--accent-light));
  border-radius: 4px;
  padding: 0.3em 0.4em;
}
.instructions strong {
  color: rgb(var(--accent-light));
}
.link-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
  gap: 2rem;
  padding: 0;
}
.link-card {
  list-style: none;
  display: flex;
  padding: 1px;
  background-color: #23262d;
  background-image: none;
  background-size: 400%;
  border-radius: 7px;
  background-position: 100%;
  transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.link-card > a {
  width: 100%;
  text-decoration: none;
  line-height: 1.4;
  padding: calc(1.5rem - 1px);
  border-radius: 8px;
  color: white;
  background-color: #23262d;
  opacity: 0.8;
}
h2 {
  margin: 0;
  font-size: 1.25rem;
  transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
p {
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.link-card:is(:hover, :focus-within) {
  background-position: 0;
  background-image: var(--accent-gradient);
}
.link-card:is(:hover, :focus-within) h2 {
  color: rgb(var(--accent-light));
}
```

## 💜 Acknowledgements

I'd like to take the time to recognize the people and projects that made this one possible.

Thank you [Steve Frenzel](https://stevefrenzel.dev/), creator of [Astro-naut](https://github.com/stevefrenzel/astro-naut)—which this project is based on.

## © License

© 2024 Miguel Pimentel • [MIT License](LICENSE)
