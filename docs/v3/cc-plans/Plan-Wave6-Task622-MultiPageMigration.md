# Plan — Wave 6 · Task 6.2.2 · Multipage Migration

## Context

`jdsaire/designops` is a live, zero-build, zero-dependency vanilla HTML/CSS/JS site on
GitHub Pages under base path `/designops/`. Task 6.2.1 consolidated five pages onto one shared
navbar. That navbar hosts four categories, but only **Work** is genuinely multipage —
**Capabilities**, **About**, and **Contact** are still single-page anchors into Main's organisms.

This run builds three dedicated depth-1 pages, migrates the heavy organisms into them, reduces
Main to a landing page that motivates the click, and rewires the chrome onto a **depth-aware path
contract**. It also fixes two load-bearing defects that would otherwise break the new pages. No
redesign: every organism moves with markup + CSS intact.

**Deviation, authorized by the roadmap:** inserted ahead of task 6.3 (ES lock) so 6.3 does not
translate copy this run relocates. 6.3 and 6.4 remain open after this run.

This is a **Plan-Mode, gated** run. It is PR-based (opened via `gh`, **not merged**). Sole author
`jdsaire`; zero AI/agent attribution anywhere. No subagents (token cost). Relative paths only —
never an absolute leading `/`.

---

## Preflight results (Task 0) — all green

