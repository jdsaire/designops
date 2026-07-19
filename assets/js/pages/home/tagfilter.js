/* pages/home/tagfilter.js — shortlists the work cards by tag.

   Tag values are never hardcoded here. Each chip carries `data-tag` and
   each card carries `data-tags`; the visible labels come from the i18n
   dictionaries. Changing, adding or removing a tag is a data edit in the
   markup and the dictionaries — this module never needs to know what any
   tag means.

   Matching is faceted: a card must match EVERY category that has an
   active chip, and within a category any one active chip is enough.
   Selecting Banking then Airport therefore widens the industry shortlist
   rather than guaranteeing an empty result, while adding a Role chip
   narrows it. With a four-card pool, strict AND across every chip would
   dead-end on the second click.

   Filtering hides cards with the `hidden` attribute, which removes them
   from layout and from the tab order together, so keyboard order always
   matches what is on screen. */

function init() {
  var root = document.getElementById('tagFilter');
  var track = document.querySelector('.work__track');
  if (!root || !track) return;

  var chips = Array.prototype.slice.call(root.querySelectorAll('.tag'));
  var cards = Array.prototype.slice.call(track.querySelectorAll('.work-card'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.work__dot'));
  var clearBtn = document.getElementById('tagClear');
  var status = document.getElementById('tagStatus');
  var empty = document.getElementById('workEmpty');
  if (!chips.length || !cards.length) return;

  /* Which category each chip belongs to, read from the DOM rather than
     duplicated in a constant — the markup is the single source. */
  var categoryOf = {};
  Array.prototype.slice.call(root.querySelectorAll('.tagfilter__group')).forEach(function (group, i) {
    var cat = group.getAttribute('aria-labelledby') || ('group-' + i);
    group.querySelectorAll('.tag').forEach(function (chip) {
      categoryOf[chip.dataset.tag] = cat;
    });
  });

  function tagsOf(card) {
    return (card.dataset.tags || '').split(/\s+/).filter(Boolean);
  }

  function activeByCategory() {
    var active = {};
    chips.forEach(function (chip) {
      if (chip.getAttribute('aria-pressed') !== 'true') return;
      var cat = categoryOf[chip.dataset.tag];
      (active[cat] = active[cat] || []).push(chip.dataset.tag);
    });
    return active;
  }

  function matches(card, active) {
    var cardTags = tagsOf(card);
    return Object.keys(active).every(function (cat) {
      return active[cat].some(function (t) { return cardTags.indexOf(t) !== -1; });
    });
  }

  /* Dim chips that would return nothing on top of the current selection,
     so a dead end is visible before it is clicked rather than after. */
  function markDeadEnds(active) {
    chips.forEach(function (chip) {
      if (chip.getAttribute('aria-pressed') === 'true') { chip.removeAttribute('data-empty'); return; }
      var probe = {};
      Object.keys(active).forEach(function (c) { probe[c] = active[c].slice(); });
      var cat = categoryOf[chip.dataset.tag];
      (probe[cat] = probe[cat] || []).push(chip.dataset.tag);
      var any = cards.some(function (card) { return matches(card, probe); });
      chip.setAttribute('data-empty', String(!any));
    });
  }

  function apply() {
    var active = activeByCategory();
    var activeCount = Object.keys(active).reduce(function (n, c) { return n + active[c].length; }, 0);

    var shown = 0;
    cards.forEach(function (card) {
      var ok = matches(card, active);
      card.hidden = !ok;
      card.classList.remove('is-active');
      if (ok) shown++;
    });

    /* Pagination dots track the shortlist, not the full set. */
    dots.forEach(function (dot, i) { dot.hidden = i >= shown; });
    if (dots.length) {
      dots.forEach(function (d, i) { d.classList.toggle('work__dot--active', i === 0); });
      track.scrollTo({ left: 0, behavior: 'auto' });
    }

    if (empty) empty.hidden = shown !== 0;
    if (clearBtn) clearBtn.hidden = activeCount === 0;

    if (status) {
      var dict = window.__i18nDict || {};
      if (activeCount === 0) {
        status.textContent = '';
      } else {
        var tpl = dict.filter_status || 'Showing {shown} of {total} briefs.';
        status.textContent = tpl.replace('{shown}', shown).replace('{total}', cards.length);
      }
    }

    markDeadEnds(active);
    document.dispatchEvent(new CustomEvent('workfilter:changed', { detail: { shown: shown, total: cards.length } }));
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chip.setAttribute('aria-pressed', String(chip.getAttribute('aria-pressed') !== 'true'));
      apply();
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      apply();
      chips[0].focus();
    });
  }

  /* Re-render the status line in the new language when SwapLang fires. */
  document.addEventListener('i18n:changed', function (e) {
    window.__i18nDict = (e.detail && e.detail.dict) || {};
    apply();
  });

  apply();
}

export { init };
