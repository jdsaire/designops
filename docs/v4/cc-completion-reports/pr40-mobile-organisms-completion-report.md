# Completion report — PR #40 · Mobile organisms

**Branch:** `deploy/v27-pr40-mobile-organisms`, from `a083cab` · **Pull request:** #40 (link recorded after opening), manual merge only
**Plan:** [Plan-PR40-MobileOrganisms.md](../cc-plans/Plan-PR40-MobileOrganisms.md)

## 1. Commits

In order, on `deploy/v27-pr40-mobile-organisms`:

- `98d5e83` — "docs(spec): decoration spec v1.4, as recorded after PR #39"
- `73c5abb` — "feat(about): the journey filter is one dropdown, Contact's control, on one line at every width"
- `12abdc4` — "feat(briefs): one chart standard for the briefs — phone timeline and desktop card, footnotes, purple epic numbers, a shared "How to read the chart" label"
- `d56d130` — "feat(brief01): on phones the schedule reads as a timeline with clearer phase names; the desktop Gantt numbers its phases in purple"
- `7635ef8` — "feat(brief02): the schedule reads in planned hours with named phases, one footnote and no filters; on phones a timeline with a Live date"
- `a1d20da` — "feat(brief04): on phones the rollout reads as a timeline with plainer stage names; one chart-guide label"
- `125f34e` — "feat(site): every ampersand renders from Arial's glyph instead of Archivo's"
- `8c91fdb` — "feat(briefs): one dashboard panel for the briefs — the figures, what they mean, up to three footnotes; regional panel labels"
- `adf6af0` — "feat(brief01): the audits act reads as one panel — the figures, what they mean, three footnotes; the tabbed tables go"
- `1b84308` — "feat(brief02): the dashboard reads as one panel — the figures, what they mean, three footnotes; the tabs and meters go"
- `9551a80` — "feat(brief04): the V2 vs V1 dashboard reads as one panel — paired figures drawn to scale, what they mean, three footnotes; the table goes; the last tab label retires"
- `0fd84f1` — "feat(briefs): on phones a brief's card sets scroll sideways, numbered 01 / 0N with the next card peeking; detail links stay on desktop"
- `2b1685e` — "feat(brief01): on phones the problem, simulation, architecture and closure cards scroll sideways; two short notes keep the simulation label and the back-end limit"
- `91b78f2` — "feat(brief02): on phones the context, architecture and reflection cards scroll sideways; a one-line receipt footnote; the closing sequel goes"
- `8c4d12e` — "feat(brief04): on phones the context, problem, evolution, architecture and reflection cards scroll sideways; a one-line evolution footnote"
- `c76755e` — "feat(briefs): each brief's read time matches the reader's language and screen — four measured numbers, one shown"
- (this commit) — "docs: archive the PR #40 plan and completion report"

- **One commit per item.** Each gate's build was committed only after its release phrase: one shared commit, then one per brief. Brief 02's G6 commit kept `ui_tab_measure` and Brief 04's retired it, where its last reference went, so no commit leaves a missing key. Parity and missing keys are 0 on every commit's tree.

## 2. Outcome

