/* home/hero.js — HERO S3 sequenced build (O-1).
   The track-record stat count-up left with its organism for about/stats.js (S10C).

   O-1: the hero entrance is a spec-capability-03 sequenced timeline built
   with the Web Animations API (transform + opacity only, per-element
   delay). The static end-state is the resting hero (hero.css sets the
   elements to opacity:1), so with no JS or under reduced motion the hero
   simply renders — the sequence is a re-run, not a requirement. */
function init() {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── S3 hero build ── */
  (function heroBuild() {
    var left = document.querySelector('.hero__left');
    if (!left || prefersReducedMotion) return;
    var h1 = Array.prototype.slice.call(left.querySelectorAll('.hero__h1'))
      .filter(function (el) { return el.offsetParent !== null; })[0];
    var meta = left.querySelector('.hero__meta');
    var cta = left.querySelector('.cta');
    var seq = [h1, meta, cta].filter(Boolean);
    if (!seq.length || typeof seq[0].animate !== 'function') return;
    seq.forEach(function (el, i) {
      el.animate(
        [
          { opacity: 0, transform: 'translateY(1.125rem)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 700, delay: 120 + i * 120, easing: 'cubic-bezier(0, 0, 0.2, 1)', fill: 'backwards' }
      );
    });
  })();
}

export { init };