| Check | Result |
|---|---|
| `gh` CLI + auth | v2.96.0, logged in as **jdsaire** (keyring); scopes incl. `repo`, `workflow` |
| designops HEAD | `241e0bc` — matches expected (merge of PR #16). **No delta.** |
| Open PRs on designops | **None** targeting this work |
| `jdsaire/jdigital` reachable | Yes — public, cloned, mined below |
| Required attachment `CV_Juan_Diego_Saire.md` | Present, read (primary copy source) |
| Required attachment `CV_JDSaire_UltraSpec_v2_0.md` | Present, read (governing spec) |
| Optional CV file for hosting | **Supplied** — `CV_Juan_Diego_Saire.pdf` (89.8 KB). Real asset → **not** `[TEMPORAL]` |
| `/designops-copy-es` skill access | **Confirmed available** (`anthropic-skills:designops-copy-es`) |

Both defects reproduce exactly as described:
- **Defect (1)** — `assets/js/core/i18n.js:15` `fetch('assets/i18n/' + file)` is document-relative /
  depth-blind. From depth 1 it 404s; the `.catch` swallows it and `swapLang()` silently no-ops.
- **Defect (2)** — `assets/js/core/navchrome.js:20–30` derives exactly two prefixes from an
  `isBrief` boolean; no third (depth-1) state expressible.

**Finding — briefs do NOT import `i18n.js`.** Each brief's tail imports only `core/progress.js` +
`core/navchrome.js` and owns i18n through a separate inline engine (`window.swapLang`). So the
depth-blind fetch never affected briefs; the fix must still leave brief hrefs byte-identical
(proven below).

---

## Two owner decisions folded into this plan

1. **ES generation (owner override of the core prompt).** The core prompt ships new keys EN-only
   as 6.3 debt. The owner **revokes** that for this run: invoke **`/designops-copy-es`** to generate
   ES **only for the new keys created this run**, preserving existing copy from its point of origin
   (Main / jdigital / CV). The 10 inherited EN-only debt keys stay out of scope. This adds **zero**
   new ES debt. Logged in a **dedicated commit** (see Git sequence).
2. **CV placement (owner instruction — CONFIRMED: About only).** `CV_Juan_Diego_Saire.pdf` is placed
   on the **About** page as a real download. **Contact keeps LinkedIn + GitHub only** — the CV
   affordance does **not** appear on Contact. This is an authorized deviation from the core prompt's
   success-criterion 8 (which put the CV on Contact); it is logged.

**Gate A — CONFIRMED: A1 (static triptych) on Main.** Main's Capabilities section reduces to three
labels + titles + one CTA into `/capabilities/`; `carousel.js`, `capabilities.css`, and
`capabilities-cards.css` leave Main entirely.

**Capabilities delivery — REVERTED to the carousel (owner decision, post-Gate-B).** The original
plan built `/capabilities/` as vertical stacked sections. The owner reverts this single architectural
decision: `/capabilities/` hosts the **existing 3-slide carousel across all breakpoints**. This makes
the carousel a **relocation** (like evolution→about, contact→contact) rather than a rebuild:
`carousel.js` + `capabilities.css` + `capabilities-cards.css` **move to `/capabilities/`** instead of
being deleted. **Gate A still stands for Main** (triptych teaser, no carousel on Main). Gate B's
approved copy is **unaffected** — the page hero still uses `cap_hero_head`/`cap_hero_lede`, the slides
reuse `cap_s*`, the slide CTA reuses `cap_slide_cta`. This supersedes success-criterion 6 (stacked
sections / alternating media / IO-reveal / no-scroll-jacking) — logged as an authorized deviation.
**Page composition:** page hero (`capabilities_eyebrow` + `cap_hero_head` + `cap_hero_lede`) then the
migrated carousel guts (slides + controls + dots); the carousel's own `.services__header` is **not**
re-rendered (page hero supersedes it, as on Contact); the 6 slide-CTA `href="#contact"` become
`href="../contact/"` (depth-1 content links, correct with JS disabled).

Both owner decisions, Gate A, and the carousel reversion are recorded as authorized deviations in the
completion report and parking-lot.

---

## (a) File tree — new / moved / deleted

**NEW**
```
assets/js/core/paths.js                              depth module (single source of truth)
assets/css/shared/page-hero.css                      .pagehero* + reproduced .section/.section__inner/.section__eyebrow*
capabilities/index.html                              depth 1
about/index.html                                     depth 1
contact/index.html                                   depth 1
assets/js/pages/capabilities/main.js                 page entry
assets/js/pages/about/main.js                        page entry
assets/js/pages/contact/main.js                      page entry
assets/css/pages/home/teaser.css                     Main's three teaser blocks
assets/docs/CV_Juan_Diego_Saire.pdf                  hosted CV (copied from supplied file)
```

**MOVED — byte-equal content; only depth-sensitive paths change** (all verified: no `url()`/asset refs
in the CSS, no imports in the JS, same `pages/<x>/` directory depth → truly byte-equal)
```
assets/css/pages/home/capabilities.css       → assets/css/pages/capabilities/capabilities.css
assets/css/pages/home/capabilities-cards.css → assets/css/pages/capabilities/capabilities-cards.css
assets/js/pages/home/carousel.js             → assets/js/pages/capabilities/carousel.js   (export-only, guarded on #servicesTrack)
assets/css/pages/home/evolution.css → assets/css/pages/about/evolution.css
assets/js/pages/home/evolution.js   → assets/js/pages/about/evolution.js
assets/css/pages/home/contact.css   → assets/css/pages/contact/contact.css
assets/js/pages/home/contact.js     → assets/js/pages/contact/contact.js
```
CSS `url()` refs are relative to the CSS file; moving `pages/home/*` → `pages/<page>/*` keeps the
same directory depth, so no rewrite is needed. Organism **markup** moved into the depth-1 HTML gets
its asset paths prefixed (e.g. contact modal `assets/img/jdigital-logo-mini2.svg` →
`../assets/img/...`). Formspree `action` travels **verbatim**.

**DELETED — justified as a surface this run removes**
```
assets/js/pages/home/nav.js          scrollspy over #capabilities/#evolution — both targets leave Main
```
The carousel JS/CSS are **no longer deleted** — under the reversion they move to `/capabilities/`.
`nav.js` is the only deletion (its sole surface, Home scrollspy over the two now-migrated sections, is
removed this run).

---

## (b) The path contract (build FIRST — everything depends on it)

**`assets/js/core/paths.js`** — read `data-nav-depth` off `<html>`, map to a root prefix, export it:
`"0"→''`, `"1"→'../'`, `"2"→'../../'`. Absent/unrecognised → `''` + `console.warn` (never guess
from `location.pathname`).

**`data-nav-depth` per page:** Main `"0"`; capabilities/about/contact `"1"`; four briefs `"2"`.
`data-nav-context` is **retained untouched** on all eight pages.

**Consumers rewired**
- `core/i18n.js:15` → `fetch(rootPrefix + 'assets/i18n/' + file)` (fixes defect 1).
- `core/navchrome.js` → drop `isBrief`; import `rootPrefix`; rewrite by attribute:
  - `data-nav-link` → `rootPrefix + value`
  - `data-nav-page` (NEW) → `rootPrefix + value`
  - `data-nav-work` → `rootPrefix + 'work/' + value`

**Nav vocabulary change:** the three page routes move from `data-nav-link="#…"` to
`data-nav-page="capabilities/|about/|contact/"` in navbar **and** overlay on all pages that carry
them. Logo keeps `data-nav-link="#top"`; Work keeps `data-nav-work="<slug>/"`. Authored HTML carries
correct hrefs so links work with JS disabled. Rewrite stays **idempotent** (href derived purely from
the immutable `data-*` attribute + rootPrefix; re-running init() reproduces identical hrefs).

**Resolution proof (target = absolute URL under `/designops/`)**

| Link (data-attr) | Main depth0 `''` | New page depth1 `'../'` | Brief depth2 `'../../'` |
|---|---|---|---|
| logo `data-nav-link="#top"` | `#top` → /#top | `../#top` → /#top | `../../#top` → /#top ✓ (=today) |
| `data-nav-page="capabilities/"` | `capabilities/` | `../capabilities/` | `../../capabilities/` → all → /capabilities/ |
| `data-nav-page="about/"` | `about/` | `../about/` | `../../about/` → all → /about/ |
| `data-nav-page="contact/"` | `contact/` | `../contact/` | `../../contact/` → all → /contact/ |
| `data-nav-work="designops-system/"` | `work/designops-system/` | `../work/designops-system/` | `../../work/designops-system/` → all → /work/designops-system/ |
| i18n fetch | `assets/i18n/en.json` | `../assets/i18n/en.json` | `../../assets/i18n/en.json` → all → /assets/i18n/en.json |

Brief `data-nav-work` **string** changes shape (today `'../'+slug`; now `'../../work/'+slug`) but the
**resolved target is identical** (`/designops/work/<slug>/` from any brief). i18n now resolves from
all three depths — the defect-1 fix, with depth 0/1/2 evidence to be reported.

---

## (c) CSS map

**Correction to the core prompt's CSS map (structural fact, surfaced here — not a copy claim).** The
base `.section__eyebrow` / `-bar` / `-text` idiom **and** `.section` / `.section__inner` live in
`assets/css/pages/home/work.css` (lines 3–32), **not** in `section-extras.css` (which only carries
`.section__headline`, `.section__lede`, `.section--alt`, header-scoped alignment, and `sectionRise`).
The migrating organisms depend on these primitives: **evolution** uses `.section`, `.section__inner`,
base `.section__eyebrow*`, `.section__headline/lede`; **contact** uses `.section`, `.section__inner`.
Since the new pages don't (and shouldn't) link `work.css`, these primitives are **reproduced
verbatim** into `page-hero.css` (the 6.2.1 nav-scoped-reproduction precedent).

