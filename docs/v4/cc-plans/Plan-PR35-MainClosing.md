# Plan — PR #35 · Main closing build (P-CC-PR35-Main-v1_0)

**Branch:** `deploy/v22-main-closing`, from `1cdecb1` (origin/main after PR #34)
**Pull request:** #35, manual merge only
**Dispatch:** `BRIEF-CC-PR35-Main-v1_1.md` → `P-CC-PR35-Main-v1_0.xml`, both in `out/active/PRE-MAX/closing/` outside this repository

This file holds the plan as approved, followed by every ruling that changed it during the run. Where a later ruling conflicts with the plan, the ruling governs.

---

## 1. The plan as approved (5 Oct)

### Scope
POSITIONING v1_4 was locked and its copy approved in the key sheet. Main still showed the v1_2 hero; every page rendered Arial (Graphik was declared but never loaded); the footer was hidden site-wide; Main lost its scroll position on reload in Safari; About's disclosure chevrons sat 253–646 px from their headings; and Main's card 04 Spanish used *tú*. PR #35 fixes all of it in one design-led run, with the typeface and every motion picked from rendered prototypes before any production code.

### Method
- Prototypes first, on a `git archive` copy of `1cdecb1` served apart from the branch; the repository is untouched until G3.
- Copy carried from the key sheet and from JD's own edits, verbatim; EN/ES parity per file, markup fallbacks equal to EN, usted throughout. Facts with no EVIDENCE line go to JD once; the run proposes EVIDENCE lines and never edits `EVIDENCE.json`.
- One commit per item; after each, EN/ES parity, the headless matrix widened to all 7 pages (7 pages × 390/768/1440 × dark/light × EN/ES = 84 cells) and contrast against the `1cdecb1` baseline.
- The Safari reload is diagnosed in WebKit before any fix: no blanket `scrollTo`, no manual `scrollRestoration`.

### Gates
Each gate is released only by its exact phrase, with an effort checkpoint before it.

| Gate | Content | Release phrase |
|---|---|---|
| Plan | this plan | `APPROVED PLAN` |
| G1 · Typeface | five candidates from Assessment §E.2 (plus one with a full 100–900 axis) on the new hero, 320–1440, both themes, EN/ES | `APPROVED PR35 G1 — TYPEFACE: <name>` |
| G2 · Visual previews | (a) motion · (b) positioning bridge · (c) footer · (d) About disclosure · (e) hero entrance | `APPROVED PR35 G2`, or per item |
| G3 · Main | self-hosted face, new hero, value proposition, CTA, entrance, bridge after Work, capability card, card 04 usted, head meta, About heading | `APPROVED PR35 G3` |
| G4 · Global | footer on every page with the GitHub link, About chevron, Safari reload fix, the approved motion | `APPROVED PR35 G4` |
| G5 · Release | full regression, criterion 8.9 and typo scans, attribution check, this archive, the PR body | `APPROVED PR35 G5` |

### Verification
Widened matrix 84/84 (errors, overflow, clipped lines, unresolved, unapplied and missing keys); parity and fallbacks; the reload suite in WebKit and Chrome on every Main anchor at 1440 and 390; reduced-motion end states equal to the animated end states; contrast with no new failure in either theme; the chevron gap and its 44 px target; CLS 0 for the font.

## 2. Rulings added during the run (PR35-Q1 to PR35-Q58)

Full text in `PRE-MAX-CHANGELOG.md`; lines below are shortened.

| Ruling | Date | Decision |
|---|---|---|
| PR35-Q1 | 10-05 | the PR #35 prompt is authored in Claude Code from the brief after /preflight (WORKSTREAM-CW-CC, cw-dispatch-brief); the "+ its prompt" in the Step 6 trigger was an authoring error, withdrawn |
| PR35-Q2 | 10-05 | bridge portrait (P_VelvetRope-White.svg: B&W cut-out, white halo) is prototyped with the halo kept and removed, both themes, at the visual-preview gate; JD picks |
| PR35-Q3 | 10-05 | PR #35 runs on Opus 5.5 only (never Sonnet); effort is set per gate by JD at an effort checkpoint after each release (starts at High for preflight + prompt; recommended Plan High |
| PR35-Q4 | 10-05 | repo hygiene (README per folder on the accreditapass pattern, EN/ES dictionaries clustered and reachable from root, contributor check, stale-branch pruning proposal) = PR #36; Brief 04 closure… |
| PR35-Q5 | 10-05 | local clone repaired at preflight: stranded .git/index.lock removed and main reset --hard to origin/main 1cdecb1 (was f28b4ce, −230, half-applied pull: 18 modified + 19 untracked, every blob traced… |
| PR35-Q6 | 10-05 | footer_github links to github.com/jdsaire/designops (this site's code; authorship proof), not the profile Contact uses |
| PR35-Q7 | 10-05 | preflight installs playwright-core + pngjs + pixelmatch@5 (scratchpad) and Playwright WebKit, and measures §6.7, §6.8, §6.10 before the prompt is authored |
| PR35-Q8 | 10-05 | ASSESSMENT v1_1 §D/§E/§H bind PR #35 through the logged CO-Q rulings and Gate 2 although 'APPROVED GATE 0' was never logged; §E's IN→OUT motion and serif-hinge rationale re-anchor to v1_4's two beats… |
| PR35-Q9 | 10-05 | Archivo chosen as the site-wide typeface after G1 round 1; G1 stays open for the hero variant (round 2, dark-only prototypes, desktop + mobile) |
| PR35-Q10 | 10-05 | JD's new hero keys (~/Downloads/updated-hero-keys.json) carried exactly as written, EN + ES: line 1 "Design ate coding" / "El diseño aniquiló al código"; line 2 "My [Vision / Method / Care] drives… |
| PR35-Q11 | 10-05 | headline wording, punctuation and capitals carried exactly as written; XB-0003 risk ("never say coding is dead") accepted under the v1_4 precedent — default under the principal-copy rule, JD may… |
| PR35-Q12 | 10-05 | EVIDENCE route for the new claims: closing/PR35-run/EVIDENCE-AMENDMENT-PROPOSALS-PR35-v1_0.md (B25, P06, B22 limits note); EVIDENCE.json untouched per brief §9; Cowork applies them at its next EVIDENCE write |
| PR35-Q13 | 10-05 | italic downloads approved for the G1 round-2 hook comparison: Archivo Italic, Playfair Display Italic, Fraunces Italic (+2 OFL); Instrument Serif Italic already on disk |
| PR35-Q14 | 10-05 | line-2 word cycle plays once (~3.5 s, under WCAG 2.2.2's 5 s) and lands on Care / dedicación; reduced motion and screen readers get the landed sentence; supersedes PR35-Q8's two-beat hero entrance |
| PR35-Q15 | 10-05 | About hero heading: Claude Code proposes a rebuilt heading under the existing key (no new keys) strengthening the approved POS-Q17 text around the method; "read and change the code myself" stops… |
| PR35-Q16 | 10-05 | About hero heading (about_hero_heading, same key) = JD's edit of proposal A, carried exactly as written: EN "I'm an industrial engineer with an MBA. Research, a written spec, an AI-directed build and… |
| PR35-Q17 | 10-05 | hero attribution = name |
| PR35-Q18 | 10-05 | hero heading carried exactly as written: EN "Design ate code" / "My [Vision / Method / Care] prevails."; ES "El diseño absorbió el código" / "Mi [visión / método / dedicación] prevalece"; line… |
| PR35-Q19 | 10-05 | line 2 is an endless typewriter loop (the three words typed left to right; recalculated pace: a start delay for reading line 1, calm typing); a pause button after line 2 meets WCAG 2.2.2; if JD… |
| PR35-Q20 | 10-05 | case comparison on every round-3 variant: Sentence (as written) / Title / UPPER; ES Title Case shown for contrast only (RAE treats it as an anglicism); EN Title + ES sentence stays a valid mix |
| PR35-Q21 | 10-05 | line 2 gets equal or more weight than line 1 in 5 of 6 round-3 variants; one control variant keeps round 2's proportion for contrast (JD: line 2 can give the strongest value to the reader) |
| PR35-Q22 | 10-06 | final hero direction V7 Block |
| PR35-Q23 | 10-06 | italic face = Archivo Italic; the line-2 typing loop runs 25% faster (every step × 0.75: start 0.86 s, 97.5 ms a letter, hold 1.95 s, backspace 41 ms, gap 0.41 s; loop 12.4 → 9.3 s, measured); videos… |
| PR35-Q24 | 10-06 | Main credential ticker → static logo grid (unique logos, no marquee, no clones; the endless motion had no pause control, WCAG 2.2.2); the clone-to-fill build was a Safari reload suspect and goes with… |
| PR35-Q25 | 10-06 | count-ups → static figures on all 23 (About track record 5, Brief 02 7, Brief 04 11): the number is the content |
| PR35-Q26 | 10-06 | ambient loops retired: the hero gradient drift and Brief 03 network node bob; the network's hover/tap focus and the once-only flowchart token stay |
| PR35-Q27 | 10-06 | entrance motion on diagrams only: text appears in place (briefs' .io fade, the duplicate view() rise S1, Main/About/Contact section-header rise and the eyebrow draw-in S5 retired); ordered entrances… |
| PR35-Q28 | 10-06 | Main credential ticker preserved at every breakpoint as an accepted decoration (JD: "a necessary dramatic pause to focus"; a static grid becomes a quick scan on desktop and clutter on mobile); its… |
| PR35-Q29 | 10-06 | decoration floor: under reduced motion every decoration rests on a static final frame; nothing flashes; nothing hides or delays text; contrast and focus never lowered; only WCAG 2.2.2 (pause control… |
| PR35-Q30 | 10-06 | the approved decoration spec lives in the repo as a new organism, docs/v3/organisms/decoration-system.spec.md + a live specimen .html beside motion-system, committed at G4 with the code;… |
| PR35-Q31 | 10-06 | footer closing copy replaced: EN "TESTED CONCEPTS. / PROTECTED BUDGETS." |
| PR35-Q32 | 10-06 | G2(c) footer = UPPER + italic, F2; the closing statement takes Main's section-headline type from CSS (.section__headline: weight 700, 57.6 px at 1440 / 30 px at 390, -0.02em) instead of 900 |
| PR35-Q33 | 10-06 | Contact: footer = closing statement + © only; the footer's two buttons (LinkedIn, GitHub → github.com/jdsaire/designops, footer labels) replace Contact's own pair under the heading, with the footer's… |
| PR35-Q34 | 10-06 | G2(b) halo kept; Main bridge alt (JD): EN "Confident black-and-white portrait of Juan Diego Saire standing with purpose, hands on hips in a white shirt." ES "Retrato en blanco y negro de Juan Diego… |
| PR35-Q35 | 10-06 | G2(d) chevron as presented; G2(e) entrance B (500 ms / 80 ms) |
| PR35-Q36 | 10-06 | G2(a) verdict table as presented except D20: count-ups kept on About's 5 track-record figures only (exception X-3, amends floor rule 3: a stated delay ≤1.2 s, final figure in the markup so no-JS and… |
| PR35-Q37 | 10-06 | sequencing: G3 (first code and commits) at xhigh; G4 opens with G4a, a Max pass that upgrades the decoration spec v1_0 → v1_1 building on the High diagnosis (audit all components on 7 pages, missed… |
| PR35-Q38 | 10-06 | head meta at G3 (static English): Main description = key sheet as written ("AI Product & Experience Engineer in Lima. I turn business cases into tested interfaces, directing AI through specs, review… |
| PR35-Q39 | 10-06 | tablets (768–1023 px): the shared bridge (About onboarding, Main positioning) uses its phone layout (full-bleed portrait, heading at the foot over the gradient) up to 1023 px; the split starts at… |
| PR35-Q40 | 10-06 | footer closing statement in Sentence case ("Tested concepts. / Protected budgets." |
| PR35-Q41 | 10-06 | Safari reload root cause named by measurement (WebKit): the markup is English and Spanish, the default, is swapped in after load; WebKit restored the scroll position into the English layout and the… |
| PR35-Q42 | 10-07 | About heading figure: "A decade in tech and design" exceeded the ruled 6 years (Y02, E1-Q1); JD chose the ruled figure → EN "Six years in tech and design." / ES "Seis años en tech y diseño."; Main's… |
| PR35-Q43 | 10-07 | ES capability titles in Title Case across all three ("Desarrollos Validados." |
| PR35-Q44 | 10-07 | cap_s2_title EN now mirrors ES ("Scalable Workflows." / "Flujos Escalables."); JD edited EN |
| PR35-Q45 | 10-07 | propagation: About meta description + og:description take the new EN heading verbatim (119 chars, in 795aa42); owed to Cowork, not edited here: SPEC-Copy-Main v1.1, KEYS-Main-EN-ES v1.1, POSITIONING… |
| PR35-Q46 | 10-07 | G5 typo-scan fixes chosen by JD: ES two stray double spaces removed (about_jr_hec_body, designops hero_lede); ES "multi-" joined per RAE ("multipágina" in designops act3_rv2_txt, "multiidioma" in… |
| PR35-Q47 | 10-07 | JD's on-disk Main edits carried verbatim: hero_sub EN "I build seamless websites and apps, translating business challenges into tested products using advanced AI." / ES "Creo webs y apps impecables,… |
| PR35-Q48 | 10-07 | hero typing loop retired (JD: tiring over time, and stopping it is a chore): line 2 is static on hero_h1_l2_w3 ("IMPACT" / "IMPACTO"); hero_h1_l2_w1, _w2, hero_motion_pause, hero_motion_play, the… |
| PR35-Q49 | 10-07 | exceptions: X-3 (About count-up) revoked → static figures (PR35-Q25's original proposal); X-4 (hero entrance) revoked → hero text shows at once; X-1 (ticker, PR35-Q28) and X-2 (B03 network bob) stay… |
| PR35-Q50 | 10-07 | hero gradient (FIELD) holds still: with the pause button gone an endless 7 s drift would need a 2.2.2 exception |
| PR35-Q51 | 10-07 | hero line 2 refit to fill the content box like line 1 in each language (was 89 % EN / 96 % ES at 1440, sized for the widest cycling word) |
| PR35-Q52 | 10-07 | EN line 1 stays "DESIGN ATE CODE." while ES says "DISEÑO DICTA CÓDIGO."; each language keeps its own punch |
| PR35-Q53 | 10-07 | Main og:description follows the hero: "Design ate code. Impact prevails. I build seamless websites and apps, translating business challenges into tested products using advanced AI."; the search… |
| PR35-Q54 | 10-07 | the CV is offered in the About hero, under about_hero_heading, in the Contact page's channel row (moved to shared/channels.css, Contact pixel-identical): two download links, PDF and MD, same download… |
| PR35-Q55 | 10-07 | About ends on Main's Contact organism verbatim ("CONTACT / Let's talk. / Start a conversation →" to ../contact/), keys contact_eyebrow, contact_headline, chrome_nav_cta copied verbatim to About's… |
| PR35-Q56 | 10-07 | the MD placeholder is JD's file, never extracted from the PDF |
| PR35-Q57 | 10-07 | phones: the two CV links share one row; JD first asked PDF left / MD right, then revoked it: MD sits right after PDF, as from 768 (/ask on fit: full labels needed 335–339 px against a 260–330 px… |
| PR35-Q58 | 10-07 | the CV labels merge into one value each, "CV (PDF)" and "CV (MD)" in EN and ES (JD: the button obviously downloads the promised file); the short/full label pair and its hidden spans retire (61e4d40) |

## 3. Gate sequence as run

| Gate | Event |
|---|---|
| Plan | released 5 Oct 2026 (`APPROVED PLAN`); matrix widening and re-baseline moved after the release (Plan Mode forbids writes) |
| G1 | effort checkpoint `EFFORT max`; presented 5 Oct: six faces against Arial |
| G1 | round 2 presented 5 Oct after JD chose Archivo (PR35-Q9) and supplied new hero copy (PR35-Q10): six layouts × four italic faces |
| G1 | round 3 presented 5 Oct (PR35-Q17…Q21): six variants × three cases, endless typing loop with a pause button |
| G1 | final prototype presented 6 Oct; RELEASED 6 Oct: Archivo · V7 Block · UPPER · Archivo Italic (PR35-Q22, Q23) |
| G2 | effort checkpoint High, raised to Max by JD; presented 6 Oct (motion inventory, bridge, footer, chevron, entrance) |
| G2 | not approved; round 2 presented 6 Oct: decoration diagnosis and spec draft (PR35-Q28…Q31) |
| G2 | RELEASED 6 Oct per item (PR35-Q32…Q37) |
| G3 | effort checkpoint `EFFORT xhigh`; presented 6 Oct (13 commits `87963e0`…`dcb5c98`); RELEASED 6 Oct |
| G4a | effort Max (in the G3 release); decoration spec v1.1 presented 6 Oct; RELEASED 6 Oct |
| G4b | effort xhigh (in the G4a release); presented 6 Oct (16 commits `c562387`…`064ac26`); Sentence case footer (PR35-Q40) and Safari root cause (PR35-Q41) during the gate; About chevron fixed for Safari after JD's live review |
| G4 | RELEASED 7 Oct; JD's on-disk Main and About copy edits carried and confirmed (PR35-Q42…Q45) |
| G5 | effort High (in the G4 release); typo fixes chosen by JD (PR35-Q46); presented 7 Oct |
| G5 | iteration opened 7 Oct before the PR: JD's hero copy (PR35-Q47), typing loop retired (Q48), X-3 and X-4 revoked (Q49), gradient still (Q50), line 2 refit (Q51), EN line 1 kept (Q52), Main og:description (Q53) |
| G5 | iteration round 2 7 Oct: the CV moves to About's hero (PR35-Q54, Q56–Q58), About ends on Main's Contact organism (Q55) |
| G5 | re-presented 7 Oct after both rounds |
