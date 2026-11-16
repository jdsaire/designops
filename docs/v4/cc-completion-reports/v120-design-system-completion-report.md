# Completion report · v1.2.0 · A Design System page in the Lab menu

**Branch:** `site/design-system` on `874637b` · **Author:** jdsaire · **Pull request:** pending · **Merge:** manual · **Plan:** [`../cc-plans/Plan-v120-DesignSystem.md`](../cc-plans/Plan-v120-DesignSystem.md)

## What a reader now sees

- **The Lab menu** links Design System on every page, marked with a PULSE label ("New" / "Nuevo") in place of "Soon". The footer link carries no label.
- **`/design-system/`**, in five sections behind the briefs' sticky index: Typography, Color, Icons, Atomic design (atoms, molecules, and Brief 03's stakeholder network as the organism) and Accessibility. Every swatch reads its value from `tokens.css` for the theme in force; the dark-vs-light table reads both theme rules. EN and ES, dark and light.
- **A shared link** to the page shows its own card, `og-10-design-system.png`.

## Why

The Lab row had shown Design System as "Soon" since PR #46. The page shows the system with its own parts, only components the site ships (AIE-Q85).

## Structure, as ruled

- The plan's four sections (V120-Q1) were widened at G2 to an index-led page (V120-Q11…Q15, Revision 1 of the plan), then restructured at G3 to five sections with JD's opening copy (V120-Q20, V120-Q21). Rulings V120-Q1…Q31 are in the run's changelog.
- Brief 03's network moved out of the airport page into a shared component (`assets/css/shared/net.css`, `assets/js/core/net.js`, `assets/i18n/briefs/net.{en,es}.json`, 64 keys) so both pages load the same files. Brief 03 measures identical to the base.
- `core/i18n.js` `setPage` takes a list of page dictionaries, merged.

## Commits

- 20 site and docs commits from `87ef268` to `db74b18`, then this plan and report, and the PR number.

## Results per gate

| Gate | Result |
|---|---|
| G1 · Artifact | A private Design System record created from the site's tokens and components; never linked from the site, repo or PR |
| G2 · Page | Structure rebuilt on the briefs' index after Revision 1; checks 0 after each commit |
| G3 · Injection | Copy lock injected EN and ES, then the five-section copy and JD's edits; parity, order and line fit at 1440, 768 and 390 |
| G4 · Docs | SR-5 and the SR-2 sentence; manifest scope; decoration spec v1.8; README, CHANGELOG, DICTIONARIES (1,238 keys per language), IA-CONVENTION, folder READMEs; og-10 chosen from two options and copied by sha256 |
| G5 · Regression | 240 cells against `874637b` (10 pages × 12 Chrome + 12 WebKit), floor 1/240. 213 differ only at the footer, where the Lab link loses its "Soon" tag; 24 are `design-system/`, which has no base. Three WebKit cells (about 1440 ES, résumé 390 EN, Brief 01 768 ES) differed above the footer and re-ran footer-only. One new axe finding on the page (menu card specimens with `menuitem` outside a menu) fixed in `db74b18`; axe 0 after. Attribution 1 is SR-5's own wording about AI-generated images, the rule's text, not authorship |
| Checks | `parity`, `links`, `orphans`, `imagery` `failures: 0` and `order --strict` 0 after every commit |
| Authorship | Sole author jdsaire; attribution 0 in commits, branch and PR text |

## Documentation touched

- `docs/v4/STANDING-RULES.md` (SR-5 and its Scope line; SR-2's last sentence), `imagery-manifest.json` `scope`, decoration spec v1.8.
- `README.md`, `CHANGELOG.md` (v1.2.0 row; #51 dated; #50 plan and report links), `DICTIONARIES.md`, `IA-CONVENTION`, folder READMEs, Brief 03's README.
- `docs/v4/cc-plans/README.md` and `docs/v4/cc-completion-reports/README.md` index rows.
- SR-3 read time doesn't apply: no brief's shown text changed.

## Not measured here

- **The live address and card:** `/design-system/` and og-10 resolve only after the merge deploys; the post-deploy sync checks both.
- **Safari by hand:** the PULSE label's shape was checked in WebKit; JD's own Safari pass follows the merge.

## Recorded, not changed

- The resting network card's axe contrast node is a ruled exception (V120-Q27).
- `switch.css` is linked on nine pages and used by none.
- The briefs' CTA cleanup (SY51-Q6) stays out of scope.
