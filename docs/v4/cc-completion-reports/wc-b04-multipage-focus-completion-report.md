# Completion report — site-wC · Brief 04 multi-page refocus

**Branch:** `deploy/v20-wc-b04-multipage-focus`, from `0b94217` (origin/main after PR #32)
**Pull request:** [#33](https://github.com/jdsaire/designops/pull/33), open and unmerged when this report was written. Manual merge only (Brief 04's dictionaries changed, freeze v2_1 §3.3). Auto-merge off.
**Dispatch:** `BRIEF-CC-WC-B04-MultipageFocus-v1_0.md` → `P-CC-WC-B04-v1_0.xml`, both in `out/active/PRE-MAX/site-wC/` outside this repository
**Plan:** `docs/v4/cc-plans/Plan-WC-B04-MultipageFocus.md` (the plan as approved, followed by rulings WC-Q4 to WC-Q47)

---

## 1. Commits

All 68 commits below, plus the archive commits, were written under the GitHub account jdsaire (`88201583+jdsaire@users.noreply.github.com`) as author and committer. 46 carry the display name "Juan Diego S." (the clone's configured name), and 21, made after the run resumed on 30 Sep, carry "jdsaire". They are the same account. History was pushed, so it was not rewritten.

- `62f167f` refactor(brief04): render the schedule from one function that takes its root, axis and rows
- `6578011` feat(brief04): draw every schedule label from the dictionary and redraw it on each language change
- `e507e7e` feat(brief04): let a schedule row carry any number of milestones, stacking those that share a day
- `e777b3f` feat(brief04): give the single-page build its own chart, epics 01 and 02 from 24 Apr to 04 Jul
- `8670750` feat(brief04): chart the multi-page build from 28 Aug, five clusters with each pull request as a diamond on its merge date
- `91c292d` feat(brief04): open each schedule chart with a purple reading guide and fold the chart note into the first
- `ba1d462` feat(brief04): rewrite the schedule verdict and lede for a record in two charts
- `a5cdb32` feat(brief04): lead the hero with the multi-page system and name the single page once as its start
- `b3b66a9` feat(brief04): compress the template and single page into one step and give the multi-page version the weight
- `2c95e4e` feat(brief04): weight the six architecture decisions toward the multi-page build
- `5aa2c55` feat(brief04): lead the dashboard with the multi-page figures from pull requests #18–#32
- `b4a7139` feat(brief04): draw the lessons from the multi-page pipeline: gates, rulings and records, verification
- `d026e35` fix(brief04): title the hero as the story of this site, told by the person who built it
- `ab6fde7` fix(brief04): restore the three-version ladder in Act 02, with a shorter lede and a sharper third card
- `45f4a8f` feat(brief04): open each multi-page stage onto its pull requests, each named, with its commit days and its merge date
- `8ffc3ab` feat(brief04): add an expand-all control and merge-date and commit chips to the multi-page schedule
- `464da78` feat(brief04): move the single-page schedule into a panel beside the reading guide, listing its tasks by epic
- `0e6de86` feat(brief04): rebuild the Act 03 editorial around the multi-page schedule
- `3076c48` feat(brief04): define commit and pull request under the schedule for readers outside software
- `07dbd08` fix(brief04): point the no-script line at the one reading guide
- `78168d9` fix(brief04): shorten the hero title to This web. My web.
- `a7f6166` style(brief04): set every footnote in the synthesis style from Brief 02
- `d53eacd` feat(brief04): number the five stages and let each pull request name itself from a numbered diamond on hover, focus or tap
- `a33366a` feat(brief04): split the schedule note into commits, pull requests and source for the technical reader
- `ca17350` feat(brief04): rename the first schedule's panel and tell it in one paragraph, without the task list
- `fddc496` fix(brief04): hold the multi-page dashboard figures for measurement at closure
- `47584d2` fix(brief04): run each stage bar through its diamonds, set its length in days beside it, and return active days to the window column
- `2c4359a` fix(brief04): split the dashboard's building blocks into pages and organisms
- `52ee345` fix(brief04): drop the languages row and let each dashboard measure open onto one plain line
- `9a1b24b` feat(brief04): write the hero in Spanish
- `c26e342` feat(brief04): write Act 02 in Spanish
- `e0c3a5c` feat(brief04): write the multi-page schedule, its panels and notes in Spanish
- `b0078c6` feat(brief04): write the architecture decisions in Spanish
- `2dfae0d` feat(brief04): write the dashboard in Spanish
- `365e0ce` feat(brief04): write the lessons in Spanish
- `8234f8f` fix(brief04): say one day, not one days, in the schedule's bar labels
- `e740248` fix(brief04): carry the Gate 2 English edits made on disk
- `5282f5f` refactor(brief04): name every act's keys after the act they belong to
- `c313e4f` feat(brief04): tell the hero's short version as the story of why this site had to exist
- `2a94260` feat(brief04): open with Act 00, the context of AI reshaping work, in three sourced cards
- `993e6b8` feat(brief04): rebuild Act 01 as three direct cards on the ladder, panels folded into their bodies
- `ac9350c` feat(brief04): tell Act 02 as three levels of fidelity and close it on orchestration over prompting
- `6eb55b8` fix(brief04): share the schedule eyebrow, explain Gantt charts plainly, and keep each merge date on its caption line
- `afba8e3` feat(brief04): reduce the architecture to four plain cards, each with its own label and a technical panel
- `e82e73c` feat(brief04): show each dashboard measure's meaning in an overlay and record the single page's 175 dictionary keys
- `0363c4d` feat(brief04): close the lessons on clarity and fix the wording of the rulings card
- `0071193` fix(brief04): carry the English edits made on disk to Acts 00, 03, 04, 05 and 06
- `5c4b985` refactor(brief04): name the schedule's section copy act3 and its organism sch, and the architecture footnote act4
- `fc1593f` feat(brief04): give Act 00 a senior-gap card on age bias in AI hiring and tighten the shift card
- `3163f9e` feat(brief04): cut Act 01's three cards to one sharp claim each, under 25 words
- `a11772e` feat(brief04): bring Act 02's first two levels to the third's length and bold the idea in each
- `a550810` fix(brief04): match Act 03's lede to the chart and fix two typos in its panels
- `3ce66ed` feat(brief04): retitle Act 04's speed and copy cards in plain words, bold each card's point, and deepen its panels for the technical reader
- `893a5ef` fix(brief04): show each measure's meaning beside its label, narrower, so no figure is covered
- `e14da97` feat(brief04): bold each lesson's point in Act 06 and name its three lessons in the lede
- `d3a9400` feat(brief04): write the Spanish for every new and changed key of Acts 00 to 06, transcreated in usted
- `501b98f` fix(site): keep every brief's entrance blocks visible when their scroll timeline stalls
- `7c9b165` fix(brief04): carry the English edits made on disk to Acts 00, 01, 02, 04 and 06
- `3bcbc99` feat(briefs): tag Brief 04 with Branding in place of Internationalization, in the shared tag bank
- `a0f1071` feat(brief04): make Act 00's second card the builder gap for senior specialists in Peru
- `705f5ca` fix(brief04): show the dashboard's measure meanings only on desktop, with plain labels on phones and tablets
- `57264c7` feat(brief04): carry the latest English into Spanish, including the builder-gap card
- `44030aa` fix(brief04): carry the Gate 3 English and Spanish edits made on disk
- `f420769` fix(briefs): render bold text in panels as bold in Briefs 01, 02 and 04
- `7b7324a` fix(brief04): hide the dashboard's method note until it also cites the multi-page source
- `af8b756` feat(nav): set the mobile menu's theme and language switches side by side, larger and divided
- `f61eb9f` fix(nav): close the mobile menu when the window grows past the mobile layout
- `beb2fb3` fix(brief04): name the dashboard's Spanish tabs Métrica simple and Hallazgos (WC-Q48, added at Gate 4; `d6e3487`, the first archive commit, precedes it)

**Flagged batch:** `52ee345` carried the last Gate 1 correction set (WC-Q27, plus the mid-message refinements of WC-Q25) in one commit, because the principal released Gate 1 in the same message as those corrections.

## 2. Outcome

Brief 04 now tells the multi-page build first.
- **Hero:** "This web. My web.", with a short version written as a story for non-technical readers.
- **Act 00 (new):** three sourced cards on AI reshaping work, one of them on Peru.
- **Act 01:** says plainly why credentials no longer prove capability.
- **Act 02:** climbs three levels of fidelity.
- **Act 03:** draws the multi-page build as a calendar-scaled schedule: five numbered stages, and each of PRs #18–#32 as a numbered diamond on its Lima merge date, with a caption. The single-page build moves into a "The first schedule" panel (WC-Q13).
- **Act 04:** reduces the architecture to four plain cards with technical panels.
- **Act 05:** sets the multi-page measures beside the single-page ones, with desktop overlays that explain each measure.
- **Act 06:** closes on three lessons.

**Languages.** English and Spanish were locked by the principal. Brief 04 has 164 keys in each, in the same order, with fallbacks equal to EN.

**Site-wide fixes.**
- **Vanishing content:** blocks no longer disappear on any brief (the W1 Home reveal guard extended to `.io`).
- **Panel bold:** renders on Briefs 01, 02 and 04.
- **Mobile menu:** theme and language now sit side by side.
- **Open menu:** a menu left open closes when the window widens.

**Brief 03** inherits the shared fixes by merging main after this PR, and adds the bold rule itself. The steps are in `site-wD/HANDOFF-WC-RevealGuard-v1_1.md`.

## 3. Results against the success criteria

| # | Criterion | Result | Evidence |
|---|---|---|---|
| 1 | Every halt released only by its exact phrase; re-presentations recorded | PASS | Gate log in COPY-WC-GATE-EDITS. **Plan:** `APPROVED PLAN`. **Gate 1:** presented 3 times (b4a7139, 07dbd08, 2c4359a); released with its final correction at 52ee345 (`APPROVED GATE 1`). **Gate 2:** presented at 8234f8f, re-presented at 0363c4d; released by "Afterwards, APPROVED GATE 2" after the corrections, at e14da97. **Gate 3:** presented at d3a9400, re-presented at 57264c7; released with its final correction at f61eb9f (`APPROVED GATE 3`) |
| 2 | Two separate Gantt charts | PASS, as amended | Superseded by WC-Q13: one chart (the multi-page schedule, starting 28 Aug, measured f7e4401). The single-page epics 01–02 are a panel ("The first schedule"), not a chart |
| 3 | Every PR #18–#32 a diamond on its Lima merge date, under the five clusters | PASS | 15 diamonds in 5 numbered stages (mapping below). Diamond test: 15/15 in every mode, 0 overlaps, EN and ES |
| 4 | A purple guide panel before each chart; no free caption | PASS, as amended | "Chart overview" panel before the chart (WC-Q13, WC-Q28). The glossary and source sit as `.synthesis` footnotes (WC-Q18, WC-Q21) |
| 5 | No sentence refers to the gap between builds | PASS | Gap scan: 0 hits in both dictionaries and the markup |
| 6 | Chart labels in the active language, rebuilt on change | PASS | Every visible and assistive label comes from `sch_*` keys and is redrawn on `i18n:changed`. The matrix shows 0 unresolved and 0 unapplied keys |
| 7 | One organism, no duplicated schedule CSS or logic, no new file | PASS | `renderSchedule()` in Brief 04's script, one instance. No file added |
| 8 | Every figure traced; EVIDENCE lines proposed | PASS | §7 below. Act 05's multi-page measures read "Measured at closure" (WC-Q24) |
| 9 | Identical EN/ES key sets; 0 unresolved and 0 unapplied; fallbacks = EN | PASS | EN 164 / ES 164, same order. Fallback check: 0 mismatches on Brief 04 keys (the one mismatch, `footer_tagline_pre`, is a global key and predates this run) |
| 10 | Brief 04 matrix clean; every panel titled in the active language | PASS | 48-cell matrix (4 briefs × 390/768/1440 × dark/light × EN/ES): 0 script or network errors, 0 overflow, 0 clipped lines; 120 panels titled correctly |
| 11 | Briefs 01–03 render identically to base | PASS, as amended | 0 pixel differences. Text differs only by the 21 lines of the mobile menu, which no longer renders at 768px and wider (WC-Q47). Panel bold on Briefs 01 and 02 (WC-Q44) shows only in open panels |
| 12 | Principal's edits exactly as left, each recorded | PASS | 147 edits in COPY-WC-GATE-EDITS: Gate 2 EN 34, Gate 3 EN 46, Gate 3 ES 67. Only syntax or typos were repaired, and only with a ruling (WC-Q28, WC-Q37) |
| 13 | One PR, unmerged, auto-merge off; sole author; zero AI reference; local main untouched | PASS | PR #33 open, auto-merge null. Author and committer are always the jdsaire account (two display names, §1). 0 AI-attribution trailers. Local main is at f28b4ce |
| 14 | Plan and report archived, READMEs updated, internal link count before = after, dispatch B line corrected | PASS | This commit. Internal markdown links under `docs/`: 0 before and 0 after (paths are cited in backticks). The `wb-brief-spanish` report §6 line is corrected |

### PR → cluster mapping as shipped (WC-Q4; names as of the Gate 3 lock)
- 01 Defect inventory: #18
- 02 Case briefs: #19 #22 #23 #26
- 03 Home/About/Contact: #20 #21 #27 #28 #29
- 04 Global mechanisms: #24 #25
- 05 Copy and i18n waves: #30 #31 #32

### Key totals (Brief 04, EN; ES is identical in keys)
- **Before (0b94217):** 124. **After:** 164.
- **Renamed, base → ship (31):** `act3_c1_rv_btn`→`act4_c1_rv_btn` · `sch_verdict`→`act6_verdict` · `sch_lede`→`act6_lede` · `gantt_noscript`→`sch_noscript` · `act3_verdict`→`act6_verdict` · `act3_lede`→`act6_lede` · `act3_c1_t`→`act4_c1_t` · `act3_c1_x`→`act4_c1_x` · `act3_c1_rv_txt`→`act4_c1_rv_txt` · `act3_c2_t`→`act4_c2_t` · `act3_c2_x`→`act4_c2_x` · `act3_c2_rv_btn`→`act4_c2_rv_btn` · `act3_c3_t`→`act4_c3_t` · `act3_c3_x`→`act4_c3_x` · `act3_c3_rv_btn`→`act4_c3_rv_btn` · `act3_c4_t`→`act4_c4_t` · `act3_c4_x`→`act4_c4_x` · `act3_c4_rv_btn`→`act4_c4_rv_btn` · `arch_foot`→`act4_foot` · `act4_verdict`→`act6_verdict` · `act4_lede`→`act6_lede` · `act5_verdict`→`act6_verdict` · `act5_lede`→`act6_lede` · `act5_p1_cat`→`act6_p1_cat` · `act5_p1_t`→`act6_p1_t` · `act5_p1_x`→`act6_p1_x` · `act5_p2_cat`→`act6_p2_cat` · `act5_p2_t`→`act6_p2_t` · `act5_p2_x`→`act6_p2_x` · `act5_p3_cat`→`act6_p3_cat` · `act5_p3_t`→`act6_p3_t`
- **Added (88):** `act0_eyebrow` · `act0_verdict` · `act0_lede` · `act0_aria` · `act0_s1_n` · `act0_s1_t` · `act0_s1_x` · `act0_s2_n` · `act0_s2_t` · `act0_s2_x` · `act0_s3_n` · `act0_s3_t` · `act0_s3_x` · `act0_foot` · `act1_aria` · `act1_s1_n` · `act1_s1_t` · `act1_s1_x` · `act1_s2_n` · `act1_s2_t` · `act1_s2_x` · `act1_s3_n` · `act1_s3_t` · `act1_s3_x` · `act2_aria` · `act2_foot` · `act3_rv1_btn` · `act3_rv1_txt` · `act3_rv2_btn` · `act3_rv2_txt` · `sch_aria_chart` · `sch_axis_cluster` · `sch_axis_window` · `sch_commits_1` · `sch_commits_n` · `sch_prs_1` · `sch_prs_n` · `sch_c1` · `sch_c2` · `sch_c3` · `sch_c4` · `sch_c5` · `sch_pr18` · `sch_pr19` · `sch_pr22` · `sch_pr23` · `sch_pr26` · `sch_pr20` · `sch_pr21` · `sch_pr27` · `sch_pr28` · `sch_pr29` · `sch_pr24` · `sch_pr25` · `sch_pr30` · `sch_pr31` · `sch_pr32` · `sch_active_1` · `sch_active_n` · `sch_days_1` · `sch_days_n` · `sch_ms_pr` · `sch_aria_cbar` · `sch_aria_ctotals` · `sch_aria_pr` · `sch_cap_merged` · `act3_fn_commits` · `act3_fn_prs` · `act3_fn_source` · `act4_c1_cat` · `act4_c2_cat` · `act4_c2_rv_txt` · `act4_c3_cat` · `act4_c3_rv_txt` · `act4_c4_cat` · `act4_c4_rv_txt` · `dash_col_multi` · `dash_col_single` · `dash_m6_d` · `dash_m7_d` · `dash_m8_d` · `dash_m9_d` · `dash_m1a` · `dash_m1a_d` · `dash_m1b` · `dash_m1b_d` · `dash_m2_d` · `act6_p3_x`
- **Retired (48):** `act1_g1_cat` · `act1_g1_l` · `act1_g1_r` · `act1_g2_cat` · `act1_g2_l` · `act1_g2_r` · `act1_g3_cat` · `act1_g3_l` · `act1_g3_r` · `act1_g4_cat` · `act1_g4_l` · `act1_g4_r` · `sch_e1_t` · `sch_e2_t` · `sch_e3_t` · `sch_e4_t` · `sch_e5_t` · `sch_e6_t` · `sch_e7_t` · `sch_e8_t` · `sch_e9_t` · `sch_aria_bar` · `sch_aria_bar1` · `sch_aria_totals` · `sch_aria_ms` · `sch_note` · `act3_f1` · `act3_c2_rv_txt1` · `act3_c2_rv_txt2` · `act3_f2` · `act3_c3_rv_txt1` · `act3_c3_rv_txt3` · `act3_c4_rv_txt1` · `act3_f3` · `act3_c5_t` · `act3_c5_x` · `act3_c5_rv_btn` · `act3_c5_rv_txt` · `act3_c6_t` · `act3_c6_x` · `act3_c6_rv_btn` · `act3_c6_rv_txt` · `dash_m1` · `dash_m3` · `dash2_d1_p` · `dash2_d2_p` · `dash2_d3_p` · `act5_p3_x`
- **Regional tag bank:** `tag_branding` added, `tag_internationalization` retired. EN and ES hold 18 tags each, before and after.
- The full key map, including keys added and retired within the run, is in `out/active/PRE-MAX/site-wC/COPY-WC-GATE-EDITS-v1_0.json`.

### Edits per gate
- **Gate 1:** principal corrections arrived as messages (WC-Q13 to WC-Q27), with no on-disk edits.
- **Gate 2:** 34 EN on-disk edits (10 before WC-Q28, 1 JSON syntax repair, 23 before WC-Q34).
- **Gate 3:** 46 EN and 67 ES on-disk edits (11 before WC-Q39; 35 EN and 67 ES locked at the release).

## 4. Authorized deviations
- **One chart, not two** (WC-Q13): the single-page schedule became a panel, by the principal's Gate 1 correction.
- **Scope added mid-run, ruled before it was built:**
  - Act 00 (WC-Q29, WC-Q34, WC-Q41)
  - Act 01 to Act 06 rewrites (WC-Q30 to WC-Q38)
  - the hero tag (WC-Q40)
  - the desktop-only overlays (WC-Q42)
  - the hidden Act 05 note (WC-Q45)
- **Changes outside Brief 04, approved during the run:**
  - regional `ui_tab_measure` ES "Métrica simple", which Brief 02's first tab also reads (WC-Q48)
  - `assets/js/core/progress.js`: reveal guard (WC-Q39)
  - `assets/css/shared/nav.css` and `assets/js/core/navchrome.js`: mobile menu (WC-Q46, WC-Q47)
  - panel bold in Briefs 01 and 02 (WC-Q44)
  - the regional tag bank (WC-Q40)
- **Ladder order:** the brief's "ES first, then mirror EN" order was reversed for this run's late rounds. EN was reviewed first at the principal's request, then ES was written and then locked by the principal (Gate 2 and Gate 3 re-presentations).
- **Plan-mode rounds:** in the Gate 1 correction rounds the principal told the run to execute while plan mode was active ("Acknowledge Plan Mode is active to execute requested changes"). Each later round was planned in plan mode and approved before execution.

## 5. Decisions resolved autonomously
- **Port 8001 incident (27 Sep):** a temporary "before" server was started on 8001, which belonged to the site-wD session. A cleanup killed that server, and one set of "before" screenshots came from the wD clone; they were retaken. Since then the run uses 8010 after checking it is free, and checks a port's owner before starting or killing a server.
- **The reveal guard lives in the shared module** and pins by inline style rather than per-brief CSS, so no brief file changed and Brief 03's rewrite is untouched (chosen through /ask).
- **Act 05 overlay:** placed beside its label and centred on it, 13rem wide. It falls back to below the label when there is less than 9rem of room.
- **Mobile menu:** a tighter vertical rhythm, so the whole menu fits 600px of height on all 7 pages. At 568px the briefs scroll slightly.
- **Experis source:** the report gives no edition date, so the sources note says "(Peru), 2026", after the 24 Sep 2026 report.
- **Act 03 key naming** (WC-Q38): section copy uses `act3_*`, the schedule organism `sch_*`.

## 6. Open items carried forward
1. **Brief 03** must merge main after this PR (or cherry-pick 501b98f, af8b756 and f61eb9f), re-baseline its freeze, add the panel-bold rule and run the stall, bold and menu checks. This blocks its last gate. See `out/active/PRE-MAX/site-wD/HANDOFF-WC-RevealGuard-v1_1.md`.
2. **Act 05:** the multi-page measures (commits, PRs, days, active days, organisms, dictionary keys) are measured at closure. Then restore `dash_foot` with the multi-page source (WC-Q45; backlog).
3. **Brief 01** needs its own Act 00 (backlog).
4. **Promote the Act 00 eyebrow** to the regional layer after site-wD lands (backlog).
5. **Confirm the Experis edition date** when the report is published.
6. **`footer_tagline_pre`:** its fallback differs from its EN value. It is a global key and predates this run.
7. **Cowork:** enter the EVIDENCE lines in §7 through `/post-deploy-sync`.

## 7. Proposed EVIDENCE lines (WC-Q3)
| Claim | Source / command | Date | Type | Basis | Limits |
|---|---|---|---|---|---|
| 22% of jobs disrupted by 2030; 170M created, 92M displaced; 39% of core skills changing | WEF, *Future of Jobs Report 2025* | Jan 2025 | Published survey | 1,000+ employers, 14M+ workers, 55 economies | Employer projections |
| 84% of Peru's tech employers demand AI modelling and app development, their top technical skill | Experis, *Expectativas de Talento Tecnológico* (Peru), as reported by agenciaorbita.org | 24 Sep 2026 (report) | Published survey | Peru tech employers; sample not stated | Edition date and sample to confirm |
| 66% of leaders wouldn't hire without AI skills; 71% prefer a less experienced candidate with them | Microsoft & LinkedIn, *Work Trend Index 2024* | May 2024 | Published survey | 31,000 people, 31 countries | Global, not Peru |
| A work sample predicts performance 3× better than education | Sackett et al. (2022), selection validity | 2022 | Meta-analysis | Validity coefficients | Ratio rounded |
| 3 in 4 hiring teams report AI-written applications | Robert Half | Nov 2025 | Published survey | n = 2,000+ | As published |
| 65% of hiring managers find skills harder to verify | Deel, *Global Hiring Report 2026* | 2026 | Published survey | As published | — |
| Single page: 175 dictionary keys | `git show df020c5:` the i18n JSON in jdsaire/jdigital; key count EN 175 / ES 175 | 18 Jun 2026 | Measured | 175 keys per language | legacy-desops (112/119) is the DesignOps variant |
| Multi page: 7 pages (Main, About, Contact, 4 briefs) | `ls` of the routes in this repository; two redirect stubs not counted | 27 Sep 2026 | Measured | 7 | Stubs excluded |
| PRs #18–#32 and their Lima merge dates | `~/bin/gh pr list --repo jdsaire/designops --state all --json number,mergedAt` (converted to UTC−5) | 27 Sep 2026 | Measured | 15 PRs | Lima dates; #24 and #29 fall a day before their UTC dates |
| Multi-page commits, PRs, days, active days, rates, organisms, keys | [GAP: needs my input — measured at closure] | — | — | — | Shown as "Measured at closure" |

## 8. Archive housekeeping
- **Dispatch B report §6:** "the installed plugin copy is still v3.0" corrected to "the installed plugin is v4.0" (measured at site-wC preflight, V12, 27 Sep).
- **READMEs:** `docs/v4/README.md`, `docs/v4/cc-plans/README.md` and `docs/v4/cc-completion-reports/README.md` each gain this run.
- **Internal markdown links under `docs/`:** 0 before and 0 after.
