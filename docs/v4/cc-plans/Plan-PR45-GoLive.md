# PLAN-PR45 · Go-live (v1_0 + deltas v1_1, v1_2)

Prompt: `out/active/PRE-MAX/closing/P-CC-PR45-GoLive-v1_0.xml` · brief `BRIEF-CC-PR45-GoLive-v1_3.md` · base `320ec66` · branch `deploy/v32-pr45-go-live`. The plan as accepted in Plan Mode, then its two deltas as accepted (G1 rework and G1b, 28 Oct; G1b rebuild and injection, 29 Oct). Rulings made later in the run (PR45-Q11…Q31) are in the completion report.

# PLAN-PR45-v1_0 · Go-live (P-CC-PR45-GoLive-v1_0, task 1)

## Context
PR #45 is the last site step before jdsaire.com attaches: the legal surface has to be live first (v3_3 §4, AIE-Q26/Q27), the site's own URLs have to name the domain it will serve from (AIE-Q56), and the three Core Web Vitals misses get fixed so the 14/14 re-run at the #45 sync happens on the real address (SY44-Q1, AIE-Q57). Base: origin/main **320ec66**, branch **deploy/v32-pr45-go-live** (created on acceptance). Lock **COPY-PR45-LEGAL-v1_1 is still missing**: G1 builds the structure and stops before any string (PR45-Q3).

## Rulings from this Plan (logged in PRE-MAX-CHANGELOG as the first act after acceptance; Plan Mode can't write)
| Id | Ruling (JD, /ask) |
|---|---|
| PR45-Q4 | /privacy/ is linked from the footer and the consent line only; no nav item |
| PR45-Q5 | CV `.md` pair is reported, not swept; it waits for M4's re-export with the PDFs. Criterion 7 reads "…except the CV pair, routed to M4" |
| PR45-Q6 | The performance fix (ES dictionary preload) goes on **all seven pages**, not only the three cells |
| PR45-Q7 | CSP is split: strict scripts (hashes); `style-src-elem 'self'` + `<style>` hashes; `style-src-attr 'unsafe-inline'`; `style-src 'self' 'unsafe-inline'` fallback. Named reason: the briefs' computed chart positions |

## Preflight + censuses (carried from verified_state 1–15, unchanged)
Base clean, checks 0·0·0·out of place 0, inspect 1.1.0 @ 8ba81f4 with key floor 168 cells (2 ruled), Lighthouse diagnosis 9/9, ports free. Censuses are as in the prompt; the per-gate changes are below.

## G1 · Legal footer (High · 60 min)
**Structure (the smallest one that adds the row and overlays once for all pages):**
- **Markup per page**, like the existing footer: the legal row inside `.footer__strip` on the 7 pages + `/privacy/`, and four overlay blocks right after `</footer>`. Static markup keeps EN fallbacks checkable by `parity.py`; the overlays are short (about 1.2 KB of copy).
- **Behavior in one shared module** `assets/js/core/legal.js`. It generalizes Contact's measured `#successModal` pattern (contact.js: open → focus close, Escape closes, focus returns to the last focused element) and adds a Tab focus trap. Each block is `div.legal-dialog[role=dialog][aria-modal=true][aria-labelledby]` with `aria-hidden` toggling and a close button. Imported by every page entry (`assets/js/pages/*/main.js`), and on the briefs by their existing module script.
- **Styles** in `assets/css/shared/legal.css`, linked by the 8 pages. One row at ≥1024 px; stacked and centered below. Controls are `min-height/min-width: 24px` with padding. Tokens only, no new design values beyond the spec's 24 px.
- **Toggle icon**: inline SVG drawn for this site (pill + knob, `currentColor`, `aria-hidden`) inside the "Your privacy choices" button.
- **Keys (page order, inserted after `footer_copyright`)**: Global +18: `legal_privacy, legal_security, legal_terms, legal_license, legal_choices, legal_close, legal_sec_title, legal_sec_body, legal_sec_link, legal_terms_title, legal_terms_body, legal_lic_title, legal_lic_body, legal_ch_title, legal_ch_body, legal_ch_button, legal_ch_done, legal_ch_link`. `footer_copyright` takes the lock's value ("© 2026 Juan Diego Saire", without the period).

**Clear my saved preferences** (in legal.js): removes `jds-theme`, `jds-lang`, every `jds-i18n:*`, `jds-navcue` (in both storages), and sessionStorage `dl`, `dl:*`, by iterating keys; no `.clear()`. Then it re-applies the defaults through the existing modules: theme.js's swap to dark and i18n.js `swapLang('ES')` (exported). It shows `legal_ch_done` in a `role=status` line. No reload.

