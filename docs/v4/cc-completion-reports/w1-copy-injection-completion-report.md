# Completion report — W1 · Copy injection, Main and About

**Branch:** `deploy/v17-w1-copy-injection`, from `4267a65` (the merge of PR #29)
**Pull request:** [#30](https://github.com/jdsaire/designops/pull/30) — open and unmerged when this run ended
**Dispatch:** `BRIEF-CC-W1-v1_0.md` → `P-CC-W1-v1_0.xml`, both in `out/active/PRE-MAX/site-w1/` outside this repository

---

## 1. Commits

- `1db0baa` — chore(i18n): set Main's English copy to the approved wave 1 values
- `7819831` — chore(i18n): set the About bridge's English copy to the approved values
- `2302f2d` — chore(i18n): add the English scan lines and portrait caption keys
- `90f1fb1` — feat(home): render three scan lines in the About teaser
- `4bd6edb` — fix(i18n): swap alt text as an attribute so non-image hosts follow the language
- `0eb1d68` — feat(about): key the portrait caption so it follows the language
- `d764740` — fix(home): align Main's head metadata and fallback text with the approved copy
- `189d4d1` — fix(home): point the fourth card at the Portfolio Evolution brief
- `52c94dd` — chore(i18n): carry the principal's Gate 1 edits
- `c3a3f02` — revert(home): remove the About teaser scan lines
- `cc1478d` — feat(home): show the About lede under its heading
- `b451b63` — chore(i18n): remove keys no page or script references
- `70df88e` — chore(capabilities): remove the hidden page's hero copy and its keys
- `509add9` — chore(contact): remove the hidden channels heading and its key
- `f0c783d` — feat(nav): give the Work menu its own labels
- `5c65343` — refactor(home): one key for the four work-card calls to action
- `f37e39c` — chore(i18n): set work card bodies 1, 3 and 4 to the principal's wording
- `b77159f` — fix(about): make the hero heading a single sentence
- `4af5178` — refactor(i18n): name misplaced keys after the page and organism they render in
- `6b39055` — feat(contact): ask what brings the visitor, with five distinct reasons
- `1f5dcbd` — chore(home): drop Innova ULima from the credential ticker
- `bd98a42` — chore(i18n): align the capability image descriptions with the new card labels
- `9835909` — chore(i18n): order both dictionaries by page and organism
- `0b655c2` — fix(home): align fallback text with the carried copy
- `eb3184b` — chore(i18n): set Main, the Work menu and the contact reasons in Spanish
- `52c3fb1` — chore(i18n): re-derive the Spanish hero segments
- `82cc471` — chore(i18n): set the About hero and page copy in Spanish
- `8058297` — chore(i18n): give the About journey its first Spanish
- `bd2f979` — chore(i18n): set the Spanish hero's highlighted segments
- `787d8c5` — chore(i18n): carry the principal's Gate 2 edits
- `d74f655` — refactor(home): render one headline in both languages, and split the attribution into name and title
- `cb1f8a0` — style(home): separate the two headline lines and set the name line in bold
- `1e85855` — fix(home): keep a section header visible when its scroll timeline stalls
- `6922089` — style(home): tighten the headline gap, and carry the title line onto every surface
- `d3405c1` — chore(i18n): add the mobile overlay's group labels
- `cb33cd5` — feat(nav): rebuild the mobile overlay as sitemap, theme and language groups
- `c752535` — fix(nav): stop the bar sticking hidden when a scroll settles
- `445774c` — chore(i18n): add the overlay's Home label
- `82037fc` — feat(nav): give the overlay a Home row, group rules and a current-page state
- `448ac46` — fix(nav): pin a section header that is taller than the viewport
- (this commit) — docs: archive the wave 1 plan and completion report

**41 commits before this one, one per item.** One item was split: the Spanish hero landed
as `52c3fb1` (the two headline values) and `bd2f979` (the seven highlighted segments),
because the first pass skipped the segments — they exist only in Spanish, and the guard
that protects against writing a key the English dictionary does not have excluded them.

## 2. Outcome

Main and the About page's opening bridge now carry the approved copy in both languages,
and the About journey has its first Spanish — 124 values. Along the way the principal
rewrote much of the English and Spanish himself, at the gates, on disk; every one of those
edits is recorded and none was overwritten. The dictionaries were reordered by page and
organism, misplaced keys renamed to the page they render on, and every key referenced by
no page or script removed. The Work menu gained its own four labels so the cards could
take a shorter form; the four card calls to action became one key. Contact's dropdown
became five mutually exclusive reasons for writing. Two chrome defects were fixed: section
headers that could be left invisible when their scroll-driven entrance stalled, and the
navigation bar that stayed hidden after scrolling back up. The mobile overlay was rebuilt
as three left-aligned groups with the current page marked.

**The content freeze held:** every value shipped came from a copy lock, from the Spanish
skill pass over approved English, or from the principal's own edits. **The shared-file
fence held in substance:** `i18n.js`, `navchrome.js` and `progress.js` changed, each for a
defect or a directed change, and every one is listed below; no other core script was
touched.

## 3. Results

| # | Criterion | Result |
|---|---|---|
| 1 | Every gate halted and released on its own phrase | PASS — plan, Gate 1 (re-presented once), Gate 2 (re-presented once), Gate 2B (re-presented once), Gate 3 |
| 2 | One pull request, URL printed, unmerged at the end | PASS — [#30](https://github.com/jdsaire/designops/pull/30), auto-merge never enabled |
| 3 | Both pages render in both languages at 390 / 768 / 1440 px, dark and light | PASS — 96 combinations: 0 overflow, 0 new console errors, 0 new clipped lines |
| 4 | No untranslated string on a surface the locks cover | PASS — 0 unresolved keys on Main, about/, contact/ and capabilities/ in both languages |
| 5 | One title line wherever a role title appears | PASS — "AI Product & Experience Engineer" on the hero, `<title>`, `og:title`, and about/'s portrait alt and caption, both languages (ruling W1-G2-Q1) |
| 6 | No retired label on either page | PASS — 0 matches in the rendered text of both pages in both languages |
| 7 | Card 4's copy, route and accessible name agree | PASS — `work/portfolio-evolution/`, "Access the Portfolio Evolution brief" |
| 8 | Key totals reported, before and after | PASS — EN 286 → 236 (43 added, 93 removed) · ES 156 → 236 (177 added, 97 removed); no key renamed without its markup |
| 9 | The edits file matches what the principal changed | PASS — `COPY-W1-GATE-EDITS-v1_0.json`: 53 English and 53 Spanish entries, plus the 25 renames |
| 10 | Every figure traces to an evidence id; no `[GAP]` ships | PASS — with one correction of record: card 1 reads 16 stadiums, measured from the app's own fixture file (104 matches, 16 venues, 3 countries), not the 18 first written |
| 11 | Only the named shared scripts changed | PASS — `i18n.js` (one line), `navchrome.js`, `progress.js`; `paths.js` untouched |
| 12 | The copy locks are unchanged | PASS — checksums identical to the start of the run |
| 13 | Zero AI attribution anywhere | PASS — commit messages, author, committer, branch, PR title and body, and the full diff |
| 14 | One commit per item, conventional messages | PASS — one split, recorded in §1 |
| 15 | Plan and report archived, indexes updated | PASS — this file and `../cc-plans/Plan-W1-CopyInjection.md` |
| 16 | Internal markdown links under `docs/` | PASS — 0 before, 0 after; the tree has none |

## 4. Authorized deviations

1. **The scan lines were removed after shipping.** Three scan lines in Main's About teaser
   were built at Gate 1 from the copy lock, then removed at the principal's direction
   ("never requested"), along with their keys.
2. **Scope beyond the brief, each directed at a gate and logged as a ruling:** key renames
   and the reorder; removal of all unreferenced keys, plus `cap_hero_*` and
   `contact_elsewhere_head` with their markup; the Contact reason dropdown; the Innova
   ULima mark; the mobile overlay rebuild; the two chrome bug fixes.
3. **`capabilities/` is no longer restorable whole.** Its hero heading and deck were
   removed with their keys; the page's `<main>` remains hidden by its own stylesheet.
4. **S10D's hidden channels heading is now permanent.** The markup and key were removed, so
   the "reversible" note in that run's report no longer holds. Recorded here rather than
   editing that report, since the decision post-dates it.
5. **The Innova half of C2-b′ is closed** by this run rather than by the separate
   structural dispatch it was reserved for.

## 5. Decisions resolved autonomously

1. **Scan-line pattern** (while they existed): Main's own three-column list idiom, reusing
   existing classes, with zero new CSS rules.
2. **New key names** as the locks proposed them; `work_card_cta` for the unified call to
   action; `nav_card1–4_label`, `nav_group_*` and `nav_home` for the chrome.
3. **Spanish category tags** were rendered in Spanish — DEPORTES, BANCA, AVIACIÓN — where
   the lock had kept BANKING in English. Presented at Gate 2 and left standing.
4. **Capability image descriptions** were rewritten to follow the new card labels.
5. **The reveal guard's home** is `core/progress.js`, the one module every page loads.
6. **Hide-on-scroll thresholds:** 120 px of accumulated downward travel to hide, 8 px
   upward to return — 120 chosen to clear the largest measured smooth-scroll settle (57 px
   on brief 01; 37 px on about/).

## 6. Open items carried forward

1. **Reconcile the copy locks to v1.1** from `COPY-W1-GATE-EDITS-v1_0.json` and
   `COPY-W1-ES-DELTA-v1_0.json`. This is the next session's first task.
2. **The English and Spanish copy skills are updated after lock**, per the principal's
   instruction — the site's copy is now the reference, not the skills.
3. **POSITIONING §2 owes a line** at its next bump: the title line is
   "AI Product & Experience Engineer", and it stays in English on Spanish surfaces.
4. **about/'s head metadata** still reads "About · Juan Diego Saire — DesignOps" and "the
   making of an operator who builds"; no lock covers it. In the phase backlog.
5. **The shared link-preview image** is a 665,784-byte SVG on both pages, a format most
   preview crawlers do not render. Measured, unchanged, in the phase backlog.
6. **The build-window end date** is still contradicted between about/ (6 Jul 2026) and the
   Portfolio Evolution brief (04 Jul 2026). Main carries no end date, so nothing in this
   run depends on the ruling.
7. **Twelve Main keys had no Spanish** when the run began; the skill pass covered the four
   that render. The rest belong to surfaces this wave did not touch.
8. **`work/front-end-evolution/`** remains as a stub for old links; the card and the menu
   both point at `work/portfolio-evolution/`.
