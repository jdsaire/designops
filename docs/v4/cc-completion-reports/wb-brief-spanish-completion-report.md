# Completion report — Dispatch B · brief Spanish, three-level i18n, Brief 01/02 English re-lock

**Branch:** `deploy/v19-wb-brief-es`, from `f28b4ce` (origin/main after PR #31)
**Pull request:** [#32](https://github.com/jdsaire/designops/pull/32), open and unmerged when this report was written. Manual merge only.
**Dispatch:** `BRIEF-CC-DISPATCH-B-v1_0.md` → `P-CC-DISPATCH-B-v1_0.xml`, both in `out/active/PRE-MAX/site-wB/` outside this repository

---

## 1. Commits

jdsaire is the sole author and committer of all 43 commits listed below, plus this archive commit.

- `29c8d62` fix(brief01): make the role strip claim only what the research and the role support
- `b89a306` fix(brief02): say what the verifier checks without implying a live bank
- `2ccc1cb` fix(brief04): drop the case-brief count
- `2e30267` chore(brief02): retire Spanish keys orphaned by the wave 2A rewrite
- `d51e2ce` chore(brief04): retire Spanish keys orphaned by the wave 2A rewrite
- `4f79693` chore(brief03): retire keys nothing reads
- `f45c28e` chore(brief04): retire keys nothing reads
- `50b7dea` fix(brief03): stop the script error on load
- `a0176ab` feat(brief01): add the AccreditaPass brief in Spanish
- `25ee58d` fix(brief02): give every English line its Spanish
- `2be53e0` fix(brief04): give every English line its Spanish
- `af054c9` fix(brief04): state the single-page build window as 24 abr – 04 jul, 71 días
- `ae7c339` fix(brief04): read the schedule's assistive labels in the active language
- `46b5071` fix(i18n): stop the Spanish work label colliding with Brief 04's name
- `2957829` feat(i18n): add the regional brief dictionaries
- `5257fd0` fix(brief01): load the regional brief dictionaries
- `4ccc97d` fix(brief02): load the regional brief dictionaries
- `43efa67` fix(brief03): load the regional brief dictionaries
- `4c40f5f` fix(brief04): load the regional brief dictionaries
- `d0098bf` refactor(brief01): read shared strings from the regional dictionaries
- `a8186f7` refactor(brief02): read shared strings from the regional dictionaries
- `5ce19fd` refactor(brief03): read shared strings from the regional dictionaries
- `11dbbe4` refactor(brief04): read shared strings from the regional dictionaries
- `7d25b9b` fix(i18n): carry the Gate 3R edits to the global and Main dictionaries
- `9217bd2` fix(i18n): rename four regional tags
- `5fcf929` fix(i18n): carry the Gate 3R edits to the regional dictionaries
- `9965d02` fix(brief02): render bold-inline lines in Spanish and title panels in the active language
- `6369ce3` fix(brief03): render the role strip from its dictionary and title panels in the active language
- `ab6c047` fix(brief04): render the role strip in Spanish and title panels in the active language
- `bc7836b` feat(brief01): re-lock the English to the Spanish and narrate the audit detail in Act 05
- `c9f3d2f` fix(brief01): apply the approved Spanish corrections
- `bc91680` fix(i18n): rename the short-version label to mirror the Spanish
- `102663e` fix(brief02): re-voice the Spanish under the transcreation standard
- `af72bb2` fix(brief04): re-voice the Spanish under the transcreation standard
- `ae37f6a` feat(brief03): add the Airport brief in Spanish
- `eb4a4d6` fix(brief02): carry the Gate 3 Spanish edits
- `17b9ee0` fix(brief01): carry the Gate 3 English edit
- `050554c` fix(i18n): rename the Measured tab to Measure
- `5ba0bc9` feat(brief02): panel the context, purpose and chart guide, translate the chart, and tighten the copy in both languages
- `45f20d9` fix(brief02): carry the Gate 3 Spanish edits
- `ffb9e72` fix(brief02): fold the chart caption into its panel, tighten the panels and add the Act 06 lede
- `b789269` fix(brief02): carry the Gate 3 Spanish edits
- `970f7d1` fix(brief02): restore the mock-records limit and mirror the final hero lines
- The archive commit that adds this report.

## 2. Outcome

**Spanish.** All four briefs render in Spanish.
- Brief 01 is new: its ES was locked by the principal on disk.
- Briefs 02 and 04 are re-voiced under designops-copy-es v4.0.
- Brief 03 is live (WB-Q23).

Every brief dictionary has EN/ES key parity.

**Three-level dictionaries** (WB-Q8–Q11):
- **Global:** chrome, 16 keys.
- **Regional:** `assets/i18n/briefs/`: shared brief UI (16), a tag bank (18) and a related-reading bank (6).
- **Local:** per brief.

The four brief loaders merge chrome → regional → local, and the regional language follows the language the body resolved to.

**English.**
- Brief 01's English is re-locked to mirror its Spanish (WB-Q19).
- Brief 02's English is mirrored to its final Spanish (WB-Q22, WB-Q24).
- Briefs 03 and 04 keep their English, except the Gate 0 values and dead-key retirement. Their mirror pass is deferred (WB-Q25).

**Rendering.**
- Inline-bold elements take their dictionary values (WB-Q14).
- Side-panel titles follow the active language on all four briefs (WB-Q20).
- Brief 02's chart is translated through dictionary keys.
- Brief 03's load error is gone.
- Brief 04's schedule reads its assistive labels in the active language.

## 3. Results against the success criteria

| # | Criterion | Result | Evidence |
|---|---|---|---|
| 1 | Every halt released only on its own phrase | PASS | Plan, Gates 0, 1, 2, 3R and 3 were each released by their exact phrase. Gate 3R was re-presented with its final correction. Gate 3 was re-presented three times (WB-Q18/Q23 pass, WB-Q24 interventions, Brief 02 round 2) and released as it stands (WB-Q25). Gate 4: this report |
| 2 | One PR, URL printed, unmerged, auto-merge never enabled | PASS | PR #32 |
| 3 | Brief 01 fully Spanish; every EN key has ES | PASS | 137/137 keys; 0 unresolved and 0 unapplied keys in the final pass |
| 4 | Briefs 02 and 04: zero EN-only or ES-only keys | PASS | 148/148 and 124/124 |
| 5 | Brief 03 unchanged except dead keys; no ES file | Amended by WB-Q23 | Brief 03's ES is live, 145/145. Its EN changed only by dead-key retirement and the move to the regional layer |
| 6 | No 73-day window or "agents" on any rendered page | PASS | 0 matches in every dictionary and every brief's markup. Brief 04 ES reads 24 abr – 04 jul 2026, 71 días |
| 7 | Brief 04's schedule labels follow the language | PASS | ES aria reads "01 Single Page, 24 abr – 18 jun de 2026, 56 días". The visible schedule is unchanged |
| 8 | Zero console errors, 48 combinations | PASS | Final pass: 0 script errors, 0 network errors |
| 9 | Zero overflow and clipping in ES at 390/768 | PASS | 0 across all 48 combinations, not only the required ones |
| 10 | EN byte-identical except Gate 0 | Amended by WB-Q13, Q19, Q21, Q22, Q24 | Four tag renames; Brief 01 re-lock; "The 10 sec version"; Brief 02 mirror; "Measure". Briefs 03 and 04 EN unchanged beyond Gate 0 and retirement |
| 11 | Key totals before and after | PASS | §6 |
| 12 | Copy records match what shipped; no principal edit overwritten | PASS | `COPY-WB-ES-v1_0.json`, `COPY-WB-GATE-EDITS-v1_0.json` (161 edits), `COPY-WB-B01-EN-v1_2.json`, `COPY-WB-B02-EN-v1_0.json` |
| 13 | Shared files and loaders unchanged; one new site file | Amended by WB-Q8, Q14, Q20, Q23, Q24 | `i18n.js`, `paths.js`, `navchrome.js` unchanged. The brief loaders gained the regional layer, the HTML-aware sweep and language-following panel titles. New files: the six regional dictionaries and the Brief 01 and 03 ES files |
| 14 | Zero AI attribution | PASS | Author and committer on every commit: jdsaire. The PR title and body carry none |
| 15 | One commit per item | PASS, with one flag | `5ba0bc9` batches the Brief 02 WB-Q24 interventions because the panels, chart keys and copy share one markup region and one dictionary pair |
| 16 | Plan and report archived; READMEs updated; link count reported | PASS | This commit. Internal markdown links under `docs/`: 0 before, 0 after |
| 17 | Six-line relay | Owed after Gate 4 | |

**Final headless pass** (4 briefs × 390/768/1440 × dark/light × EN/ES = 48 combinations): 0 script errors, 0 network errors, 0 horizontal overflow, 0 clipped lines, 0 unresolved keys, 0 unapplied keys. Side panels: 72 of 72 opens (36 buttons × EN/ES) show their title in the active language.

## 4. Authorized deviations

- **E1–E6** (Gate 0, APP-W1-Q4, WB-Q6): seven EN hero keys across Briefs 01, 02 and 04, as released at Gate 0.
- **WB-Q8–Q11:** the three-level restructure, with the loader fence lifted for it only.
- **WB-Q12:** ES navigation "Proyectos". The designops-copy-es canon owes a Rule 18 note.
- **WB-Q13:** four tag renames, key, EN and ES.
- **WB-Q14:** the HTML-aware sweep; five truncated Brief 02 values completed.
- **WB-Q15–Q18:** the ES standard (transcreation, usted, proposals never applied over the principal's edits, full re-voice of Briefs 02 and 04).
- **WB-Q19–Q22:** the Brief 01 English re-lock, the Act 05 audit panels, "The 10 sec version", and the mirror method in place of an English skill.
- **WB-Q23:** Brief 03's Spanish goes live, superseding WB-Q1.
- **WB-Q24:** the Brief 02 interventions, and the "Measure" / "Medición" tab.
- **WB-Q25:** Gate 3 is released as it stands.

## 5. Decisions resolved autonomously

**Dictionaries**
- Keys are ordered in page order. Renames are recorded in the Gate 3R key map.
- Markup fallback text equals the EN value, checked by script after every edit.
- Brief 01 and 03 loaders return the body's resolved language, so the regional layer follows it.

**Rendering**
- Brief 02's receipt crop is set by measurement: the text rows of the image, then an object position that keeps them inside the text column at 1024, 1280, 1440 and 1920.
- Chart labels render inside translatable spans, and their assistive labels rebuild on each language change. The EN aria stayed byte-identical.

**Verification**
- The harness gained the regional layer and a filter that keeps body-dictionary requests apart.
- Brief 03's fix guards the carousel elements the page does not carry.

## 6. Open items carried forward

**Key totals, per file** (before → after, with keys added, removed and changed)

| File | Before | After | Added | Removed | Changed |
|---|---|---|---|---|---|
| `assets/i18n/en.json` | 16 | 16 | 0 | 0 | 0 |
| `assets/i18n/es.json` | 16 | 16 | 0 | 0 | 3 |
| `i18n/main.en.json` | 53 | 53 | 0 | 0 | 0 |
| `i18n/main.es.json` | 53 | 53 | 0 | 0 | 2 |
| `assets/i18n/briefs/briefs-ui.{en,es}.json` | — | 16 / 16 | 16 / 16 | 0 | — |
| `assets/i18n/briefs/tags.{en,es}.json` | — | 18 / 18 | 18 / 18 | 0 | — |
| `assets/i18n/briefs/related.{en,es}.json` | — | 6 / 6 | 6 / 6 | 0 | — |
| `work/accreditapass/…en.json` | 157 | 137 | 9 | 29 | 81 |
| `work/accreditapass/…es.json` | — | 137 | 137 | 0 | — |
| `work/yape-trust-verify-brief/…en.json` | 135 | 148 | 40 | 27 | 64 |
| `work/yape-trust-verify-brief/…es.json` | 135 | 148 | 46 | 33 | 70 |
| `work/airport/…en.json` | 161 | 145 | 0 | 16 | 3 |
| `work/airport/…es.json` | — | 145 | 145 | 0 | — |
| `work/portfolio-evolution/…en.json` | 152 | 124 | 5 | 33 | 5 |
| `work/portfolio-evolution/…es.json` | 133 | 124 | 65 | 74 | 41 |

Removals include the keys that moved to the regional layer, the orphaned ES keys and dead keys.

**Gate edits recorded** (`out/active/PRE-MAX/site-wB/COPY-WB-GATE-EDITS-v1_0.json`)

| Gate | Language | Edits |
|---|---|---|
| Gate 3R | ES | 108 (103 on disk, 2 rulings, 3 re-mirrored in EN at release) |
| Gate 3R | EN | 21 (12 on disk, 9 after the EN re-lock) |
| Gate 3 | ES | 31 (30 on disk, 1 limit restored on instruction) |
| Gate 3 | EN | 1 |

Plan, Gates 0, 1 and 2 carried no on-disk edits.

**For the next dispatches**
- **Brief 04:** the EN mirror to its re-voiced ES, and the multi-page refocus with a split schedule (site-wC).
- **Brief 03:** the EN mirror, and a rebuild scoped to the TUUA transfer project (site-wD).
- **Brief 01:** the script-built schedule stays English (WB-P2, backlog).
- **The copy skill:** designops-copy-es v4.0 lives as a file copy in site-wB; the installed plugin is v4.0 (corrected at the site-wC archive: measured 27 Sep 2026, site-wC preflight V12; this line first read "still v3.0"). A copy-edition skill is to be created from `SPEC-COPY-EDITION-v1_0.md`.

**Other open items**
- After the merge, GitHub Pages caches for 10 minutes, so a returning visitor may briefly see English fallback text.
- The backlog lines added during this run are in `out/active/PRE-MAX/PRE-MAX-BACKLOG.md`.
