# Plan — Wave 4 · Brief 04 · Banking Express Build

**Deploy prompt:** `P-CC-Banking-ExpressBuild-v1_0.xml` · **Approved:** 15 Jul 2026 · **Gated on:** Gate G1 (closed)
**Roadmap:** `Execution_Roadmap_v2_0.md`, Wave 4 tasks 4.1–4.3. Task 4.4 and Wave 5 out of scope.

This is the plan as approved at the deploy prompt's task-1 gate, with the revisions that were made
during execution recorded inline where they departed from it. Deviations are listed in full at the
end and in the accompanying completion report.

---

## Context

Gate G1 closed: `banking-selection-dossier.md` settled the case study as a front-end-only
payment-confirmation trust and verification express build, grounded in Peru's *"Yape falso"*
fake-payment-screenshot fraud. This run builds it; it does not re-decide it.

**The insight the build is organised around** (dossier §2.5): the shareable receipt is a static
image. Every field on it — amount, recipient, timestamp, even the *código de seguridad* — is
reproducible by a forger. **Only `Nro. de operación` is backend-anchored.** So the one job is not
"look at the receipt harder." It is: *check the one field the forger cannot fake, and show the user
which fields those are.*

## Preflight (task 0)

| Check | Result |
|---|---|
| `gh` v2.96.0, authed as `jdsaire` (keyring) | PASS |
| `jdsaire/designops` reachable, default `main`, no open PRs | PASS |
| `banking-selection-dossier.md` | PASS — **41,178 bytes, byte-identical** to the approved version |
| `Execution_Roadmap_v2_0.md` | PASS — 22,886 bytes |
| `index.html` work-cards | PASS — exactly **3**, no card 4 |

Three findings shaped the plan:

1. **No Node runtime existed on the build machine** (no node/npm/brew/nvm/bun/deno). Resolved by
   installing Node 24.18.0 LTS (arm64 tarball, checksum-verified) to `~/.local/node` — no sudo,
   nothing outside the user's home directory, no repo impact.
2. **`static.yml` has no `pull_request` trigger.** It fires only on push to `main`, so no PR preview
   exists and the Pages deploy can only be verified post-merge. The hard rule's "if available" hedge
   applies; `static.yml` was not modified.
3. **Root `.gitignore` has no `node_modules`,** and `static.yml` uploads the entire repository
   (`path: '.'`). Resolved with a **scoped** `work/yape-trust-verify/.gitignore`.

