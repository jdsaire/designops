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
   matches what is on screen.

   PRESENTATION (P-1): the chips live inside category disclosure panels
   that open one at a time beneath a resting bar (O-3 inline strips). The
   ENGINE below is unchanged; only the wiring for triggers, panels, active
   mini-chips, count badges, result motion (P-2) and URL-hash state (P-4)
   is layered on top. */

function init() {
  var root = document.getElementById('tagFilter');
  var track = document.querySelector('.work__track');
  if (!root || !track) return;

  var chips = Array.prototype.slice.call(root.querySelectorAll('.tag'));
  var cards = Array.prototype.slice.call(track.querySelectorAll('.work-card'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.work__dot'));
  var triggers = Array.prototype.slice.call(root.querySelectorAll('.tagfilter__trigger'));
  var clearBtn = document.getElementById('tagClear');
  var status = document.getElementById('tagStatus');
  var activeHost = document.getElementById('tagActive');
  var empty = document.getElementById('workEmpty');
  if (!chips.length || !cards.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  function dict() { return window.__i18nDict || {}; }
  function tpl(key, fallback, vars) {
    var s = dict()[key] || fallback;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
    return s;
  }

  /* Per-category active count → the trigger badge ("Field · 2"). */
  function updateTriggerCounts(active) {
    triggers.forEach(function (trig) {
      var cat = trig.getAttribute('data-cat');
      var n = (active[cat] || []).length;
      var badge = trig.querySelector('.tagfilter__trigger-count');
      if (!badge) return;
      if (n > 0) { badge.textContent = String(n); badge.hidden = false; trig.setAttribute('data-active', 'true'); }
      else { badge.textContent = ''; badge.hidden = true; trig.removeAttribute('data-active'); }
    });
  }

  /* Active selections rendered as removable mini-chips in the resting bar,
     so the chosen filters are always visible without opening a panel. */
  function renderActiveChips() {
    if (!activeHost) return;
    activeHost.textContent = '';
    chips.forEach(function (chip) {
      if (chip.getAttribute('aria-pressed') !== 'true') return;
      var label = (chip.textContent || '').trim();
      var mini = document.createElement('button');
      mini.type = 'button';
      mini.className = 'tagfilter__minichip';
      mini.setAttribute('data-tag', chip.dataset.tag);
      mini.setAttribute('aria-label', tpl('filter_remove_label', 'Remove filter: {tag}', { tag: label }));
      var text = document.createElement('span');
      text.className = 'tagfilter__minichip-label';
      text.textContent = label;
      var x = document.createElement('span');
      x.className = 'tagfilter__minichip-x';
      x.setAttribute('aria-hidden', 'true');
      x.textContent = '×';
      mini.appendChild(text);
      mini.appendChild(x);
      mini.addEventListener('click', function () {
        chip.setAttribute('aria-pressed', 'false');
        apply(true);
        var next = activeHost.querySelector('.tagfilter__minichip');
        if (next) next.focus();
        else if (clearBtn && !clearBtn.hidden) clearBtn.focus();
        else chip.focus();
      });
      activeHost.appendChild(mini);
    });
  }

  /* P-2 · sequenced re-entry of the surviving cards (S3, WAAPI, compositor
     only). Collapses to an instant render under reduced motion. */
  function animateCards(visibleCards) {
    if (reduceMotion || !visibleCards.length || typeof visibleCards[0].animate !== 'function') return;
    visibleCards.forEach(function (card, i) {
      card.animate(
        [
          { opacity: 0, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 300, delay: i * 40, easing: 'cubic-bezier(0.16, 0.84, 0.44, 1)', fill: 'none' }
      );
    });
  }

  /* P-4 · reflect the active shortlist into the URL hash so a filtered
     view is a shareable link; hydrate the reverse on init. */
  function syncHash() {
    var tags = chips
      .filter(function (c) { return c.getAttribute('aria-pressed') === 'true'; })
      .map(function (c) { return c.dataset.tag; });
    var hash = tags.length ? '#f=' + tags.join(',') : '';
    var url = location.pathname + location.search + hash;
    try { history.replaceState(null, '', url); } catch (e) {}
  }
  function hydrateFromHash() {
    var m = /[#&]f=([^&]+)/.exec(location.hash);
    if (!m) return;
    var wanted = decodeURIComponent(m[1]).split(',').filter(Boolean);
    chips.forEach(function (chip) {
      if (wanted.indexOf(chip.dataset.tag) !== -1) chip.setAttribute('aria-pressed', 'true');
    });
  }

  function apply(animate) {
    var active = activeByCategory();
    var activeCount = Object.keys(active).reduce(function (n, c) { return n + active[c].length; }, 0);

    var shown = 0;
    var visibleCards = [];
    cards.forEach(function (card) {
      var ok = matches(card, active);
      card.hidden = !ok;
      card.classList.remove('is-active');
      if (ok) { shown++; visibleCards.push(card); }
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
      if (activeCount === 0) status.textContent = '';
      else status.textContent = tpl('filter_status', 'Showing {shown} of {total} briefs.',
        { shown: shown, total: cards.length });
    }

    updateTriggerCounts(active);
    renderActiveChips();
    markDeadEnds(active);
    syncHash();
    if (animate) animateCards(visibleCards);
    document.dispatchEvent(new CustomEvent('workfilter:changed', { detail: { shown: shown, total: cards.length } }));
  }

  /* ── Disclosure panels (P-1): one open at a time, inline strips. ── */
  function panelFor(trigger) { return document.getElementById(trigger.getAttribute('aria-controls')); }

  function openPanel(trigger) {
    closeAllPanels(trigger);
    var panel = panelFor(trigger);
    if (!panel) return;
    trigger.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    /* reflow so the open transition runs from the collapsed state */
    void panel.offsetHeight;
    panel.classList.add('is-open');
  }

  function closePanel(trigger, immediate) {
    var panel = panelFor(trigger);
    if (!panel) return;
    trigger.setAttribute('aria-expanded', 'false');
    panel.classList.remove('is-open');
    if (reduceMotion || immediate) {
      panel.hidden = true;
    } else {
      var inner = panel.querySelector('.tagfilter__panel-inner');
      var onEnd = function (e) {
        if (e.target !== inner) return;
        if (!panel.classList.contains('is-open')) panel.hidden = true;
        panel.removeEventListener('transitionend', onEnd);
      };
      panel.addEventListener('transitionend', onEnd);
    }
  }

  function closeAllPanels(except) {
    triggers.forEach(function (trig) {
      if (trig === except) return;
      if (trig.getAttribute('aria-expanded') === 'true') closePanel(trig, true);
    });
  }

  triggers.forEach(function (trig) {
    trig.addEventListener('click', function (e) {
      e.stopPropagation();
      if (trig.getAttribute('aria-expanded') === 'true') closePanel(trig);
      else openPanel(trig);
    });
  });

  /* Esc closes the open panel and returns focus to its trigger. */
  root.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' && e.key !== 'Esc') return;
    var open = triggers.filter(function (t) { return t.getAttribute('aria-expanded') === 'true'; })[0];
    if (open) { closePanel(open); open.focus(); }
  });

  /* Outside-click closes any open panel. */
  document.addEventListener('click', function (e) {
    if (root.contains(e.target)) return;
    closeAllPanels(null);
  });

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chip.setAttribute('aria-pressed', String(chip.getAttribute('aria-pressed') !== 'true'));
      apply(true);
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      apply(true);
      triggers[0].focus();
    });
  }

  /* Re-render the status line, mini-chip labels and counts in the new
     language when SwapLang fires. */
  document.addEventListener('i18n:changed', function (e) {
    window.__i18nDict = (e.detail && e.detail.dict) || {};
    apply(false);
  });

  hydrateFromHash();
  apply(false);
}

export { init };
