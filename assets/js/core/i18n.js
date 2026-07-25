/* core/i18n.js — i18n engine.
   Dictionaries are loaded asynchronously from assets/i18n/{lang}.json
   on first use of each language; subsequent calls hit the cache.
   swapLang(lang)'s public signature is unchanged — callers
   fire-and-forget. The HTML's default English markup is the
   render fallback during the brief async fetch window. */
import { rootPrefix } from './paths.js';

const i18nDicts   = { EN: null, ES: null };
const i18nLoading = { EN: null, ES: null };
let   i18nCurrent = 'EN';

function loadDict(lang) {
  if (i18nDicts[lang])   return Promise.resolve(i18nDicts[lang]);
  if (i18nLoading[lang]) return i18nLoading[lang];
  const file = lang === 'ES' ? 'es.json' : 'en.json';
  i18nLoading[lang] = fetch(rootPrefix + 'assets/i18n/' + file)
    .then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
    .then(dict => { i18nDicts[lang] = dict; return dict; })
    .catch(err => { console.warn('i18n fetch failed for ' + lang + ':', err); return null; });
  return i18nLoading[lang];
}

function swapLang(lang) {
  i18nCurrent = lang;
  try { localStorage.setItem('jds-lang', lang); } catch (e) {}
  loadDict(lang).then(dict => {
    if (!dict || i18nCurrent !== lang) return;
    document.documentElement.setAttribute('lang', lang === 'ES' ? 'es' : 'en');
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    /* aria-label swap for CTA anchor */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    /* placeholder swap for form inputs/textarea */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    /* alt swap for images */
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.dataset.i18nAlt;
      if (dict[key] !== undefined) el.alt = dict[key];
    });

    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang, dict } }));
  });
}

function init() {
  let initialLang = 'ES';
  try { initialLang = localStorage.getItem('jds-lang') || 'ES'; } catch (e) {}
  swapLang(initialLang);
  const langLabel = document.getElementById('langLabel');
  const langPanel = document.getElementById('langPanel');
  if (langLabel) langLabel.textContent = initialLang;
  langPanel.querySelectorAll('.nav__lang-option').forEach(b => {
    b.classList.toggle('nav__lang-option--active', b.dataset.lang === initialLang);
    b.setAttribute('aria-selected', String(b.dataset.lang === initialLang));
  });
}

export { loadDict, swapLang, init };
