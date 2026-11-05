# Completion report · PR #48 · v1.1.2 · The offer reads reliable

**Branch:** `copy/v112-reliable` on `1b89507` · **Author:** jdsaire · **Pull request:** https://github.com/jdsaire/designops/pull/48 · **Merge:** manual · **Plan:** [`../cc-plans/Plan-v112-Reliable.md`](../cc-plans/Plan-v112-Reliable.md)

## What a reader now sees

- **Main:** the line under the name reads "I build reliable websites and apps, translating business challenges into tested products using advanced AI." / "Creo webs y apps confiables, traduciendo retos de negocio en productos validados con IA avanzada." In English it takes two lines from 768 instead of three; the hero keeps its height.
- **Main's description and link preview:** "reliable" instead of "high-performing".
- **This repository's README:** the same offer sentence.
- **The release, v1.1.2,** beside the wordmark from 1024.

## Why

The performance bar of record (Lighthouse lab, nine pages × phone + desktop) read 9 of 18 cells twice, after v1.1.0 and after v1.1.1, so the offer drops "high-performing". "Reliable" rests on the test suites and release verification on record. No performance word returns to the copy without a new measurement source.

## Commits

`464d4d7` Main offer · `7b1c65d` README offer · `8a608cd` release label and changelog · plus this report's commit (`a1c3b74`) and the PR number commit.

## Results per gate

| Gate | Result |
|---|---|
| Plan | 6 shipped lines carried the old word, none outside the approved strings; hero line count measured at 390 / 768 / 1440 in both languages (English 3 → 2 lines from 768) |
| G1 · Swap | 0 shipped hits for "high-performing" or "de alto rendimiento"; label v1.1.2 on 9/9 pages; inspector gate mode 0 on every count; 4:18 of a 30-minute budget |
| G2 · Regression | 216 cells (9 pages × 12 × Chrome + WebKit) against `1b89507`, floor key Chrome 156.0.8078.80: 128 identical, 88 differ. 87 are the label at 1440 (8 per page) and Main's offer line, the English reflow staying inside the hero; 1 is About 768 · light · EN · WebKit, 209 px in the timeline's logo column, accepted as floor noise (JD). Console, links, parity, order, overflow, axe, failed requests and attribution 0. Matrix 19:46 |
| Checks | `parity`, `links`, `orphans`, `imagery` `failures: 0` and `order --strict` 0 after every commit |
| Authorship | Sole author jdsaire |

## Documentation touched

`CHANGELOG.md` and `README.md` (#47 dated 4 Nov 2026, v1.1.2 row), `docs/v4/cc-plans/README.md`, `docs/v4/cc-completion-reports/README.md` (v1.1.2 row, and #47's row, which was missing). `DICTIONARIES.md` unchanged: no key added. Read time (SR-3) doesn't apply: no brief's copy changed.

## Limits

- LinkedIn's headline and About line change by hand, outside this repository.
- Earlier plans and reports keep the word as it stood when they were written.
