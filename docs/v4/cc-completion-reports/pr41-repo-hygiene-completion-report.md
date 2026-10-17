# Completion report — PR #41 · Repository hygiene

**Branch:** `deploy/v28-pr41-repo-hygiene`, from `069c7d4` · **Pull request:** #41, manual merge only
**Plan:** [Plan-PR41-RepoHygiene.md](../cc-plans/Plan-PR41-RepoHygiene.md)

## 1. Commits

In order, on `deploy/v28-pr41-repo-hygiene`:

- `4578feb` — "docs(spec): decoration spec v1.5, as recorded after PR #40"
- `baf6be3` — "docs(rules): SR-3, a brief's read time is measured"
- `f03711d` — "docs(rules): SR-4, documentation travels with the change"
- `cbce1e8` — "docs: a pull-request template with a documentation checklist"
- `45f2df1` — "docs: the root README as the front door — what the site is, how to run it, where things live"
- `262e323` — "docs: a README in every docs/ folder and a type index of runs, specs and rules"
- `31ef8f5` — "docs: a README in every assets/ folder, saying who each file is for"
- `b67c972` — "docs: a README for each page and brief folder"
- `44e7c68` — "fix(nav): the menu's plain × is hidden; it stays as the open button's name"
- `b217ed9` — "fix(brief03): drop the timeline arrow styles nothing uses"
- `dfade70` — "fix(briefs): one shared relay stylesheet for all four briefs"
- `56d5d06` — "fix(brief04): footnotes take the shared .synthesis rules"
- `a7de102` — "fix(brief02): footnotes take the shared .synthesis rules"
- `0c93fe1` — "fix(deco): remove the retired GROW · meter code and its specimen stage"
- `ebb40fe` — "fix(brief01): Act 02's track name in English and Spanish"
- `0d69fe8` — "chore(tools): checks anyone can run with Python 3: parity, links, unused keys, key order"
- `6f81823` — "docs: a root map of every English/Spanish dictionary pair, with key counts"
- (this commit) — "docs: archive the PR #41 plan and completion report"

- **One commit per item.** The spec is alone in its commit; SR-3 and SR-4 are one commit each; each clean-up is its own commit, Brief 04's and Brief 02's `.synthesis` separately. Each clean-up commit carries the README lines it changes (SR-4). Parity and missing keys are 0 on every commit's tree.

## 2. Outcome

- **Docs (G0):** decoration spec v1.5, byte-identical to Cowork's file; SR-3 and SR-4 in the standing rules; `.github/pull_request_template.md` with a documentation checklist.
- **Structure and READMEs (G1):** no file moved. 34 READMEs: the root README rewritten as the front door, 31 new, the two `docs/v3` run indexes rebuilt; 5 accurate ones left as they were. `docs/README.md` indexes every run (plan beside report), the specs with their specimens, the standing rules and the history.
- **Clean-ups (G1b), none visible to a reader:**
  1. the menu's plain × is hidden and kept as the open menu button's name;
  2. Brief 03's unused timeline arrow styles are gone;
  3. the relay organism lives in one shared `relay.css` for all four briefs; Brief 03's inline copy and `brief-charts.css`'s phone block are gone;
  4. Briefs 04 and 02 take `.synthesis` from `brief-charts.css` instead of an inline copy;
  5. the retired GROW · meter code is gone, with the specimen's meters stage;
  6. Brief 01 Act 02's track has a keyed name: "The UX simulation, in three runs" / "La simulación UX, en tres rondas".
- **Map, tools, branches (G2):** `DICTIONARIES.md` maps the 11 dictionary pairs with their key counts; `tools/` holds four checks that run with Python 3 alone; every remote branch is listed with a proposal.

## 3. Results against the success criteria

