# Plan: Close Wave 5 Task 5.6 — ES Keys Close

## Context

Task 5.6 of `Execution_Roadmap_v3_0.md` closes Wave 5: a full-site sweep (banned strings, relative paths, breakpoints, key parity) plus a one-time ES-approximation pass over five i18n JSON files. The five ES payloads were already authored and approved in a prior authoring session and supplied verbatim — this run is pure mechanical placement and verification; no copy is originated or altered here.

**Deviation from the sourced deploy prompt, authorized by the principal:** the deploy prompt's hard rules called for a direct push to `main` with no pull request. The principal explicitly overrode this and asked for a PR workflow instead. This plan follows the PR path.

## Pre-verified state

- Repo `jdsaire/designops`, branch `main`, HEAD `b31177a` at authoring time, working tree clean.
- All 5 attached payloads parse as valid JSON.
- Key parity confirmed for all 5 files (payload vs. EN source):
  - `designops.es.json`: 133/133, exact match
  - `yape-trust-verify.es.json`: 135/135, exact match
  - `tuua-transfer.es.json`: 135/135, exact match
  - `limafly-ux.es.json`: 135/135, exact match
  - `home.es.json` → `assets/i18n/es.json`: 148 keys = 141 EN-parity + exactly the 7 documented `hero_h1_es_*` keys
- Current target file states match expectations exactly (`designops.es.json` empty; the other three brief files EN-mirrored placeholders; `assets/i18n/es.json` the live 148-key file).
- `contact_engagement_placeholder` register slip ("Selecciona una") confirmed present in both the current live file and the incoming payload — untouched by this change, logged as an open item.
- `docs/v3/` is the current wave folder (has `cc-plans/` and `cc-completion-reports/` subfolders).

## Steps

1. **Branch**: create `wave5-task56-es-keys-close` off `main`.
2. **Write the 5 files verbatim** (parse+re-dump acceptable, no value changes):
   - `work/designops-system/i18n/designops.es.json`
   - `work/yape-trust-verify-brief/i18n/yape-trust-verify.es.json`
   - `work/tuua-transfer/i18n/tuua-transfer.es.json`
   - `work/limafly-ux/i18n/limafly-ux.es.json`
   - `assets/i18n/es.json` (whole-file replacement with the 148-key payload)
3. **Verify** (PASS/FAIL each, stop on any failure):
   - JSON validity of all 5 files
   - Key parity
   - Banned-strings regression grep (AI/agent commit-attribution patterns, "tested with users") across the 5 changed files
   - Relative-path regression grep (`href="/`, `src="/`, `fetch('/`, `url(/`) across the 5 changed files
   - `git diff --stat` shows exactly these 5 files changed
   - SwapLang check: static substitute — confirm every `data-i18n` key referenced in each page's HTML exists in that page's newly-written ES JSON (own file plus the shared chrome keys in `assets/i18n/es.json`)
4. **Commit** exactly the 5 files, one commit, plain message describing closure of Wave 5 task 5.6, author+committer = jdsaire.
5. **Archive**: add this plan under `docs/v3/cc-plans/` and a Completion Report under `docs/v3/cc-completion-reports/`, stating Wave 5 (5.0–5.6) is now fully closed.
6. **Push branch**, open a PR describing this as closing Wave 5 task 5.6 — content-only, zero code/behavior change. Do not merge without a separate instruction.
7. **Report**: PASS/FAIL table, PR link, and the parking-lot open item (register slip).

## Guardrails

- No subagents used for the write/commit/PR execution.
- No credential ever printed; all GitHub interaction via `gh`.
- Scope lock: touch only the 5 target files plus the 2 archive files.
- If any verification check fails, stop and report rather than proceeding to commit/PR.
