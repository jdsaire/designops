# Completion report · PR #42 · Solution act

Author: jdsaire. Base `b4def28` (PR #41 merged). Branch `deploy/v29-pr42-solution-act`. Plan: [`../cc-plans/Plan-PR42-SolutionAct.md`](../cc-plans/Plan-PR42-SolutionAct.md). Pull request: opened at release, its URL recorded in the last commit of this file.

## What a reader now sees

- **Briefs 01, 02 and 04 read in a new order:** 00 Context · 01 Problem · 02 · **03 The Solution** · 04 Architecture · 05 Schedule · 06 · 07.
- **Act 03 · The Solution** is a carousel of three storyboard illustrations, each one reason to use the product.
  - Brief 01 · AccreditaPass: confirm the matches on your press slate, know in time if your access shifts, plan on certainty.
  - Brief 02 · Trust & Verify: know it is paid before handing the order, see what does not match, type securely in front of everyone.
  - Brief 04 · Portfolio: "The testament": senior judgment turned into software, refined design on a solid build, continuous releases.
  - From 768 every slide carries its call to action. Below 768 the carousel takes Main's capabilities phone style, with the call to action below it.
- **Brief 01 opens with Act 00 · The Context:** the 2026 World Cup's scale, the press's scale by the quarter-finals, and accreditation that did not guarantee entry. It shows three cards; from 768 it also has "Championship scale" behind the purple button.
- **Brief 03's Act 03** runs on the same shared carousel. Its drawings read in both themes and carry the "Illustration" tag. Nothing else in Brief 03 changed.
- **Main:** capability 01 pictures a budget kept safe (a vault ring around banknotes), every capability image carries the tag, and capability 03 speaks every division's language.
- **Every page, phone menu:** the button is the purple box in both states (lines ↔ X), and Work opens collapsed.
- **Read time** re-measured: B01 5/8 EN · 5/10 ES, B02 6/8 · 6/9, B03 6, B04 5/7 · 5/7.

## Commits (29 before the docs commits; SHAs as pushed)

`39f81dc` fix(briefs) act order · `1377353` chore(i18n) page order · `7b81c86` `7f23c09` `c7b93ff` Solution copy, first round · `a094b36` feat(briefs) shared carousel · `c5dee7e` `0f71232` fix(brief03) carousel and drawings · `b5e31de` `23a3318` `ff45f20` three storyboard slides, CTA below · `d5d94ef` feat(brief01) Act 00 seed · `ad51f58` feat(briefs) Spanish shared labels · `59580d7` `0732ff6` `0610e79` Solution copy EN + ES with storyboards · `57fbfbb` feat(brief01) Act 00 EN + ES · `f8c36ef` `2b951b5` fix(nav) menu button, Work collapsed · `1cfcdf3` feat(main) illustration tags · `97a52ac` feat(main) capability 01 · `cb8ef25` fix(main) capability 03 · `0b85930` feat(briefs) per-slide CTA · `87365fd` feat(briefs) shared phone carousel · `eb067d0` fix(brief04) slides 1 and 3 · `d4a3e85` `23e414c` `f1b52ec` read time · `985f197` fix(briefs) dark phone label. Every commit's tree reads `failures: 0` on parity, orphans and links. The G6b and G1 items that share files were replayed from the base, one item per commit; G1's act order is one commit because the shared labels span three briefs.

## Results per success criterion

| # | Criterion | Result |
|---|---|---|
| 1 | §5.1 order, numbering, ids, labels, inbound links; Brief 03 identical | Met. Ids, aria pairs, `data-act` and eyebrows follow the new numbers; no inbound anchor existed. Brief 03 is identical outside Act 03 (isolated sections, both engines); its Act 03 changes are ruled (PR42-Q2, Q3, Q5, Q6, Q34) |
| 2 | Act 03 carousel, 4–6 slides, one schematic SVG each, EN and ES, page order, parity 0 | Met with an amendment: three slides (PR42-Q14); storyboard scenes picked by JD from prototypes; keys in page order; parity 0 |
| 3 | Brief 01 Act 00, three cards on B31–B33 | Met: tournament scale (B31), press by the quarter-finals (B32), accreditation without access (B33); the organiser unnamed |
| 4 | Inside POSITIONING and EVIDENCE; simulated badged; no drawn image of the apps | Met as ruled; card 1 of Briefs 01 and 02 ship without the descriptor and fixtures note by JD's ruling (PR42-Q22), with EVIDENCE amendments proposed |
| 5 | Read time shown = measured, 16 cells | Met: 40 of 40 cells measured (rt40, 5 widths) |
| 6 | One regression matrix, 0 unintended differences; parity, orphans, hidden text 0; frames; CLS; one-shots | Met: 408 isolated sections per engine plus 30 on Main/About/Contact, 0 unintended; frames identical; hidden 0; CLS 0.0000 served normally; longest one-shot 1450 ms; contrast 264 vs 270 at the base |
| 7 | READMEs, DICTIONARIES.md, tools at 0, links, template | Met: see Documentation; `order.py --strict` 0 on all seven pages |
| 8 | Sole author, no AI attribution, manual merge | Met: author and committer jdsaire on every commit; attribution scan 0 |

## Deviations and autonomous decisions

- The Solution copy took three rounds: build parts → features → JD's locked storyboards → an external copy round run by JD on an AI coding assistant (a method record, never an author) gated in code, with 36 rulings through /ask.
- Gate order changed by JD: G3 and G4 built together, one external copy round settled all copy in EN and ES (no separate ES gate), and an extra gate G6b took six surgical changes; G6 ran twice.
- The regression matrix compares each section alone at the top of the page (base-vs-base noise 0/96), because reworked pages shifted every section by sub-pixel offsets.
- The review server sends `Cache-Control: no-store`; it caused 0.0001–0.0002 CLS readings, traced and excluded (0.0000 on a plain server).
- The phone menu fix, the collapsed Work menu and the site-wide illustration tag reach every page; they were ruled at G6b.
- Effort per gate was set by JD in the app; the session cannot observe the setting, so it is not recorded here.

## Evidence assets generated (scope ruled)

Storyboard prototypes at JD's request: 27 for the Solution cards (3 per card), 3 for Main's capability 01, 3 for Brief 04's slide 1. Kept with the run's records, outside the repository. No other screenshot set was shown.

## Keys

- Renamed: `ui_act03_schedule` → `ui_act05_schedule`, `ui_act05_dashboard` → `ui_act06_dashboard`, `ui_act06_reflection` → `ui_act07_reflection`; Brief 01 `act5_eyebrow` → `act6_eyebrow`, `act6_eyebrow` → `act7_eyebrow`.
- New: `ui_act03_solution`, `ui_carousel_prev`, `ui_carousel_next` (regional); `ui_illus_label` (global); 14 `sol_*` in each of Briefs 01, 02, 04; 12 `act0_*` in Brief 01.
- Retired: the fourth and fifth slide keys of the first two Solution rounds (0 references).
- Changed on Main: `cap_s1_img_alt`, `cap_s3_body`.
- Counts: 1,009 per language.

## Documentation touched (SR-4)

`README.md` (Brief 01 descriptor) · `work/README.md` · `work/accreditapass/README.md` · `work/yape-trust-verify-brief/README.md` · `work/portfolio-evolution/README.md` · `work/airport/README.md` · `assets/css/shared/README.md` (carousel.css, carousel-phone.css) · `assets/js/core/README.md` (carousel.js) · `assets/img/README.md` · `DICTIONARIES.md` (counts, order) · `docs/v3/organisms/README.md` (Brief 02, Act 05) · `.github/pull_request_template.md` (Plan row, regression row, evidence row) · `docs/README.md`, `docs/v4/README.md`, `docs/v4/cc-plans/README.md`, `docs/v4/cc-completion-reports/README.md` (index lines) · this report and the plan.

## Open items (for the next sync)

- EVIDENCE notes on B01, B24 (card 1 without descriptor or fixtures note), B01/B10 README sources, B33 placement.
- POSITIONING v1_10: the lab frame on the site, no card prefixes, §3.2 ALIGN body ("division").
- KEYS v1_6 rows; decoration spec v1.6 (the shared carousel row, the dark phone label).
- Brief amendment lines: three cards, Brief 03 Act 03 scope exception, the gate order, Act 00's phone disclosure, W1 reversed.
- Brief 02 Act 01's "Why I chose this problem" button still shows on phones (outside this run).

## Relay

```
PIPELINE RELAY — PR #42 Solution act closed
Landed:      PR#42 pushed at <sha> · <n> commits · Plan + G1–G7 with G6b (merge: JD)
Open:        EVIDENCE notes B01/B24/B33 · POSITIONING v1_10 · KEYS v1_6 · spec v1.6 · brief amendments
Next:        PR #43 — per the PRE-MAX backlog, set at the sync
Go to:       COWORK  (post-deploy-sync, then the next brief + CC trigger)
Run first:   the paste block in closing/PR42-run/TRIGGER-CW-POST-DEPLOY-SYNC-PR42.md
```
