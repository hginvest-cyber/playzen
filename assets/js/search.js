/*
 * PlayZen — Search
 * ----------------------------------------------------------------------------
 * Live, client-side search across the PLAYZEN_GAMES catalog. Wires up any
 * input with [data-search-input] to a results container [data-search-results].
 * Also dims the main content grids while searching so results take focus.
 */

(function () {
  const GAMES = window.PLAYZEN_GAMES || [];

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function pathPrefix() {
    return location.pathname.includes('/games/') ? '../' : '';
  }

  function linkFor(game) {
    if (game.hasPage) return `${pathPrefix()}games/${game.slug}.html`;
    return `${pathPrefix()}categories.html?cat=${game.categorySlug}`;
  }

  function resultRow(game) {
    return `
      <a href="${linkFor(game)}" class="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5">
        <div class="h-10 w-14 flex-none rounded-md bg-gradient-to-br ${game.thumbGradient || 'from-slate-700 to-slate-900'}"></div>
        <div class="min-w-0 flex-1">
          <div class="truncate text-sm font-semibold text-white">${escapeHtml(game.title)}</div>
          <div class="truncate text-xs text-slate-400">${escapeHtml(game.category)} · ${escapeHtml(game.shortDescription)}</div>
        </div>
        <span class="ml-auto text-xs font-semibold text-indigo-400">Play →</span>
      </a>
    `;
  }

  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return GAMES.filter(g => {
      const hay = `${g.title} ${g.category} ${g.shortDescription}`.toLowerCase();
      return hay.includes(q);
    }).slice(0, 8);
  }

  function wire(input) {
    const panel = document.querySelector('[data-search-results]');
    if (!panel) return;

    function hide() {
      panel.classList.add('hidden');
      panel.innerHTML = '';
    }

    function show(results, q) {
      if (results.length === 0) {
        panel.innerHTML = `
          <div class="p-4 text-center text-sm text-slate-400">
            No games match "<span class="text-white">${escapeHtml(q)}</span>". Try another term.
          </div>`;
      } else {
        panel.innerHTML = `<div class="space-y-1 p-2">${results.map(resultRow).join('')}</div>`;
      }
      panel.classList.remove('hidden');
    }

    input.addEventListener('input', (e) => {
      const q = e.target.value;
      if (!q.trim()) return hide();
      show(search(q), q);
    });

    input.addEventListener('focus', () => {
      if (input.value.trim()) show(search(input.value), input.value);
    });

    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && e.target !== input) hide();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { input.blur(); hide(); }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-search-input]').forEach(wire);
  });
})();
