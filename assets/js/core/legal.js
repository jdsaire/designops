/* core/legal.js — the legal row's three overlays (terms, license, privacy choices), the privacy choice, sentences
   with linked words, and the terms' list (PR #45, AIE-Q26, Q62: "Report an issue" is a plain link to /report/, no
   overlay).
   Each overlay follows Contact's success modal (pages/contact/contact.js): it opens from its control in the row,
   moves focus to its close button, keeps Tab inside, closes on Escape, on the close button or on a click on the
   backdrop, and returns focus to the control that opened it.
   "Clear my saved preferences" removes the values this site keeps on the device, and nothing else, then shows the
   site's defaults: dark, Spanish (PR45-Q2). The values: localStorage jds-theme, jds-lang, jds-navcue and the
   jds-i18n:<path>:<lang> dictionary cache; sessionStorage jds-navcue and each page's carousel state (<page>:ui).
   Page entries pass their swapLang, as they do to navchrome.js; the defaults are saved again by the site the
   moment it applies them, as on a first visit. */
import { resetTheme } from './theme.js';

const LOCAL_PREFIXES   = ['jds-theme', 'jds-lang', 'jds-navcue', 'jds-i18n:'];
const SESSION_PREFIXES = ['jds-navcue'];
const SESSION_KEYS     = ['about:ui', 'b01:ui', 'b02:ui', 'b03:ui', 'b04:ui'];
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function sweep(store, test) {
  try {
    const keys = [];
    for (let i = 0; i < store.length; i++) { const k = store.key(i); if (test(k)) keys.push(k); }
    keys.forEach(k => store.removeItem(k));
  } catch (e) {}
}

function clearSaved(swapLang) {
  sweep(localStorage, k => LOCAL_PREFIXES.some(p => k.indexOf(p) === 0));
  sweep(sessionStorage, k => SESSION_KEYS.indexOf(k) !== -1 || SESSION_PREFIXES.some(p => k.indexOf(p) === 0));
  resetTheme();
  if (typeof swapLang === 'function') swapLang('ES');
}

/* A sentence with linked words, from two keys (PR #45; PR45-Q8): data-i18n-link="<sentence key>|<link key>" and
   data-href. The link key's value appears verbatim inside the sentence in each language (the forms' consent line,
   the privacy policy's rights section); it becomes the link and the rest stays text. With data-legal-target instead
   of data-href, the words become a button that opens that overlay (the policy's cookies section names "Your privacy
   choices", COPY-PR45-LEGAL-LOCK render note). Both engines announce each swap with i18n:changed and its
   dictionary. A link text missing from its sentence renders the sentence alone and warns, so the gate's console
   check shows it. */
function renderLinks(dict) {
  document.querySelectorAll('[data-i18n-link]').forEach(el => {
    const [textKey, linkKey] = el.getAttribute('data-i18n-link').split('|');
    const text = dict[textKey], words = dict[linkKey];
    if (text === undefined) return;
    const at = words ? text.indexOf(words) : -1;
    el.textContent = '';
    if (at === -1) {
      el.textContent = text;
      console.warn('legal: "' + linkKey + '" is not inside "' + textKey + '"');
      return;
    }
    const target = el.getAttribute('data-legal-target');
    const a = document.createElement(target ? 'button' : 'a');
    if (target) {
      a.type = 'button';
      a.className = 'legal__inline';
      a.setAttribute('data-legal-open', target);
      a.setAttribute('aria-haspopup', 'dialog');
    } else a.href = el.getAttribute('data-href');
    a.textContent = words;
    el.append(text.slice(0, at), a, text.slice(at + words.length));
  });
}

/* The terms (COPY-PR45-LEGAL-LOCK render note): one value whose lines starting "• " are a list. The other lines are
   paragraphs; the bullet is the list's marker, not text. data-i18n-list="<key>"; the text itself is unchanged. */
function renderLists(dict) {
  document.querySelectorAll('[data-i18n-list]').forEach(el => {
    const text = dict[el.getAttribute('data-i18n-list')];
    if (text === undefined) return;
    el.textContent = '';
    let list = null;
    text.split('\n').forEach(line => {
      if (line.indexOf('• ') === 0) {
        if (!list) { list = document.createElement('ul'); el.append(list); }
        const li = document.createElement('li'); li.textContent = line.slice(2); list.append(li);
      } else {
        list = null;
        const p = document.createElement('p'); p.textContent = line; el.append(p);
      }
    });
  });
}

function init(opts) {
  const swapLang = opts && opts.swapLang;
  document.addEventListener('i18n:changed', e => { if (e.detail && e.detail.dict) { renderLinks(e.detail.dict); renderLists(e.detail.dict); } });
  const dialogs = Array.prototype.slice.call(document.querySelectorAll('.legal-dialog'));
  if (!dialogs.length) return;
  let open = null, opener = null;

  const close = () => {
    if (!open) return;
    open.classList.remove('is-active');
    open.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    open = null;
    if (opener && typeof opener.focus === 'function') opener.focus();
  };

  const show = (dialog, from) => {
    if (open) close();
    opener = from || document.activeElement;
    open = dialog;
    dialog.classList.add('is-active');
    dialog.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    const status = dialog.querySelector('[data-legal-done]');
    if (status) status.hidden = true;
    const first = dialog.querySelector('[data-legal-close]');
    if (first) first.focus();
  };

  /* Delegated: an opener rendered later inside a sentence (renderLinks) opens its overlay too. */
  document.addEventListener('click', e => {
    const btn = e.target.closest && e.target.closest('[data-legal-open]');
    if (!btn) return;
    const dialog = document.getElementById(btn.getAttribute('data-legal-open'));
    if (dialog) show(dialog, btn);
  });

  dialogs.forEach(dialog => {
    dialog.querySelectorAll('[data-legal-close]').forEach(b => b.addEventListener('click', close));
    dialog.addEventListener('click', e => { if (e.target === dialog) close(); });
    const clear = dialog.querySelector('[data-legal-clear]');
    if (clear) clear.addEventListener('click', () => {
      clearSaved(swapLang);
      const status = dialog.querySelector('[data-legal-done]');
      if (status) status.hidden = false;
    });
  });

  document.addEventListener('keydown', e => {
    if (!open) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    const items = Array.prototype.slice.call(open.querySelectorAll(FOCUSABLE)).filter(el => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (!open.contains(document.activeElement)) { e.preventDefault(); (e.shiftKey ? last : first).focus(); }
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

export { init };
