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

/* COUNT (exception X-3): About's track-record figures. The real figure stays in the text, and in the accessibility
   tree, at opacity 0 while an aria-hidden runner counts over it for --duration-count; the runner is aligned and set
   like the figure, ends on the figure's own text and is removed. Nothing in the layout moves. */
function count(el) {
  const fin0 = el.querySelector('.deco-count-final'); if (fin0) el.textContent = fin0.textContent;   /* a replay starts clean */
  const final = el.textContent.trim(), m = final.match(/^([\d.,\s]+)(.*)$/);
  if (!motion || !m) return noop;
  const digits = m[1].trim(), suffix = m[2], sep = (digits.match(/[.,\s](?=\d{3}\b)/) || [''])[0];
  const target = parseInt(digits.replace(/[^\d]/g, ''), 10); if (!target) return noop;
  const fmt = n => { const t = String(n); return sep ? t.replace(/\B(?=(\d{3})+(?!\d))/g, sep) : t; };
  const dur = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--duration-count')) || 1200;
  el.textContent = ''; el.classList.add('deco-count');
  const fin = document.createElement('span'); fin.className = 'deco-count-final'; fin.textContent = final;
  const runner = document.createElement('span'); runner.className = 'deco-count-run'; runner.setAttribute('aria-hidden', 'true'); runner.textContent = '0' + suffix;
  el.append(fin, runner);
  return () => {
    let t0 = null;
    const step = ts => {
      if (t0 === null) t0 = ts;
      const p = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      if (p < 1) { runner.textContent = fmt(Math.round(target * e)) + suffix; requestAnimationFrame(step); }
      else { runner.remove(); el.classList.remove('deco-count'); }
    };
    requestAnimationFrame(step);
  };
}

let started = false;
function init() {
  if (started) return; started = true;
  const h = document.documentElement;
  if (!motion) { h.classList.add('deco-ready'); return; }
  /* 44 eyebrow bars and 7 closing bars across the site */
  document.querySelectorAll('.section__eyebrow-bar').forEach(bar => { if (shown(bar)) when(bar.parentElement, sig(bar)); });
  h.classList.add('deco-ready');
  /* About's track record: the figures shown (evolution.css hides the fifth) */
  document.querySelectorAll('.track-record__stats .stat__number').forEach(el => { if (shown(el) && !onScreen(el)) when(el, count(el)); });
}

export { init, motion, sig, count };
