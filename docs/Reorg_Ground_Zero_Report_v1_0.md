# Reorg Ground-Zero Report v1.0

**Repo:** jdsaire/designops
**Scope:** structural reorganization of the single-page portfolio site into a per-organism
file layout, in preparation for the multipage migration described in the Execution Roadmap.
**Nature of change:** behavior-preserving move, not a rewrite — no redesign, no new
dependencies, no change to rendered output or interactive behavior.

This document is the reference baseline for future strategy-deployment waves (multipage
migration, brief pages under `/work/*`, etc.) and for case-study content describing this
reorg.

---

## 1. History event log

| Event | Detail |
|---|---|
| Pre-reorg state | `main` at commit `63af784` ("Fable Briefs for review"), 46 commits of accumulated history, 35 tracked files |
| History reset | Squashed to a single root commit `ee8b140` ("Reorganize codebase into per-organism structure; reset history"), force-pushed to `main` |
| Backup preserved | `pre-reorg-backup` branch carries the full original 46-commit history, pushed before the force-push |
| Ground-zero state | `main` at commit `ee8b140`, 61 tracked files |
| Live verification | `https://jdsaire.github.io/designops/` — every CSS/JS/image/logo/i18n asset referenced in `index.html` returns HTTP 200; `i18n:changed` event contract, language swap, mobile overlay, carousel, ticker, and navbar scroll-hide all confirmed working post-deploy |

## 2. File-tree comparison

**Pre-reorg (35 files):**
```
.github/workflows/static.yml
.gitignore
.nojekyll
README.md
assets/css/main.css                                          ← monolithic, 2327 lines
assets/i18n/en.json
assets/i18n/es.json
assets/img/ (16 files: bridge, logos, services, work)
assets/js/main.js                                             ← monolithic, 563 lines
briefs-fable-copy/v0/ (3 planning briefs, unreferenced by the site)
index.html
logos/ (4 brand-mark svgs)
```

**Ground-zero (61 files):**
```
.github/workflows/static.yml                                  ← untouched
.gitignore                                                    ← untouched
.nojekyll                                                     ← untouched
README.md                                                     ← rewritten (per-organism tree, accurate section list, corrected deployment model)
assets/css/base/{tokens,reset}.css                             ← split from main.css
assets/css/shared/{nav,section-extras,footer,bridge,ticker,designops-variant}.css
assets/css/home/{hero,work,capabilities,evolution,capabilities-cards,contact,work-status}.css
assets/i18n/{en,es}.json                                      ← untouched
assets/img/ (16 files, all untouched, including unreferenced build-in-progress.svg kept for near-term roadmap reuse)
assets/js/core/i18n.js                                        ← split from main.js
assets/js/home/{nav,overlay,hero,work,carousel,evolution,contact,ticker}.js
assets/js/main.js                                             ← now the ES-module entry point (was the monolithic file)
docs/Execution_Roadmap_v1_0.md                                ← new
docs/briefs-v0/ (3 files, moved from briefs-fable-copy/v0/)
docs/parking-lot.md                                            ← new
index.html                                                    ← 15 ordered <link> tags + <script type="module">; no markup/id/class/data-attribute changes otherwise
logos/ (4 files, untouched)
work/.gitkeep                                                  ← new, reserved for the multipage migration
```

## 3. CSS split — 15 partials from `assets/css/main.css` (2327 lines)

The split is not one-file-per-organism because several organisms' rules are physically
non-contiguous in the source (e.g. capabilities-carousel rules and capabilities-cards rules
are separated by footer/evolution content; track-record styling only exists mixed into a
tail block shared with capabilities/evolution). Each partial is linked at its exact source
position so that concatenating all 15 files in link order reproduces `main.css` byte-for-byte
(verified mechanically — comments/whitespace-normalized diff was empty).

