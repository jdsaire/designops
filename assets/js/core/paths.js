/* core/paths.js — single source of truth for serving depth.

   Every page declares its directory depth below the site root on the
   <html> element as data-nav-depth. This module maps that depth to the
   relative prefix that reaches the site root from the current document,
   and exports it. Chrome that must resolve a root-anchored resource
   (the i18n dictionaries) or a cross-document route (nav links) composes
   its path onto this prefix rather than guessing.

   Depth is read from the authored attribute, never derived from
   location.pathname — the latter breaks the moment the site is served
   under a different base path (it is /designops/ on GitHub Pages today).

   depth "0" → ''        (site root, e.g. /index.html)
   depth "1" → '../'     (e.g. /capabilities/index.html)
   depth "2" → '../../'  (e.g. /work/<slug>/index.html)

   An absent or unrecognised attribute falls back to '' (root) and warns,
   so a misdeclared page degrades to the root assumption rather than a
   silent wrong guess. */
const DEPTH_PREFIX = { '0': '', '1': '../', '2': '../../' };

const depth = document.documentElement.getAttribute('data-nav-depth');
let rootPrefix;
if (depth !== null && Object.prototype.hasOwnProperty.call(DEPTH_PREFIX, depth)) {
  rootPrefix = DEPTH_PREFIX[depth];
} else {
  rootPrefix = '';
  console.warn('paths.js: missing or unrecognised data-nav-depth="' + depth + '"; defaulting to site root.');
}

export { rootPrefix };
