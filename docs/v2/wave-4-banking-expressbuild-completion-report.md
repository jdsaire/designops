# Wave 4 — Brief 04 Banking Express Build · Completion Report

Brief 04's express front-end build, per `P-CC-Banking-ExpressBuild-v1_0.xml`, covering roadmap
tasks 4.1–4.3. Gated on Gate G1 (closed at task 7 of this run). Task 4.4 (elementary trio) and Wave 5
assembly are explicitly out of scope, unchanged.

**PR:** [#8](https://github.com/jdsaire/designops/pull/8) — merged 2026-07-16T04:48:56Z, commit
`4859809`. **Live:** https://jdsaire.github.io/designops/work/yape-trust-verify/

## Outcome

`work/yape-trust-verify/` hosts a deployed, front-end-only express app completing one job:
checking whether a payment confirmation is trustworthy. The build follows the dossier's central
structural finding (§2.5) — a shared receipt is a static image, and every field on it is
sender-reproducible except `Nro. de operación`, which the ledger writes. The app checks that field
against a mock ledger rather than inspecting the image, and shows the field-by-field reasoning so
the verdict is explainable, not a black box.

React + TypeScript, built with Vite, output checked in so the rest of the site keeps its zero-build
deploy. Singleton (`VerificationSessionService`) owns the session and the execution lock; Observer
(`ObservableSubject`) broadcasts flow state, bound to React via `useSyncExternalStore`. A mock REST
surface of static JSON stands in for the backend, with real status-code handling (404 → "no such
operation," 500 raises rather than being read as absence). A simulated security layer — HTTPS/SSL/
TLS 1.2, cipher suite, RSA-2048 key exchange, mutual authentication, digital certificates, RSA
Adaptive risk scoring gating a step-up authentication challenge — is badged `SIMULATED` throughout
and held in a panel structurally separate from the controls that genuinely run in the client. The
testing protocol drawn from the dossier's six scenarios is executed and recorded in `TESTING.md`:
45 of 45 assertions pass, none waived. Scoped CI (typecheck, tests, build, a built-output drift
check, a no-absolute-paths check) runs on every push and PR touching the sub-app's path.

`index.html` and the home-page work-card grid are untouched — still exactly three cards, no nav
wiring to the new route. `static.yml` is untouched and was confirmed to deploy the rest of the site
correctly after the merge. The selection dossier carries exactly one changed line: its closing
status, recording Gate G1's closure.

## Verification against `success_criteria`

| # | Criterion | Result |
|---|---|---|
| 1 | `work/yape-trust-verify/` hosts a fully functional, deployed express app completing the one job end-to-end | **PASS** — live at the URL above; core flow confirmed on-device at the task-3 gate before the security/testing layers were built around it |
| 2 | React, TypeScript, REST consumption, Singleton, Observer, unit testing, and CI are all visibly present and identifiable | **PASS** — `src/App.tsx` (React/TS), `src/services/ledgerApi.ts` (REST), `src/services/VerificationSessionService.ts` (Singleton), `src/patterns/Observer.ts` (Observer), `tests/` (45 assertions), `.github/workflows/yape-trust-verify-ci.yml` (CI) |
| 3 | Simulated security elements present, badged SIMULATED, structurally segregated from anything real. "I tested with users" appears nowhere | **PASS** — two separately badged panels in `SecurityPanel.tsx`; banned-phrase and attribution sweeps clean across every authored file |
| 4 | The dossier §7 testing protocol is executed and recorded; every scenario passes or is explicitly flagged — none silently waived | **PASS** — 45/45, `TESTING.md`. One real defect surfaced and fixed (see Authorized deviations) |
| 5 | `index.html` and the home-page work-card grid are untouched. No new site-wide navigation exists yet | **PASS** — `git diff` confirms `index.html` untouched; work-card count confirmed 3 on the live site post-deploy |
| 6 | The dossier carries exactly one changed line, nothing else | **PASS** — `git diff --numstat` on the merged commit: `1 1 docs/v2/banking-selection-dossier.md` |
| 7 | Clean PR, merged, authored and committed solely as jdsaire, zero AI/agent attribution anywhere | **PASS** — author/committer `Juan Diego S. <88201583+jdsaire@users.noreply.github.com>`, no trailers; attribution sweep clean across all authored files (package-lock.json hits are upstream npm package names — `agent-base`, `github.com/sponsors/ai` — not authored content) |
| 8 | The existing `static.yml` Pages workflow still deploys the rest of the site correctly after this run | **PASS** — confirmed post-merge: workflow run `success` on commit `4859809`; home page, sub-app, its JS bundle, and its mock REST fixture all return `200` live |
| 9 | The approved Plan and a Completion Report are committed as flat files under `docs/v2/`, matching the repo's convention, zero attribution leakage | **PASS** — this report and `Plan-Wave4-BankingExpressBuild.md`, committed directly to `main` per the principal's direction for this step |
| 10 | Zero subagents used. Zero PAT usage. Zero absolute leading-slash asset paths | **PASS** — single-agent run throughout; all GitHub access via `gh` (keyring auth, no PAT ever printed); CI's no-absolute-paths check green, confirmed again against the live deploy |

## Authorized deviations from the plan

Full detail in `Plan-Wave4-BankingExpressBuild.md`'s closing section. Summarized:

1. **Node runtime installed to `~/.local/node`** (24.18.0 LTS, arm64 tarball, checksum-verified
   against nodejs.org) — the build machine had no Node at all. No sudo, nothing outside the user's
   home directory. Approved before execution.
2. **Pages preview not available on the PR** — `static.yml` has no `pull_request` trigger, so
   criterion 8 could only be verified post-merge, which this report now records as done. The
   workflow itself was not modified.
3. **Fixtures live at `api/`, not the originally planned `public/api/`** — the planned layout would
   have committed every fixture twice (source copy + build-output copy), free to drift apart,
   because Vite's `outDir` is the sub-app root itself. Resolved with `publicDir: false` and a small
   dev-only middleware that serves `api/` in development and returns a genuine 404 for a missing
   fixture, so dev, tests, and production all behave identically.
4. **Vitest upgraded from the planned 2.x to 3.2.7** — Vitest 2 nested its own copy of Vite 5
   alongside the project's Vite 6, producing colliding TypeScript type identities that failed
   `tsc --noEmit`. Vitest 3 dedupes to a single Vite and typechecks clean.
5. **`@types/node` added**, beyond the dependency list in the approved plan — the Vite config and
   Node-side test helpers use `node:fs`, `node:path`, and `import.meta.dirname`, none of which
   typecheck without it. Dev-only; does not ship in the built bundle.
6. **Step-up authentication built** — the approved plan named RSA Adaptive risk scoring under (e)
   but did not spell out a challenge flow. Built one (`StepUpChallenge.tsx`, reusing the shuffled
   secure keypad) because the deploy prompt's hard rules require auth patterns demonstrated in-UI,
   and without it the build had no auth surface at all.
7. **A real defect was found and fixed during testing, not merely tested around.** `#sleep` and
   `#awaitStepUp` in `VerificationSessionService` subscribed to the session's `AbortSignal` without
   first checking whether it had already fired. A back-press cancel raised before the flow reached
   that await had already dispatched its `abort` event, so the listener never ran and the cancelled
   verification proceeded to write a verdict the operator had backed out of — the exact desync the
   execution-lockout rule (dossier A.5, scenario 3) forbids. Both call sites now check
   `signal.aborted` before subscribing. The regression test that caught this
   (`tests/scenario-3-execution-lockout.test.tsx`, "a back-press mid-flight lands on a clean state")
   remains in the suite.

None of these change what the build does for the end user or narrow the scope approved at Gate G1;
each is a tooling or construction detail, recorded here per the plan's own deviation-disclosure
discipline.

## Open items carried forward

- **Wave 4 task 4.4** — the elementary Brief 04 file trio, sourced from the selection dossier and
  this build record. Chat · Opus 4.8. Not started by this run; explicitly out of scope per the
  deploy prompt.
- **Wave 5 assembly** — mounting Brief 04 at a site-wide navigation route, adding the fourth
  home-page work-card, and splicing the shared motion/Gantt organisms. Blocked on the elementary
  trios for Briefs 02, 03, and 04 existing (per `Execution_Roadmap_v2_0.md` §9's dependency spine).
  Not started by this run; `index.html` and the work-card grid remain untouched as required.
- **No scenario was flagged as an open item** — all six dossier testing-protocol scenarios passed
  outright; nothing was waived or deferred.
