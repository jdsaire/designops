# design-system/

The Design System page, served at `/design-system/` and linked from the Lab menu, the phone menu and the footer: the system behind this site, shown with its own parts. It runs in atomic order (atoms, molecules, organisms, templates), then dark vs light, accessibility, writing per language and information architecture, navigated by the briefs' index (a side column from 768, a select below). It shows only parts a live page uses, in both themes. Every specimen is the shipped component with its own stylesheet, and every token value is read from the running stylesheet, so the page can't drift from the site.

| File | Who it's for |
|---|---|
| [`index.html`](index.html) | Anyone changing the page's markup. Contact's opening, then the index and eight sections, each an eyebrow, a hero title, a lede and its specimens. It loads its script from [`../assets/js/pages/design-system/`](../assets/js/pages/design-system/README.md) and its layout from [`../assets/css/pages/design-system/`](../assets/css/pages/design-system/README.md) |
| [`i18n/design-system.en.json`](i18n/design-system.en.json), [`i18n/design-system.es.json`](i18n/design-system.es.json) | Anyone changing the page's copy. Same keys in both languages, in page order. The specimens reuse the navigation's brief tags and the privacy-choices strings from the global pair; the writing section quotes the latter in both languages |
