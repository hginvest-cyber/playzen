/*
 * PlayZen — Games Data Layer
 * ----------------------------------------------------------------------------
 * Central catalog of games shown across the site. Each record is used by:
 *   - index.html (featured / trending / recently played / continue playing)
 *   - trending.html, categories.html, favorites.html, continue-playing.html
 *   - /games/<slug>.html (individual game pages)
 *
 * To add a new game:
 *   1. Append a new object to the PLAYZEN_GAMES array below.
 *   2. (Optional) Create a full /games/<slug>.html detail page.
 *      If no detail page exists, `hasPage: false` will make cards link to
 *      the category page instead of a broken URL.
 *
 * IMPORTANT — EMBED URLS / LEGAL POSITIONING:
 *   PlayZen does NOT claim ownership of any game. Games are embedded from
 *   third-party sources. Before launching, replace every `embedUrl` marked
 *   with "REPLACE" with an officially licensed or developer-authorized URL.
 *   Do NOT embed content you do not have permission to embed.
 *
 *   The placeholder "about:blank" ensures no unauthorized content loads
 *   until you explicitly plug in an authorized source.
 */

const PLAYZEN_GAMES = [
  {
    id: 'pz-2048',
    slug: '2048',
    title: '2048',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    shortDescription: 'Slide tiles, combine numbers, reach 2048.',
    longDescription:
      '2048 is a clean, minimal puzzle game where you combine matching number tiles by sliding them across a 4x4 grid. Every move spawns a new tile, and every merge doubles the value. Reach the 2048 tile to clear the classic challenge — then keep going to chase even higher scores. Easy to learn, hard to master, and perfect for a quick brain warmup.',
    thumbnail: 'assets/images/thumb-2048.png', // Replace with a 600x400 thumbnail
    thumbGradient: 'from-amber-500 via-orange-500 to-rose-500',
    // MIT-licensed, original developer's GitHub Pages host. Confirmed embeddable.
    embedUrl: 'https://gabrielecirulli.github.io/2048/',
    externalUrl: 'https://play2048.co/', // Fallback if user wants to open in new tab (official site)
    controls: [
      { key: 'Arrow Keys', description: 'Slide tiles up, down, left, or right' },
      { key: 'W A S D', description: 'Alternative movement controls' },
      { key: 'Swipe', description: 'On touch devices, swipe in any direction' }
    ],
    tips: [
      'Keep your highest tile locked into one corner and build around it.',
      'Avoid moves that scatter your largest tiles.',
      'Plan two moves ahead — every swipe creates a new tile somewhere.',
      'Don’t chase quick merges; slow, structured play beats speed.'
    ],
    isFeatured: true,
    isTrending: true,
    plays: 482300,
    rating: 4.8,
    hasPage: true,
    relatedGames: ['slope', 'crossy-road-style', 'color-match', 'tower-stack']
  },
  {
    id: 'pz-slope',
    slug: 'slope',
    title: 'Slope',
    category: 'Endless Runner',
    categorySlug: 'endless-runner',
    shortDescription: 'Roll a ball down an endless neon slope.',
    longDescription:
      'Slope is a fast, reflex-driven endless runner where you steer a ball down a neon-lit 3D track. Dodge obstacles, hug the edges, and push for a higher score as the speed ramps up. Every run is a new pattern. Quick to pick up, brutally addictive, and perfect for short sessions on desktop or mobile.',
    thumbnail: 'assets/images/thumb-slope.png',
    thumbGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    // Replace this embedUrl with an officially licensed or authorized embed URL.
    embedUrl: 'about:blank',
    externalUrl: '#',
    controls: [
      { key: 'A / Left Arrow', description: 'Steer left' },
      { key: 'D / Right Arrow', description: 'Steer right' },
      { key: 'Touch', description: 'Tilt / tap left and right on mobile' }
    ],
    tips: [
      'Stay near the center early — it gives you more reaction room.',
      'Small, frequent corrections beat big panic swerves.',
      'Watch the horizon, not the ball.',
      'Don’t fight the speed — lean into it and anticipate.'
    ],
    isFeatured: true,
    isTrending: true,
    plays: 391200,
    rating: 4.7,
    hasPage: true,
    relatedGames: ['2048', 'crossy-road-style', 'pixel-dash', 'tower-stack']
  },
  {
    id: 'pz-crossy',
    slug: 'crossy-road-style',
    title: 'Block Hopper',
    category: 'Arcade',
    categorySlug: 'arcade',
    shortDescription: 'Hop across roads, rivers, and rails. Don’t stop.',
    longDescription:
      'Block Hopper is a Crossy-Road-style arcade game where you tap forward and dodge traffic, logs, and trains one step at a time. Voxel visuals, instant restarts, and "one more run" pacing make it perfect for casual play. Unlock characters, chase high scores, and see how far you can hop before you slip up.',
    thumbnail: 'assets/images/thumb-blockhopper.png',
    thumbGradient: 'from-indigo-500 via-purple-500 to-fuchsia-500',
    // Replace this embedUrl with an officially licensed or authorized embed URL.
    embedUrl: 'about:blank',
    externalUrl: '#',
    controls: [
      { key: 'Arrow Keys / WASD', description: 'Move one square in any direction' },
      { key: 'Space', description: 'Hop forward' },
      { key: 'Tap / Swipe', description: 'Move on touch devices' }
    ],
    tips: [
      'Never stop moving forward — the camera will catch you.',
      'Time log jumps to the middle, not the edges.',
      'Watch two lanes ahead, not the lane you’re in.',
      'When in doubt, sidestep instead of rushing.'
    ],
    isFeatured: true,
    isTrending: true,
    plays: 274500,
    rating: 4.6,
    hasPage: true,
    relatedGames: ['slope', '2048', 'pixel-dash', 'color-match']
  },
  {
    id: 'pz-color-match',
    slug: 'color-match',
    title: 'Color Match',
    category: 'Casual',
    categorySlug: 'casual',
    shortDescription: 'Tap the right color before time runs out.',
    longDescription:
      'A clean, minimal reflex game where you match falling tiles to the right color lane. Simple rules, escalating speed, and a pure high-score chase.',
    thumbnail: 'assets/images/thumb-colormatch.png',
    thumbGradient: 'from-pink-500 via-rose-500 to-red-500',
    embedUrl: 'about:blank',
    externalUrl: '#',
    controls: [
      { key: '1 / 2 / 3 / 4', description: 'Select color lane' },
      { key: 'Tap', description: 'Tap the matching color on mobile' }
    ],
    tips: [
      'Rest your fingers on the home keys for faster reactions.',
      'Glance ahead at the next tile, not the current one.'
    ],
    isFeatured: false,
    isTrending: true,
    plays: 118400,
    rating: 4.4,
    hasPage: false,
    relatedGames: ['2048', 'tower-stack', 'pixel-dash']
  },
  {
    id: 'pz-tower-stack',
    slug: 'tower-stack',
    title: 'Tower Stack',
    category: 'Reflex',
    categorySlug: 'reflex',
    shortDescription: 'Stack blocks as high as you can without slipping.',
    longDescription:
      'Time your taps to stack moving blocks into a perfect tower. Miss the alignment and your tower shrinks. A perfect run feels incredible — a bad run is instantly over.',
    thumbnail: 'assets/images/thumb-towerstack.png',
    thumbGradient: 'from-sky-500 via-blue-500 to-indigo-500',
    embedUrl: 'about:blank',
    externalUrl: '#',
    controls: [
      { key: 'Space / Click', description: 'Drop the moving block' },
      { key: 'Tap', description: 'Tap anywhere on mobile' }
    ],
    tips: [
      'Tap slightly early — input has a tiny delay.',
      'Focus on one edge of the block, not the whole thing.'
    ],
    isFeatured: false,
    isTrending: true,
    plays: 92300,
    rating: 4.5,
    hasPage: false,
    relatedGames: ['slope', '2048', 'color-match']
  },
  {
    id: 'pz-pixel-dash',
    slug: 'pixel-dash',
    title: 'Pixel Dash',
    category: 'Arcade',
    categorySlug: 'arcade',
    shortDescription: 'A retro one-button runner with tight controls.',
    longDescription:
      'Pixel Dash is a one-button platform runner with precise jumps and instant restarts. Perfect for quick sessions between meetings.',
    thumbnail: 'assets/images/thumb-pixeldash.png',
    thumbGradient: 'from-yellow-400 via-amber-500 to-orange-600',
    embedUrl: 'about:blank',
    externalUrl: '#',
    controls: [
      { key: 'Space / Click / Tap', description: 'Jump' }
    ],
    tips: [
      'Short taps for small hops, hold for bigger jumps.',
      'Memorize patterns — the map never changes.'
    ],
    isFeatured: false,
    isTrending: false,
    plays: 67200,
    rating: 4.3,
    hasPage: false,
    relatedGames: ['slope', 'crossy-road-style']
  },
  {
    id: 'pz-mind-match',
    slug: 'mind-match',
    title: 'Mind Match',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    shortDescription: 'Classic memory match with a modern twist.',
    longDescription:
      'Flip cards, memorize pairs, and clear the board in as few moves as possible. Great for short mental warmups.',
    thumbnail: 'assets/images/thumb-mindmatch.png',
    thumbGradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
    embedUrl: 'about:blank',
    externalUrl: '#',
    controls: [{ key: 'Click / Tap', description: 'Flip a card' }],
    tips: ['Say pairs out loud — it helps retention.', 'Start from the corners.'],
    isFeatured: false,
    isTrending: false,
    plays: 54100,
    rating: 4.2,
    hasPage: false,
    relatedGames: ['2048', 'color-match']
  },
  {
    id: 'pz-word-rush',
    slug: 'word-rush',
    title: 'Word Rush',
    category: 'Strategy',
    categorySlug: 'strategy',
    shortDescription: 'Build the longest word before the timer dies.',
    longDescription:
      'Drag letters to form valid words under pressure. Longer words earn multipliers. A fast, brain-friendly way to kill three minutes.',
    thumbnail: 'assets/images/thumb-wordrush.png',
    thumbGradient: 'from-lime-500 via-green-500 to-emerald-600',
    embedUrl: 'about:blank',
    externalUrl: '#',
    controls: [
      { key: 'Drag / Click', description: 'Select connected letters' },
      { key: 'Enter', description: 'Submit your word' }
    ],
    tips: ['Hunt for common suffixes first: -ING, -ED, -ER.', 'Longer isn’t always safer — bank points early.'],
    isFeatured: false,
    isTrending: false,
    plays: 41800,
    rating: 4.1,
    hasPage: false,
    relatedGames: ['2048', 'mind-match']
  }
];

