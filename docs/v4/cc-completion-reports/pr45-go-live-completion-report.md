# Completion report · PR #45 · Go-live

**Branch:** `deploy/v32-pr45-go-live` on `320ec66` · **Author:** jdsaire · **Merge:** manual · **Plan:** [`../cc-plans/Plan-PR45-GoLive.md`](../cc-plans/Plan-PR45-GoLive.md) (as accepted, with its two deltas; rulings made in the run below) · **PR:** https://github.com/jdsaire/designops/pull/45

## What a reader now sees

- **Every page ends on the legal row:** © 2026 Juan Diego Saire, then REPORT AN ISSUE (a bug icon, the only page), Terms of use, License, Privacy policy and Your privacy choices (the site's pill switch). Every item sits the same distance from the next. It is one row from 1024 px, stacked and left-aligned below. Below 768 each item is its own 44 px row. Hover turns a label white without moving its neighbours, on the navbar too.
- **One overlay for the site:** Terms, License, the Privacy policy and Your privacy choices open as a dark card on a blurred backdrop, with the purple top rule and the navbar's purple close. Escape and the close button shut it, and focus returns to the control that opened it. The privacy policy scrolls inside the card. "Clear my saved preferences" removes the theme, language, dictionary cache, menu hint and carousel positions, then shows the site's defaults (dark, Spanish). Its two actions use the site's call to action.
- **/report/:** the page for reporting a problem with the site. It has Contact's opening, then one form: two columns from 768 (category, page, browser, device · details, name, email) and one below. It uses the same form service as Contact, with the subject "Site issue report". The page select shows the nav's page names and icons. It isn't in the nav; the footer row, Contact's new line, the privacy policy and `security.txt` lead to it.
- **Both forms:** an unticked consent box whose line opens the privacy policy. The form isn't sent until it's ticked.
- **Domain:** the site's own links, every page's canonical and og:url, and `/.well-known/security.txt` name `https://jdsaire.com`. Every page carries a content-security policy.
- **Removed:** `/privacy/` as a page (it's an overlay on every page now).

## Commits

`957f167` legal row and overlays · `9ee864b` privacy page · `0c9dbf5` security.txt · `4d99916` Contact consent · `71b170e` report page · `72ad70c` Contact's report line · `9b98436` dictionary map · `6a74c47` footer row alignment and hover · `2b24712` report: hero and form only · `201e499` report: details first · `bd9fd32` shared/cta.css · `9a59db4` navbar hover · `c51a720` one overlay, privacy as an overlay, footer row · `9e3be94` the pill switch, even spacing · `62ba790` release dates · `1eef46c` jdsaire.com links · `a3b7908` canonical and og:url · `f7f844d` content-security policy · `2ff96a2` README and CHANGELOG · `6d73866` archive · `72a1494` consent link contrast · then this release commit.

## Results per success criterion

| Criterion | Result |
|---|---|
| 1 · Legal row | On all 8 pages; one row from 1024, stacked below; phone rows 44 px; equal spacing measured (21.3 px in a row); EN and ES equal to the lock |
| 2 · Overlays | Open from the row, trap Tab, close on Escape, return focus, `role="dialog"` + `aria-modal`; swapping from one to another keeps the first opener (Chrome + WebKit, 28 cells) |
| 3 · Clear | Removes exactly the stored values (theme, language, dictionary cache, menu hint, carousel positions) and keeps others; the page shows dark + Spanish, 0 console errors |
| 4 · Privacy and security.txt | The policy loads in EN and ES as an overlay on every page (by ruling, PR45-Q18, not a page); `security.txt` 200, text/plain, the lock's four fields, Expires 2027-10-28 |
| 5 · Consent | Neither form validates until the box is ticked; the error shows in the page's language; the form service unchanged; tests never submitted (requests to the service: 0, blocked at the network layer) |
| 5b · /report/ | EN and ES at 390, 768 and 1440 in Chrome and WebKit; out of the nav; reached from the row, Contact, the policy and security.txt (200); seven reasons, the page, browser and device selects; the 390 measures of the hook, the details label and its placeholder fit |
| 6 · Domain | 0 live designops github.io links outside the CV pair (routed to M4) and one copy record; 13 app links unchanged; canonical and og:url on every page |
| 7 · CSP | On 11 pages (8 + the 3 retired routes): 0 violations, 0 console errors, 0 failed requests over 88 cells in EN and ES, Chrome and WebKit |
| 8 · Lab check | Recorded as a preview; the accepted fix missed and was dropped by ruling (PR45-Q31); the bar is measured on jdsaire.com at the sync |
| 9 · Regression | 192 cells against 320ec66: every cell differs by the new footer; 0 unintended differences (5 above-footer cells read as capture noise); one new contrast fault fixed in `72a1494`, axe 0 on re-check |
| 10 · Checks and docs | `parity`, `links`, `orphans` 0 and `order --strict` 0 at every commit; READMEs, DICTIONARIES.md (11 pairs, 1,166 keys per language), CHANGELOG and this report match the tip |
| 11 · Authorship | Sole author jdsaire; the attribution grep reads 0; manual merge |

## Rulings in the run

- **Copy and structure:** both locks injected as written. The report page was rebuilt to the in-round structure (AIE-Q71), then trimmed at review to hero and form (PR45-Q15, Q16, Q24). JD's hero lines (PR45-Q22) and the retired keys go to the report lock's v1_1.
- **Privacy:** the policy is an overlay, not a page (PR45-Q18). Rights requests go through the report page's privacy reason (AIE-Q63, PR45-Q8).
- **Design system:** variant A is the site's one overlay (PR45-Q19, Q23). The call to action lives once in `shared/cta.css` (PR45-Q20). The pill switch is the site's one on/off control (PR45-Q27, Q29). Labels don't move on hover (PR45-Q21, Q25). The footer row is ordered, iconed and evenly spaced (PR45-Q17, Q26, Q30).
- **Head:** a split content policy (PR45-Q7). The CV pair is reported for M4, not swept (PR45-Q5).
- **Performance:** the dictionary preload (PR45-Q6) was measured as a trade, not a fix, and dropped (PR45-Q31).
- **Deferred:** navbar changes beyond the hover fix go to the next PRs (PR45-Q28).

## Deviations

- `/privacy/` was built as a page at G1, then became an overlay by ruling. Its folder and pair are gone; its 21 keys joined the global pair.
- The four briefs keep their own inline call to action. The global rule would restyle 7 to 11 of their CTAs, so the overlay carries a scoped copy until they move to `shared/cta.css`.
- One `git status` was run in the clone during G1b against the standing rule; no `index.lock` was left behind.

## Out of scope, carried

- The 14/14 performance bar on jdsaire.com, and the fix if it misses (the #45 sync; SY44-Q1).
- The navbar PR: Work's dropdown as the site's one dropdown, icons in the desktop navbar, Report an issue in the phone menu.
- `frame-ancestors`, `report-to` and `sandbox`, which a meta tag can't carry (the response header, later).
- The CV pair's github.io link (M4's re-export). og:image is relative (reported).
- The theme toggle's aria-label and title stay English in Spanish (backlog).
- Lawyer review of the legal copy before the announcement (AIE-Q66).
