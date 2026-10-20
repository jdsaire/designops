/* core/brief-index.js — the index between a page's hero and its first act (PR #43; styled by
   shared/brief-index.css). Wires every nav[data-idx] on the page:
   - current entry: the last target whose top has crossed a probe in the upper third of the viewport; before the
     first target nothing is current. aria-current="true" on its link; no live region (the reader is already on the
     heading, and announcing every change while scrolling is noise);
   - from 768 the links are N equal buttons (--idx-n set here);
   - below 768 a native select carries the same entries (the Contact form's dropdown, PR43-Q8: no n/N counter, the
     entry's own number states the position); its options are built from the links, so the names stay in one place,
     and it follows the current entry; picking one scrolls there. A progress line tracks the page 1:1;
   - jumping, by link or by select, lands the target below the sticky chrome (the page's scroll padding,
     shared/brief-index.css, --idx-h measured here) and moves focus to its heading so reading continues there;
   - the line follows the nav: when the nav hides while the line is stuck, html.idx-nav-off lifts it by the nav's
     height (the stylesheet carries the nav's 350 ms; reduced motion makes it instant);
   - past the end of the brief (hr[data-brief-end]) the line folds away, and returns above it (PR43-Q10);
   - names come from the page's dictionaries; on i18n:changed the options and the reserved bold widths are refreshed.
   Best effort throughout: without this script the strip is a plain list of in-page links. */
export function init() {
  const nav = document.getElementById('navbar') || document.querySelector('.nav');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('nav[data-idx]').forEach(root => {
    const list = root.querySelector('.idx__list'), select = root.querySelector('.idx__select'), line = root.querySelector('.idx__line i');
    const links = [...list.querySelectorAll('a[href^="#"]')];
    const targets = links.map(a => document.getElementById(a.getAttribute('href').slice(1)));
    const heads = targets.map(t => t && (document.getElementById(t.getAttribute('aria-labelledby') || '') || t.querySelector('h2, h3') || t));
    const end = document.querySelector('[data-brief-end]');   // the end of the brief: past it, the line folds away (PR43-Q10)
    const eb = root.previousElementSibling && root.previousElementSibling.classList.contains('idx-eb') ? root.previousElementSibling : null;
    root.style.setProperty('--idx-n', links.length);
    document.documentElement.classList.add('has-idx');
    heads.forEach(h => { if (h && !h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1'); });
    let current = -2, ticking = false;

    const label = a => a.querySelector('.idx__n').textContent + a.querySelector('.idx__t').textContent;
    function reserve() { list.querySelectorAll('.idx__t').forEach(t => { t.dataset.text = t.textContent; }); }
    function options() {
      if (!select) return;
      links.forEach((a, i) => {
        let o = select.querySelector('option[data-idx-i="' + i + '"]');
        if (!o) { o = document.createElement('option'); o.dataset.idxI = i; o.value = a.getAttribute('href'); select.appendChild(o); }
        o.textContent = label(a);
      });
    }
    function measure() { document.documentElement.style.setProperty('--idx-h', root.offsetHeight + 'px'); }
    function go(i) {
      const t = targets[i], h = heads[i]; if (!t) return;
      t.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'start' });
      try { history.replaceState(null, '', links[i].getAttribute('href')); } catch (e) {}
      if (h) h.focus({ preventScroll: true });
    }
    function update() {
      ticking = false;
      const probe = innerHeight / 3;
      let k = -1;
      targets.forEach((t, i) => { if (t && t.getBoundingClientRect().top <= probe) k = i; });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {   // the end of the page: the last target that is on screen
        for (let i = targets.length - 1; i >= 0; i--) { const t = targets[i]; if (t && t.getBoundingClientRect().top < innerHeight) { k = Math.max(k, i); break; } }
      }
      if (k !== current) {
        current = k;
        links.forEach((a, i) => { if (i === k) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
        if (select) select.selectedIndex = k + 1;   // option 0 is the INDEX placeholder
      }
      // stuck: the line sits at its sticky top (the eyebrow above it has scrolled past the nav)
      const navH = nav ? nav.offsetHeight : 0;
      const stuck = eb ? eb.getBoundingClientRect().bottom <= navH + 1 : root.getBoundingClientRect().top <= navH + 1;
      root.classList.toggle('is-stuck', stuck);
      if (end) { const chromeTop = nav && !nav.classList.contains('nav--hidden') ? nav.getBoundingClientRect().bottom : 0;
        const et = end.getBoundingClientRect().top, atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
        // past the line, past the upper third (where the scrollspy reads), or on screen at the page's bottom
        root.classList.toggle('is-done', et < Math.max(chromeTop + root.offsetHeight, probe) || (atEnd && et < innerHeight)); }
      if (line) {
        const first = targets[0], last = targets[targets.length - 1];
        if (first && last) {
          const top = first.getBoundingClientRect().top + scrollY, end = last.getBoundingClientRect().bottom + scrollY - innerHeight;
          const f = end > top ? Math.min(1, Math.max(0, (scrollY - top + probe) / (end - top + probe))) : 0;
          line.style.transform = 'scaleX(' + f.toFixed(4) + ')';
        }
      }
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };

    links.forEach((a, i) => a.addEventListener('click', () => {
      const h = heads[i];
      if (h) setTimeout(() => h.focus({ preventScroll: true }), 0);   // after the browser's own anchor scroll starts
    }));
    if (select) select.addEventListener('change', () => { const i = select.selectedIndex - 1; if (i >= 0) go(i); });

    // the nav's hide / return, mirrored on <html> so the stylesheet can lift the stuck line by the nav's height
    if (nav) {
      const sync = () => document.documentElement.classList.toggle('idx-nav-off', nav.classList.contains('nav--hidden'));
      new MutationObserver(sync).observe(nav, { attributes: true, attributeFilter: ['class'] });
      sync();
    }
    document.addEventListener('i18n:changed', () => { reserve(); options(); measure(); });
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', () => { measure(); onScroll(); }, { passive: true });
    reserve(); options(); measure(); update();
  });
}
