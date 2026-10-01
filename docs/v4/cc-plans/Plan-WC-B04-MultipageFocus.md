# Plan — site-wC · Brief 04 multi-page refocus (P-CC-WC-B04-v1_0)

**Branch:** `deploy/v20-wc-b04-multipage-focus`, from `0b94217` (origin/main after PR #32)
**Pull request:** [#33](https://github.com/jdsaire/designops/pull/33), manual merge only
**Dispatch:** `BRIEF-CC-WC-B04-MultipageFocus-v1_0.md` → `P-CC-WC-B04-v1_0.xml`, both in `out/active/PRE-MAX/site-wC/` outside this repository

This file holds the plan as approved, followed by every ruling that changed it during the run. Where a later ruling conflicts with the plan, the ruling governs.

---

## 1. The plan as approved (27 Sep, `APPROVED PLAN`)

### Plan · P-CC-WC-B04-v1_0 · Brief 04 multi-page refocus (site-wC)

#### Context
Brief 04 (`work/portfolio-evolution/`) still tells the story single-page-first, and its one Gantt runs 24 Apr – 08 Sep with July inside it. The brief says the multi-page build is the substance. Act 03 is split into two non-consecutive Gantts, each with a purple guide panel, and nothing may mention the gap between them (R1–R6, WC-Q1). Every new or changed string gets ES under copy-es v4.0, then the whole brief's EN is mirrored to the approved ES (R7, closing WB-Q25's deferral). The run opens one PR and never merges it.

#### Task 0 — preflight (done, read-only)
gh = jdsaire (keyring) ✅ · 9/9 inputs readable ✅ · copy-es v4.0, copy-edition v1.0, cc-gate-report available ✅ · changelog has WB-Q25 and WC-Q1…Q3 ✅ · `ls-remote` main = 0b94217 (unchanged) ✅ · tree clean (0 modified, 0 staged, 0 untracked), no index.lock ✅ · port 8000 free ✅ · HEAD deploy/v19 5699c58, whose tree is **identical** to 0b94217 (`git diff --name-only` → 0), so the baseline can be served from the current checkout without switching ✅.

#### Task 1 — measurements (brief §6)
1. **PRs:** 32, all merged. #17 (25 Jul) is the last before the pause, #18 the first after it, #32 the latest merged. V2 holds.
2. **Gantt 2 start:** f7e4401, 28 Aug 23:55 −0500. Matches the brief's 28 Aug, so no ruling was needed.
3. **Mapping** (ruled WC-Q4), with dates in Lima:

| Cluster | PRs | Span | Active days | Commits |
|---|---|---|---|---|
| Defect inventory | #18 | 28 Aug | 1 | 1 |
| Case briefs | #19 #22 #23 #26 | 30 Aug – 11 Sep | 6 | 30 |
| Home/About/Contact organisms | #20 #21 #27 #28 #29 | 30 Aug – 20 Sep | 6 | 83 |
| Global mechanisms and assets | #24 #25 | 05 – 06 Sep | 2 | 22 |
| Copy and i18n waves | #30 #31 #32 | 20 – 26 Sep | 7 | 139 |

   Clusters overlap, so a day can count in more than one row. No PR's commits predate 28 Aug, so no bar is clipped.
4. **Lima merge dates** (diamonds, confirmed WC-Q11): #18 29 Aug · #19 30 Aug · #20, #21 31 Aug · #22 01 Sep · #23, #24 05 Sep · #25 06 Sep · #26 11 Sep · #27 13 Sep · #28 16 Sep · #29 20 Sep · #30 22 Sep · #31 24 Sep · #32 26 Sep.
5. **Organism** (V5 holds): one IIFE, one DATA object, fixed ids and axis, English literals. The refactor is `renderSchedule({root, axisStart, axisEnd, rows, milestones, ids})`, called twice. CSS stays in the existing `.gantt` block, extended in place.
6. **Diamond:** `.gantt__milestone` is a diamond already. The fix removes the one-slot-per-epic limit: each row gets a milestone layer that holds any number of diamonds, on epic or cluster rows. Same-day diamonds stack vertically at the exact date. Labels show the PR number only ("#20"), and adjacent labels alternate above and below (WC-Q12). Assistive label template: `sch_aria_pr` = "Pull request {n}, {cluster}, merged {date} 2026".
7. **Figures** (confirmed WC-Q11): 275 non-merge commits (gh reports 276 because it counts the integration merge acdd150) · 15 PRs · 30 days (28 Aug – 26 Sep) · 19 active days · 9.2 commits/day · 3.5 PRs/week (15 ÷ 4.3) · 18.3 commits/PR. The single-page column is unchanged: 286 · 52 · 71 · 32 · 4.0 · 5.1 · 5.5 (B14).
8. **Key inventory** (124/124 today). The exact list lands in the Gate 1 key map.
   - **Hero** (WC-Q5): rewrite hero_lede and hero_short.
   - **Act 02** (WC-Q6): rewrite act2_verdict, act2_lede and act2_s1_*, which becomes "Template and single page". act2_s2_* becomes the expanded multi-page step. **Retire** act2_s3_n/t/x and remove the step-3 markup.
   - **Act 03** (WC-Q7):
     - Rewrite sch_verdict and sch_lede, with no summed figure.
     - **Retire** sch_note. Its sourcing folds into Gantt 1's panel without the gap sentence or the July window.
     - Rewrite gantt_noscript, since "the note below" no longer exists.
     - Keep sch_e1–e9_t and sch_aria_*.
     - **Add** sch_g1_rv_btn/txt and sch_g2_rv_btn/txt (the panels); sch_axis_phase and sch_axis_window; sch_ep1 and sch_ep2 (epic names); sch_c1–c5 (the cluster names, EN as locked); sch_commits_1/_n and sch_prs_1/_n; sch_span_days; sch_ms_handoff; sch_aria_pr.
     - Month ticks reuse sch_aria_months.
   - **Act 04** (WC-Q8): c1 kept. c2 rewritten as "WCAG as a gate". c3 → three-level i18n, c4 → brief chassis, c5 → gated dispatch pipeline, c6 → scope freeze (kept, reframed). All reuse their existing key ids, so there are no renames. **Retire** act3_f2 (the Single-page category) and move act3_f3 above c3. "Orchestration in Claude" leaves the page. The pipeline card states AI plainly and never uses "agents" or product names.
   - **Act 05** (WC-Q9):
     - Swap columns so the multi-page one comes first.
     - Update the data-count values and rewrite dash2_d1_p ("275 ÷ 30"), dash2_d2_p ("15 PRs ÷ 4.3 weeks"), dash2_d3_p ("275 ÷ 15"), dash2_r1_t/dash2_r1 ("less than half the days") and dash_foot (no gap, no "forecast").
     - **Add** dash_col_multi and dash_col_single: the column headers are hard-coded English today.
     - act4_verdict and act4_lede are rewritten only if their wording breaks.
   - **Act 06** (WC-Q10): rewrite act5_verdict, act5_lede and all of act5_p1–p3 cat/t/x as Gates · Rulings and records · Verification.
   - **Estimate:** about 124 − 5 + 24 ≈ 143 keys per language. Parity holds at every commit.
9. **Evidence check:** every figure is backed by B14, B21 or WC-Q11. dash_m2 stays "Measured at closure". No new unsourced figure.
10. **Baseline:** the server and matrix can't start in plan mode (see *Held until approval*).

#### Held until approval (plan-mode deviations, recorded in the completion report)
1. Append rulings **WC-Q4…Q12** to PRE-MAX-CHANGELOG.md: the mapping, hero, Act 02, Act 03, Act 04, Act 05, Act 06, the figures and the diamonds.
2. Start `python3 -m http.server 8000 --bind 127.0.0.1 --directory repos/designops`. Install playwright-core in the scratchpad and launch the cached headless shell 1234.
3. Run the **baseline matrix on the current checkout** (tree = 0b94217): 4 briefs × 390/768/1440 × dark/light × EN/ES. Save DOM text, screenshots and Gantt EN assistive labels. **If not green: STOP AND REPORT** before any branch.
4. `git fetch origin`, then `git switch -c deploy/v20-wc-b04-multipage-focus origin/main`. Local main stays at f28b4ce.

#### Task 2 — execute (one commit each, matrix after every commit)
1. `refactor(brief04)`: renderSchedule wraps the single chart. Output must be pixel- and label-identical to baseline, or STOP.
2. `feat(brief04)`: script-built visible labels read from keys and rebuild on i18n:changed.
3. `feat(brief04)`: any number of milestones per row, with same-day stacking.
4. `feat(brief04)`: Gantt 1 (epics 01–02, axis 24 Apr – 04 Jul, "Brief handoff" diamond).
5. `feat(brief04)`: Gantt 2 (axis 28 Aug – 26 Sep, 5 cluster bars, 15 diamonds).
6. `feat(brief04)`: both purple guide panels. sch_note is retired and the organism's code comments are cleaned of the gap.
7. `feat(brief04)`: Act 03 verdict and lede.
8. Hero, Act 02, Act 04, Act 05, Act 06: one `feat(brief04)` commit per act.

Gantt 2's guide panel sits between the two charts. New keys enter the ES file carrying their EN value and are listed as "pending ES" in `site-wC/COPY-WC-ES-v1_0.json`.

#### Gates (per the prompt; each ends with a literal STOP and waits for its exact phrase)
- **Gate 1 · Structure:** http://127.0.0.1:8000/work/portfolio-evolution/#vsch at 390/768/1440, dark and light, EN. Screenshots before and after. Briefs 01–03 diff = 0. → `APPROVED GATE 1`
- **Task 4 (ES):** carry Gate 1 edits. Write ES v4.0 for new and changed keys into COPY-WC-ES, then designops.es.json.
- **Gate 2 · Spanish:** ES render, screen-reader labels, fence report. JD edits on disk. → `APPROVED GATE 2`
- **Task 6:** carry Gate 2 edits. Mirror the whole EN to the approved ES → COPY-WC-B04-EN-v1_0.json and the fallbacks.
- **Gate 3 · English mirror:** EN lock table, fallback check, figure parity. → `APPROVED GATE 3`
- **Task 8:**
  - Carry Gate 3 edits. Open ONE PR and print its URL.
  - Archive `docs/v4/cc-plans/Plan-WC-B04-MultipageFocus.md` (this plan, with its rulings) and `docs/v4/cc-completion-reports/wc-b04-multipage-focus-completion-report.md`, which proposes the EVIDENCE lines.
  - Correct the stale copy-es line in the dispatch B report. Update the READMEs.
  - Run the final matrix. → `APPROVED GATE 4` → changelog line and six-line relay. JD merges.

Each gate also takes a snapshot, a verified git bundle (sha256 noted) and a resume note in `site-wC/`, and is posted through /cc-gate-report.

#### Critical files
- `repos/designops/work/portfolio-evolution/index.html`: .gantt CSS at 266–320; Act 03 markup at 725–749; scheduleOrganism at 1221–1467; dashboard at 849–962.
- `repos/designops/work/portfolio-evolution/i18n/designops.{en,es}.json`
- Reference panel: `work/yape-trust-verify-brief/index.html:750–754` (reveal + `reveal__body--poster` + `data-panel-title-key`)

#### Verification
After every commit, the headless matrix runs across all 4 briefs × 3 widths × 2 themes × 2 languages. It checks:
- script and network errors
- per-element overflow and clipped lines
- unresolved and unapplied keys
- panel titles in both languages
- fallback = EN
- fence scans: figure and bold parity, tú, "agents"/"agentes"
- gap scan: 25 Jul, 28 Aug as a gap, dormant, pause, pausa
- Briefs 01–03 DOM text and screenshot diff = 0

Also checked: EN/ES key parity by script, and the Gantt 1 EN assistive labels against the baseline.

---

## 2. Rulings added during the run (WC-Q4 to WC-Q48)

Each line is copied from `PRE-MAX-CHANGELOG.md`, where the full text is kept.

- **27/09** · WC-Q4 site-wC Gantt 2 PR→cluster mapping: Defect inventory #18 · Case briefs #19 #22 #23 #26 · Home/About/Contact organisms #20 #21 #27 #28 #29 · Global mechanisms and assets #24 #25 · Copy and i18n waves #30 #31 #32; dates in America/Lima · /ask chips (plan gate) · —
- **27/09** · WC-Q5 Brief 04 hero: hero_lede and hero_short lead with the multi-page system; the single page named once as the starting point; title, roles and live note stay · /ask chip (plan gate) · —
- **27/09** · WC-Q6 Brief 04 Act 02: two steps — template and single page compressed into one, the multi-page version expanded; act2_s3_* retire · /ask chip (plan gate) · —
- **27/09** · WC-Q7 Brief 04 Act 03 verdict and lede carry no summed build-day figure; each chart's figures live in its guide panel · /ask chip (plan gate) · —
- **27/09** · WC-Q8 Brief 04 Act 04: two foundational cards (vanilla stack; WCAG as a gate) + four multi-page (three-level i18n, brief chassis, gated dispatch pipeline, scope freeze); the single-page category and "Orchestration in Claude" leave the page · /ask chip (plan gate) · —
- **27/09** · WC-Q9 Brief 04 Act 05: multi-page column first; rates on a calendar-day basis in both columns (9.2 vs 4.0 commits/day, 3.5 vs 5.1 PRs/week, 18.3 vs 5.5 commits/PR); footer rewritten without the gap or the forecast note · /ask chip (plan gate) · —
- **27/09** · WC-Q10 Brief 04 Act 06: three lessons from the multi-page pipeline — Gates · Rulings and records · Verification · /ask chip (plan gate) · —
- **27/09** · WC-Q11 multi-page figures confirmed (freeze v2_1 §6.5, per WC-Q3): 275 non-merge commits (gh 276 incl. integration merge acdd150) · 15 PRs · 30 days 28 Aug–26 Sep · 19 active days · 9.2/day · 3.5 PRs/week · 18.3 commits/PR · the five cluster spans/active days/commits · the fifteen Lima merge dates; measured on origin/main 0b94217 · /ask chip (plan gate) · —
- **27/09** · WC-Q12 Gantt 2 diamonds: every diamond on its exact date; same-day diamonds stack vertically in the row; labels carry the PR number only, adjacent labels alternating above and below; one assistive label per diamond · /ask chip (plan gate) · —
- **27/09** · WC-Q13 site-wC Gate 1 correction: Act 03 shows ONE chart, the multi-page schedule; the single-page build moves into a second panel "The first portfolio schedule" beside "How to read the chart", listing its two epics once and their 9 tasks with dates · Gate 1 message + /ask chips · brief R1/R2, success criterion 1, WC-Q7 frame
- **27/09** · WC-Q14 Brief 04 hero: title "The story of this web, my web." and lede "Designed and built by me. Every step recorded." (principal EN, carried as written) · Gate 1 message + /ask chip · WC-Q5 (lede)
- **27/09** · WC-Q15 Brief 04 Act 02 restores the three-card ladder (base layout and cards); v1/v2 keep the principal's text, v3 sharpened toward the system; verdict back to "Three portfolio versions, all in code."; shorter lede "From renting a template to writing every line." · Gate 1 message + /ask chip · WC-Q6
- **27/09** · WC-Q16 Brief 04 Act 03 editorial: eyebrow "Act 03 · The Multipage Schedule" on a local key (regional ui_act03_schedule untouched); verdict "How this site came together."; lede "Open any stage to see what went into it." · Gate 1 message + /ask chip · WC-Q7 wording
- **27/09** · WC-Q17 Brief 04 multi-page Gantt: stages open onto their pull requests as task rows ("#20 Home reallocation", bar over commit days, diamond on merge date); Brief 02 toolbar with Expand all + chips Merge dates (on) and Commits (off); diamonds sit on named rows without number labels · Gate 1 message + /ask chip · WC-Q12 (labels)
- **27/09** · WC-Q18 Brief 04 Act 03 carries a glossary footnote under the chart defining commit and pull request for non-technical readers; method stays in the reading-guide panel · /ask chip · success criterion 3 (for this note only)
- **27/09** · WC-Q19 per-PR data confirmed for #18–#32: task names, commit spans (Lima), commits per PR (non-merge; #25 = 14) · /ask chip (freeze v2_1 §6.5, per WC-Q3) · —
- **27/09** · WC-Q20 Brief 04 hero title "This web. My web." (principal EN, carried as written) · Gate 1 message · WC-Q14 (title)
- **27/09** · WC-Q21 every footnote on Brief 04 takes Brief 02's .synthesis style (act1_foot, the Act 03 note, dash_foot) · Gate 1 message · —
- **27/09** · WC-Q22 Brief 04 multi-page chart: toolbar removed; stages numbered and annotated "NN name – N commits", not collapsible; each PR a numbered diamond whose caption (number, plain-language line, merge date) shows on hover, focus or tap at the most visible position, active outline purple; diamonds within a day stack; Window column = window, PRs, active days (commits only in the annotation); technical footnote with glossary and method · Gate 1 message + /ask chips · WC-Q17 (rows, toolbar), WC-Q12 (stacking)
- **27/09** · WC-Q23 Brief 04 Act 03 panel renamed "The first schedule": one self-contained paragraph (~55 words); the task list removed · Gate 1 message · WC-Q13 (panel content)
- **27/09** · WC-Q24 Brief 04 Act 05 multi-page column shows "Measured at closure" for commits, PRs, days, active days and all derived rates; single-page column (B14) unchanged; order stays multi-page first · Gate 1 message + /ask chip · WC-Q9 (figures), WC-Q11 (dashboard use)
- **27/09** · WC-Q25 Brief 04 multi-page chart, mid-run refinements of WC-Q22: the Window column carries window, PRs and active days (commits only in the stage annotation); the purple duration bar runs through the stage's diamonds; each bar's real length in days sits beside it; Act 03's note splits into three footnotes — commits, pull requests, source · principal messages at Gate 1 · WC-Q22 (bar lanes, window column)
- **27/09** · WC-Q26 Brief 04 Act 05 'Building blocks' (8 vs 10, not comparable) splits into Pages — multi-page 7 (Main, About, Contact, four briefs; two redirect stubs not counted; measured 27 Sep, confirmed) vs single-page 1 — and Organisms — multi-page measured at closure vs single-page 10 · Gate 1 message + /ask chip · WC-Q24 (for pages)
- **27/09** · WC-Q27 Brief 04 Act 05: 'Languages engineered' row removed (no change between builds, risk of confusion); each Measure row opens onto one plain-language line for non-technical reviewers, in the schedule epics' former disclosure style · Gate 1 message · —
- **30/09** · WC-Q28 site-wC Gate 2: principal's on-disk EN edits carried as written (sch_eyebrow, sch_g2_rv_btn, sch_fn_commits/prs/source, act3_c2_rv_txt2, dash_foot, act5_p1_x, act5_p2_x; act5_p3_x deleted); only the JSON syntax repaired (trailing comma) · disk + principal message · —
- **30/09** · WC-Q29 Brief 04 Act 00 · The Context added (brief-04-fixes): sources confirmed — WEF Future of Jobs 2025; Dallas Fed 6 Jan 2026 (Atkinson & Yamco; limit "may not be causal" kept); ILO–World Bank WP121 (2024); Microsoft/LinkedIn Work Trend Index 2024; INEI Lima (moved from Act 01 card 4). Acts 00 and 01 carry 3 ladder cards each (Act 02 pattern); their progressive panels merge into bodies · /ask chips · WC-Q13 frame (Act 01 content)
- **30/09** · WC-Q30 Brief 04 Act 04 reduced to 4 cards: no framework · accessibility · two languages (three-level dictionaries in plain words) · shared templates; pipeline and governance cards removed; per-card labels replace Foundational/Multi-page; panels carry the technical depth, never reference recruiters · /ask chip + brief-04-fixes · WC-Q8
- **30/09** · WC-Q31 Brief 04 Act 05 single-page Dictionary keys = 175 (measured: jdsaire/jdigital df020c5, 18 Jun 2026, 175 EN / 175 ES; legacy-desops 112/119 is the DesignOps variant); measure descriptions become a hover/focus/tap overlay (diamond caption pattern), not an expander · /ask chip + brief-04-fixes · WC-Q27 (expander)
- **30/09** · WC-Q32 Brief 04 Act 06: card 3 becomes "Clarity · Say it plainly" (replaces deleted verification card); act6_p2_x "absorved" → "absorbed" and "Scrum Master" replaced by a plain equivalent · /ask chips · —
- **30/09** · WC-Q33 Brief 04 key renames: act3_* → act4_* (Act 04), act4_verdict/lede → act5_* (Act 05), act5_* → act6_* (Act 06), act1_g* → act1_s* (Act 01); sch_eyebrow retires, Act 03 eyebrow reads the regional ui_act03_schedule · brief-04-fixes · —
- **30/09** · WC-Q34 Brief 04 Act 00 card 2 becomes "The senior gap · Experience, filtered out": Generation, Age-Proofing AI, 9 Oct 2024 (YouGov; 1,488 employers, 2,610 workers 45+; US, UK, FR, IE, ES): in the US 90% of hiring managers would consider under-35s for AI roles vs 32% for over-60s; Dallas Fed, ILO–World Bank and INEI Lima leave the card and act0_foot · /ask chip + last-changes · WC-Q29
- **30/09** · WC-Q35 Brief 04 Act 01 bodies at 20–25 words; card 2 keeps the Sackett 3× work-sample figure (principal's sentence shortened to "…translates those honors into proof"); Sackett stays in act1_foot · /ask chip · WC-Q29
- **30/09** · WC-Q36 Brief 04 Act 04 titles: "1) Light, fast and built to last", "3) Every word in its place"; panels deepened (vanilla/GitHub Pages; i18n/JSON/keys/transcreation; atomic design/DesignOps); bold added to the principal's trimmed bodies · /ask chip + last-changes · WC-Q30
- **30/09** · WC-Q37 Brief 04 small fixes: typos in the principal's edits ("prurposes", two double spaces), Act 00 c1 trimmed to 23 words, Act 03 lede "Every stage, and what each pull request delivered.", arch_foot → act4_foot; suggested extras accepted with the plan: "carried out from", "the web's three core languages", act5_lede "single page", act6_lede names the three lessons · /ask chip + approved plan · —
- **30/09** · WC-Q38 Brief 04 Act 03 key naming: section copy act3_* (verdict, lede, rv1/rv2, fn_*), schedule organism sch_* (sch_aria_chart, sch_noscript); key map in COPY-WC-GATE-EDITS · last-changes · WC-Q33
- **30/09** · WC-Q39 vanishing-content bug (text and buttons invisible after scrolling or an idle tab, cured only by reload) diagnosed as the W1 Home bug (1e85855) on every brief: the .io io-rise view() entrance fills both ends, so a stalled scroll timeline pins opacity 0 over .is-in; fix extends the reveal guard in assets/js/core/progress.js to .io (pins is-in + inline animation:none), shared module only, Brief 01–03 files untouched; About already guarded, Contact has no scroll-linked entrance; stall test 0 hidden on all 7 pages (before: 22/20 on Brief 04) · /ask chip · W1 reveal guard
- **30/09** · WC-Q40 Brief 04 hero tag "Internationalization" → "Branding": regional tag_branding added (EN/ES "Branding"), tag_internationalization retired (Brief 04 was its only user) · principal + /ask chip · —
- **30/09** · WC-Q41 Brief 04 Act 00 card 2 becomes "The builder gap · Designing is no longer enough": Experis, Expectativas de Talento Tecnológico (Peru edition, reported 24 Sep 2026), AI modelling and app development is the top technical skill Peru's tech employers demand (84%); Generation data leaves the card and act0_foot; supersedes WC-Q34 · principal + /ask chip · WC-Q34
- **30/09** · WC-Q42 Brief 04 Act 05 measure overlays desktop-only: (min-width:1024px) and (hover:hover); below, labels are plain, out of the tab order, descriptions kept for screen readers · principal + /ask chip · WC-Q31
- **30/09** · WC-Q43 Brief 03 inherits the reveal-guard fix by merge, never by content: before Brief 03's last gate, site-wD syncs deploy/v21-wd-b03-tuua with origin/main after the Brief 04 PR merges (or cherry-picks 501b98f if not yet merged), confirms the .io guard in progress.js and the initProgress import, and runs the stall test; handoff at site-wD/HANDOFF-WC-RevealGuard-v1_0.md · principal · WC-Q39
- **30/09** · WC-Q44 panel bold across briefs: every brief sets .reveal__body p to Light (300) with no strong rule, so <strong> rendered at 400; .reveal__body strong{semibold; brand-white} added to Briefs 01, 02, 04 (inline panels and side panel, both themes, both languages); Brief 03 adds the same rule on site-wD's branch (handoff v1_1) · principal + /ask chip · —
- **30/09** · WC-Q45 Brief 04 Act 05 method note (dash_foot, shown under Measure/Derived/Insights) hidden until it also cites the multi-page source; keys kept in EN/ES · principal + /ask chip · —
- **30/09** · WC-Q46 mobile menu (shared nav.css, all 7 pages): THEME and LANGUAGE side by side in one row with a 1px divider, each switch a full-column two-segment control 48px tall with a clearer outline; tighter vertical rhythm so the menu fits a 600px-tall viewport on every page (briefs scroll slightly at 568) · principal + /ask chip · W1 overlay
- **30/09** · WC-Q47 open mobile menu survived widening past 767px (desktop bar z-index 100 covered the overlay's close button; body stayed overflow:hidden): navchrome.js closes the overlay on leaving the mobile range, and nav.css never paints it at ≥768px · principal · —
- **30/09** · WC-Q48 Brief 04 Act 05 Spanish tab labels after Gate 3 (principal, at Gate 4): regional ui_tab_measure "Medición" → "Métrica simple" (also Brief 02's first tab, the only other user) and local dash_tab3 "La lectura" → "Hallazgos"; act1_s1_n "La lectura" untouched; added to PR #33 · principal message · WC-Q45

---

## 3. Gate sequence as run

- **Plan:** released by `APPROVED PLAN` (27 Sep).
- **27/09** · site-wC Gate 1 (Structure) RELEASED with its final correction (APPROVED GATE 1 in the same message as WC-Q27, applied and verified at 52ee345); presented 3 times (b4a7139, 07dbd08, 2c4359a) · principal message · —
- **27/09** · site-wC HALTED for the night at Gate 2 (presented at 8234f8f, 36 commits, unpushed); local branch backup/v20-wc-gate2-halt and bundle site-wC/backup/wc-halt-gate2.bundle created; resume note updated · principal message · —
- **30/09** · site-wC Gate 2 RELEASED on the principal's instruction ("Afterwards, APPROVED GATE 2"), after the last-changes round was applied and verified at e14da97 (9 commits 0071193…e14da97); EN locked; ES pass for 80 pending keys next, to Gate 3 · principal message · —
- **30/09** · site-wC Gate 3 pulled back before ES review and re-presented after WC-Q39…Q43 at 57264c7 (6 commits 501b98f…57264c7) · principal message · —
- **30/09** · site-wC Gate 3 (English mirror) RELEASED with its final correction (APPROVED GATE 3 in the same message as WC-Q44…Q47, applied and verified at f61eb9f); principal's locked EN/ES carried (35 EN, 67 ES edits); presented 3 times (d3a9400, 57264c7, f61eb9f) · principal message · —
- **Gate 4 · Pre-merge:** presented with PR #33. The principal merges by hand.
