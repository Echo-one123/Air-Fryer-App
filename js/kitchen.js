'use strict';

/*
 * Data + logic for "My Kitchen":
 *  - which proteins and veg the generator knows how to cook (and for how long)
 *  - flavour styles, and which sauces/spices each needs
 *  - building a suggested recipe whose timings all finish together
 *  - ranking database recipes by what you already have
 */

const SAFE = {
  chicken: 'Chicken & turkey: 75°C in the thickest part – juices run clear, no pink.',
  mince: 'Mince (meatballs, burgers, koftas): 75°C right through – no pink.',
  pork: 'Pork: 71°C in the thickest part, then rest for 3 minutes.',
  sausage: 'Sausages: 75°C in the centre – no pink.',
  steak: 'Beef steak: rare 52°C · medium-rare 57°C · medium 63°C · well done 71°C. Rest 5 minutes.',
  lamb: 'Lamb chops/steaks: medium (pink) 63°C · well done 71°C. Rest 3 minutes.',
  fish: 'Fish: 63°C – the flesh turns opaque and flakes easily.',
  prawns: 'Prawns: 63°C – pink and opaque all the way through.'
};

// Times are for 2 portions at the given temperature.
const PROTEINS = {
  'chicken breast': { label: 'Chicken', noun: 'chicken', qty: '2 breasts (about 350g)', temp: 200, time: 12, turn: 'turn the chicken', prep: 'Cut the chicken into 3cm chunks so it cooks quickly and evenly.', safe: [SAFE.chicken] },
  'chicken thighs': { label: 'Chicken Thighs', noun: 'chicken thighs', qty: '4 boneless thighs (about 450g)', temp: 200, time: 16, turn: 'turn the thighs', prep: 'Trim any large pieces of fat and open the thighs out flat.', safe: [SAFE.chicken] },
  'chicken wings': { label: 'Chicken Wings', noun: 'wings', qty: '700g', temp: 200, time: 22, turn: 'shake the wings', prep: 'Pat the wings really dry with kitchen paper – dry skin crisps best.', safe: [SAFE.chicken] },
  'chicken drumsticks': { label: 'Drumsticks', noun: 'drumsticks', qty: '6', temp: 200, time: 24, turn: 'turn the drumsticks', prep: 'Slash each drumstick 2–3 times down to the bone so it cooks through evenly.', safe: [SAFE.chicken] },
  'turkey mince': { label: 'Turkey Meatballs', noun: 'meatballs', qty: '400g', temp: 200, time: 12, turn: 'shake the meatballs', prep: 'Season the mince with salt and pepper and roll into 12 meatballs.', safe: [SAFE.mince] },
  'beef steak': { label: 'Steak', noun: 'steaks', qty: '2 steaks, about 2.5cm thick', temp: 200, time: 10, turn: 'turn the steaks', prep: 'Take the steaks out of the fridge 20 minutes before cooking and pat dry.', safe: [SAFE.steak], rest: 5, note: 'Timing is for medium-rare. Rare: take 2 minutes off. Well done: add 3–4 minutes.' },
  'beef mince': { label: 'Beef Meatballs', noun: 'meatballs', qty: '400g', temp: 200, time: 12, turn: 'shake the meatballs', prep: 'Season the mince with salt and pepper and roll into 12 meatballs (or shape 2 burgers – same time, turn halfway).', safe: [SAFE.mince] },
  'pork chops': { label: 'Pork Chops', noun: 'pork chops', qty: '2 chops, about 2cm thick', temp: 200, time: 13, turn: 'turn the chops', prep: 'Snip through the fat on the edge every 2cm so the chops stay flat.', safe: [SAFE.pork], rest: 3 },
  'pork belly': { label: 'Pork Belly Bites', noun: 'pork belly', qty: '400g', temp: 200, time: 22, turn: 'shake the pork', prep: 'Remove the skin, cut into 3cm cubes and pat dry.', safe: [SAFE.pork] },
  'pork mince': { label: 'Pork Meatballs', noun: 'meatballs', qty: '400g', temp: 200, time: 12, turn: 'shake the meatballs', prep: 'Season the mince with salt and pepper and roll into 12 meatballs.', safe: [SAFE.mince] },
  'sausages': { label: 'Sausages', noun: 'sausages', qty: '6', temp: 180, time: 13, turn: 'turn the sausages', prep: 'No need to prick the sausages – they stay juicier.', safe: [SAFE.sausage] },
  'cocktail sausages': { label: 'Cocktail Sausages', noun: 'sausages', qty: '16', temp: 180, time: 10, turn: 'shake the sausages', prep: 'Separate the sausages if they are linked.', safe: [SAFE.sausage] },
  'bacon': { label: 'Crispy Bacon', noun: 'bacon', qty: '6 rashers', temp: 180, time: 8, turn: 'turn the bacon', prep: 'Lay the rashers flat (cut in half if they are long).', safe: ['Bacon: cook until sizzling and crisp at the edges.'] },
  'gammon steaks': { label: 'Gammon Steaks', noun: 'gammon', qty: '2 steaks', temp: 190, time: 10, turn: 'turn the gammon', prep: 'Snip the fat around the edge every 2cm so the gammon stays flat.', safe: [SAFE.pork] },
  'lamb chops': { label: 'Lamb Chops', noun: 'lamb chops', qty: '6 chops', temp: 200, time: 10, turn: 'turn the chops', prep: 'Pat the chops dry.', safe: [SAFE.lamb], rest: 3 },
  'lamb leg steaks': { label: 'Lamb Steaks', noun: 'lamb steaks', qty: '2 steaks', temp: 200, time: 10, turn: 'turn the steaks', prep: 'Pat the lamb dry.', safe: [SAFE.lamb], rest: 3 },
  'lamb mince': { label: 'Lamb Koftas', noun: 'koftas', qty: '400g', temp: 200, time: 12, turn: 'turn the koftas', prep: 'Season the mince and squeeze into 6 sausage-shaped koftas.', safe: [SAFE.mince] },
  'salmon fillets': { label: 'Salmon', noun: 'salmon', qty: '2 fillets', temp: 200, time: 9, turn: null, prep: 'Pat the salmon dry. Don\'t turn it during cooking – it is delicate.', safe: [SAFE.fish] },
  'white fish fillets': { label: 'White Fish', noun: 'fish', qty: '2 fillets (cod, haddock or hake)', temp: 200, time: 10, turn: null, prep: 'Pat the fish dry. Don\'t turn it during cooking – it flakes easily.', safe: [SAFE.fish] },
  'prawns': { label: 'Prawns', noun: 'prawns', qty: '250g raw king prawns', temp: 200, time: 6, turn: 'shake the prawns', prep: 'Peel the prawns if needed and pat dry. (Already cooked? They only need 3 minutes.)', safe: [SAFE.prawns] },
  'halloumi': { label: 'Halloumi', noun: 'halloumi', qty: '225g block', temp: 200, time: 8, turn: 'turn the halloumi', prep: 'Cut into 1cm slices or fingers and pat dry.', safe: [] },
  'tofu': { label: 'Crispy Tofu', noun: 'tofu', qty: '400g block', temp: 200, time: 15, turn: 'shake the tofu', prep: 'Press the tofu for 15 minutes, cut into 2cm cubes and toss in 1 tbsp cornflour if you have it.', safe: [] },
  'paneer': { label: 'Paneer', noun: 'paneer', qty: '225g block', temp: 200, time: 10, turn: 'shake the paneer', prep: 'Cut into 2cm cubes.', safe: [] },
  'chickpeas': { label: 'Crispy Chickpeas', noun: 'chickpeas', qty: '400g tin', temp: 200, time: 14, turn: 'shake the chickpeas', prep: 'Drain, rinse and dry the chickpeas really well.', safe: [] }
};

