# Plan: S5 — Trust-Verify Migration

Two-phase, two-repo run. Both phases' approved plans are recorded here, in the order they were
approved.

## Context

`work/yape-trust-verify/` was a self-contained Vite + React 19 + TypeScript SPA living inside
`jdsaire/designops`, front-end only, with zero language toggle and zero per-step routing. This run
extracts it into its own repository, `jdsaire/trust-verify`, adds both, and publishes it on GitHub
Pages — a migration and gap-fill, not a redesign: visuals, copy, and verification logic carry over
unchanged. Phase 2 (only after an explicit "continue") repoints the three designops pages that
referenced the old embedded build and deletes the old subtree.

## Phase 1 plan (approved before any repo was touched)

**Pre-verified state:** `jdsaire/designops` HEAD `be22bb998d2c43157db6ad178014b5e9906664b8` (PR
#21, S4D). `work/yape-trust-verify/` — 42 files, 568 KB, matches the sourced deploy prompt's file
inventory exactly. `package.json` deps confirmed: react/react-dom ^19, vite ^6.0.5, vitest ^3.2.7,
typescript ^5.7.2, no router or i18n package present.

**Repo-existence finding:** `jdsaire/trust-verify` already existed on GitHub — public, empty,
created minutes before this run, description "Trust-Verify App: Self-directed Capstone Project".
The sourced prompt's own rule is to stop and report rather than silently reuse or overwrite.
Reported; principal chose to reuse the empty repo as this run's target.

**Two discrepancies found in the sourced prompt's own state description, both resolved and
recorded rather than silently patched over:**
1. `FlowPhase` has 8 values (`idle, handshake, step-up, requesting, verified, mismatch, not-found,
   error`), not the 5–6 the prompt named. `verified`/`mismatch`/`not-found` all render through the
   same `VerdictScreen` (`App.tsx` switches on `flow.verdict !== null`, not on which kind) — one
   screen, not three. Resolved as **six routes covering all eight phase values**.
2. No "freeze" document exists anywhere in the repo, though the prompt's auto-merge criterion (a)
   references one. Resolved by evaluating criterion (a) against the prompt's own explicit scope
   statement instead — see the completion report's auto-merge section.

**Router decision:** custom hash router, no new dependency — six known routes, no server-rewrite
needs on GitHub Pages.

**i18n decision:** custom translation table + React context, modeled on designops' own
`assets/js/core/i18n.js` *concept* (persisted choice, same `jds-lang` localStorage key) rather than
its DOM-attribute *mechanism*, which doesn't fit a React app.

**State → route mapping:**

| FlowPhase value(s) | Route |
|---|---|
| `idle` | `#/` |
| `handshake` | `#/step/handshake` |
| `step-up` | `#/step/step-up` |
| `requesting` | `#/step/requesting` |
| `verified`, `mismatch`, `not-found` | `#/verdict` |
| `error` | `#/error` |

**Commit sequence (Tasks 2–7, one commit each):** repo-setup (scaffolding) → migrate (byte-diff
verified, build/test clean) → i18n → routing → Pages workflow → README.

**Gate 1:** hard stop after commit 6 — report localhost + Pages URLs, commit SHAs, byte-diff
result, then no designops access of any kind until an explicit "continue".

## Phase 2 plan (approved after "continue", Task 9)

Re-cloned `jdsaire/designops` fresh: HEAD still `be22bb998d2c43157db6ad178014b5e9906664b8`, zero
drift from Phase 1 — same evidence-link line numbers (806/807 on `limafly-ux` and `tuua-transfer`,
761/762 on `yape-trust-verify-brief`), same href baseline (24/24/24), same 42-file subtree. Branch
`deploy/v9-trust-verify-relink` created from `main`.

**New finding, not in the sourced prompt's file inventory:** `.github/workflows/yape-trust-verify-ci.yml`,
a CI job scoped entirely to typechecking/testing/building `work/yape-trust-verify/**`, surfaced by
Task 11's own full-text-search-before-deletion check. The prompt's DELETION SCOPE rule says only
the subtree is deleted, no other file touched — but leaving this file would make it permanently
dormant (its path filter would never match again) rather than functionally deleted. Reported;
principal chose to delete it in the same cleanup commit.

**Edit plan:** two evidence-link hrefs per page (`limafly-ux`, `tuua-transfer`,
`yape-trust-verify-brief`) — "Open the app" → `https://jdsaire.github.io/trust-verify/`, "Read the
source" → `https://github.com/jdsaire/trust-verify`. Nav dropdown links and all `data-i18n`
attributes untouched. Delete `work/yape-trust-verify/` in full; leave
`work/yape-trust-verify-brief/` untouched apart from its two evidence links.

**Commit sequence:** relink (3 files) → cleanup (subtree deletion + orphaned CI file) → PR against
`main`, not merged pending Task 13/14's verification.
