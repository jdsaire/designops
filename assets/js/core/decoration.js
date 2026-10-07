/* core/decoration.js — the decoration system's script (docs/v3/organisms/decoration-system.spec.md, PR #35).
   Every pattern has two steps: arm() sets its pre-state, only when motion is allowed, and returns play(), which runs
   it once. Pages play each one from the trigger below; the specimen plays them from its Replay buttons.
   Without motion (reduced motion, no IntersectionObserver) nothing is armed: the final frame is the only frame.
   One-shots play when their component's top edge reaches 60 % of the viewport height, or when the component is fully
   in view where the page cannot scroll that far (its end). A component already on screen when the script runs keeps
   its final frame (no restart, no flash); only the eyebrow bars, armed before first paint, draw as the page opens.
   Every pattern draws a bar, an edge, a fill or a line; none touches the words. */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motion = !reduce && 'IntersectionObserver' in window;
const noop = () => {};
const shown = el => el.getClientRects().length > 0;
const onScreen = el => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight && r.width > 0; };
const frame = fn => requestAnimationFrame(() => requestAnimationFrame(fn));
/* Pre-states are set without a transition, so nothing visibly empties when it is armed. */
function preset(els) {
  els.forEach(e => e.classList.add('deco-instant', 'deco-pre'));
  if (els[0]) void getComputedStyle(els[0]).opacity;   /* flushes style, SVG included */
  els.forEach(e => e.classList.remove('deco-instant'));
}

/* The trigger. */
function when(el, fn) {
  let done = false;
  const go = () => { if (done) return; done = true; a.disconnect(); b.disconnect(); fn(); };
  const a = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) go(); }), { rootMargin: '0px 0px -40% 0px' });
  const b = new IntersectionObserver(es => es.forEach(e => {
    if (e.intersectionRatio < 0.99) return;
    const top = e.boundingClientRect.top, line = innerHeight * 0.6, room = document.documentElement.scrollHeight - innerHeight - window.scrollY;
    if (top <= line || room < top - line) go();
  }), { threshold: [0.99] });
  a.observe(el); b.observe(el);
}

/* SIGNATURE + CLOSING BAR: the bar draws once from the left. */
function sig(bar) {
  if (!motion) return noop;
  bar.classList.add('deco-sig'); preset([bar]);
  return () => frame(() => bar.classList.remove('deco-pre'));
}

/* RUN (+ EMPHASISE): one pass in reading order, --stagger-run apart, each item held --hold-run; a long pass
   shortens its step so it lets go of its last item by 1.2 s. As the pass lands on the key item, that item's edge
   swells. */
function run(items, key, before) {
  items = items.filter(shown);
  if (!motion || items.length < 2) return noop;
  const css = getComputedStyle(document.documentElement);
  const tok = (n, fb) => parseFloat(css.getPropertyValue(n)) || fb;
  const DUR = tok('--duration-deco', 500), RSTEP = tok('--stagger-run', 140), RHOLD = tok('--hold-run', 360);
  items.forEach(it => {
    it.classList.add('deco-run-item'); if (before) it.classList.add('deco-run--before');
    if (getComputedStyle(it).position === 'static') it.classList.add('deco-run-host');
  });
  const step = Math.min(RSTEP, (1200 - RHOLD) / (items.length - 1));
  return () => items.forEach((it, i) => {
    const isKey = it === key, hold = isKey ? DUR : RHOLD;
    setTimeout(() => { it.classList.add('deco-lit'); if (isKey) it.classList.add('deco-emph'); }, i * step);
    setTimeout(() => it.classList.remove('deco-lit'), i * step + hold);
    if (isKey) setTimeout(() => it.classList.remove('deco-emph'), i * step + DUR + 50);
  });
}

const clock = () => { const css = getComputedStyle(document.documentElement), t = (n, fb) => parseFloat(css.getPropertyValue(n)) || fb;
  return { DUR: t('--duration-deco', 500), STAG: t('--stagger-deco', 80) }; };
/* a sequence's staggers add up to 700 ms at most */
const stagger = (n, s) => (n > 1 ? Math.min(s, 700 / (n - 1)) : 0);

/* GROW (+ RELATE): Gantt fills grow from their start in schedule order; each dependency line starts as the bar it
   leaves finishes growing (what had to finish first) and reveals along its direction through a mask, keeping its
   dash; its arrowhead appears as the line arrives. At the end the chart returns to its own markup. */
