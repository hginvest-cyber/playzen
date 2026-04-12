/*
 * PlayZen — Games Data Layer
 * ----------------------------------------------------------------------------
 * Central catalog of games shown across the site.
 *
 * IMPORTANT — EMBED URLS / LEGAL POSITIONING:
 *   PlayZen does NOT claim ownership of any game. Games are embedded from
 *   third-party sources. All games listed here are either MIT-licensed,
 *   open-source, or offered for free embedding by their creators.
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
      '2048 is a clean, minimal puzzle game where you combine matching number tiles by sliding them across a 4×4 grid. Every move spawns a new tile, and every merge doubles the value. Reach the 2048 tile to clear the classic challenge — then keep going to chase even higher scores.',
    thumbnail: 'assets/images/thumb-2048.png',
    thumbGradient: 'from-amber-500 via-orange-500 to-rose-500',
    embedUrl: 'https://gabrielecirulli.github.io/2048/',
    externalUrl: 'https://play2048.co/',
    controls: [
      { key: 'Arrow Keys', description: 'Slide tiles up, down, left, or right' },
      { key: 'W A S D', description: 'Alternative movement controls' },
      { key: 'Swipe', description: 'On touch devices, swipe in any direction' }
    ],
    tips: [
      'Keep your highest tile locked into one corner and build around it.',
      'Avoid moves that scatter your largest tiles.',
      'Plan two moves ahead — every swipe creates a new tile somewhere.',
      'Don\'t chase quick merges; slow, structured play beats speed.'
    ],
    isFeatured: true,
    isTrending: true,
    plays: 482300,
    rating: 4.8,
    hasPage: true,
    relatedGames: ['hextris', 'sudoku', 'tetris', 'chess']
  },
  {
    id: 'pz-hextris',
    slug: 'hextris',
    title: 'Hextris',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    shortDescription: 'A fast-paced hexagonal puzzle — rotate and match colors.',
    longDescription:
      'Hextris is a fast-paced puzzle game inspired by Tetris but played on a hexagonal grid. Colored blocks fly toward the center hexagon from all six sides. Rotate the hexagon to catch matching colors together and clear them before they stack too high. Simple to learn, impossible to put down.',
    thumbnail: 'assets/images/thumb-hextris.png',
    thumbGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    embedUrl: 'https://hextris.io/',
    externalUrl: 'https://hextris.io/',
    controls: [
      { key: 'Left Arrow / A', description: 'Rotate hexagon counter-clockwise' },
      { key: 'Right Arrow / D', description: 'Rotate hexagon clockwise' },
      { key: 'Tap Left/Right', description: 'Rotate on mobile' }
    ],
    tips: [
      'Focus on clearing one color at a time rather than juggling all six.',
      'Rotate early — don\'t wait for a block to reach the center.',
      'Watch the edges for incoming blocks, not the center.',
      'Speed increases over time, so build good habits early.'
    ],
    isFeatured: true,
    isTrending: true,
    plays: 312000,
    rating: 4.7,
    hasPage: true,
    relatedGames: ['2048', 'tetris', 'sudoku', 'tower-stack']
  },
  {
    id: 'pz-flappy',
    slug: 'flappy-bird',
    title: 'Flappy Bird',
    category: 'Arcade',
    categorySlug: 'arcade',
    shortDescription: 'Tap to fly. Dodge the pipes. Don\'t crash.',
    longDescription:
      'The legendary one-tap arcade game. Tap or click to flap your wings and navigate through gaps in the pipes. Sounds easy? The unforgiving physics and tight gaps will test your patience and reflexes. Every point feels earned in this brutally simple classic.',
    thumbnail: 'assets/images/thumb-flappy.png',
    thumbGradient: 'from-green-400 via-lime-500 to-yellow-500',
    embedUrl: 'https://nebez.github.io/floppybird/',
    externalUrl: 'https://nebez.github.io/floppybird/',
    controls: [
      { key: 'Space / Click', description: 'Flap wings' },
      { key: 'Tap', description: 'Flap on mobile' }
    ],
    tips: [
      'Tap in short, consistent bursts — don\'t hold or mash.',
      'Focus on the next gap, not the bird.',
      'Stay in the center of gaps — don\'t hug the edges.',
      'The first five pipes are the hardest. Stay calm.'
    ],
    isFeatured: true,
    isTrending: true,
    plays: 398000,
    rating: 4.6,
    hasPage: true,
    relatedGames: ['tower-stack', 'hextris', 'tetris', '2048']
  },
  {
    id: 'pz-tetris',
    slug: 'tetris',
    title: 'Tetris',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    shortDescription: 'The original block-stacking classic. Clear lines to survive.',
    longDescription:
      'The most iconic puzzle game ever made. Rotate and drop falling tetrominoes to complete horizontal lines. Cleared lines disappear, earning points and buying you more room. As the speed increases, every move counts. A timeless game that\'s just as addictive today as it was decades ago.',
    thumbnail: 'assets/images/thumb-tetris.png',
    thumbGradient: 'from-sky-500 via-blue-500 to-indigo-500',
    embedUrl: 'https://chvin.github.io/react-tetris/',
    externalUrl: 'https://chvin.github.io/react-tetris/',
    controls: [
      { key: 'Left / Right Arrow', description: 'Move piece sideways' },
      { key: 'Up Arrow', description: 'Rotate piece' },
      { key: 'Down Arrow', description: 'Soft drop' },
      { key: 'Space', description: 'Hard drop' },
      { key: 'P', description: 'Pause' }
    ],
    tips: [
      'Keep the board flat — avoid building towers on one side.',
      'Save I-pieces (long bars) for four-line clears (Tetris!).',
      'Play the piece preview — always plan one step ahead.',
      'Speed up soft drops to place pieces faster and buy time.'
    ],
    isFeatured: true,
    isTrending: true,
    plays: 527000,
    rating: 4.9,
    hasPage: true,
    relatedGames: ['hextris', '2048', 'sudoku', 'tower-stack']
  },
  {
    id: 'pz-tower',
    slug: 'tower-stack',
    title: 'Tower Stack',
    category: 'Arcade',
    categorySlug: 'arcade',
    shortDescription: 'Stack blocks as high as you can without slipping.',
    longDescription:
      'Time your taps to stack moving blocks into a perfect tower. Miss the alignment and your tower shrinks. A perfect run feels incredible — a bad run is instantly over. Pure timing, zero fluff, maximum satisfaction.',
    thumbnail: 'assets/images/thumb-towerstack.png',
    thumbGradient: 'from-pink-500 via-rose-500 to-red-500',
    embedUrl: 'https://iamkun.github.io/tower_game/',
    externalUrl: 'https://iamkun.github.io/tower_game/',
    controls: [
      { key: 'Space / Click', description: 'Drop the moving block' },
      { key: 'Tap', description: 'Tap anywhere on mobile' }
    ],
    tips: [
      'Tap slightly early — there\'s a tiny input delay.',
      'Focus on one edge of the block, not the whole thing.',
      'Perfect stacks build momentum — aim for pixel-perfect alignment.',
      'Stay relaxed. Tension leads to mistimed taps.'
    ],
    isFeatured: true,
    isTrending: true,
    plays: 245000,
    rating: 4.5,
    hasPage: true,
    relatedGames: ['flappy-bird', 'tetris', 'hextris', '2048']
  },
  {
    id: 'pz-chess',
    slug: 'chess',
    title: 'Chess',
    category: 'Strategy',
    categorySlug: 'strategy',
    shortDescription: 'The timeless strategy game. Play against the computer.',
    longDescription:
      'Play chess against an AI opponent right in your browser. Perfect for practicing openings, sharpening tactics, or just enjoying the world\'s greatest strategy game during a break. Multiple difficulty levels make it suitable for beginners and experienced players alike.',
    thumbnail: 'assets/images/thumb-chess.png',
    thumbGradient: 'from-slate-400 via-zinc-500 to-stone-600',
    embedUrl: 'https://playpager.com/embed/chess/game/index.html',
    externalUrl: 'https://playpager.com/embed/chess/game/index.html',
    controls: [
      { key: 'Click / Tap', description: 'Select and move pieces' },
      { key: 'Drag', description: 'Drag pieces to destination squares' }
    ],
    tips: [
      'Control the center of the board in the opening.',
      'Develop knights and bishops before moving your queen.',
      'Castle early to protect your king.',
      'Think about your opponent\'s threats before making your move.'
    ],
    isFeatured: false,
    isTrending: true,
    plays: 189000,
    rating: 4.7,
    hasPage: true,
    relatedGames: ['sudoku', '2048', 'solitaire', 'hextris']
  },
  {
    id: 'pz-sudoku',
    slug: 'sudoku',
    title: 'Sudoku',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    shortDescription: 'Fill the grid. Use logic. No math required.',
    longDescription:
      'The classic number-placement puzzle. Fill each row, column, and 3×3 box with the digits 1–9 without repeating. Multiple difficulty levels from beginner to advanced. A perfect brain exercise that rewards patience and logical thinking.',
    thumbnail: 'assets/images/thumb-sudoku.png',
    thumbGradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    embedUrl: 'https://playpager.com/embed/sudoku/game/index.html',
    externalUrl: 'https://playpager.com/embed/sudoku/game/index.html',
    controls: [
      { key: 'Click / Tap', description: 'Select a cell' },
      { key: '1–9', description: 'Place a number' },
      { key: 'Delete / Backspace', description: 'Clear a cell' }
    ],
    tips: [
      'Start with rows, columns, or boxes that already have the most numbers.',
      'Use pencil marks to track possibilities in each cell.',
      'Look for "naked singles" — cells where only one number can go.',
      'If you\'re stuck, scan for hidden pairs in rows and columns.'
    ],
    isFeatured: false,
    isTrending: true,
    plays: 203000,
    rating: 4.6,
    hasPage: true,
    relatedGames: ['2048', 'chess', 'solitaire', 'hextris']
  },
  {
    id: 'pz-solitaire',
    slug: 'solitaire',
    title: 'Solitaire',
    category: 'Casual',
    categorySlug: 'casual',
    shortDescription: 'Classic card game. Sort, stack, and clear the board.',
    longDescription:
      'The timeless single-player card game. Move cards between columns, build foundation piles from Ace to King, and try to clear the entire board. Three difficulty modes and a built-in timer keep every session fresh. The perfect game for winding down.',
    thumbnail: 'assets/images/thumb-solitaire.png',
    thumbGradient: 'from-lime-500 via-green-500 to-emerald-600',
    embedUrl: 'https://playpager.com/embed/solitaire/game/index.html',
    externalUrl: 'https://playpager.com/embed/solitaire/game/index.html',
    controls: [
      { key: 'Click / Tap', description: 'Select and place cards' },
      { key: 'Drag', description: 'Drag cards between columns' },
      { key: 'Double-click', description: 'Auto-move card to foundation' }
    ],
    tips: [
      'Always move Aces and Twos to foundations immediately.',
      'Uncover face-down cards as your first priority.',
      'Keep columns balanced — don\'t empty a column without a King ready.',
      'Use the undo button sparingly to learn from mistakes.'
    ],
    isFeatured: false,
    isTrending: false,
    plays: 167000,
    rating: 4.4,
    hasPage: true,
    relatedGames: ['chess', 'sudoku', '2048', 'tetris']
  }
];

/* Categories used across the site */
const PLAYZEN_CATEGORIES = [
  { slug: 'puzzle', name: 'Puzzle', description: 'Logic, numbers, and brain benders.', icon: '🧩', gradient: 'from-amber-500 to-rose-500' },
  { slug: 'arcade', name: 'Arcade', description: 'Pick up, play, chase the high score.', icon: '🕹️', gradient: 'from-indigo-500 to-fuchsia-500' },
  { slug: 'strategy', name: 'Strategy', description: 'Think, plan, outsmart the clock.', icon: '♟️', gradient: 'from-lime-500 to-emerald-600' },
  { slug: 'casual', name: 'Casual', description: 'Low-pressure games for any mood.', icon: '🎈', gradient: 'from-pink-500 to-red-500' }
];

/* Expose on window for vanilla scripts */
window.PLAYZEN_GAMES = PLAYZEN_GAMES;
window.PLAYZEN_CATEGORIES = PLAYZEN_CATEGORIES;
