/* core/progress.js — shared scroll-progress bar (P-5).
   Promoted site-wide from Brief 01. Compositor-only scaleX; tracks scroll
   position 1:1 and reverses on upscroll. Decorative (the bar is
   aria-hidden). Idempotent no-op when the bar markup is absent.

   Home loads this through its module graph (main.js import). Each brief
   loads it with a one-line inline module bootstrap, resolving the shared
   file at the same depth-2 ../../ path their i18n loader already uses. */
function init() {
  var fill = document.getElementById('progressFill');
  if (!fill) return;
  function update() {
    var doc = document.documentElement;
    var max = Math.max(1, doc.scrollHeight - window.innerHeight);
    var p = Math.min(1, Math.max(0, window.scrollY / max));
    fill.style.transform = 'scaleX(' + p + ')';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

export { init };
