/*
 * PlayZen — Main UI Script
 * ----------------------------------------------------------------------------
 * Renders game cards, category cards, dynamic sections (featured, trending,
 * recently played, continue playing, favorites, search results, category
 * filtering), and handles mobile nav + favorite toggles.
 *
 * Depends on: games.js, storage.js
 */

(function () {
  const GAMES = window.PLAYZEN_GAMES || [];
  const CATEGORIES = window.PLAYZEN_CATEGORIES || [];
  const Store = window.PlayZenStorage;

  /* -------------------- HELPERS -------------------- */
  function gameBySlug(slug) {
    return GAMES.find(g => g.slug === slug);
  }

  function gameLink(game) {
    if (game.hasPage) return `${pathPrefix()}games/${game.slug}.html`;
    return `${pathPrefix()}categories.html?cat=${game.categorySlug}`;
  }

  function pathPrefix() {
    // If we're inside /games/<slug>.html, step up one level
    return location.pathname.includes('/games/') ? '../' : '';
  }

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatPlays(n) {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
    if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
    return String(n);
  }

  /* -------------------- GAME CARD RENDERER -------------------- */
  function renderGameCard(game) {
    const isFav = Store ? Store.isFavorite(game.slug) : false;
    const href = gameLink(game);
    return `
      <article class="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-900/70 ring-1 ring-white/5 transition hover:ring-indigo-400/40 hover:-translate-y-0.5">
        <a href="${href}" class="block" aria-label="Play ${escapeHtml(game.title)}">
          <div class="relative aspect-[5/3] w-full overflow-hidden bg-gradient-to-br ${game.thumbGradient || 'from-slate-700 to-slate-900'}">
            <div class="absolute inset-0 flex items-center justify-center text-white/90">
              <span class="text-3xl font-black tracking-tight drop-shadow-lg">${escapeHtml(game.title)}</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
            <span class="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/10 backdrop-blur">${escapeHtml(game.category)}</span>
          </div>
        </a>
        <button
          type="button"
          class="pz-fav-btn absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-black/70"
          data-slug="${escapeHtml(game.slug)}"
          aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
          aria-pressed="${isFav}"
        >
          <svg class="h-5 w-5 ${isFav ? 'fill-rose-500 text-rose-500' : 'fill-none text-white'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
          </svg>
        </button>
        <div class="flex flex-1 flex-col p-4">
          <div class="mb-1 flex items-center justify-between">
            <h3 class="truncate text-base font-semibold text-white">${escapeHtml(game.title)}</h3>
            <span class="ml-2 flex items-center gap-1 text-xs text-slate-400">
              <svg class="h-3.5 w-3.5 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118L10 14.347l-3.37 2.448c-.783.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.645 8.384c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z"/></svg>
              ${game.rating?.toFixed(1) || '—'}
            </span>
          </div>
          <p class="mb-4 line-clamp-2 text-sm text-slate-400">${escapeHtml(game.shortDescription)}</p>
          <div class="mt-auto flex items-center justify-between">
            <span class="text-xs text-slate-500">${formatPlays(game.plays || 0)} plays</span>
            <a href="${href}" class="inline-flex items-center gap-1 rounded-lg bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400">
              Play Now
              <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  function renderCategoryCard(cat) {
    return `
      <a href="${pathPrefix()}categories.html?cat=${cat.slug}" class="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${cat.gradient} p-5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:ring-white/30">
        <div class="text-4xl">${cat.icon}</div>
        <div class="mt-8">
          <h3 class="text-lg font-bold text-white">${escapeHtml(cat.name)}</h3>
          <p class="mt-1 text-sm text-white/80">${escapeHtml(cat.description)}</p>
        </div>
        <div class="absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></div>
      </a>
    `;
  }

  /* -------------------- SECTION RENDERERS -------------------- */
  function renderIntoGrid(selector, games, emptyState) {
    const el = document.querySelector(selector);
    if (!el) return;
    if (!games || games.length === 0) {
      el.innerHTML = emptyState || '';
      return;
    }
    el.innerHTML = games.map(renderGameCard).join('');
  }

  function emptyStateBlock(title, msg, cta) {
    return `
      <div class="col-span-full rounded-2xl border border-dashed border-white/10 bg-slate-900/40 p-10 text-center">
        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800/80 text-2xl">🎮</div>
        <h3 class="text-lg font-semibold text-white">${escapeHtml(title)}</h3>
        <p class="mx-auto mt-1 max-w-md text-sm text-slate-400">${escapeHtml(msg)}</p>
        ${cta ? `<a href="${pathPrefix()}index.html" class="mt-5 inline-flex items-center gap-1 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400">${escapeHtml(cta)}</a>` : ''}
      </div>
    `;
  }

  /* -------------------- BOOT: HOMEPAGE -------------------- */
  function renderHome() {
    if (!document.body.dataset.page || document.body.dataset.page !== 'home') return;

    const featured = GAMES.filter(g => g.isFeatured);
    renderIntoGrid('[data-grid="featured"]', featured);

    const trending = GAMES.filter(g => g.isTrending).slice(0, 8);
    renderIntoGrid('[data-grid="trending"]', trending);

    const recentSlugs = (Store?.getRecentlyPlayed() || []).map(e => e.slug);
    const recent = recentSlugs.map(gameBySlug).filter(Boolean);
    renderIntoGrid(
      '[data-grid="recent"]',
      recent,
      emptyStateBlock('Nothing here yet', 'Play your first game and it’ll show up here for quick access.', 'Browse games')
    );

    const contSlugs = (Store?.getContinuePlaying() || []).map(e => e.slug);
    const cont = contSlugs.map(gameBySlug).filter(Boolean);
    renderIntoGrid(
      '[data-grid="continue"]',
      cont,
      emptyStateBlock('No games in progress', 'Games you open will appear here so you can jump back in instantly.', 'Find a game')
    );

    const catWrap = document.querySelector('[data-grid="categories"]');
    if (catWrap) catWrap.innerHTML = CATEGORIES.map(renderCategoryCard).join('');
  }

  /* -------------------- BOOT: TRENDING PAGE -------------------- */
  function renderTrending() {
    if (document.body.dataset.page !== 'trending') return;
    const sortEl = document.querySelector('[data-sort]');
    const catEl = document.querySelector('[data-filter-cat]');

    function draw() {
      let list = GAMES.filter(g => g.isTrending);
      const cat = catEl?.value;
      if (cat && cat !== 'all') list = list.filter(g => g.categorySlug === cat);
      const sort = sortEl?.value || 'plays';
      list.sort((a, b) => {
        if (sort === 'rating') return (b.rating || 0) - (a.rating || 0);
        if (sort === 'title') return a.title.localeCompare(b.title);
        return (b.plays || 0) - (a.plays || 0);
      });
      renderIntoGrid('[data-grid="trending-list"]', list, emptyStateBlock('No trending games', 'Try a different filter.', null));
    }

    // Populate category filter
    if (catEl) {
      catEl.innerHTML = `<option value="all">All categories</option>` +
        CATEGORIES.map(c => `<option value="${c.slug}">${escapeHtml(c.name)}</option>`).join('');
      catEl.addEventListener('change', draw);
    }
    if (sortEl) sortEl.addEventListener('change', draw);
    draw();
  }

  /* -------------------- BOOT: CATEGORIES PAGE -------------------- */
  function renderCategoriesPage() {
    if (document.body.dataset.page !== 'categories') return;
    const catWrap = document.querySelector('[data-grid="category-cards"]');
    if (catWrap) catWrap.innerHTML = CATEGORIES.map(renderCategoryCard).join('');

    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    const filterLabel = document.querySelector('[data-current-cat]');
    const grid = document.querySelector('[data-grid="category-games"]');

    let list = GAMES;
    if (cat) {
      list = GAMES.filter(g => g.categorySlug === cat);
      const catObj = CATEGORIES.find(c => c.slug === cat);
      if (filterLabel && catObj) filterLabel.textContent = catObj.name;
    } else if (filterLabel) {
      filterLabel.textContent = 'All Games';
    }
    if (grid) {
      if (list.length === 0) {
        grid.innerHTML = emptyStateBlock('No games in this category yet', 'Check back soon — we’re adding titles every week.', 'Back to home');
      } else {
        grid.innerHTML = list.map(renderGameCard).join('');
      }
    }
  }

  /* -------------------- BOOT: FAVORITES PAGE -------------------- */
  function renderFavoritesPage() {
    if (document.body.dataset.page !== 'favorites') return;
    const favs = (Store?.getFavorites() || []).map(gameBySlug).filter(Boolean);
    renderIntoGrid(
      '[data-grid="favorites"]',
      favs,
      emptyStateBlock('No favorites yet', 'Tap the heart on any game to save it here for quick access.', 'Find games you love')
    );
  }

  /* -------------------- BOOT: CONTINUE PLAYING PAGE -------------------- */
  function renderContinuePage() {
    if (document.body.dataset.page !== 'continue') return;
    const items = (Store?.getContinuePlaying() || []).map(e => gameBySlug(e.slug)).filter(Boolean);
    renderIntoGrid(
      '[data-grid="continue-list"]',
      items,
      emptyStateBlock('Nothing to resume', 'Open a game and it’ll show up here so you can jump back in.', 'Browse games')
    );
  }

  /* -------------------- FAVORITE TOGGLE (delegated) -------------------- */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.pz-fav-btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const slug = btn.dataset.slug;
    if (!slug || !Store) return;
    const nowFav = Store.toggleFavorite(slug);
    btn.setAttribute('aria-pressed', nowFav);
    btn.setAttribute('aria-label', nowFav ? 'Remove from favorites' : 'Add to favorites');
    const icon = btn.querySelector('svg');
    if (icon) {
      icon.classList.toggle('fill-rose-500', nowFav);
      icon.classList.toggle('text-rose-500', nowFav);
      icon.classList.toggle('fill-none', !nowFav);
      icon.classList.toggle('text-white', !nowFav);
    }
  });

  // Re-render favorites page when a favorite changes
  document.addEventListener('playzen:favorites-changed', () => {
    if (document.body.dataset.page === 'favorites') renderFavoritesPage();
  });

  /* -------------------- MOBILE NAV -------------------- */
  function setupMobileNav() {
    const btn = document.querySelector('[data-mobile-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!open));
    });
  }

  /* -------------------- CURRENT YEAR -------------------- */
  function setYear() {
    document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  }

  /* -------------------- BOOT -------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    setYear();
    setupMobileNav();
    renderHome();
    renderTrending();
    renderCategoriesPage();
    renderFavoritesPage();
    renderContinuePage();
  });
})();