**/privacy/** (IA-CONVENTION :41, depth 1): `privacy/index.html` from Contact's chrome (nav, footer, theme, i18n early + module), `privacy/i18n/privacy.{en,es}.json` (21 keys: `privacy_meta_title, privacy_h1, privacy_updated, privacy_s1_h … privacy_s9_x`), `assets/js/pages/privacy/main.js`, styles from the shared editorial sheet (no new page CSS unless the layout needs it). One `PAGES` row each in `tools/parity.py` and `tools/order.py` (data, same shape); orphans picks the pair up by glob. Folder READMEs follow at G4.

**security.txt**: `.well-known/security.txt` (Contact, Expires, Preferred-Languages, Canonical from the lock). `{EXPIRES}` = G1 release + 364 days, ISO 8601 with zone. Served as text/plain (verified_state 7).

**Consent** (Contact): a new `.form-group` before submit, holding an unticked `input[type=checkbox]#contactConsent[required]`. Its label follows the footer tagline's fragment pattern, `contact_consent_pre` + `<a href="../privacy/">contact_consent_link</a>` + `contact_consent_post` (the concatenation is checked byte for byte against the lock's sentence, EN and ES), plus `contact_err_consent`. contact.js already validates every `[required]` field into `.has-error`. I add a checkbox branch (`checked`) to its validator. Endpoint, key, hidden fields and fetch stay as they are. Contact +4 keys.

**Placeholders**: `{UPDATED}`, `{EXPIRES}`, `{FORM_FIELDS}` = "What brings you here?, Full name, Corporate email and Details". GAP values are never filled by the run.

**Lock gate**: if v1_1 is still missing, G1 commits the structure with keys absent (no strings), runs gate checks on behavior only, and STOPS.

**Commits**: `feat(legal)` row + overlays + module + styles · `feat(legal)` clear action · `feat(privacy)` page · `feat(legal)` security.txt · `feat(contact)` consent · `docs` DICTIONARIES counts (11 pairs; 1,088 → 1,131 per language).

## G2 · Sweep + head + CSP (High · 60 min)
- **Swept → https://jdsaire.com**: README.md :7, :11; the 3 stubs' canonicals (→ jdsaire.com/work/portfolio-evolution/, /work/trust-verify-brief/). **Classified as a record, kept**: `work/trust-verify-brief/docs/Brief-4…v4_0.md:167`. **Kept**: 14 app refs, 7 refs under docs/. **Reported to M4**: CV PDFs + `.md` pair (PR45-Q5).
- **canonical + og:url** on the 7 pages + /privacy/: `https://jdsaire.com` + route. og:image finding (relative or absent) reported, not fixed.
- **CSP meta** (PR45-Q7), shared shape per page: `default-src 'none'; script-src 'self' <sha256 per inline script>; style-src 'self' 'unsafe-inline'; style-src-elem 'self' <sha256 of <style> block, briefs>; style-src-attr 'unsafe-inline'; img-src 'self' data:` (data: only where a page's CSS uses the 2 `data:image/svg+xml` URLs, confirmed per page); `font-src 'self'; connect-src 'self'` (+ `https://api.web3forms.com` on Contact); `form-action 'self'` (Contact: `https://api.web3forms.com`); `base-uri 'none'`. Contact's existing tag is replaced by the new shape. Hashes come from a scratchpad script over committed inline scripts and are re-run whenever one changes.
- **Not carried by a meta tag** (for the Cloudflare header later): `frame-ancestors`, `report-uri`/`report-to`, `sandbox`.
- **Commits**: `chore(urls)` · `feat(head)` canonical/og:url · `feat(head)` CSP.

## G3 · Performance (Medium · 30 min)
**Measured cause, one for all three cells** (records/lighthouse-diagnosis): a first visit has no cached dictionary, so the EN markup paints first and the default ES swap waits for its dictionaries at the end of a module chain (HTML → main.js → modules → paths.js → fetch: es.json at 1,155 ms and about.es.json at 1,166 ms on About, observed). About's LCP element is the swapped ES heading (render delay 2.31 s). Brief 04's `.rolestrip` sits below swapped hero text (dictionaries end 458–858 ms, FCP 458). Contact shifts when its first paint lands before the dictionaries (run 3: FCP 95 ms, dictionaries 119 ms) and not otherwise.
- **Cause confirmation** (≤10 min, read-only, first step): PerformanceObserver `layout-shift` sources and timestamps vs `i18n:changed`, 5 fresh-profile loads per page, CPU ×4, on the local tip. If a shift has another source, STOP and /ask for that cause's fix.
- **Fix (PR45-Q6, all 7 pages)**: `<link rel="preload" as="fetch" crossorigin href="…">` in each head for the ES files that page fetches (global es.json + page dict; briefs + briefs-ui.es, tags.es). This takes the chain from 3–4 hops down to 1, with no copy, design or script change, and is covered by `connect-src 'self'`. Cost: about 6–12 KB fetched by EN-preferring repeat visitors.
- **Lab check**: Lighthouse 13.5.0 phone ×3 on http://127.0.0.1:8000/ for About, Contact, Brief 04 (background), medians vs SY43-Q10 → `records/LAB-CHECK-PR45-G3-v1_0.md`, labelled preview. A miss → STOP and /ask (the next fix would change behavior, e.g. holding the first paint for the dictionary).
- **Commits**: `perf(i18n)` one per page group (Main/About/Contact, briefs).

## G4 · Docs + release prep (Medium · 30 min)
READMEs: root folder map (privacy/, .well-known/), about none, contact/README (consent), assets/js/core, assets/js/pages (+privacy/), assets/css/shared (legal.css), tools/README (PAGES rows), work/README if stubs are mentioned. DICTIONARIES.md: 11 pairs, counts. CHANGELOG.md: #44 → "27 Oct 2026", a #45 row. `closing/PR45-run/PR-45-BODY.md` from the template. Proposals: KEYS-v1_9-PROPOSAL-PR45.md, EVIDENCE-NOTE-PROPOSAL-PR45.md. Archive: `docs/v4/cc-plans/Plan-PR45-GoLive.md`, `docs/v4/cc-completion-reports/pr45-go-live-completion-report.md`, docs index lines. Nothing pushed.

## G5 · Regression + release (Low · 15 min)
`inspect --mode regression --pages all --mask "canvas,.ticker__lanes"` vs a worktree of 320ec66 on 8010. All 7 pages are touched (footer + head + CSS/JS) → 168 cells against the keyed floor. /privacy/ is tip-only (gate checks + axe). Read time on the 4 briefs (SR-3). Attribution grep. Then push, `gh pr create`, print the URL, relay, Cowork paste block, and the domain checklist (v3_3 §4 step 6).

## Server, records, effort
Tip server `python3 -m http.server 8000 --bind 127.0.0.1` starts on acceptance (Plan Mode can't start it). Records in `closing/PR45-run/`. Effort: G1 High · G2 High · G3 Medium · G4 Medium · G5 Low.

## Verification (each gate)
- `python3 tools/parity.py`, `links.py`, `orphans.py` → `failures: 0`; `order.py --strict` → `out of place: 0`.
- `inspect --mode gate` on the touched pages, Chrome 390/1440 dark, EN + ES: 0 console errors (CSP included), 0 failed requests, 0 unresolved keys, 0 overflow.
- G1 by hand in the preview browser: Tab/Enter/Escape/focus return on each overlay; the clear action removes the 6 values and leaves others, then shows dark + ES; consent blocks submit with no request sent; tap targets ≥ 24 px measured.
- G2: `grep` shows 0 live designops github.io refs outside the CV pair; 14 app refs unchanged.
- G3: the lab check medians. G5: matrix 0 unintended differences.

---

## PLAN-PR45-DELTA-v1_1 · G1 rework + G1b /report/ (brief v1.1)

## Context
Brief v1.1 (28 Oct, AIE-Q60…Q67) changes G1 mid-run and adds G1b. The "Report security issues" overlay is retired: the row's item becomes "Report an issue", linking a new `/report/` page built on Contact's architecture, with the same Web3Forms service and the subject "Site issue report". Copy now comes from two LOCK files written after AI Studio round PR45-legal-R1. The round sources (COPY-PR45-LEGAL-v1_1, COPY-PR45-REPORT-v1_0) supply key names and roles only. **PLAN-PR45-v1_0 stands for G2–G5**; this delta replaces only its G1 section and adds G1b. P-CC-PR45-GoLive-v1_0 stays at v1_0, with this delta as its amendment. The release phrases are `APPROVED PR45 G1` and `APPROVED PR45 G1b`.

## Rulings (logged in PRE-MAX-CHANGELOG as the first act after acceptance)
| Id | Ruling (JD, /ask) |
|---|---|
| PR45-Q8 | privacy_s7 gets a link-text key (`privacy_s7_link`, verbatim inside `privacy_s7_x`, EN + ES). legal.js wraps it in a link to `../report/?reason=privacy`. Cowork adds the key in the lock |
| PR45-Q9 | Contact's `contact_report_link` line sits in the hero, right after the channel row, as a muted line that links in full to `../report/` |
| PR45-Q10 | "Clear my saved preferences" also removes the carousel position (sessionStorage `about:ui`, `b01:ui`…`b04:ui`), per §6.5. Whether the lock's `choices_body` names it is Cowork's call |

## 1. G1 rework (applied to the uncommitted structure)
- **Row:** the 4th item becomes `<a class="legal__link" href="{p}report/" data-i18n="legal_report">`, with no overlay. The `#legalSecurity` dialog and its keys are removed from all 7 pages + `/privacy/`. Three overlays remain: `#legalTerms`, `#legalLicense`, `#legalChoices`.
- **Copyright:** `legal_copyright` replaces `footer_copyright` in the row on every page. `footer_copyright` is retired from the global pair, which goes in the KEYS v1_9 proposal.
- **security.txt:** `Contact: https://jdsaire.com/report/`, `Expires: {EXPIRES}` (the G1 release + 364 days, ISO 8601 with zone), `Preferred-Languages: en, es`, `Canonical: https://jdsaire.com/.well-known/security.txt`. These values come from the LEGAL-LOCK's `security_txt` block; they are not copy.
- **Choices:** `choices_done` is the lock's line, measured against PR45-Q2 (the site's defaults). legal.js keeps its clear list: `jds-theme`, `jds-lang`, `jds-i18n:*`, `jds-navcue` (both storages), `<page>:ui` (PR45-Q10).
- **Consent, shared by both forms:** the fragment keys `contact_consent_pre/link/post` and `contact_err_consent` are dropped. Markup becomes `<span class="form-consent__text" data-consent>` with the EN line as a static fallback, plus `<span class="error-hint" data-i18n="consent_error">`. legal.js renders `consent_checkbox` with `consent_link` wrapped in `<a href="{p}privacy/">` on `i18n:changed`, from the event's dictionary. The same helper (`[data-i18n-link]`, holding the text key and the link key) handles `privacy_s7_x` / `privacy_s7_link` (PR45-Q8). If the link text isn't found inside the sentence, the plain sentence renders and the console warns, so the gate fails visibly.
- **Privacy page:** 20 keys (`privacy_h1`, `privacy_updated`, `privacy_s1_h` … `privacy_s9_x`) + `privacy_s7_link`. `{UPDATED}`, `{CONTACT_FIELDS}` and `{REPORT_FIELDS}` are filled as the lock says, from each form's EN/ES labels joined "a, b and c" / "a, b y c". The `<title>` and description are static English from the lock if it carries them; if not, the run stops at injection and asks.

## 2. G1b · /report/ (Contact's architecture, every breakpoint)
- **Folder (IA-CONVENTION :41, depth 1):** `report/index.html`, `report/i18n/report.{en,es}.json`, `assets/js/pages/report/main.js`, `assets/css/pages/report/report.css` (only the intro and out-of-scope blocks).
- **Reused unchanged:** `contact.css` (scoped to `#contact`, `#successModal`), `channels.css`, `display.css`, `contact.js` (finds `#contactForm`, `#successModal`, `#modalCloseBtn` and validates every `[required]` generically, including the new checkbox branch). /report/ keeps those same ids, so no Contact code or style is copied or changed. Contact's single-stack layout carries over to 390/768/1440 as-is.
- **Parameterized in markup only:**
  - Opening: `report_arc_label/pre/k/post/sub` in Contact's `.ah` display, fitted by `about/slogan.js`.
  - Intro block: `report_intro_h/x` + `report_intro_cta` (a button that moves focus to `#reportReason`, in report main.js).
  - Out-of-scope block: `report_out_h/x`.
  - Form eyebrow `report_form_head`.
  - Select `#reportReason` (name `reason`): placeholder + 6 options (`content`, `display`, `a11y`, `security`, `privacy`, `other`). `?reason=privacy` preselects option 05.
  - New required field `#reportPage` (name `page`, text, maxlength 300): `report_page_label/placeholder`, `report_err_page`.
  - Name, email (`type=email`), message: `report_name_*`, `report_email_*`, `report_msg_*`, `report_err_*`.
  - Shared consent + `consent_error`; `report_mandatory_footnote`, `report_disclaimer`, `report_submit`; success modal `report_success_headline/body`.
- **Form service:** same action and access key. Hidden `subject` = "Site issue report" (from the REPORT-LOCK); `from_name` keeps Contact's value; botcheck is kept.
- **Head:** `<title>` + description are static English from the REPORT-LOCK's `meta_static_english`. Canonical, og:url and CSP come at G2. Out of the nav: no `aria-current`, no nav item.
- **Contact:** the `contact_report_link` line goes after `.contact-channels` (PR45-Q9), styled by one small rule in contact.css. Contact +1 key.
- **Commits (after the locks):** `feat(report)` page · `feat(contact)` report line · `docs` dictionary counts.

## 3. Keys, in page order (names from the round sources)
| Pair | Added | Removed | After |
|---|---|---|---|
| Global `assets/i18n/{en,es}.json` | `legal_copyright, legal_privacy, legal_report, legal_terms, legal_license, legal_choices, legal_close, terms_title, terms_body, license_title, license_body, choices_title, choices_body, choices_button, choices_done, choices_link, consent_checkbox, consent_link, consent_error` (19), placed where the footer uses them; consent keys after the overlay keys | `footer_copyright` | 44 → 62 |
| Contact | `contact_report_link` (after the channel keys) | — | 29 → 30 |
| Privacy (new) | 20 + `privacy_s7_link` | — | 21 |
| Report (new) | 37 `report_*`, in the source's order (= page order) | — | 37 |
| Total per language | | | 1,088 → 1,150 · 12 pairs |

## 4. Dictionaries and checks
- `tools/parity.py` and `tools/order.py`: one `PAGES` row each for `privacy` and `report` (same shape, data only). orphans picks both pairs up by glob. DICTIONARIES.md: 12 pairs, new counts (committed at G1/G1b, finished at G4).
- **Built now (no strings):** the dictionary files are not created. parity's `missing` and inspect's unresolved/404 counts are expected, and are reported as owed to the locks, not as defects.
- **On the locks:** inject EN, then ES; fill the placeholders; parity, links, orphans `failures: 0`, order `out of place: 0`; inspect gate mode on the 9 pages, Chrome 390/1440 dark, EN + ES.

## 5. Never submit (the 28 Oct incident)
- Form behavior is tested only through a scratchpad Playwright script (installed Chrome, as in the memory notes) with `page.route('**/api.web3forms.com/**', r => r.abort())` registered before load. A rejected fetch and the native-post fallback are both aborted at the network layer. The script asserts 0 requests completed to that host.
- In the preview pane I only open, tab and type; I never press submit.

## Effort and budgets
G1 rework + G1b structure: High · 60 min, then the structure report (no strings). Injection on the locks: Medium · 30 min per gate.

## Verification
- **Structure stop:** `git diff` shows `#legalSecurity` gone everywhere. `legal_report` links resolve: `/report/` → 200. `.well-known/security.txt` → 200, text/plain.
- **Behavior (Playwright + preview):** dialogs (Escape, focus return, Tab trap); clear (5 kinds removed, unrelated keys kept, dark + ES); consent and report validation (unticked → 0 requests); `?reason=privacy` preselects.
- **After the locks:** the four checks at 0; inspect gate 0 console, 0 failed requests, 0 unresolved, 0 overflow on 9 pages; tap targets ≥ 24 px; the consent and s7 links render in EN and ES.

---

## PLAN-PR45-DELTA-v1_2 · G1b chassis rebuild + G1/G1b injection (brief v1.3)

## Context
Brief v1.3 (28 Oct): both locks are LOCKED (`COPY-PR45-LEGAL-LOCK-v1_1`, `COPY-PR45-REPORT-LOCK-v1_0`). After delta v1_1, /report/ was redesigned in-round (AIE-Q71). What exists now (uncommitted) is Contact's layout with 37 seed keys. The locked page is: hero → editorial (eyebrow, verdict, lede) → three-slide carousel (Brief 01 Act 03's component, no CTAs) → a three-column form at desktop, stacked below → success modal.
- **Scope:** this delta covers **G1b only**. G1's delta (v1_1) stands. PLAN-PR45-v1_0 stands for G2–G5.
- **Measured:**
  - Brief 01 = `work/accreditapass/` (`b01:ui`).
  - Its Act 03 carousel is already shared code: `shared/carousel.css`, `shared/carousel-phone.css`, `core/carousel.js`. About reuses it the same way (`about:ui`).

## Rulings (logged in PRE-MAX-CHANGELOG as the first act after acceptance)
| Id | Ruling (JD, /ask, plan delta v1_2) |
|---|---|
| PR45-Q11 | **Theme words → report lock amendment.** The theme toggle has no keys: its words are static English aria-label/title in the nav markup. Cowork adds `report_theme_dark` and `report_theme_light` (EN + ES) as COPY-PR45-REPORT-LOCK-v1_1. The G1b report waits for it |
| PR45-Q12 | **Page select:** 8 options in the nav overlay's order, each with the nav's icon, names shown in uppercase, no numbering. Backlog: the mobile navbar gets redesigned later with new structural decisions (not critical now) |
| PR45-Q13 | **768–1023:** Contact's two columns (identity + context on the left, details on the right). Three columns from 1024; one column below 768 |
| PR45-Q14 | **/privacy/ `<title>`** = `legal_privacy` EN + the site's suffix: "Privacy policy · Juan Diego Saire — Product Lab". No meta description |

