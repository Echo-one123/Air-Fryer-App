'use strict';

/*
 * Built-in recipe database.
 * ing: [quantity, canonical ingredient name, note?]
 *      Prefix the name with "?" for optional ingredients (never counted as missing).
 * turn: what to do at halfway – 'shake' (default), 'flip', or 'none' (leave it alone).
 */
const CATEGORIES = [
  { id: 'chicken', label: 'Chicken', emoji: '🍗' },
  { id: 'beef', label: 'Beef', emoji: '🥩' },
  { id: 'pork', label: 'Pork', emoji: '🥓' },
  { id: 'lamb', label: 'Lamb', emoji: '🐑' },
  { id: 'fish', label: 'Fish', emoji: '🐟' },
  { id: 'veggie', label: 'Veggie', emoji: '🥦' },
  { id: 'sides', label: 'Sides', emoji: '🍟' },
  { id: 'snacks', label: 'Snacks', emoji: '🧀' },
  { id: 'desserts', label: 'Desserts', emoji: '🍫' },
  { id: 'wraps', label: 'Wraps', emoji: '🌯' },
  { id: 'pyrex', label: 'Pyrex Dish', emoji: '🥘' },
  { id: 'breakfast', label: 'Breakfast', emoji: '🍳' },
  { id: 'frozen', label: 'From Frozen', emoji: '🧊' }
];

// Shown above the results when a category chip is selected.
const CATEGORY_TIPS = {
  pyrex: {
    title: '🥘 Cooking in a Pyrex dish',
    tips: [
      'Use oven-safe glass (Pyrex or borosilicate) – check it says oven-safe. No plastic lids.',
      'Leave a 1–2cm gap around the dish so the air can flow, and make sure it doesn\'t touch the element.',
      'Avoid sudden temperature changes: don\'t put a dish straight from the fridge or freezer into a hot air fryer, don\'t add cold liquid to a hot dish, and never put a hot dish on a wet or cold surface.',
      'Glass heats more slowly than metal, so bakes take a few minutes longer. Most work best at 160–180°C.',
      'Lift the hot dish out with oven gloves (a strip of foil underneath makes a handy sling). If covering with foil, tuck it in tightly so it can\'t blow into the element.'
    ]
  }
};

