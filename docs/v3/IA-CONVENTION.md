# Repository information architecture

The rule: **everything scoped to one page lives in that page's own folder; everything genuinely shared stays shared.** Someone new should find all of Main, or all of a given brief, in one place.

## Layout

```
index.html                          Home page (must stay at repo root)
assets/
  css/
    base/         tokens, reset             shared, every page
    shared/       nav, footer, ticker, …    shared, every page
    pages/home/   hero, work, capabilities  Home only
  js/
    core/         i18n engine               shared, every page
    pages/home/   nav, work, carousel, …    Home only
    main.js       Home entry point (ES module)
  i18n/
    en.json  es.json                        CHROME dict, shared, every page
  img/  logos/                              shared assets
work/
  <brief-slug>/
    index.html                              the page, self-contained
    i18n/<slug>.{en,es}.json                BODY dict, page-scoped
    img/                                    page-scoped images
    docs/                                   that brief's copy + spec
docs/
  v1/ v2/ v3/                               versioned governance
  briefs-v0/                                Gate 1 source drafts
  parking-lot.md
```

## Two paths that cannot move

Both i18n loaders resolve their dictionary URLs relative to the page that runs them, and both hardcode the depth:

- `assets/js/core/i18n.js` fetches `assets/i18n/{lang}.json` — correct only for a page at the repo root
- each brief page fetches `../../assets/i18n/{lang}.json` — correct only for a page at depth 2

So **`index.html` stays at the repo root and `assets/i18n/{en,es}.json` stays where it is.** Moving either breaks SwapLang on every page at once. Any future page must sit at `work/<slug>/` (depth 2) to inherit the working `../../` chrome path, or bring its own base.

## i18n split

Chrome strings (nav, footer, language toggle) live once in the shared root dictionaries. Page content lives in that page's own BODY dictionary, colocated with the page. A page merges chrome then body, body winning on key collision.

## Invariants

- **Relative paths only.** The site serves from `/designops/`; a leading-slash path resolves against the domain root and 404s.
- **Zero build.** No bundler, no root `package.json`, no build step for site chrome or pages. `work/yape-trust-verify/` is a self-contained sub-app with its own checked-in build and is exempt.
- **CSS link order is load-bearing.** The cascade depends on it; preserve it across any move.
- New pages are created directly in this structure rather than moved into it later.