**`assets/css/shared/page-hero.css`** — every declaration copied verbatim from a single named source:

| Selector | Source (verbatim) |
|---|---|
| `.section` | work.css:3–8 |
| `.section__inner` | work.css:9–13 |
| `.section__eyebrow` | work.css:14–20 |
| `.section__eyebrow-bar` | work.css:21–25 |
| `.section__eyebrow-text` | work.css:26–32 |
| `.pagehero` | brief chassis `.hero` (designops-system/index.html:87) |
| `.pagehero__inner` | brief chassis `.hero__inner` (…:88) |
| `.pagehero__h1` | brief chassis `.hero__h1` (…:89) |
| `.pagehero__deck` | brief chassis `.hero__deck` (…:90) |

Renamed to `.pagehero*` because Main's `pages/home/hero.css` already owns `.hero` (silent collision).
Markup uses `<div class="section__inner pagehero__inner">` so `.section__inner` provides width/gutter
and `.pagehero__inner` stays byte-verbatim (width:100% + flex column + gap). All tokens the hero
needs (`--nav-height`, `--fw-black`, `--fw-light`, `--color-text-muted`, `--max-content-width`,
`--gutter`) are confirmed present in `tokens.css` — **no missing chassis variable**. Body black bg
comes from `reset.css`. **Forbidden on these heroes:** `.kwrow`/`.kw`, `.reveal`/"short version",
work-brief status line, `.wip` note.

