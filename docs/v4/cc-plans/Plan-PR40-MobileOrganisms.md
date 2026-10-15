# Plan — PR #40 · Mobile organisms (P-CC-PR40-MobileOrganisms-v1_0)

**Branch:** `deploy/v27-pr40-mobile-organisms`, from `a083cab` (origin/main after PR #39)
**Pull request:** #40, manual merge only
**Dispatch:** `BRIEF-CC-PR40-MobileOrganisms-v1_1.md` → `P-CC-PR40-MobileOrganisms-v1_0.xml`, both in `out/active/PRE-MAX/closing/` outside this repository

This file holds the plan as approved and the rulings taken at its gates. The run's full working plan and records are in
`out/active/PRE-MAX/closing/PR40-run/`.

---

## 1. The plan as approved (13 Oct)

### Scope
- **G0:** commit decoration spec v1.4 verbatim.
- **G1–G2:** About's journey filter on phones (prototypes, then the pick built).
- **G3:** Briefs 01, 02 and 04 schedules on phones as a relay timeline with a purple desktop card; the Gantt unchanged from 768.
- **G4–G6:** the dashboards: synthesis, prototypes, build.
- **G7:** read time per breakpoint and per language.
- **G8:** release; push and open PR #40, never merge.

### Method
- One shared stylesheet, `assets/css/shared/brief-charts.css`, linked by Briefs 01, 02 and 04; Brief 03 untouched (PR40-Q1).
- EN/ES dictionaries at three levels; parity, key order by page, markup fallback = EN; retired keys deleted in both languages.
- Motion only through registered decoration patterns; reduced motion = final frame; one-shots ≤ 1.5 s.
- Every check measured headless in Chrome and WebKit; JD reviews in Safari.

### Gates
Each gate stopped and released only on its exact phrase. A correction plus the phrase released after the correction was applied;
new scope never released a gate — it was ruled through /ask, logged, and re-presented.

### How scope grew
JD widened the run at its gates: Brief 02's schedule redesigned on planned hours (G3), the "&" glyph (G3), new phase names (G3),
the dashboard act rebuilt as one panel at every width (G5–G6, superseding the brief's "desktop dashboards out of scope"),
and phone card scrollers across the briefs (G6b).

## 2. Rulings

| Id | Ruling | Source |
|---|---|---|
| PR40-Q1 | the phone schedule's relay timeline, the highlights component and the purple desktop card are styled from one new shared stylesheet linked by Briefs 01, 02 and 04; Brief 03's inline relay rules (40) stay untouched; unifying them is a PR #41 backlog line | /ask (PR #40 preflight) |
| PR40-Q2 | read time per breakpoint AND per language: four numbers per brief (phone < 768 / 768 and up × EN / ES), switched by width and by the language swap; the shared ui_read_min label stays (amends PR38-Q24's one EN-derived number; measured at a083cab, ES runs higher: B01 9 vs 8, B02 10 vs 9); the inherited rule for future briefs reads per breakpoint × per language, as a proposal for the post-PR #40 sync | /ask (PR #40 preflight) |
| PR40-Q3 | below 768 a schedule act hides the "+" panels before its chart and the footnotes after it (B01, B02, B04) | principal instruction |
| PR40-Q4 | Brief 02 Act 03 lede at every width, Brief 01's .scan: "From research to development." / "De investigar a desarrollar." (ES by JD) | /ask |
| PR40-Q5 | Brief 02's chart rebased from cumulative story points (0–59) to cumulative planned hours (0–66), axis head "Planned hours" / "Horas planificadas"; hours are planned-capacity estimates (the chart's own source note) | /ask |
| PR40-Q6 | Brief 02 phone nodes show planned hours only; the last adds "Live 15 Jul 2026" (designops PR #8 merged 15 Jul 2026 23:48 Lima; the build is one commit, fed6219, so no per-phase dates or commits exist) | /ask |
| PR40-Q7 | "05 Proof & delivery" → "05 Test and delivery" / "05 Evaluación y entrega" | principal instruction |
| PR40-Q8 | no site-wide "&" ban (JD revoked his item 3 call); "&" renders from a cleaner glyph via @font-face unicode-range U+0026, source prototyped for JD's pick; any download asked first | /ask |
| PR40-Q9 | Brief 02 from 768: filter chips and script removed; epic bars unlabelled, milestones shown; effort column = SP + h per epic; expanded tasks show "SP · h" on their bars; no task values in the effort column | principal instruction |
| PR40-Q10 | one regional panel label "How to read the chart" / "Cómo leer el gráfico" (ui_chart_read_btn) on Brief 02's and Brief 04's chart panels; bodies local; Brief 02's rewritten on Brief 04's "Chart overview" model | principal instruction |
| PR40-Q11 | Brief 02 footnote: what a story point is; the build-in-time footnote cancelled by JD (no added value; doesn't match the phone timeline) | principal instruction |
| PR40-Q12 | shared footnote standard: Brief 04's .synthesis rules in the shared brief stylesheet; Brief 01's schedule note takes them; a rule for future briefs (chassis proposal) | principal instruction |
| PR40-Q13 | shared Gantt epic number: a purple .gantt__stage-n span from the epic's index, name keys hold the name only; applied to Briefs 01 and 02; a rule for future briefs (chassis proposal) | principal instruction |
| PR40-Q14 | Brief 02 Act 03 verdict "Built in one week." / "Hecha en una semana." (JD; within EVIDENCE B10 "under a week") | /ask |
| PR40-Q15 | "&" pick A (JD): every "&" renders from Arial (Arial Bold to 799, Arial Black above; Roboto on Android) through unicode-range U+0026 faces inside the 'Archivo' family, the upright face declared per weight band (same file) so the faces compose; Archivo's vertical metrics on the "&" faces; base/fonts.css only, all 7 pages, no font stack edited. Verified: CDP platform fonts, every "&" node in Arial, no other node changed font; full-page diffs vs the tree without the rule, 7 pages × 390/1440 × EN/ES, every changed pixel on a line holding "&", heights equal; Archivo has no alternate "&" (30 OpenType features tested) | /ask |
| PR40-Q16 | Brief 02 effort column shows "N SP" and "N h" only ("planned"/"planificadas" dropped, JD); gantt_unit_h_planned retired in EN and ES, 0 references; the phone nodes keep "N h planned" (no axis there to say the hours are planned) | principal instruction |
| PR40-Q17 | Brief 02 phase names (JD asked for more evocative names at every width, the phone body staying planned hours; /ask): 01 Project setup / Configuración inicial · 02 Verification flow / Flujo de verificación · 03 Session and data flow / Sesión y flujo de datos · 04 Interface security / Seguridad de interfaz (EVIDENCE B11 "interface security controls") · 05 Test and delivery / Evaluación y entrega (kept); chart data, keys, phone relay, dependency text and fallbacks updated | /ask |
| PR40-Q18 | Brief 01 and Brief 04 phase names (JD; /ask, measured on jdsaire/accreditapass's 206 commits and Brief 04's PR mapping WC-Q4): B01 01 Starting prototype / Prototipo inicial · 02 Usability audit / Auditoría de usabilidad · 03 Simulated research / Investigación simulada · 05 Feature iteration / Iteración de funciones · 06 Back-end API / API Back-end (04 and 07 kept); B04 03 Core pages / Páginas principales · 04 Themes and artwork / Temas e ilustraciones · 05 Bilingual copy / Textos bilingües (01–02 kept) | /ask |
| PR40-Q19 | Brief 01 phone highlights may use the dashboard's audit figures (no EVIDENCE line yet), sourced to the page's audit footnote; EVIDENCE proposal E1 | /ask |
| PR40-Q20 | Brief 04 phone highlights compare every V2/V1 pair the dashboard shows; the V1 figures without a line (286 commits, 10 organisms, 175 keys) go to EVIDENCE proposal E2 | /ask |
| PR40-Q21 | three highlight items per brief | /ask |
| PR40-Q22 | dashboards on every width (JD; extends BRIEF-CC-PR40 §2/§10, which kept desktop dashboards out of scope): the three G4 highlights lead at every width; on desktop/tablet the trimmed dashboard follows (detail on demand); phones end with the purple desktop card | /ask |
| PR40-Q23 | dashboard tabs on every brief: Measure · Insight (one regional pair); Brief 04's Derived tab goes; Brief 01's severity, heuristics and WCAG tables sit under Measure, its three insights under Insight | /ask |
| PR40-Q24 | dashboard cuts (JD asked for one recommended package): Brief 02 drops "5 security controls" (B11 limit) and "0 lines of code typed by hand" (P05), moves "0 backend services" to a footnote; Brief 04 drops the Derived tab and folds Pages into the Organisms line | /ask |
| PR40-Q25 | insight standard for every brief (JD, rule for the future): each dashboard act carries exactly two insight statements, the message and "What transfers", each a bold lead plus one or two sentences, at reading size with a purple rule, shown at every width in the same placement (picked at G5); built from the dashboard's own figures and copy, no new fact | principal instruction |
| PR40-Q26 | dashboard act, G5 round 3 (JD): phone figures in solid white; insights placement Y (figures, then the two statements) at every width; one container in Brief 03 Act 05's relay pattern ("The figures" segment → purple baton "What it means" → the insights segment on the card surface), stacked at every width; from 768 each figure is drawn as what it says (direction: small before, diagonal arrow, large after; share: split bar; completeness: full meter; count: the named items; span: a seven-day strip; comparison: two bars on one scale), static (no new motion pattern); phones get none of it | principal instruction |
| PR40-Q27 | insight statements at the brief's card-text size (.card__x, .94rem light, semibold lead: 14.1 px at 390, 16.0 px at 1440); only the figures play with size | /ask |
| PR40-Q28 | the old dashboards are removed at every width (supersedes PR40-Q22's "trimmed dashboard follows", and with it Q23's tabs and Q24's cuts); each panel is followed by at most 3 footnotes (method, limit, one rescued figure), hidden on phones: B01 method (simulated audits, 0653b4e/b37066d) · heuristics 5 fails → 7 passes · still open (not audited in a browser); B02 method · front-end only (3 endpoints, mock fixtures) · client-side controls named without a count; B04 single-page method · multi-page cut-off · review gates 21 PRs in 45 days vs 52 in 71 | /ask |
| PR40-Q29 | no "desktop" card for the dashboard on phones (JD challenged the "full dashboard" promise: the desktop panel adds presentation and footnotes, not information); the schedule card stays, as the desktop Gantt holds more | /ask |
| PR40-Q30 | Brief 01 items 1–2 carry the simulation label in their line: "Simulated audits, first to second." / "Auditorías simuladas, de la primera a la segunda." | /ask |
| PR40-Q31 | below 768 the scoped acts' main card sets scroll horizontally in Brief 02 Act 02's pattern (snap, peek, swipe, no arrows: PR38-Q25): B01 Acts 01, 02, 04, 06; B02 Acts 00, 04, 06; B04 Acts 00, 01, 02, 04, 06; supersedes W2A-Q1's one-column phone grid for these sets only; 768 up unchanged | principal instruction |
| PR40-Q32 | below 768 the purple detail CTAs inside those cards are hidden; each card shows its foundational body as is | principal instruction |
| PR40-Q33 | each scrolled card shows its position "01 / 04" (CSS counters, language-neutral, no keys) with the next card peeking; showing only three cards not needed (every set holds 3–4); B01's "1)" problem ordinal hidden on phones | principal delegated |
| PR40-Q34 | fence: where a hidden CTA held an act's only limit, a phone-only footnote under the scroller carries it from existing sentences: B01 Act 02 "Simulated design research." (disclosure2_lead reused); B01 Act 04 the rv-b2 sentence as act4_fn_limit | /ask |
| PR40-Q35 | only the main sets scroll; B01 Act 02's HMW pair, the Act 06 notes and the Keep-exploring cards stay stacked | /ask |
| PR40-Q36 | Brief 02 Act 06: the sequel "The gap I did not close…" and its key act6_sequel are deleted in EN and ES, with B02's now unused .sequel rules; the fabricated-record limit stays in the act's disclosure note (independence) | principal instruction |
| PR40-Q37 | Brief 02 Act 04 footnote act4_synthesis shortened at every width to ≤1.5 lines at 320: "Only the operation number comes from the bank; the rest can be faked." / "Solo el número de operación viene del banco; lo demás se falsifica." | /ask |
| PR40-Q38 | Brief 04 Act 02 footnote act2_foot shortened at every width: "Building with AI takes orchestration, research to review, not a prompt." / "Construir con IA exige orquestación, de la investigación a la revisión." (drops the vibe-coder contrast and the "2027" slip) | /ask |

## 3. Gate log

| Gate | Event | Date |
|---|---|---|
| Plan | `APPROVED PR40 PLAN` (given while Plan Mode was active; Plan Mode approval of this file followed); setup and baselines run, G0 prepared | 13 Oct 2026 |
| G0 | `APPROVED PR40 G0`; 98d5e83 committed | 13 Oct 2026 |
| G1 | `APPROVED PR40 G1 — A`, released with its final correction (Contact select CSS one for one; 0 computed-style differences) | 14 Oct 2026 |
| G2 | `APPROVED PR40 G2 A1`, released with its final correction (A1 built and verified); 73c5abb | 14 Oct 2026 |
| G3 | `APPROVED PR40 G3` after two iterations (PR40-Q3…Q18); 12abdc4, d56d130, 7635ef8, a1d20da, 125f34e | 14 Oct 2026 |
| G4 | `APPROVED PR40 G4`; synthesis locked (9 items) | 14 Oct 2026 |
| G5 | `APPROVED PR40 G5 — Y` after four rounds (PR40-Q21…Q30); prototypes on :8020/g5/ | 14 Oct 2026 |
| G6 | `APPROVED PR40 G6`; 8c91fdb, adf6af0, 1b84308, 9551a80 | 14 Oct 2026 |
| G6b | `APPROVED PR40 G6b` after fixes Q36–Q38; 0fd84f1, 2b1685e, 91b78f2, 8c4d12e | 14 Oct 2026 |
| G7 | `APPROVED PR40 G7`; c76755e | 14 Oct 2026 |

