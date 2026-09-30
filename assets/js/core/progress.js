/* core/progress.js — shared scroll-progress bar (P-5).
   Promoted site-wide from Brief 01. Compositor-only scaleX; tracks scroll
   position 1:1 and reverses on upscroll. Decorative (the bar is
   aria-hidden). Idempotent no-op when the bar markup is absent.

   Home loads this through its module graph (main.js import). Each brief
   loads it with a one-line inline module bootstrap, resolving the shared
   file at the same depth-2 ../../ path their i18n loader already uses.

   W1 also parks the section-header reveal guard here, because this is the
   one module every page loads and the guard is scroll-driven like the bar.
   The headers' entrance is the scroll-driven sectionRise animation in
   shared/section-extras.css. That animation fills BOTH ends of its range, so
   whenever its view() timeline stops advancing — reported in the field as
   editorial text dissipating after interacting with an organism, and cured
   only by a reload — the header is left painted at the animation's opening
   frame, which is opacity 0. The guard marks a header as revealed the moment
   it is fully on screen; the CSS then drops the animation and pins the
   resting state, so a stalled timeline can no longer hide anything.

   The case briefs carry the same scroll-driven entrance on every .io block
   (io-rise, filling both ends of a view() range), and the same stall left
   their text and buttons invisible after a scroll or an idle tab, until a
   reload. The guard covers those blocks too. A brief's block is pinned from
   here rather than from each brief's CSS: the guard drops the animation
   inline and keeps the block's own .is-in resting state, so no brief file
   has to change for the fix to reach it. */
function revealGuard() {
  var headers = document.querySelectorAll(
    '.work__header, .capabilities__header, .evolution__header, .track-record__header, .io'
  );
  if (!headers.length) return;
  function pin(el) {
    el.classList.add('is-revealed');
    if (el.classList.contains('io')) {
      el.classList.add('is-in');
      el.style.animation = 'none';
    }
  }
  if (typeof IntersectionObserver !== 'function') {
    Array.prototype.forEach.call(headers, pin);
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      /* Fully on screen, OR taller than the viewport and covering most of it:
         a header longer than the screen can never reach a ratio of 0.99, and
         without the second test it would never be pinned at all. */
      var root = e.rootBounds;
      var tall = root && e.isIntersecting && e.intersectionRect.height >= root.height * 0.6;
      if (e.intersectionRatio < 0.99 && !tall) return;
      pin(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: [0, 0.25, 0.5, 0.75, 0.99] });
  Array.prototype.forEach.call(headers, function (el) { io.observe(el); });
}

function init() {
  revealGuard();
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
