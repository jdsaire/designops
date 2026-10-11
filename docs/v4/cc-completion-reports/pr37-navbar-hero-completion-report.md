# Completion report — PR #37 · Navbar cue and Main hero

**Branch:** `deploy/v24-pr37-navbar-hero`, from `6c3ab85` · **Pull request:** [#37](https://github.com/jdsaire/designops/pull/37), manual merge only
**Plan:** [Plan-PR37-NavbarHero.md](../cc-plans/Plan-PR37-NavbarHero.md)

## 1. Commits

In order, on `deploy/v24-pr37-navbar-hero`:

- `e9aa9be` — "feat(nav): the phone menu button grows to a 44 px target on every page"
- `9569f1c` — "feat(nav): the open phone menu gives each group room, with a purple close"
- `a5f9ee6` — "feat(main): a first-visit cue on the phone menu button, once per browser"
- `f0dbcf5` — "refactor(main): the hero fit reads any number of words per line"
- `718c191` — "feat(main): the hero runs on one key per word, with the new statement"
- `2df93f5` — "feat(main): the hero's chosen design, with the pulsing dot back by the name"
- `4bedd0a` — "docs(organisms): decoration spec v1.3 registers the menu cue, the fill and the pulse"
- `929a0bc` — "docs: archive the PR #37 plan and completion report"
- (this commit) — "docs: record the PR #37 link in its completion report"

One commit per item. The plan's single "slot keys" item is split into keys (`718c191`) and design (`2df93f5`), so the
matrix stays clean after each.

## 2. Outcome

- **Phones:**
  - the menu button is a 44 × 44 target on all 7 pages;
  - on the first Main view in a browser, a purple ring plays around it for up to 7.2 s, and the first tap or scroll stops it for good;
  - the open menu leads with theme and language, then PAGES / PÁGINAS under a 4 px purple line, with grey lines between Home, Work and its briefs, About and Contact;
  - the close is a 44 px purple square with a white X.
- **Main's hero** runs on ten per-word keys:
  - the verbs sit white on a brand-purple block that draws once;
  - below 768, the small words shrink, EL stacks over BUEN, and EN's GOOD turns upright within the noun's height;
  - from 768, the small words stand vertical and the nouns carry a purple underline;
  - a purple square pulses beside the name again.
- **Decoration spec v1.3** registers FILL, CUE RING (X-5) and PULSE (X-6).

The invariants held:
- the i18n engine, `core/navchrome.js` and the inline early scripts are unchanged;
- the tablet and desktop bars are pixel-identical to `main`;
- no string changed outside the hero and the one group label.

## 3. Results against the success criteria

| # | Criterion | Result |
|---|---|---|
| 1 | Every gate released only on its phrase | PASS: Plan, G1, G1b (twice), G2, G3, G4 each on its phrase; re-presentations in the plan file §4 |
| 2 | First-visit cue on Main at ≤ 767 | PASS: 24/24 in WebKit and Chrome: 7,200 ms with the flag set; stops on tap and on scroll; still after a reload or About; none under reduced motion or at 768/1024/1440 |
| 3 | 44 × 44 target on 7 pages; keyboard and screen-reader reachable; open menu behaviour, tablet and desktop bars as before | PASS: 44 × 44 on 7/7 in both engines; keyboard open and close 14/14; bars at 768/1024/1440 pixel-identical in 42/42 cells |
| 4 | Hero renders JD's statement byte for byte at 320–1440, both themes, EN and ES, first screen in view | PASS: 20/20 first-screen frames; the heading reads the shown statement in 16/16 checks |
| 5 | Same key set in EN and ES; empty words render nothing; parity 0; fallbacks = EN; retired keys gone | PASS: 10 keys each; 0 empty words with a box; word gaps at most one space; parity 0, fallbacks 0 |
| 6 | Reduced motion = final frame; no text delayed | PASS: 74/74 decorated components identical to reduced motion at 390 and 1440; 0 hidden-text samples on Main |
| 7 | Decoration spec v1.3 committed | PASS: `4bedd0a` (.md + live specimen) |
| 8 | Matrix 84/84; reload at baseline; no new contrast failure; repeat-visit shift 0 | PASS: matrix 84/84 with zeros before every commit; reload 264/264 at 0 px after one re-run; repeat-visit shift 0 on 8/8 pages |
| 9 | Zero AI attribution; sole author jdsaire | PASS: 7/7 commits authored and committed by jdsaire; 0 trailers |
| 10 | Pushed after G5; PR open, unmerged | PASS: pushed after `APPROVED PR37 G5`; https://github.com/jdsaire/designops/pull/37 open against main, auto-merge off |
| 11 | Plan and report archived with index lines; links resolve | PASS: docs/v4 internal links 1 before, 2 after, all resolving |
| 12 | Deviations listed; the relay ends the report | §4, §8 |

**Contrast:** the site-wide check reports 292 failing cells against 284 on `main`. The 8 new cells are the hero verbs in
the light theme. The checker reads only the element's own background and misses the purple block drawn by a
pseudo-element. Rendered pixels show white text on #A100FF (5.30:1). So there is no real new failure.

**First-visit layout shift (pre-existing, backlog):** About 0.0252, Contact 0.0033, Briefs 01–03 ≤ 0.0036, as on `main`.
Brief 04 drops from 0.0371 to 0.

## 4. Authorized deviations

- Plan Mode blocked task 0's writes and the baselines before the plan, so both ran after the plan.
- The open menu was out of scope; PR37-Q11 widened the run (gate G1b), amending the brief's §10 and the prompt's rule.
- SY35-Q18's 5 s cue cap was replaced by 7.2 s, registered as X-5 (PR37-Q10, Q14).
- SY35-Q19's line keys became ten per-word keys (PR37-Q18).
- The copy fence was lifted for one global key, `nav_group_sitemap` (PR37-Q26).
- The new exceptions take ids X-5 and X-6, because X-3 and X-4 stay struck in the register.
- The new branch's upstream (`origin/main`, set by `git switch -c`) was removed so a bare push cannot target `main`.

## 5. Decisions resolved autonomously

- The cue flag `jds-navcue` is set when the cue starts, so it never replays even if the reader leaves without tapping.
- Without localStorage, the cue falls back to sessionStorage, and with no storage at all it does not play.
- The pulsing square is a pseudo-element of the name, so the i18n swap never removes it and it is not part of the name's text.
- Line 1's phone-only pair is `display: none` from 768, so screen readers read what is shown.

## 6. Retired keys

`hero_h1_l1_pre`, `hero_h1_l1_em`, `hero_h1_l1_post`, `hero_h1_l2_pre`, `hero_h1_l2_w3`, `hero_h1_l2_post` — removed from both
dictionaries, replaced by `hero_d1_w1…w5` and `hero_d2_w1…w5`.

## 7. Open items carried forward

- **KEYS v1_2 (Cowork):**
  - the ten hero keys;
  - the six retired keys;
  - `nav_group_sitemap` = PAGES / PÁGINAS.
- **POSITIONING v1_7 (Cowork):**
  - §1.1: the statement in its two widths per language;
  - §12: the cue (7.2 s, X-5) and the square beside the name (X-6).
- **Backlog:**
  - the menu button's `aria-label` "Open menu" is English-only;
  - Spanish first-visit layout shift (pre-existing);
  - the briefs' favicon 404 (pre-existing).

## 8. Relay

1. PR #37 built: phone menu button 44 px with a first-visit cue on Main, the open menu redesigned, Main's hero on ten per-word keys with JD's statement.
2. Branch `deploy/v24-pr37-navbar-hero`, 9 commits from `6c3ab85`, sole author jdsaire; PR https://github.com/jdsaire/designops/pull/37 open, manual merge only.
3. Regression on the tip: matrix 84/84, parity 0, reload 264/264, floor clean, no real new contrast failure.
4. Decoration spec v1.3 registers FILL, CUE RING (X-5) and PULSE (X-6).
5. Owed to Cowork: KEYS v1_2 and POSITIONING v1_7 (§1.1, §12).
6. Next: JD merges PR #37 by hand; Cowork syncs the governing files.