/* Categories used across the site */
const PLAYZEN_CATEGORIES = [
  { slug: 'puzzle', name: 'Puzzle', description: 'Logic, numbers, and brain benders.', icon: '🧩', gradient: 'from-amber-500 to-rose-500' },
  { slug: 'arcade', name: 'Arcade', description: 'Pick up, play, chase the high score.', icon: '🕹️', gradient: 'from-indigo-500 to-fuchsia-500' },
  { slug: 'endless-runner', name: 'Endless Runner', description: 'How far can you go before you slip up?', icon: '🏃', gradient: 'from-emerald-500 to-cyan-500' },
  { slug: 'strategy', name: 'Strategy', description: 'Think, plan, outsmart the clock.', icon: '♟️', gradient: 'from-lime-500 to-emerald-600' },
  { slug: 'reflex', name: 'Reflex', description: 'Split-second taps. Pure timing.', icon: '⚡', gradient: 'from-sky-500 to-indigo-500' },
  { slug: 'casual', name: 'Casual', description: 'Low-pressure games for any mood.', icon: '🎈', gradient: 'from-pink-500 to-red-500' }
];

/* Expose on window for vanilla scripts */
window.PLAYZEN_GAMES = PLAYZEN_GAMES;
window.PLAYZEN_CATEGORIES = PLAYZEN_CATEGORIES;
