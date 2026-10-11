'use strict';

/*
 * Ingredient catalogue.
 * Each entry is "canonical name|synonym, synonym, ..." and lives in a group.
 * Everything the app stores (pantry, recipe ingredients) uses the canonical name.
 */
const CATALOGUE = {
  meat: [
    'chicken breast|chicken breasts, chicken, chicken fillet, chicken fillets, chicken mini fillets, chicken pieces',
    'chicken thighs|chicken thigh, thighs, boneless chicken thighs',
    'chicken wings|wings, chicken wing',
    'chicken drumsticks|drumsticks, drumstick, chicken legs, chicken leg',
    'turkey mince|minced turkey, turkey',
    'beef steak|steak, steaks, sirloin, sirloin steak, ribeye, rib eye, ribeye steak, rump, rump steak, fillet steak, minute steak, frying steak, beef',
    'beef mince|mince, minced beef, ground beef, beef burgers, burgers, burger patties',
    'pork chops|pork chop, chops, pork loin steaks, pork steaks, pork',
    'pork belly|belly pork, pork belly slices',
    'pork mince|minced pork, ground pork',
    'sausages|sausage, bangers, banger, pork sausages, sausage meat, sausagemeat',
    'cocktail sausages|cocktail sausage, chipolatas, chipolata, mini sausages',
    'bacon|bacon rashers, rashers, streaky bacon, back bacon, lardons, pancetta',
    'gammon steaks|gammon, gammon steak, ham steak, ham steaks',
    'lamb chops|lamb chop, lamb cutlets, lamb cutlet',
    'lamb leg steaks|lamb leg steak, lamb steaks, lamb steak, lamb',
    'lamb mince|minced lamb, ground lamb'
  ],
  fish: [
    'salmon fillets|salmon, salmon fillet, salmon steaks',
    'white fish fillets|white fish, cod, cod fillets, cod loin, haddock, hake, pollock, basa, sea bass, plaice, coley, fish, fish fillets',
    'prawns|prawn, shrimp, shrimps, king prawns, tiger prawns, jumbo shrimp',
    'tinned tuna|tuna, canned tuna, tuna chunks, tin of tuna'
  ],
  protein: [
    'halloumi|halloumi cheese',
    'tofu|bean curd, firm tofu, extra firm tofu',
    'paneer|paneer cheese',
    'chickpeas|chickpea, chick peas, garbanzo beans, garbanzos'
  ],
  veg: [
    'potatoes|potato, chips, fries, spuds, spud, maris piper, king edward, baking potatoes, frozen chips, oven chips, wedges, potato wedges',
    'new potatoes|baby potatoes, salad potatoes, charlotte potatoes, jersey royals',
    'sweet potatoes|sweet potato, sweet potato fries, yam',
    'broccoli|tenderstem, tenderstem broccoli, calabrese, purple sprouting broccoli',
    'cauliflower|cauli',
    'bell peppers|bell pepper, pepper, peppers, red pepper, green pepper, yellow pepper, orange pepper, red peppers, capsicum, sweet peppers',
    'onion|onions, brown onion, white onion, yellow onion',
    'red onion|red onions',
    'spring onions|spring onion, scallions, scallion, green onions, salad onions',
    'courgette|courgettes, zucchini',
    'aubergine|aubergines, eggplant',
    'mushrooms|mushroom, chestnut mushrooms, button mushrooms, portobello mushrooms, closed cup mushrooms',
    'carrots|carrot',
    'parsnips|parsnip',
    'green beans|fine beans, french beans, runner beans',
    'asparagus|asparagus spears',
    'cherry tomatoes|cherry tomato, baby tomatoes, plum tomatoes',
    'tomatoes|tomato, salad tomatoes, vine tomatoes',
    'brussels sprouts|brussels sprout, sprouts, brussel sprouts, brussels',
    'butternut squash|squash, butternut, pumpkin',
    'corn on the cob|corn cobs, corn, corncob, sweetcorn cobs',
    'sweetcorn|tinned sweetcorn, frozen sweetcorn, canned corn',
    'peas|frozen peas, garden peas, petits pois',
    'kale|cavolo nero',
    'spinach|baby spinach',
    'lettuce|salad, salad leaves, iceberg, little gem, romaine, rocket, mixed leaves',
    'cucumber|cucumbers',
    'red chilli|chilli, chillies, fresh chilli, red chillies, green chilli, jalapeno, jalapenos, chili, chilies'
  ],
  fruit: [
    'lemon|lemons, lemon juice',
    'lime|limes, lime juice',
    'apples|apple, bramley, braeburn, cooking apples',
    'bananas|banana',
    'pineapple|pineapple rings, tinned pineapple',
    'raisins|sultanas, currants, dried fruit'
  ],
  sauce: [
    'soy sauce|soy, light soy, dark soy, soya sauce, tamari',
    'honey|runny honey',
    'maple syrup|golden syrup, syrup',
    'sweet chilli sauce|sweet chilli, sweet chili sauce, sweet chili',
    'bbq sauce|bbq, barbecue sauce, barbeque sauce, barbecue',
    'tomato ketchup|ketchup, tomato sauce',
    'mayonnaise|mayo',
    'hot sauce|buffalo sauce, franks, franks red hot, tabasco, chilli sauce',
    'sriracha|sriracha sauce',
    'peri peri sauce|peri peri, peri-peri, piri piri, piri piri sauce, nandos sauce',
    'teriyaki sauce|teriyaki',
    'hoisin sauce|hoisin',
    'pesto|green pesto, red pesto',
    'mustard|dijon, dijon mustard, wholegrain mustard, english mustard, yellow mustard',
    'worcestershire sauce|worcester sauce, worcestershire',
    'tikka paste|tikka masala paste, curry paste, tandoori paste, korma paste, balti paste',
    'mint sauce|mint jelly',
    'passata|pasta sauce, marinara, tomato pasta sauce, chopped tomatoes, tinned tomatoes',
    'sesame oil|toasted sesame oil',
    'rice vinegar|rice wine vinegar',
    'balsamic vinegar|balsamic',
    'hummus|houmous'
  ],
  spice: [
    'garlic|garlic cloves, garlic clove, fresh garlic',
    'ginger|fresh ginger, root ginger, ginger paste',
    'paprika|smoked paprika, sweet paprika',
    'garlic granules|garlic powder, garlic salt',
    'mixed herbs|italian seasoning, dried herbs, herbes de provence, italian herbs',
    'oregano|dried oregano',
    'rosemary|fresh rosemary, dried rosemary',
    'thyme|fresh thyme, dried thyme',
    'parsley|fresh parsley, flat leaf parsley, flat-leaf parsley',
    'cumin|ground cumin, cumin seeds',
    'ground coriander|coriander, coriander powder',
    'fresh coriander|cilantro, coriander leaves',
    'curry powder|madras curry powder, mild curry powder',
    'garam masala',
    'chilli flakes|red pepper flakes, crushed chillies, dried chilli flakes, chili flakes',
    'chilli powder|chili powder, cayenne, cayenne pepper',
    'cajun seasoning|cajun, cajun spice',
    'jerk seasoning|jerk, jerk paste, jerk spice',
    'fajita seasoning|fajita spice, fajita mix, taco seasoning, mexican seasoning',
    'five spice|chinese five spice, five spice powder',
    'cinnamon|ground cinnamon',
    'sesame seeds|sesame'
  ],
  dairy: [
    'eggs|egg, free range eggs',
    'butter|unsalted butter, salted butter',
    'cheddar|cheese, cheddar cheese, grated cheese, mature cheddar',
    'parmesan|parmigiano, grana padano, parmesan cheese',
    'mozzarella|mozzarella sticks, string cheese, grated mozzarella',
    'feta|feta cheese',
    'greek yoghurt|yoghurt, yogurt, greek yogurt, natural yoghurt, plain yoghurt, natural yogurt',
    'milk|semi-skimmed milk, whole milk, oat milk',
    'cream|double cream, single cream, whipping cream',
    'ice cream|vanilla ice cream'
  ],
  cupboard: [
    'plain flour|flour, all purpose flour, self raising flour, self-raising flour',
    'cornflour|corn flour, cornstarch, corn starch',
    'breadcrumbs|panko, panko breadcrumbs, bread crumbs, dried breadcrumbs',
    'baking powder|bicarbonate of soda, bicarb',
    'sugar|caster sugar, granulated sugar, white sugar',
    'brown sugar|light brown sugar, dark brown sugar, soft brown sugar, demerara',
    'icing sugar|powdered sugar',
    'cocoa powder|cocoa',
    'dark chocolate|chocolate, chocolate chips, milk chocolate, choc chips, plain chocolate',
    'chocolate spread|nutella',
    'vanilla extract|vanilla',
    'oats|porridge oats, rolled oats',
    'desiccated coconut|coconut, shredded coconut',
    'puff pastry|ready rolled puff pastry, pastry',
    'tortilla wraps|wraps, tortillas, tortilla',
    'burger buns|buns, brioche buns, bread rolls, rolls',
    'pitta bread|pitta, pittas, pita, pita bread, flatbreads',
    'naan|naan bread, naans',
    'bread|baguette, ciabatta, crusty bread, loaf, sliced bread, sourdough',
    'rice|cooked rice, microwave rice, basmati, basmati rice, long grain rice',
    'pasta|spaghetti, penne, fusilli, tagliatelle'
  ],
  staple: [
    'oil|olive oil, vegetable oil, sunflower oil, rapeseed oil, oil spray, spray oil, cooking spray, frylight',
    'salt|sea salt, table salt',
    'black pepper|ground black pepper, peppercorns',
    'water'
  ]
};