Also logged, same turn:
- PRE-MAX-BACKLOG: the mobile navbar redesign (PR45-Q12).
- PRE-MAX-BACKLOG: the theme toggle's aria-label/title are static English on every page (an ES gap, found here, not fixed in #45).
- A proposal file for Cowork: `closing/PR45-run/proposals/REPORT-LOCK-AMENDMENT-REQUEST-v1_0.md`, naming the two theme keys and their role.

## 1. The carousel, reused without a copy
- **Styles and script:**
  - `report/index.html` links `shared/carousel.css` and `shared/carousel-phone.css`, as About does.
  - `pages/report/main.js` imports `{ init, sessionStore }` from `core/carousel.js` and calls `init({ store: sessionStore('report:ui') })`.
  - Nothing is copied: one `.dl[data-dl]` block of markup per the component's contract (viewport `role=region` `aria-roledescription=carousel`, labelled by the editorial verdict's id; `ol.dl__track`; three `li.dl__slide`; `.dl__ctrl` with the two `.dl__nav` buttons and the `.dl__count`).
- **Slides:**
  - `.dl__content` only, with `p.dl__label` = `report_slide_N_eyebrow`, `h3.dl__title` = `_title`, `p.dl__body` = `_body`.
  - No `.dl__media`: the lock has no image or alt keys.
  - No `.dl__cta`, and no `.ctaset` under the carousel (AIE-Q71).
  - **No `data-dl-num`:** the lock's eyebrows already carry "01 ·", and the phone counter would double it.
  - One page rule in `report.css`: a text-only slide is one column (`grid-template-columns:1fr`, content held to a reading measure) instead of the 51/49 media grid.
