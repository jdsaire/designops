# assets/js/

The site's scripts, as ES modules. Main, About and Contact each start from one entry file that imports what the page needs; the four briefs import the core modules from an inline script.

| File | Who it's for |
|---|---|
| [`main.js`](main.js) | Main's entry: it starts the language and theme engines, the navigation and Main's own features |
| [`core/`](core/README.md) | Anyone changing what every page runs: languages, theme, paths, navigation, progress, decoration |
| [`pages/`](pages/README.md) | Anyone changing one page's behaviour |