// Times are at 200°C. starch: true = a "carb" side.
const VEG = {
  'potatoes': { label: 'Crispy Potatoes', noun: 'potatoes', qty: '2 medium (400g)', time: 20, starch: true, prep: 'Cut the potatoes into 1cm chips or 2cm cubes. Soak in cold water for 10 minutes if you have time, then dry well.' },
  'new potatoes': { label: 'Crispy New Potatoes', noun: 'new potatoes', qty: '350g', time: 18, starch: true, prep: 'Halve the new potatoes (quarter any big ones).' },
  'sweet potatoes': { label: 'Sweet Potato', noun: 'sweet potato', qty: '1 large', time: 15, starch: true, prep: 'Cut the sweet potato into 2cm cubes or thin fries.' },
  'butternut squash': { label: 'Roasted Squash', noun: 'squash', qty: '½ squash (400g)', time: 18, starch: true, prep: 'Peel, deseed and cut the squash into 2cm cubes.' },
  'broccoli': { label: 'Charred Broccoli', noun: 'broccoli', qty: '1 small head', time: 8, prep: 'Cut the broccoli into small florets.' },
  'cauliflower': { label: 'Roasted Cauliflower', noun: 'cauliflower', qty: '½ head', time: 12, prep: 'Cut the cauliflower into small florets.' },
  'bell peppers': { label: 'Roasted Peppers', noun: 'peppers', qty: '1–2', time: 10, prep: 'Deseed the peppers and cut into 3cm chunks.' },
  'onion': { label: 'Roasted Onion', noun: 'onion', qty: '1', time: 12, prep: 'Cut the onion into thin wedges.' },
  'red onion': { label: 'Red Onion', noun: 'red onion', qty: '1', time: 12, prep: 'Cut the red onion into thin wedges.' },
  'courgette': { label: 'Courgette', noun: 'courgette', qty: '1', time: 10, prep: 'Cut the courgette into 1cm half-moons.' },
  'aubergine': { label: 'Aubergine', noun: 'aubergine', qty: '1 small', time: 12, prep: 'Cut the aubergine into 2cm cubes.' },
  'mushrooms': { label: 'Mushrooms', noun: 'mushrooms', qty: '200g', time: 8, prep: 'Halve or quarter the mushrooms.' },
  'carrots': { label: 'Roasted Carrots', noun: 'carrots', qty: '2', time: 15, prep: 'Cut the carrots into 1cm batons.' },
  'parsnips': { label: 'Roasted Parsnips', noun: 'parsnips', qty: '2', time: 15, prep: 'Cut the parsnips into 1cm batons.' },
  'green beans': { label: 'Green Beans', noun: 'green beans', qty: '150g', time: 8, prep: 'Trim the green beans.' },
  'asparagus': { label: 'Asparagus', noun: 'asparagus', qty: '1 bunch', time: 7, prep: 'Snap the woody ends off the asparagus.' },
  'cherry tomatoes': { label: 'Blistered Tomatoes', noun: 'tomatoes', qty: '200g', time: 5, prep: 'Leave the cherry tomatoes whole.' },
  'tomatoes': { label: 'Roasted Tomatoes', noun: 'tomatoes', qty: '2', time: 8, prep: 'Halve the tomatoes.' },
  'brussels sprouts': { label: 'Crispy Sprouts', noun: 'sprouts', qty: '250g', time: 14, prep: 'Trim and halve the sprouts.' },
  'corn on the cob': { label: 'Corn on the Cob', noun: 'corn', qty: '2 cobs', time: 12, prep: 'Halve the cobs so they fit.' },
  'kale': { label: 'Crispy Kale', noun: 'kale', qty: '2 handfuls', time: 4, prep: 'Strip the kale from its stalks and tear into pieces.' }
};

