/* home/evolution.js — EVOLUTION timeline tap-to-expand accordion.
   One open at a time. Keyboard accessible. All breakpoints.
   Respects prefers-reduced-motion (instant open/close). */
function init() {
  var items = document.querySelectorAll('.timeline__item');
  if (!items.length) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var toggles = [];

  function setOpen(item, open) {
    var toggle = item.querySelector('.timeline__toggle');
    var panel  = item.querySelector('.timeline__panel');
    item.classList.toggle('is-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
    if (panel) {
      if (open) {
        panel.hidden = false;
        panel.style.maxHeight = prefersReducedMotion ? 'none' : panel.scrollHeight + 'px';
      } else {
        if (prefersReducedMotion) {
          panel.style.maxHeight = '';
          panel.hidden = true;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          requestAnimationFrame(function () { panel.style.maxHeight = '0px'; });
        }
      }
    }
  }

  items.forEach(function (item) {
    var toggle = item.querySelector('.timeline__toggle');
    var panel  = item.querySelector('.timeline__panel');
    if (!toggle || !panel) return;
    toggles.push(item);

    panel.hidden = true;
    panel.style.maxHeight = '0px';
    toggle.setAttribute('aria-expanded', 'false');

    if (!prefersReducedMotion) {
      panel.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'max-height' && !item.classList.contains('is-open')) {
          panel.hidden = true;
        }
      });
    }

    toggle.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      toggles.forEach(function (other) { if (other !== item) setOpen(other, false); });
      setOpen(item, willOpen);
    });
  });
}

export { init };
