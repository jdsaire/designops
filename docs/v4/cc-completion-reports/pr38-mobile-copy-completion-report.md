# Completion report — PR #38 · Mobile copy

**Branch:** `deploy/v25-pr38-mobile-copy`, from `41ce97b` · **Pull request:** [#38](https://github.com/jdsaire/designops/pull/38), manual merge only
**Plan:** [Plan-PR38-MobileCopy.md](../cc-plans/Plan-PR38-MobileCopy.md)

## 1. Commits

In order, on `deploy/v25-pr38-mobile-copy`:

- `4910488` — "feat(nav): the menu button and its close read their labels from the dictionaries, so Spanish readers hear Abrir menú / Cerrar menú"
- `3e2c91c` — "fix(main): shorter ledes and card labels for phones, and head meta that states the offer"
- `57072eb` — "fix(about): shorter journey titles for phones, with the dictionaries in page order"
- `cbffe9e` — "fix(brief01): shorter verdicts and ledes for phones, the build named an app and five weeks, with the dictionaries in page order"
- `7a58eb4` — "fix(brief02): shorter verdicts and ledes for phones, the gap named as trust, with the dictionaries in page order"
- `4dc2c01` — "fix(brief03): shorter verdicts and ledes for phones, the artifacts named as delivered, with the dictionaries in page order"
- `13cb842` — "fix(brief04): shorter verdicts and ledes for phones, the survey line true to its source, with the dictionaries in page order"
- `55da3c4` — "fix(main): a factual work title, a decade of milestones, and the build pillar in plain words"
- `ff2542e` — "fix(about): the ESAN entry states the school, the AccreditaPass entry keeps its optional API, and the Spanish names the revenue stream"
- `2ec74ae` — "fix(contact): a project-first lede, polite error messages and a shorter message hint"
- `b305f4f` — "fix(brief01): calmer Spanish in the failure cards, no production claim, and a merchant-first related card"
- `25354e5` — "fix(brief02): the Spanish hero says my app, and the closing card says written, not typed"
- `8b74a34` — "fix(brief03): the passenger figure in its exact form, and Spanish that names the reviewers and the review's edge"
- `2491165` — "fix(brief04): a plain hero line and summary, the build's scope instead of a superlative, and tighter closing cards"
- `043a46c` — "fix(brief02): bold phrases read as bold"
- `c73c3c5` — "fix(brief02): a leaner schedule, numbered epics, dependencies always on"
- `0fe0d96` — "refactor(briefs): one shared read-time label, only the minutes vary"
- `cdc5436` — "fix(brief04): two Spanish typos in the architecture cards"
- `39471b6` — "docs: archive the PR #38 plan and completion report"
- (this commit) — "docs: record the PR #38 link in its completion report"

- **One commit per released gate.**
  - Contact had no Round 1 edits, so no commit.
  - At T1, the menu labels are their own commit.
- **The two Brief 02 fixes** touch the same page and are split into two commits. Each one checked with parity 0 and 0 orphaned keys.

## 2. Outcome

- **Every page reads shorter on a phone, in EN and ES.**
  - In Round 1, 90 values changed, all trimmed by me on disk. Brief verdicts and ledes are now short phrases.
  - In Round 2, 30 more were settled, from the external copy review or from fence fixes.
- **No string I changed overflows or clips at 320 or 390.**
  - 51 headings that ended on a single word no longer do.
  - 14 new single-word endings at 320 were shown at their gates and accepted.
- **Menu labels:** the menu button announces "Abrir menú" in Spanish on all 7 pages.
- **Main's head meta** states the offer, not the retired statement.
- **Copy inside the fence:**
  - no "lead", "platform", "production" or superlative claims;
  - "130,000+" in its exact form;
  - the "optional" Web API restored;
  - the survey line true to its source.
- **Brief 02:**
  - bold phrases read as bold;
  - the schedule keeps Story points, Hours and Milestones, numbers its epics 01–05 and always draws its dependencies.
- **Read time:** the four briefs show "N min read" / "N min de lectura" from one shared key.
- **Key order:** the About and brief dictionaries now follow the page; Main and Contact already did.

## 3. Results against the success criteria

1. **Gates:** every gate halted and released only on its exact phrase: Plan, T-MAIN … T-B04, TRIM, S-MAIN … S-B04, FIXES, RELEASE. T1 and T4 were re-presented after new saves; T4 was released with its final correction.
2. **Values and parity:** every released value is live and verbatim in EN and ES. Parity 0; markup fallbacks equal EN; 0 orphaned keys of 990.
3. **Fit:** 0 new overflow or clip at 320/390 for any changed string. Single-word endings: 51 fixed, 14 accepted.
4. **Hero lock:** the ten hero keys hash `75113da665b4f80f` at every gate and at the tip. The first-visit cue still plays, stops on tap and never repeats (WebKit and Chrome).
5. **Menu labels:** an ES view announces "Abrir menú" on all 7 pages in WebKit and Chrome (28/28 checks).
6. **Fence:** every fence hit was shown before its gate released; no value exceeds the evidence record; no tú.
7. **Export:** the checkpoint export holds 8 files and 1,042 key rows; the review returns are archived with the run records.
8. **Regression:**
   - matrix 84/84 with zeros;
   - contrast: 292 failures, all pre-existing, 0 new;
   - bold check: 1,424 bold runs, 0 not bold;
   - reload suite: 264 targets in WebKit and Chrome, 0 px visible drift; one 1 px Chrome reading on Brief 02 did not reproduce on two reruns.
9. **Attribution:** sole author jdsaire across 18 commits; no trailer.

## 4. Authorized deviations

- **Model:** Opus 5.5 at Medium effort instead of the brief's Sonnet 5.5 High (PR38-Q1).
- **Baselines:** dictionary snapshots instead of screenshot sets (PR38-Q3). Screenshots were taken only where fit failed.
- **Head meta:** proposed by the run at my request (PR38-Q4).
- **Key order:** the About and brief dictionaries were reordered to page order, at my request.
- **Pre-release code fixes:** the three fixes in Brief 02 and the briefs (PR38-Q23, Q24).

## 5. Decisions resolved autonomously

- The fallback sync sets markup text equal to the new EN, a mechanical step.
- The checkpoint export's page names match the review package's schema.
- A review return that named a non-existent About key was applied to the real key.
- `gantt_deps_text`, the schedule's screen-reader dependency list, was aligned to the numbered epic names, and the unused `.gantt__action` CSS was removed.

## 6. Retired and added keys

- **Retired, deleted from both languages with no reference left:** `gantt_expand`, `gantt_collapse`, `gantt_f_deps` (Brief 02), `hero_read` (Briefs 01, 03), `brief_read` (Briefs 02, 04).
- **Added:** `nav_menu_open` and `nav_menu_close` (global); `ui_read_min` (briefs, regional).

## 7. Open items carried forward

- **KEYS and SPEC v1_3:** Round 1 and Round 2 values, the new and retired keys, and the head meta. POSITIONING §4 is closed by PR38-Q4.
- **The copy-edition and Spanish-copy specs:** updated for review-written Spanish.
- **PR #39 precedent tasks (PR38-Q25), four in all:**
  - an EN-only centred text at the smallest breakpoint (Brief 02, Act 04, card 01) and a site sweep;
  - Brief 03's motion extended to the other pages;
  - a latent case where the mobile menu reverts to the plain ×;
  - Brief 02 Act 02's previous/next controls removed in favour of native horizontal scroll, which also drops two untranslated English labels.
- **Menu close label:** while the menu is open, the visible close still announces "Open menu, expanded". A switching label needs `navchrome.js` (backlog).

## 8. Relay

- **Landed:** 18 commits on `deploy/v25-pr38-mobile-copy`, plus this archive. Mobile copy is revised on all 7 pages in EN and ES.
- **Open:** the manual merge of PR #38.
- **Next station:** Cowork, the post-deploy sync.
- **Do there first:** KEYS/SPEC v1_3, then the PR #39 brief and trigger with its three precedent tasks.
- **Then:** PR #39 (Brief 04 figures, plus the precedent tasks), then PR #40 (hygiene).
- **Records:** `out/active/PRE-MAX/closing/PR38-run/`.
