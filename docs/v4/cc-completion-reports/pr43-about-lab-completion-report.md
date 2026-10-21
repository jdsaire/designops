# Completion report · PR #43 · About and the Lab

**Branch:** `deploy/v30-pr43-about-lab` on `6348002` · **Author:** jdsaire · **Merge:** manual · **Plan:** [`../cc-plans/Plan-PR43-AboutLab.md`](../cc-plans/Plan-PR43-AboutLab.md) (as accepted; the About rounds after G3 were ruled in the run, PR43-Q17…Q30) · **PR:** the URL is printed in the PR's own record at push.

## What a reader now sees

- **Chrome (all pages):** the wordmark reads "JD·SAIRE Product Lab"; the phone menu carries line icons; the Work menus list the briefs by name.
- **Briefs 01–04:** a sticky table of contents under the hero (buttons from 768, a select drawn as Contact's field below), a closing rule after the last act that folds it, then Keep exploring (the other three briefs, Main's cards) and the Contact organism. Act heads follow the site's editorial standard; read time is re-measured.
- **About:** the CV downloads, then two arcs. Each opens on a pulsing date label, a display slogan and a purple subline, then three organisms: a manifesto carousel with its own illustrations, the milestones on the S10-B journey (12 entries each, square nodes), and a dashboard. A tagged rule, "The threshold", separates the arcs. Spanish comes from the About copy lock.
- **Contact:** the page opens like the About arcs: "Open to work", ONE DM AWAY., "Make the lab yours.", 60–171 px under the nav as Main's hero.
- **Main:** unchanged on screen (the capabilities carousel of G2c was reverted at JD's word).

## Commits (25 before the archive commit)

`9a74e78` spec v1.6 · `3287cf4` wordmark · `1cb78cd` menu names · `c618a84` menu icons · `9728c5b` three author lines · `708d607` shared index and closing rule · `91351d0` index on Briefs 01–04 · `33493f6` named carousels keep their slide · `a5713d9` work cards and Contact keys global · `6a094d8` brief endings · `9e302e0` Previous/Next global · `b41cdec` capabilities carousel · `8e8c726` its revert · `4e167a4` phone dropdown as Contact's field · `ae72202` data-i18n-html · `56b2403` carousel offset through a resize · `631cbab` About on chassis B v2 · `a3b94ea` six illustrations · `5b55502` img README · `c8fa5bd` editorial standard · `cac26c0` dashboard standard and brief heads · `9ab5528` Contact opening · `2d8c083` About ES and final rounds · `5b83eda` read time · `576d9be` READMEs and counts.

## Results per success criterion

| Criterion | Result |
|---|---|
| Parity, links, orphans, key order | `parity`, `links`, `orphans` 0; `order --strict` 0 on all seven pages |
| About ES = copy lock | 246 keys rendered = dictionary at 1440/390/320; dictionary = lock ES except 30 ruled divergences (governing proposals §4) |
| Regression (G6, scoped as ruled) | 61 cells (Chrome 42, WebKit 12, light 7) tip vs base: 60 clean, 1 transient 404 not reproducible; Main identical to base; every head difference maps to a ruling |
| Read time (SR-3) | 40 cells: shown = computed |
| Component checks | carousel resize, editorial, dashboard, arc spacing, viewport fit, illustrations: 0 failures, Chrome and WebKit |

## Deviations and autonomous decisions

- The About chassis was reworked over eight rounds after G3 (PR43-Q17…Q30), each settled through /ask: the relay timeline was withdrawn for the S10-B journey; the index was removed from About; the sublines, labels and spacing were ruled per round.
- A carousel bug found in review (a dimmed slide during a resize) was fixed for every carousel (PR43-Q23).
- A first answer on Contact's spacing ("Main's frame equals Main's gap") was wrong; measured and re-ruled (PR43-Q30).
- Two shared stylesheets replaced page-local rules: `shared/editorial.css` and `shared/dashboard.css`; `shared/display.css` is shared by About and Contact.

## Evidence assets generated (scope ruled)

Illustration option sheets and prototypes on request only (closing/PR43-run/prototypes/); no screenshot matrix (G6 ran on text and layout probes).

## Keys

1,085 per language (DICTIONARIES.md). Global gained the carousel, dashboard, work-card and Contact keys; the related pair is empty; About and Contact keys per the governing proposals.

## Documentation touched (SR-4)

Root README, DICTIONARIES.md, about/, about/img/, assets/css/shared/, assets/css/pages/about/, assets/js/core/, assets/js/pages/about/, docs/v3/organisms/; this report and the plan.

## Open items (for the next sync)

- Deletion on JD's word: `about/img/pre-s3-sash.svg`; the empty related pair.
- Brief 02 Acts 00–02 have no lede.
- The governing proposals (POSITIONING v1_11, KEYS v1_7, decoration spec v1.7, the About lock divergences).

## Relay

See the run's record `closing/PR43-run/` and the Cowork post-deploy-sync trigger.