*(Minor: the prompt's "92 tracked files" is 92 tree entries — 69 blobs + 23 directories.)*

## (a) Build tooling & dependency justification

Governance rule: *"no dependency I couldn't justify."*

| Dependency | Scope | Justification |
|---|---|---|
| `react`, `react-dom` | prod | Mandated by the JD vocabulary. Bundled into the checked-in output. |
| `typescript` | dev | Mandated. |
| `vite`, `@vitejs/plugin-react` | dev | Bundler. Emits plain static output → **no build step needed in CI/Pages**, which is what lets `static.yml` keep working untouched. |
| `vitest` | dev | Unit testing. Reuses Vite's config/transform pipeline — one toolchain, not two. |
| `jsdom` | dev | DOM for component tests. |
| `@testing-library/react`, `/user-event`, `/jest-dom` | dev | The six dossier scenarios are *interaction* assertions (scrim, lockout, gating); they need real user-event simulation. |
| `@types/react`, `@types/react-dom` | dev | TS types. |
| `@types/node` | dev | **Added during execution** — the Vite config and test helpers are Node-side code (`node:fs`, `import.meta.dirname`) and do not typecheck without it. |

**Containment:** `package.json` lives at `work/yape-trust-verify/package.json`. The repo root has no
`package.json` and gains none. `index.html` stays zero-build. Vite `base: './'` keeps every asset
path relative.

## (b) The one job, screen by screen

Informed by Appendix A, **not a literal redesign** (dossier §8 — a build, not a redesign). Inherits
the simplicity mandate (§2.3) and the APPROXIMATE label (§6).

1. **Entry** — operation number (required) + claimed amount (required) on the **shuffled secure
   keypad** (A.5). Recipient and security code optional, defaulting to **"not shown / I don't
   know"** — scenario 2 built into the entry model rather than bolted on. CTA disabled *and inert*
   until amount > 0 (A.5 precondition gating; entry state `S/ 0`).
2. **Processing** — dark scrim; background `pointer-events: none` + `aria-hidden` + `inert`.
   Execution lock taken on submit; double-tap and back-press cannot fire a second request.
3. **Verdict** — **VERIFIED / MISMATCH / NOT FOUND**, plus a **field-provenance table** labelling
   every A.6 field `backend-anchored` (only `Nro. de operación`) or `sender-reproducible`. This
   table is the argument of the case study.
4. **Sample tray** — genuine / forged-amount / fabricated-number / unreadable-code receipts.

## (c) Singleton & Observer

- **Singleton** — `VerificationSessionService`, private constructor + static `getInstance()`. Owns
  session identity, the simulated handshake state, the **execution lock**, and the audit trail. The
  lock is *why* the pattern is load-bearing: a lock only works if every caller contends for the same
  one.
- **Observer** — `ObservableSubject` with `subscribe`/`unsubscribe`/`notify`. Flow transitions
  broadcast to independent subscribers; React binds via `useSyncExternalStore`.

## (d) Mock REST surface

Static JSON consumed with real `fetch()`. No backend, no provisioned service.

| Endpoint | Response |
|---|---|
| `GET api/operations/{operationNumber}.json` | 200 ledger record \| **404 → `NOT_FOUND`** |
| `GET api/session/handshake.json` | 200 staged transport-security material |
| `GET api/session/handshake-elevated.json` | 200 staged material, elevated risk *(added with the step-up path)* |

Content-type is verified before parsing, so an HTML error page can never be mistaken for a record.
A 500 raises rather than being read as absence — "lookup failed" and "payment does not exist" mean
opposite things.

## (e) Simulated security layer

Every claim routed through one `<ProvenanceBadge>`, in two **structurally separate** panels:

- **SIMULATED** — HTTPS/SSL/TLS 1.2 record layer, negotiated cipher suite, ECDHE + RSA-2048
  asymmetric key exchange, mutual authentication (both sides present and validate a certificate),
  digital certificates with SHA-256 fingerprints, RSA Adaptive risk scoring → **step-up challenge**.
- **IMPLEMENTED (real)** — shuffled secure keypad, execution lock, scrim `inert`/`aria-hidden`,
  privacy masking, single session instance.

The real transport *is* HTTPS via Pages, but the displayed handshake detail is staged, and the panel
says so rather than blurring it. Simulated values never share a table with measured metrics.
**"I tested with users" appears nowhere.** A standing *"Independent case study — not affiliated
with, endorsed by, or connected to Yape or BCP"* notice, plus the APPROXIMATE label on the
Appendix A tokens.

## (f) Testing protocol — the six dossier §7 scenarios

Vitest; recorded in `work/yape-trust-verify/TESTING.md`.

| # | Scenario | Assertion |
|---|---|---|
| 1 | Field-level forgery discrimination | Every A.6 field classified; **only** `Nro. de operación` anchored; forged amount → `MISMATCH` naming the field |
| 2 | Unknown-code case | Verdict reachable with the code "not shown"; unreadable ≠ mismatch |
| 3 | Execution lockout | Double-tap under lag + back-press → **exactly one** ledger call, no desync |
| 4 | Precondition gating | CTA inert until amount > 0 |
| 5 | Scrim integrity | Background `pointer-events:none` + `aria-hidden` + `inert` |
| 6 | Privacy defaults | Masked phone / truncated recipient hold |

Failures fixed, never waived.

## (g) CI + git/PR sequence

**New** `.github/workflows/yape-trust-verify-ci.yml` — additive, `paths:`-scoped: `npm ci` →
`tsc --noEmit` → `vitest run` → `npm run build` → **built-output drift check** →
**no-absolute-paths check**. `static.yml` untouched.

Branch `wave-4-brief04-banking` → commit as
`Juan Diego S. <88201583+jdsaire@users.noreply.github.com>` (the repo's established identity; local
repo config only, since global was unset) → PR against `main` → CI green → merge → verify the Pages
run post-merge → confirm `git log` clean. No `Co-authored-by`, no "Generated with", no mention of
any name other than jdsaire anywhere.

---

## Deviations from this plan, as executed

1. **Node install** — `~/.local/node`, no sudo, outside the repo. Approved before execution.
2. **No PR Pages preview** — `static.yml` has no `pull_request` trigger; Pages verified post-merge.
   Modifying `static.yml` would breach a hard rule, so it was not modified.
3. **Scoped `.gitignore`** for `node_modules` — protects the Pages upload without touching root.
4. **Local git identity set** in the clone — global was unset, so commits would otherwise fail.
5. **Fixtures live at `api/`, not `public/api/`** — `publicDir` disabled. The planned `public/`
   layout produced *two* committed copies of every fixture (source + build output) free to drift,
   because `outDir` is the sub-app root itself. A ~20-line dev-only Vite middleware serves `api/`
   during development and returns a real 404, so dev, tests, and production behave identically.
6. **Vitest 3.2.7, not 2.x** — vitest 2 nested its own Vite 5 beside the project's Vite 6, producing
   colliding type identities. Vitest 3 dedupes to a single Vite.
7. **`@types/node` added** beyond the approved dependency list — required by the Node-side config
   and test helpers.
8. **Step-up authentication built** — the plan named it under (e); it is the build's only auth
   surface, and the hard rules require auth patterns demonstrated in-UI.
