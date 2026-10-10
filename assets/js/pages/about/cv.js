/* pages/about/cv.js — the CV downloads in About's hero.

   The markup carries the English files as the default. The page's own
   dictionary holds the file for each language under the key named by the
   link's data-cv-href attribute, and this script points each link at the
   reader's language whenever the engine reports a language change
   (i18n:changed fires on the first load, on a repeat visit and on every live
   switch). A key missing from the active dictionary keeps the markup
   default rather than printing a key name.

   The listener is registered before the engine's init(), so the first
   event cannot be missed. The engine and the inline early scripts are not
   touched: the early script paints cached text only, and this script sets
   the two hrefs once the dictionary has loaded. */
function init() {
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-cv-href]'));
  if (!links.length) return;
  var defaults = links.map(function (a) { return a.getAttribute('href'); });

  document.addEventListener('i18n:changed', function (e) {
    var dict = e.detail && e.detail.dict;
    if (!dict) return;
    links.forEach(function (a, i) {
      var href = dict[a.getAttribute('data-cv-href')];
      a.setAttribute('href', href !== undefined ? href : defaults[i]);
    });
  });
}

export { init };