1. **Gates:** Plan, G0, G1, G1b, G2 and G3 each halted and released only on its exact phrase. G1b's phrase came before its report; its commits waited for the tip regression to come back clean.
2. **READMEs:** 39 of 61 folders carry one; every file and subfolder in each is listed; the root README maps every top-level path. 22 folders are excluded, each for a stated reason (images only, dictionary folders, `.github/`, retired stubs).
3. **Structure:** no URL-bearing or engine path moved. All 128 served paths return 200 on the tip.
4. **Dictionaries:** from the root, `DICTIONARIES.md` reaches all 11 pairs in one click, with level, page and counts (951 keys per language).
5. **Parity check:** `python3 tools/parity.py` on a copy with no git history: `failures: 0`.
6. **Branches:** 36 remote branches besides `main` listed. 35 are merged with their PR and were named for deletion at G2; `pre-reorg-backup` (46 commits found nowhere else) is kept.
7. **Links:** 5 relative links in the repository's Markdown before; 305 after (117 files), 0 broken (`python3 tools/links.py`).
8. **Spec, rules, template:** spec v1.5 sha256 `9106b7bf…55303200` on both sides, committed alone; SR-3 and SR-4 byte-identical to the brief; this pull request's body uses the template.
9. **Site unchanged:**
   - the relays: 144 of 144 identical in computed style and pixels across 4 briefs × 320/390/768/1440 × dark/light × EN/ES × Chrome/WebKit;
   - Briefs 01, 02 and 04 full-page captures identical in all 96 cells; Main, About and Contact identical once scrolled;
   - Brief 03's desktop captures differ only as much as two captures of the untouched base do (its canvas map);
   - menu grid: 224 runs, 0 plain ×; the menu button's names unchanged in EN and ES in both engines;
   - hidden text 0, outlines 0, layout shift 0.0000, final frame = reduced motion 292/292, longest one-shot 1,453 ms;
   - 0 references to Brief 03's arrow styles, the inline `.synthesis` copies, `meter()`, the `.dash` scan and `.dcell__bar`;
   - Brief 01's track name in EN and ES, both engines, after a language swap; parity 0, orphans 0.
10. **Claims and attribution:** no README claim beyond POSITIONING v1_9 and EVIDENCE; never-list scan 0; sole author and committer jdsaire on every commit; no trailer.
11. **Push:** only after `APPROVED PR41 G3`; the branch alone, PR against main, unmerged, auto-merge off.
12. **Archive:** this plan and report with index lines in both `docs/v4` READMEs, `docs/v4/README.md` and `docs/README.md`; the harness copied to `closing/PR41-run/harness/`.

## 4. Authorized deviations

- **No moves:** the brief allowed docs/ to move; JD ruled it stays (PR41-Q7).
- **Clean-up 4 widened** to Brief 02 (PR41-Q6); **clean-up 5 widened** to the specimen's meters stage (PR41-Q3).
- **Two G2 commits were made before the G2 phrase** and undone locally the same turn; nothing was pushed, and the same trees landed after the phrase.
- **The first G1b matrix comparison** showed differences on Main, About, Brief 02 and Brief 03. Lazy images had not loaded in the baseline shots; scrolled captures and a second base matrix confirmed no change.

## 5. Decisions resolved autonomously

- `relay.css` resets the base box on `.relay.relay--sched` at every width, so the phone timeline computes as before; children rely on the base's own rules below 1024 for the three properties they don't restate.
- `.github/` gets no README, since GitHub would show it in place of the root README.
- The tools print `failures: N` and exit non-zero on a failure; `order.py` only reports unless `--strict`.
- The specimen's §06 stays as a retired record rather than renumbering §07–§12.

## 6. Keys

- `work/accreditapass/i18n/accreditapass`: added 1 (`act2_aria`); retired 0; EN value changed 0. 116 → 117 keys; 950 → 951 per language.
- The ES value came from one designops-copy-es pass on the existing EN (SY40-Q8).

## 7. Documentation touched (SR-4)

- Root `README.md`; `DICTIONARIES.md`; `tools/README.md`; 31 new folder READMEs and 2 rebuilt (`docs/v3/cc-plans`, `docs/v3/cc-completion-reports`).
- `docs/v4/STANDING-RULES.md` (SR-3, SR-4); `docs/v3/organisms/decoration-system.spec.md` (v1.5); `docs/v3/organisms/decoration-system.html` (§06 retired).
- Index lines for this run in `docs/v4/cc-plans/README.md`, `docs/v4/cc-completion-reports/README.md`, `docs/v4/README.md` and `docs/README.md`.

## 8. Open items carried forward

- **PR #42:** reorder Briefs 01, 02 and 04's dictionaries to page order after the act renumbering (PR41-Q5); PR #42 is the first pull request bound by SR-4 and the template.
- **Backlog (found, not in scope):** Contact's `<title>` still ends "— DesignOps"; `contact.js`'s header still names Formspree; two historical docs link a wrong slug (`work/yape-trust-verify`).
- **Governing files (Cowork):** KEYS-Main gains `act2_aria` (B01, 117 keys, 951 per language); POSITIONING §12 still cites decoration spec v1.3.

## 9. Relay

- **Landed:** 17 commits on `deploy/v28-pr41-repo-hygiene`, plus this archive. Spec v1.5, SR-3, SR-4, the template; a README in every folder; six invisible clean-ups; the dictionary map, tools and branch list.
- **Open:** the manual merge of PR #41; the deletion of the 35 merged branches JD named.
- **Next station:** Cowork, the post-deploy sync (`/post-deploy-sync` for PR #41).
- **Do there first:** KEYS-Main for `act2_aria`; the register for the new documentation standard.
- **Then:** PR #42 (the Solution act), the first PR under SR-4.
- **Records:** `out/active/PRE-MAX/closing/PR41-run/`.
