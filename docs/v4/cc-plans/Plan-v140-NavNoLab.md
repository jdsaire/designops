# Plan · PR #53 · v1.4.0 · nav without Lab

Prompt: `out/active/PRE-MAX/closing/P-CC-PR53-NavNoLab-v1_0.xml` (authoritative). Brief: `BRIEF-CC-PR53-NavNoLab-v1_0.md`. Opus 5.5 Medium. Single agent, no subagents (token cost).

## Context
The Lab dropdown holds a single item. A menu with one entry and a "New" label costs an extra tap and hides the newest page. This PR:
- puts Design System at the top level;
- relabels About as History (label only);
- re-rules the icon set;
- gives Main's hero a direct "See résumé" CTA for the applications round (GR-Q173).

The footer's Lab column stays as the place future releases land (PR53-Q3).

## Rulings (Plan /ask, 16 Nov 2026)
These are written to PRE-MAX-CHANGELOG as the first act after acceptance (Plan Mode allows no other edits):
- **PR53-Q11 · K:** the key is `home_hero_cta`, as JD named it. It goes between `hero_sub` and `hero_scroll_cue`.
- **PR53-Q12 · P:** palette glyph A: an artist's palette with a thumb notch and three dots. JD rules on the final drawing at G1.
- **PR53-Q13 · D:** in the 768–1023 band only, nav links get font 0.7rem, padding 0.5rem 0.25rem and letter-spacing 0.08em. Measured: four links push the wordmark to 87 px in EN and 123 px in ES at 768, against the 168 px it needs. With the fix it gets 174/174 in EN. At 1024 and wider it fits unchanged (229/229).
- **PR53-Q14 · F:** at G4, about/ WebKit cells up to 898 px and CLS deltas up to 0.02 count as floor noise. Anything outside the expected list is still a finding.

