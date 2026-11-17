# Completion report · PR #53 · v1.4.0 · The navigation without Lab

**Branch:** `site/nav-no-lab` on `b6eba12` · **Author:** jdsaire · **Pull request:** https://github.com/jdsaire/designops/pull/53 · **Merge:** manual (shared navigation, `navchrome.js` and dictionaries) · **Plan:** [`Plan-v140-NavNoLab.md`](../cc-plans/Plan-v140-NavNoLab.md)

## What a reader now sees

- **The navigation on all ten pages** reads Briefs · Résumé · History · Design System, with Contact as the call. The Lab menu and its "New" label are gone from the bar and from the phone menu.
- **History** is About's new label, in the bar, the phone menu, the footer's Profile column and Main's About eyebrow (HISTORY / HISTORIA). about/ keeps its address, title, description, opening and link-preview card.
- **Icons:** the flask now sits beside History, and a new line palette beside Design System. The person glyph and the Lab card's layers icon are retired. The Design System page's Icons section shows the set as shipped.
- **Main's portrait section** ends with a "See résumé" / "Ver CV" call that leads to the Résumé.
- **The Feedback page** lists Résumé and Design System in its page picker, in the phone menu's order, and opens on FEEDBACK alone.
- **The footer** keeps its Lab column, with Design System under it.
- **The release** beside the wordmark reads v1.4.0.

## Why

The Lab menu held a single page. A dropdown with one entry costs an extra tap and hides the newest page. Design System moves up beside Résumé. About reads History, so the navigation names what the page holds. Main gets a direct way to the résumé during the applications round. The footer's Lab column stays as the place future releases land.

## Gates

| Gate | Released by | Effort | Elapsed (budget 30 min) | Notes |
|---|---|---|---|---|
| Plan | Accept plan and Auto Mode (Plan Mode) | Medium | — | Rulings PR53-Q11…Q14 (key name, palette glyph A, tablet fit, G4 noise) |
| G1 · Nav and icons | APPROVED PR53 G1 (twice) | Medium | 7:35, then a delta of about 4 min | Re-presented once as a delta note: JD added the Feedback picker options and the FEEDBACK opening (PR53-Q15, Q16) |
| G2 · Résumé CTA and keys | APPROVED PR53 G2 | Medium | 5:05 | JD moved the CTA from the hero to the portrait section (PR53-Q17) |
| G3 · Docs | APPROVED PR53 G3 | Medium | 1:09 | — |
| G4 · Regression and release | APPROVED PR53 G4 | Low | about 45 min, over by about 15 min: the 19 min 28 s noise run for the new Chrome key (PR53-Q18) | Chrome self-updated mid-session, so a noise run made the floor for the new key first (PR53-Q18) |

## Commits

- `e81c0c0` feat(nav): Design System at the top level, the Lab menu retired
- `ac113fb` refactor(nav): the phone menu's Lab group wiring removed
- `b43faa8` refactor(nav): the menu-only New label styling retired
- `95de617` fix(nav): four top-level links fit beside the wordmark on tablets
- `97dc691` feat(design-system): the Icons section shows the set as shipped
- `f607a0b` feat(i18n): About reads History; the Lab and New nav labels retired
- `eeae384` feat(feedback): the page picker lists Résumé and Design System
- `5bc21bb` feat(feedback): the opening reads FEEDBACK alone
- `65b3b20` feat(main): a résumé CTA under the portrait's statement
- `9408764` feat(main): the About section's eyebrow reads HISTORY
- `d174e8f` docs: dictionary counts and READMEs follow the navigation without Lab
- `5a1e0e5` chore(release): badge v1.4.0 on every page (PR53-Q5)
- `4d129ba` docs: the v1.4.0 row, and #52 dated 16 Nov 2026
- this archive commit, then "docs: record PR number"

## Checks

