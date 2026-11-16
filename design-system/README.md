# design-system/

The Design System page, served at `/design-system/` and linked from the Lab menu, the phone menu and the footer: the system behind this site, shown with its own parts. It shows only components a live page uses (the CTA, the dropdown, the overlay, the forms) and the four token roles, in both themes. Every specimen is the shipped component with its own stylesheet, and every token value is read from the running stylesheet, so the page can't drift from the site.

| File | Who it's for |
|---|---|
| [`index.html`](index.html) | Anyone changing the page's markup. Contact's opening, then four sections (Foundations, Actions, Menus and dialogs, Forms). The forms specimen sits inside `id="contact"` so Contact's styles apply, with no form element, no action and no submit control. It loads its script from [`../assets/js/pages/design-system/`](../assets/js/pages/design-system/README.md) and its layout from [`../assets/css/pages/design-system/`](../assets/css/pages/design-system/README.md) |
| [`i18n/design-system.en.json`](i18n/design-system.en.json), [`i18n/design-system.es.json`](i18n/design-system.es.json) | Anyone changing the page's copy. Same keys in both languages, in page order. The dropdown specimen reuses the navigation's brief tags and the forms specimen the consent line from the global pair |