/*
 * Flavour styles.
 * needs: required ingredients ("a|b" = either will do).
 * ing:   [qty, "a|b", optional?] – optional extras are only used if you have them.
 * style: marinade (coat before cooking), rub (dry spice), glaze (brush on near the end), toss (toss after cooking)
 */
const FLAVOURS = [
  { id: 'honey-soy', name: 'Honey Soy', emoji: '🍯', style: 'marinade', glaze: true,
    ing: [['2 tbsp', 'soy sauce'], ['1 tbsp', 'honey|maple syrup'], ['1 clove', 'garlic', 1], ['1 tsp', 'ginger', 1], ['1 tsp', 'sesame oil', 1]],
    garnish: ['sesame seeds', 'spring onions'], serve: 'Serve with rice or noodles.' },
  { id: 'sweet-chilli', name: 'Sweet Chilli', emoji: '🌶️', style: 'glaze',
    ing: [['3 tbsp', 'sweet chilli sauce'], ['1 tsp', 'soy sauce', 1], ['½', 'lime', 1], ['1 clove', 'garlic', 1]],
    garnish: ['spring onions', 'red chilli'], serve: 'Serve with rice or in wraps.' },
  { id: 'bbq', name: 'Smoky BBQ', emoji: '🔥', style: 'glaze',
    ing: [['3 tbsp', 'bbq sauce'], ['1 tsp', 'paprika', 1], ['½ tsp', 'garlic granules', 1], ['1 tsp', 'worcestershire sauce', 1]],
    garnish: ['spring onions'], serve: 'Great with corn on the cob or coleslaw.' },
  { id: 'lemon-garlic', name: 'Lemon & Garlic', emoji: '🍋', style: 'marinade',
    ing: [['1', 'lemon'], ['2 cloves', 'garlic|garlic granules'], ['1 tsp', 'mixed herbs|oregano|thyme|rosemary', 1], ['pinch', 'chilli flakes', 1]],
    garnish: ['parsley'], serve: 'Squeeze over a little extra lemon to serve.' },
  { id: 'peri-peri', name: 'Peri-Peri', emoji: '🔥', style: 'marinade', glaze: true,
    ing: [['3 tbsp', 'peri peri sauce'], ['½', 'lemon|lime', 1], ['1 tsp', 'paprika', 1], ['1 clove', 'garlic', 1]],
    garnish: [], serve: 'Serve with extra peri-peri sauce for dipping.' },
  { id: 'teriyaki', name: 'Teriyaki', emoji: '🥢', style: 'marinade', glaze: true,
    ing: [['3 tbsp', 'teriyaki sauce'], ['1 clove', 'garlic', 1], ['1 tsp', 'ginger', 1]],
    garnish: ['sesame seeds', 'spring onions'], serve: 'Serve with rice.' },
  { id: 'hoisin', name: 'Sticky Hoisin', emoji: '🥡', style: 'glaze',
    ing: [['3 tbsp', 'hoisin sauce'], ['1 tsp', 'soy sauce', 1], ['½ tsp', 'five spice', 1]],
    garnish: ['spring onions', 'cucumber'], serve: 'Lovely in wraps with sliced cucumber.' },
  { id: 'sriracha-honey', name: 'Sriracha Honey', emoji: '🌶️', style: 'marinade', glaze: true,
    ing: [['1 tbsp', 'sriracha'], ['2 tbsp', 'honey|maple syrup'], ['1 tsp', 'soy sauce', 1], ['½', 'lime', 1]],
    garnish: ['spring onions', 'sesame seeds'], serve: 'Serve with rice and a squeeze of lime.' },
  { id: 'cajun', name: 'Cajun', emoji: '🤠', style: 'rub',
    ing: [['2 tsp', 'cajun seasoning'], ['½ tsp', 'garlic granules', 1]],
    garnish: ['lime'], serve: 'Serve with a dollop of yoghurt or mayo.' },
  { id: 'jerk', name: 'Jerk', emoji: '🌴', style: 'rub',
    ing: [['2 tsp', 'jerk seasoning'], ['1 tsp', 'honey', 1], ['½', 'lime', 1]],
    garnish: ['spring onions'], serve: 'Serve with rice and peas or a mango salad.' },
  { id: 'tikka', name: 'Tikka-Style', emoji: '🍛', style: 'marinade',
    ing: [['2 tbsp', 'tikka paste|curry powder|garam masala'], ['3 tbsp', 'greek yoghurt', 1], ['½', 'lemon', 1], ['1 clove', 'garlic', 1], ['1 tsp', 'ginger', 1]],
    garnish: [], serve: 'Serve with naan, rice or a dollop of yoghurt.' },
  { id: 'fajita', name: 'Fajita', emoji: '🌮', style: 'rub',
    ing: [['2 tsp', 'fajita seasoning|cumin'], ['1 tsp', 'paprika', 1], ['½ tsp', 'garlic granules', 1], ['½', 'lime', 1]],
    garnish: [], serve: 'Pile into warm tortilla wraps with grated cheese.' },
  { id: 'garlic-herb', name: 'Garlic & Herb', emoji: '🌿', style: 'rub',
    ing: [['2 cloves', 'garlic|garlic granules'], ['1 tsp', 'mixed herbs|oregano|rosemary|thyme']],
    garnish: ['parmesan', 'parsley'], serve: 'Finish with a little grated parmesan if you have it.' },
  { id: 'honey-mustard', name: 'Honey Mustard', emoji: '🍯', style: 'glaze',
    ing: [['1 tbsp', 'mustard'], ['1 tbsp', 'honey|maple syrup'], ['½ tsp', 'thyme', 1], ['1 clove', 'garlic', 1]],
    garnish: [], serve: 'Great with green veg.' },
  { id: 'buffalo', name: 'Buffalo', emoji: '🦬', style: 'toss',
    ing: [['3 tbsp', 'hot sauce'], ['20g', 'butter'], ['½ tsp', 'garlic granules', 1]],
    garnish: [], serve: 'Serve with yoghurt or blue cheese dip.' },
  { id: 'pesto', name: 'Pesto', emoji: '🌱', style: 'toss',
    ing: [['2 tbsp', 'pesto'], ['½', 'lemon', 1]],
    garnish: ['parmesan'], serve: 'Great with pasta or a crisp salad.' },
  { id: 'smoky-paprika', name: 'Smoky Paprika', emoji: '🌶️', style: 'rub',
    ing: [['2 tsp', 'paprika'], ['½ tsp', 'garlic granules', 1], ['½ tsp', 'cumin', 1], ['pinch', 'chilli flakes', 1]],
    garnish: [], serve: 'Serve with a dollop of yoghurt or mayo.' },
  { id: 'salt-pepper-chinese', name: 'Chinese Salt & Pepper', emoji: '🥡', style: 'rub',
    ing: [['1 tsp', 'five spice'], ['pinch', 'chilli flakes', 1], ['1 clove', 'garlic', 1]],
    garnish: ['spring onions', 'red chilli'], serve: 'Fakeaway night – serve with rice.' },
  { id: 'classic', name: 'Classic Salt & Pepper', emoji: '🧂', style: 'rub', fallback: true,
    ing: [['1 clove', 'garlic|garlic granules', 1], ['1 tsp', 'mixed herbs', 1]],
    garnish: [], serve: 'Simple and tasty – add a sauce of your choice.' }
];

