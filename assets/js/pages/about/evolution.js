/* pages/about/evolution.js — the about/ journey sequence.

   Disclosure: one merged body per item behind one control, one open at a
   time. That behaviour is inherited unchanged from the EVOLUTION accordion
   this organism extends; what is gone is the nested "go deeper" reveal,
   whose content is merged into the single body.

   Reading position: the item nearest a line at 38% of the viewport is
   current, items above it are past, and the rail fills from the first
   visible item to the current one. It is recomputed on scroll and on
   focusin, so the keyboard path advances the component exactly as
   scrolling does, and at the end of the document the last visible item is
   current unconditionally — otherwise the terminus is never reached.

   Reduced motion: no transitions, and an open panel's height is released
   rather than animated. */
function init() {
  var seq = document.getElementById('jr-sequence');
  if (!seq) return;
  var items = Array.prototype.slice.call(seq.querySelectorAll('.timeline__item'));
  if (!items.length) return;

  var fill = document.querySelector('.jr-fill');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var openItem = null;
  var current = null;
  var ticking = 0;

  function visible() {
    return items.filter(function (n) { return !n.hidden; });
  }

  /* ---- disclosure ---------------------------------------------------- */

  function setOpen(item, open) {
    var toggle = item.querySelector('.timeline__toggle');
    var panel = item.querySelector('.timeline__panel');
    item.classList.toggle('is-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
    if (!panel) return;
    if (open) {
      panel.hidden = false;
      panel.style.maxHeight = prefersReducedMotion ? 'none' : panel.scrollHeight + 'px';
    } else if (prefersReducedMotion) {
      panel.style.maxHeight = '';
      panel.hidden = true;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      requestAnimationFrame(function () { panel.style.maxHeight = '0px'; });
    }
  }

  function closeOpen() {
    if (openItem) { setOpen(openItem, false); openItem = null; }
  }

  items.forEach(function (item) {
    var toggle = item.querySelector('.timeline__toggle');
    var panel = item.querySelector('.timeline__panel');
    if (!toggle || !panel) return;

    panel.hidden = true;
    panel.style.maxHeight = '0px';
    toggle.setAttribute('aria-expanded', 'false');

    if (!prefersReducedMotion) {
      panel.addEventListener('transitionend', function (e) {
        if (e.propertyName !== 'max-height') return;
        if (!item.classList.contains('is-open')) panel.hidden = true;
        /* release the clamp so a long body is never clipped */
        else panel.style.maxHeight = 'none';
      });
    }

    toggle.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      if (openItem && openItem !== item) setOpen(openItem, false);
      setOpen(item, willOpen);
      openItem = willOpen ? item : null;
      paint(item);
    });
  });

  /* ---- reading position ---------------------------------------------- */

  function paint(el) {
    if (!el || el === current) return;
    current = el;
    var v = visible();
    var i = v.indexOf(el);
    v.forEach(function (n, j) {
      n.classList.toggle('is-current', j === i);
      n.classList.toggle('is-past', j < i);
    });
    if (fill && v.length && i > -1) {
      var top = v[0].offsetTop;
      var bottom = el.offsetTop + el.offsetHeight;
      fill.style.height = Math.max(0, bottom - top) + 'px';
    }
  }

  function advance() {
    var v = visible();
    if (!v.length) return;
    /* A focused item wins over the reading line. Moving focus scrolls the item
       into view, and that scroll would otherwise repaint to whatever sits at
       the line — leaving the keyboard path pointing at an item the reader is
       not on. */
    var active = document.activeElement;
    var focused = active && active.closest ? active.closest('.timeline__item') : null;
    if (focused && seq.contains(focused) && !focused.hidden) {
      var fr = focused.getBoundingClientRect();
      if (fr.bottom > 0 && fr.top < window.innerHeight) { paint(focused); return; }
    }
    var atEnd = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 2);
    if (atEnd) { paint(v[v.length - 1]); return; }
    var line = window.innerHeight * 0.38;
    var best = null;
    var bestDistance = Infinity;
    v.forEach(function (n) {
      var r = n.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      var d = Math.abs(r.top - line);
      if (d < bestDistance) { bestDistance = d; best = n; }
    });
    if (best) paint(best);
  }

  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = requestAnimationFrame(function () { ticking = 0; advance(); });
  }, { passive: true });

  window.addEventListener('resize', advance, { passive: true });

  document.addEventListener('focusin', function (e) {
    var item = e.target.closest ? e.target.closest('.timeline__item') : null;
    if (item && !item.hidden && seq.contains(item)) paint(item);
  });

  paint(visible()[0]);
  advance();
}

export { init };
