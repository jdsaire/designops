/* about/stats.js — TRACK RECORD stat count-up.
   Relocated from home/hero.js with the Track Record organism (S10C).
   Each .stat__number counts from zero to its data-target once it scrolls
   into view; under reduced motion, or without IntersectionObserver, the
   final figure renders at once. */
function init() {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