const GROUPS = [
  { id: 'meat', label: 'Meat, fish & protein', types: ['meat', 'fish', 'protein'] },
  { id: 'veg', label: 'Veg & fruit', types: ['veg', 'fruit'] },
  { id: 'sauce', label: 'Sauces & condiments', types: ['sauce'] },
  { id: 'spice', label: 'Herbs, spices & aromatics', types: ['spice'] },
  { id: 'dairy', label: 'Dairy & eggs', types: ['dairy'] },
  { id: 'cupboard', label: 'Cupboard & bakery', types: ['cupboard', 'staple'] },
  { id: 'other', label: 'Other', types: ['other'] }
];

// Assumed to be in every kitchen, so never shown as "missing".
const STAPLES = new Set(['oil', 'salt', 'black pepper', 'water']);

const QUICK_ADD = {
  meat: ['chicken breast', 'chicken thighs', 'chicken wings', 'beef steak', 'beef mince', 'pork chops', 'sausages', 'bacon', 'lamb chops', 'salmon fillets', 'white fish fillets', 'prawns', 'halloumi', 'tofu'],
  veg: ['potatoes', 'sweet potatoes', 'broccoli', 'bell peppers', 'onion', 'red onion', 'courgette', 'mushrooms', 'carrots', 'green beans', 'cauliflower', 'cherry tomatoes', 'lemon', 'lime'],
  sauce: ['soy sauce', 'honey', 'sweet chilli sauce', 'bbq sauce', 'peri peri sauce', 'teriyaki sauce', 'hot sauce', 'mustard', 'pesto', 'tomato ketchup'],
  spice: ['garlic', 'paprika', 'garlic granules', 'cajun seasoning', 'mixed herbs', 'cumin', 'curry powder', 'chilli flakes', 'five spice'],
  dairy: ['eggs', 'butter', 'cheddar', 'parmesan', 'greek yoghurt'],
  cupboard: ['plain flour', 'cornflour', 'breadcrumbs', 'tortilla wraps', 'rice']
};

