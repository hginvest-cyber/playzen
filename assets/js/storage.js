/*
 * PlayZen — Storage Layer
 * ----------------------------------------------------------------------------
 * Thin wrapper around localStorage for favorites, recently played, and
 * continue-playing tracking. All functions are safe to call on any page and
 * will no-op gracefully if localStorage is unavailable (private browsing etc).
 */

const PZ_KEYS = {
  FAVORITES: 'playzen:favorites',
  RECENT: 'playzen:recentlyPlayed',
  CONTINUE: 'playzen:continuePlaying'
};

const PZ_LIMITS = {
  RECENT: 10,
  CONTINUE: 8
};

const PlayZenStorage = (() => {
  function safeGet(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed ?? fallback;
    } catch (e) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  /* -------------------- FAVORITES -------------------- */
  function getFavorites() {
    return safeGet(PZ_KEYS.FAVORITES, []);
  }

  function isFavorite(slug) {
    return getFavorites().includes(slug);
  }

  function toggleFavorite(slug) {
    const favs = getFavorites();
    const i = favs.indexOf(slug);
    if (i >= 0) favs.splice(i, 1);
    else favs.unshift(slug);
    safeSet(PZ_KEYS.FAVORITES, favs);
    document.dispatchEvent(new CustomEvent('playzen:favorites-changed', { detail: { slug, isFav: i < 0 } }));
    return i < 0;
  }

  /* -------------------- RECENTLY PLAYED -------------------- */
  function getRecentlyPlayed() {
    return safeGet(PZ_KEYS.RECENT, []);
  }

  function addRecentlyPlayed(slug) {
    if (!slug) return;
    const list = getRecentlyPlayed().filter(entry => entry.slug !== slug);
    list.unshift({ slug, playedAt: Date.now() });
    safeSet(PZ_KEYS.RECENT, list.slice(0, PZ_LIMITS.RECENT));
  }

  /* -------------------- CONTINUE PLAYING -------------------- */
  /*
   * "Continue Playing" is a slightly different concept from recently played:
   * it tracks games the user engaged with for more than a trivial moment
   * (e.g. opened the embed). We update it on game page load after a short
   * delay so that accidental visits don't pollute it.
   */
  function getContinuePlaying() {
    return safeGet(PZ_KEYS.CONTINUE, []);
  }

  function markContinuePlaying(slug) {
    if (!slug) return;
    const list = getContinuePlaying().filter(entry => entry.slug !== slug);
    list.unshift({ slug, lastOpened: Date.now() });
    safeSet(PZ_KEYS.CONTINUE, list.slice(0, PZ_LIMITS.CONTINUE));
  }

  function clearContinuePlaying(slug) {
    if (!slug) {
      safeSet(PZ_KEYS.CONTINUE, []);
      return;
    }
    const list = getContinuePlaying().filter(entry => entry.slug !== slug);
    safeSet(PZ_KEYS.CONTINUE, list);
  }

  return {
    getFavorites,
    isFavorite,
    toggleFavorite,
    getRecentlyPlayed,
    addRecentlyPlayed,
    getContinuePlaying,
    markContinuePlaying,
    clearContinuePlaying
  };
})();

window.PlayZenStorage = PlayZenStorage;
