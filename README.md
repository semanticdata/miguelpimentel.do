# 📚 MiguelPimentel.do

My personal website built using [Eleventy](https://www.11ty.dev/) with some [Vite](https://vitejs.dev/).

Reference links:

- [Eleventy Plus Vite](https://github.com/matthiasott/eleventy-plus-vite)
- [Eleventy Garden](https://github.com/binyamin/eleventy-garden)
- [elva](https://github.com/scottsweb/elva)
- [Quartz](https://github.com/jackyzha0/quartz)

## Features

- Vite as Middleware in Eleventy Dev Server (uses [eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite/))
- Eleventy build output is post-processed by [Vite](https://vitejs.dev) (with Rollup)
- CSS/Sass post-processing with PostCSS incl. [Autoprefixer](https://github.com/postcss/autoprefixer) and cssnano
- Uses [my own opinionated CSS/Sass structure](https://matthiasott.com/notes/how-i-structure-my-css)
- Critical CSS, generated and inlined via [rollup-plugin-critical](https://github.com/nystudio107/rollup-plugin-critical). The main CSS file is then loaded asynchronously with [Scott Jehl’s `media` loading strategy](https://www.filamentgroup.com/lab/load-css-simpler/) (adds `media="print"` and swaps to `media="all"` once loaded)
- Example implementation of a web font loading strategy ([critical FOFT with preload](https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-preload))
- Basic fluid typography based on [Utopia](https://utopia.fyi)
- Basic dark mode support (using `prefers-color-scheme` and CSS Custom Properties)
- Polyfill for [focus-visible](https://matthiasott.com/notes/focus-visible-is-here)

## Acknowledgements and Inspirations

This project is made possible by these amazing people and projects.

- Andy Bell – [any-bell.co.uk](https://andy-bell.co.uk/)
- Binyamin Aron Green – [Eleventy Garden](https://github.com/binyamin/eleventy-garden)
- Lene Saile – [lenesaile.com](https://www.lenesaile.com/en/)
- Matthias Ott – [matthiasott.com](https://matthiasott.com)
- Max Böck — [Eleventastic](https://github.com/maxboeck/eleventastic)
- Miriam Suzanne – [miriamsuzanne.com](https://www.miriamsuzanne.com)
- Scott Evans – [elva](https://github.com/scottsweb/elva)
- Stephanie Eckles – [11ty Netlify Jumpstart](https://github.com/5t3ph/11ty-netlify-jumpstart)
- Zach Leatherman – [zachleat.com](https://github.com/zachleat/zachleat.com)

## License

© 2024 Miguel Pimentel • [MIT License](LICENSE)
