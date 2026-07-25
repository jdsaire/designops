/* home/nav.js — Home scrollspy (P-6a).

   The rest of the nav chrome (hide-on-scroll, language panel, mobile overlay,
   cross-document href rewrite) is now shared in core/navchrome.js, initialised
   from main.js. This module keeps only Home's section scrollspy: one
   IntersectionObserver gives the nav link whose section holds the viewport
   centre `aria-current` plus the `.nav__link--current` state (rendered as
   solid white + semibold since the underline sweep was retired). */
function init() {
  const navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav__link[data-nav-link]')
  );
  if (!navLinks.length) return;

  const linkFor = {};
  navLinks.forEach(l => { linkFor[l.getAttribute('data-nav-link')] = l; });
  const sections = navLinks
    .map(l => document.querySelector(l.getAttribute('data-nav-link')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const link = linkFor['#' + entry.target.id];
        if (!link) return;
        navLinks.forEach(l => { l.classList.remove('nav__link--current'); l.removeAttribute('aria-current'); });
        link.classList.add('nav__link--current');
        link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }
}

export { init };
