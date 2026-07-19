/* home/ticker.js — TICKER MARQUEE.
   Clone-to-fill seamless marquee for the standalone #ticker organism.
   Per lane: clone the single base .ticker__group enough times that
   the track always exceeds its container + one group, then shift by
   exactly one base-group width (integer px) so the loop seam is
   invisible at every breakpoint. translate3d keeps it on the GPU. */
function init() {
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');
  const lanes = document.querySelectorAll('.ticker__band');
  if (!lanes.length) return;

  function buildLane(band) {
    const track = band.querySelector('.ticker__track');
    const base = track && track.querySelector('.ticker__group');
    if (!track || !base) return;

    // Idempotent: strip any clones from a previous build (e.g. resize).
    track.querySelectorAll('.ticker__group:not(:first-child)').forEach((n) => n.remove());

    const baseW = base.getBoundingClientRect().width;
    const contW = band.getBoundingClientRect().width;
    if (baseW === 0) return;

    // Enough copies that the track always exceeds container + one group.
    const copies = Math.max(2, Math.ceil(contW / baseW) + 1);
    for (let i = 1; i < copies; i++) {
      const clone = base.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('img').forEach((img) => img.setAttribute('alt', ''));
      track.appendChild(clone);
    }

    // Shift by exactly one base-group width — integer px = invisible loop.
    const shift = Math.round(baseW);
    track.style.setProperty('--ticker-shift', shift + 'px');

    // Constant px/sec across breakpoints.
    const SPEED = 60; // pixels per second
    track.style.setProperty('--ticker-duration', (shift / SPEED).toFixed(2) + 's');
  }

  function buildAll() {
    if (REDUCED.matches) return;
    lanes.forEach(buildLane);
  }

  // Measure only once logos have intrinsic width, else baseW reads 0.
  const imgs = Array.prototype.slice.call(document.querySelectorAll('.ticker__logo'));
  let pending = imgs.filter((i) => !i.complete).length;
  if (pending === 0) {
    buildAll();
  } else {
    imgs.forEach((i) => {
      if (i.complete) return;
      const done = () => { if (--pending === 0) buildAll(); };
      i.addEventListener('load', done, { once: true });
      i.addEventListener('error', done, { once: true });
    });
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildAll, 200);
  });

  if (REDUCED.addEventListener) {
    REDUCED.addEventListener('change', buildAll);
  }
}

export { init };
