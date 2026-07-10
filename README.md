# DesignOps Portfolio — Juan Diego Saire

A single-page web portfolio for one seat: **UX Engineer / DesignOps Specialist** —
the strategist who takes digital products from feasible to shipped.

This site is both the argument and the evidence. It makes the case for hiring one
operator who reads the code, runs the repo, and directs the build — and it does so
on an operating layer that operator designed, built, and governs end to end.

## What this is

A focused employability variant of the JDigital portfolio, narrowed to a single
DesignOps hiring argument. Every section is built to land that argument fast:

- A **3-second** read: the headline states the problem (products stall between
  strategy and launch) and the resolution (I take them from feasible to shipped).
- A **10-second** read: three proven builds, three mandates, and a track record
  in hard numbers — enough for a hiring manager to qualify the fit before scrolling.

## Goal

Demonstrate fit for a design organization scaling one system across many markets —
turning a shared standard into something local teams can actually run, day to day.
The copy demonstrates capability through proof, never through superlatives.

## Features

- **Design system, governed end to end** — global tokens (color, typography,
  spacing), reusable organisms, and a custom EN/ES internationalization engine,
  hand-written in native HTML/CSS/JS.
- **Bilingual engine (SwapLang)** — `data-i18n` driven, fetch-on-demand dictionaries.
- **Accessibility** — WCAG AA target: keyboard navigation, focus states, image
  alt text, `prefers-reduced-motion` support, and contrast-checked brand purple.
- **Responsive** — verified at mobile (375px), tablet (768px), and desktop (1440px).
- **Zero frameworks** — vanilla HTML/CSS/JS, deployed on GitHub Pages.

## Structure

Organized per organism, split between shared (used across sections) and home
(page-specific) concerns — a layout that carries forward as the site grows past
a single page:

```
index.html                       # single-page document
assets/
  css/
    base/                        # reset + global design tokens
    shared/                      # nav, footer, bridge, ticker, section extras
    home/                        # hero, work, capabilities, evolution, contact
  js/
    core/i18n.js                 # EN/ES dictionary engine
    home/                        # per-section behavior modules (ES modules)
    main.js                      # module entry point, wires up each section
  i18n/                          # en.json / es.json dictionaries
  img/                           # bridge, work, and institution-logo assets
logos/                           # brand mark placeholder
work/                            # reserved for upcoming case-study pages
docs/                            # planning briefs and execution notes
.github/workflows/               # CI workflow (not the active Pages deploy path)
```

## Sections

Hero · Bridge · Work · Capabilities · Evolution · Track Record · Contact

## Local preview

No build step, but the JS is loaded as ES modules, which browsers only execute
over `http(s)://` (not `file://`). Serve the repo root with any static server:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Deployment

GitHub Pages serves this repository directly from the `main` branch root — no
build step, no Actions deploy required. Pushing to `main` publishes immediately.
The `.nojekyll` file at the repo root disables Jekyll so all assets are served
verbatim.

## Author

Juan Diego Saire — DesignOps. [LinkedIn](https://linkedin.com/in/jdsaire/)
