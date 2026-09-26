# Plan — Dispatch B · brief Spanish, three-level i18n, Brief 01/02 English re-lock

**Branch:** `deploy/v19-wb-brief-es`, from `f28b4ce` (origin/main after PR #31)
**Pull request:** [#32](https://github.com/jdsaire/designops/pull/32). Manual merge only.
**Dispatch:** `BRIEF-CC-DISPATCH-B-v1_0.md` → `P-CC-DISPATCH-B-v1_0.xml`, both in `out/active/PRE-MAX/site-wB/` outside this repository
**Model:** Opus, medium effort, Auto Mode (WB-Q5)

---

## 1. The plan as approved (24 Sep, `APPROVED PLAN`)

**Gate 0 · English hero fixes (WB-Q6).** Six hero values (seven keys) across Briefs 01, 02 and 04 are brought inside the evidence and calibrated-verb limits. The English freeze lifts for these keys only.

**Gate 1 · Retirement and the Brief 03 fix.**
- Retire the Spanish keys orphaned by the wave 2A rewrite on Briefs 02 and 04 (WB-Q3).
- Retire the keys nothing reads on Briefs 03 and 04. The full set is shown before deletion.
- Stop Brief 03's script error on load, as a guard only: no redesign, copy or layout change (WB-Q2, WB-P4).

**Gate 2 · Brief 01 in Spanish.**
- `accreditapass.es.json` is written under designops-copy-es.
- Its role strip, close eyebrow and contact CTA get their Spanish too (WB-P1, WB-P6).

**Gate 3 · Briefs 02 and 04 in Spanish.**
- Every English-only key gets its Spanish.
- Every key whose Spanish figures disagree with its English is re-derived (WB-Q7).
- Brief 04's single-page build window reads 24 abr – 04 jul 2026, 71 días.
- Brief 04's schedule assistive labels read in the active language, with a singular one-day label (WB-P3).

**Gate 4 · Pre-merge.** The final headless pass, the archive, the PR and the relay.

**Plan-gate rulings WB-P1…P6** (via /ask, all recommendations taken):
- P1: parity handling for inline-markup elements (later superseded by WB-Q14).
- P2: Brief 01's script-built schedule stays English and goes to the backlog.
- P3: the singular schedule label.
- P4: the Brief 03 guard.
- P5: criterion 8 counts script errors only; Brief 03's ES fallback 404 is reported apart.
- P6: the Brief 01 close strings.

## 2. Scope added during the run

Every extension was ruled by the principal and logged in `PRE-MAX-CHANGELOG.md`.

| Ruling | Date | Scope |
|---|---|---|
| WB-Q8 | 25 Sep | The brief-loader fence lifts for a three-level i18n model: global → regional → local |
| WB-Q9 | 25 Sep | The regional layer follows the language the local body resolved to |
| WB-Q10 | 25 Sep | Three regional pairs in `assets/i18n/briefs/`: shared brief UI, a tag bank, a related-reading bank |
| WB-Q11 | 25 Sep | The restructure runs as Gate 3R; Gate 3 is re-presented after it; one PR |
| WB-Q12 | 25 Sep | ES navigation label "Portafolio" → "Proyectos" (it collided with Brief 04's name) |
| WB-Q13 | 25 Sep | Four tag renames: Airport Operations, Customer Experience, Media, App Security |
| WB-Q14 | 25 Sep | Inline-bold elements take their dictionary values through an HTML-aware sweep |
| WB-Q15 | 25 Sep | ES fidelity is transcreation inside an evidence fence |
| WB-Q16 | 25 Sep | ES register is usted on every surface |
| WB-Q17 | 25 Sep | Brief 01 lock corrections are proposed by the run and applied only by the principal |
| WB-Q18 | 25 Sep | All ES on Briefs 02 and 04 is re-voiced under designops-copy-es v4.0 |
| WB-Q19 | 25 Sep | Brief 01's English is re-locked to mirror the principal's locked Spanish |
| WB-Q20 | 25 Sep | Brief 01 Act 05 narrates the audit in three panels; side-panel titles follow the active language on all briefs |
| WB-Q21 | 25 Sep | "The 10 sec version" mirrors "Versión de 10 segundos"; the 13 Brief 01 ES proposals are applied |
| WB-Q22 | 25 Sep | No English copy skill: English mirrors the approved Spanish in Brief 01's English voice |
| WB-Q23 | 25 Sep | Brief 03's Spanish goes live in this run |
| WB-Q24 | 26 Sep | Brief 02 interventions: panels, bold, chart translation, receipt crop, ledes, synthesis; the "Measure" tab |
| WB-Q25 | 26 Sep | Gate 3 is released as it stands; the Brief 03 and 04 English mirror moves to their next dispatches |

## 3. Gate sequence as run

Plan → Gate 0 → Gate 1 → Gate 2 → Gate 3R (restructure) → Gate 3 (re-presented three times) → Gate 4.
