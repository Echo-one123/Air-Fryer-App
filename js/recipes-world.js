'use strict';
/* World favourites (Mexican, Spanish, Italian, Greek, Middle Eastern, Caribbean, African, American, French, German, Portuguese) – same format as recipes.js. */
RECIPES.push(
  // ───────────── MEXICAN ─────────────
  { id: "world-elote-cups", name: "Mexican Street Corn (Elote) Cups", emoji: "🌽", cat: "sides", temp: 200, time: 14, prep: 10, serves: 4, turn: "flip",
    tags: ["mexican", "vegetarian", "quick", "bbq", "family"],
    ing: [["4", "corn on the cob"], ["3 tbsp", "mayonnaise"], ["60g", "feta", "crumbled (stands in for cotija)"], ["1", "lime"], ["½ tsp", "chilli powder"], ["½ tsp", "?paprika", "smoked"], ["1 handful", "?fresh coriander", "chopped"], ["spray", "oil"]],
    steps: [
      "Spray the cobs with oil and cook in a single layer at 200°C for 12–14 minutes, turning halfway, until charred in spots.",
      "Leave to cool for a few minutes, then stand each cob on a board and slice the kernels off.",
      "Mix the warm kernels with the mayonnaise, the juice of half the lime, the chilli powder and paprika.",
      "Spoon into cups or small bowls. Top with crumbled feta, coriander, an extra pinch of chilli and lime wedges."
    ] },
  { id: "world-carnitas-pork-tacos", name: "Carnitas-Style Pork Tacos", emoji: "🌮", cat: "pork", temp: 160, time: 80, prep: 15, serves: 4, turn: "none",
    tags: ["mexican", "fakeaway", "family", "trending", "meal prep"],
    ing: [["1kg", "pork shoulder", "boneless, cut into 5cm chunks"], ["1", "oranges", "juiced"], ["1", "lime", "juiced"], ["4 cloves", "garlic", "crushed"], ["2 tsp", "cumin"], ["1 tsp", "oregano"], ["1 tsp", "paprika"], ["1 tsp", "salt"], ["8", "tortilla wraps", "small, or mini taco wraps"], ["1", "red onion", "finely chopped"], ["1 handful", "?fresh coriander"], ["4 tbsp", "?salsa"]],
    steps: [
      "Toss the pork with the orange and lime juice, garlic, cumin, oregano, paprika and salt. Tip into a tin or dish that fits your basket.",
      "Cover tightly with foil, tucking it under the rim so it can't blow into the element. Cook at 160°C for 60 minutes until the pork is very tender (well above 71°C).",
      "Shred with 2 forks, remove the foil and turn up to 200°C. Cook for 15–20 minutes more, stirring once, until the edges crisp.",
      "Warm the tortillas for 1 minute in the air fryer. Fill with carnitas, red onion, coriander and salsa."
    ] },
  { id: "world-chicken-tostadas", name: "Mexican Chicken Tostadas", emoji: "🫓", cat: "chicken", temp: 190, time: 16, prep: 10, serves: 4, turn: "none",
    tags: ["mexican", "quick", "family", "high-protein"],
    ing: [["2", "chicken breast", "thinly sliced"], ["2 tsp", "fajita seasoning"], ["4", "tortilla wraps", "small"], ["400g", "black beans", "drained and lightly mashed"], ["60g", "cheddar", "grated"], ["1", "avocado", "sliced"], ["1", "lime"], ["2 tbsp", "?sour cream"], ["spray", "oil"]],
    steps: [
      "Toss the chicken with fajita seasoning and a spray of oil. Cook at 190°C for 10–12 minutes, shaking halfway, until it reaches 75°C inside.",
      "Spray the tortillas and cook one or two at a time for 3–4 minutes until crisp and flat. Weigh them down with a metal rack if they puff up.",
      "Spread each tostada with mashed beans, top with chicken and cheese and return for 2 minutes to melt.",
      "Finish with avocado, a squeeze of lime and a spoonful of sour cream."
    ] },

  // ───────────── SPANISH ─────────────
  { id: "world-patatas-bravas", name: "Patatas Bravas", emoji: "🥔", cat: "sides", temp: 200, time: 22, prep: 10, serves: 4, turn: "shake",
    tags: ["spanish", "vegetarian", "trending", "family", "budget"],
    ing: [["800g", "potatoes", "cut into 2–3cm cubes"], ["1 tbsp", "oil"], ["1 tsp", "paprika", "smoked"], ["200g", "passata"], ["2 cloves", "garlic", "crushed"], ["½ tsp", "chilli flakes"], ["1 tsp", "sugar"], ["3 tbsp", "mayonnaise"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Toss the potatoes with oil, half the paprika and salt. Cook at 200°C for 20–22 minutes in a single layer if possible, shaking every 7 minutes, until golden and crisp.",
      "Meanwhile, simmer the passata, half the garlic, chilli flakes, sugar and remaining paprika in a small pan for 8–10 minutes until thick.",
      "Stir the rest of the garlic into the mayonnaise for a quick aioli.",
      "Pile the potatoes onto a plate, spoon over the bravas sauce, drizzle with aioli and scatter with parsley."
    ] },
  { id: "world-chorizo-tortilla-bites", name: "Spanish Chorizo & Potato Tortilla Bites", emoji: "🍳", cat: "pork", temp: 160, time: 20, prep: 15, serves: 4, turn: "none",
    tags: ["spanish", "lunchbox", "meal prep", "breakfast"],
    ing: [["300g", "potatoes", "peeled and diced 1cm"], ["1", "onion", "finely sliced"], ["60g", "chorizo", "diced"], ["6", "eggs"], ["1 tbsp", "oil"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Toss the potato and onion in the oil with a pinch of salt. Air fry at 180°C for 12 minutes, shaking halfway, until soft. Stir in the chorizo for the last 3 minutes.",
      "Beat the eggs with salt, pepper and parsley, then stir in the potato, onion and chorizo.",
      "Divide between greased silicone muffin cups (about two-thirds full) and cook at 160°C for 18–20 minutes until set in the middle.",
      "Cool for 5 minutes before turning out. Serve warm, or chill for lunchboxes and eat within 3 days."
    ] },
  { id: "world-pinchos-morunos", name: "Spanish Pinchos Morunos (Pork Skewers)", emoji: "🍢", cat: "pork", temp: 200, time: 12, prep: 15, serves: 4, turn: "flip",
    tags: ["spanish", "bbq", "high-protein", "low-carb"],
    ing: [["600g", "pork fillet", "cut into 3cm cubes"], ["2 tsp", "paprika", "smoked"], ["1 tsp", "cumin"], ["1 tsp", "ground coriander"], ["½ tsp", "oregano"], ["2 cloves", "garlic", "crushed"], ["2 tbsp", "oil"], ["1", "lemon"], ["1 tbsp", "?parsley"]],
    steps: [
      "Mix the spices, oregano, garlic, oil, a squeeze of lemon and salt. Toss through the pork and marinate for at least 30 minutes (or overnight in the fridge).",
      "Thread onto skewers that fit your basket (soak wooden ones first).",
      "Cook at 200°C for 10–12 minutes in a single layer, turning halfway, until the pork reaches 71°C inside.",
      "Rest for 2 minutes, then serve with lemon wedges and parsley."
    ] },

  // ───────────── ITALIAN ─────────────
  { id: "world-chicken-cacciatore", name: "Chicken Cacciatore", emoji: "🍅", cat: "chicken", temp: 180, time: 35, prep: 15, serves: 4, turn: "none",
    tags: ["italian", "family", "healthy", "low-carb", "high-protein"],
    ing: [["8", "chicken thighs", "bone-in, skin-on"], ["1", "onion", "sliced"], ["1", "bell peppers", "sliced"], ["150g", "mushrooms", "sliced"], ["3 cloves", "garlic", "sliced"], ["400g", "passata"], ["50g", "olives", "black"], ["1 tsp", "rosemary"], ["1 tsp", "oregano"], ["1 tbsp", "?balsamic vinegar"]],
    steps: [
      "Season the thighs and cook skin-side up at 200°C for 10 minutes to start crisping the skin.",
      "Meanwhile, mix the onion, pepper, mushrooms, garlic, passata, olives, herbs and balsamic in a dish that fits your basket.",
      "Nestle the chicken on top, skin-side up, and cook at 180°C for 25 minutes until the sauce is bubbling and the chicken reaches 75°C at the bone.",
      "Serve with crusty bread, pasta or mash."
    ] },
  { id: "world-porchetta-pork-belly", name: "Porchetta-Style Pork Belly", emoji: "🐖", cat: "pork", temp: 160, time: 80, prep: 20, serves: 6, turn: "none",
    tags: ["italian", "sunday roast", "family", "low-carb"],
    ing: [["1.2kg", "pork belly", "boneless slab, skin scored – check it fits rolled up"], ["4 cloves", "garlic", "crushed"], ["1 tbsp", "rosemary", "chopped"], ["1 tsp", "?fennel", "or fennel seeds, finely chopped"], ["1", "lemon", "zested"], ["½ tsp", "chilli flakes"], ["2 tsp", "salt"]],
    steps: [
      "Pat the skin very dry. Rub the flesh side with garlic, rosemary, fennel, lemon zest, chilli and half the salt.",
      "Roll up tightly, skin outside, and tie with string every 3cm. Rub the remaining salt into the skin. Uncovered in the fridge overnight gives the best crackling.",
      "Cook at 160°C for 60 minutes, then turn up to 200°C for 15–20 minutes until the skin is puffed and crackled.",
      "Check the centre reaches at least 71°C, then rest for 15 minutes before slicing thickly."
    ] },
  { id: "world-italian-sausage-fennel", name: "Italian Sausage & Fennel Traybake", emoji: "🌭", cat: "pork", temp: 190, time: 25, prep: 10, serves: 4, turn: "shake",
    tags: ["italian", "family", "budget", "meal prep"],
    ing: [["8", "sausages", "good-quality pork"], ["1", "fennel", "cut into wedges"], ["1", "red onion", "cut into wedges"], ["200g", "cherry tomatoes"], ["2 cloves", "garlic", "sliced"], ["½ tsp", "chilli flakes"], ["1 tsp", "oregano"], ["1 tbsp", "oil"], ["1 tbsp", "?balsamic vinegar"]],
    steps: [
      "Toss the fennel and onion in the oil, oregano, chilli and salt. Cook at 190°C for 8 minutes.",
      "Add the sausages, tomatoes and garlic. Cook for 15–17 minutes more, shaking halfway, until the sausages are browned and reach 75°C inside.",
      "Drizzle with balsamic and serve with crusty bread, polenta or pasta."
    ] },

  // ───────────── GREEK ─────────────
  { id: "world-saganaki-halloumi", name: "Greek Saganaki-Style Halloumi", emoji: "🧀", cat: "veggie", temp: 200, time: 8, prep: 5, serves: 2, turn: "flip",
    tags: ["greek", "vegetarian", "quick", "low-carb"],
    ing: [["225g", "halloumi", "cut into 1cm slabs"], ["1 tbsp", "plain flour"], ["1 tsp", "oregano"], ["1", "lemon"], ["1 tsp", "?honey"], ["spray", "oil"]],
    steps: [
      "Pat the halloumi dry and dust lightly with flour mixed with half the oregano. Spray with oil.",
      "Cook in a single layer on pierced baking paper at 200°C for 7–8 minutes, flipping halfway, until golden.",
      "Squeeze over plenty of lemon, sprinkle with the remaining oregano and a drizzle of honey. Eat straight away while soft."
    ] },
  { id: "world-beef-bifteki", name: "Greek Feta-Stuffed Beef Bifteki", emoji: "🍔", cat: "beef", temp: 190, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["greek", "family", "high-protein", "low-carb"],
    ing: [["500g", "beef mince"], ["1", "onion", "grated, squeezed dry"], ["2 cloves", "garlic", "crushed"], ["30g", "breadcrumbs"], ["2 tsp", "oregano"], ["1 tbsp", "?parsley", "chopped"], ["100g", "feta", "cut into 4 slabs"], ["150g", "greek yoghurt"], ["1", "cucumber", "grated, for tzatziki"], ["1", "lemon"]],
    steps: [
      "Mix the mince, onion, garlic, breadcrumbs, oregano, parsley and salt. Divide into 8 and flatten into thin patties.",
      "Lay a slab of feta on 4 of them, top with the rest and pinch the edges together firmly to seal into 4 oval bifteki.",
      "Cook in a single layer at 190°C for 12–14 minutes, flipping halfway, until browned and 75°C in the meat.",
      "Squeeze the cucumber dry and mix with the yoghurt, a squeeze of lemon and salt. Serve the bifteki with tzatziki, pitta and salad."
    ] },
  { id: "world-gemista", name: "Greek Stuffed Tomatoes (Gemista)", emoji: "🍅", cat: "veggie", temp: 180, time: 25, prep: 20, serves: 4, turn: "none",
    tags: ["greek", "vegetarian", "healthy", "budget"],
    ing: [["4", "tomatoes", "large beef tomatoes"], ["2", "bell peppers", "halved and deseeded"], ["250g", "rice", "cooked (a pouch works)"], ["1", "onion", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "oregano"], ["1 tbsp", "?parsley"], ["60g", "feta", "crumbled"], ["1 tbsp", "oil"]],
    steps: [
      "Slice the tops off the tomatoes and scoop out the insides. Chop the tomato pulp.",
      "Mix the pulp with the rice, onion, garlic, oregano, parsley, half the feta, oil and salt.",
      "Fill the tomatoes and peppers, put the tomato lids on and sit them in a dish that fits the basket.",
      "Cook at 180°C for 22–25 minutes until the peppers are soft. Top with the rest of the feta for the last 3 minutes."
    ] },

  // ───────────── TURKISH & MIDDLE EASTERN ─────────────
  { id: "world-adana-kebab", name: "Turkish Adana Kebab", emoji: "🍢", cat: "lamb", temp: 200, time: 12, prep: 15, serves: 4, turn: "flip",
    tags: ["turkish", "fakeaway", "high-protein", "bbq"],
    ing: [["500g", "lamb mince", "20% fat is ideal"], ["1", "red onion", "very finely grated, squeezed dry"], ["1", "bell peppers", "red, very finely chopped"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "chilli flakes", "Turkish pul biber if you have it"], ["1 tsp", "paprika"], ["1 tsp", "cumin"], ["4", "pitta bread", "or flatbreads"], ["1", "lemon"], ["1 handful", "?parsley"]],
    steps: [
      "Knead the lamb with onion, pepper, garlic, spices and salt for 3–4 minutes until sticky. Chill for 30 minutes.",
      "With wet hands, mould into 4 long flat sausages around flat skewers (or without skewers) to fit your basket.",
      "Cook at 200°C for 10–12 minutes, turning halfway, until charred at the edges and 75°C inside.",
      "Warm the pitta for 1 minute. Serve the kebabs on top with red onion, parsley and lemon."
    ] },
  { id: "world-lebanese-kafta", name: "Lebanese Beef Kafta", emoji: "🥙", cat: "beef", temp: 200, time: 11, prep: 15, serves: 4, turn: "flip",
    tags: ["middle eastern", "high-protein", "low-carb", "meal prep"],
    ing: [["500g", "beef mince"], ["1", "onion", "grated, squeezed dry"], ["1 handful", "parsley", "finely chopped"], ["1 tsp", "cumin"], ["1 tsp", "cinnamon", "just ½ tsp if you prefer"], ["1 tsp", "paprika"], ["½ tsp", "nutmeg"], ["4 tbsp", "hummus"], ["4", "pitta bread"]],
    steps: [
      "Mix the beef, onion, parsley, spices and salt until well combined.",
      "Shape into 8 finger-shaped kafta (or around skewers that fit your basket).",
      "Cook at 200°C in a single layer for 10–11 minutes, turning halfway, until 75°C inside.",
      "Serve in warm pitta with hummus, tomato and onion."
    ] },
  { id: "world-lamb-arayes", name: "Lamb Arayes (Stuffed Pittas)", emoji: "🫓", cat: "lamb", temp: 190, time: 12, prep: 10, serves: 4, turn: "flip",
    tags: ["middle eastern", "trending", "fakeaway", "quick"],
    ing: [["400g", "lamb mince"], ["1", "onion", "grated, squeezed dry"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["½ tsp", "cinnamon"], ["1 handful", "parsley", "chopped"], ["4", "pitta bread", "halved into pockets"], ["4 tbsp", "greek yoghurt"], ["1 tsp", "?zaatar"], ["spray", "oil"]],
    steps: [
      "Mix the lamb, onion, garlic, spices, parsley and salt.",
      "Spread a thin even layer of the mixture inside each pitta pocket, pressing right to the edges. Spray the outside with oil.",
      "Cook at 190°C for 10–12 minutes, flipping halfway, until the pitta is crisp and the meat reaches 75°C.",
      "Cut into triangles and serve with yoghurt sprinkled with za'atar."
    ] },
  { id: "world-zaatar-flatbread-bites", name: "Za'atar Flatbread Bites", emoji: "🫓", cat: "snacks", temp: 180, time: 6, prep: 5, serves: 4, turn: "shake",
    tags: ["middle eastern", "vegetarian", "vegan", "quick", "budget"],
    ing: [["4", "pitta bread"], ["2 tbsp", "oil", "olive oil"], ["2 tbsp", "zaatar"], ["1 tsp", "?sesame seeds"], ["4 tbsp", "?hummus"]],
    steps: [
      "Mix the oil, za'atar, sesame seeds and a pinch of salt. Brush over both sides of the pittas.",
      "Cut into bite-sized triangles and cook at 180°C for 5–6 minutes in a single layer, shaking halfway, until crisp.",
      "Cool for a minute (they crisp more) and serve with hummus."
    ] },

  // ───────────── MOROCCAN ─────────────
  { id: "world-moroccan-chicken-couscous", name: "Moroccan Chicken & Couscous", emoji: "🍲", cat: "chicken", temp: 190, time: 22, prep: 10, serves: 4, turn: "flip",
    tags: ["moroccan", "healthy", "meal prep", "high-protein", "family"],
    ing: [["6", "chicken thighs", "boneless, skinless"], ["2 tsp", "ras el hanout"], ["1 tbsp", "honey"], ["1", "lemon"], ["1", "red onion", "wedges"], ["1", "courgette", "chunks"], ["250g", "couscous"], ["1", "stock cube", "chicken or veg"], ["40g", "?raisins"], ["400g", "chickpeas", "drained"], ["1 handful", "?fresh coriander"], ["1 tbsp", "oil"]],
    steps: [
      "Toss the chicken with ras el hanout, honey, half the lemon juice, oil and salt. Toss the onion and courgette with a little oil.",
      "Cook the chicken and veg at 190°C for 20–22 minutes, turning halfway, until the chicken reaches 75°C inside. Add the chickpeas for the last 5 minutes.",
      "Meanwhile, pour 300ml boiling stock over the couscous and raisins, cover and leave for 5 minutes, then fluff with a fork.",
      "Stir the veg and chickpeas through the couscous, slice the chicken on top and finish with lemon and coriander."
    ] },
  { id: "world-moroccan-lamb-cigars", name: "Moroccan Lamb Cigars", emoji: "🥖", cat: "lamb", temp: 180, time: 12, prep: 25, serves: 4, turn: "flip",
    tags: ["moroccan", "fakeaway", "family", "christmas"],
    ing: [["400g", "lamb mince"], ["1", "onion", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["2 tsp", "ras el hanout"], ["1 tbsp", "tomato puree"], ["1 handful", "?fresh coriander", "chopped"], ["6 sheets", "filo pastry", "cut in half"], ["40g", "butter", "melted"], ["1 tsp", "?sesame seeds"], ["4 tbsp", "?greek yoghurt"]],
    steps: [
      "Fry the lamb and onion in a pan for 8–10 minutes until browned and cooked through. Stir in garlic, ras el hanout, tomato puree and coriander. Cool.",
      "Brush a half sheet of filo with butter, spoon a line of filling along one short edge, fold in the sides and roll up tightly into a cigar. Repeat to make 12.",
      "Brush with butter, sprinkle with sesame and cook in a single layer at 180°C for 10–12 minutes, turning halfway, until golden and the filling is piping hot (75°C).",
      "Serve with yoghurt mixed with a little lemon."
    ] },

  // ───────────── CARIBBEAN ─────────────
  { id: "world-jamaican-beef-patties", name: "Jamaican Beef Patties", emoji: "🥟", cat: "beef", temp: 180, time: 18, prep: 30, serves: 6, turn: "flip",
    tags: ["caribbean", "trending", "fakeaway", "lunchbox", "family"],
    ing: [["400g", "beef mince"], ["1", "onion", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["2 tsp", "curry powder"], ["1 tsp", "thyme"], ["1 tsp", "?jerk seasoning"], ["1 tbsp", "hot sauce", "Scotch bonnet if you can"], ["40g", "breadcrumbs"], ["1", "stock cube", "beef"], ["640g", "shortcrust pastry", "2 ready-rolled sheets"], ["1 tsp", "turmeric"], ["1", "eggs", "beaten"]],
    steps: [
      "Brown the mince and onion in a pan for 8 minutes. Add garlic, curry powder, thyme, jerk seasoning and hot sauce, then crumble in the stock cube with 150ml water and the breadcrumbs. Simmer 5 minutes until thick. Cool.",
      "Rub the turmeric into the pastry so it turns golden. Cut into 6 circles about 15cm across (use a saucer).",
      "Spoon filling onto one half, fold over and crimp with a fork. Brush with egg.",
      "Cook in batches on pierced baking paper at 180°C for 16–18 minutes, flipping halfway, until golden and piping hot (75°C) in the middle."
    ] },
  { id: "world-jamaican-jerk-pork", name: "Jamaican Jerk Pork", emoji: "🔥", cat: "pork", temp: 190, time: 16, prep: 10, serves: 4, turn: "flip",
    tags: ["caribbean", "bbq", "high-protein", "fakeaway"],
    ing: [["4", "pork chops", "or pork shoulder steaks"], ["2 tbsp", "jerk seasoning"], ["1 tbsp", "brown sugar"], ["1", "lime", "juiced"], ["3", "spring onions", "chopped"], ["1 tbsp", "soy sauce"], ["1 tbsp", "oil"], ["1", "?pineapple", "slices, to serve"]],
    steps: [
      "Blitz or mix the jerk seasoning, sugar, lime juice, spring onions, soy and oil. Rub all over the pork and marinate for at least 1 hour (overnight is best).",
      "Cook in a single layer at 190°C for 14–16 minutes, flipping halfway, until charred and the pork reaches 71°C in the thickest part.",
      "Rest for 3 minutes. Serve with rice and peas, and pineapple slices air fried for 6 minutes alongside."
    ] },
  { id: "world-saltfish-fritters", name: "Caribbean Saltfish-Style Fritters", emoji: "🐟", cat: "fish", temp: 190, time: 10, prep: 15, serves: 4, turn: "flip",
    tags: ["caribbean", "lunchbox", "family", "budget"],
    ing: [["300g", "white fish fillets", "skinless, finely chopped (or soaked salt cod)"], ["150g", "plain flour"], ["1 tsp", "baking powder"], ["1", "eggs"], ["100ml", "milk"], ["3", "spring onions", "chopped"], ["1", "bell peppers", "finely chopped"], ["1 tsp", "thyme"], ["1 tsp", "hot sauce"], ["spray", "oil"]],
    steps: [
      "Whisk the flour, baking powder, egg, milk and a good pinch of salt into a thick batter. Fold in the fish, spring onion, pepper, thyme and hot sauce.",
      "Line the basket with pierced baking paper and spray it. Drop on heaped tablespoons of batter, flattening slightly, in a single layer – don't overcrowd.",
      "Spray the tops and cook at 190°C for 9–10 minutes, flipping halfway, until golden and the fish reaches 63°C inside.",
      "Serve hot with hot sauce or a squeeze of lime."
    ] },

  // ───────────── AFRICAN ─────────────
  { id: "world-fried-plantain-dodo", name: "Fried Plantain (Dodo)", emoji: "🍌", cat: "sides", temp: 200, time: 12, prep: 5, serves: 4, turn: "flip",
    tags: ["african", "vegan", "vegetarian", "quick", "budget"],
    ing: [["3", "plantain", "very ripe – yellow with lots of black spots"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["pinch", "?chilli powder"]],
    steps: [
      "Peel the plantain and slice on the diagonal about 1cm thick.",
      "Toss with oil, salt and chilli.",
      "Cook at 200°C in a single layer (don't overcrowd) for 10–12 minutes, flipping halfway, until caramelised and golden at the edges."
    ] },
  { id: "world-suya-beef-skewers", name: "Nigerian Suya Beef Skewers", emoji: "🍢", cat: "beef", temp: 200, time: 10, prep: 15, serves: 4, turn: "flip",
    tags: ["african", "bbq", "high-protein", "low-carb", "trending"],
    ing: [["600g", "beef steak", "rump or sirloin, thinly sliced"], ["60g", "mixed nuts", "unsalted peanuts if you have them, finely ground"], ["2 tsp", "paprika"], ["1 tsp", "ginger", "ground"], ["1 tsp", "garlic granules"], ["1 tsp", "onion granules"], ["½–1 tsp", "chilli powder"], ["1 stock cube", "stock cube", "beef, crumbled"], ["1 tbsp", "oil"], ["1", "red onion", "thinly sliced, to serve"], ["1", "tomatoes", "sliced, to serve"]],
    steps: [
      "Mix the ground nuts, spices and crumbled stock cube to make the suya spice (yaji). Set aside 2 tbsp for serving.",
      "Toss the beef with the oil, then the spice, pressing it on. Thread in folds onto skewers that fit your basket.",
      "Cook in a single layer at 200°C for 8–10 minutes, turning halfway – 57°C inside for medium-rare, 63°C medium, 71°C well done.",
      "Sprinkle with the reserved spice and serve with red onion and tomato. (Contains nuts.)"
    ] },

  // ───────────── PORTUGUESE ─────────────
  { id: "world-piri-piri-prawns", name: "Portuguese Piri-Piri Prawns", emoji: "🦐", cat: "fish", temp: 200, time: 7, prep: 10, serves: 2, turn: "shake",
    tags: ["portuguese", "quick", "healthy", "low-carb", "high-protein"],
    ing: [["300g", "prawns", "raw, peeled king prawns"], ["2 tbsp", "peri peri sauce"], ["2 cloves", "garlic", "crushed"], ["1", "lemon"], ["1 tsp", "paprika"], ["15g", "butter", "melted"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Toss the prawns with the peri-peri sauce, garlic, paprika, melted butter and the zest of the lemon.",
      "Cook in a single layer at 200°C for 6–7 minutes, shaking halfway, until pink all the way through and 63°C inside.",
      "Squeeze over lemon juice, scatter with parsley and serve with crusty bread for the juices."
    ] },
  { id: "world-bifana-pork-rolls", name: "Portuguese Bifana Pork Rolls", emoji: "🥖", cat: "pork", temp: 200, time: 8, prep: 10, serves: 4, turn: "flip",
    tags: ["portuguese", "fakeaway", "quick", "family"],
    ing: [["500g", "pork fillet", "sliced and bashed thin"], ["4 cloves", "garlic", "crushed"], ["2 tsp", "paprika"], ["1 tbsp", "malt vinegar", "or white wine vinegar"], ["1 tbsp", "oil"], ["4", "burger buns", "or crusty rolls"], ["2 tbsp", "mustard", "yellow"], ["1 tsp", "?peri peri sauce"]],
    steps: [
      "Marinate the pork in garlic, paprika, vinegar, oil and salt for at least 30 minutes.",
      "Cook in a single layer at 200°C for 6–8 minutes, flipping halfway, until 71°C inside.",
      "Pour the drawer juices back over the pork, then pile into warm rolls with mustard and a dash of peri-peri."
    ] },

  // ───────────── AMERICAN ─────────────
  { id: "world-hush-puppies", name: "Southern Hush Puppies", emoji: "🌽", cat: "sides", temp: 190, time: 10, prep: 10, serves: 4, turn: "shake",
    tags: ["american", "vegetarian", "family", "bbq", "kids"],
    ing: [["150g", "polenta", "fine cornmeal"], ["75g", "self-raising flour"], ["1 tsp", "sugar"], ["½ tsp", "garlic granules"], ["1", "eggs"], ["150ml", "milk"], ["3", "spring onions", "finely chopped"], ["100g", "sweetcorn", "drained"], ["spray", "oil"]],
    steps: [
      "Mix the polenta, flour, sugar, garlic granules and a pinch of salt. Whisk in the egg and milk, then fold in the spring onions and sweetcorn. Rest for 10 minutes to thicken.",
      "Line the basket with pierced baking paper and spray it. Drop on tablespoons of batter, spaced apart in a single layer.",
      "Spray the tops and cook at 190°C for 9–10 minutes, shaking gently halfway, until golden and cooked through.",
      "Serve warm with hot sauce, BBQ sauce or honey butter."
    ] },
  { id: "world-buffalo-chicken-dip", name: "Buffalo Chicken Dip Bake", emoji: "🧀", cat: "chicken", temp: 180, time: 15, prep: 10, serves: 6, turn: "none",
    tags: ["american", "leftovers", "family", "low-carb"],
    ing: [["300g", "chicken breast", "cooked and shredded (great for leftovers)"], ["200g", "cream cheese"], ["4 tbsp", "hot sauce", "Frank's-style"], ["3 tbsp", "sour cream"], ["100g", "cheddar", "grated"], ["40g", "?blue cheese", "crumbled"], ["2", "spring onions", "sliced"], ["200g", "tortilla chips", "to serve"]],
    steps: [
      "Beat the cream cheese, hot sauce and sour cream until smooth, then stir in the chicken and half the cheddar.",
      "Spread into an ovenproof dish that fits your basket and top with the rest of the cheddar and the blue cheese.",
      "Cook at 180°C for 12–15 minutes until bubbling and piping hot (75°C) in the middle.",
      "Scatter with spring onions and serve with tortilla chips or celery sticks."
    ] },
  { id: "world-chicago-deep-dish-pizzas", name: "Chicago-Style Deep Dish Mini Pizzas", emoji: "🍕", cat: "snacks", temp: 180, time: 16, prep: 15, serves: 4, turn: "none",
    tags: ["american", "kids", "family", "fakeaway"],
    ing: [["400g", "pizza dough"], ["200g", "mozzarella", "grated low-moisture"], ["200g", "sausages", "skins removed, or pepperoni"], ["200g", "passata"], ["1 tsp", "oregano"], ["1 clove", "garlic", "crushed"], ["2 tbsp", "parmesan", "grated"], ["spray", "oil"]],
    steps: [
      "Fry the sausage meat in a pan for 6–8 minutes, breaking it up, until browned and cooked through (75°C). Simmer the passata with garlic and oregano for 5 minutes.",
      "Grease 4 small foil or ramekin tins that fit your basket. Press the dough into them and up the sides.",
      "Layer in this order: mozzarella, then sausage, then the tomato sauce on top. Sprinkle with parmesan.",
      "Cook at 180°C for 14–16 minutes until the crust is golden and the cheese is bubbling. Rest 5 minutes before turning out."
    ] },

  // ───────────── FRENCH ─────────────
  { id: "world-croque-madame", name: "Croque Madame", emoji: "🍳", cat: "pork", temp: 180, time: 12, prep: 10, serves: 2, turn: "none",
    tags: ["french", "breakfast", "family"],
    ing: [["4 slices", "bread"], ["4 slices", "ham"], ["80g", "cheddar", "grated, or Gruyère"], ["15g", "butter"], ["1 tbsp", "plain flour"], ["150ml", "milk"], ["1 tsp", "mustard", "Dijon"], ["pinch", "nutmeg"], ["2", "eggs"]],
    steps: [
      "Make a quick béchamel in a pan: melt butter, stir in flour for 1 minute, then whisk in milk until thick. Stir in half the cheese, the mustard and nutmeg.",
      "Make 2 ham sandwiches spread with a little sauce, then spoon the rest of the sauce on top and sprinkle with the remaining cheese.",
      "Cook on pierced baking paper at 180°C for 6–7 minutes until golden and bubbling.",
      "Crack the eggs into small greased ramekins and cook at 180°C for 5–6 minutes until the whites are set. Slide one onto each croque and serve."
    ] },
  { id: "world-tarte-flambee", name: "Tarte Flambée", emoji: "🥓", cat: "pork", temp: 200, time: 10, prep: 10, serves: 2, turn: "none",
    tags: ["french", "german", "quick", "fakeaway"],
    ing: [["250g", "pizza dough"], ["100g", "creme fraiche"], ["100g", "bacon", "lardons"], ["1", "onion", "very thinly sliced"], ["pinch", "nutmeg"], ["spray", "oil"]],
    steps: [
      "Roll the dough out very thinly into ovals that fit your basket.",
      "Season the crème fraîche with nutmeg, salt and pepper and spread thinly over the dough. Scatter with onion and lardons.",
      "Cook one at a time on pierced baking paper at 200°C for 8–10 minutes until the base is crisp and the bacon is cooked through and golden.",
      "Cut into squares and serve straight away."
    ] },
  { id: "world-chicken-provencal", name: "French Chicken Provençal", emoji: "🌿", cat: "chicken", temp: 190, time: 28, prep: 10, serves: 4, turn: "none",
    tags: ["french", "healthy", "low-carb", "family"],
    ing: [["8", "chicken thighs", "bone-in, skin-on"], ["2 tsp", "mixed herbs", "herbes de Provence"], ["250g", "cherry tomatoes"], ["1", "red onion", "wedges"], ["1", "courgette", "chunks"], ["60g", "olives"], ["4 cloves", "garlic", "whole, lightly crushed"], ["1", "lemon", "wedges"], ["1 tbsp", "oil"]],
    steps: [
      "Rub the chicken with oil, herbs, salt and pepper. Toss the veg, olives and garlic in a dish that fits your basket with a little oil and salt.",
      "Sit the chicken skin-side up on the veg and tuck in the lemon wedges.",
      "Cook at 190°C for 25–28 minutes until the skin is crisp and the chicken reaches 75°C at the bone.",
      "Squeeze the roasted garlic into the juices and serve with crusty bread."
    ] },

  // ───────────── GERMAN ─────────────
  { id: "world-currywurst", name: "Currywurst & Chips", emoji: "🌭", cat: "pork", temp: 200, time: 22, prep: 10, serves: 4, turn: "shake",
    tags: ["german", "fakeaway", "family", "kids"],
    ing: [["8", "sausages", "bratwurst if you can"], ["600g", "potatoes", "cut into chips"], ["150g", "tomato ketchup"], ["2 tsp", "curry powder", "plus extra to dust"], ["1 tsp", "paprika", "smoked"], ["1 tbsp", "worcestershire sauce"], ["1", "onion", "finely chopped"], ["1 tbsp", "oil"]],
    steps: [
      "Toss the chips in half the oil and salt. Cook at 200°C for 10 minutes, shake, then add the sausages and cook for 12 more minutes, shaking halfway, until the chips are crisp and the sausages reach 75°C.",
      "Meanwhile, soften the onion in the remaining oil in a small pan for 5 minutes. Add the curry powder and paprika for 1 minute, then stir in the ketchup, Worcestershire sauce and a splash of water. Simmer for 3 minutes.",
      "Slice the sausages into chunks, pour over the warm curry sauce and dust with a little extra curry powder. Serve with the chips."
    ] }
);
