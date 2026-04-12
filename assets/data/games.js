/*
 * PlayZen — Games Data Layer
 * Central catalog of games shown across the site.
 *
 * All games are embedded from open-source or freely embeddable sources.
 * PlayZen does not host or modify any game files.
 */

const PLAYZEN_GAMES = [
  /* ─── PUZZLE ───────────────────────────────────────────── */
  {
    id: 'pz-2048', slug: '2048', title: '2048',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Slide tiles, combine numbers, reach 2048.',
    longDescription: '2048 is a clean, minimal puzzle game where you combine matching number tiles by sliding them across a 4\u00d74 grid. Every move spawns a new tile, and every merge doubles the value.',
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
      'Plan two moves ahead \u2014 every swipe creates a new tile somewhere.',
      'Don\'t chase quick merges; slow, structured play beats speed.'
    ],
    isFeatured: true, isTrending: true, plays: 482300, rating: 4.8, hasPage: true,
    relatedGames: ['hextris', 'sudoku', 'tetris', '2048-tetris']
  },
  {
    id: 'pz-hextris', slug: 'hextris', title: 'Hextris',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'A fast-paced hexagonal puzzle \u2014 rotate and match colors.',
    longDescription: 'Hextris is a fast-paced puzzle game played on a hexagonal grid. Colored blocks fly toward the center hexagon from all six sides. Rotate the hexagon to catch matching colors together and clear them.',
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
      'Rotate early \u2014 don\'t wait for a block to reach the center.',
      'Watch the edges for incoming blocks, not the center.',
      'Speed increases over time, so build good habits early.'
    ],
    isFeatured: true, isTrending: true, plays: 312000, rating: 4.7, hasPage: true,
    relatedGames: ['2048', 'tetris', 'match-3', 'cubes']
  },
  {
    id: 'pz-tetris', slug: 'tetris', title: 'Tetris',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'The original block-stacking classic. Clear lines to survive.',
    longDescription: 'The most iconic puzzle game ever made. Rotate and drop falling tetrominoes to complete horizontal lines. As the speed increases, every move counts.',
    thumbnail: 'assets/images/thumb-tetris.png',
    thumbGradient: 'from-sky-500 via-blue-500 to-indigo-500',
    embedUrl: 'https://chvin.github.io/react-tetris/',
    externalUrl: 'https://chvin.github.io/react-tetris/',
    controls: [
      { key: 'Left / Right Arrow', description: 'Move piece sideways' },
      { key: 'Up Arrow', description: 'Rotate piece' },
      { key: 'Down Arrow', description: 'Soft drop' },
      { key: 'Space', description: 'Hard drop' }
    ],
    tips: [
      'Keep the board flat \u2014 avoid building towers on one side.',
      'Save I-pieces (long bars) for four-line clears (Tetris!).',
      'Play the piece preview \u2014 always plan one step ahead.',
      'Speed up soft drops to place pieces faster and buy time.'
    ],
    isFeatured: true, isTrending: true, plays: 527000, rating: 4.9, hasPage: true,
    relatedGames: ['hextris', '2048', '2048-tetris', 'brick-breaker']
  },
  {
    id: 'pz-sudoku', slug: 'sudoku', title: 'Sudoku',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Fill the grid. Use logic. No math required.',
    longDescription: 'The classic number-placement puzzle. Fill each row, column, and 3\u00d73 box with the digits 1\u20139 without repeating. Multiple difficulty levels from beginner to advanced.',
    thumbnail: 'assets/images/thumb-sudoku.png',
    thumbGradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    embedUrl: 'https://playpager.com/embed/sudoku/game/index.html',
    externalUrl: 'https://playpager.com/embed/sudoku/game/index.html',
    controls: [
      { key: 'Click / Tap', description: 'Select a cell' },
      { key: '1\u20139', description: 'Place a number' },
      { key: 'Delete / Backspace', description: 'Clear a cell' }
    ],
    tips: [
      'Start with rows, columns, or boxes that already have the most numbers.',
      'Use pencil marks to track possibilities in each cell.',
      'Look for "naked singles" \u2014 cells where only one number can go.',
      'If you\'re stuck, scan for hidden pairs in rows and columns.'
    ],
    isFeatured: false, isTrending: true, plays: 203000, rating: 4.6, hasPage: true,
    relatedGames: ['2048', 'minesweeper', 'wordle', 'sokoban']
  },
  {
    id: 'pz-memory', slug: 'memory-match', title: 'Memory Match',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Flip cards, find pairs, train your memory.',
    longDescription: 'A classic card-matching memory game. Flip two cards at a time and try to find all matching pairs. The fewer moves you make, the better your score.',
    thumbnail: 'assets/images/thumb-memory.png',
    thumbGradient: 'from-pink-500 via-rose-400 to-red-400',
    embedUrl: 'https://taniarascia.github.io/memory/',
    externalUrl: 'https://taniarascia.github.io/memory/',
    controls: [
      { key: 'Click / Tap', description: 'Flip a card' }
    ],
    tips: [
      'Start from the corners and work inward systematically.',
      'Try to remember the position of every card you flip, even mismatches.',
      'Focus on one row at a time to reduce mental load.',
      'Take your time \u2014 accuracy matters more than speed.'
    ],
    isFeatured: true, isTrending: true, plays: 175000, rating: 4.5, hasPage: true,
    relatedGames: ['minesweeper', '2048', 'match-3', 'sudoku']
  },
  {
    id: 'pz-wordle', slug: 'wordle', title: 'Wordle',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Guess the five-letter word in six tries.',
    longDescription: 'The viral word-guessing game. You have six attempts to guess a five-letter word. After each guess, colored tiles show how close you are: green for correct position, yellow for wrong position, gray for not in the word.',
    thumbnail: 'assets/images/thumb-wordle.png',
    thumbGradient: 'from-green-500 via-yellow-500 to-slate-500',
    embedUrl: 'https://bosorioo.github.io/wordle-unlimited/',
    externalUrl: 'https://bosorioo.github.io/wordle-unlimited/',
    controls: [
      { key: 'Keyboard', description: 'Type your guess' },
      { key: 'Enter', description: 'Submit guess' },
      { key: 'Backspace', description: 'Delete letter' }
    ],
    tips: [
      'Start with a word that has common vowels and consonants (e.g., CRANE, STARE).',
      'Use the colored feedback to eliminate impossible letters.',
      'Don\'t reuse gray letters \u2014 focus on untested ones.',
      'Think about common letter patterns and word endings.'
    ],
    isFeatured: true, isTrending: true, plays: 345000, rating: 4.8, hasPage: true,
    relatedGames: ['word-puzzle', 'word-guess', 'sudoku', 'memory-match']
  },
  {
    id: 'pz-wordpuzzle', slug: 'word-puzzle', title: 'Word Puzzle',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Find hidden words in a grid of letters.',
    longDescription: 'A classic word search puzzle. Find all the hidden words in the letter grid by scanning horizontally, vertically, and diagonally. Great for vocabulary building and pattern recognition.',
    thumbnail: 'assets/images/thumb-wordpuzzle.png',
    thumbGradient: 'from-teal-500 via-cyan-500 to-blue-500',
    embedUrl: 'https://playpager.com/embed/wordpuzzle/game/index.html',
    externalUrl: 'https://playpager.com/embed/wordpuzzle/game/index.html',
    controls: [
      { key: 'Click + Drag', description: 'Select letters to form a word' },
      { key: 'Tap + Swipe', description: 'Select on mobile' }
    ],
    tips: [
      'Scan for less common letters first \u2014 they narrow down word positions.',
      'Check diagonals \u2014 many players forget them.',
      'Work through the word list systematically rather than randomly searching.',
      'Found words are usually highlighted, helping you eliminate covered areas.'
    ],
    isFeatured: false, isTrending: false, plays: 134000, rating: 4.3, hasPage: true,
    relatedGames: ['wordle', 'word-guess', 'sudoku', 'memory-match']
  },
  {
    id: 'pz-cubes', slug: 'cubes', title: 'Cubes',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Clear colorful cubes by matching groups.',
    longDescription: 'A satisfying color-matching puzzle. Click on groups of same-colored cubes to clear them from the board. Larger groups score more points. Plan your clicks to maximize your score and clear the entire board.',
    thumbnail: 'assets/images/thumb-cubes.png',
    thumbGradient: 'from-orange-500 via-red-500 to-pink-500',
    embedUrl: 'https://playpager.com/embed/cubes/game/index.html',
    externalUrl: 'https://playpager.com/embed/cubes/game/index.html',
    controls: [
      { key: 'Click / Tap', description: 'Clear a group of matching cubes' }
    ],
    tips: [
      'Go for the largest groups first \u2014 bigger combos score exponentially more.',
      'Don\'t click single cubes or small groups early on.',
      'Plan several moves ahead to create larger groups.',
      'Work from the top down to let gravity create new matches.'
    ],
    isFeatured: false, isTrending: false, plays: 98000, rating: 4.2, hasPage: true,
    relatedGames: ['match-3', '2048', 'hextris', 'tetris']
  },
  {
    id: 'pz-minesweeper', slug: 'minesweeper', title: 'Minesweeper',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Uncover tiles. Avoid mines. Use logic.',
    longDescription: 'The classic mine-finding puzzle with a fun emoji twist. Click tiles to reveal numbers that tell you how many mines are nearby. Use logic to flag all mines without detonating any.',
    thumbnail: 'assets/images/thumb-minesweeper.png',
    thumbGradient: 'from-gray-500 via-slate-500 to-zinc-600',
    embedUrl: 'https://muan.github.io/emoji-minesweeper/',
    externalUrl: 'https://muan.github.io/emoji-minesweeper/',
    controls: [
      { key: 'Click / Tap', description: 'Reveal a tile' },
      { key: 'Right-click / Long Press', description: 'Flag a suspected mine' }
    ],
    tips: [
      'Start by clicking a corner or edge \u2014 it\'s statistically safer.',
      'Numbers tell you exactly how many adjacent mines exist.',
      'If a number equals its adjacent flags, all remaining adjacent tiles are safe.',
      'Use the "1-2" pattern at borders to deduce mine positions.'
    ],
    isFeatured: true, isTrending: true, plays: 267000, rating: 4.7, hasPage: true,
    relatedGames: ['sudoku', '2048', 'sokoban', 'memory-match']
  },
  {
    id: 'pz-sokoban', slug: 'sokoban', title: 'Sokoban',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Push boxes to their targets. Think before you move.',
    longDescription: 'The legendary box-pushing puzzle game. Push crates onto designated spots in a warehouse maze. You can only push, never pull \u2014 so every move matters. Hundreds of levels from easy to mind-bending.',
    thumbnail: 'assets/images/thumb-sokoban.png',
    thumbGradient: 'from-yellow-600 via-amber-600 to-orange-600',
    embedUrl: 'https://omerkel.github.io/Sokoban/html5/src/',
    externalUrl: 'https://omerkel.github.io/Sokoban/html5/src/',
    controls: [
      { key: 'Arrow Keys', description: 'Move the player' },
      { key: 'Z / Ctrl+Z', description: 'Undo last move' },
      { key: 'R', description: 'Restart level' }
    ],
    tips: [
      'Never push a box into a corner unless the target is there.',
      'Work backwards from the solution \u2014 figure out where boxes need to end up.',
      'Avoid pushing boxes against walls where they can\'t be retrieved.',
      'Use undo liberally \u2014 experimentation is key to solving harder levels.'
    ],
    isFeatured: false, isTrending: true, plays: 145000, rating: 4.5, hasPage: true,
    relatedGames: ['astray', 'maze', 'sudoku', '2048']
  },
  {
    id: 'pz-astray', slug: 'astray', title: 'Astray',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Navigate a 3D maze by tilting the world.',
    longDescription: 'A beautiful 3D maze game built with Three.js. Tilt the maze to roll a ball through corridors and find the exit. The 3D perspective adds a unique spatial challenge to classic maze navigation.',
    thumbnail: 'assets/images/thumb-astray.png',
    thumbGradient: 'from-indigo-600 via-blue-600 to-cyan-600',
    embedUrl: 'https://wwwtyro.github.io/Astray/',
    externalUrl: 'https://wwwtyro.github.io/Astray/',
    controls: [
      { key: 'Arrow Keys / W A S D', description: 'Tilt the maze' },
      { key: 'Mouse', description: 'Look around' }
    ],
    tips: [
      'Move slowly \u2014 the ball gains momentum and can be hard to stop.',
      'Use walls to brake your ball when moving fast.',
      'Try to memorize the path from a bird\'s-eye mental map.',
      'Gentle taps work better than holding keys down.'
    ],
    isFeatured: true, isTrending: false, plays: 89000, rating: 4.4, hasPage: true,
    relatedGames: ['maze', 'sokoban', '2048', 'hextris']
  },
  {
    id: 'pz-match3', slug: 'match-3', title: 'Match 3',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Swap gems, match three or more, clear the board.',
    longDescription: 'The classic match-three puzzle. Swap adjacent gems to create rows or columns of three or more matching colors. Chain combos for massive scores and try to clear the entire board.',
    thumbnail: 'assets/images/thumb-match3.png',
    thumbGradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
    embedUrl: 'https://tebesoft.github.io/match-3/',
    externalUrl: 'https://tebesoft.github.io/match-3/',
    controls: [
      { key: 'Click + Drag', description: 'Swap two adjacent gems' },
      { key: 'Tap + Swipe', description: 'Swap on mobile' }
    ],
    tips: [
      'Look for matches at the bottom first \u2014 they cause chain reactions above.',
      'Create L-shaped or T-shaped matches for special gems.',
      'Plan two moves ahead rather than grabbing the first match you see.',
      'Combos multiply your score, so set up cascading matches.'
    ],
    isFeatured: false, isTrending: true, plays: 156000, rating: 4.4, hasPage: true,
    relatedGames: ['cubes', 'hextris', '2048', 'tetris']
  },
  {
    id: 'pz-2048tetris', slug: '2048-tetris', title: '2048 Tetris',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'The best of both worlds \u2014 2048 meets Tetris.',
    longDescription: 'A creative mashup of two iconic puzzle games. Falling blocks carry numbers that merge when they match, combining Tetris-style placement with 2048-style number merging. A unique twist on two classics.',
    thumbnail: 'assets/images/thumb-2048tetris.png',
    thumbGradient: 'from-amber-500 via-blue-500 to-indigo-500',
    embedUrl: 'https://kaloodinaz.github.io/2048-tetris/',
    externalUrl: 'https://kaloodinaz.github.io/2048-tetris/',
    controls: [
      { key: 'Left / Right Arrow', description: 'Move piece sideways' },
      { key: 'Up Arrow', description: 'Rotate piece' },
      { key: 'Down Arrow', description: 'Soft drop' },
      { key: 'Space', description: 'Hard drop' }
    ],
    tips: [
      'Keep same numbers adjacent so they can merge when lines clear.',
      'Don\'t stack different numbers on top of each other.',
      'Prioritize creating merges over clearing lines.',
      'The 2048 merge mechanic makes planning ahead even more important.'
    ],
    isFeatured: true, isTrending: false, plays: 78000, rating: 4.3, hasPage: true,
    relatedGames: ['2048', 'tetris', 'hextris', 'cubes']
  },
  {
    id: 'pz-maze', slug: 'maze', title: 'Maze Game',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Find your way through randomly generated mazes.',
    longDescription: 'Navigate through procedurally generated mazes of increasing complexity. A clean, minimal maze game that tests your spatial reasoning and pathfinding skills.',
    thumbnail: 'assets/images/thumb-maze.png',
    thumbGradient: 'from-lime-500 via-green-500 to-teal-500',
    embedUrl: 'https://kunalgarg2100.github.io/maze-game/',
    externalUrl: 'https://kunalgarg2100.github.io/maze-game/',
    controls: [
      { key: 'Arrow Keys / W A S D', description: 'Move through the maze' }
    ],
    tips: [
      'Use the right-hand rule: keep your right hand touching the wall and follow it.',
      'Look ahead for dead ends before committing to a path.',
      'Try to build a mental map of areas you\'ve explored.',
      'Backtrack quickly when you hit a dead end \u2014 don\'t hesitate.'
    ],
    isFeatured: false, isTrending: false, plays: 67000, rating: 4.1, hasPage: true,
    relatedGames: ['astray', 'sokoban', 'pac-man', 'untrusted']
  },
  {
    id: 'pz-csssweeper', slug: 'css-sweeper', title: 'CSS Sweeper',
    category: 'Puzzle', categorySlug: 'puzzle',
    shortDescription: 'Minesweeper built entirely with CSS \u2014 no JavaScript.',
    longDescription: 'A remarkable technical achievement: a fully playable Minesweeper clone built entirely with CSS and HTML, no JavaScript involved. Same classic gameplay, powered by pure CSS selectors and counters.',
    thumbnail: 'assets/images/thumb-csssweeper.png',
    thumbGradient: 'from-rose-500 via-red-500 to-orange-500',
    embedUrl: 'https://propjockey.github.io/css-sweeper/',
    externalUrl: 'https://propjockey.github.io/css-sweeper/',
    controls: [
      { key: 'Click / Tap', description: 'Reveal a cell' }
    ],
    tips: [
      'Same strategies as classic Minesweeper apply here.',
      'Start with corners and edges for safer first clicks.',
      'Count adjacent mines carefully before clicking.',
      'This version has no flag feature \u2014 rely on mental notes.'
    ],
    isFeatured: false, isTrending: false, plays: 45000, rating: 4.0, hasPage: true,
    relatedGames: ['minesweeper', 'sudoku', 'sokoban', '2048']
  },

  /* ─── ARCADE ───────────────────────────────────────────── */
  {
    id: 'pz-flappy', slug: 'flappy-bird', title: 'Flappy Bird',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Tap to fly. Dodge the pipes. Don\'t crash.',
    longDescription: 'The legendary one-tap arcade game. Tap or click to flap your wings and navigate through gaps in the pipes. The unforgiving physics and tight gaps will test your patience and reflexes.',
    thumbnail: 'assets/images/thumb-flappy.png',
    thumbGradient: 'from-green-400 via-lime-500 to-yellow-500',
    embedUrl: 'https://nebez.github.io/floppybird/',
    externalUrl: 'https://nebez.github.io/floppybird/',
    controls: [
      { key: 'Space / Click', description: 'Flap wings' },
      { key: 'Tap', description: 'Flap on mobile' }
    ],
    tips: [
      'Tap in short, consistent bursts \u2014 don\'t hold or mash.',
      'Focus on the next gap, not the bird.',
      'Stay in the center of gaps \u2014 don\'t hug the edges.',
      'The first five pipes are the hardest. Stay calm.'
    ],
    isFeatured: true, isTrending: true, plays: 398000, rating: 4.6, hasPage: true,
    relatedGames: ['clumsy-bird', 'tower-stack', 'ski-free', 'snake']
  },
  {
    id: 'pz-tower', slug: 'tower-stack', title: 'Tower Stack',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Stack blocks as high as you can without slipping.',
    longDescription: 'Time your taps to stack moving blocks into a perfect tower. Miss the alignment and your tower shrinks. Pure timing, zero fluff, maximum satisfaction.',
    thumbnail: 'assets/images/thumb-towerstack.png',
    thumbGradient: 'from-pink-500 via-rose-500 to-red-500',
    embedUrl: 'https://iamkun.github.io/tower_game/',
    externalUrl: 'https://iamkun.github.io/tower_game/',
    controls: [
      { key: 'Space / Click', description: 'Drop the moving block' },
      { key: 'Tap', description: 'Tap anywhere on mobile' }
    ],
    tips: [
      'Tap slightly early \u2014 there\'s a tiny input delay.',
      'Focus on one edge of the block, not the whole thing.',
      'Perfect stacks build momentum \u2014 aim for pixel-perfect alignment.',
      'Stay relaxed. Tension leads to mistimed taps.'
    ],
    isFeatured: true, isTrending: true, plays: 245000, rating: 4.5, hasPage: true,
    relatedGames: ['flappy-bird', 'tetris', 'brick-breaker', '2048']
  },
  {
    id: 'pz-snake', slug: 'snake', title: 'Snake',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Eat, grow, don\'t hit your own tail.',
    longDescription: 'The timeless snake game. Guide your snake to eat food and grow longer, but don\'t run into the walls or your own tail. Simple to learn, surprisingly hard to master as your snake fills the screen.',
    thumbnail: 'assets/images/thumb-snake.png',
    thumbGradient: 'from-green-500 via-emerald-500 to-teal-500',
    embedUrl: 'https://ramazancetinkaya.github.io/snake-game/',
    externalUrl: 'https://ramazancetinkaya.github.io/snake-game/',
    controls: [
      { key: 'Arrow Keys', description: 'Change direction' },
      { key: 'W A S D', description: 'Alternative controls' }
    ],
    tips: [
      'Stay near the center of the board when your snake is short.',
      'Create a predictable pattern \u2014 spiraling inward works well.',
      'Never chase food into a tight corner at high speeds.',
      'Keep your tail\'s path in mind to avoid self-collisions.'
    ],
    isFeatured: true, isTrending: true, plays: 356000, rating: 4.6, hasPage: true,
    relatedGames: ['pac-man', 'flappy-bird', 'retro-snake', 'ski-free']
  },
  {
    id: 'pz-pacman', slug: 'pac-man', title: 'Pac-Man',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Eat all the dots. Avoid the ghosts. Chomp power pellets.',
    longDescription: 'The arcade legend reborn in your browser. Navigate the maze, eat all the dots, grab power pellets to turn the tables on the ghosts, and clear each level. One of the most recognizable games ever made.',
    thumbnail: 'assets/images/thumb-pacman.png',
    thumbGradient: 'from-yellow-400 via-yellow-500 to-orange-500',
    embedUrl: 'https://masonicgit.github.io/pacman/',
    externalUrl: 'https://masonicgit.github.io/pacman/',
    controls: [
      { key: 'Arrow Keys', description: 'Move Pac-Man' },
      { key: 'W A S D', description: 'Alternative movement' }
    ],
    tips: [
      'Learn the ghost patterns \u2014 each ghost has a unique AI behavior.',
      'Save power pellets for when ghosts are clustered together.',
      'Use the tunnel shortcuts on the sides of the maze.',
      'Clear the most dangerous corridors first while ghosts are in scatter mode.'
    ],
    isFeatured: true, isTrending: true, plays: 412000, rating: 4.8, hasPage: true,
    relatedGames: ['snake', 'space-invaders', 'flappy-bird', 'alien-invasion']
  },
  {
    id: 'pz-spaceinvaders', slug: 'space-invaders', title: 'Space Invaders',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Defend Earth from waves of descending aliens.',
    longDescription: 'The iconic 1978 arcade shooter. Move your cannon left and right, fire upward at descending rows of alien invaders, and use your shields for cover. The aliens speed up as you eliminate them.',
    thumbnail: 'assets/images/thumb-spaceinvaders.png',
    thumbGradient: 'from-green-500 via-emerald-500 to-lime-500',
    embedUrl: 'https://dwmkerr.github.io/spaceinvaders/',
    externalUrl: 'https://dwmkerr.github.io/spaceinvaders/',
    controls: [
      { key: 'Left / Right Arrow', description: 'Move cannon' },
      { key: 'Space', description: 'Fire' }
    ],
    tips: [
      'Pick off the aliens on the edges first to slow their descent.',
      'Use shields strategically \u2014 they degrade with each hit.',
      'Watch for the bonus UFO that flies across the top.',
      'Aliens speed up as fewer remain, so plan your endgame carefully.'
    ],
    isFeatured: true, isTrending: true, plays: 289000, rating: 4.7, hasPage: true,
    relatedGames: ['alien-invasion', 'pac-man', 'flappy-bird', 'duck-hunt']
  },
  {
    id: 'pz-clumsybird', slug: 'clumsy-bird', title: 'Clumsy Bird',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'A charming Flappy Bird tribute with a MelonJS twist.',
    longDescription: 'Clumsy Bird is a colorful, polished take on the flappy-style game genre. Built with MelonJS, it features smooth animations, parallax backgrounds, and tight tap-to-fly gameplay.',
    thumbnail: 'assets/images/thumb-clumsybird.png',
    thumbGradient: 'from-sky-400 via-cyan-500 to-teal-500',
    embedUrl: 'https://ellisonleao.github.io/clumsy-bird/',
    externalUrl: 'https://ellisonleao.github.io/clumsy-bird/',
    controls: [
      { key: 'Space / Click', description: 'Flap wings' },
      { key: 'Tap', description: 'Flap on mobile' }
    ],
    tips: [
      'The physics feel slightly different from Flappy Bird \u2014 adjust your timing.',
      'Watch the gap pattern and time your flaps rhythmically.',
      'Don\'t panic after a close call \u2014 stay consistent.',
      'Practice maintaining altitude rather than rapidly ascending and falling.'
    ],
    isFeatured: false, isTrending: false, plays: 123000, rating: 4.3, hasPage: true,
    relatedGames: ['flappy-bird', 'tower-stack', 'ski-free', 'snake']
  },
  {
    id: 'pz-skifree', slug: 'ski-free', title: 'SkiFree',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Ski downhill, dodge trees, outrun the yeti.',
    longDescription: 'The beloved Windows classic, now in your browser. Ski down an endless slope, dodge obstacles, perform jumps, and try to outrun the infamous abominable snowman. Pure nostalgic arcade fun.',
    thumbnail: 'assets/images/thumb-skifree.png',
    thumbGradient: 'from-white via-sky-200 to-sky-400',
    embedUrl: 'https://basicallydan.github.io/skifree.js/',
    externalUrl: 'https://basicallydan.github.io/skifree.js/',
    controls: [
      { key: 'Arrow Keys', description: 'Steer the skier' },
      { key: 'F', description: 'Go faster' }
    ],
    tips: [
      'Press F to speed up \u2014 it\'s the only way to outrun the yeti.',
      'Avoid trees and rocks by planning your path ahead.',
      'Jump over obstacles using ramps when available.',
      'The yeti appears after a certain distance \u2014 be ready to sprint.'
    ],
    isFeatured: true, isTrending: true, plays: 198000, rating: 4.6, hasPage: true,
    relatedGames: ['flappy-bird', 'snake', 'duck-hunt', 'emberwind']
  },
  {
    id: 'pz-tabletennis', slug: 'table-tennis', title: 'Table Tennis',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Fluid pong-style table tennis with smooth physics.',
    longDescription: 'A sleek browser-based table tennis game with fluid physics. Move your paddle to return the ball and score points against the AI opponent. Smooth animations make every rally satisfying.',
    thumbnail: 'assets/images/thumb-tabletennis.png',
    thumbGradient: 'from-blue-500 via-indigo-500 to-violet-500',
    embedUrl: 'https://anirudhjoshi.github.io/fluid_table_tennis/',
    externalUrl: 'https://anirudhjoshi.github.io/fluid_table_tennis/',
    controls: [
      { key: 'Mouse / Touch', description: 'Move your paddle' }
    ],
    tips: [
      'Anticipate where the ball will go rather than reacting to it.',
      'Hit the ball with the edge of your paddle for angled shots.',
      'Keep your paddle near the center to cover both sides.',
      'Vary your shot placement to keep the AI guessing.'
    ],
    isFeatured: false, isTrending: true, plays: 167000, rating: 4.4, hasPage: true,
    relatedGames: ['brick-breaker', 'space-invaders', 'flappy-bird', 'snake']
  },
  {
    id: 'pz-alieninvasion', slug: 'alien-invasion', title: 'Alien Invasion',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Blast aliens in this retro-style space shooter.',
    longDescription: 'A fast-paced HTML5 space shooter. Pilot your ship, dodge enemy fire, and blast wave after wave of alien invaders. Power-ups and increasing difficulty keep every session fresh.',
    thumbnail: 'assets/images/thumb-alieninvasion.png',
    thumbGradient: 'from-purple-500 via-violet-500 to-indigo-500',
    embedUrl: 'https://cykod.github.io/AlienInvasion/',
    externalUrl: 'https://cykod.github.io/AlienInvasion/',
    controls: [
      { key: 'Arrow Keys', description: 'Move ship' },
      { key: 'Space', description: 'Fire weapon' }
    ],
    tips: [
      'Keep moving \u2014 a stationary ship is an easy target.',
      'Focus on dodging first, shooting second.',
      'Clear enemies from one side to create a safe zone.',
      'Watch for enemy bullet patterns and find safe paths through them.'
    ],
    isFeatured: false, isTrending: false, plays: 112000, rating: 4.3, hasPage: true,
    relatedGames: ['space-invaders', 'pac-man', 'duck-hunt', 'flappy-bird']
  },
  {
    id: 'pz-emberwind', slug: 'emberwind', title: 'Emberwind',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'A beautiful platformer with combat and exploration.',
    longDescription: 'Emberwind is a polished 2D platformer originally by Opera Software. Run, jump, and fight through beautifully illustrated levels full of enemies and secrets. One of the best HTML5 platformers ever made.',
    thumbnail: 'assets/images/thumb-emberwind.png',
    thumbGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    embedUrl: 'https://operasoftware.github.io/Emberwind/',
    externalUrl: 'https://operasoftware.github.io/Emberwind/',
    controls: [
      { key: 'Arrow Keys', description: 'Move and jump' },
      { key: 'Space / Z', description: 'Attack' },
      { key: 'X', description: 'Special attack' }
    ],
    tips: [
      'Explore every corner \u2014 there are hidden collectibles throughout.',
      'Time your jumps carefully on moving platforms.',
      'Use your special attack to clear groups of enemies.',
      'Look for breakable walls and hidden passages.'
    ],
    isFeatured: true, isTrending: false, plays: 87000, rating: 4.5, hasPage: true,
    relatedGames: ['ski-free', 'alien-invasion', 'pac-man', 'flappy-bird']
  },
  {
    id: 'pz-brickbreaker', slug: 'brick-breaker', title: 'Brick Breaker',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Bounce the ball, break all the bricks.',
    longDescription: 'The classic Breakout-style game. Move your paddle to bounce a ball into rows of bricks and break them all. Power-ups add variety, and the ball speeds up as you progress. A timeless arcade experience.',
    thumbnail: 'assets/images/thumb-brickbreaker.png',
    thumbGradient: 'from-red-500 via-orange-500 to-yellow-500',
    embedUrl: 'https://beumsk.github.io/Brick-Breaker/',
    externalUrl: 'https://beumsk.github.io/Brick-Breaker/',
    controls: [
      { key: 'Mouse / Arrow Keys', description: 'Move paddle left and right' },
      { key: 'Space', description: 'Launch ball' }
    ],
    tips: [
      'Aim for the sides of the brick formation to get the ball above them.',
      'Keep your paddle centered and make small adjustments.',
      'Watch the ball angle \u2014 hitting the edge of your paddle creates sharper angles.',
      'Don\'t panic when the ball speeds up \u2014 stay centered and reactive.'
    ],
    isFeatured: false, isTrending: true, plays: 198000, rating: 4.4, hasPage: true,
    relatedGames: ['table-tennis', 'tetris', 'space-invaders', 'tower-stack']
  },
  {
    id: 'pz-duckhunt', slug: 'duck-hunt', title: 'Duck Hunt',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Aim, shoot, and bag those ducks.',
    longDescription: 'A browser tribute to the classic NES light gun game. Click to shoot ducks as they fly across the screen. The laughing dog is still there to mock your misses. Pure nostalgic shooting fun.',
    thumbnail: 'assets/images/thumb-duckhunt.png',
    thumbGradient: 'from-sky-500 via-green-500 to-lime-500',
    embedUrl: 'https://mattsurabian.com/duckhunt/',
    externalUrl: 'https://mattsurabian.com/duckhunt/',
    controls: [
      { key: 'Click / Tap', description: 'Shoot at ducks' }
    ],
    tips: [
      'Lead your shots \u2014 click slightly ahead of where the duck is heading.',
      'Focus on one duck at a time in two-duck rounds.',
      'Ducks move faster in later rounds, so anticipate their flight path.',
      'Don\'t waste all your shots early \u2014 wait for a clear shot.'
    ],
    isFeatured: false, isTrending: true, plays: 176000, rating: 4.5, hasPage: true,
    relatedGames: ['space-invaders', 'alien-invasion', 'ski-free', 'flappy-bird']
  },
  {
    id: 'pz-retrosnake', slug: 'retro-snake', title: 'Retro Snake',
    category: 'Arcade', categorySlug: 'arcade',
    shortDescription: 'Classic Snake with a pixelated retro aesthetic.',
    longDescription: 'A faithful recreation of the classic Nokia-style Snake game with retro pixel art visuals. Same addictive gameplay: eat food, grow longer, avoid hitting yourself or the walls.',
    thumbnail: 'assets/images/thumb-retrosnake.png',
    thumbGradient: 'from-green-600 via-lime-600 to-yellow-600',
    embedUrl: 'https://eukavlin.github.io/retro-snake/',
    externalUrl: 'https://eukavlin.github.io/retro-snake/',
    controls: [
      { key: 'Arrow Keys', description: 'Change direction' }
    ],
    tips: [
      'The retro grid is smaller, so plan your path more carefully.',
      'Develop a consistent pattern early and stick to it.',
      'Avoid the edges when your snake gets long.',
      'Speed increases as you eat \u2014 keep your movements tight and controlled.'
    ],
    isFeatured: false, isTrending: false, plays: 89000, rating: 4.2, hasPage: true,
    relatedGames: ['snake', 'pac-man', 'flappy-bird', 'ski-free']
  },

  /* ─── STRATEGY ─────────────────────────────────────────── */
  {
    id: 'pz-chess', slug: 'chess', title: 'Chess',
    category: 'Strategy', categorySlug: 'strategy',
    shortDescription: 'The timeless strategy game. Play against the computer.',
    longDescription: 'Play chess against an AI opponent right in your browser. Multiple difficulty levels make it suitable for beginners and experienced players alike.',
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
    isFeatured: false, isTrending: true, plays: 189000, rating: 4.7, hasPage: true,
    relatedGames: ['checkers', 'reversi', 'connect-four', 'tic-tac-toe']
  },
  {
    id: 'pz-connect4', slug: 'connect-four', title: 'Connect Four',
    category: 'Strategy', categorySlug: 'strategy',
    shortDescription: 'Drop discs, connect four in a row to win.',
    longDescription: 'The classic two-player connection game. Drop colored discs into a vertical grid and be the first to connect four in a row \u2014 horizontally, vertically, or diagonally. Play against the AI or a friend.',
    thumbnail: 'assets/images/thumb-connect4.png',
    thumbGradient: 'from-red-500 via-yellow-500 to-red-500',
    embedUrl: 'https://kenrick95.github.io/c4/',
    externalUrl: 'https://kenrick95.github.io/c4/',
    controls: [
      { key: 'Click / Tap', description: 'Drop disc in a column' }
    ],
    tips: [
      'Control the center column \u2014 it gives you the most connection options.',
      'Build threats in multiple directions simultaneously.',
      'Watch for your opponent\'s three-in-a-row setups.',
      'Create "double threats" where you can win in two places at once.'
    ],
    isFeatured: false, isTrending: true, plays: 178000, rating: 4.5, hasPage: true,
    relatedGames: ['chess', 'checkers', 'reversi', 'tic-tac-toe']
  },
  {
    id: 'pz-checkers', slug: 'checkers', title: 'Checkers',
    category: 'Strategy', categorySlug: 'strategy',
    shortDescription: 'Jump and capture your way to victory.',
    longDescription: 'The classic board game of diagonal moves and captures. Jump over your opponent\'s pieces to capture them, and reach the far side to be crowned king. Simple rules, deep strategy.',
    thumbnail: 'assets/images/thumb-checkers.png',
    thumbGradient: 'from-red-600 via-red-700 to-stone-800',
    embedUrl: 'https://playpager.com/embed/checkers/game/index.html',
    externalUrl: 'https://playpager.com/embed/checkers/game/index.html',
    controls: [
      { key: 'Click / Tap', description: 'Select and move pieces' },
      { key: 'Drag', description: 'Drag pieces to move' }
    ],
    tips: [
      'Control the center of the board early.',
      'Try to get kinged as soon as possible \u2014 kings are much more powerful.',
      'Keep your back row intact as long as possible to prevent opponent kings.',
      'Set up double and triple jumps for big captures.'
    ],
    isFeatured: false, isTrending: false, plays: 145000, rating: 4.4, hasPage: true,
    relatedGames: ['chess', 'reversi', 'connect-four', 'tic-tac-toe']
  },
  {
    id: 'pz-reversi', slug: 'reversi', title: 'Reversi',
    category: 'Strategy', categorySlug: 'strategy',
    shortDescription: 'Flip your opponent\'s pieces. Control the board.',
    longDescription: 'Also known as Othello. Place your discs to trap and flip your opponent\'s pieces. The player with the most discs when the board is full wins. Corner control and edge strategy are key to victory.',
    thumbnail: 'assets/images/thumb-reversi.png',
    thumbGradient: 'from-emerald-600 via-green-700 to-slate-800',
    embedUrl: 'https://playpager.com/embed/reversi/game/index.html',
    externalUrl: 'https://playpager.com/embed/reversi/game/index.html',
    controls: [
      { key: 'Click / Tap', description: 'Place a disc' }
    ],
    tips: [
      'Corners are the most valuable positions \u2014 they can never be flipped.',
      'Avoid placing discs next to empty corners early on.',
      'Having fewer pieces mid-game can actually be an advantage.',
      'Focus on limiting your opponent\'s available moves.'
    ],
    isFeatured: false, isTrending: false, plays: 112000, rating: 4.3, hasPage: true,
    relatedGames: ['chess', 'checkers', 'connect-four', 'tic-tac-toe']
  },
  {
    id: 'pz-tictactoe', slug: 'tic-tac-toe', title: 'Tic-Tac-Toe',
    category: 'Strategy', categorySlug: 'strategy',
    shortDescription: 'X\'s and O\'s \u2014 the simplest strategy game.',
    longDescription: 'The classic pen-and-paper game, now in your browser. Take turns placing X\'s and O\'s on a 3\u00d73 grid. Get three in a row to win. Simple for kids, a solved game for strategists.',
    thumbnail: 'assets/images/thumb-tictactoe.png',
    thumbGradient: 'from-blue-500 via-indigo-500 to-purple-500',
    embedUrl: 'https://bethqiang.github.io/tic-tac-toe/',
    externalUrl: 'https://bethqiang.github.io/tic-tac-toe/',
    controls: [
      { key: 'Click / Tap', description: 'Place your mark' }
    ],
    tips: [
      'Always take the center if it\'s available.',
      'If you go first, take a corner for the best winning chances.',
      'Block your opponent\'s two-in-a-row immediately.',
      'Create a "fork" \u2014 a position where you can win in two ways at once.'
    ],
    isFeatured: false, isTrending: false, plays: 234000, rating: 4.1, hasPage: true,
    relatedGames: ['connect-four', 'chess', 'checkers', 'reversi']
  },
  {
    id: 'pz-darkroom', slug: 'a-dark-room', title: 'A Dark Room',
    category: 'Strategy', categorySlug: 'strategy',
    shortDescription: 'A mysterious text adventure that unfolds slowly.',
    longDescription: 'A Dark Room starts with nothing but a fire and a stranger. Stoke the fire, build a village, gather resources, and uncover a deep, mysterious narrative. Part idle game, part RPG, entirely captivating.',
    thumbnail: 'assets/images/thumb-darkroom.png',
    thumbGradient: 'from-slate-700 via-slate-800 to-slate-900',
    embedUrl: 'https://doublespeakgames.github.io/adarkroom/',
    externalUrl: 'https://doublespeakgames.github.io/adarkroom/',
    controls: [
      { key: 'Click / Tap', description: 'Interact with game elements' },
      { key: 'Arrow Keys', description: 'Move on the map (later in game)' }
    ],
    tips: [
      'Be patient \u2014 the game reveals itself slowly and that\'s part of the experience.',
      'Stoke the fire regularly at the start.',
      'Resource management becomes crucial as your village grows.',
      'Explore the map carefully once it unlocks \u2014 there\'s a lot to discover.'
    ],
    isFeatured: true, isTrending: true, plays: 156000, rating: 4.8, hasPage: true,
    relatedGames: ['untrusted', 'cookie-clicker', 'chess', 'tower-defense']
  },
  {
    id: 'pz-towerdefense', slug: 'tower-defense', title: 'Tower Defense',
    category: 'Strategy', categorySlug: 'strategy',
    shortDescription: 'Place towers, stop the waves, defend your base.',
    longDescription: 'A classic tower defense game. Strategically place defensive towers along the path to stop waves of enemies from reaching your base. Upgrade towers and manage resources to survive increasingly difficult waves.',
    thumbnail: 'assets/images/thumb-towerdefense.png',
    thumbGradient: 'from-amber-600 via-orange-600 to-red-600',
    embedUrl: 'https://selenebun.github.io/towerdefense/',
    externalUrl: 'https://selenebun.github.io/towerdefense/',
    controls: [
      { key: 'Click / Tap', description: 'Place and upgrade towers' }
    ],
    tips: [
      'Place towers at choke points where enemies must pass.',
      'Mix tower types \u2014 combine slow towers with damage towers.',
      'Upgrade existing towers before building too many new ones.',
      'Save some gold for emergency tower placements in later waves.'
    ],
    isFeatured: false, isTrending: true, plays: 134000, rating: 4.4, hasPage: true,
    relatedGames: ['a-dark-room', 'chess', 'alien-invasion', 'space-invaders']
  },
  {
    id: 'pz-untrusted', slug: 'untrusted', title: 'Untrusted',
    category: 'Strategy', categorySlug: 'strategy',
    shortDescription: 'A JavaScript adventure \u2014 hack the game to win.',
    longDescription: 'Untrusted is a unique game where you modify the JavaScript source code to solve puzzles and advance through levels. Part programming challenge, part adventure game \u2014 perfect for aspiring developers.',
    thumbnail: 'assets/images/thumb-untrusted.png',
    thumbGradient: 'from-green-400 via-emerald-500 to-green-600',
    embedUrl: 'https://alexnisnevich.github.io/untrusted/',
    externalUrl: 'https://alexnisnevich.github.io/untrusted/',
    controls: [
      { key: 'Arrow Keys', description: 'Move your character' },
      { key: 'Tab', description: 'Switch to code editor' },
      { key: 'Ctrl+5', description: 'Execute modified code' }
    ],
    tips: [
      'Read the code carefully before modifying it.',
      'The API documentation (press Q) is your best friend.',
      'Start simple \u2014 sometimes you only need to change one line.',
      'If stuck, think about what game objects you can create or modify.'
    ],
    isFeatured: true, isTrending: false, plays: 78000, rating: 4.6, hasPage: true,
    relatedGames: ['a-dark-room', 'sokoban', 'maze', 'chess']
  },

  /* ─── CASUAL ───────────────────────────────────────────── */
  {
    id: 'pz-solitaire', slug: 'solitaire', title: 'Solitaire',
    category: 'Casual', categorySlug: 'casual',
    shortDescription: 'Classic card game. Sort, stack, and clear the board.',
    longDescription: 'The timeless single-player card game. Move cards between columns, build foundation piles from Ace to King, and try to clear the entire board.',
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
      'Keep columns balanced \u2014 don\'t empty a column without a King ready.',
      'Use the undo button sparingly to learn from mistakes.'
    ],
    isFeatured: false, isTrending: false, plays: 167000, rating: 4.4, hasPage: true,
    relatedGames: ['chess', 'checkers', 'sudoku', 'reversi']
  },
  {
    id: 'pz-cookieclicker', slug: 'cookie-clicker', title: 'Cookie Clicker',
    category: 'Casual', categorySlug: 'casual',
    shortDescription: 'Click cookies. Buy upgrades. Bake billions.',
    longDescription: 'The iconic idle/clicker game. Click the big cookie to earn cookies, then spend them on upgrades and buildings that produce cookies automatically. Watch your cookie empire grow from a single click to billions per second.',
    thumbnail: 'assets/images/thumb-cookieclicker.png',
    thumbGradient: 'from-amber-400 via-yellow-500 to-orange-500',
    embedUrl: 'https://cookieclicker-game.github.io/',
    externalUrl: 'https://cookieclicker-game.github.io/',
    controls: [
      { key: 'Click / Tap', description: 'Click the cookie' }
    ],
    tips: [
      'Buy the cheapest upgrade first to maximize early cookie production.',
      'Don\'t just click \u2014 invest in buildings for passive income.',
      'Golden cookies give huge bonuses \u2014 click them immediately.',
      'Prestige resets give permanent multipliers for your next run.'
    ],
    isFeatured: false, isTrending: true, plays: 289000, rating: 4.5, hasPage: true,
    relatedGames: ['a-dark-room', 'solitaire', 'rhythm-game', 'tower-defense']
  },
  {
    id: 'pz-rhythm', slug: 'rhythm-game', title: 'Rhythm Game',
    category: 'Casual', categorySlug: 'casual',
    shortDescription: 'Hit the notes to the beat. Feel the rhythm.',
    longDescription: 'A browser-based rhythm game where you press keys in time with falling notes. Test your timing and coordination as you play along with music tracks of increasing difficulty.',
    thumbnail: 'assets/images/thumb-rhythm.png',
    thumbGradient: 'from-fuchsia-500 via-purple-500 to-violet-500',
    embedUrl: 'https://zach1502.github.io/Rhythm-Game/',
    externalUrl: 'https://zach1502.github.io/Rhythm-Game/',
    controls: [
      { key: 'D F J K', description: 'Hit corresponding note lanes' },
      { key: 'Keyboard', description: 'Press keys when notes reach the hit zone' }
    ],
    tips: [
      'Focus on the hit zone, not the top of the screen.',
      'Listen to the rhythm \u2014 your ears are often more accurate than your eyes.',
      'Start on easier songs to build muscle memory.',
      'Keep your fingers hovering over the keys for faster reaction times.'
    ],
    isFeatured: false, isTrending: false, plays: 67000, rating: 4.2, hasPage: true,
    relatedGames: ['piano', 'flappy-bird', 'tower-stack', 'ski-free']
  },
  {
    id: 'pz-wordguess', slug: 'word-guess', title: 'Word Guess',
    category: 'Casual', categorySlug: 'casual',
    shortDescription: 'Guess the word before you run out of tries.',
    longDescription: 'A classic hangman-style word guessing game. Pick letters to reveal the hidden word before you run out of guesses. A relaxing vocabulary game for all ages.',
    thumbnail: 'assets/images/thumb-wordguess.png',
    thumbGradient: 'from-teal-500 via-cyan-500 to-sky-500',
    embedUrl: 'https://vdelariva.github.io/Word-Guess-Game/',
    externalUrl: 'https://vdelariva.github.io/Word-Guess-Game/',
    controls: [
      { key: 'Keyboard', description: 'Press a letter to guess' }
    ],
    tips: [
      'Start with common vowels: E, A, I, O.',
      'Then try popular consonants: T, N, S, R.',
      'Look at the word length and revealed pattern for clues.',
      'Avoid rare letters like Q, X, Z until you have more information.'
    ],
    isFeatured: false, isTrending: false, plays: 78000, rating: 4.1, hasPage: true,
    relatedGames: ['wordle', 'word-puzzle', 'sudoku', 'memory-match']
  },
  {
    id: 'pz-piano', slug: 'piano', title: 'Piano',
    category: 'Casual', categorySlug: 'casual',
    shortDescription: 'Play piano in your browser. Learn and create music.',
    longDescription: 'A browser-based piano keyboard. Play notes and chords using your keyboard or mouse. Perfect for casual music exploration, learning basic piano, or just having fun making sounds.',
    thumbnail: 'assets/images/thumb-piano.png',
    thumbGradient: 'from-slate-300 via-white to-slate-300',
    embedUrl: 'https://marisabrantley.github.io/piano-game/',
    externalUrl: 'https://marisabrantley.github.io/piano-game/',
    controls: [
      { key: 'Keyboard Keys', description: 'Play different notes' },
      { key: 'Click / Tap', description: 'Click piano keys directly' }
    ],
    tips: [
      'Start with simple melodies you know by heart.',
      'Use both hands for richer sounds.',
      'Learn the keyboard mapping to find notes quickly.',
      'Try playing along with your favorite songs.'
    ],
    isFeatured: false, isTrending: false, plays: 56000, rating: 4.0, hasPage: true,
    relatedGames: ['rhythm-game', 'memory-match', 'cookie-clicker', 'solitaire']
  },
  {
    id: 'pz-github-games', slug: 'github-games', title: 'Contribution Games',
    category: 'Casual', categorySlug: 'casual',
    shortDescription: 'Play classic games on a GitHub-style contribution graph.',
    longDescription: 'A creative collection of classic games (Snake, Breakout, Battle City) played on a grid that looks like the GitHub contribution graph. A fun twist on familiar gameplay for developers and gamers alike.',
    thumbnail: 'assets/images/thumb-githubgames.png',
    thumbGradient: 'from-green-400 via-green-500 to-green-600',
    embedUrl: 'https://veelenga.github.io/gccg/',
    externalUrl: 'https://veelenga.github.io/gccg/',
    controls: [
      { key: 'Arrow Keys', description: 'Move / control' },
      { key: 'Space', description: 'Start / action' }
    ],
    tips: [
      'The green-tinted grid takes some getting used to \u2014 focus on movement patterns.',
      'Each game within the collection has its own controls.',
      'Snake is the easiest to start with on this grid.',
      'The grid layout adds a unique challenge to familiar games.'
    ],
    isFeatured: false, isTrending: false, plays: 45000, rating: 4.1, hasPage: true,
    relatedGames: ['snake', 'brick-breaker', 'pac-man', 'retro-snake']
  }
];

const PLAYZEN_CATEGORIES = [
  { slug: 'puzzle', name: 'Puzzle', description: 'Logic, numbers, and brain benders.', icon: '\ud83e\udde9', gradient: 'from-amber-500 to-rose-500' },
  { slug: 'arcade', name: 'Arcade', description: 'Pick up, play, chase the high score.', icon: '\ud83d\udd79\ufe0f', gradient: 'from-indigo-500 to-fuchsia-500' },
  { slug: 'strategy', name: 'Strategy', description: 'Think, plan, outsmart the clock.', icon: '\u265f\ufe0f', gradient: 'from-lime-500 to-emerald-600' },
  { slug: 'casual', name: 'Casual', description: 'Low-pressure games for any mood.', icon: '\ud83c\udf88', gradient: 'from-pink-500 to-red-500' }
];

window.PLAYZEN_GAMES = PLAYZEN_GAMES;
window.PLAYZEN_CATEGORIES = PLAYZEN_CATEGORIES;
