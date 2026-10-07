/* home/hero.js — HERO (PR #35).
   The track-record stat count-up left with its organism (S10C).

   Fit: the heading's two lines are sized from their own text, per language and viewport, and
   each fills the stage's width. Phones (≤767 px) follow JD's line commands (each line breaks
   before its post segment), so each half is fitted, and both lines shrink together if the stage
   would not end inside the first screen. The sizes go on .hero as --l1-size / --l2-size and
   .hero--fit switches the lines to nowrap; until then the hero's content waits unseen
   (hero.css). Positions are read from layout (offsets), so every mode gets the same layout.

   Line 2 rests on one word (IMPACT / IMPACTO): the typing loop, its caret and its pause button
   are retired (PR35-Q48), and line 2 now fills the width like line 1 (PR35-Q51).

   No entrance: the hero shows at once when it is fitted, in every mode (PR35-Q49 revoked X-4). */
const SLACK = 0.985;          /* fitted lines stop just short of the stage edge */
const MIN_PHONE_SIZE = 36;    /* px: the phone cap never sets a line smaller */

function init() {
  const hero = document.querySelector('.hero');
  const stage = hero && hero.querySelector('.hero__stage');
  const h1 = stage && stage.querySelector('.hero__h1');
  if (!h1) return;
  const inner = hero.querySelector('.hero__inner');
  const phoneMQ = window.matchMedia('(max-width: 767px)');
  let fitted = false;

  /* Width of a run of inline elements on one line: the union of their boxes. */
  function extent(els) {
    let L = Infinity, R = -Infinity;
    els.forEach(el => {
      if (!el) return;
      const r = document.createRange(); r.selectNodeContents(el);
      Array.from(r.getClientRects()).forEach(b => { if (b.width) { L = Math.min(L, b.left); R = Math.max(R, b.right); } });
    });
    return R > L ? R - L : 0;
  }

  /* Natural widths at 100 px, measured on an unseen clone of the heading. The clone is sized
     before it joins the page: a size changed on a live element would ease under reduced motion
     (hero.css gives every property a 0.01 ms transition there) and read back stale. */
  function measure(phone) {
    const host = document.createElement('div');
    host.className = 'hero__measure'; host.setAttribute('aria-hidden', 'true');
    host.style.cssText = 'position:absolute;left:-9999px;top:0;width:max-content;visibility:hidden;pointer-events:none';
    const c = h1.cloneNode(true);
    c.querySelectorAll('[data-i18n]').forEach(e => e.removeAttribute('data-i18n'));
    const c1 = c.querySelector('.hero__l1'), c2 = c.querySelector('.hero__l2');
    [c1, c2].forEach(l => { l.style.fontSize = '100px'; l.style.whiteSpace = 'nowrap'; l.style.paddingInlineEnd = '0'; });
    host.appendChild(c); stage.appendChild(host);
    const w = l => {
      const seg = s => l.querySelector('.hero__seg--' + s), hook = l.querySelector('.hero__hook');
      return phone ? Math.max(extent([seg('pre'), hook]), extent([seg('post')])) : extent([seg('pre'), hook, seg('post')]);
    };
    const m = { w1: w(c1), w2: w(c2) };
    host.remove();
    return m;
  }

  /* Document position of the stage's last in-flow element's bottom edge (transform-free). */
  function stageBottom() {
    const top = stage.getBoundingClientRect().top + window.scrollY;
    let bottom = 0;
    Array.prototype.forEach.call(stage.children, el => {
      if (getComputedStyle(el).position === 'absolute') return;
      bottom = Math.max(bottom, el.offsetTop + el.offsetHeight);
    });
    return top + bottom;
  }

  function fit() {
    hero.classList.add('hero--sizing');   /* new sizes apply at once, so they read back true */
    const cs = getComputedStyle(inner);
    const box = inner.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const phone = phoneMQ.matches;
    const m = measure(phone);
    if (!m.w1 || !m.w2) { hero.classList.remove('hero--sizing'); return; }
    let s1 = SLACK * box * 100 / m.w1;
    let s2 = SLACK * box * 100 / m.w2;
    const apply = () => {
      hero.style.setProperty('--l1-size', s1.toFixed(2) + 'px');
      hero.style.setProperty('--l2-size', s2.toFixed(2) + 'px');
    };
    apply();
    hero.classList.add('hero--fit');
    if (phone) {
      for (let i = 0; i < 3; i++) {
        const limit = window.innerHeight - 12, over = stageBottom() - limit;
        if (over <= 0.5) break;
        const hh = h1.offsetHeight;
        const f = Math.max((hh - over) / hh, MIN_PHONE_SIZE / Math.max(s1, s2));
        if (f >= 0.999) break;
        s1 *= f; s2 *= f; apply();
      }
    }
    void hero.offsetWidth;
    hero.classList.remove('hero--sizing');
    fitted = true;
  }

  /* ── Boot: the face and the first dictionary, then fit; refit on language and size ── */
  let fontsOK = false, i18nOK = false;
  function ready() {
    if (!fontsOK || !i18nOK) return;
    fit();
  }
  document.addEventListener('i18n:changed', () => { i18nOK = true; ready(); });
  setTimeout(() => { if (!i18nOK) { i18nOK = true; ready(); } }, 2500);
  const faces = document.fonts ? Promise.all([document.fonts.load('900 100px Archivo'), document.fonts.load('italic 900 100px Archivo')]) : Promise.resolve();
  faces.catch(() => {}).then(() => { fontsOK = true; ready(); });

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (fitted) fit(); }, 80); });
}

export { init };
