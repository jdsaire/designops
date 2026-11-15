# Plan · v1.3.1 · Each page shows its own card when shared

## Context
LinkedIn doesn't render the SVG that all nine pages declare as og:image today (`https://jdsaire.com/assets/img/bridge1_onboarding.svg`, already absolute), so shared links show no card. T6 produced nine approved 1200 × 627 PNGs (GR-Q191). This PR ships them, points each page at its own card, adds og:title / og:description to the four briefs from copy they already ship, and closes PR #50's "pending merge" rows. Base `origin/main` 8baa848 (re-fetched in plan mode, unchanged).

## Rulings (through /ask, 15 Nov 2026), logged first at execution as four PRE-MAX-CHANGELOG lines
- **OG-Q1 · A:** release **v1.3.1**, navbar badge bumped `v1.3.0 → v1.3.1` on all nine pages (precedent). The badge is the only expected visible difference; brief criterion 6 reads "no visible difference except the badge".
- **OG-Q2 · B:** PNGs ship **byte-identical** (cp + full sha256); no re-encode.
- **OG-Q3 · C:** briefs' og:title = the full `<title>` verbatim; the card heading is its prefix and counts as a match.
- **OG-Q4 · D:** keep `bridge1_onboarding.svg`; reword `assets/img/README.md:13` (it's the source artwork of `resume-portrait.webp`, no longer shown on any page).

## Setup
- `git worktree add -b site/og-image ../designops-og origin/main` from `repos/designops` (GIT_OPTIONAL_LOCKS=0, no `git status`). Identity is the repo's own (`Juan Diego S.`, jdsaire noreply). No trailers.
- Records: `out/active/PRE-MAX/closing/PR-og-run/` (gate digests, PR body, CW trigger).
- Servers (ports checked free first): tip `python3 -m http.server 8000` in `repos/designops-og`; base 8baa848 worktree on `8010` at G2.

## Commits (five checks after each: `tools/parity.py`, `links.py`, `orphans.py`, `imagery.py`, `order.py --strict`)
1. `site(og): nine link-preview cards` — `assets/img/og/og-01-main.png … og-09-feedback.png` (cp from `out/active/JDSAIRE-LAB/brandkit/og/`, `_contact-sheet.png` excluded); new `assets/img/og/README.md` (what they are, 1200 × 627 PNG for LinkedIn, approved GR-Q191, never re-encoded without a ruling, which page uses each); `assets/img/README.md` gains an `og/` row and line 13 reworded (OG-Q4). imagery.py doesn't scan `og/`, so no manifest entry.
2. `site(og): each page declares its own card` — on all nine `index.html`: og:image → `https://jdsaire.com/assets/img/og/og-0N-*.png`, plus `og:image:width` 1200 and `og:image:height` 627 directly after it, matching each file's indent (two spaces on Main/About/Résumé/Contact/Feedback, none on the briefs).
3. `site(og): briefs carry og:title and og:description` — the four briefs: two lines after og:url, values copied byte for byte from the same file's `<title>` and meta description (script extracts and compares; any mismatch or missing description = stop with the GAP).
4. `release: v1.3.1` — `span.nav__version` v1.3.0 → v1.3.1 on nine pages; CHANGELOG.md:56 and README.md:46 #50 rows "pending merge" → "15 Nov 2026"; new top row in CHANGELOG (end of table) and README "Latest changes" (top): `v1.3.1 | pending merge | <reader line> | plan · report`. Reader line drafted from the brief's §1, e.g. "A link to any page shared on LinkedIn shows that page's own card" — [GAP: JD confirms or replaces at G1]; docs only, not site copy.
5. At G2: `docs: v1.3.1 plan and report` — `docs/v4/cc-plans/Plan-v131-OgImage.md` (this plan as accepted) and `docs/v4/cc-completion-reports/v131-og-image-completion-report.md`, rows in both READMEs (`v1.3.1 · Each page shows its own card when shared`). Then `docs: record PR number` after `gh pr create`.

Untouched: CSP metas, inline scripts and styles (meta tags don't change their hashes), titles, descriptions, canonicals, og:url, existing og:title/description/type/locale on the five, bodies, `paths.js`, `navchrome.js`, `i18n.js`, every dictionary, DICTIONARIES.md. SR-3 not applicable.

## G1 (budget 30 min) — STOP for "APPROVED OGIMAGE G1"
- `inspect --mode gate --repo repos/designops-og --tip http://127.0.0.1:8000/ --pages <nine> --gate G1 --effort Medium --out PR-og-run/records/G1`.
- Head diff per page = only the allowed lines; sha256 of the nine repo PNGs = lane hashes; og:title/og:description equality on four briefs; attribution 0 on every commit; five checks 0.
- Preview browser at 127.0.0.1:8000: each page's head tags beside its card (card opened at `/assets/img/og/og-0N-*.png`), each page at 1440 and 390 EN looking as before except the badge reading v1.3.1. No dictionary touched.
- Report per /cc-gate-report; effort stays Medium (GR-Q192).

## G2 (budget 30 min) — STOP for "APPROVED OGIMAGE G2"
- Regression: `inspect --mode regression --base http://127.0.0.1:8010/ --tip http://127.0.0.1:8000/ --base-rev 8baa848 --pages <nine> --full --webkit none --mask "canvas,.ticker__lanes"`, floor `8ba81f4_chrome-157.0.8103.78_webkit-2359` reused (108 Chrome cells). Expected: only the badge region differs. Pairs only for differing cells; one DIGEST.md. A failure → delta fix + re-run of the affected cells only.
- Five checks, last lines reported; SR-4 file list in the report.
- Commit plan + report; PR body from `.github/pull_request_template.md`, checklist filled, saved to `PR-og-run/PR-v131-BODY.md`; `git branch --unset-upstream` if set; push; `gh pr create` (auto-merge off); record the PR number; push; print the URL.

## Close-out
`PR-og-run/TRIGGER-CW-POST-DEPLOY-SYNC-v131.md`, plus the relay and the same paste block in chat. The sync must: curl `-sI` the nine `https://jdsaire.com/assets/img/og/og-0N-*.png` → 200 `image/png`; bump BRIEF-CC-v120-DesignSystem-v1_1 to drop og:image and to note the badge now reads v1.3.1; carry OG-Q1…Q4; then JD's gate C in LinkedIn Post Inspector. Stop own servers, remove worktrees after push.

## Verification (end to end)
- `grep -c 'og:image" content="https://jdsaire.com/assets/img/og/'` = 1 per page; `og:image:width" content="1200"` and `height" content="627"` = 1 per page; no `.svg` in any og:image.
- `shasum -a 256 assets/img/og/*.png` = the nine recorded hashes; `sips` 1200 × 627.
- Five checks 0; inspect gate 0 exceptions; regression diffs confined to `.nav__version`.
- `git log --format='%an %ae%n%b' 8baa848..` shows jdsaire only and no trailer.
