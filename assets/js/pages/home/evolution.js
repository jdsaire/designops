/* home/evolution.js — EVOLUTION timeline tap-to-expand accordion.
   One open at a time. Keyboard accessible. All breakpoints.
   Respects prefers-reduced-motion (instant open/close).

   O-2: each milestone panel may also carry a nested reveal ("go deeper")
   using the briefs' aria-expanded rv pattern. When a nested reveal opens
   it grows the milestone panel, so once a panel is fully open its
   max-height is released to `none` and re-measured when a nested reveal
   toggles — otherwise the animated clamp would clip the revealed text. */
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
        /* collapse any nested reveal so the panel reopens clean */
        closeReveal(item);
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

  /* Release the clamp once the open transition finishes, so a nested
     reveal can expand the panel freely. */
  function releaseClamp(item, panel) {
    if (item.classList.contains('is-open')) panel.style.maxHeight = 'none';
  }

  function closeReveal(item) {
    var rvBtn = item.querySelector('.timeline__rv-btn');
    var rvPanel = item.querySelector('.timeline__rv-panel');
    if (!rvBtn || !rvPanel) return;
    rvBtn.setAttribute('aria-expanded', 'false');
    rvPanel.hidden = true;
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
        if (e.propertyName !== 'max-height') return;
        if (!item.classList.contains('is-open')) panel.hidden = true;
        else releaseClamp(item, panel);
      });
    }

    toggle.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      toggles.forEach(function (other) { if (other !== item) setOpen(other, false); });
      setOpen(item, willOpen);
    });

    /* O-2 nested reveal */
    var rvBtn = item.querySelector('.timeline__rv-btn');
    var rvPanel = item.querySelector('.timeline__rv-panel');
    if (rvBtn && rvPanel) {
      rvPanel.hidden = true;
      rvBtn.setAttribute('aria-expanded', 'false');
      rvBtn.addEventListener('click', function () {
        var willOpen = rvBtn.getAttribute('aria-expanded') !== 'true';
        rvBtn.setAttribute('aria-expanded', String(willOpen));
        rvPanel.hidden = !willOpen;
        /* the milestone panel just changed height — let it grow/shrink */
        if (item.classList.contains('is-open') && !prefersReducedMotion) {
          panel.style.maxHeight = 'none';
        }
      });
    }
  });
}

export { init };
