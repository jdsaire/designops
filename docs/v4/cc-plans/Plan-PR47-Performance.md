# Plan · PR #47 · Performance (v1.1.1)

4 Nov 2026 · author jdsaire · base `fdbf0b1` (PR #46's merge) · branch `perf/v111-lcp-cls`

## Why

The bar of record after PR #46 read 9 of 18 cells on jdsaire.com (LCP ≤ 2.5 s, CLS ≤ 0.1, TBT ≤ 200 ms; Lighthouse 13.5.0, median of 5): desktop 8/9, phone 1/9. The word "high-performing" stays stated while this release clears the misses and the same bar is read again.

What was measured:
- On most phone runs headless Chrome shows its first frame only after the page has loaded, so the lab counts every request made before it: 192 KB of fonts, the Spanish dictionaries four requests deep, and below-the-fold images.
- First visits default to Spanish over English markup, so the text swaps after loading; both CLS misses (Brief 04 on phones, Feedback on desktop) happen only when that swap follows the first paint.

## Rulings

| # | Ruling |
|---|---|
| P1 | Fonts: pin Archivo's width axis at 100% (no style sets another width) |
| P2 | Spanish stays the first-visit default; the dictionaries and modules start from the head |
| P3 | Badges and Résumé's portrait re-encoded at display size; below-the-fold images load near the viewport |
| P4 | Stylesheets bundled only if a page still misses after the image gate |
| Swap | On a first visit the page waits for the reader's language before its first paint (at most 1.5 s) instead of reserving space per element |

## Gates

| Gate | Work |
|---|---|
| Preflight | Worktree from `fdbf0b1`; local preview with gzip; a new inspect noise floor for Chrome 156.0.8078.80 |
| G1 · Fonts | Width axis pinned: 192 → 74 KB, same glyphs and weights |
| G2 · Chain + shifts | modulepreload for every page's module graph; the reader's dictionaries preloaded from the head; the language applied before the first paint; the site icon on the four briefs |
| G3 · Images | Badges 570 → 26 KB; Résumé's portrait 499 → 50 KB; Main's posters load within 200 px of the viewport |
| G4 · Preview read | 18/18 over HTTP/2 (the live protocol); bundling the stylesheets tested and not needed |
| G5 · Regression | Full matrix against `fdbf0b1`, WebKit on every page; release prep (v1.1.1, changelog, this plan and its report) |

No copy changes. After merge, the bar of record is read again on jdsaire.com: 18 cells, two readings, median of 5.
