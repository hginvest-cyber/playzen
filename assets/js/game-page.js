/*
 * PlayZen — Game Page Script
 * ----------------------------------------------------------------------------
 * Powers individual /games/<slug>.html pages:
 *   - Tracks the game in Recently Played + Continue Playing
 *   - Renders related games based on the game's relatedGames[] array
 *   - Handles the favorite button state
 *   - Shows a fallback UI if the iframe fails to load
 *
 * The page must set:
 *   <body data-page="game" data-slug="2048">
 */

(function () {
  const GAMES = window.PLAYZEN_GAMES || [];
  const Store = window.PlayZenStorage;

  function gameBySlug(slug) { return GAMES.find(g => g.slug === slug); }

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function renderRelated(game) {
    const wrap = document.querySelector('[data-grid="related"]');
    if (!wrap) return;
    const related = (game.relatedGames || [])
      .map(gameBySlug)
      .filter(Boolean)
      .slice(0, 4);
    if (related.length === 0) {
      wrap.innerHTML = '<p class="col-span-full text-sm text-slate-400">No related games yet.</p>';
      return;
    }
    wrap.innerHTML = related.map(g => {
      const href = g.hasPage ? `../games/${g.slug}.html` : `../categories.html?cat=${g.categorySlug}`;
      return `
        <a href="${href}" class="group overflow-hidden rounded-2xl bg-slate-900/70 ring-1 ring-white/5 transition hover:ring-indigo-400/40">
          <div class="aspect-[5/3] bg-gradient-to-br ${g.thumbGradient} flex items-center justify-center">
            <span class="text-xl font-black text-white/90">${escapeHtml(g.title)}</span>
          </div>
          <div class="p-3">
            <div class="text-sm font-semibold text-white">${escapeHtml(g.title)}</div>
            <div class="text-xs text-slate-400">${escapeHtml(g.category)}</div>
          </div>
        </a>
      `;
    }).join('');
  }

  function wireFavoriteButton(game) {
    const btn = document.querySelector('[data-page-fav]');
    if (!btn || !Store) return;

    function paint() {
      const fav = Store.isFavorite(game.slug);
      btn.setAttribute('aria-pressed', fav);
      btn.setAttribute('aria-label', fav ? 'Remove from favorites' : 'Add to favorites');
      btn.innerHTML = `
        <svg class="h-5 w-5 ${fav ? 'fill-rose-500 text-rose-500' : 'fill-none text-white'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
        </svg>
        <span>${fav ? 'Favorited' : 'Add to Favorites'}</span>
      `;
    }

    btn.addEventListener('click', () => {
      Store.toggleFavorite(game.slug);
      paint();
    });
    paint();
  }

  function wireFallback() {
    const iframe = document.querySelector('[data-game-iframe]');
    const fallback = document.querySelector('[data-game-fallback]');
    if (!iframe || !fallback) return;
    // Show fallback if src is placeholder (about:blank)
    if (!iframe.src || iframe.src === 'about:blank' || iframe.getAttribute('src') === 'about:blank') {
      fallback.classList.remove('hidden');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (document.body.dataset.page !== 'game') return;
    const slug = document.body.dataset.slug;
    const game = gameBySlug(slug);
    if (!game) return;

    if (Store) {
      Store.addRecentlyPlayed(slug);
      // Mark as continue-playing after short engagement delay
      setTimeout(() => Store.markContinuePlaying(slug), 5000);
    }

    renderRelated(game);
    wireFavoriteButton(game);
    wireFallback();
  });
})();