- **i18n:**
  - `ui_carousel_prev` and `ui_carousel_next` are already in the global pair, which `core/i18n.js` loads on every page (About relies on this).
  - The slide strings come from the report pair through `setPage('report/i18n/report')`.
  - The count "01 / 03" and the slide `aria-label`s are set by the component and are not copy.
- **Clear:** `legal.js` `SESSION_KEYS` gains `report:ui`, so "clear" removes it with the other carousel positions (PR45-Q10, AIE-Q65).

## 2. The editorial block
- **Structure:** `shared/editorial.css` (PR43-Q29) is the one editorial standard the briefs' act heads share. The block is `<header class="report-editorial">` with:
  - `.section__eyebrow` (bar + text = `report_editorial_eyebrow`);
  - `h2.section__headline#report-ed-h` = `report_editorial_verdict`;
  - `p.section__lede` = `report_editorial_lede`.
- **Styles:** these are the same heading and lede rules as the briefs' `.act__head > .verdict / .scan` (editorial.css), and left-aligned at every width like the briefs, because only Main's and About's heads centre. No new type rules.
- **Placement:** the editorial and the carousel sit in one `<section class="section">` between the hero and `#contact`, inside the same container the hero uses.

## 3. Hero and the three-column form (Contact's code unchanged)
- **Hero:** Contact's `.pagehero--contact` opening with `report_arc_label`, `report_arc_pre`, `report_arc_k` (the purple `.ah__hook`) and `report_arc_sub`. `report_arc_post` is gone, and so are the two notes and their CTA. `about/slogan.js` fits the line, as on Contact.
- **Form:** still `section#contact > form#contactForm` with `#successModal` and `#modalCloseBtn`, so `contact.css` and `contact.js` (the validator, its checkbox branch and the native-post fallback) apply unchanged.
  - Fields are grouped in three wrappers: `.report-col--identity` (name, email) · `.report-col--context` (reason, page, theme, browser, device) · `.report-col--details` (message). Then consent and `#footerActions`, full width.
  - Inside the wrappers, Contact's grid placements (`#field-message`, `.form-row`) no longer apply, because those elements aren't grid items. No Contact rule is overridden by copy.
