/* home/overlay.js — mobile overlay open/close + CHG-21 lang<->X swap. */
function init() {
  const hamburger    = document.getElementById('hamburger');
  const overlay      = document.getElementById('navOverlay');
  const langSelector = document.getElementById('langSelector');
  const mobileClose  = document.getElementById('mobileClose');

  function isMobile() { return window.innerWidth <= 768; }

  function openOverlay() {
    overlay.classList.add('nav__overlay--open');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (isMobile()) { langSelector.style.display = 'none'; mobileClose.style.display = 'flex'; hamburger.style.display = 'none'; }
  }
  function closeOverlay() {
    overlay.classList.remove('nav__overlay--open');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (isMobile()) { mobileClose.style.display = 'none'; langSelector.style.display = ''; hamburger.style.display = ''; }
  }

  hamburger.addEventListener('click', openOverlay);
  mobileClose.addEventListener('click', closeOverlay);
  document.getElementById('overlayClose').addEventListener('click', closeOverlay);
  overlay.querySelectorAll('.nav__overlay-link').forEach(el => el.addEventListener('click', closeOverlay));
}

export { init };