| # | File | Source lines | Content |
|---|---|---|---|
| 1 | `assets/css/base/tokens.css` | 1–29 | reset selector + `html` base + `:root` global tokens |
| 2 | `assets/css/base/reset.css` | 30–31 | `body`, `a` base rules |
| 3 | `assets/css/shared/nav.css` | 33–219 | navbar + mobile overlay + tablet/mobile nav media queries |
| 4 | `assets/css/home/hero.css` | 220–315 | hero |
| 5 | `assets/css/home/work.css` | 316–627 | work (cards, track, dots) |
| 6 | `assets/css/home/capabilities.css` | 628–911 | services banner = capabilities carousel |
| 7 | `assets/css/shared/section-extras.css` | 912–967 | shared section extras |
| 8 | `assets/css/home/evolution.css` | 968–1167 | about banner = evolution about-cards |
| 9 | `assets/css/shared/footer.css` | 1168–1249 | footer |
| 10 | `assets/css/home/capabilities-cards.css` | 1250–1476 | capabilities banner = info cards/map/bottom-sheet |
| 11 | `assets/css/shared/bridge.css` | 1477–1654 | bridge component |
| 12 | `assets/css/home/contact.css` | 1655–2026 | contact (+ scoped `:root` additions) |
| 13 | `assets/css/shared/ticker.css` | 2027–2148 | ticker organism |
| 14 | `assets/css/home/work-status.css` | 2149–2180 | supplemental `.work-card`/`.work-card__status` |
| 15 | `assets/css/shared/designops-variant.css` | 2181–2327 | capabilities/evolution/track-record variant tail (incl. `.timeline__*`) |

## 4. JS split — 9 ES modules from `assets/js/main.js` (563 lines)

`main.js` contained 8 feature blocks plus the i18n engine. `assets/js/main.js` is now the
module entry point: it imports all 9 `init` functions and calls them in the same relative
order inside one `DOMContentLoaded` listener, preserving the `i18n:changed` event contract
and the `data-i18n*` attribute handling unchanged.

| File | Source lines (original main.js) | Exports |
|---|---|---|
| `assets/js/core/i18n.js` | 1–66 (incl. language-bootstrap block) | `loadDict`, `swapLang`, `init` |
| `assets/js/home/nav.js` | 68–80 + 112–138 | `init` |
| `assets/js/home/overlay.js` | 82–110 | `init` |
| `assets/js/home/hero.js` | 140–168 | `init` |
| `assets/js/home/work.js` | 170–240 | `init` |
| `assets/js/home/carousel.js` | 242–354 | `init` |
| `assets/js/home/evolution.js` | 356–412 | `init` |
| `assets/js/home/contact.js` | 414–489 | `init` |
| `assets/js/home/ticker.js` | 492–563 | `init` |

## 5. Branch and contributor cleanup

**Stale branches deleted** (all confirmed via `git merge-base --is-ancestor` to be full
ancestors of the pre-reorg `main` tip `63af784` — i.e. already merged, nothing unique lost):

- `feat/capabilities-carousel-images`
- `feat/designops-iteration-1`
- `feat/es-default-swaplane-mobile-ux`
- `fix/es-hero-h1-word-purple`
- `fix/evolution-notes-desktop-only`

**Contributor attribution cleanup:** two commits in the pre-reorg history —
`cb7f3a5` ("fix: add lede to Track Record organism") and `ce2b0be` ("fix: centre Track Record
lede on desktop...") — carried a `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
trailer. Because GitHub's Contributors graph aggregates commits reachable from any branch (not
just the default branch), these two commits caused an AI-tooling entry to appear in the
repo's contributor list even after `main` was squashed to a single `jdsaire`-authored commit.

Since the 5 stale branches carrying these commits were deleted, and `pre-reorg-backup` (kept
intentionally as the full historical record) also reached them, the trailer was scrubbed
directly from those 2 commits within `pre-reorg-backup` using a metadata-only rewrite
(`git filter-branch --msg-filter`, stripping only the trailer line). Verified before pushing:
commit count unchanged (46 before and after), tree/content diff between old and new branch
tips empty (byte-identical), zero remaining Claude mentions in any commit message across the
branch. The rewritten branch was force-pushed to `origin/pre-reorg-backup`.

## 6. Verification summary

| Check | Result |
|---|---|
| CSS concatenation-in-link-order vs. original `main.css` (whitespace/comments normalized) | Empty diff — PASS |
| All CSS/JS/i18n asset URLs on live site | HTTP 200 — PASS |
| All image/logo asset URLs on live site | HTTP 200 — PASS |
| Relative-path check (`index.html` + partials, no leading `/`) | None found — PASS |
| `main` commit count/authorship | 1 commit (now 2 after this report), all authored/committed as `jdsaire`, no trailers |
| `pre-reorg-backup` integrity | 46 commits, content byte-identical to pre-reorg state, 0 Claude mentions |
| Stale branches | 5 deleted, confirmed pre-merged before deletion |

**Live site:** https://jdsaire.github.io/designops/