const RECIPES = [
  // ───────────── CHICKEN ─────────────
  {
    id: 'salt-pepper-wings', name: 'Crispy Salt & Pepper Wings', emoji: '🍗', cat: 'chicken',
    temp: 200, time: 22, prep: 5, serves: 2, turn: 'shake',
    tags: ['crispy', 'party', 'gluten-free', 'fakeaway'],
    ing: [['800g', 'chicken wings', 'split into flats and drumettes'], ['1 tbsp', 'cornflour'], ['1 tsp', 'salt'], ['1 tsp', 'black pepper'], ['½ tsp', '?five spice'], ['1 tbsp', 'oil'], ['1', '?red chilli', 'finely sliced'], ['2', '?spring onions', 'sliced']],
    steps: [
      'Pat the wings really dry with kitchen paper – dry skin means crispy skin.',
      'Toss the wings with the cornflour, salt, pepper, five spice and oil until evenly coated.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Arrange the wings in a single layer (cook in batches if needed) and cook for 22 minutes, shaking the basket at halfway.',
      'Check the thickest wing has reached 75°C, then toss with the chilli and spring onions and serve straight away.'
    ]
  },
  {
    id: 'honey-soy-thighs', name: 'Honey Soy Chicken Thighs', emoji: '🍯', cat: 'chicken',
    temp: 200, time: 18, prep: 10, serves: 4, turn: 'flip',
    tags: ['sticky', 'asian', 'family', 'weeknight'],
    ing: [['6', 'chicken thighs', 'boneless, skinless'], ['3 tbsp', 'soy sauce'], ['2 tbsp', 'honey'], ['2 cloves', 'garlic', 'crushed'], ['1 tsp', 'ginger', 'grated'], ['1 tsp', '?sesame oil'], ['1 tsp', '?sesame seeds'], ['2', '?spring onions', 'sliced']],
    steps: [
      'Mix the soy sauce, honey, garlic, ginger and sesame oil. Spoon 2 tbsp into a small bowl for glazing later.',
      'Toss the chicken in the rest and marinate for at least 15 minutes (or overnight in the fridge).',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook the chicken smooth-side down for 10 minutes.',
      'Turn the thighs, brush with the reserved glaze and cook for 8 more minutes until sticky and 75°C in the middle.',
      'Rest for 3 minutes, then scatter with sesame seeds and spring onions. Lovely with rice and broccoli.'
    ]
  },
  {
    id: 'peri-peri-drumsticks', name: 'Peri-Peri Drumsticks', emoji: '🌶️', cat: 'chicken',
    temp: 190, time: 25, prep: 10, serves: 4, turn: 'flip',
    tags: ['spicy', 'family', 'budget', 'gluten-free'],
    ing: [['8', 'chicken drumsticks'], ['3 tbsp', 'peri peri sauce'], ['1 tsp', 'paprika'], ['1', 'lemon', 'juiced'], ['1 tbsp', 'oil'], ['½ tsp', 'salt']],
    steps: [
      'Slash each drumstick 2–3 times down to the bone so the flavour gets in and it cooks evenly.',
      'Mix the peri-peri sauce, paprika, lemon juice, oil and salt, then rub all over the chicken. Marinate for 30 minutes if you have time.',
      'Preheat the air fryer to 190°C for 3 minutes.',
      'Cook for 25 minutes, turning the drumsticks at halfway.',
      'Check the meat next to the bone has reached 75°C and the juices run clear. Serve with extra sauce, chips and slaw.'
    ]
  },
  {
    id: 'lemon-garlic-chicken', name: 'Lemon & Garlic Chicken Breast', emoji: '🍋', cat: 'chicken',
    temp: 190, time: 16, prep: 5, serves: 2, turn: 'flip',
    tags: ['healthy', 'quick', 'high-protein', 'gluten-free'],
    ing: [['2', 'chicken breast', 'about 200g each'], ['1', 'lemon', 'zest and juice'], ['2 cloves', 'garlic', 'crushed'], ['1 tsp', 'mixed herbs'], ['1 tbsp', 'oil'], ['½ tsp', 'salt'], ['½ tsp', 'black pepper']],
    steps: [
      'Bash the thickest part of each breast with a rolling pin so it is an even 2cm thick – this stops it drying out.',
      'Mix the lemon zest and juice, garlic, herbs, oil, salt and pepper. Coat the chicken.',
      'Preheat the air fryer to 190°C for 3 minutes.',
      'Cook for 16 minutes, turning at halfway.',
      'Check it has reached 75°C in the thickest part, then rest for 5 minutes before slicing so it stays juicy.'
    ]
  },
  {
    id: 'chicken-tikka-skewers', name: 'Chicken Tikka Skewers', emoji: '🍢', cat: 'chicken',
    temp: 200, time: 14, prep: 15, serves: 4, turn: 'flip',
    tags: ['curry', 'fakeaway', 'bbq', 'high-protein'],
    ing: [['600g', 'chicken breast', 'cut into 3cm chunks'], ['150g', 'greek yoghurt'], ['2 tbsp', 'tikka paste'], ['½', 'lemon', 'juiced'], ['1', 'red onion', 'cut into chunks'], ['1', 'bell peppers', 'cut into chunks'], ['½ tsp', 'salt'], ['4', '?naan', 'to serve']],
    steps: [
      'Mix the yoghurt, tikka paste, lemon juice and salt. Stir in the chicken and marinate for at least 30 minutes.',
      'Thread the chicken onto skewers, alternating with onion and pepper (soak wooden skewers for 20 minutes first and trim them to fit your basket).',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 14 minutes, turning at halfway, until charred at the edges.',
      'Check the chicken has reached 75°C. Serve with warm naan and a dollop of yoghurt.'
    ]
  },
  {
    id: 'panko-chicken-tenders', name: 'Panko Chicken Goujons', emoji: '🍗', cat: 'chicken',
    temp: 200, time: 12, prep: 15, serves: 3, turn: 'flip',
    tags: ['crispy', 'kids', 'family', 'fakeaway'],
    ing: [['500g', 'chicken breast', 'cut into strips'], ['50g', 'plain flour'], ['2', 'eggs', 'beaten'], ['100g', 'breadcrumbs', 'panko if possible'], ['1 tsp', 'paprika'], ['1 tsp', 'garlic granules'], ['½ tsp', 'salt'], ['spray', 'oil']],
    steps: [
      'Set up three bowls: flour seasoned with the salt, paprika and garlic granules; beaten egg; breadcrumbs.',
      'Dip each strip in flour, then egg, then breadcrumbs, pressing the crumbs on well.',
      'Spray the goujons all over with oil. Preheat the air fryer to 200°C for 3 minutes.',
      'Cook in a single layer for 12 minutes, turning at halfway.',
      'Check they have reached 75°C inside. Serve with BBQ sauce, ketchup or honey mustard for dipping.'
    ]
  },
  {
    id: 'chicken-fajitas', name: 'Chicken Fajita Traybake', emoji: '🌮', cat: 'chicken',
    temp: 200, time: 15, prep: 10, serves: 3, turn: 'shake',
    tags: ['wraps', 'mexican', 'weeknight', 'family', 'quick'],
    ing: [['2', 'chicken breast', 'sliced into strips'], ['2', 'bell peppers', 'sliced'], ['1', 'red onion', 'sliced'], ['2 tbsp', 'fajita seasoning'], ['1 tbsp', 'oil'], ['6', 'tortilla wraps'], ['50g', '?cheddar', 'grated'], ['2 tbsp', '?greek yoghurt', 'instead of soured cream'], ['1', '?lime', 'cut into wedges']],
    steps: [
      'Toss the chicken, peppers and onion with the fajita seasoning and oil.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 15 minutes, shaking the basket at halfway, until the chicken is golden and 75°C inside.',
      'Warm the wraps in the air fryer for 1 minute.',
      'Fill the wraps with the chicken and veg, cheese, yoghurt and a squeeze of lime.'
    ]
  },

  // ───────────── BEEF ─────────────
  {
    id: 'perfect-steak', name: 'Perfect Ribeye Steak', emoji: '🥩', cat: 'beef',
    temp: 200, time: 10, prep: 5, serves: 2, turn: 'flip',
    tags: ['date night', 'quick', 'gluten-free', 'high-protein'],
    ing: [['2', 'beef steak', 'ribeye or sirloin, 2.5cm thick'], ['1 tbsp', 'oil'], ['1 tsp', 'salt'], ['1 tsp', 'black pepper'], ['20g', '?butter'], ['2 cloves', '?garlic', 'bashed'], ['1 sprig', '?rosemary']],
    steps: [
      'Take the steaks out of the fridge 30 minutes before cooking. Pat dry, rub with oil and season generously.',
      'Preheat the air fryer to 200°C for 5 minutes – a hot basket gives a better crust.',
      'Cook, turning at halfway: rare 8 min · medium-rare 9–10 min · medium 11–12 min · well done 14 min (for 2.5cm thick steaks).',
      'Check with a thermometer: rare 52°C · medium-rare 57°C · medium 63°C · well done 71°C.',
      'Rest for 5 minutes topped with the butter, garlic and rosemary, then slice against the grain.'
    ]
  },
  {
    id: 'smash-burgers', name: 'Cheesy Beef Burgers', emoji: '🍔', cat: 'beef',
    temp: 200, time: 10, prep: 10, serves: 4, turn: 'flip',
    tags: ['fakeaway', 'family', 'weekend', 'bbq'],
    ing: [['500g', 'beef mince', '20% fat is ideal'], ['1 tsp', 'salt'], ['½ tsp', 'black pepper'], ['1 tsp', '?worcestershire sauce'], ['4 slices', 'cheddar'], ['4', 'burger buns'], ['to serve', '?lettuce'], ['to serve', '?tomatoes'], ['to serve', '?tomato ketchup'], ['to serve', '?mustard']],
    steps: [
      'Mix the mince with the salt, pepper and Worcestershire sauce. Divide into 4 and press into patties 1cm thick and a bit wider than your buns (they shrink).',
      'Press a dimple into the middle of each with your thumb so they stay flat.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 10 minutes, turning at halfway. Lay the cheese on for the last minute to melt.',
      'Check they have reached 75°C with no pink in the middle. Toast the buns cut-side up for 1–2 minutes, then build your burgers.'
    ]
  },
  {
    id: 'italian-meatballs', name: 'Italian Meatballs', emoji: '🍝', cat: 'beef',
    temp: 190, time: 12, prep: 15, serves: 4, turn: 'shake',
    tags: ['family', 'pasta', 'batch cook', 'kids'],
    ing: [['500g', 'beef mince'], ['40g', 'breadcrumbs'], ['1', 'eggs'], ['30g', 'parmesan', 'finely grated'], ['2 cloves', 'garlic', 'crushed'], ['1 tsp', 'oregano'], ['½ tsp', 'salt'], ['500g', '?passata', 'to serve'], ['300g', '?pasta', 'to serve']],
    steps: [
      'Gently mix the mince, breadcrumbs, egg, parmesan, garlic, oregano and salt – don\'t overwork it or they go tough.',
      'Roll into about 20 walnut-sized balls.',
      'Preheat the air fryer to 190°C for 3 minutes.',
      'Cook for 12 minutes, shaking the basket at halfway.',
      'Check they have reached 75°C with no pink. Simmer in warm passata for 5 minutes and serve over pasta with extra parmesan.'
    ]
  },
  {
    id: 'beef-kebabs', name: 'Beef & Pepper Kebabs', emoji: '🍢', cat: 'beef',
    temp: 200, time: 10, prep: 15, serves: 4, turn: 'flip',
    tags: ['bbq', 'summer', 'high-protein'],
    ing: [['500g', 'beef steak', 'rump or sirloin, cut into 3cm cubes'], ['1', 'bell peppers', 'cut into chunks'], ['1', 'red onion', 'cut into chunks'], ['2 tbsp', 'soy sauce'], ['1 tbsp', 'worcestershire sauce'], ['1 tsp', 'paprika'], ['2 cloves', 'garlic', 'crushed'], ['1 tbsp', 'oil']],
    steps: [
      'Mix the soy, Worcestershire sauce, paprika, garlic and oil. Toss the beef in it and marinate for 20 minutes.',
      'Thread the beef onto skewers, alternating with pepper and onion.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 8–10 minutes, turning at halfway.',
      'For a pink middle aim for 57–63°C; for well done 71°C. Rest for 3 minutes before serving.'
    ]
  },
  {
    id: 'crispy-chilli-beef', name: 'Crispy Chilli Beef', emoji: '🌶️', cat: 'beef',
    temp: 200, time: 12, prep: 15, serves: 2, turn: 'shake',
    tags: ['fakeaway', 'chinese', 'spicy', 'sticky'],
    ing: [['300g', 'beef steak', 'very thinly sliced into strips'], ['3 tbsp', 'cornflour'], ['1 tbsp', 'soy sauce'], ['4 tbsp', 'sweet chilli sauce'], ['1 tbsp', '?rice vinegar'], ['1', 'bell peppers', 'thinly sliced'], ['2', 'spring onions', 'sliced'], ['1', '?red chilli', 'sliced'], ['2 cloves', 'garlic', 'crushed'], ['spray', 'oil']],
    steps: [
      'Toss the beef in the soy sauce, then in the cornflour until every strip is dry-coated. Spray with oil.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook the beef for 10 minutes, shaking twice, adding the pepper slices for the last 4 minutes.',
      'Meanwhile mix the sweet chilli sauce, rice vinegar, garlic and chilli.',
      'Toss the crispy beef and peppers in the sauce and return to the air fryer for 2 minutes to go sticky. Scatter with spring onions and serve with rice.'
    ]
  },

  // ───────────── PORK ─────────────
  {
    id: 'honey-mustard-pork-chops', name: 'Honey Mustard Pork Chops', emoji: '🍯', cat: 'pork',
    temp: 190, time: 14, prep: 5, serves: 2, turn: 'flip',
    tags: ['weeknight', 'quick', 'gluten-free'],
    ing: [['2', 'pork chops', 'about 2cm thick'], ['1 tbsp', 'mustard', 'wholegrain or Dijon'], ['1 tbsp', 'honey'], ['1 tsp', '?thyme'], ['1 tbsp', 'oil'], ['½ tsp', 'salt'], ['½ tsp', 'black pepper']],
    steps: [
      'Snip through the fat on the edge of each chop every 2cm so they don\'t curl up.',
      'Rub with oil, salt, pepper and thyme. Mix the mustard and honey in a small bowl.',
      'Preheat the air fryer to 190°C for 3 minutes.',
      'Cook for 8 minutes, then turn, brush with the honey mustard and cook for 5–6 minutes more.',
      'Check they have reached 71°C, then rest for 3 minutes. Great with roast potatoes and green beans.'
    ]
  },
  {
    id: 'pork-belly-bites', name: 'Crispy Pork Belly Bites', emoji: '🥓', cat: 'pork',
    temp: 200, time: 25, prep: 10, serves: 4, turn: 'shake',
    tags: ['crispy', 'fakeaway', 'weekend', 'sticky'],
    ing: [['600g', 'pork belly', 'skin removed, cut into 3cm cubes'], ['1 tsp', 'five spice'], ['1 tsp', 'salt'], ['1 tbsp', 'soy sauce'], ['1 tbsp', '?honey']],
    steps: [
      'Pat the pork dry, then toss with the soy sauce, five spice and salt.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 20 minutes, shaking the basket every 5 minutes so the fat renders evenly.',
      'Drizzle with the honey, toss and cook for 5 more minutes until sticky and crisp.',
      'Check the pork has reached at least 71°C (it will be well above this). Serve with rice and pickled cucumber.'
    ]
  },
  {
    id: 'air-fryer-sausages', name: 'Sausages & Sticky Onions', emoji: '🌭', cat: 'pork',
    temp: 180, time: 13, prep: 5, serves: 4, turn: 'shake',
    tags: ['budget', 'kids', 'breakfast', 'family'],
    ing: [['8', 'sausages'], ['2', '?onion', 'sliced into rings'], ['1 tbsp', '?oil'], ['1 tsp', '?brown sugar']],
    steps: [
      'No need to prick the sausages – they stay juicier.',
      'Toss the onion rings with the oil and sugar.',
      'Cook the sausages at 180°C for 5 minutes, then add the onions around them.',
      'Cook for 8 more minutes, shaking at halfway, until the sausages are browned all over.',
      'Check the sausages have reached 75°C in the centre with no pink. Serve with mash and gravy.'
    ]
  },
  {
    id: 'crispy-bacon', name: 'Crispy Bacon', emoji: '🥓', cat: 'pork',
    temp: 180, time: 8, prep: 1, serves: 2, turn: 'flip',
    tags: ['breakfast', 'quick', 'gluten-free'],
    ing: [['6 rashers', 'bacon', 'smoked or unsmoked'], ['1 slice', '?bread', 'to catch the fat']],
    steps: [
      'Tip: put a slice of bread in the bottom of the drawer (under the basket) to catch dripping fat and stop it smoking.',
      'Lay the bacon in a single layer without overlapping.',
      'Cook at 180°C for 6–10 minutes: 6 for back bacon, 8–10 for crispy streaky. Turn at halfway.',
      'Drain on kitchen paper and serve in a buttered roll.'
    ]
  },
  {
    id: 'gammon-pineapple', name: 'Gammon & Pineapple', emoji: '🍍', cat: 'pork',
    temp: 190, time: 10, prep: 3, serves: 2, turn: 'flip',
    tags: ['retro', 'quick', 'weeknight'],
    ing: [['2', 'gammon steaks'], ['2 rings', 'pineapple'], ['1 tsp', '?honey'], ['1 tsp', '?mustard'], ['to serve', '?peas']],
    steps: [
      'Snip the fat around the edge of the gammon every 2cm so it stays flat.',
      'Preheat the air fryer to 190°C for 3 minutes.',
      'Cook the gammon for 6 minutes. Turn it, top each steak with a pineapple ring brushed with honey and mustard.',
      'Cook for 4 more minutes until the pineapple is caramelised.',
      'Check the gammon has reached 71°C. Serve with chips and peas.'
    ]
  },

  // ───────────── LAMB ─────────────
  {
    id: 'rosemary-lamb-chops', name: 'Rosemary & Garlic Lamb Chops', emoji: '🐑', cat: 'lamb',
    temp: 200, time: 10, prep: 20, serves: 2, turn: 'flip',
    tags: ['sunday', 'date night', 'gluten-free'],
    ing: [['6', 'lamb chops'], ['2 cloves', 'garlic', 'crushed'], ['1 tsp', 'rosemary', 'finely chopped'], ['1 tbsp', 'oil'], ['½ tsp', 'salt'], ['½', '?lemon']],
    steps: [
      'Mix the garlic, rosemary, oil and salt. Rub over the chops and leave for 15 minutes.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 8–10 minutes, turning at halfway.',
      'Pink and juicy: 63°C. Well done: 71°C.',
      'Rest for 3 minutes, squeeze over the lemon and serve with new potatoes.'
    ]
  },
  {
    id: 'lamb-koftas', name: 'Spiced Lamb Koftas', emoji: '🧆', cat: 'lamb',
    temp: 190, time: 12, prep: 20, serves: 4, turn: 'flip',
    tags: ['middle eastern', 'fakeaway', 'bbq'],
    ing: [['500g', 'lamb mince'], ['1', 'onion', 'very finely grated'], ['2 cloves', 'garlic', 'crushed'], ['1 tsp', 'cumin'], ['1 tsp', 'ground coriander'], ['½ tsp', '?chilli flakes'], ['½ tsp', 'salt'], ['4', 'pitta bread'], ['150g', '?greek yoghurt'], ['½', '?cucumber']],
    steps: [
      'Squeeze the grated onion in your hands to get rid of excess juice.',
      'Mix the lamb, onion, garlic, spices and salt. Shape into 8 sausage shapes (on skewers if you like) and chill for 10 minutes.',
      'Preheat the air fryer to 190°C for 3 minutes.',
      'Cook for 12 minutes, turning at halfway.',
      'Check they have reached 75°C (mince should be cooked through). Warm the pittas for 1 minute and serve with yoghurt, cucumber and salad.'
    ]
  },
  {
    id: 'greek-lamb-steaks', name: 'Greek Lamb Steaks', emoji: '🫒', cat: 'lamb',
    temp: 200, time: 10, prep: 15, serves: 2, turn: 'flip',
    tags: ['greek', 'summer', 'gluten-free'],
    ing: [['2', 'lamb leg steaks'], ['1 tsp', 'oregano'], ['1', 'lemon', 'zest and juice'], ['2 cloves', 'garlic', 'crushed'], ['1 tbsp', 'oil'], ['½ tsp', 'salt'], ['100g', '?feta'], ['150g', '?cherry tomatoes'], ['½', '?cucumber']],
    steps: [
      'Mix the oregano, lemon, garlic, oil and salt. Coat the lamb and marinate for 15 minutes.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 10 minutes, turning at halfway.',
      'Medium (pink): 63°C. Well done: 71°C. Rest for 3 minutes.',
      'Serve with a Greek salad of tomatoes, cucumber and crumbled feta.'
    ]
  },
  {
    id: 'minted-lamb-burgers', name: 'Minted Lamb & Feta Burgers', emoji: '🍔', cat: 'lamb',
    temp: 200, time: 10, prep: 10, serves: 4, turn: 'flip',
    tags: ['bbq', 'weekend', 'fakeaway'],
    ing: [['500g', 'lamb mince'], ['2 tbsp', 'mint sauce'], ['100g', 'feta', 'crumbled'], ['½ tsp', 'cumin'], ['½ tsp', 'salt'], ['4', 'burger buns'], ['to serve', '?lettuce'], ['100g', '?greek yoghurt']],
    steps: [
      'Mix the lamb, 1 tbsp mint sauce, feta, cumin and salt. Shape into 4 patties 2cm thick with a dimple in the middle.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 10 minutes, turning at halfway.',
      'Check they have reached 75°C. Toast the buns for 1 minute.',
      'Mix the yoghurt with the rest of the mint sauce and spoon over the burgers.'
    ]
  },

  // ───────────── FISH ─────────────
  {
    id: 'honey-garlic-salmon', name: 'Honey Garlic Salmon', emoji: '🐟', cat: 'fish',
    temp: 200, time: 9, prep: 5, serves: 2, turn: 'none',
    tags: ['healthy', 'quick', 'omega-3', 'weeknight'],
    ing: [['2', 'salmon fillets', 'skin on'], ['1 tbsp', 'honey'], ['1 tbsp', 'soy sauce'], ['1 clove', 'garlic', 'crushed'], ['½', '?lemon'], ['1 tsp', '?sesame seeds']],
    steps: [
      'Mix the honey, soy sauce and garlic.',
      'Pat the salmon dry and place skin-side down on a pierced baking-paper liner (stops sticking). Brush with half the glaze.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 8–10 minutes – no need to turn. Brush with the rest of the glaze for the last 2 minutes.',
      'It is done when it flakes easily and reaches 63°C. Squeeze over lemon and scatter with sesame seeds.'
    ]
  },
  {
    id: 'fish-goujons', name: 'Crispy Fish Goujons', emoji: '🐠', cat: 'fish',
    temp: 200, time: 10, prep: 15, serves: 3, turn: 'flip',
    tags: ['kids', 'crispy', 'fish & chips', 'family'],
    ing: [['400g', 'white fish fillets', 'cod, haddock or hake, cut into strips'], ['40g', 'plain flour'], ['1', 'eggs', 'beaten'], ['80g', 'breadcrumbs'], ['1', 'lemon', 'zest, plus wedges to serve'], ['½ tsp', 'salt'], ['spray', 'oil'], ['3 tbsp', '?mayonnaise', 'for dipping'], ['to serve', '?peas']],
    steps: [
      'Mix the breadcrumbs with the lemon zest and salt.',
      'Dip the fish in flour, then egg, then breadcrumbs. Spray with oil.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 10 minutes, turning gently at halfway.',
      'The fish is done when it flakes and reaches 63°C. Serve with lemon wedges, mayo and peas.'
    ]
  },
  {
    id: 'garlic-butter-prawns', name: 'Garlic Butter Prawns', emoji: '🍤', cat: 'fish',
    temp: 200, time: 6, prep: 5, serves: 2, turn: 'shake',
    tags: ['quick', 'date night', 'gluten-free', 'pasta'],
    ing: [['300g', 'prawns', 'raw king prawns, peeled'], ['30g', 'butter', 'melted'], ['3 cloves', 'garlic', 'crushed'], ['½ tsp', 'chilli flakes'], ['1', 'lemon'], ['½ tsp', 'salt'], ['small handful', '?parsley', 'chopped'], ['to serve', '?bread', 'crusty']],
    steps: [
      'Toss the prawns with the melted butter, garlic, chilli flakes and salt.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 5–7 minutes, shaking at halfway, until pink and opaque all the way through (63°C). Already-cooked prawns only need 3 minutes to heat through.',
      'Squeeze over the lemon and scatter with parsley.',
      'Serve with crusty bread to mop up the butter, or toss through pasta.'
    ]
  },
  {
    id: 'lemon-herb-cod', name: 'Lemon & Herb Crusted Cod', emoji: '🍋', cat: 'fish',
    temp: 190, time: 10, prep: 5, serves: 2, turn: 'none',
    tags: ['healthy', 'quick', 'light'],
    ing: [['2', 'white fish fillets', 'thick cod loins'], ['15g', 'butter', 'softened'], ['1', 'lemon', 'zest, plus wedges'], ['1 tsp', 'mixed herbs'], ['20g', '?breadcrumbs'], ['15g', '?parmesan', 'grated'], ['¼ tsp', 'salt']],
    steps: [
      'Mix the butter, lemon zest, herbs, breadcrumbs, parmesan and salt.',
      'Pat the fish dry and press the mixture on top of each fillet.',
      'Preheat the air fryer to 190°C for 3 minutes.',
      'Cook for 10 minutes without turning, until the top is golden.',
      'The fish is done at 63°C, when it flakes easily. Serve with new potatoes and green beans.'
    ]
  },
  {
    id: 'tuna-fishcakes', name: 'Tuna Fishcakes', emoji: '🐟', cat: 'fish',
    temp: 200, time: 12, prep: 25, serves: 4, turn: 'flip',
    tags: ['budget', 'batch cook', 'kids', 'leftovers'],
    ing: [['2 × 145g tins', 'tinned tuna', 'drained'], ['400g', 'potatoes', 'boiled and mashed (or leftover mash)'], ['2', 'spring onions', 'finely sliced'], ['1', 'lemon', 'zest'], ['1', 'eggs', 'beaten'], ['60g', 'breadcrumbs'], ['1 tsp', '?mustard'], ['½ tsp', 'salt'], ['spray', 'oil'], ['to serve', '?sweet chilli sauce']],
    steps: [
      'Mix the tuna, mash, spring onions, lemon zest, mustard and salt. Shape into 8 cakes and chill for 15 minutes.',
      'Dip each cake in the beaten egg, then the breadcrumbs. Spray with oil.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 12 minutes, turning carefully at halfway, until golden and piping hot.',
      'Serve with sweet chilli sauce and a green salad.'
    ]
  },
  {
    id: 'coconut-prawns', name: 'Coconut Prawns', emoji: '🥥', cat: 'fish',
    temp: 200, time: 8, prep: 15, serves: 2, turn: 'flip',
    tags: ['party', 'crispy', 'tropical'],
    ing: [['250g', 'prawns', 'raw king prawns, peeled, tails on'], ['30g', 'plain flour'], ['1', 'eggs', 'beaten'], ['40g', 'desiccated coconut'], ['30g', 'breadcrumbs'], ['¼ tsp', 'salt'], ['spray', 'oil'], ['3 tbsp', '?sweet chilli sauce', 'for dipping'], ['1', '?lime']],
    steps: [
      'Mix the coconut and breadcrumbs. Season the flour with salt.',
      'Dip each prawn in flour, egg, then the coconut mix. Spray with oil.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 8 minutes, turning at halfway, until golden and the prawns are pink and opaque (63°C).',
      'Serve with sweet chilli sauce and lime wedges.'
    ]
  },

  // ───────────── VEGGIE ─────────────
  {
    id: 'halloumi-fries', name: 'Halloumi Fries', emoji: '🧀', cat: 'veggie',
    temp: 200, time: 8, prep: 5, serves: 2, turn: 'flip',
    tags: ['trending', 'vegetarian', 'snack', 'quick', 'party'],
    ing: [['225g block', 'halloumi', 'cut into 1cm fingers'], ['1 tbsp', 'cornflour'], ['½ tsp', 'paprika'], ['spray', 'oil'], ['1 tbsp', '?honey'], ['pinch', '?chilli flakes']],
    steps: [
      'Pat the halloumi dry, then toss in the cornflour and paprika.',
      'Spray with oil. Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 8 minutes, turning at halfway, until golden.',
      'Drizzle with honey and sprinkle with chilli flakes. Eat hot!'
    ]
  },
  {
    id: 'sesame-tofu', name: 'Crispy Sweet Chilli Tofu', emoji: '🥢', cat: 'veggie',
    temp: 200, time: 15, prep: 20, serves: 2, turn: 'shake',
    tags: ['vegan', 'asian', 'high-protein', 'fakeaway'],
    ing: [['400g block', 'tofu', 'extra firm'], ['1 tbsp', 'soy sauce'], ['1 tbsp', 'cornflour'], ['1 tsp', 'sesame oil'], ['3 tbsp', 'sweet chilli sauce'], ['1 tsp', 'sesame seeds'], ['2', '?spring onions', 'sliced']],
    steps: [
      'Press the tofu for 15 minutes (wrap in a tea towel with something heavy on top), then cut into 2cm cubes.',
      'Toss with the soy sauce and sesame oil, then with the cornflour.',
      'Preheat the air fryer to 200°C for 3 minutes.',
      'Cook for 15 minutes, shaking every 5 minutes, until crisp.',
      'Toss in the sweet chilli sauce and scatter with sesame seeds and spring onions. Serve with rice.'
    ]
  },
  {
    id: 'falafel', name: 'Easy Falafel', emoji: '🧆', cat: 'veggie',
    temp: 190, time: 14, prep: 25, serves: 4, turn: 'flip',
    tags: ['vegan', 'middle eastern', 'budget'],
    ing: [['400g tin', 'chickpeas', 'drained and patted dry'], ['1 small', 'onion', 'roughly chopped'], ['2 cloves', 'garlic'], ['small bunch', '?parsley'], ['1 tsp', 'cumin'], ['1 tsp', 'ground coriander'], ['2 tbsp', 'plain flour'], ['½ tsp', '?baking powder'], ['½ tsp', 'salt'], ['spray', 'oil'], ['4', 'pitta bread'], ['4 tbsp', '?hummus']],
    steps: [
      'Blitz the chickpeas, onion, garlic, parsley, spices and salt in a food processor until finely chopped but not smooth (or mash well with a fork).',
      'Stir in the flour and baking powder. Shape into 16 small patties and chill for 15 minutes.',
      'Spray with oil. Preheat the air fryer to 190°C for 3 minutes.',
      'Cook for 14 minutes, turning at halfway, until golden and crisp.',
      'Stuff into warm pittas with hummus and salad.'
    ]
  },
  {
    id: 'stuffed-peppers', name: 'Cheesy Stuffed Peppers', emoji: '🫑', cat: 'veggie',
    temp: 180, time: 15, prep: 10, serves: 2, turn: 'none',
    tags: ['vegetarian', 'gluten-free', 'leftovers'],
    ing: [['2', 'bell peppers', 'halved and deseeded'], ['250g pouch', 'rice', 'cooked'], ['100g', '?sweetcorn'], ['6', 'cherry tomatoes', 'quartered'], ['1 tsp', 'paprika'], ['60g', 'cheddar', 'grated'], ['1 tsp', '?mixed herbs'], ['¼ tsp', 'salt']],
    steps: [
      'Preheat the air fryer to 180°C. Cook the empty pepper halves for 5 minutes to soften.',
      'Meanwhile mix the rice, sweetcorn, tomatoes, paprika, herbs, salt and half the cheese.',
      'Fill the peppers and top with the rest of the cheese.',
      'Cook for 10 more minutes until the cheese is golden and bubbling.'
    ]
  },
  {
    id: 'buffalo-cauliflower', name: 'Buffalo Cauliflower Bites', emoji: '🥦', cat: 'veggie',
    temp: 200, time: 15, prep: 10, serves: 2, turn: 'shake',
    tags: ['trending', 'vegetarian', 'spicy', 'party', 'fakeaway'],
    ing: [['1 head', 'cauliflower', 'cut into florets'], ['60g', 'plain flour'], ['80ml', 'milk'], ['1 tsp', 'garlic granules'], ['1 tsp', 'paprika'], ['½ tsp', 'salt'], ['3 tbsp', 'hot sauce'], ['20g', 'butter'], ['spray', 'oil'], ['4 tbsp', '?greek yoghurt', 'for dipping']],
    steps: [
      'Whisk the flour, milk, garlic granules, paprika and salt into a thick batter.',
      'Coat the florets, let the excess drip off, then spray with oil.',
      'Preheat the air fryer to 200°C. Cook for 12 minutes, shaking at halfway.',
      'Melt the butter with the hot sauce (20 seconds in the microwave). Toss the cauliflower in it.',
      'Return to the air fryer for 3 minutes. Serve with yoghurt for dipping.'
    ]
  },
  {
    id: 'veggie-frittata', name: 'Mediterranean Frittata', emoji: '🍳', cat: 'veggie',
    temp: 160, time: 12, prep: 10, serves: 2, turn: 'none',
    tags: ['vegetarian', 'brunch', 'gluten-free', 'low-carb'],
    ing: [['5', 'eggs'], ['½', 'courgette', 'diced'], ['½', 'bell peppers', 'diced'], ['6', 'cherry tomatoes', 'halved'], ['50g', 'feta', 'crumbled'], ['1 tsp', 'oregano'], ['handful', '?spinach'], ['1 tsp', 'oil'], ['¼ tsp', 'salt']],
    steps: [
      'Grease a small cake tin or ovenproof dish that fits in your basket.',
      'Add the courgette and pepper with the oil and cook at 180°C for 5 minutes to soften.',
      'Whisk the eggs with the oregano and salt. Pour over the veg, then add the spinach, tomatoes and feta.',
      'Turn the air fryer down to 160°C and cook for 10–12 minutes until just set in the middle.',
      'Leave for 2 minutes, then slice into wedges.'
    ]
  },

  // ───────────── SIDES ─────────────
  {
    id: 'chunky-chips', name: 'Proper Chunky Chips', emoji: '🍟', cat: 'sides',
    temp: 200, time: 25, prep: 25, serves: 2, turn: 'shake',
    tags: ['vegan', 'classic', 'fish & chips', 'gluten-free'],
    ing: [['3 large (700g)', 'potatoes', 'Maris Piper or King Edward'], ['1 tbsp', 'oil'], ['1 tsp', 'salt']],
    steps: [
      'Cut the potatoes into 1.5cm chips (peel or leave the skins on).',
      'Soak in cold water for 20–30 minutes – this removes starch and makes them crispier.',
      'Drain and dry really well with a tea towel, then toss with the oil.',
      'Preheat the air fryer to 200°C. Cook for 22–25 minutes, shaking every 5–8 minutes (at least at halfway).',
      'Salt as soon as they come out.'
    ]
  },
  {
    id: 'roast-potatoes', name: 'Crispy Roast Potatoes', emoji: '🥔', cat: 'sides',
    temp: 200, time: 25, prep: 15, serves: 4, turn: 'shake',
    tags: ['sunday roast', 'vegan', 'gluten-free'],
    ing: [['800g', 'potatoes', 'peeled, cut into chunks'], ['1 tbsp', 'oil'], ['1 tsp', 'salt'], ['2 sprigs', 'rosemary'], ['4 cloves', '?garlic', 'skin on, bashed']],
    steps: [
      'Parboil the potatoes in salted water for 8 minutes.',
      'Drain and let them steam-dry for 5 minutes, then shake in the colander to rough up the edges.',
      'Toss with the oil, salt and rosemary.',
      'Preheat the air fryer to 200°C. Cook for 25 minutes, shaking at halfway, adding the garlic for the last 10 minutes.'
    ]
  },
  {
    id: 'sweet-potato-fries', name: 'Sweet Potato Fries', emoji: '🍠', cat: 'sides',
    temp: 200, time: 16, prep: 10, serves: 2, turn: 'shake',
    tags: ['vegan', 'gluten-free', 'healthy'],
    ing: [['2', 'sweet potatoes'], ['1 tbsp', 'cornflour'], ['1 tbsp', 'oil'], ['1 tsp', 'paprika', 'smoked'], ['½ tsp', '?garlic granules'], ['½ tsp', 'salt']],
    steps: [
      'Cut the sweet potatoes into thin 1cm fries.',
      'Toss in the cornflour first, then the oil, paprika and garlic granules.',
      'Spread in a single layer (cook in batches if needed – crowded fries go soggy).',
      'Cook at 200°C for 14–16 minutes, shaking at halfway. Salt and serve.'
    ]
  },
  {
    id: 'parmesan-broccoli', name: 'Parmesan Broccoli', emoji: '🥦', cat: 'sides',
    temp: 190, time: 8, prep: 5, serves: 2, turn: 'shake',
    tags: ['vegetarian', 'quick', 'healthy', 'gluten-free'],
    ing: [['1 head', 'broccoli', 'cut into florets'], ['1 tbsp', 'oil'], ['1 clove', 'garlic', 'crushed'], ['20g', 'parmesan', 'grated'], ['¼ tsp', 'salt'], ['½', '?lemon']],
    steps: [
      'Toss the florets with the oil, garlic and salt.',
      'Cook at 190°C for 6 minutes, shaking at halfway.',
      'Sprinkle with the parmesan and cook for 2 more minutes.',
      'Squeeze over a little lemon and serve.'
    ]
  },
  {
    id: 'honey-carrots-parsnips', name: 'Honey Roast Carrots & Parsnips', emoji: '🥕', cat: 'sides',
    temp: 190, time: 18, prep: 10, serves: 4, turn: 'shake',
    tags: ['sunday roast', 'christmas', 'vegetarian', 'gluten-free'],
    ing: [['3', 'carrots'], ['3', 'parsnips'], ['1 tbsp', 'oil'], ['1 tbsp', 'honey'], ['1 tsp', 'thyme'], ['½ tsp', 'salt']],
    steps: [
      'Peel and cut the carrots and parsnips into similar-sized batons.',
      'Toss with the oil, thyme and salt.',
      'Cook at 190°C for 15 minutes, shaking at halfway.',
      'Drizzle with honey, toss and cook for 3 more minutes until sticky.'
    ]
  },
  {
    id: 'corn-on-the-cob', name: 'Smoky Butter Corn on the Cob', emoji: '🌽', cat: 'sides',
    temp: 200, time: 12, prep: 5, serves: 4, turn: 'flip',
    tags: ['bbq', 'summer', 'vegetarian', 'gluten-free'],
    ing: [['4', 'corn on the cob'], ['30g', 'butter', 'softened'], ['½ tsp', 'paprika', 'smoked'], ['1 clove', '?garlic', 'crushed'], ['1 tsp', 'oil'], ['½ tsp', 'salt'], ['1', '?lime']],
    steps: [
      'Halve the cobs if they don\'t fit. Brush with oil and season with salt.',
      'Cook at 200°C for 12 minutes, turning at halfway, until charred in spots.',
      'Mix the butter, paprika and garlic.',
      'Slather the butter over the hot corn and finish with a squeeze of lime.'
    ]
  },
  {
    id: 'garlic-mushrooms', name: 'Garlic Butter Mushrooms', emoji: '🍄', cat: 'sides',
    temp: 190, time: 8, prep: 5, serves: 2, turn: 'shake',
    tags: ['vegetarian', 'quick', 'breakfast', 'gluten-free'],
    ing: [['250g', 'mushrooms', 'chestnut, halved'], ['20g', 'butter', 'melted'], ['2 cloves', 'garlic', 'crushed'], ['1 tsp', '?thyme'], ['¼ tsp', 'salt'], ['small handful', '?parsley', 'chopped']],
    steps: [
      'Toss the mushrooms with the melted butter, garlic, thyme and salt.',
      'Cook at 190°C for 8 minutes, shaking at halfway.',
      'Scatter with parsley. Great on toast or with steak.'
    ]
  },

  // ───────────── SNACKS ─────────────
  {
    id: 'pigs-in-blankets', name: 'Pigs in Blankets', emoji: '🐷', cat: 'snacks',
    temp: 190, time: 12, prep: 10, serves: 4, turn: 'flip',
    tags: ['christmas', 'party', 'kids'],
    ing: [['12', 'cocktail sausages'], ['6 rashers', 'bacon', 'streaky, halved'], ['1 tbsp', '?honey'], ['1 tsp', '?mustard']],
    steps: [
      'Stretch each piece of bacon with the back of a knife, then wrap around a sausage.',
      'Place seam-side down in the basket.',
      'Cook at 190°C for 12 minutes, turning at halfway. Brush with honey mixed with mustard for the last 2 minutes.',
      'Check the sausages have reached 75°C in the middle.'
    ]
  },
  {
    id: 'mozzarella-sticks', name: 'Mozzarella Sticks', emoji: '🧀', cat: 'snacks',
    temp: 200, time: 6, prep: 45, serves: 4, turn: 'none',
    tags: ['vegetarian', 'party', 'kids', 'fakeaway'],
    ing: [['8 sticks', 'mozzarella', 'string cheese, or a firm block cut into sticks'], ['40g', 'plain flour'], ['2', 'eggs', 'beaten'], ['80g', 'breadcrumbs'], ['1 tsp', 'mixed herbs'], ['spray', 'oil'], ['200g', '?passata', 'warmed, for dipping']],
    steps: [
      'Mix the breadcrumbs with the herbs.',
      'Dip each stick in flour, egg, crumbs, then egg and crumbs again (a double coat stops leaks).',
      'Freeze for at least 30 minutes – this is essential or they melt before they crisp.',
      'Spray with oil. Cook at 200°C for 5–6 minutes. Don\'t shake them – just keep an eye on them.',
      'Serve straight away with warm passata for dipping.'
    ]
  },
  {
    id: 'onion-rings', name: 'Crunchy Onion Rings', emoji: '🧅', cat: 'snacks',
    temp: 200, time: 10, prep: 15, serves: 3, turn: 'flip',
    tags: ['vegetarian', 'crispy', 'fakeaway'],
    ing: [['2 large', 'onion', 'cut into 1cm rings'], ['60g', 'plain flour'], ['2', 'eggs', 'beaten'], ['100g', 'breadcrumbs'], ['1 tsp', 'paprika'], ['½ tsp', 'garlic granules'], ['½ tsp', 'salt'], ['spray', 'oil']],
    steps: [
      'Separate the onion into rings (save the tiny middles for another dish).',
      'Season the breadcrumbs with paprika, garlic granules and salt.',
      'Dip each ring in flour, egg, then breadcrumbs. Spray with oil.',
      'Cook in a single layer at 200°C for 8–10 minutes, turning at halfway.'
    ]
  },
  {
    id: 'crispy-chickpeas', name: 'Smoky Crispy Chickpeas', emoji: '🫘', cat: 'snacks',
    temp: 200, time: 14, prep: 5, serves: 2, turn: 'shake',
    tags: ['trending', 'vegan', 'healthy', 'gluten-free', 'budget'],
    ing: [['400g tin', 'chickpeas'], ['1 tbsp', 'oil'], ['1 tsp', 'paprika', 'smoked'], ['½ tsp', 'cumin'], ['½ tsp', '?garlic granules'], ['½ tsp', 'salt']],
    steps: [
      'Drain, rinse and dry the chickpeas really well, rubbing off any loose skins.',
      'Cook at 200°C for 10 minutes, shaking at halfway.',
      'Toss with the oil, spices and salt and cook for 4 more minutes.',
      'Let them cool – they crisp up more as they cool.'
    ]
  },
  {
    id: 'cheesy-garlic-bread', name: 'Cheesy Garlic Bread', emoji: '🥖', cat: 'snacks',
    temp: 180, time: 6, prep: 5, serves: 4, turn: 'none',
    tags: ['vegetarian', 'quick', 'party', 'pasta'],
    ing: [['1', 'bread', 'small baguette or ciabatta'], ['50g', 'butter', 'softened'], ['2 cloves', 'garlic', 'crushed'], ['1 tsp', '?parsley', 'chopped'], ['60g', 'mozzarella', 'grated']],
    steps: [
      'Mix the butter, garlic and parsley.',
      'Cut the bread into thick slices without cutting all the way through (or halve lengthways) and spread with the garlic butter.',
      'Cook at 180°C for 4 minutes.',
      'Top with the mozzarella and cook for 2 more minutes until melted.'
    ]
  },
  {
    id: 'sausage-rolls', name: 'Mini Sausage Rolls', emoji: '🥐', cat: 'snacks',
    temp: 190, time: 15, prep: 15, serves: 4, turn: 'none',
    tags: ['party', 'picnic', 'kids', 'batch cook'],
    ing: [['320g sheet', 'puff pastry', 'ready-rolled'], ['400g', 'sausages', 'skins removed'], ['1', 'eggs', 'beaten'], ['1 tsp', '?mixed herbs'], ['1 tsp', '?sesame seeds']],
    steps: [
      'Cut the pastry in half lengthways. Mix the sausage meat with the herbs and roll into 2 long logs.',
      'Lay a log along each strip of pastry, brush the edge with egg, fold over and seal with a fork.',
      'Cut each into 6, brush with egg, sprinkle with sesame seeds and snip a small slit in the top.',
      'Cook at 190°C for 15 minutes (in batches) until golden and puffed.',
      'Check the filling has reached 75°C.'
    ]
  },

  // ───────────── DESSERTS ─────────────
  {
    id: 'baked-apples', name: 'Cinnamon Baked Apples', emoji: '🍎', cat: 'desserts',
    temp: 180, time: 15, prep: 10, serves: 2, turn: 'none',
    tags: ['autumn', 'comfort', 'vegetarian'],
    ing: [['2', 'apples', 'Bramley or Braeburn'], ['20g', 'butter', 'softened'], ['1 tbsp', 'brown sugar'], ['½ tsp', 'cinnamon'], ['30g', '?oats'], ['1 tbsp', '?raisins'], ['to serve', '?ice cream']],
    steps: [
      'Core the apples and score a line around the middle of each one (this stops them bursting).',
      'Mix the butter, sugar, cinnamon, oats and raisins and pack into the apples.',
      'Cook at 180°C for 15 minutes until soft right through.',
      'Serve warm with ice cream or custard.'
    ]
  },
  {
    id: 'fudgy-brownies', name: 'Fudgy Chocolate Brownies', emoji: '🍫', cat: 'desserts',
    temp: 160, time: 18, prep: 15, serves: 6, turn: 'none',
    tags: ['baking', 'chocolate', 'vegetarian'],
    ing: [['100g', 'butter'], ['100g', 'dark chocolate'], ['150g', 'sugar', 'caster'], ['2', 'eggs'], ['60g', 'plain flour'], ['20g', 'cocoa powder'], ['pinch', 'salt']],
    steps: [
      'Line a 15–18cm tin that fits in your basket with baking paper.',
      'Melt the butter and chocolate together in 30-second bursts in the microwave.',
      'Whisk the sugar and eggs until pale, then stir in the chocolate. Fold in the flour, cocoa and salt.',
      'Pour into the tin. Cook at 160°C for 16–20 minutes – there should still be a slight wobble in the middle.',
      'If the top browns too fast, cover with foil tucked in tightly so it can\'t blow into the element. Cool completely in the tin before cutting.'
    ]
  },
  {
    id: 'churros-twists', name: 'Cinnamon Sugar Churro Twists', emoji: '🥨', cat: 'desserts',
    temp: 190, time: 8, prep: 10, serves: 4, turn: 'flip',
    tags: ['quick', 'party', 'chocolate', 'vegetarian'],
    ing: [['320g sheet', 'puff pastry', 'ready-rolled'], ['40g', 'butter', 'melted'], ['60g', 'sugar'], ['1 tsp', 'cinnamon'], ['100g', '?dark chocolate', 'for dipping sauce'], ['100ml', '?cream']],
    steps: [
      'Cut the pastry into 1.5cm strips and twist each one a few times.',
      'Cook at 190°C for 8 minutes (in batches), turning at halfway, until puffed and golden.',
      'Brush with melted butter straight away, then roll in the sugar mixed with cinnamon.',
      'For the dip, heat the cream until steaming, pour over the chopped chocolate and stir until smooth.'
    ]
  },
  {
    id: 'banana-choc-parcels', name: 'Banana & Chocolate Parcels', emoji: '🍌', cat: 'desserts',
    temp: 190, time: 9, prep: 10, serves: 4, turn: 'none',
    tags: ['quick', 'kids', 'chocolate', 'vegetarian'],
    ing: [['320g sheet', 'puff pastry', 'ready-rolled'], ['2', 'bananas', 'sliced'], ['4 tbsp', 'chocolate spread'], ['1', 'eggs', 'beaten'], ['1 tsp', '?icing sugar']],
    steps: [
      'Cut the pastry into 8 squares.',
      'Spread chocolate spread on half of the squares, leaving a border, and top with banana.',
      'Brush the edges with egg, cover with the remaining squares and press closed with a fork. Brush the tops with egg.',
      'Cook at 190°C for 8–10 minutes until puffed and golden.',
      'Dust with icing sugar and serve warm (careful – the filling is very hot).'
    ]
  },
  {
    id: 'choc-chip-cookies', name: 'Chocolate Chip Cookies', emoji: '🍪', cat: 'desserts',
    temp: 170, time: 7, prep: 15, serves: 8, turn: 'none',
    tags: ['baking', 'kids', 'chocolate', 'vegetarian'],
    ing: [['60g', 'butter', 'softened'], ['50g', 'brown sugar'], ['25g', 'sugar'], ['1', 'eggs', 'yolk only'], ['½ tsp', '?vanilla extract'], ['100g', 'plain flour'], ['¼ tsp', 'baking powder'], ['75g', 'dark chocolate', 'chips or chopped'], ['pinch', 'salt']],
    steps: [
      'Beat the butter and both sugars until creamy, then beat in the egg yolk and vanilla.',
      'Mix in the flour, baking powder and salt, then fold in the chocolate. Roll into 8 balls.',
      'Line the basket with baking paper cut to fit. Never preheat with loose paper in – it can fly into the element.',
      'Cook 4 at a time, well spaced, at 170°C for 6–8 minutes. They will look underdone in the middle.',
      'Leave to cool on the paper for 10 minutes to firm up.'
    ]
  }
];