const Kitchen = (() => {
  const SMALL = new Set(['with', 'and', 'or', 'on', 'the', 'of']);
  const cap = s => s.split(' ').map((w, i) => i && SMALL.has(w) ? w : w.replace(/(^|-)([a-z])/g, (m, a, b) => a + b.toUpperCase())).join(' ');
  const aOrAn = n => (/^(8|11|18)$/.test(String(n)) || /^8\d$/.test(String(n)) ? 'an' : 'a');
  const joinNice = arr => arr.length <= 1 ? (arr[0] || '') : arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1];
  const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const mmss = mins => `${mins} min`;

  function proteinEmoji(n) {
    if (n === 'prawns') return '🍤';
    if (n.startsWith('chicken') || n.startsWith('turkey')) return '🍗';
    if (n.startsWith('beef')) return '🥩';
    if (n.startsWith('lamb')) return '🐑';
    if (n.includes('sausage')) return '🌭';
    if (['pork chops', 'pork belly', 'pork mince', 'bacon', 'gammon steaks'].includes(n)) return '🥓';
    if (Ingredients.type(n) === 'fish') return '🐟';
    return { halloumi: '🧀', tofu: '🥢', paneer: '🧀', chickpeas: '🫘' }[n] || '🍽️';
  }

  /** For a flavour, work out what you have and what's missing. */
  function assessFlavour(f, pantry) {
    const has = n => pantry.has(n);
    let required = 0, owned = 0;
    const missing = [];
    const ing = [];
    for (const [qty, names, optional] of f.ing) {
      const alts = names.split('|');
      const got = alts.find(has);
      if (optional) {
        if (got) { ing.push([qty, got]); owned++; }
      } else {
        required++;
        if (got) owned++;
        else missing.push(alts[0]);
        ing.push([qty, got || alts[0]]);
      }
    }
    const garnish = (f.garnish || []).filter(has);
    return { flavour: f, ing, missing, garnish, available: missing.length === 0, score: required * 2 + owned + garnish.length * 0.5 };
  }

  function flavourOptions(pantry) {
    return FLAVOURS.map(f => assessFlavour(f, pantry));
  }

  /** Pick the best flavour (or a random good one when shuffling). */
  function chooseFlavour(pantry, { random = false, exclude = null } = {}) {
    const all = flavourOptions(pantry);
    const avail = all.filter(a => a.available && !a.flavour.fallback);
    let pool = avail.length ? avail : all.filter(a => a.flavour.fallback);
    if (random) {
      const different = pool.filter(a => a.flavour.id !== exclude);
      return pickRandom(different.length ? different : pool);
    }
    pool = pool.slice().sort((a, b) => b.score - a.score);
    return pool[0];
  }

  function chooseVeg(vegList, random) {
    const list = random ? shuffle(vegList) : vegList.slice();
    const starch = list.filter(v => VEG[v].starch);
    const other = list.filter(v => !VEG[v].starch);
    const chosen = [];
    if (starch.length) chosen.push(starch[0]);
    if (other.length) chosen.push(other[0]);
    if (chosen.length < 2) {
      const rest = list.filter(v => !chosen.includes(v));
      if (rest.length) chosen.push(rest[0]);
    }
    return chosen.slice(0, 2);
  }

  /**
   * Build a suggested recipe from the pantry.
   * opts.flavourId: 'auto' or a flavour id; opts.random: shuffle the combination; opts.avoid: key to avoid repeating.
   */
  function generate(pantryArr, opts = {}) {
    const pantry = new Set(pantryArr);
    const proteins = Object.keys(PROTEINS).filter(p => pantry.has(p));
    const vegs = Object.keys(VEG).filter(v => pantry.has(v));
    if (!proteins.length && !vegs.length) return null;

    let attempt = 0, result;
    do {
      const random = !!opts.random;
      const proteinName = proteins.length ? (random ? pickRandom(proteins) : proteins[0]) : null;
      let vegChosen = chooseVeg(vegs, random);
      if (!proteinName) {
        // Veg-only traybake: allow a third veg
        vegChosen = vegChosen.concat((random ? shuffle(vegs) : vegs).filter(v => !vegChosen.includes(v))).slice(0, 3);
      }
      let fl;
      if (opts.flavourId && opts.flavourId !== 'auto') {
        fl = assessFlavour(FLAVOURS.find(f => f.id === opts.flavourId) || FLAVOURS[0], pantry);
      } else {
        fl = chooseFlavour(pantry, { random, exclude: random ? opts.avoidFlavour : null });
      }
      result = build(proteinName, [...new Set(vegChosen)], fl, pantry);
      attempt++;
    } while (opts.random && opts.avoid && result.key === opts.avoid && attempt < 12);
    return result;
  }

  function build(proteinName, vegNames, fl, pantry) {
    const P = proteinName ? PROTEINS[proteinName] : null;
    const f = fl.flavour;
    const T = P ? P.temp : 200;
    const factor = 1 + (200 - T) / 100; // veg take a little longer at lower temperatures
    const noun = P ? P.noun : 'veg';

    // ── Timings: everything finishes together ──
    const items = [];
    if (P) items.push({ name: proteinName, noun: P.noun, time: P.time, kind: 'protein' });
    vegNames.forEach(v => items.push({ name: v, noun: VEG[v].noun, time: Math.round(VEG[v].time * factor), kind: 'veg' }));
    const total = Math.max(...items.map(i => i.time));
    items.forEach(i => { i.start = total - i.time; });
    items.sort((a, b) => a.start - b.start || b.time - a.time);
    const half = Math.round(total / 2);

    // ── Title ──
    const vegLabels = vegNames.map(v => VEG[v].label);
    let name;
    if (P) {
      name = `${f.name} ${P.label}` + (vegLabels.length ? ` with ${joinNice(vegLabels).replace(' and ', ' & ')}` : '');
    } else {
      name = `${f.name} Veg Traybake` + (vegLabels.length ? `: ${joinNice(vegLabels).replace(' and ', ' & ')}` : '');
    }
    if (f.fallback && P) name = `Simple ${P.label}` + (vegLabels.length ? ` with ${joinNice(vegLabels).replace(' and ', ' & ')}` : '');

    // ── Ingredients ──
    const ing = [];
    if (P) ing.push([P.qty, proteinName]);
    vegNames.forEach(v => ing.push([VEG[v].qty, v]));
    fl.ing.forEach(([q, n]) => ing.push([q, n]));
    fl.garnish.forEach(n => { if (!ing.some(i => i[1] === n)) ing.push(['to finish', '?' + n]); });
    ing.push(['1–2 tbsp', 'oil'], ['to taste', 'salt'], ['to taste', 'black pepper']);

    // ── Method ──
    const steps = [];
    const flavourNames = fl.ing.map(i => Ingredients.pretty(i[1]));
    const flavourList = joinNice(flavourNames);
    if (vegNames.length) {
      steps.push(vegNames.map(v => VEG[v].prep).join(' ') + ` Toss the veg in 1 tbsp oil with a pinch of salt and pepper${f.style === 'rub' && P ? ' (and a pinch of the spice rub)' : ''}.`);
    }
    if (P) steps.push(P.prep);

    let sauceReserved = false;
    if (f.fallback && !P) {
      if (flavourNames.length) steps.push(`Toss the veg with the ${flavourList} too.`);
    } else if (f.fallback) {
      steps.push(`Rub the ${noun} with a little oil, salt and pepper${flavourNames.length ? ` plus the ${flavourList}` : ''}.`);
    } else if (f.style === 'marinade') {
      sauceReserved = !!f.glaze;
      steps.push(`Make the ${f.name} marinade: mix the ${flavourList} with a pinch of salt.` +
        (f.glaze ? ' Spoon out about a third and keep it for glazing.' : '') +
        ` Coat the ${noun} in the ${f.glaze ? 'rest' : 'marinade'} and leave for at least 10 minutes (or up to a day in the fridge).`);
    } else if (f.style === 'rub') {
      steps.push(`Make the ${f.name} rub: mix the ${flavourList} with 1 tbsp oil and a pinch of salt. Rub it all over the ${noun}.`);
    } else if (f.style === 'glaze') {
      steps.push(`${P ? `Season the ${noun} with a little oil, salt and pepper. ` : ''}Mix the ${flavourList} to make the glaze – sugary sauces burn, so it goes on near the end.`);
    } else if (f.style === 'toss') {
      steps.push(`${P ? `Season the ${noun} with a little oil, salt and pepper. ` : ''}Mix the ${flavourList} in a large bowl ready for tossing` +
        (flavourNames.includes('butter') ? ' (melt the butter first – 20 seconds in the microwave).' : '.'));
    }

    steps.push(`Preheat the air fryer to ${T}°C for 3 minutes.`);

    // Schedule steps + timer events
    const events = [];
    const groups = [];
    items.forEach(i => {
      const g = groups.find(x => x.start === i.start);
      if (g) g.items.push(i); else groups.push({ start: i.start, items: [i] });
    });
    groups.forEach((g, gi) => {
      const what = joinNice(g.items.map(i => i.noun));
      if (gi === 0) {
        steps.push(`Put the ${what} in the basket and start ${aOrAn(total)} ${total}-minute timer.` + (groups.length > 1 ? ' Everything else goes in on top so it all finishes together.' : ''));
      } else {
        steps.push(`After ${g.start} minutes, add the ${what} to the basket${g.items.some(i => i.kind === 'protein') ? ' (on top or alongside)' : ''}. ${total - g.start} minutes to go.`);
        events.push({ at: g.start * 60, msg: `Add the ${what} now` });
      }
    });

    const proteinIn = P && items.find(i => i.kind === 'protein').start < half;
    let halfMsg;
    if (!P || !proteinIn) halfMsg = 'shake the basket';
    else if (!P.turn) halfMsg = vegNames.length ? `gently shake the veg (leave the ${noun} where it is)` : `check on the ${noun} – no need to turn it`;
    else halfMsg = vegNames.length ? `shake the basket and ${P.turn}` : P.turn;
    steps.push(`At ${half} minutes (halfway), ${halfMsg}.`);
    events.push({ at: half * 60, msg: `Halfway – ${halfMsg}` });

    const lead = f.style === 'glaze' ? 4 : 3;
    if ((f.style === 'glaze' || sauceReserved) && total > lead) {
      const at = total - lead;
      steps.push(`With ${lead} minutes to go, brush the ${f.style === 'glaze' ? 'glaze' : 'reserved marinade'} over the ${noun} and finish cooking until sticky.`);
      events.push({ at: at * 60, msg: `Brush on the ${f.style === 'glaze' ? 'glaze' : 'reserved marinade'}` });
    }

    if (P && P.safe.length) {
      steps.push(`Use a meat thermometer to check the ${noun}: ${P.safe[0].split(': ').slice(1).join(': ')}` + (P.note ? ` ${P.note}` : ''));
    } else if (P) {
      steps.push(`The ${noun} should be golden and crisp at the edges.`);
    }

    if (f.style === 'toss' && !f.fallback) {
      steps.push(`Tip everything into the bowl and toss in the ${f.name.toLowerCase()} sauce.`);
    }
    let finish = '';
    if (P && P.rest) finish += `Rest the ${noun} for ${P.rest} minutes while you plate up (pop the veg back in for a minute if needed). `;
    if (fl.garnish.length) finish += `Finish with ${joinNice(fl.garnish.map(Ingredients.pretty))}. `;
    finish += f.serve;
    steps.push(finish.trim());

    const tips = [];
    if (items.length >= 3) tips.push('Basket feeling crowded? Use a rack, or cook the veg first and keep it warm – crowding stops things crisping.');
    if (T !== 200 && vegNames.length) tips.push(`Cooking at ${T}°C to suit the ${noun}, so the veg times are a little longer than usual.`);

    const timeline = items.map(i => ({ label: cap(i.noun), start: i.start, time: i.time, kind: i.kind }));
    const key = [proteinName, ...vegNames, f.id].join('+');
    return {
      id: 'gen-' + key.replace(/[^a-z0-9+]/g, '-').replace(/\+/g, '--'),
      key,
      generated: true,
      name: cap(name),
      emoji: P ? proteinEmoji(proteinName) : '🥗',
      cat: 'idea',
      temp: T,
      time: total,
      prep: 10,
      serves: 2,
      turn: P && !P.turn ? 'none' : 'shake',
      tags: [f.name.toLowerCase(), 'my kitchen'],
      ing,
      steps,
      safe: P ? P.safe : [],
      events,
      tips,
      timeline,
      flavourId: f.id,
      flavourMissing: fl.missing
    };
  }

  /** Rank database recipes by how many ingredients you already have. */
  function rankRecipes(pantryArr, limit = 20) {
    const pantry = new Set(pantryArr);
    if (!pantry.size) return [];
    const out = [];
    for (const r of RECIPES) {
      const needed = r.ing.filter(([, n]) => !n.startsWith('?') && !Ingredients.isStaple(n)).map(i => i[1]);
      const uniq = [...new Set(needed)];
      const have = uniq.filter(n => pantry.has(n));
      if (!have.length) continue;
      const missing = uniq.filter(n => !pantry.has(n));
      const mainHave = pantry.has(uniq[0]);
      out.push({ recipe: r, have: have.length, total: uniq.length, missing, score: have.length / uniq.length + (mainHave ? 0.5 : 0) - missing.length * 0.15 });
    }
    out.sort((a, b) => a.missing.length - b.missing.length || b.score - a.score);
    return out.filter(x => x.missing.length <= 4 || x.have >= 2).slice(0, limit);
  }

  /** Safe temperatures relevant to any recipe (from its main protein). */
  function safeTempsFor(recipe) {
    if (recipe.safe) return recipe.safe;
    const found = new Set();
    for (const [, n] of recipe.ing) {
      const name = n.replace(/^\?/, '');
      const p = PROTEINS[name];
      if (p && p.safe.length && !n.startsWith('?')) p.safe.forEach(s => found.add(s));
    }
    return [...found];
  }

  return { generate, rankRecipes, flavourOptions, safeTempsFor, mmss };
})();
