/* home/hero.js — HERO S3 sequenced build (O-1) + track-record stat count-up.

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
    var badge = left.querySelector('.hero__badge');
    var h1 = Array.prototype.slice.call(left.querySelectorAll('.hero__h1'))
      .filter(function (el) { return el.offsetParent !== null; })[0];
    var cta = left.querySelector('.cta');
    var seq = [badge, h1, cta].filter(Boolean);
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

  /* ── track-record stat count-up ── */
  var counters = document.querySelectorAll('.stat__number[data-target]');
  function renderFinal(el) {
    el.textContent = parseInt(el.dataset.target, 10).toLocaleString() + (el.dataset.suffix || '');
  }
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    counters.forEach(renderFinal);
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const steps = 40, interval = 1200 / steps;
        let step = 0;
        const t = setInterval(() => {
          step++;
          el.textContent = Math.round(target * (step / steps)).toLocaleString() + suffix;
          if (step >= steps) { clearInterval(t); renderFinal(el); }
        }, interval);
        obs.unobserve(el);
      });
    }, { threshold: 0.3 });
    counters.forEach(el => io.observe(el));
  }
}

export { init };
