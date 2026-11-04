# Completion report · PR #47 · Performance (v1.1.1)

**Branch:** `perf/v111-lcp-cls` on `fdbf0b1` · **Author:** jdsaire · **Pull request:** https://github.com/jdsaire/designops/pull/47 · **Merge:** manual · **Plan:** [`../cc-plans/Plan-PR47-Performance.md`](../cc-plans/Plan-PR47-Performance.md)

## What a reader now sees

- **Every page:** arrives in the reader's language from its first frame; on a first visit in Spanish the English markup never shows, and nothing moves as the language settles.
- **About:** the credential badges look the same and weigh 26 KB in all instead of 570 KB.
- **Résumé:** the same portrait, 50 KB instead of 499 KB.
- **Main:** the work posters load as the reader scrolls near them.
- **The release, v1.1.1,** beside the wordmark from 1024.

## Commits

`ef86d08` fonts · `32b06a5` head preloads and brief icons · `573594a` language before first paint · `7dfe61c` badges · `9ce6166` Résumé portrait · `379dd7d` deferral margin · plus this report's release commit.

## Results per gate

| Gate | Result |
|---|---|
| Preflight | Preview baseline (local, gzip, HTTP/1.1): phone LCP 2.63–4.96 s; inspect floor for Chrome 156.0.8078.80, 216 cells, 2 WebKit cells in About's logo column accepted |
| G1 · Fonts | 192 → 74 KB; 137 matrix cells differ by 1–22 px of edge antialiasing, layout and page heights identical; phone LCP −0.30 to −1.42 s in the preview |
| G2 · Chain + shifts | 0 duplicate requests and 0 console or CSP messages on 9 pages in ES and EN; shifts traced to 0 on Brief 04 phone (0.135), Contact phone (0.107) and Feedback desktop (0.117); the paint hold costs 0.15–0.3 s of phone LCP in the preview |
| G3 · Images | Résumé phone LCP 4.66 → 2.41 s in the preview; badges and portrait checked side by side at 2× |
| G4 · Preview read | Over HTTP/2: 18/18, phone LCP 1.50–1.68 s, desktop 0.32–0.38 s, CLS 0, TBT ≤ 2 ms; one bundled stylesheet gave no gain (About 1.59 → 1.81 s) |
| G5 · Regression | 216 cells (9 pages × 12 × Chrome + WebKit) against `fdbf0b1`, floor key Chrome 156.0.8078.80: 6 identical, 210 differ, every one explained: the release label at 1440 (v1.1.0 → v1.1.1), About's badge column, Résumé's portrait in WebKit (re-encoded, same picture) and 1–22 px of type antialiasing from the pinned fonts. Console, links, parity, order, overflow, axe, failed requests and attribution 0; CLS at or below base on every page |
| Checks | `parity`, `links`, `orphans`, `imagery` `failures: 0` and `order --strict` 0 at every gate; inspector counts 0 at every gate |
| Authorship | Sole author jdsaire |

## Limits

- Preview numbers are lab runs on one Mac against a local server; the bar of record is the post-merge read on jdsaire.com.
- jdsaire.com's HTML is not cached at the edge, so its time to first byte (375–742 ms measured after PR #46) adds to every live cell.
