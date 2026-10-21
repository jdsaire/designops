/* pages/about/evolution.js — About's milestones (PR #43 G3 round 3, PR43-Q22). The S10-B journey engine, run once per
   [data-tl] (the Lab and the Pre-Lab timeline), each scoped to its own root, never to page ids.

   Disclosure: one body per entry behind one control, one open at a time per timeline.
   Order is fixed oldest to newest.

   Reading position: the entry nearest a line at 38% of the viewport is current, the entries above it are past, and
   the rail fills from the first visible node to the current one. It is recomputed on scroll and on focusin, so the
   keyboard path advances the timeline exactly as scrolling does; a timeline the reader has scrolled past stays full,
   one not reached yet stays empty. The rail itself runs from the first visible node to the last (--rail), so it
   never overshoots the nodes, whatever the filter leaves.

   Strings the script writes are dictionary-backed; the markup's English is the fallback until i18n:changed.
   Reduced motion: no transitions, and an open panel's height is released rather than animated. */
function init() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let dict = null;
  const t = (key, fallback) => (dict && dict[key] !== undefined ? dict[key] : fallback);

  const instances = [...document.querySelectorAll('[data-tl]')].map(root => {
    const seq = root.querySelector('.timeline'), fill = root.querySelector('.jr-fill');
    const items = [...seq.querySelectorAll('.timeline__item:not([data-skip])')];   // [data-skip]: kept in the markup, never shown (PR43-Q29)
    const select = root.querySelector('.tl__filter'), countEl = root.querySelector('.tl__count'), emptyEl = root.querySelector('.tl__empty');
    let openItem = null, current = null, filter = 'all';
    const visible = () => items.filter(n => !n.hidden);

    function setOpen(item, open) {
      const toggle = item.querySelector('.timeline__toggle'), panel = item.querySelector('.timeline__panel');
      item.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      if (open) { panel.hidden = false; panel.style.maxHeight = reduce ? 'none' : panel.scrollHeight + 'px'; }
      else if (reduce) { panel.style.maxHeight = ''; panel.hidden = true; }
      else { panel.style.maxHeight = panel.scrollHeight + 'px'; requestAnimationFrame(() => { panel.style.maxHeight = '0px'; }); }
    }
    function closeOpen() { if (openItem) { setOpen(openItem, false); openItem = null; } }

    items.forEach(item => {
      const toggle = item.querySelector('.timeline__toggle'), panel = item.querySelector('.timeline__panel');
      panel.hidden = true; panel.style.maxHeight = '0px';
      if (!reduce) panel.addEventListener('transitionend', e => {
        if (e.propertyName !== 'max-height') return;
        if (!item.classList.contains('is-open')) panel.hidden = true; else panel.style.maxHeight = 'none';   // never clip a long body
        rail(); paint(current, true);   // an opened body moves the nodes below it
      });
      toggle.addEventListener('click', () => {
        const willOpen = !item.classList.contains('is-open');
        if (openItem && openItem !== item) setOpen(openItem, false);
        setOpen(item, willOpen); openItem = willOpen ? item : null;
        paint(item, true);
        if (reduce) rail();
      });
    });

    function rail() {
      const v = visible();
      seq.style.setProperty('--rail', v.length > 1 ? (v[v.length - 1].offsetTop - v[0].offsetTop) + 'px' : '0px');
    }
    function paint(el, force) {
      if (el === current && !force) return;
      current = el;
      const v = visible(), i = el ? v.indexOf(el) : -1;
      v.forEach((n, j) => { n.classList.toggle('is-current', j === i); n.classList.toggle('is-past', i > -1 && j < i); });
      if (fill) fill.style.height = (v.length && i > -1 ? el.offsetTop - v[0].offsetTop : 0) + 'px';
    }
    function advance() {
      const v = visible(); if (!v.length) return;
      const a = document.activeElement, focused = a && a.closest ? a.closest('.timeline__item') : null;
      if (focused && seq.contains(focused) && !focused.hidden) {
        const r = focused.getBoundingClientRect();
        if (r.bottom > 0 && r.top < innerHeight) { paint(focused); return; }
      }
      const line = innerHeight * 0.38, box = seq.getBoundingClientRect();
      if (box.top > line) { paint(null); return; }                      // not reached yet
      const atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
      if (atEnd || box.bottom < line) { paint(v[v.length - 1]); return; }   // read past
      let best = v[0], d0 = Infinity;
      v.forEach(n => { const d = Math.abs(n.getBoundingClientRect().top - line); if (d < d0) { d0 = d; best = n; } });
      paint(best);
    }
    function renderControls() {
      const v = visible();
      if (countEl) countEl.textContent = t('about_jr_count', '{n} of {total}').replace('{n}', v.length).replace('{total}', items.length);
      if (emptyEl) emptyEl.hidden = v.length > 0;
    }
    function apply(resetScroll) {
      closeOpen();
      items.forEach(n => { n.hidden = filter !== 'all' && n.dataset.class !== filter; });
      visible().sort((a, b) => (Number(a.dataset.sort) - Number(b.dataset.sort)) || (Number(a.dataset.ord) - Number(b.dataset.ord)))
        .forEach(n => seq.appendChild(n));
      items.filter(n => n.hidden).forEach(n => seq.appendChild(n));
      seq.querySelectorAll('[data-skip]').forEach(n => seq.appendChild(n));
      renderControls(); rail(); current = undefined; advance();
      if (resetScroll) {
        const top = root.getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
        window.scrollTo({ top, behavior: 'instant' });
      }
    }
    if (select) select.addEventListener('change', () => { filter = select.value; apply(true); });
    root.addEventListener('focusin', e => { const it = e.target.closest('.timeline__item'); if (it && !it.hidden) paint(it); });
    apply(false);
    return { advance, rail, renderControls };
  });
  if (!instances.length) return;

  let ticking = 0;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = requestAnimationFrame(() => { ticking = 0; instances.forEach(i => i.advance()); });
  }, { passive: true });
  window.addEventListener('resize', () => instances.forEach(i => { i.rail(); i.advance(); }), { passive: true });
  window.addEventListener('load', () => instances.forEach(i => { i.rail(); i.advance(); }));
  document.addEventListener('i18n:changed', e => {
    dict = e.detail && e.detail.dict;
    instances.forEach(i => { i.renderControls(); i.rail(); i.advance(); });   // a language swap can rewrap the rows
  });
}

export { init };
