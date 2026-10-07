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

let started = false;
function init() {
  if (started) return; started = true;
  const h = document.documentElement;
  if (!motion) { h.classList.add('deco-ready'); return; }
  /* 44 eyebrow bars and 7 closing bars across the site */
  document.querySelectorAll('.section__eyebrow-bar').forEach(bar => { if (shown(bar)) when(bar.parentElement, sig(bar)); });
  h.classList.add('deco-ready');
}

export { init, motion, sig };