**Per-new-page linked partials, cascade order:**
```
../assets/css/base/tokens.css
../assets/css/base/reset.css
../assets/css/shared/progress.css
../assets/css/shared/nav.css
../assets/css/shared/page-hero.css
../assets/css/shared/section-extras.css
<organism partial — see below>
../assets/css/shared/footer.css
../assets/css/shared/designops-variant.css
```
Organism partial(s) per page: Capabilities → `../assets/css/pages/capabilities/capabilities.css`
**and** `../assets/css/pages/capabilities/capabilities-cards.css` (both moved, in that cascade order —
matching Main's current order); About → `../assets/css/pages/about/evolution.css`; Contact →
`../assets/css/pages/contact/contact.css`. The carousel markup uses `.section__inner`
(+`.section__inner--capabilities` from capabilities-cards.css), both available via page-hero.css's
reproduction.

**Main `<head>` link list** (task 6): drop `evolution.css`, `contact.css`, `capabilities.css`, and
`capabilities-cards.css` (all four migrating organisms leave Main); add `pages/home/teaser.css`.
Preserve relative cascade order of survivors.

---

## (d) JS map

**Each new page gets its own entry** importing only what it uses (never Main's full graph). `paths.js`
arrives transitively via i18n.js + navchrome.js.

| Page entry | imports | init order |
|---|---|---|
| `pages/capabilities/main.js` | i18n(+swapLang), progress, navchrome, capabilities/carousel | i18n → progress → navchrome({swapLang}) → carousel |
| `pages/about/main.js` | i18n(+swapLang), progress, navchrome, about/evolution | i18n → progress → navchrome({swapLang}) → evolution |
| `pages/contact/main.js` | i18n(+swapLang), progress, navchrome, contact/contact | i18n → progress → navchrome({swapLang}) → contact |

The Capabilities page runs the **moved `carousel.js`** (export-only, guarded on `#servicesTrack`) — no
new reveal module. Its horizontal `scroll-snap-type: x mandatory` (capabilities.css:216) is the
carousel's existing mobile behavior, not vertical page scroll-jacking; behaviour is preserved.

**Main `main.js`** (task 6): drop `initNav` (scrollspy dead), `initCarousel` (carousel moved to
`/capabilities/`), `initEvolution`, `initContact`. Retain i18n, progress, navchrome, hero, work,
tagfilter, ticker.

---

## (e) Scrollspy reconciliation

`nav.js` selects `.nav__link[data-nav-link]` and observes the sections they point at (`#capabilities`,
`#evolution`). Both targets leave Main this run, and those two links become cross-page
`data-nav-page` routes — so the selector matches nothing and `if (!navLinks.length) return` makes the
module **inert on every page** (no dangling observer). Scrollspy no longer applies: the categories are
now page routes, not in-page sections. **Replacement = an explicit page-level current state:** each
dedicated page's own nav link (and overlay link) carries `aria-current="page"` +
`.nav__link--current` **statically in the authored HTML** (guardrail-preferred over a broken observer).
`nav.js` is deleted and its import dropped from Main's `main.js`.

---

## (f) Copy plan

**Reused existing keys (no change):** Capabilities page reuses `cap_s{1,2,3}_label/_title/_body/_img_alt`
+ `cap_slide_cta`; About reuses all `evolution_*` + `evo_m*` (incl. the 8 EN-only `rv` keys, kept
intact); Contact reuses all `contact_*`; `footer_linkedin` reused for the LinkedIn affordance.

**New keys (EN authored at Gate B; ES generated via `/designops-copy-es`):** Main's three teaser
blocks (heading/lede/CTA each); each new page's meta title + description + hero eyebrow/heading/lede;
Contact **GitHub** affordance label (LinkedIn reuses `footer_linkedin`; **no CV on Contact**);
About **CV-download** label + affordance heading; optional About principles block (only if §JDIGITAL
admits the triad — verdict at Gate B). **Projected new EN keys ≈ 25–40**, exact count locked at Gate B.

**Projected dictionary counts:** en.json `151 → 151 + N`; es.json `148 → 148 + N` (ES generated for
the same N, so counts move together). **Key removals: likely zero** — all relocated copy reappears on
a dedicated page; every removal (if any) is enumerated by name with its surface at task 7. **ES debt
added by this run: zero** (owner override). The 10 inherited EN-only keys, 4 retained orphans, and 3
principal-verbatim values (`nav_capabilities`="Verticales", `nav_evolution` EN="About",
`work_card1_cta`) are untouched. No per-brief BODY dictionary touched.

**§JDIGITAL verdict (previewed; stated item-by-item at Gate B):**
- Hero counter block ("A decade across three disciplines" etc., jdigital index.html:166–178) →
  **REJECT** (unsourced agency claims, not in frozen inventory).
- "Our non-negotiables" / "JDigital works best…" / the tool-dependency disclosure naming specific
  commercial AI subscriptions (859, 876, 883) → **REJECT** (we/our vendor voice; tool-dependency-as-guarantee).
- "9-in-1" role constellation → **REJECT** (already discarded by principal).
- Operating-principles triad "Zero Improvisation / Zero Noise / Zero Overpromising" (866–883) →
  **ADMISSIBLE only if** rewritten first-person, brand-stripped, zero new numbers, and it strengthens
  (not vendor-pitches) the About page; else dropped and said so. Final call at Gate B.

**Governing constraints held:** frozen figures character-identical (`130,000+`, `12 projects`,
`3 workshops · 70 staff · 3.88/4`, `5 core areas`, `29 project teams · 11 course sections`, `1,200+`,
`35 EPC projects`, `45/45 · 6 · 5`, `175 i18n keys · 10 components`); "passengers in international
transfer" never "transfers"; first-person past-tense verbs (coordinated/articulated/facilitated/
measured/designed/built/governed), **never** "led"/people-management; no simulated metrics; placeholder
honesty (Briefs 02/03 untouched). Any UltraSpec-vs-live-repo conflict → STOP at Gate B.

---

## (g) Git sequence & PR

Branch `wave6-task622-multipage-migration` from `main`. Author + committer `jdsaire`; no trailers, no
AI/agent mention.

- **Commit 1 — structural migration:** path contract, three pages, organism moves, Main reduction,
  teasers, new EN keys, docs (roadmap + parking-lot), archived plan + completion report.
- **Commit 2 — ES generation (dedicated, owner-directed):** ES values for this run's new keys via
  `/designops-copy-es`; message documents the roadmap-6.3 ES-debt revocation.

This **two-commit** shape is an authorized deviation from the core prompt's "one logical commit," on
the owner's explicit "dedicated commit" instruction. PR opened via `gh`, body summarising delivered
vs planned + Gate A/B picks + deviations + open items. **Not merged** — the principal merges. PR URL
returned.

Archive (task 11): approved plan → `docs/v3/cc-plans/Plan-Wave6-Task622-MultiPageMigration.md`;
completion report → `docs/v3/cc-completion-reports/wave-6-task622-multipage-migration-completion-report.md`
(shape mirrors the 6.2.1 report: Outcome · PASS/FAIL vs the 17 criteria · Gate picks · Scrollspy
reconciliation · Authorized deviations · Verification · Open items). Roadmap gains exactly one row
(6.2.2) after the 6.2.1 row.

---

## Gates that STOP during execution (after this plan is approved)

- **Gate A — DECIDED: A1** (static triptych). No further stop; folded into the build above.
- **Gate B — the copy deck.** Full EN copy for Main's 3 teasers + all 3 pages (meta, hero, body,
  CTAs), every line provenance-tagged (`[VERIFIED]/[AUTHORED]/[INHERITED]/[TEMPORAL]/[GAP]`), the
  §JDIGITAL verdict item-by-item, `[GAP]`/`[TEMPORAL]` listed at top, new-key count + ES scope.
  Presented in chat; **no copy spliced before approval.**