- **Regression matrix (once, at G4):** inspect 1.1.0 @ 8ba81f4, ten pages, full grid (390/768/1440 × dark/light × EN/ES), Chrome and WebKit, 240 cells. Floor key 8ba81f4 · chrome 157.0.8103.79 · webkit 2359, made at G4 by a base-vs-base run (240 cells, 19 min 28 s; 1 cell above 0: about/ 768 light EN WebKit). Result: 28 cells identical, 212 differ. Every differing cell falls in the expected list: the nav row and badge on all ten pages; the footer's History label in EN; Main's portrait-section call, which moves the content below it, and its History eyebrow; the Design System page's Icons section; the Feedback opening and picker; tablet link sizing. All 28 identical cells are 390 ES on unchanged pages, where the bar shows only the menu button and the footer label is unchanged. Text counts 0 (console, links, parity, order, orphans, unresolved keys, overflow, axe, attribution, failed requests, duplicate ids). Layout shift: Contact 390 0 → 0.0505, re-measured 4 times on each side, base 0–0.0505 and tip 0.0473–0.0505, so floor noise. Feedback 390 0 → about 0.019, from the larger opening; under ruling F's 0.02 (PR53-Q14). Digest: `closing/PR53-run/records/G4/DIGEST.md`, outside the repository.
- **Repository tools at the tip:** parity, links, orphans and imagery end `failures: 0`; `order.py --strict` reads 0.
- **Nav fit:** the wordmark fits beside four links on ten pages × 390/768/900/1024/1440 × EN/ES, 100 of 100 in Chrome and in WebKit.
- **Read time (SR-3):** not applicable. No brief's shown text changed.
- **Content policy (SR-2):** no inline script changed, so no hash was recomputed.
- **Evidence assets:** none beyond the matrix's own before/after pairs.

## Dictionaries

| Pair | Change | Keys per language |
|---|---|---|
| Global `assets/i18n/{en,es}.json` | `nav_lab` and `nav_new` retired; `nav_evolution` EN "History" (ES "Historia" unchanged) | 99 → 97 |
| Main `i18n/main.{en,es}.json` | `home_hero_cta` "See résumé" / "Ver CV" added after `bridge_heading`; `home_about_eyebrow` "HISTORY" / "HISTORIA" | 49 → 50 |
| Feedback `feedback/i18n/feedback.{en,es}.json` | `report_arc_pre` ("SHARE" / "COMPARTA") retired | 38 → 37 |
| **Total** | | **1,238 → 1,236** |

`home_hero_cta` keeps the name JD gave it, although the call sits in the portrait section rather than the hero (PR53-Q17).

## Documentation touched (SR-4)

`DICTIONARIES.md` · `README.md` (folder line, v1.4.0 row, #52 date) · `CHANGELOG.md` (v1.4.0 row, #52 date) · `design-system/README.md` · `assets/css/shared/README.md` · `docs/v4/cc-plans/README.md` · `docs/v4/cc-completion-reports/README.md`.

Checked, and none needed: `docs/v3/IA-CONVENTION.md` names neither the Lab menu nor the retired keys. The decoration spec is unchanged at v1.8 with no nav placement (V120-Q34).

## Files changed outside documentation

- **Ten pages:** the navigation, the phone menu, and the badge.
- **`index.html`:** the portrait-section call and the History eyebrow.
- **`design-system/index.html`:** the Icons section.
- **`feedback/index.html`:** the picker and the opening.
- **`assets/js/core/navchrome.js`:** the phone menu's Lab group wiring removed.
- **`assets/css/shared/dropdown.css`:** `.nav__new` and its keyframes removed.
- **`assets/css/shared/nav.css`:** the overlay new-state rule removed, and the tablet link sizing added (PR53-Q13).

## Open, for the next run

- The resume page's phone menu also marks History as current, through a stray static `aria-current`. It predates this PR and is a backlog line.
- The footer's Design System link still carries `data-nav-state="new"`. It's inert now; the footer was out of scope.
- KEYS-Main v1_14 is owed by the sync, from `closing/PR53-run/KEYS-PROPOSAL-PR53-v1_0.md`. POSITIONING §8 owes the about/ row's History label.