const Ingredients = (() => {
  const typeOf = new Map();   // canonical -> type
  const lookup = new Map();   // stemmed name/synonym -> canonical
  const labels = [];          // for autocomplete: { label, canonical }

  const stemWord = w => w.replace(/ies$/, 'y').replace(/oes$/, 'o').replace(/s$/, '');
  const clean = s => String(s || '').toLowerCase()
    .replace(/[’'`]/g, '')
    .replace(/[^a-z0-9&\- ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const stem = s => clean(s).split(' ').map(stemWord).join(' ');

  for (const [type, entries] of Object.entries(CATALOGUE)) {
    for (const entry of entries) {
      const [name, syns = ''] = entry.split('|');
      typeOf.set(name, type);
      const all = [name, ...syns.split(',').map(s => s.trim()).filter(Boolean)];
      all.forEach((label, i) => {
        const key = stem(label);
        if (!lookup.has(key)) lookup.set(key, name);
        labels.push({ label, canonical: name, isCanonical: i === 0 });
      });
    }
  }

  const FILLER = /\b(fresh|frozen|dried|large|small|medium|big|raw|tinned|canned|chopped|sliced|diced|organic|some|a|an|of|the|pack|packet|tin|bag|jar|bottle)\b/g;

  /** Turn whatever the user typed into a canonical ingredient name, or null. */
  function resolve(input) {
    let s = clean(input).replace(/^[\d.\/½¼¾]+\s*(g|kg|ml|l|x)?\s+/, '');
    if (!s) return null;
    const tryKey = t => lookup.get(stem(t)) || null;
    let hit = tryKey(s);
    if (hit) return hit;
    const trimmed = s.replace(FILLER, ' ').replace(/\s+/g, ' ').trim();
    if (trimmed && (hit = tryKey(trimmed))) return hit;
    // Drop leading words: "smoked streaky bacon" -> "streaky bacon" -> "bacon"
    const words = (trimmed || s).split(' ');
    for (let i = 1; i < words.length; i++) {
      if ((hit = tryKey(words.slice(i).join(' ')))) return hit;
    }
    return null;
  }

  /** Autocomplete suggestions for a partial query. */
  function suggest(query, limit = 8) {
    const q = clean(query);
    if (!q) return [];
    const scored = [];
    for (const item of labels) {
      const l = item.label;
      let score = -1;
      if (l === q) score = 100;
      else if (l.startsWith(q)) score = 80;
      else if (l.split(' ').some(w => w.startsWith(q))) score = 60;
      else if (q.length > 2 && l.includes(q)) score = 40;
      if (score < 0) continue;
      if (item.isCanonical) score += 5;
      score -= l.length / 100;
      scored.push({ ...item, score });
    }
    scored.sort((a, b) => b.score - a.score);
    const seen = new Set();
    const out = [];
    for (const s of scored) {
      if (seen.has(s.canonical)) continue;
      seen.add(s.canonical);
      out.push(s);
      if (out.length >= limit) break;
    }
    return out;
  }

  const type = name => typeOf.get(name) || 'other';
  const group = name => (GROUPS.find(g => g.types.includes(type(name))) || GROUPS[GROUPS.length - 1]).id;
  const isStaple = name => STAPLES.has(name);
  const known = name => typeOf.has(name);

  /** Display form of a canonical name (fixes capitalisation of proper nouns). */
  const pretty = name => String(name)
    .replace(/\bbbq\b/g, 'BBQ').replace(/\bworcestershire\b/g, 'Worcestershire')
    .replace(/\bgreek\b/g, 'Greek').replace(/\bbrussels\b/g, 'Brussels').replace(/\bcajun\b/g, 'Cajun');

  return { resolve, suggest, type, group, isStaple, known, clean, stem, pretty };
})();
