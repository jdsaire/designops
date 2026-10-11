/* home/navcue.js — the first-visit cue on the phone menu button (PR #37: N1, PR37-Q10, Q14; plan §4).

   A phone reader lands on dark and Spanish (the defaults) and scrolls past the menu that holds the theme and language
   switches. On the first Main view in a browser, the closed menu button plays a purple ring (navcue.css, 7.2 s) so
   the reader opens it before scrolling. It stops for good on the first tap of the button, the first scroll, leaving
   the phone range, or its own end, and it never plays again on that device: the flag is set when the cue starts.

   · Main only (this module is imported by assets/js/main.js alone); phones only (≤767 px: the button exists there).
   · Never under reduced motion, and then no flag is set, because nothing played.
   · Storage: localStorage, else sessionStorage (once per session), else no cue (it could not be kept from replaying).
   · It never touches navchrome.js's open/close state; pointerdown stops it before the click opens the menu. */
const KEY = 'jds-navcue';

function storage() {
  try { localStorage.setItem(KEY + ':t', '1'); localStorage.removeItem(KEY + ':t'); return localStorage; } catch (e) {}
  try { sessionStorage.setItem(KEY + ':t', '1'); sessionStorage.removeItem(KEY + ':t'); return sessionStorage; } catch (e) {}
  return null;
}

function init() {
  const button = document.getElementById('hamburger');
  if (!button) return;
  const phone = window.matchMedia('(max-width: 767px)');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hero = document.querySelector('.hero');

  function start() {
    if (!phone.matches || reduce.matches) return;
    const store = storage();
    if (!store) return;
    try { if (store.getItem(KEY)) return; store.setItem(KEY, '1'); } catch (e) { return; }
    button.classList.add('nav__hamburger--cue');
    const stop = () => {
      button.classList.remove('nav__hamburger--cue');
      button.removeEventListener('pointerdown', stop);
      button.removeEventListener('click', stop);
      window.removeEventListener('scroll', stop);
      phone.removeEventListener('change', onPhone);
    };
    const onPhone = (e) => { if (!e.matches) stop(); };
    button.addEventListener('pointerdown', stop);
    button.addEventListener('click', stop);
    window.addEventListener('scroll', stop, { passive: true });
    phone.addEventListener('change', onPhone);
    button.addEventListener('animationend', (e) => { if (e.animationName === 'nav-cue-ring') stop(); });
  }

  /* Starts once the hero is fitted and shown (hero.js adds .hero--fit), with a 3 s cap. */
  const t0 = performance.now();
  (function wait() {
    if (!hero || hero.classList.contains('hero--fit') || performance.now() - t0 > 3000) start();
    else setTimeout(wait, 50);
  })();
}

export { init };