## Measured facts the plan rests on
(From the prompt's verified state, plus this Plan.)

**Header markup**
- The header and overlay are copied into each page. Ten pages, five variants. They differ only in path prefixes and a static `aria-current` (desktop link on about/ and resume/; Contact on contact/).
- `navchrome.js:43–53` marks the overlay's current row at run time.
- The resume page's overlay About row carries a stray static `aria-current="page"`. It's out of scope: one backlog line.

**Dictionaries**
- Global pair: 99 → 97 (`nav_lab` and `nav_new` retire). `nav_evolution` EN becomes "History"; ES stays "Historia".
- Main pair: 49 → 50.
- Total: 1,238 → 1,237 per language.

**Sizing run**
- 240 cells took 19 min 32 s, so the G4 matrix runs in the background shell.

## G1 · Nav and icons (commits, one per item)
In a worktree `repos/designops-pr53` on branch `site/nav-no-lab`, cut from b6eba12 and served on :8000.

1. **Nav markup on all ten pages.** Pattern: `index.html:107–118` and `:167–178`. Variants: about, contact, resume, design-system, `work/*/index.html`.
   - Desktop: delete `.nav__dropdown` holding `#labTrigger`/`#labMenu`. Reorder to Briefs · Résumé · History · Design System, with Design System as `<a class="nav__link" data-nav-page="design-system/" data-i18n="nav_design_system">`.
   - Static `aria-current="page"` on that link in `design-system/index.html`, matching about/ and resume/.
   - Overlay: delete the `#overlayLabTrigger` group. Order becomes Briefs group · Résumé · History (flask glyph) · Design System (glyph A) · Contact.
   - Each page keeps its own prefixes and static attributes.
2. **`assets/js/core/navchrome.js:274–279`.** Remove `overlayLabTrigger`/`overlayLabMenu`/`overlayLabDisc`. Work disclosure becomes `wireDisclosure(overlayWorkTrigger, overlayWorkMenu, null, false)`, after checking that `wireDisclosure` accepts a null callback. Update the comment at :207.
3. **Retired styling.**
   - `.nav__new` block in `assets/css/shared/dropdown.css:33–47`.
   - `.nav__overlay-subitem[data-nav-state="new"]` in `assets/css/shared/nav.css:244`.
   - The D rule added to `nav.css`'s existing `@media (min-width:768px) and (max-width:1023px)` block (:174–177).
4. **`/design-system` Icons section** (`design-system/index.html:230`).
   - Drop the layers and person glyphs and the `nav_lab` label.
   - Flask labelled `nav_evolution`; glyph A labelled `nav_design_system`.
   - The pulsing-label atom (:238) stays.
5. **Global dictionaries** (`assets/i18n/en.json`, `es.json`). Remove `nav_lab` and `nav_new`; set `nav_evolution` EN to "History".
- **CSP:** inline scripts are untouched, so no hash is expected to change. Re-checked by grep per page (SR-2).
- **Checks:**
  - inspect gate mode on the ten pages: Chrome 390/1440 dark, EN+ES, `--floor` with the key file, `--digest-always`.
  - Console 0, overflow 0.
  - parity, links, orphans, imagery 0; order --strict 0.
  - Grep 0 for the person path, the layers path, `nav_lab`, `nav_new`, `nav__new`.
  - Wordmark fit (scrollWidth = clientWidth) at 768, 900 and 1024, EN+ES.
- **Review at :8000:**
  - Bar at 1440, 1024 and 768 on /, about/, design-system/ and one brief.
  - Overlay at 390.
  - Footer Lab column unchanged, footer About reading History.
  - Feedback picker About option (History + flask).
  - `/design-system#ds-icons`.
  - Both themes, EN and ES.
- **STOP:** APPROVED PR53 G1.

## G2 · Hero CTA and keys
1. **CTA markup** in `index.html` after `p.hero__sub` (:243): `<a class="cta" href="resume/" data-nav-page="resume/"><span class="cta__label" data-i18n="home_hero_cta">See résumé</span><span class="cta__icon" aria-hidden="true"><svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg></span></a>`.
   - This reuses the atom in `assets/css/shared/cta.css`.
   - Any spacing goes in `assets/css/pages/home/hero.css` only.
2. **Keys** in `i18n/main.en.json` and `main.es.json`:
   - `home_hero_cta` "See résumé" / "Ver CV", inserted at index 13.
   - `home_about_eyebrow` "HISTORY" / "HISTORIA".
- **Checks:**
  - inspect gate mode on Main; console, overflow, parity, orphans 0; order --strict 0.
  - Hero fit: the CTA and `.hero__cue` bounding boxes inside the viewport height at 390, 768 and 1440 × EN/ES × dark/light, reported per cell.
- **Review:**
  - The hero in all those cells, plus the CTA's hover and focus states.
  - About eyebrow.
  - "See the full journey" still pointing to about/.
- **STOP:** APPROVED PR53 G2.

## G3 · Docs
- `DICTIONARIES.md`: global 97, Main 50, total 1,237, re-measured.
- `assets/css/shared/README.md:7–8`: nav and dropdown rows no longer mention the Lab menu.
- `design-system/README.md:3`: "linked from the navigation bar, the phone menu and the footer".
- `README.md:24`, if it names the Lab menu. History rows #46 and #52 stay as record.
- `docs/v3/IA-CONVENTION.md`: only if a line names the Lab menu or the retired keys (none found).
- Decoration spec: untouched. It matches v1.8 byte for byte, with no nav line.
- Badge `v1.3.1` → `v1.4.0` on all ten pages.
- `README.md:46` and `CHANGELOG.md:58`: #52 dated 16 Nov 2026. Add the v1.4.0 row (README newest-first, CHANGELOG oldest-first) with links to the plan and report paths below.
- KEYS proposal: `closing/PR53-run/KEYS-PROPOSAL-PR53-v1_0.md`, outside the repo.
- **Checks:** links 0, parity 0, badge ×10.
- **STOP:** APPROVED PR53 G3.

## G4 · Regression and release
- **Matrix:** base b6eba12 (the scratchpad export, on :8020). One `inspect --mode regression` run in the background shell: ten pages, full grid, Chrome + WebKit, `--floor` with the key file, `--mask "canvas,.ticker__lanes"`. Output goes to `closing/PR53-run/records/`, read with ruling F.
- **Expected differences:**
  - the nav row on every page;
  - Main's hero and About eyebrow;
  - `/design-system` Icons;
  - the badge;
  - the footer's About label in EN;
  - tablet nav sizing at 768.
- **Close-gate checks:** five tools, each last line reported. SR-3 read time not applicable (no brief text changed). Attribution grep 0 beyond SR-5's text.
- **Archive:** commit `docs/v4/cc-plans/Plan-v140-NavNoLab.md` (this plan as accepted) and `docs/v4/cc-completion-reports/v140-nav-no-lab-completion-report.md`, plus their README rows.
- **PR:** body from `.github/pull_request_template.md` with the checklist filled in. `git branch --unset-upstream` if set, push, `gh pr create` with auto-merge off. Then the "docs: record PR number" commit, push again, and print the PR URL.
- **STOP:** APPROVED PR53 G4.
- **Then:** `closing/PR53-run/TRIGGER-CW-POST-DEPLOY-SYNC-PR53.md`, the six-line relay and the Cowork paste block in chat.

## Verification (end to end)
- Each gate: inspect gate digest, the five repo checks, and review at http://127.0.0.1:8000/ in the preview browser.
- Visual changes are also checked in WebKit, since JD reviews in Safari.
- G4: one 240-cell regression with differences confined to the list above.
- The PR stays unmerged with auto-merge off. Sole author jdsaire; no attribution in commits or the PR body.

## Budgets
Each gate gets 30 min. Any single check past 10 min stops and reports. The G4 matrix is expected to take about 20 min in the background.
