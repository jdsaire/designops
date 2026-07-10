/* home/nav.js — NAV scroll hide/show + language selector (globe + panel). */
import { swapLang } from '../core/i18n.js';

function init() {
  const nav = document.getElementById('navbar');
  let lastScroll = 0, ticking = false;
  function onScroll() {
    const cur = window.scrollY;
    nav.classList.toggle('nav--hidden', cur > lastScroll && cur > 80);
    lastScroll = cur; ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });

  const langSelector = document.getElementById('langSelector');
  const langPanel = document.getElementById('langPanel');
  const langLabel = document.getElementById('langLabel');

  document.getElementById('langBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    langSelector.classList.toggle('nav__lang--panel-open');
  });
  document.addEventListener('click', () => langSelector.classList.remove('nav__lang--panel-open'));
  langPanel.addEventListener('click', e => e.stopPropagation());

  langPanel.querySelectorAll('.nav__lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      /* Update active state in panel */
      langPanel.querySelectorAll('.nav__lang-option').forEach(b => {
        b.classList.toggle('nav__lang-option--active', b === btn);
        b.setAttribute('aria-selected', String(b === btn));
      });
      langLabel.textContent = lang;
      langSelector.classList.remove('nav__lang--panel-open');
      /* Fire i18n swap */
      swapLang(lang);
    });
  });
}

export { init };
