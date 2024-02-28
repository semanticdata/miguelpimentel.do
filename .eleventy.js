// Organized by ChatGPT.
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const EleventyPluginNavigation = require('@11ty/eleventy-navigation');
const EleventyPluginRss = require('@11ty/eleventy-plugin-rss');
const EleventyPluginSyntaxhighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite');

const rollupPluginCritical = require('rollup-plugin-critical').default;

const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const shortcodes = require('./utils/shortcodes.js');

const {resolve} = require('path');

module.exports = function (eleventyConfig) {
    // Configuration
    eleventyConfig.setServerPassthroughCopyBehavior('copy');
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.setQuietMode(true);

    // Watch targets
    eleventyConfig.addWatchTarget('**/*.(css|scss|js|njk|md)');

    // Plugins
    eleventyConfig.addPlugin(EleventyPluginNavigation);
    eleventyConfig.addPlugin(EleventyPluginRss);
    eleventyConfig.addPlugin(EleventyPluginSyntaxhighlight);
    eleventyConfig.addPlugin(EleventyVitePlugin, {
        tempFolderName: '.11ty-vite',
        viteOptions: {
            publicDir: 'public',
            clearScreen: false,
            server: {
                mode: 'development',
                middlewareMode: true,
            },
            appType: 'custom',
            assetsInclude: ['**/*.xml', '**/*.txt'],
            build: {
                mode: 'production',
                sourcemap: 'true',
                manifest: true,
                rollupOptions: {
                    output: {
                        assetFileNames: 'assets/css/main.[hash].css',
                        chunkFileNames: 'assets/js/[name].[hash].js',
                        entryFileNames: 'assets/js/[name].[hash].js',
                    },
                    plugins: [
                        rollupPluginCritical({
                            criticalUrl: './_site/',
                            criticalBase: './_site/',
                            criticalPages: [
                                {uri: 'index.html', template: 'index'},
                                {
                                    uri: 'posts/index.html',
                                    template: 'posts/index',
                                },
                                {uri: '404.html', template: '404'},
                            ],
                            criticalConfig: {
                                inline: true,
                                dimensions: [
                                    {height: 900, width: 375},
                                    {height: 720, width: 1280},
                                    {height: 1080, width: 1920},
                                ],
                                penthouse: {
                                    forceInclude: [
                                        '.fonts-loaded-1 body',
                                        '.fonts-loaded-2 body',
                                    ],
                                },
                            },
                        }),
                    ],
                },
            },
        },
    });

    // Filters
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName]);
    });

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        eleventyConfig.addTransform(transformName, transforms[transformName]);
    });

    // Shortcodes
    Object.keys(shortcodes).forEach((shortcodeName) => {
        eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName]);
    });
    eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

    // Markdown Configuration
    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
    }).use(markdownItAnchor, {
        slugify: eleventyConfig.getFilter('slug'),
    });

    // Layouts
    eleventyConfig.addLayoutAlias('base', 'base.njk');
    eleventyConfig.addLayoutAlias('post', 'post.njk');
    eleventyConfig.addLayoutAlias('page', 'page.njk');
    eleventyConfig.addLayoutAlias('notes', 'notes.njk');

    // Copy/pass-through files
    eleventyConfig.addPassthroughCopy('src/assets/css');
    eleventyConfig.addPassthroughCopy('src/assets/js');

    // Markdown Transform
    const md = markdownIt({
        html: true,
        linkify: true,
        typographer: true,
    }).use(function (md) {
        md.linkify.add('[[', {
            validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
            normalize: (match) => {
                const parts = match.raw.slice(2, -2).split('|');
                parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, '');
                match.text = (parts[1] || parts[0]).trim();
                match.url = `/notes/${parts[0].trim()}/`;
            },
        });
    });

    // Markdown Filter
    eleventyConfig.addFilter('markdownify', (string) => {
        return md.render(string);
    });

    // Markdown Library
    eleventyConfig.setLibrary('md', markdownLibrary);

    // Configuration
    return {
        templateFormats: ['md', 'njk', 'html'],
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            layouts: 'layouts',
            data: '_data',
        },
    };
};
