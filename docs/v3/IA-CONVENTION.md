# Repository information architecture

The rule: **everything scoped to one page lives in that page's own folder; everything genuinely shared stays shared.** Someone new should find all of Main, or all of a given brief, in one place.

Written for Wave 6 (`docs/v3/`), refreshed in PR #44 to match the repository as it stands. Its path stays put because other records cite it.

## Layout

```
index.html                          Main (must stay at the repo root)
i18n/main.{en,es}.json              Main's own dictionaries: the root is Main's page folder
logos/                              the site mark in its states (favicon and header logo)
about/   contact/                   one folder per page: index.html, i18n/, img/ where it has images
assets/
  css/   base/ shared/ pages/       tokens and reset · nav, footer, carousels, decoration · per page
  js/    core/ pages/ main.js       i18n engine, paths, nav · per page · Main's entry point (ES module)
  i18n/  en.json es.json            GLOBAL dictionaries, every page
         briefs/                    REGIONAL dictionaries the four briefs share (interface labels, tags)
  img/  fonts/  docs/               shared images · the Archivo face · the CVs
work/
  <brief-slug>/
    index.html                      the brief, self-contained (inline styles and scripts)
    i18n/<name>.{en,es}.json        LOCAL dictionaries, page-scoped
    img/                            page-scoped images
    docs/                           that brief's copy and spec, where it has them (Brief 02)
  <retired-slug>/index.html         a stub that forwards a retired address (see work/README.md)
tools/                              checks anyone can run: parity, links, orphans, order (Python 3)
docs/
  v1/ v2/ v3/ v4/                   records by the iteration that wrote them; paths never move
  briefs-v0/  parking-lot.md        Gate 1 drafts · ideas set aside (frozen)
CHANGELOG.md  DICTIONARIES.md       every merged pull request · every dictionary pair and its counts
```

## Two paths that cannot move

Both i18n loaders build their dictionary URLs from the page's depth:

- `assets/js/core/i18n.js` (Main, About, Contact) fetches `assets/i18n/{lang}.json` behind the prefix `assets/js/core/paths.js` derives from the page's `data-nav-depth`
- each brief fetches `../../assets/i18n/{lang}.json`, correct only for a page at depth 2

So **`index.html` stays at the repo root and `assets/i18n/{en,es}.json` stays where it is.** Moving either breaks the language switch on every page at once. A new page sits at `<slug>/` (depth 1, like About) or `work/<slug>/` (depth 2, like the briefs) and declares its depth.

## Two exceptions to the layout rule, kept on purpose

- **`i18n/` at the root** holds Main's own dictionaries. The root is Main's page folder, so this is the rule applied, not broken.
- **`logos/` at the root** holds the site mark. Main, About and Contact reference it 26 times between them (favicon and header). Moving it would touch every head for no reader gain.

## Slugs and retired addresses

- A brief's slug names the work in neutral terms, never a third party's brand (Brief 02 became `trust-verify-brief/` in PR #44).
- GitHub Pages has no server-side redirect. A brief that moves leaves a stub at its old address (meta refresh, canonical to the new address, `noindex, follow`), and the stub never moves. The list is in [`../../work/README.md`](../../work/README.md).

## READMEs

A folder has a README when a reader chooses something inside it. Leaf data folders (`i18n/`, `img/`) and stubs are described by their parent's README. The root [`README.md`](../../README.md) says who built the site and where things live; [`../README.md`](../README.md) indexes the records; [`../../CHANGELOG.md`](../../CHANGELOG.md) lists the pull requests.

## i18n split

Three levels, a lower one never repeating a key from a higher one: global (every page), regional (the four briefs), page or local (that page). A page merges them in that order, the page's own winning on collision. [`../../DICTIONARIES.md`](../../DICTIONARIES.md) lists every pair.

## Invariants

- **Relative paths only.** The site serves from `/designops/`; a leading-slash path resolves against the domain root and 404s.
- **Zero build.** No bundler, no root `package.json`, no build step for any page. The Trust & Verify app, once a self-contained sub-app here, has lived in its own repository since 1 Sep 2026 (PR #22).
- **CSS link order is load-bearing.** The cascade depends on it; preserve it across any move.
- New pages are created directly in this structure rather than moved into it later.