---

## Verification (task 8) — evidence, not claims

Served-path resolution sweep across 8 pages (count reported); i18n fetch resolves from depth 0/1/2;
both site dictionaries + all 8 brief BODY dictionaries parse; HTML balance 8/8; every JS module parses;
navbar/overlay/footer class sequences byte-identical ×8; content-freeze diffs (Briefs 02/03 markers
n/n; Main hero/bridge/work/Track Record/footer unchanged); zero absolute paths added; zero new deps/
build/breakpoint hinges; zero AI/agent attribution in added lines; Capabilities page carries no
scroll-snap-mandatory and no wheel/touchmove interception. Live browser render was unavailable on the
prior run; if unavailable again, say so plainly, run these static substitutes, and carry "browser
render" forward as an open item.

## Critical files to touch
- `assets/js/core/paths.js` (new), `assets/js/core/i18n.js:15`, `assets/js/core/navchrome.js:20–30`
- `index.html` (`<html>` depth attr; nav+overlay data-nav-page; reduce evolution+contact+capabilities; teasers)
- 5 existing pages' `<html>` + nav/overlay markup; 3 new `*/index.html`
- `assets/css/shared/page-hero.css` (new); moves of evolution/contact CSS+JS; `assets/js/main.js`
- `assets/i18n/en.json` + `assets/i18n/es.json`; `docs/v3/Execution_Roadmap_v3_0.md`; `docs/parking-lot.md`