function grow(chart) {
  if (!motion) return noop;
  const { DUR, STAG } = clock();
  const bars = [...chart.querySelectorAll('.gantt__bar')].filter(x => x.offsetParent !== null);
  if (!bars.length) return noop;
  const s = stagger(bars.length, STAG);
  bars.forEach((bar, i) => {
    if (!bar.classList.contains('deco-grow-bar')) bar.style.setProperty('--deco-fill', getComputedStyle(bar).backgroundColor);
    bar.classList.add('deco-grow-bar', 'deco-pre'); bar.style.setProperty('--deco-delay', Math.round(i * s) + 'ms');
  });
  const svg = chart.querySelector('.gantt__overlay');
  const paths = svg ? [...svg.querySelectorAll('path:not(.deco-relate-mask)')] : [];
  const heads = svg ? [...svg.querySelectorAll('.gantt__dep-head')] : [];
  if (paths.length) {
    const NS = 'http://www.w3.org/2000/svg';
    let defs = svg.querySelector('defs.deco-defs'); if (defs) defs.remove();
    defs = document.createElementNS(NS, 'defs'); defs.setAttribute('class', 'deco-defs'); svg.insertBefore(defs, svg.firstChild);
    paths.forEach((p, i) => {
      const id = 'deco-m-' + Math.random().toString(36).slice(2, 8), m = document.createElementNS(NS, 'mask'), q = document.createElementNS(NS, 'path');
      m.setAttribute('id', id); m.setAttribute('maskUnits', 'userSpaceOnUse');
      q.setAttribute('d', p.getAttribute('d')); q.setAttribute('class', 'deco-relate-mask'); q.setAttribute('pathLength', '1');
      q.setAttribute('fill', 'none'); q.setAttribute('stroke', '#fff'); q.setAttribute('stroke-width', '8');
      q.style.strokeDasharray = '1 1'; q.style.strokeDashoffset = '1';
      m.appendChild(q); defs.appendChild(m); p.setAttribute('mask', 'url(#' + id + ')');
      if (heads[i]) { heads[i].classList.add('deco-relate-head'); preset([heads[i]]); }
    });
  }
  return () => {
    frame(() => bars.forEach(b => b.classList.remove('deco-pre')));
    const box = svg ? svg.getBoundingClientRect() : null, ends = [0];
    paths.forEach((p, i) => {
      const y0 = parseFloat((p.getAttribute('d').match(/^M\s*[\d.]+[ ,]+([\d.]+)/) || [0, 0])[1]);
      let src = 0, best = 1e9;
      bars.forEach((b, j) => { const r = b.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - box.top - y0); if (d < best) { best = d; src = j; } });
      const t = src * s + DUR, mk = p.getAttribute('mask'), m = mk && svg.querySelector(mk.slice(4, -1));
      if (m) { m.firstChild.style.transitionDelay = t + 'ms'; frame(() => { m.firstChild.style.strokeDashoffset = '0'; }); }
      if (heads[i]) { heads[i].style.setProperty('--deco-delay', Math.round(t + DUR * 0.85) + 'ms'); frame(() => heads[i].classList.remove('deco-pre')); }
      ends.push(t + DUR);
    });
    setTimeout(() => {
      bars.forEach(b => { b.classList.remove('deco-grow-bar'); b.style.removeProperty('--deco-fill'); b.style.removeProperty('--deco-delay'); });
      paths.forEach(p => p.removeAttribute('mask'));
      heads.forEach(x => { x.classList.remove('deco-relate-head'); x.style.removeProperty('--deco-delay'); });
      const d = svg && svg.querySelector('defs.deco-defs'); if (d) d.remove();
    }, Math.max((bars.length - 1) * s + DUR, ...ends) + 80);
  };
}

/* GROW · meter: dashboard meters fill to their value once. */
function meter(meters) {
  meters = meters.filter(shown);
  if (!motion || !meters.length) return noop;
  const { DUR, STAG } = clock(), s = stagger(meters.length, STAG);
  meters.forEach(m => m.classList.add('deco-meter'));
  preset(meters); meters.forEach((m, i) => m.style.setProperty('--deco-delay', Math.round(i * s) + 'ms'));
  return () => {
    frame(() => meters.forEach(m => m.classList.remove('deco-pre')));
    setTimeout(() => meters.forEach(m => m.style.removeProperty('--deco-delay')), (meters.length - 1) * s + DUR + 60);
  };
}

/* The Gantt organism draws its bars from data and redraws them on resize and language changes, so a chart is
   re-armed until it plays. */
function gantt(chart) {
  if (chart.dataset.deco) return;
  if (onScreen(chart)) { chart.dataset.deco = 'final'; return; }
  chart.dataset.deco = 'pending';
  let play = grow(chart);
  if (play === noop) { chart.dataset.deco = 'final'; return; }
  const mo = new MutationObserver(() => { mo.disconnect(); play = grow(chart); mo.observe(chart, { childList: true, subtree: true }); });
  mo.observe(chart, { childList: true, subtree: true });
  when(chart, () => { mo.disconnect(); chart.dataset.deco = 'played'; play(); });
}

let started = false;
function init() {
  if (started) return; started = true;
  const h = document.documentElement;
  if (!motion) { h.classList.add('deco-ready'); return; }
  /* 44 eyebrow bars and 7 closing bars across the site */
  document.querySelectorAll('.section__eyebrow-bar').forEach(bar => { if (shown(bar)) when(bar.parentElement, sig(bar)); });
  h.classList.add('deco-ready');
  const kids = c => [...c.children];
  /* RUN: timelines (a swipe track keeps its items off screen, so it is skipped: Brief 02 below 1024), ladders,
     Brief 03's journey (the missing channel is its key) and relays (one pass across the hand-off baton) */
  document.querySelectorAll('.timeline__track').forEach(c => { if (c.scrollWidth <= c.clientWidth + 4 && !onScreen(c)) when(c, run(kids(c))); });
  document.querySelectorAll('.ladder-down').forEach(c => { if (!onScreen(c)) when(c, run(kids(c))); });
  document.querySelectorAll('.journey__steps').forEach(c => { if (!onScreen(c)) when(c, run(kids(c), c.querySelector('.journey__step--key'), true)); });
  document.querySelectorAll('.relay').forEach(r => { if (!onScreen(r)) when(r, run([...r.querySelectorAll('.relay__node, .relay__baton span')], r.querySelector('.relay__baton span'))); });
  /* GROW + RELATE: the briefs' roadmaps; GROW · meter: Brief 02's dashboard */
  const scan = () => document.querySelectorAll('.gantt__chart').forEach(gantt);
  scan(); window.addEventListener('load', scan);
  document.querySelectorAll('.dash').forEach(dash => {
    const ms = [...dash.querySelectorAll('.dcell__bar i')];
    if (ms.length && !onScreen(dash)) when(ms[0].closest('.band') || dash, meter(ms));
  });
}

export { init, motion, sig, run, grow, meter };
