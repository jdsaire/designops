# Plan — site-wD · Brief 03 rebuilt as TUUA Transfer (P-CC-WD-B03-TUUA-v1_0)

**Branch:** `deploy/v21-wd-b03-tuua`, from `0b94217` (origin/main after PR #32), with `main` merged in after PR #33 (`6910b77`)
**Pull request:** #34, manual merge only
**Dispatch:** `BRIEF-CC-WD-B03-TUUA-v1_0.md` → `P-CC-WD-B03-TUUA-v1_0.xml`, both in `out/active/PRE-MAX/site-wD/` outside this repository

This file holds the plan as approved, followed by every ruling that changed it during the run. Where a later ruling conflicts with the plan, the ruling governs.

---

## 1. The plan as approved (27 Sep)

### Scope
Brief 03 (`work/airport/`) is rebuilt as a single-project brief on TUUA Transfer, the web payment channel for the fee charged to international transfer passengers at Jorge Chávez. The LimaFly and lounges chapters, the prologue and the trilogy close leave the page; their record is kept outside the repository (`ARCHIVE-B03-Ch01-Ch02`). The five strings that described the trilogy change in the same PR: Main card 3, the Work-menu label for card 03, the page title, the meta description and the head comment (WD-Q6).

### Structure
Seven acts and a close on the brief chassis, told as a design-to-handoff story (WD-Q3, WD-Q4): 00 Context · 01 Problem · 02 Stakeholders · 03 Scope & deliverables · 04 Design · 05 Handoff · 06 Contrast · Close.

### Method
- Copy under `designops-copy-edition` v1.0 and `designops-copy-es` v4.0: three-level i18n, EN/ES parity per file, markup fallbacks equal to EN, the evidence fence in both languages, usted throughout.
- Facts with no EVIDENCE line are confirmed by JD one at a time; the run proposes W04+ lines and never edits `EVIDENCE.json` (WD-Q7).
- The principal edits on disk at every gate; the run diffs, records and carries each edit and never re-applies its own value.
- One commit per item; after each, EN/ES parity and the headless matrix (7 pages × 390/768/1440 × dark/light × EN/ES).

### Gates
Each gate is released only by its exact phrase. WD-Q57 set act-by-act segments; WD-Q61 replaced them with two page-wide gates: **1·06** (EN structure) and **2·06** (ES), followed by Gate 3 (EN mirror read) and Gate 4 (PR, archive, conflict set, EVIDENCE proposals).

### Verification
Headless matrix (errors, overflow, clipped lines, unresolved and unapplied keys, panel titles); interaction, network-map, reload and contrast suites; the freeze diff on every page this run must not change; read time measured by the Briefs 01/02/04 method.

## 2. Rulings added during the run (WD-Q1 to WD-Q97)

Full text in `PRE-MAX-CHANGELOG.md`; lines below are shortened.

| Ruling | Date | Decision |
|---|---|---|
| WD-Q1 | 09-27 | Brief 03 read time is measured at the structure-EN gate, same method as Briefs 01/02/04 |
| WD-Q2 | 09-27 | Brief 03 closes with the regional cards Verify App + AccreditaPass (unchanged; no bank change) |
| WD-Q3 | 09-27 | acts are re-derived for a design-to-handoff story, not a build story; Act 00 context in plain language for readers new to airports (Brief 02 precedent); proposal in HANDOFF-WD-B03-TUUA-v1_0 §3, pending confirmation |
| WD-Q4 | 09-27 | Brief 03 TUUA acts: full 7 + close — 00 Context · 01 Problem · 02 Stakeholders · 03 Scope & deliverables · 04 Design · 05 Handoff · 06 Contrast · Close; risks & constraints dropped (no evidence line); per-area needs in… |
| WD-Q5 | 09-27 | Brief 03 title line ES "Cobrar lo que nunca se cobró" / EN "Charging what was never charged"; the handoff fix "Monetizando pasajeros en conexión" withdrawn (still claims revenue as JD's act; EN commodifies passengers);… |
| WD-Q6 | 09-27 | the five trilogy-describing strings (Main card 3, Work menu label 03, page <title>, meta description, head dev comment) are fixed in the TUUA run; manual merge |
| WD-Q7 | 09-27 | TUUA facts with no EVIDENCE line follow the WC-Q3 pattern (JD confirms one by one at the plan gate; the run proposes W04+ lines in its report; never edits EVIDENCE.json); hero tags drop Usability Testing (retired as… |
| WD-Q8 | 09-27 | BRIEF-CC-WD-B03-TUUA-v1_0 is approved as written (its DRAFT header is stale); this approval is the freeze v2_1 §6.5 confirmation for removing Chapters 01–02 and their assets from the live page (brief §11, W2A-Q3… |
| WD-Q9 | 09-27 | the site-wD run is declared Opus 5.5, High effort, Auto Mode, as the brief header says; the trigger message's "Medium" is not carried |
| WD-Q10 | 09-27 | site-wD works in its own git worktree (repos/designops-wD) and its gates are reviewed at http://127.0.0.1:8001, served from that worktree; port 8000 and repos/designops stay with the halted site-wC run |
| WD-Q11 | 09-27 | the Work-menu label for card 03 is rewritten in the chrome dictionary (EN+ES) and in its markup fallback on all 7 pages (14 occurrences), including work/portfolio-evolution/index.html; the rebase conflict with site-wC… |
| WD-Q12 | 09-27 | Brief 03 removal set approved at the plan gate: local keys act0_* 12, act1_* 60, act2_* 17, dash_* 16, act4_* 9, cta_proto (EN+ES), tag_usability_testing, style groups .wt, .stopgrid/.stop, .evidence, .dash/.dcell,… |
| WD-Q13 | 09-27 | §5.3 confirmed: F32, F33, F35–F38, F40; F34 confirmed and elaborated [STATED]: JD was not the project owner but the internal consultant from Processes and Innovation, delivering the deliverables and advising in decision… |
| WD-Q14 | 09-27 | §5.3 confirmed: F39 [STATED], F41, the four proposed screens + flowchart written as "I designed" (W02; never "sole author", PLAN-D4 §3.2), the four collection channels with the web platform the only digital one |
| WD-Q15 | 09-27 | §5.3 confirmed: Q11 (planning held through launch, [STATED]), Q12 (no precedent), TUUA = "Tarifa Unificada de Uso de Aeropuerto" (glossary, acronym only); the page cites the live fee $11.86 only and drops the mockup's… |
| WD-Q16 | 09-27 | Act 02 lists the five areas only (no per-area needs) |
| WD-Q17 | 09-27 | Act 04 publishes framed real captures of the four proposed screens and the flowchart from ch3-mockup-plataforma-vf.pdf, dummy placeholders visible (authorized deviation from P-CC-WD's no-new-asset ceiling; brief §11… |
| WD-Q18 | 09-27 | Act 06 verb "I reviewed" |
| WD-Q19 | 09-27 | tags in the brief's order |
| WD-Q20 | 09-27 | H1 without terminal period |
| WD-Q21 | 09-27 | live TUUA link in the hero ctaset and in the close |
| WD-Q22 | 09-27 | Act 04 publishes all four mockup screens as real captures; screen 3's caption states that the amount on the mockup was a working figure and the live fee is $11.86 (Act 06); $11.32 is never stated in copy |
| WD-Q23 | 09-27 | PM-7 amended for Brief 03 Act 04 only: a faithful redraw of JD's own 2025 TUUA proposal is allowed, captioned as a redraw (delivered in Spanish, shown in this site's style); PM-7 holds everywhere else; supersedes WD-Q17… |
| WD-Q24 | 09-27 | Act 04's screens and flowchart are built in-page (HTML/CSS phone frames + inline SVG), coloured from tokens.css, every label a dictionary key (EN/ES, dark/light); lifts the brief's "no new component" line for this… |
| WD-Q25 | 09-27 | redraw fidelity: same 4 screens, fields, buttons, step dots, flowchart nodes, branches and legend; dummy personal data becomes neutral placeholders; no fee amount on screen 3 ($11.32 leaves the page) |
| WD-Q26 | 09-27 | "/design" = the design plugin skills (design-system, artifact-diagramming, accessibility-review) guiding the in-page build; no Claude Design canvas |
| WD-Q27 | 09-29 | Brief 03's "no new component" line is lifted: in-page components (SVG, tables, charts, tabs, carousels) are allowed, carried in in-page CSS/JS only, no new file, stylesheet or dependency; sibling-brief patterns reused… |
| WD-Q28 | 09-29 | Act 04's redrawn screens and flowchart stay as a placeholder through Gates 1–3, flagged at each gate; at the final gate they are rebuilt as interactive vanilla HTML/CSS/JS design artifacts, route planned then; locked… |
| WD-Q29 | 09-29 | the four-channel model moves to an Act 00 passenger-journey diagram; Act 04 loses its "Four channels" panel |
| WD-Q30 | 09-29 | Act 03 is drawn as a WBS tree with no months; the three-branch grouping is framing, not the closure mail's |
| WD-Q31 | 09-29 | Act 02 becomes a role matrix table, deferred to the next gate (JD supplies areas and roles); JD states that areas inside and beyond the five were involved [STATED, detail owed]; until then Act 02 stays and the EN says… |
| WD-Q32 | 10-01 | Act 01 why-now timeline, public-safe: concession since 2001 → contract amendment in the early 2010s provides a transfer fee → new terminal, delayed by the State's land release, opens June 2025 → fee chargeable but not… |
| WD-Q33 | 10-01 | cost of delay, labelled estimate at today's volume: 130,000 × USD 10.05 (fee before 18% IGV) ÷ 30 ≈ $43,600 a day; ≈53.5% to LAP (≈ $23,300), 46.511% royalty to the State (≈ $20,300); sources W03, Aviacionline 30 Jul… |
| WD-Q34 | 10-01 | points-of-sale facts [STATED]: web lets passengers skip queues at peak hours 6–8 am and 9–11 pm; web expected to be the less-used channel; web exclusive to this collection, separate from LAP's main site;… |
| WD-Q35 | 10-01 | narrative: Act 00 context (journey with the pay step as the missing channel + points-of-sale table + panel), Act 01 problem (why-now timeline + cost of delay), Act 02 stakeholders; Act 01's broken chain folds into Act 00 |
| WD-Q36 | 10-01 | JD's edited vocabulary carried page-wide: "company divisions" (not "central areas"), "the Innovation area" (not "Processes and Innovation") |
| WD-Q37 | 10-01 | role precision: JD took part in planning meetings and contributed deliverables; he did not coordinate, lead meetings, demand deliverables or report; supersedes W02's "articulated" and JD's own hero edit; role strip… |
| WD-Q38 | 10-01 | internal client Financial Controlling (Contraloría Financiera); project owner Billing (Facturación) — "Billing" is the one EN term page-wide; amends WD-Q13's unnamed client |
| WD-Q39 | 10-01 | recorded for Act 06 "What's next" (later pass): Aviacionline, 30 Jul 2026, Edgardo Gimenez Mazó — LAP proposes cutting the connection fee from USD 10.05 to 6.40 + IGV and moving it into tickets; airlines have not… |
| WD-Q40 | 10-01 | Act 02's three cards become a stakeholder network map (HTML/CSS/JS, jdigital Capabilities constellation lineage); centre = the project (TUUA Transfer: web channel + points of sale); JD's Innovation node highlighted as… |
| WD-Q41 | 10-01 | network grouping: four general offices as branches — Administration & Finance › Financial Controlling (internal client; also covers Collections and Accounting, not active) › Billing (owner), plus Procurement; Operations… |
| WD-Q42 | 10-01 | tie strength: strong Billing, Financial Controlling, IT, Terminals (+ Innovation); medium CX, Commercial; weak Procurement, Reputation, Airport Security (risk mapping only) |
| WD-Q43 | 10-01 | outer ring by role only, no company names on the page: development vendor · physical-collection provider · payment gateway · passenger-flow staff · security contractor + Police · airlines (context, weak, via Commercial)… |
| WD-Q44 | 10-01 | Act 02 process: 3 SVG arrangement prototypes with dummy text (A radial constellation · B influence rings · C clustered broker network) → JD picks → coded build in a separate plan → assembled into Act 02 |
| WD-Q45 | 10-01 | the web channel was built and is run by Lima Airport's IT (Operations › IT › Architecture Solutions); no external development vendor; corrects "a third party operates it" on the page (Act 01, Act 05); completion report… |
| WD-Q46 | 10-01 | Airport Operations Planning (Operations › Airport Operations) joins the map: queue-flow simulation, layout adaptations (doors, walls, power, piping), 3D map of the intervened zone; Reputation dropped as a direct… |
| WD-Q47 | 10-01 | Operations hierarchy: Airport Operations › Terminals, Airport Operations Planning; IT › Architecture Solutions; Airport Security |
| WD-Q48 | 10-01 | ties: strong Innovation, Financial Controlling, Billing, Architecture Solutions, Terminals, Airport Operations Planning; medium CX, Commercial; weak Procurement, Airport Security; externals by role: collection provider… |
| WD-Q49 | 10-01 | Act 02 build: Prototype B (influence rings) on canvas (jdigital lineage) with float motion stopped under reduced motion; an HTML ring list is the accessible, keyboard, i18n and mobile layer; info card on desktop, bottom… |
| WD-Q50 | 10-01 | hero_rv_txt count: "Five company divisions" → "Ten areas across four company offices", a change over JD's edit by his ruling |
| WD-Q51 | 10-01 | every network string is an act2_net_* key in airport.{en,es}.json, in Act 02's page-order position; keys land with the Act 02 markup in one commit (orphan check) |
| WD-Q52 | 10-01 | network tie names: one set act2_net_tie_strong/_medium/_weak/_ext ("Strong tie" … "External, by role", renamed from legend_*) feeds canvas ring labels, legend, phone list headings and the path of every external node;… |
| WD-Q53 | 10-01 | Commercial › Aviation (airline relations) confirmed for the node formerly "Commercial division"; "Controlling" is the page's short name for Financial Controlling; register v1.2 |
| WD-Q54 | 10-01 | phone-only purple panel under Act 02's lede: title "How to see network map" (JD, as written), body "Open this page on a desktop to explore the full network map. Here, every area is listed below by its degree of… |
| WD-Q55 | 10-01 | "four central offices" everywhere: hero_rv_txt and act2_net_aria follow JD's verdict (a change over WD-Q50) |
| WD-Q56 | 10-01 | desktop watermark "Tap each node for details" (uppercase by CSS, left arrow to the map) in the map's reserved right column; shown only when that column exists (stage ≥1000px, ≈1080px viewport; at 1024 the stage is 952px… |
| WD-Q57 | 10-01 | Brief 03 pipeline goes act by act: each segment has a structure gate "APPROVED GATE 1·0N" then an ES gate "APPROVED GATE 2·0N"; segments 02 (hero → Act 02), 03, 04, 05, 06; after Act 06 the Act 04 /design rebuild… |
| WD-Q58 | 10-01 | Gate 1·02 (structure, hero → Act 02) RELEASED by the principal's 1 Oct message ("partially approved up to this point"), a one-time exception to the literal-phrase rule made by the ruling that creates the segments; at… |
| WD-Q59 | 10-01 | Main card 3 body drops "one of four ways to pay" (matches the principal's hero_deck edit and Act 00's two ways to pay): "TUUA Transfer: the web payment flow I designed for international transfer passengers at Jorge… |
| WD-Q60 | 10-01 | ES area names drafted by the run (Contraloría and Facturación are the principal's terms; the rest are proposals), flagged at Gate 2·02; any on-disk edit is recorded and carried |
| WD-Q61 | 10-02 | two page-wide gates replace the act-by-act segments: "APPROVED GATE 1·06" (EN structure, whole brief incl. Act 04) then "APPROVED GATE 2·06" (ES for everything pending; Gate 2·02 folds in); then Gate 3 (EN mirror) and… |
| WD-Q62 | 10-02 | hero_rv_txt softened in EN/ES: "working with the airport's central departments" (not "aligning the efforts", WD-Q37) and "international transfer passengers" (not "travelers", W03) |
| WD-Q63 | 10-02 | timeline facts confirmed as the principal's stated facts: concession Feb 2001; Contract Amendment N°6, Mar 2013; the timeline drops "The terminal waits" and runs five moments |
| WD-Q64 | 10-02 | slips fixed while carrying: EN "ticker" → "ticket" (act2_net_com_x); ES "130.000" → "130,000"; ES act2_net_cx_x → "Mapeo del recorrido de conexión con el nuevo cobro." |
| WD-Q65 | 10-02 | Act 04 screens in a square device frame (bezel, status bar, home indicator), radius 0 kept; screens shortened; mobile carousel after Main's Work track |
| WD-Q66 | 10-02 | Act 04 flowchart rebuilt as canvas, left to right, legend on one line above; two reading rows from 1024; below that one row in a pannable strip snapping at the four screens with dots; passenger token animation |
| WD-Q67 | 10-02 | Act 05 lanes + evaluation tabs become one relay track (mine / handoff baton / after), the two evaluation methods opening from the Evaluation stage; tabs note retired |
| WD-Q68 | 10-02 | Act 06 trims (hint, $23.72 figure and its repeated line retired; method note as one line) and "What's next" carries WD-Q39 (Jul 2026 proposal: $10.05 → $6.40 + IGV inside the ticket; airlines haven't agreed; in-terminal… |
| WD-Q69 | 10-02 | Act 02: Airport Security out (no involvement); IT Solutions in (Operations › IT, distinct from Architecture): took part in project management for the in-house web build and handled its technical requirements; strong tie… |
| WD-Q70 | 10-02 | Act 03 verdict "Five deliverables, one handoff-ready package."; leaf titles numbered 01–05; one leaf open at a time |
| WD-Q71 | 10-02 | Act 04 verdict "From sign-up to the eGate in four screens."; caption before the screens; flowchart token runs once on arrival (fast over the Validation OK? → Payment gateway wrap), never on the <1024 strip |
| WD-Q72 | 10-02 | Act 06 verdict "A year later, the live flow took a different path." + lede "Select a step to see what moved, what went and what stayed."; captions before the comparator and the wrap-up cards; method note becomes a… |
| WD-Q73 | 10-02 | Act 01 step 05 keeps Oct 2025, retitled "Mechanism ready" / "Mecanismo listo": El Comercio, 30 Jun 2026, dates the start of charging to 7 Dec 2025 |
| WD-Q74 | 10-02 | second disclosure note (stance on the fee): designing its collection channel doesn't make JD a party to the fee; Peru's Judiciary decides; Jun 2026 a Lima court allowed a constitutional challenge (amparo) to proceed… |
| WD-Q75 | 10-02 | first disclosure note appends "Testimony of my involvement and contribution is available upon formal request."; act3_notice renamed act6_note1 |
| WD-Q76 | 10-02 | ES for Brief 03 follows designops-copy-es v4.0 plus JD's house patterns derived from his 57 gate-2·02 ES edits (site-wD/ES-STYLE-B03-JD-PATTERNS-v1_0.md) |
| WD-Q77 | 10-03 | act3_lede "Step through the five deliverables I handed over." (the work breakdown is replaced by a carousel) |
| WD-Q78 | 10-03 | Act 03 becomes a five-slide carousel (jdigital Services pattern via this repo's capabilities carousel); bodies rewritten from the deliverables with SOURCED figures: 4 million+ passengers/yr (ch3-at-plataforma.docx); PCI… |
| WD-Q79 | 10-03 | Act 05: evaluation cards retired; every relay stage gets a sub-line saying something new (mine1–4_x; after3_x "Collection live since Dec 2025" per El Comercio 30 Jun 2026; after4_x "Charging 130,000+ international… |
| WD-Q80 | 10-03 | Act 03 carousel images: five vector SVGs in Main's card language, dark art in both themes |
| WD-Q81 | 10-03 | Act 02 "Org. Development" label on the ray through the Innovation node, inside the medium–weak band (≈ .69R) |
| WD-Q82 | 10-04 | Act 06 live steps as relay nodes (buttons); the selected node lights and its note shows in one panel under the track; lede kept |
| WD-Q83 | 10-04 | act6_verdict → "A year on, the flow changed." |
| WD-Q84 | 10-04 | act6_cmp_cap → "Live today, step by step" (absorbs the retired lane label act6_lane2) |
| WD-Q85 | 10-04 | act3_l1_x: principal's "by 2032" dropped; no source in Ch3 deliverables, EVIDENCE.json or run records; scope supports "4 million+ passengers a year" |
| WD-Q86 | 10-04 | Act 00 heading follows the journey: verdict "Between two flights, one fee to pay." lede "Four steps from one international flight to the next, and two ways to pay." |
| WD-Q87 | 10-04 | Act 01 verdict kept; lede → "Five moments from concession to collection, and the income at stake." |
| WD-Q88 | 10-04 | Act 01 figures caption act1_fig_cap "The fee at today's volume" (agrees with the method panel) |
| WD-Q89 | 10-04 | act6_lede → "Five live steps, each set against my proposal." (tap interaction removed) |
| WD-Q90 | 10-04 | Regional tag ES tag_airport_operations → "Aeropuertos" (was "Operaciones aeroportuarias", too long in caps) |
| WD-Q91 | 10-04 | Final copy fixes accepted: 5 ES grammar (act0_lede, act1_t2_x, act6_method, act3_l2_x, act5_lede), 4 EN (act3_l5_x, act5_after4_x, act4_flow_cap "User flow – online payment", no serial commas), <title> follows hero… |
| WD-Q92 | 10-04 | act3_l4_x restores the 5–7% benchmark range; next sentence opens "Demand was split…" |
| WD-Q93 | 10-04 | EN mirrors the principal's ES: act3_verdict "Five artifacts for production."; act3_l3_x ES "…del flujo completo…", EN "A clickable mockup of the full flow was used in the web review with stakeholders." |
| WD-Q94 | 10-04 | PR #33 (merged as f201e74) integrated by merging origin/main into deploy/v21-wd-b03-tuua (merge 6910b77, 0 conflicts, Brief 03 byte-identical across the merge); no rebase, no squash |
| WD-Q95 | 10-04 | reconcile first; Gates 1·06 and 2·06 re-presented on the merged tip; push and PR #34 only after both gate phrases |
| WD-Q96 | 10-04 | PR #34 archives the run in docs/v4 as PR #33 did: Plan-WD-B03-TUUA.md + wd-b03-tuua-completion-report.md + index lines |
| WD-Q97 | 10-04 | scope exception: the merge brings site-wC's approved changes to progress.js, navchrome.js, nav.css, the tag bank, briefs-ui.es.json and Briefs 01/02/04; not flagged, reverted or reworked (WC-Q39, WC-Q40, WC-Q44, WC-Q46,… |

## 3. Gate sequence as run

| Gate | Event |
|---|---|
| 1 | presented 29 Sep 2026; principal on-disk EN edits recorded 1 Oct 2026; correction round WD-Q32…Q39 opened |
| 1 | re-presented 1 Oct 2026 after round 1 (WD-Q32…Q39) |
| 1 | 1 Oct 2026: 22 principal on-disk EN edits recorded after round 1; carried into markup fallbacks |
| 1 | re-presented 1 Oct 2026 after the Act 02 stakeholder network |
| 1 | 1 Oct 2026: 8 principal on-disk EN edits in Act 02 recorded after the network presentation (r2); carried into markup fallbacks; network round 2 (WD-Q52…Q56) |
| 1 | re-presented (r3) 1 Oct 2026 at ab3eab9 after Act 02 network round 2 (WD-Q52…Q56) |
| 1·02 | RELEASED 1 Oct 2026 at ab3eab9 by principal message (WD-Q58); pipeline now act by act (WD-Q57) |
| 2·02 | presented 1 Oct 2026 at d45ae1d: ES for hero → Act 02 + menu label + Main card |
| 2·02 | 2 Oct 2026: 46 EN + 57 ES principal on-disk edits recorded; iteration 2 (WD-Q61…Q69) folds Gate 2·02 into Gate 2·06 |
| 1·06 | presented 2 Oct 2026 at ac0f98d: iteration 2 (Acts 00–06, Act 04 rebuilt) |
| 1·06 | 2 Oct 2026: 4 EN + 5 ES principal on-disk edits recorded; iteration 3 (WD-Q70…Q76) opened on Gate 1·06 |
| 1·06 + 2·06 | presented 2 Oct 2026 at 04c716e: iteration 3 structure + all ES (pending 0) |
| 1·06 | 3 Oct 2026: 3 EN principal on-disk edits recorded; iteration 4 (WD-Q77…Q81) |
| 1·06 + 2·06 | re-presented 3 Oct 2026 at 15a4f3c: iteration 4 + ES (pending 0) |
| 1·06 | 4 Oct 2026: 6 EN principal on-disk edits recorded; iteration 5 (WD-Q82…Q85) |
| 1·06 + 2·06 | re-presented 4 Oct 2026 at b6055a7: iteration 5 + ES (pending 0) |
| 1·06 | 4 Oct 2026: 11 EN principal on-disk edits recorded; iteration 6 (WD-Q86…Q89) |
| 1·06 + 2·06 | re-presented 4 Oct 2026 at 36b5650: iteration 6 + ES (pending 0) |
| 1·06 + 2·06 | 4 Oct 2026: final principal edits recorded (EN 27, ES 43) + 2 late EN edits; iteration 7 (WD-Q90…Q93) |
| 1·06 + 2·06 | re-presented 4 Oct 2026 at 329d641: iteration 7 (final structural round) + ES (pending 0) |
