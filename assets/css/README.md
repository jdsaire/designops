# assets/css/

The site's stylesheets, in three layers. Each page links them in a fixed order, and the order matters: later files rely on what earlier ones set.

| File | Who it's for |
|---|---|
| [`base/`](base/README.md) | Anyone changing a design token, the reset or the typeface. Loaded first |
| [`shared/`](shared/README.md) | Anyone changing a component more than one page uses: navigation, footer, decoration, the briefs' charts |
| [`pages/`](pages/README.md) | Anyone changing one page's own styles |

The four briefs keep their page styles inline in their own `index.html`; see [`../../work/`](../../work/README.md).