- **Stacking, all in `report.css`, at higher specificity (`#contact .report-form`):**

  | Width | Layout |
  |---|---|
  | < 768 | One column: identity → context → details → consent → actions (Contact's phone stack) |
  | 768–1023 | Two columns: identity and context in column 1, details in column 2 spanning both rows, textarea `flex:1` (Contact's tablet pattern, PR45-Q13) |
  | ≥ 1024 | Three equal columns: identity · context · details, details growing to the row height |

## 4. The selects
| Select | Options (keys) | Required |
|---|---|---|
| Reason `#reportReason` (`name=reason`) | Placeholder `report_reason_placeholder`. Then 01–07: `report_reason_content`, `_display`, `_a11y`, `_interaction`, `_security`, `_privacy`, `_other`. Values: `content` `display` `a11y` `interaction` `security` `privacy` `other` | yes |
| Page `#reportPage` (`name=page`, was a text input) | Placeholder `report_page_placeholder`. Then `nav_home`, `nav_card1_label`, `nav_card2_label`, `nav_card3_label`, `nav_card4_label`, `nav_evolution`, `nav_cta`, `legal_privacy`. Values: `home` `accreditapass` `trust-verify` `tuua-transfer` `portfolio` `about` `contact` `privacy` | yes |
| Theme `#reportTheme` | Placeholder `report_reason_placeholder` (the lock's options map). `report_theme_dark` and `report_theme_light` are added when the amendment lands (PR45-Q11); until then the select has only its placeholder | no |
| Browser `#reportBrowser` | Placeholder `report_reason_placeholder`. Then Chrome, Safari, Firefox, Edge (proper nouns, static, no key), then `report_opt_other` | no |
| Device `#reportDevice` | Placeholder `report_reason_placeholder`. Then `report_device_phone`, `_tablet`, `_computer`, `report_opt_other` | no |

- **Required fields:** as the lock proposes. Required fields carry Contact's markup asterisk. On the three optional selects, the placeholder stays selectable with `value=""`, so a choice can be undone.
- **`?reason=privacy`** still preselects reason 06 (privacy s7's link). The removed "Report it" CTA's code goes with it.
- **Page select icons (PR45-Q12):**
  - The select uses `appearance: base-select`, measured as supported in Chrome 156 and WebKit 2359. It stays a real `<select required>`, so `contact.js` and FormData are unchanged.
  - Each option holds an icon slot and a `<span data-i18n>`. The span is needed because `swapLang` sets `textContent` on the keyed element.
  - `report/main.js` clones each icon from the page's own nav overlay (`.nav__ov-icon` under `[data-nav-work]`, `[data-nav-page]` and the Home link), so no icon markup is copied.
  - Names are uppercase through CSS; there's no numbering.
  - `<button><selectedcontent>` shows the choice in the closed state.
  - The closed state is styled to match the other four selects (Contact's `.form-select` and chevron). The picker uses the tokens, with 44 px rows.
  - **Privacy has no nav icon:** its slot stays empty, to keep the text aligned. That's the gate's one choice.

## 5. Key reconciliation (report pair = the lock's 51 `report_*`; the 52nd, `contact_report_link`, sits in Contact's pair)
| | Keys |
|---|---|
| Kept (31) | `report_arc_label` `_pre` `_k` `_sub` · `report_form_head` · `report_reason_label` `_placeholder` `_content` `_display` `_a11y` `_security` `_privacy` `_other` · `report_err_reason` · `report_page_label` `_placeholder` · `report_err_page` · `report_name_label` `_placeholder` · `report_err_name` · `report_email_label` `_placeholder` · `report_err_email` · `report_msg_label` `_placeholder` · `report_err_msg` · `report_mandatory_footnote` · `report_disclaimer` · `report_submit` · `report_success_headline` `_body` |
| Removed (6) | `report_arc_post`, `report_intro_h`, `report_intro_x`, `report_intro_cta`, `report_out_h`, `report_out_x` |
| Added (20) | `report_editorial_eyebrow` `_verdict` `_lede` · `report_slide_{1,2,3}_eyebrow` `_title` `_body` (9) · `report_reason_interaction` · `report_theme_label` · `report_browser_label` · `report_device_label` · `report_device_phone` `_tablet` `_computer` · `report_opt_other` |
| Renamed | none |
| Pending (PR45-Q11) | `report_theme_dark`, `report_theme_light` (+2, on the amendment) |

- **Consent:** keys live only in the global legal set (`consent_checkbox`, `consent_link`, `consent_error`). The report pair has none.
- **Privacy:** `privacy_s7_link` is in the privacy pair (21 keys).
- **Order:** each pair is written in **page order**, not the lock's order: identity before context, so `report_name_*` comes before `report_reason_*`, and `report_opt_other` sits first at the browser select. `order.py --strict` reads 0.
- **Totals per language (projected; parity confirms at injection):**
  - From base 1,088 in 10 pairs: global 44 → 62 · Contact 29 → 30 · privacy 21 · report 51.
  - Result: **1,179 in 12 pairs**, or 1,181 with the amendment. DICTIONARIES.md follows.

## 6. Injection (both locks, as written)
- **Order:** EN, then ES; the markup fallbacks are the lock's EN.
- **Render notes:**
  - `terms_body`: the "• " lines become `<ul><li>`, and the first and last lines become paragraphs. A small `legal.js` renderer on `i18n:changed`; the text is unchanged.
  - `consent_checkbox` / `consent_link` and `privacy_s7_x` / `privacy_s7_link` go through the existing `[data-i18n-link]` helper.
  - `privacy_s8_x`: "Your privacy choices" (`legal_choices`, verbatim inside s8 in EN and ES) becomes a button that opens `#legalChoices`. This is the same helper as a button variant, with the opener's click delegated.
- **Placeholders:**
  - `{UPDATED}` = the G1 release date: "28 October 2026" / "28 de octubre de 2026" at injection, corrected in the release turn if the date moves.
  - `{CONTACT_FIELDS}` and `{REPORT_FIELDS}`: each form's field labels, verbatim from its keys, in DOM order, joined "a, b and c" / "a, b y c". The report's run name, email, category, page, theme, browser, device, details.
  - `{EXPIRES}` = the G1 release + 364 days, ISO 8601 with the Lima zone.
- **security.txt:** `.well-known/security.txt` gets the lock's four fields.
- **Form:** hidden `subject` = "Site issue report". `from_name` and botcheck are kept.
- **Heads:** /report/ `<title>` and description = `meta_static_english`. /privacy/ per PR45-Q14.
- **Tools:** one `PAGES` row each for privacy and report in `tools/parity.py` and `tools/order.py`. Data only, no tool logic.

## 7. Measurements at 390 px (EN + ES, Chrome, dark → `records/G1b/measure-390.json`)
| Measure | Pass when |
|---|---|
| `report_arc_k` in the purple `.ah__hook` (AIE-Q76) | one line; no overflow (`scrollWidth ≤ clientWidth`, right edge inside the gutter); fitted font size recorded beside Contact's hook at 390 |
| `report_msg_label` (AIE-Q75) | no overflow; line count recorded |
| `report_msg_placeholder` (AIE-Q75) | a mirror of the textarea (same width, font, padding) holds the placeholder within its `clientHeight`, so nothing is clipped; line count recorded |
| Targets | every select, checkbox, carousel arrow and the submit ≥ 24 × 24 px |

## 8. Order of work after acceptance, and budgets
1. Log the rulings, backlog lines and the amendment request; save this delta as `closing/PR45-run/PLAN-PR45-DELTA-v1_2.md`.
2. Rebuild G1b's chassis (§1–§4); update the report `README` and the folder READMEs this touches.
3. Inject LEGAL EN → ES, then REPORT EN → ES, plus Contact's line (§6).
4. Add the PAGES rows. Parity, links, orphans and `order.py --strict` to failures 0. Inspect gate mode on the 9 pages, Chrome 390/1440 dark, EN + ES. Then the behavior script and the 390 measurements.
5. Commits, one per item: sole author jdsaire, no trailers. G1: legal row and overlays · privacy · security.txt · consent. G1b: report page · Contact line · dictionary docs.
6. **G1 report** → `APPROVED PR45 G1` (the release turn fixes `{UPDATED}`/`{EXPIRES}` if the date moved) → **G1b report** → `APPROVED PR45 G1b`. The G1b report needs the amendment (PR45-Q11); without it, it reports the 2 keys as owed and waits.

| Span | Budget |
|---|---|
| Acceptance → G1 report (includes the G1b rebuild, since G1's checks read the report pair) | High · 60 min |
| G1 release → G1b report (amendment injection + delta checks) | Low · 15 min |
| Any single check | stops and reports at 10 min |

RESUME-PR45 is updated at each stop.

## 9. Never submit
- **Network block:** Playwright with `ctx.route('**/api.web3forms.com/**', r => r.abort())`, registered before any page loads.
- **Paths tested:**
  - Each form blocked by its empty required fields and its unticked consent.
  - Optional selects that stay empty don't block.
  - `?reason=privacy` preselects reason 06.
  - The carousel: arrows, keys, the count, the phone scroll, and that `report:ui` is cleared by "clear".
- **Never run:** the valid path, with every field filled and consent ticked.
- **Assert:** 0 requests to Web3Forms.
- **In the preview pane:** open, tab and type only; never press submit.

## Verification
- `tools/` four checks at failures 0. Inspect gate: console 0, failed requests 0, unresolved 0, overflow 0, axe 0, duplicate ids 0, attribution 0 on 9 pages.
- **Live review in the preview pane at 390, 768, 1024 and 1440:**
  - The hero → editorial → carousel → form sequence.
  - Three columns at ≥1024, two at 768, one at 390.
  - The page select shows the icons and the uppercase names.
- `/.well-known/security.txt` returns 200 as text/plain.
- The 390 measurements (§7) pass in EN and ES.
- The behavior record shows 0 Web3Forms requests.