- **Spec (G0):** decoration spec v1.4 committed verbatim, alone.
- **About (G1–G2):** the journey filter is one dropdown, Contact's own control rule for rule, on one line at every width, with its label keyed.
- **Schedules (G3):**
  - On phones, Briefs 01, 02 and 04 replace the Gantt with a relay timeline (Brief 03's organism) and a purple desktop card; the "+" panels and footnotes around the chart hide.
  - Brief 02's chart is rebased on planned hours, with no filters, named phases, one story-point footnote and a "Live 15 Jul 2026" node.
  - Every Gantt numbers its phases in purple; the shared footnote standard and one "How to read the chart" label apply.
  - Every "&" renders from Arial's glyph.
- **Dashboards (G4–G6):** each brief's dashboard act is one panel at every width: the figures (drawn to scale from 768, white on phones), "What it means", and two insight statements at card-text size. Up to three footnotes follow, from 768 only. The old tabbed dashboards and their keys are retired.
- **Phone card scrollers (G6b):**
  - Below 768, twelve card sets scroll sideways, numbered "01 / 0N" with the next card peeking.
  - In-card detail links hide there; two phone notes keep Brief 01's simulation label and back-end limit.
  - Brief 02's closing sequel is removed, and two long footnotes are shortened.
- **Read time (G7):** the hero shows the measured minutes for the reader's language and screen.

## 3. Results against the success criteria

1. **Gates:** each gate halted and released only on its exact phrase. Plan, G0, G1 (pick A, with its correction), G2 (A1), G3 (after two iterations), G4, G5 (pick Y, after four rounds), G6, G6b (after the surgical fixes), G7. Every release is in the plan's gate log.
2. **Spec:** `docs/v3/organisms/decoration-system.spec.md` is v1.4, byte-identical to Cowork's file (sha256 recorded at G0), committed alone (`98d5e83`).
3. **About:** one-line dropdown at 320/390 in EN and ES. Its state survives a language swap; keyboard and screen-reader access come from the native select.
4. **Briefs on phones** (as amended by PR40-Q22, Q28, Q29):
   - no Gantt; the relay timeline plus desktop card instead;
   - the dashboard act is the panel at every width, with no phone card for it.
   - From 768 the schedules are unchanged except where ruled: Brief 02's redesign, the purple numbers, the footnote style.
5. **Figures:**
   - every node and panel figure comes from the brief's own copy or EVIDENCE;
   - Brief 01's audit figures and Brief 04's V1 figures go to EVIDENCE proposals E1 and E2;
   - no rounding; Brief 04's figures are unchanged.
6. **Read time:** shown equals measured in 40/40 cells per engine; the shared `ui_read_min` label is kept.
7. **Motion:**
   - final frame = reduced motion, 292/292 component frames;
   - hidden text 0 on 7 pages at 390 and 1440 in Chrome and WebKit;
   - longest one-shot 1,467 ms (Brief 03, WebKit 1440), no page above 1.5 s;
   - Brief 02 peaks at 1,234 ms, so its breach is gone (it was a grouping artefact; spec proposal 3).
8. **Regression:**
   - matrix 84/84, all zeros;
   - parity 0; orphans 0 of 950; fallbacks = EN;
   - contrast 270 on the tip against 292 on the base. Of the 26 not in the base, 24 are the purple epic numbers at 3.96:1, ruled in PR40-Q13 (Brief 04's already failed the same way on the base), and 2 are Brief 04's chart button, which already failed at 3.96:1 under its old label.
9. **Untouched files:** `work/airport/` is byte-identical to `a083cab`; no governing file, skill or key sheet was edited. Proposals were written to `closing/PR40-run/`: spec v1.5, EVIDENCE, keys-for-sync and the read-time rule.
10. **Attribution:** sole author and committer jdsaire on every commit; no trailer; branch name clean.
11. **Push:** only after `APPROVED PR40 G8` (recorded below once opened).
12. **Archive:** harness copied to `closing/PR40-run/harness/` with a README. This plan and report are archived with index lines; `docs/v4` internal links went from 4 to 5, all resolving.

## 4. Authorized deviations

- **Scope grew at JD's gates:**
  - Brief 02's schedule redesign, the "&" glyph and new phase names (G3);
  - dashboards rebuilt at every width, beyond brief §10's phone-only scope (G5–G6);
  - phone card scrollers (G6b);
  - the G6b surgical fixes.
- **Retirement order:** `ui_tab_measure` was retired in Brief 04's commit rather than Brief 02's, where the last reference went.
- **G3 leftovers removed with the G6 dashboards:** Brief 01's `.dash__foot` rule and Brief 02's `.gantt .layer-off` rule.
- **Ladder guard:** `core/decoration.js` skips the ladder run animation on a sideways-scrolling set. This is the guard timelines already had, applied for G6b.

## 5. Decisions resolved autonomously

- The scroller counter sits on `::before`, because the decoration run edge owns `::after`. Each card's first line reserves 3.4 rem for it.
- Numbering was chosen over a three-card cap: every set holds 3–4 cards, so no copy was cut.
- The read time switches by `html[lang]` and width in CSS: no keys, no script; without scripts it reads EN.

## 6. Keys per gate (EN and ES alike; retired keys deleted in both, 0 references)

#### G2 (About)
- none

#### G3 (schedules, &)
- `assets/i18n/briefs/briefs-ui`: added 3 (ui_chart_read_btn, ui_sched_mob_t, ui_sched_mob_x); retired 0; EN value changed 0
- `work/accreditapass/i18n/accreditapass`: added 7 (sch_m1_x, sch_m2_x, sch_m3_x, sch_m4_x, sch_m5_x, sch_m6_x, sch_m7_x); retired 0; EN value changed 7
- `work/portfolio-evolution/i18n/designops`: added 5 (sch_m1_x, sch_m2_x, sch_m3_x, sch_m4_x, sch_m5_x); retired 1 (act3_rv1_btn); EN value changed 3
- `work/yape-trust-verify-brief/i18n/yape-trust-verify`: added 8 (act3_lede, gantt_axis_hours, act3_fn_sp, act3_m1_x, act3_m2_x, act3_m3_x, act3_m4_x, act3_m5_x); retired 6 (act3_rv_btn, gantt_show, gantt_f_sp, gantt_f_hours, gantt_f_ms, gantt_unit_h_planned); EN value changed 9

#### G6 (dashboards)
- `assets/i18n/briefs/briefs-ui`: added 4 (ui_dash_figs_h, ui_dash_means, ui_dash_v2, ui_dash_v1); retired 1 (ui_tab_measure); EN value changed 0
- `work/accreditapass/i18n/accreditapass`: added 13 (act5_hl1_l, act5_hl1_x, act5_hl2_l, act5_hl2_x, act5_hl3_v1, act5_hl3_v2, act5_hl3_l, act5_hl3_x, act5_ins1, act5_ins2, act5_fn1, act5_fn2, act5_fn3); retired 41 (dash_tab1, dash_tab2, dash_tab3, act5_t1_cta, act5_tbl_h2, act5_tbl_h3, act5_tbl_r1_m, act5_tbl_r1_a, act5_tbl_r1_b, act5_tbl_r2_m, act5_tbl_r2_a, act5_tbl_r2_b, act5_tbl_r3_m, act5_tbl_r3_a, act5_tbl_r3_b, act5_t1_r, act5_t2_cta, t2_r1_m, t2_r1_a, t2_r1_b, t2_r2_m, t2_r2_a, t2_r2_b, t2_r3_m, t2_r3_a, t2_r3_b, act5_t2_r, act5_t3_cta, t3_r1_m, t3_r1_a, t3_r1_b, t3_r2_m, t3_r2_a, t3_r2_b, t3_r3_m, t3_r3_a, t3_r3_b, act5_t3_r, act5_footnote_audits, act5_footnote_disposition, act5_footnote_tests); EN value changed 0
- `work/portfolio-evolution/i18n/designops`: added 11 (dash_hl1_l, dash_hl1_x, dash_hl2_l, dash_hl2_x, dash_hl3_l, dash_hl3_x, dash_ins1, dash_ins2, dash_fn1, dash_fn2, dash_fn3); retired 35 (dash_tab2, dash_tab3, dash_col_multi, dash_col_single, dash_m6, dash_m6_d, dash_m7, dash_m7_d, dash_m8, dash_m8_d, dash_m9, dash_m9_d, dash_m1a, dash_m1a_d, dash_m1b, dash_m1b_d, dash_m2, dash_m2_d, dash_d1, dash2_d1_p, dash_d1_p, dash_d2, dash2_d2_p, dash_d2_p, dash_d3, dash2_d3_p, dash_d3_p, dash_r1_t, dash_r1, dash2_r1_t, dash2_r1, dash_r3_t, dash_r3, dash_foot, dash_cutoff); EN value changed 0
- `work/yape-trust-verify-brief/i18n/yape-trust-verify`: added 14 (act5_hl1_v1, act5_hl1_l, act5_hl1_x, act5_hl2_c5, act5_hl2_l, act5_hl2_x, act5_hl3_v1, act5_hl3_l, act5_hl3_x, act5_ins1, act5_ins2, act5_fn1, act5_fn2, act5_fn3); retired 25 (act5_tab_r, band_m_badge, band_m_what, m1_l, m1_p, m2_l, m2_p, m3_l, m3_p, m4_l, m4_p, m5_l, m5_p, m6_l, m6_p, m7_l, m7_p, m8_l, m8_p, r1, r2_1, r2_2, r2_3, r3, act5_foot); EN value changed 0

#### G6b (scrollers, fixes)
- `work/accreditapass/i18n/accreditapass`: added 1 (act4_fn_limit); retired 0; EN value changed 0
- `work/portfolio-evolution/i18n/designops`: added 0; retired 0; EN value changed 1
- `work/yape-trust-verify-brief/i18n/yape-trust-verify`: added 0; retired 1 (act6_sequel); EN value changed 1

#### G7 (read time)
- none
Per-key tables with level, EN, ES, reason and evidence are in `closing/PR40-run/gates/G6/keys.md` and `G6b/keys.md`. G3's are in `gates/G3/epics.md` and the PR40 key map.

### Read time (minutes; words in the G8 records)

| Brief | EN ≥768 | EN <768 | ES ≥768 | ES <768 |
|---|---|---|---|---|
| Brief 01 | 7 | 4 | 9 | 4 |
| Brief 02 | 8 | 5 | 9 | 6 |
| Brief 03 | 6 | 6 | 6 | 6 |
| Brief 04 | 6 | 4 | 7 | 4 |

## 7. Open items carried forward

- **Decoration spec v1.5 (Cowork):** `closing/PR40-run/SPEC-AMENDMENT-PROPOSALS-PR40-v1_0.md`, items 1–11:
  - RUN "Used on" 13 → 16;
  - the Brief 02 breach removed;
  - D41–D43;
  - the RUN guard on swipe tracks;
  - GROW · meter retired;
  - the §10.3 measurements.
- **EVIDENCE (Cowork):** proposals 1–5 in `EVIDENCE-AMENDMENT-PROPOSALS-PR40-v1_0.md`: Live date, "one week", the chart's planned hours, E1 audits, E2 V1 figures. Items 6–7 are moot.
- **KEYS:** the regional additions and retirements in `records/keys-for-sync.json`.
- **Chassis:** proposals 1–7 in `records/CHASSIS-PROPOSALS-PR40-v1_0.md` (footnote standard, purple epic numbers, insight standard, dashboard act, phone card scroller).
- **PR #41 (hygiene):**
  - unify Brief 03's relay CSS with the shared file;
  - dedupe Brief 04's inline `.synthesis`;
  - remove the dead meter code;
  - key Brief 01 Act 02's English-only track label.

## 8. Relay

- **Landed:** 16 commits on `deploy/v27-pr40-mobile-organisms`, plus this archive. About dropdown, phone schedules, the dashboard panel, phone card scrollers, read time per screen and language.
- **Open:** the manual merge of PR #40.
- **Next station:** Cowork, the post-deploy sync.
- **Do there first:** decoration spec v1.5 and EVIDENCE from the run's proposals; KEYS for the regional keys.
- **Then:** PR #41 (hygiene), with the backlog lines this run opened.
- **Records:** `out/active/PRE-MAX/closing/PR40-run/`.
