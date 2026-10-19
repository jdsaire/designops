# Plan · PR #42 · Solution act

The plans as accepted in Plan Mode ("Accept plan and Auto Mode"), the rulings the run made, and the gate sequence with every release. Author: jdsaire. Base `b4def28`; branch `deploy/v29-pr42-solution-act`.

## Rulings (PR42-Q1…Q36)

| Id | Date | Ruling | By |
|---|---|---|---|
| PR42-Q1 | 2026-10-17 | Solution carousel chassis: one shared source, assets/css/shared/carousel.css + assets/js/core/carousel.js | /ask (PR #42 Plan) |
| PR42-Q2 | 2026-10-17 | slide images: transparent SVG on a media box grounded by the theme tokens; Brief 03's five Act 03 images restyled the same way for consistency; if JD dislikes the result at G3, every carousel goes dark-only as Brief 03 shipped | /ask (JD free text) |
| PR42-Q3 | 2026-10-17 | phone pattern reassessed on JD's instruction, Brief 03 inherits it: carousel arrows + one shared "01 / 0N" count, plus PR40-Q31's peek (slides at 100% minus --peek-width) | /ask (JD free text) |
| PR42-Q4 | 2026-10-17 | key names: eyebrow keys and section ids follow the new act numbers; other act-prefixed keys keep their names | /ask |
| PR42-Q5 | 2026-10-17 | Brief 03 links the shared carousel files; its inline .dl CSS (airport 450–483) and script (1281–1300) removed | /ask |
| PR42-Q6 | 2026-10-17 | visible "Illustration" tag on every drawn slide image, one regional key, all four briefs | /ask |
| PR42-Q7 | 2026-10-17 | G7 also fixes .github/pull_request_template.md's Plan row to "Accept plan and Auto Mode (Plan Mode)" | /ask |
| PR42-Q8 | 2026-10-17 | G7 fixes docs/v3/organisms/README.md:11 under SR-4 (Brief 02, Act 05); correction: not one of the backlog's two wrong-slug docs | /ask |
| PR42-Q9 | 2026-10-17 | Brief 01 Solution arc "A record, not a status page": append-only log, conditions not decisions, data that states its age, a simulated gate check per match, unplayed fixtures never name their teams (sourced to the jdsaire/accreditapass README under B01) | /ask |
| PR42-Q10 | 2026-10-17 | Brief 02 Solution arc "A verdict that explains itself": field-by-field reasoning, optional fields default to "not shown", the verdict states what it did not check, a link per step, EN/ES remembered (jdsaire/trust-verify README under B10) | /ask |
| PR42-Q11 | 2026-10-17 | Brief 04 Solution arc "What a visitor can do here": the 10-second version, a read time measured per screen and language (SR-3), detail on demand, sources under their figures, language and theme switchable anywhere | /ask |
| PR42-Q12 | 2026-10-17 | feature slides drawn as schematic concept icons in Brief 03's style, never a screen (SY40-Q12 and brief §5.2 as they stand) | /ask |
| PR42-Q13 | 2026-10-17 | the content round stays in the build session, direction locked through /ask before any copy; one storyboard table (headline, benefit, scene, source) before any code; the external copy round (SY40-Q13) if it misses again | /ask |
| PR42-Q14 | 2026-10-17 | three cards per Solution carousel in B01, B02 and B04 (B04: 10-second version, read time per screen, source beside the figure); amends SY40-Q14's 4–6, a brief amendment line owed by Cowork | /ask |
| PR42-Q15 | 2026-10-17 | Brief 01 top three: know what your pass opens · hear about a change before the gate · plan the knockouts on conditions; each image one storyboard scene, generic phone, no app screen drawn | /ask |
| PR42-Q16 | 2026-10-17 | Brief 02 top three: know it's paid before the goods leave · see what doesn't match and say why · safe to use in front of the queue | /ask |
| PR42-Q17 | 2026-10-17 | Brief 04 Solution, three cards "why this portfolio stands out" without a superlative: open the work, not a mockup (B01, B10, B21) · every claim can be checked (B22) · honest about what is not real (B06–B08, B24, B30); verdict "Proof you can open.", lede "Three reasons to read on."; replaces the reader-features set in STORYBOARDS-PR42-v1_0 | /ask |
| PR42-Q18 | 2026-10-17 | new gate order: G3+4 Build (Solution carousels + Brief 01 Act 00 markup with seed copy) released by `APPROVED PR42 G3`, commits with provisional copy → external copy round → G5 Copy (EN + ES for the cards, Act 00 and the new regional keys, fence audit) → G6 → G7 | /ask |
| PR42-Q19 | 2026-10-17 | external-round card length ceiling: Brief 03's slide maxima, measured (label 16, title 36, body 215, alt 63 characters EN), or today's value where it is already longer and proven to fit | /ask |
| PR42-Q20 | 2026-10-17 | Brief 01 Act 00 enters the round as a facts-only seed (B31, B32, B33 verbatim, no voice); the external round writes the copy in EN and ES | /ask |
| PR42-Q21 | 2026-10-17 | the external round may propose a different storyboard scene per card; changed scenes are redrawn at the G5 copy gate | /ask |
| PR42-Q22 | 2026-10-18 | B01 and B02 card 1 ship as returned (no function descriptor, no fixtures note in the card); the page's own notes carry the disclosure; EVIDENCE B01 and B24 limits need an amendment through Cowork (proposal written) | /ask |
| PR42-Q23 | 2026-10-18 | B04 keeps JD's "Testament" pivot with the fence fixed: flawless → seamless, validate → test, engineering → build, code yourself → build, test and deploy, weekly → dropped, guarantees → delivers; the overlap with Acts 04 and 06 accepted | /ask |
| PR42-Q24 | 2026-10-18 | the site adopts the lab frame in B04 card 1 ("independent product lab", the LinkedIn-ruled phrase; never "engineering lab"); POSITIONING v1_10 proposal (site adoption of §1.9) owed by Cowork | /ask |
| PR42-Q25 | 2026-10-18 | the round's governing implications are written as proposals for Cowork (closing/PR42-run/GOVERNING-PROPOSALS-PR42-v1_0.md), applied at the sync through /governing-versions; brief §9 stands | /ask |
| PR42-Q26 | 2026-10-18 | the seven small fence fixes (B01 cards 2–3, B02 card 3, Act 00 card 3 and three ES alignments) are shown to JD as EN/ES before/after at G5 before any is applied | /ask (JD free text: "show me first … more afraid of how ES would change") |
| PR42-Q27 | 2026-10-18 | Act 00's head reveal ("… in three facts") hides below 768 in Briefs 01 and 02, as the "+" panels of schedule acts (PR40-Q3); the three cards carry the facts on phones | /ask |
| PR42-Q28 | 2026-10-18 | the seven small fixes ruled through /ask and applied: B01 card 3 "knowing what each result would change" (R-AP: no prediction) · B01 card 2 "so you reach the right gate" (no entry promise) · B02 card 3 "makes your keystrokes hard to follow … stay masked" (R-TV) · Act 00 card 3 "one counted over 20 colleagues without one in Ankara, Türkiye" / "… sin cita en Ankara, Turquía" with ES "no garantizó el acceso" (B33; country added by JD) · Act 00 fact 3 ES "el acceso" · Act 00 card 1 ES "de tres países" · Act 00 fact 2 ES "periodistas acreditados sumaron" (B32, ≤116) | /ask |
| PR42-Q29 | 2026-10-18 | gate order: G6b · Surgical (`APPROVED PR42 G6B`, with the card 1 pick), then G6 re-run in full on the new tip and re-presented, then G7 | /ask |
| PR42-Q30 | 2026-10-18 | ui_illus_label moves from the regional pair to the global pair (EN/ES unchanged); Main's three capability images tagged in both placements; work-card backgrounds stay untagged (decorative backdrops) | /ask |
| PR42-Q31 | 2026-10-18 | per-slide CTA from 768 under every slide's body: B01 and B02 "Open the running application", B04 "Read the repository"; below 768 the single CTA stays below the carousel; Brief 03 unchanged | /ask |
| PR42-Q32 | 2026-10-18 | Main EN trim: JD edits i18n/main.en.json; the run diffs, carries his EN, proposes the ES via /ask with both lines before applying | /ask |
| PR42-Q33 | 2026-10-18 | Main cap_s3_body ES "Hablo el idioma de cada división. Elimino la fricción operativa para mantener el ritmo de entrega." (mirrors both EN changes); POSITIONING §3.2 ALIGN body row owed to v1_10 (proposal) | /ask |
| PR42-Q34 | 2026-10-18 | the four briefs' Act 03 carousels inherit Main's capabilities phone carousel below 768 through one shared file, assets/css/shared/carousel-phone.css (Main's phone rules moved verbatim from capabilities.css; .dl: full width, no peek, no gap, purple label, white body, counter at the right "1 / 3"); numbered labels by CSS on B01/B02/B04 ([data-dl-num], "01 · "), Brief 03 without; kept: 3:2 images, 44 px arrows; replaces PR42-Q3's phone peek | /ask |
| PR42-Q35 | 2026-10-18 | Brief 04 Act 03 slide 1: JD picks B04-1-ALT-B (a balance scale holding the business case and the code, level), installed as work/portfolio-evolution/img/act3-01-balance.svg (act3-01-lab.svg removed); sol_s1_alt EN "A balance scale holding the business case and the code, level." / ES "Una balanza que sostiene el caso de negocio y el código, en equilibrio." | /ask |
| PR42-Q36 | 2026-10-19 | the inherited brand-purple phone label read 3.96:1 in dark (24 new contrast failures): below 768 in dark theme the label of both carousels (Main capabilities, the briefs' .dl) uses the light purple; light theme keeps brand purple; contrast 264 vs 270 at the base (the only new: B01 Act 00's purple reveal button, the known 3.96:1 class) | /ask |

## Gate sequence

Plan → G1 Order → G2 Solution copy (round 1 reworked, round 2 released) → G3 Build (held; storyboards locked; held again) → G3+4 Build with Brief 01 Act 00 → external copy round → G5 Copy (EN + ES, storyboard picks) → G6 (held) → G6b Surgical (extra gate) → G6 re-run → G7 READMEs + release.

- PR #42 Plan accepted in Plan Mode ("Accept plan and Auto Mode"; SY41-R1): PLAN-PR42-v1_0 (rulings PR42-Q1…Q8; sched/vsch → act5/v5; new keys ui_act03_solution, ui_illus_label, ui_carousel_prev/next, sol_*, B01 act0_*); G1 work begins · gate · SY41-R1
- PR #42 G1 presented (uncommitted until `APPROVED PR42 G1`): B01, B02, B04 read Architecture (04) before Schedule (05), acts renumbered to 07 (ids act4–act7/v4–v7, sched/vsch → act5/v5, B02 rv-a3 → rv-a5, B04 data-act sch → act5), regional ui_act03_schedule/ui_act05_dashboard/ui_act06_reflection → ui_act05_schedule/ui_act06_dashboard/ui_act07_reflection, B01 act5/act6_eyebrow → act6/act7_eyebrow; t
- PR #42 G1 released (`APPROVED PR42 G1`): 39f81dc fix(briefs) Architecture before Schedule, acts renumbered (3 briefs + regional labels + B01 eyebrows; one commit because the shared labels span the three briefs) · 1377353 chore(i18n) B01/B02/B04 in page order (order --strict 0); parity 0 after each; 2 commits on the branch, none pushed · gate · PR42-Q4
- PR #42 G2 presented (uncommitted until `APPROVED PR42 G2`): Act 03 · The Solution EN in B01 (5 slides), B02 (5), B04 (4): regional ui_act03_solution + 62 local sol_* keys in page order (ES = EN placeholders until G5), markup in the .dl structure with media boxes hidden until G3; figures B30, B19, B20, B11, B24, B10, B28, B13, B22; parity 0, orphans 0, links 0 broken, order --strict 0; Chrome + Web
- PR #42 G2 re-presented (round 2, uncommitted): B01, B02, B04 at 5 slides each on the PR42-Q9…Q11 arcs; 66 local sol_* keys + ui_act03_solution; 0 four-word phrases shared with the rest of each brief; parity 0, orphans 0, links 0 broken, order --strict 0; Chrome + WebKit 320/390/1440 EN 0 failures · gate · PR42-Q9…Q12
- PR #42 G2 released (`APPROVED PR42 G2`, round 2 as presented): 7b81c86 feat(brief01) · 7f23c09 feat(brief02) · c7b93ff feat(brief04), Act 03 · The Solution EN; parity 0 after each; 5 commits on the branch, none pushed · gate · PR42-Q9…Q12
- PR #42 G3 presented (uncommitted until `APPROVED PR42 G3`): shared assets/css/shared/carousel.css + assets/js/core/carousel.js (B03 Act 03 code moved unchanged in behaviour; token media ground, illustration tag, phone peek); B03 links them (34 CSS + 26 JS lines out), its 5 SVGs on the shared palette (ground removed, #C2A3FF → #9A6BFF); B01/B02/B04 carousels live with 15 schematic SVGs; regional ui
- PR #42 storyboards locked (`LOCKED PR42 STORYBOARDS`): STORYBOARDS-PR42-v1_0 as presented (B01, B02, B04 × 3 cards, PR42-Q13…Q17); G3 rebuild begins: three slides per brief, CTA below the carousel, resize fix, nine storyboard SVGs · gate · PR42-Q13…Q17
- PR #42 G3 re-presented (rebuild, uncommitted): Act 03 in B01/B02/B04 cut to the three locked storyboard cards (8 sol_* keys per brief retired), nine storyboard SVGs replace the fifteen concept drawings, the CTA moves below each carousel (.dl + .ctaset, every width), resize fix in core/carousel.js (viewport scroll reset on the desktop path); checks: carousel 32/32 per engine incl. CTA placement, re
- PR #42 G3 not released (JD: "the essence is captured"): the card copy and Brief 01 Act 00's copy go to one external copy round, EN + ES together, which also replaces the G5 ES pass for those keys; the card editorials (verdict, lede) are kept in EN; Brief 01 Act 00's code is built before the round; gate order change approved by JD · JD instruction · SY40-Q13
- PR #42 G3+4 released (`APPROVED PR42 G3`): a094b36 feat(briefs) · c5dee7e fix(brief03) · 0f71232 fix(brief03) · 44300d9 feat(brief01) · 13661f9 feat(brief02) · 52f1ca9 feat(brief04) · 471aae6 feat(brief01); 12 commits on the branch, none pushed; every commit's tree at parity 0, orphans 0, links 0 · gate · PR42-Q18
- PR #42 G5 released (`APPROVED PR42 G5 — PICKS: B01-1-B, B01-2-A, B01-3-A, B02-1-A, B02-2-B, B02-3-A, B04-1-A, B04-2-A, B04-3-A`): picked storyboards installed (B02 card 2 and B04 files renamed to their scenes: act3-02-mismatch, act3-01-lab, act3-02-components, act3-03-releases); B01 card 1 and B02 card 2 alts aligned to the close-up picks (EN + ES); commits 24a36bd feat(briefs) · 593a999 feat(brie
- PR #42 G6 presented (read-time spans uncommitted until `APPROVED PR42 G6`): read time re-measured on the tip, shown = measured in 16/16 cells (B01 5/8 · 5/10, B02 6/8 · 6/9, B03 6, B04 5/7 · 5/7); regression matrix section by section, tip vs b4def28 extract, isolated captures (base-vs-base noise 0/96): 408 sections per engine, Chrome and WebKit, 0 unintended differences (the only difference: B02 A
- PR #42 extra gate opened by JD (G6 held, not released): Main capability card 1 image (padlock guarding money, 3 prototypes), JD's trim of one Main EN key, phone menu button in its purple box, Work collapsed in the phone menu, illustration tag site-wide, per-slide CTA from 768; plan PLAN-PR42-G6B-v1_0 accepted in Plan Mode · JD instruction · —
- PR #42 G6b presented (uncommitted until `APPROVED PR42 G6B`): phone menu button in its purple box at the X's position in both states, lines and X on one centre (Chrome + WebKit), cue 7.2 s intact; Work collapsed in the phone menu (W1 reversed); ui_illus_label moved to global, 6 tags on Main's capability images; per-slide CTA from 768 in B01/B02/B04 (single CTA below the carousel only < 768); check
- PR #42 G6b released (`APPROVED PR42 G6B`): a443597 fix(nav) purple box · 87eb828 fix(nav) Work collapsed · ac1aab2 feat(main) illustration tags + key to global · cc57739 feat(main) capability 01 vault · 9a5ce0d fix(main) cap_s3 division · ca128e0 feat(briefs) per-slide CTA ≥768 · 34533be feat(briefs) shared phone carousel · d76f0c6 fix(brief04) slide 1 balance, slide 3 centred; tip equals the pres
- PR #42 G6 re-run on d76f0c6: read time 40/40 cells shown = measured (minutes unchanged: B01 5/8 · 5/10, B02 6/8 · 6/9, B03 6, B04 5/7 · 5/7); brief matrix 408 sections per engine, Chrome + WebKit, only B02 Act 00 at 390 (PR42-Q27); Main/About/Contact 30 sections, only Main #capabilities (ruled); frames identical on 7 pages both engines; floor hidden 0; CLS 0.0001–0.0002 traced to the no-store revi
- PR #42 G6 released (`APPROVED PR42 G6`): ad81261 fix(brief01) · 657d9d1 fix(brief02) · 6739dd0 fix(brief04) read time · 0e7f945 fix(briefs) dark phone label (PR42-Q36); every tree parity 0, orphans 0, links 0; 29 commits, none pushed; G7 begins · gate · SR-3, SY41-Q14

## The first plan, as accepted (17 Oct 2026)

### PLAN-PR42-v1_0 · Solution act

Prompt: `out/active/PRE-MAX/closing/P-CC-PR42-SolutionAct-v1_0.xml` (authoritative) · Brief v1_2 · base `origin/main` `b4def28` · branch `deploy/v29-pr42-solution-act` · Opus 5.5.
Accepting this plan ("Accept plan and Auto Mode") releases G1's work only. Every later gate halts on `APPROVED PR42 Gn`.

## Context

Briefs 01, 02 and 04 jump from the problem to the schedule. No act says what each solution is, so a reader has to open the app to find out. This run adds **Act 03 · The Solution** (a 4–6 slide carousel) to the three briefs and reorders their acts for momentum (SY40-Q9). It also adds **Brief 01 Act 00 · The Context** from B31–B33, then ES, read time, one regression matrix, and the SR-4 documentation.

## Rulings at Plan (/ask, 17 Oct 2026; logged as PR42-Q1…Q8 in the first execution turn, because Plan Mode allows no other writes)

| Id | Ruling |
|---|---|
| PR42-Q1 | Chassis: a shared `assets/css/shared/carousel.css` + `assets/js/core/carousel.js`, one source |
| PR42-Q2 | Slide images: transparent SVG on a media box whose ground comes from the theme tokens. **Brief 03's 5 slide images are restyled the same way** for consistency. If JD dislikes the result at G3, every carousel goes dark-only as Brief 03 ships today |
| PR42-Q3 | Phone pattern: JD asked for a reassessment, and Brief 03 inherits the result. Reassessed: keep the carousel's arrows and its single shared "01 / 0N" count (one live region, no per-card counters, nothing extended in `.swipe`), and add PR40-Q31's peek (slides at `calc(100% - var(--peek-width))`, 48 px at 390). The peek is the briefs' ruled affordance for "there is more"; the shared count scales to 6 slides where `.swipe`'s CSS counter stops at 4 |
| PR42-Q4 | Key names: eyebrow keys and ids follow the new numbers; other act-prefixed keys keep their names |
| PR42-Q5 | Brief 03 links the shared carousel files; its inline `.dl` CSS (450–483) and script (1281–1300) are removed |
| PR42-Q6 | A visible "Illustration" / "Ilustración" tag on every drawn slide image, from one regional key, in all four briefs |
| PR42-Q7 | G7 also fixes the template's Plan row: "Plan \| Accept plan and Auto Mode (Plan Mode)" |
| PR42-Q8 | G7 fixes docs/v3/organisms/README.md:11 under SR-4: "Brief 02 (`work/yape-trust-verify-brief/`) … in Act 05". Correction to my preflight: this is not one of the backlog's two wrong-slug docs |

**Scope exception (recorded, needs Cowork's brief amendment at the sync):** PR42-Q2, Q3, Q5 and Q6 change Brief 03's Act 03, against brief §2/§10: its images, its media ground, the phone peek, the illustration tag and the source of its carousel code. Everything else in Brief 03 must stay pixel-identical, and its read time stays 6.

**Decided by me, inside the brief:**
- `sched`/`vsch` become numbered ids (`act5`/`v5`). The only inbound reference is an archived plan (history).
- New key prefixes, checked free at every level: regional `ui_act03_solution`, `ui_illus_label`, `ui_carousel_prev`, `ui_carousel_next`; local `sol_*`; B01 `act0_*` (absent in B01).

## §5.1 confirmed: today → new (ids · eyebrow key)

- **B01:** — → `act0`/`v0` `act0_eyebrow` (new) · `act1` · `act2` · — → `act3`/`v3` `ui_act03_solution` (new) · `act4` Architecture (moves up, unchanged) · `sched`/`vsch` → `act5`/`v5` `ui_act05_schedule` · `act5`/`v5` Evaluation → `act6`/`v6`, `act5_eyebrow` → `act6_eyebrow` · `act6`/`v6` Closure → `act7`/`v7`, `act6_eyebrow` → `act7_eyebrow`. The Closure key is renamed first, so nothing collides.
- **B02:** `act0`–`act2` unchanged · new `act3` Solution · `act4` Architecture unchanged (moves up) · `act3` Schedule → `act5` (`data-act`, `rv-a3` → `rv-a5`) · `act5` Dashboard → `act6` · `act6` Reflection → `act7`.
- **B04:** `act0`–`act2` unchanged · new `act3` Solution · `act3`/`v3` Architecture → `act4`/`v4` (its `data-act="act4"` and `#act4Cards` now match) · `sched` → `act5` (`data-act="sch"` → `act5`, `rv-sch*` kept) · `act4` Dashboard → `act6` · `act5` Reflection → `act7`.
- **Regional:** `ui_act03_schedule` → `ui_act05_schedule` "Act 05 · The Schedule" / "Acto 05 · El Cronograma" · `ui_act05_dashboard` → `ui_act06_dashboard` · `ui_act06_reflection` → `ui_act07_reflection` · `ui_act04_architecture` and `ui_act01_problem` kept. Brief 03 renders none of the renamed keys (measured). Retired keys are deleted in EN and ES with 0 references.
- Section comments follow. No script reads an act id or an act key (measured: inline scripts reference only panel, gantt and `sch_*` keys).

## Act 03 · The Solution: counts and pitch arcs (copy is G2's; ids are the EVIDENCE each slide leans on)

- **B01 AccreditaPass, 5 slides:** (1) hook: a valid pass can still meet a closed gate (B01) · (2) the solution: accreditation as a live record that reaches the journalist and the gate (B01) · (3) how it works: every change arrives with its reason and next step, without a refresh (B01) · (4) built for any phone, in three languages, keyboard and screen reader, with audits on simulated participants, badged (B30, B07) · (5) proof and next step: the fixture's 104 matches / 16 venues / 3 countries (B19), five weeks (B20), open the live app (`ui_cta_live_app`).
- **B02 Trust & Verify, 5 slides:** (1) hook: the screenshot says paid, and every field on it can be forged · (2) the solution: check the one field the bank writes, the operation number (B10) · (3) how it works at the counter: a secure keypad with randomized digits, a verdict in seconds (B11) · (4) proof: 45/45 tests across 6 fraud scenarios and 5 CI checks, on fabricated fixtures (B11, B24) · (5) next step: under a week, live; open the app (B10).
- **B04 Portfolio, 4 slides:** (1) hook: you are reading the proof (B21) · (2) the solution: a bilingual multi-page site where every claim traces to a source (B28, B13) · (3) how it works for the reader: EN/ES, light/dark, any width, keyboard and screen reader (B13) · (4) how it is built, and the next step: gated runs, numbered rulings, localhost review, then read the repository (B22, P05; `ui_cta_repo`).

## Brief 01 Act 00 (G4), outline

The chassis is Brief 02 Act 00: a verdict, a reveal ("… in three facts") with three scan lines, and three cards on `.act .swipe`. Card 1 is tournament scale (B31). Card 2 is press scale "by the quarter-finals" (B32). Card 3 is accreditation without access (B33). The organiser and the broadcasters are never named. Source URLs go to the records only.

## Build design (G3)

- `core/carousel.js` exports `init(root, { store })`. It is B03's logic generalised: translate on desktop, scroll-snap on phones, arrows, swipe above 768, inert/aria-hidden off-slides, resize and breakpoint re-sync. `store` is a get/set adapter: B03 passes its existing `uiState` (key `dl`), so its behaviour holds; B01/B02/B04 get a per-page sessionStorage key (`b01:dl` …) with every access in try/catch. Each brief's module script imports it next to `progress.js` and `decoration.js`.
- `carousel.css` holds the `.dl*` rules moved from airport/index.html, plus the PR42-Q3 phone peek and the token media ground (`--color-brand-black` swaps per theme). It is linked by all four briefs. The illustration tag is `.dl__tag`, keyed `ui_illus_label`.
- SVGs go in `work/<slug>/img/act3-0N-<name>.svg` (new `img/` folders in B01 and B04): 768×512, transparent, `title` element, strokes in `#A100FF` (≈3.7:1 on near-black, ≈5.3:1 on white) plus one neutral grey that passes 3:1 on both grounds. Schematic only (SY40-Q12). B03's 5 files get the same palette, with the drawings unchanged.
- State motion stays 420 ms translate, instant under reduced motion. The spec v1.6 row proposal goes to `closing/PR42-run/`.

## Gates: files, commits, review

| Gate | Work (one commit per item) | Review in the preview browser, `http://127.0.0.1:8000/` | Effort |
|---|---|---|---|
| G1 · Order | Branch created; dict-history/base snapshot; per brief, acts reordered and renumbered (3); regional renames (1); `tools/order.py --write b01`, then `b02`, then `b04`, then `--strict` 0 (1) | The three briefs at 390/1440, EN/ES: new numbers, Architecture before Schedule; `/work/airport/` Act 01 unchanged | Medium |
| G2 · Solution EN | `sol_*` keys in page order (ES holds the EN value as a placeholder until G5), markup with fallbacks, `ui_act03_solution` (3–4); gate table with EVIDENCE ids; copy drop | Act 03 text on the three briefs at 1440/390, EN | High |
| G3 · Build | carousel.css + core/carousel.js (1); B03 links them, inline removed (1); B03 SVGs restyled (1); illustration tag + control keys (1); per brief, Act 03 markup + SVGs + `img/` README (3×2) | `#act3` on all four briefs at 320/390/768/1024/1440, dark/light, EN: buttons, arrow keys, swipe at 390, reload mid-carousel; B03 elsewhere unchanged | High |
| G4 · B01 Act 00 | `act0_*` keys + markup (1); fence table | `/work/accreditapass/#act0` at 390/1440, both themes | High |
| G5 · ES | copy-es pass after reading ES-STYLE-B03-JD-PATTERNS (or the external round's returns); per brief (3) + regional (1) | Act 00/03 in ES at 320/390/1440, dark | High |
| G6 · Read time + regression | `.rt` spans set from `rt40.js` (≤3); detached worktree of `b4def28` on 8010; matrix: B01–B04 at 390/768/1440 × dark/light × EN/ES in Chrome + WebKit (96), Main/About/Contact at 390 + 1440, dark, EN (6), ≈102 captures; contrast vs 270, floor, frames, typo scan | records/read-time.json, matrix summary | Medium |
| G7 · Docs + release | READMEs (`img/` folders, assets/css/shared, assets/js/core, root map, three AccreditaPass descriptors); DICTIONARIES.md counts; template rows (Q7 + SY41-Q12); organisms README (Q8); proposals (spec v1.6, KEYS v1_6, EVIDENCE notes); archive; PR-42-BODY.md | READMEs, template, body on 8000; `tools/links.py` | Medium; push Low |

About 33–37 commits in all (the in-chat summary's 15–20 was low). Archive: `docs/v4/cc-plans/Plan-PR42-SolutionAct.md` and `docs/v4/cc-completion-reports/pr42-solution-act-completion-report.md`, with index rows in both folder READMEs, docs/README.md and docs/v4/README.md.

## First execution turn (after acceptance)

1. Log PR42-Q1…Q8, the scope exception and the plan's acceptance in PRE-MAX-CHANGELOG.md. Save this plan as `closing/PR42-run/PLAN-PR42-v1_0.md`.
2. Task 0: gh access, inputs, the clone-sync confirmation, the tools re-run, ports; create `closing/PR42-run/` (README, RESUME, `harness/h` copied from PR41 with NODE_PATH to its node_modules).
3. Start `python3 -m http.server 8000 --bind 127.0.0.1` from repos/designops, then G1.

## Verification

- Every gate that touches keys or files runs `python3 tools/parity.py`, `links.py`, `orphans.py` and `order.py --strict`, and reads 0 before committing. These scoped text checks run silently: no unresolved key, console error or overflow at 320/390 on touched pages, in Chrome and WebKit for CSS/JS changes.
- G3: carousel behaviour checks (keys, swipe, count, inert, reload, reduced motion); hidden text 0; CLS 0; one-shots ≤1.5 s.
- G6: the one pixel matrix (tip vs base worktree, base-vs-base noise measured first, lazy images scrolled); read time shown = measured in 16 cells; contrast no new failure vs 270.
- G7: attribution scan of the commits, files and PR body (0); `merge-base --is-ancestor origin/main HEAD`; template checklist filled.
- Images JD views (beyond the slide SVG deliverables) only after /ask.


## The extra-gate plan, as accepted (18 Oct 2026)

### PLAN-PR42-G6B-v1_0 · Extra gate: surgical changes

PR #42, branch `deploy/v29-pr42-solution-act`, tip `34522ab` (17 commits, none pushed). G6 is held. Read-time spans stay uncommitted until G6 is re-run (PR42-Q29).

## Context

JD opened an extra gate to use the run's intervention types for five small changes:
- Main's capability card 1 image: a padlock guarding money, matching the card's "protect your budget" promise, as three prototypes.
- His own trim of one Main EN key.
- The phone menu button.
- The Work briefs collapsed in the phone menu.
- An "Illustration" tag on every drawn image.
- A per-slide CTA from 768 in the Solution carousels.

## Rulings at this plan (/ask, logged as PR42-Q29…Q32 in the first execution turn)

| Id | Ruling |
|---|---|
| PR42-Q29 | Order: G6b · Surgical (`APPROVED PR42 G6B`, with the card 1 pick), then G6 re-run in full on the new tip (read time, matrix on all 7 pages, since the navbar changes everywhere) and re-presented for `APPROVED PR42 G6`, then G7 |
| PR42-Q30 | `ui_illus_label` moves from the regional pair to the global pair (same EN/ES values; regional −1, global +1). Main's three capability images are tagged in both placements (triptych from 768, phone carousel). The work-card backgrounds stay untagged (decorative backdrops, `alt=""`) |
| PR42-Q31 | Per-slide CTA from 768: B01 and B02 "Open the running application", B04 "Read the repository", under every slide's body. Below 768 the single CTA stays below the carousel. Brief 03 keeps its two slide links |
| PR42-Q32 | Main EN trim: JD edits `i18n/main.en.json`; I diff it, carry the EN as written, and propose the ES through designops-copy-es via /ask (both lines shown) before applying |

## The work (one commit per item, after the phrase)

1. **Main card 1 image: three prototypes** at `closing/PR42-run/prototypes/main-cap1/`, gallery on 8011 next to the Solution picks.
   - All share the siblings' style: 768×512, dark `#0A0A0A` ground, purple gradient, as `cap-adoption.svg` and `cap-augmentation.svg` are.
   - A: a modern smart padlock (shackle and a glowing keypad) locking a money bag.
   - B: a padlock closing over a stack of coins and bills, with a shield halo.
   - C: a vault-style lock ring around banknotes.
   - The pick replaces `assets/img/services/cap-production.svg`. File name kept so both placements update. `cap_s1_img_alt` EN/ES are rewritten to describe the picked image (shown at the gate).
2. **Main EN key (JD's trim):** the path is [`i18n/main.en.json`](../../../i18n/main.en.json). After his save: diff against the G5 snapshot, fence check once, then the ES proposal through /ask (PR42-Q32).
3. **Phone menu button** in `assets/css/shared/nav.css`, lines 128–136 and 359–362:
   - Closed state takes the open state's box: purple 44 px square, margin-right 0 (the X's current position), white 2 px lines.
   - Only the symbol changes on tap (three lines → X); the box stays.
   - Both symbols centred on the same axis: closed lines at a 0.3 rem gap; open lines rotate about the centre with the existing `calc(0.3rem + 2px)` offsets.
   - The 7.2 s cue ring (`assets/css/pages/home/navcue.css`, `navcue.js`) stays unchanged around the same 44 px box.
4. **Work collapsed in the phone menu:** `assets/js/core/navchrome.js:256`, `wireDisclosure(…, true)` → `false`. The Work row opens on tap; markup `aria-expanded="false"` already matches. This reverses W1 ("the overlay's Work group opens expanded"); the comment is updated.
5. **Illustration tag site-wide** (PR42-Q30):
   - Key move in `assets/i18n/briefs/briefs-ui.{en,es}.json` → `assets/i18n/{en,es}.json`.
   - The `.dl__tag` look is reused for Main as a small shared rule (`.illus-tag` in `assets/css/shared/section-extras.css`, which Main loads), on `.services__image-slot` with `position:relative`.
   - The tags go in `index.html` (3 + 3 placements).
6. **Per-slide CTA from 768** (PR42-Q31):
   - Each slide's `.dl__content` gains B03's `.dl__cta` link (same CSS, already in `shared/carousel.css`), key `ui_cta_live_app` / `ui_cta_repo`, `target="_blank"`.
   - `carousel.css` hides `.dl + .ctaset` from 768.
   - The existing phone rule already hides `.dl__cta` below 768, so the below-carousel CTA shows only there.
   - Brief 03's markup is untouched; its slide links keep their behaviour.

## Gate G6b review (preview browser, or http://127.0.0.1:8000 / 8011)

- Main at 390: the purple menu button, its tap switching lines ↔ X in place, the cue on a first visit (storage cleared); the menu with Work collapsed.
- Main capabilities at 390/1440: card 1's new image with its tag; all images tagged.
- B01, B02, B04 `#act3` at 768/1440: a CTA under every slide's body, none below the carousel; at 390 the single CTA below.
- Prototype gallery on 8011 for the card 1 pick.

## Verification

- Text checks on the touched pages (all 7 for the navbar): `tools/parity.py`, `orphans.py`, `order.py --strict`, `links.py` at 0; 0 console errors, 0 overflow, 0 unresolved.
- Hamburger geometry: closed and open symbols share one centre (measured box centre and line midpoints, ±0.5 px), the box position unchanged from today's open X, Chrome and WebKit.
- Cue still plays on a first Main view and stops on tap or scroll, 7.2 s; static under reduced motion.
- Overlay: Work `aria-expanded="false"`, submenu hidden on open; one tap expands it.
- Carousel suite re-run with the CTA checks inverted from 768.
- Contrast: no new failure (the tag reuses the existing muted text).
- Then G6 in full on the new tip: read time 16 cells, matrix on all 7 pages with isolated captures, smoke, floor, frames.

## Records

- Changelog lines for PR42-Q29…Q32 and each gate event.
- Prototypes and the pick under `closing/PR42-run/prototypes/main-cap1/`.
- GOVERNING-PROPOSALS gets the KEYS row for the key move and the W1 reversal note.

