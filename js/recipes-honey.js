'use strict';

/*
 * Honey roast recipes – same format as recipes.js (see the notes at the top of that file).
 * Loaded after recipes.js and simply added to the RECIPES list.
 * Honey burns quickly, so every glaze goes on in the last few minutes.
 */
RECIPES.push(
  // ───────────── PORK ─────────────
  {
    id: "honey-roast-ham", name: "Honey Roast Ham", emoji: "🍯", cat: "pork",
    temp: 180, time: 60, prep: 10, serves: 6, turn: "flip",
    tags: ["honey roast", "trending", "sunday roast", "christmas", "gluten-free"],
    ing: [["1kg", "gammon joint", "unsmoked, string left on"], ["3 tbsp", "honey"], ["1 tbsp", "mustard", "wholegrain or English"], ["1 tbsp", "brown sugar"], ["½ tsp", "?mixed spice", "or stud the fat with 12 whole cloves"]],
    steps: [
      "Soak the gammon in cold water for an hour if it's salty, then pat dry. Wrap in foil, leaving the top open.",
      "Cook at 180°C for 45 minutes, turning once halfway.",
      "Unwrap, score the fat into diamonds and stud with cloves if you have them. Mix the honey, mustard and sugar.",
      "Brush over the glaze and cook unwrapped for the last 12–15 minutes until sticky – watch it so the honey doesn't burn.",
      "Check the centre has reached 71°C, then rest for 15 minutes before slicing."
    ]
  },
  {
    id: "honey-pork-belly-slices", name: "Honey Roast Pork Belly Slices", emoji: "🥓", cat: "pork",
    temp: 200, time: 25, prep: 5, serves: 3, turn: "flip",
    tags: ["honey roast", "trending", "sticky", "crispy"],
    ing: [["600g", "pork belly", "sliced"], ["3 tbsp", "honey"], ["2 tbsp", "soy sauce"], ["2 cloves", "garlic", "crushed"], ["½ tsp", "five spice"], ["½ tsp", "salt"]],
    steps: [
      "Pat the slices dry and season with salt and five spice.",
      "Cook at 200°C for 20 minutes, turning halfway, until the fat is crisping up.",
      "Mix the honey, soy and garlic. Toss the slices in it and cook for the last 5 minutes – honey burns, so keep an eye on them.",
      "Check the pork has reached 71°C and serve straight away."
    ]
  },
  {
    id: "honey-garlic-pork-tenderloin", name: "Honey & Garlic Pork Tenderloin", emoji: "🐖", cat: "pork",
    temp: 190, time: 22, prep: 5, serves: 3, turn: "flip",
    tags: ["honey roast", "lean", "midweek", "gluten-free"],
    ing: [["500g", "pork fillet"], ["3 tbsp", "honey"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "oil"], ["1 tsp", "?thyme"], ["½ tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Rub the pork with oil, salt, pepper and thyme.",
      "Cook at 190°C for 16 minutes, turning halfway.",
      "Mix the honey and garlic, brush all over and cook for the last 5–6 minutes – watch it so the honey doesn't scorch.",
      "Check the centre has reached 71°C. Rest for 5 minutes before slicing."
    ]
  },
  {
    id: "honey-sausages-red-onion", name: "Honey Glazed Sausages with Red Onion", emoji: "🌭", cat: "pork",
    temp: 190, time: 18, prep: 5, serves: 3, turn: "shake",
    tags: ["honey roast", "family", "midweek"],
    ing: [["6", "sausages"], ["2", "red onion", "cut into wedges"], ["2 tbsp", "honey"], ["1 tsp", "mustard"], ["1 tsp", "oil"], ["1 tsp", "?rosemary"]],
    steps: [
      "Toss the onion wedges in oil and rosemary and add to the basket with the sausages.",
      "Cook at 190°C for 14 minutes, shaking halfway.",
      "Mix the honey and mustard, drizzle over and shake to coat. Cook for the last 3–4 minutes – honey burns quickly.",
      "Check the sausages have reached 75°C in the middle before serving."
    ]
  },

  // ───────────── CHICKEN ─────────────
  {
    id: "honey-mustard-drumsticks", name: "Honey Mustard Chicken Drumsticks", emoji: "🍗", cat: "chicken",
    temp: 190, time: 24, prep: 5, serves: 4, turn: "flip",
    tags: ["honey roast", "family", "gluten-free"],
    ing: [["8", "chicken drumsticks"], ["3 tbsp", "honey"], ["2 tbsp", "mustard", "wholegrain"], ["1 tsp", "garlic granules"], ["1 tsp", "paprika"], ["½ tsp", "salt"], ["1 tsp", "oil"]],
    steps: [
      "Rub the drumsticks with oil, salt, paprika and garlic granules.",
      "Cook at 190°C for 18 minutes, turning halfway.",
      "Mix the honey and mustard, brush over and cook for the last 5–6 minutes – watch so the glaze doesn't burn.",
      "Check the thickest part has reached 75°C before serving."
    ]
  },
  {
    id: "honey-lemon-chicken", name: "Honey Lemon Chicken Breasts", emoji: "🍋", cat: "chicken",
    temp: 180, time: 18, prep: 5, serves: 2, turn: "flip",
    tags: ["honey roast", "zesty", "midweek", "gluten-free"],
    ing: [["2", "chicken breast"], ["2 tbsp", "honey"], ["1", "lemon", "zest and juice"], ["1 clove", "garlic", "crushed"], ["1 tsp", "oil"], ["½ tsp", "salt"], ["1 tsp", "?thyme"]],
    steps: [
      "Bash the breasts to an even thickness and rub with oil, salt, lemon zest and thyme.",
      "Cook at 180°C for 14 minutes, turning halfway.",
      "Mix the honey, lemon juice and garlic. Brush on and cook for the last 4 minutes – honey catches fast.",
      "Check the chicken has reached 75°C. Rest for 3 minutes."
    ]
  },
  {
    id: "honey-sriracha-thighs", name: "Honey Sriracha Chicken Thighs", emoji: "🌶️", cat: "chicken",
    temp: 190, time: 22, prep: 5, serves: 3, turn: "flip",
    tags: ["honey roast", "trending", "spicy", "sticky"],
    ing: [["6", "chicken thighs", "boneless, skinless"], ["3 tbsp", "honey"], ["2 tbsp", "sriracha"], ["1 tbsp", "soy sauce"], ["1", "?lime", "juiced"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Season the thighs lightly and lay flat in the basket.",
      "Cook at 190°C for 16 minutes, turning halfway.",
      "Mix the honey, sriracha, soy and lime. Brush over and cook for the last 5–6 minutes – watch it doesn't burn.",
      "Check the chicken has reached 75°C. Sprinkle with sesame seeds to serve."
    ]
  },
  {
    id: "honey-balsamic-chicken", name: "Honey Balsamic Chicken", emoji: "🍗", cat: "chicken",
    temp: 190, time: 20, prep: 5, serves: 3, turn: "flip",
    tags: ["honey roast", "sticky", "gluten-free"],
    ing: [["6", "chicken thighs", "boneless"], ["2 tbsp", "honey"], ["3 tbsp", "balsamic vinegar"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "?rosemary"], ["½ tsp", "salt"]],
    steps: [
      "Season the thighs with salt and rosemary.",
      "Cook at 190°C for 15 minutes, turning halfway.",
      "Simmer the honey, balsamic and garlic in a small pan for 2 minutes until syrupy. Brush on and cook for the last 5 minutes – keep an eye on it.",
      "Check the chicken has reached 75°C before serving."
    ]
  },
  {
    id: "honey-chilli-wings", name: "Honey Chilli Chicken Wings", emoji: "🔥", cat: "chicken",
    temp: 200, time: 26, prep: 5, serves: 2, turn: "shake",
    tags: ["honey roast", "spicy", "party", "game day"],
    ing: [["800g", "chicken wings"], ["1 tbsp", "cornflour"], ["1 tsp", "salt"], ["3 tbsp", "honey"], ["1 tsp", "chilli flakes"], ["1 tbsp", "soy sauce"], ["1", "?red chilli", "sliced"]],
    steps: [
      "Pat the wings dry and toss with cornflour and salt.",
      "Cook at 200°C for 22 minutes, shaking every 7 minutes.",
      "Warm the honey, chilli flakes and soy. Toss the wings in it and cook for the last 3–4 minutes – honey burns, so watch closely.",
      "Check the wings have reached 75°C. Scatter with fresh chilli."
    ]
  },
  {
    id: "honey-glazed-duck-legs", name: "Honey Glazed Duck Legs", emoji: "🦆", cat: "chicken",
    temp: 180, time: 40, prep: 5, serves: 2, turn: "flip",
    tags: ["honey roast", "date night", "crispy skin"],
    ing: [["2", "duck legs"], ["2 tbsp", "honey"], ["1 tbsp", "soy sauce"], ["½ tsp", "five spice"], ["½ tsp", "salt"], ["1", "?oranges", "zest"]],
    steps: [
      "Prick the duck skin all over, pat dry and rub with salt and five spice.",
      "Cook skin-side down at 180°C for 15 minutes, then turn and cook for 20 minutes more. Pour off fat as needed.",
      "Mix the honey, soy and orange zest. Brush over the skin and cook for the last 5 minutes – watch it so it doesn't burn.",
      "Check the thickest part has reached 75°C and rest for 5 minutes."
    ]
  },

  // ───────────── LAMB ─────────────
  {
    id: "honey-rosemary-lamb-chops", name: "Honey & Rosemary Lamb Chops", emoji: "🐑", cat: "lamb",
    temp: 200, time: 12, prep: 5, serves: 2, turn: "flip",
    tags: ["honey roast", "quick", "date night", "gluten-free"],
    ing: [["6", "lamb chops"], ["2 tbsp", "honey"], ["1 tbsp", "rosemary", "chopped"], ["1 clove", "garlic", "crushed"], ["1 tsp", "oil"], ["½ tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Rub the chops with oil, garlic, rosemary, salt and pepper.",
      "Cook at 200°C for 8 minutes, turning halfway.",
      "Brush with honey and cook for the last 3–4 minutes – honey burns quickly at this heat.",
      "For pink lamb, check it has reached 63°C. Rest for 3 minutes."
    ]
  },

  // ───────────── FISH ─────────────
  {
    id: "honey-teriyaki-salmon-bites", name: "Honey Teriyaki Salmon Bites", emoji: "🐟", cat: "fish",
    temp: 200, time: 9, prep: 5, serves: 2, turn: "shake",
    tags: ["honey roast", "trending", "quick", "high protein"],
    ing: [["2", "salmon fillets", "skin off, cubed"], ["2 tbsp", "teriyaki sauce"], ["1 tbsp", "honey"], ["1 tsp", "sesame seeds"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Toss the salmon cubes with half the teriyaki sauce.",
      "Cook at 200°C for 6 minutes, shaking gently halfway.",
      "Mix the honey with the rest of the teriyaki, toss through and cook for the last 2–3 minutes – watch it doesn't burn.",
      "Check the salmon has reached 63°C. Finish with sesame seeds and spring onions."
    ]
  },
  {
    id: "honey-lime-prawns", name: "Honey Lime Prawns", emoji: "🦐", cat: "fish",
    temp: 200, time: 7, prep: 5, serves: 2, turn: "shake",
    tags: ["honey roast", "quick", "zesty", "gluten-free"],
    ing: [["300g", "prawns", "raw king prawns"], ["1 tbsp", "honey"], ["1", "lime", "zest and juice"], ["1 clove", "garlic", "crushed"], ["1 tsp", "oil"], ["¼ tsp", "?chilli flakes"], ["1 tbsp", "?fresh coriander"]],
    steps: [
      "Toss the prawns with oil, garlic, lime zest and chilli flakes.",
      "Cook at 200°C for 4 minutes, shaking halfway.",
      "Mix the honey and lime juice, toss through and cook for the last 2–3 minutes – honey catches fast.",
      "Prawns are done when pink all the way through (63°C). Scatter with coriander."
    ]
  },

  // ───────────── SIDES ─────────────
  {
    id: "honey-roast-parsnips", name: "Honey Roast Parsnips", emoji: "🥕", cat: "sides",
    temp: 190, time: 20, prep: 10, serves: 4, turn: "shake",
    tags: ["honey roast", "sunday roast", "christmas", "vegetarian"],
    ing: [["600g", "parsnips", "peeled, cut into batons"], ["1 tbsp", "oil"], ["2 tbsp", "honey"], ["½ tsp", "salt"], ["1 tsp", "?thyme"]],
    steps: [
      "Toss the parsnips with oil, salt and thyme.",
      "Cook at 190°C for 15 minutes, shaking halfway.",
      "Drizzle with honey, shake to coat and cook for the last 4–5 minutes until sticky – watch closely as honey burns."
    ]
  },
  {
    id: "honey-sweet-potato-wedges", name: "Honey Roast Sweet Potato Wedges", emoji: "🍠", cat: "sides",
    temp: 190, time: 20, prep: 5, serves: 3, turn: "shake",
    tags: ["honey roast", "vegetarian", "gluten-free"],
    ing: [["2", "sweet potatoes", "cut into wedges"], ["1 tbsp", "oil"], ["1 tsp", "paprika"], ["½ tsp", "salt"], ["2 tbsp", "honey"], ["¼ tsp", "?chilli flakes"]],
    steps: [
      "Toss the wedges with oil, paprika and salt.",
      "Cook at 190°C for 16 minutes, shaking halfway.",
      "Drizzle with honey and chilli flakes, shake and cook for the last 3–4 minutes – don't let the honey burn."
    ]
  },
  {
    id: "honey-squash-feta", name: "Honey Roast Butternut Squash with Feta", emoji: "🎃", cat: "sides",
    temp: 190, time: 22, prep: 10, serves: 4, turn: "shake",
    tags: ["honey roast", "vegetarian", "autumn"],
    ing: [["1", "butternut squash", "peeled, cubed"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["2 tbsp", "honey"], ["1 tsp", "?thyme"], ["100g", "feta", "crumbled"], ["2 tbsp", "?mixed nuts", "chopped"]],
    steps: [
      "Toss the squash with oil, salt and thyme.",
      "Cook at 190°C for 18 minutes, shaking halfway.",
      "Drizzle over the honey, shake and cook for the last 4 minutes – honey burns, so keep watching.",
      "Tip onto a plate and scatter with the feta and nuts."
    ]
  },
  {
    id: "honey-glazed-sprouts", name: "Honey Glazed Brussels Sprouts", emoji: "🥬", cat: "sides",
    temp: 190, time: 15, prep: 5, serves: 4, turn: "shake",
    tags: ["honey roast", "christmas", "vegetarian", "gluten-free"],
    ing: [["500g", "brussels sprouts", "trimmed, halved"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["2 tbsp", "honey"], ["1 tbsp", "?balsamic vinegar"], ["50g", "?bacon", "lardons, if not vegetarian"]],
    steps: [
      "Toss the sprouts (and lardons if using) with oil and salt.",
      "Cook at 190°C for 12 minutes, shaking halfway.",
      "Mix the honey and balsamic, toss through and cook for the last 3 minutes – honey catches quickly."
    ]
  },
  {
    id: "honey-root-veg-medley", name: "Honey Roast Root Veg Medley", emoji: "🥕", cat: "sides",
    temp: 190, time: 22, prep: 10, serves: 4, turn: "shake",
    tags: ["honey roast", "sunday roast", "vegetarian", "gluten-free"],
    ing: [["2", "carrots", "chunks"], ["2", "parsnips", "chunks"], ["½", "swede", "cubed"], ["1", "red onion", "wedges"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["2 tbsp", "honey"], ["1 tsp", "?rosemary"]],
    steps: [
      "Cut everything to a similar size and toss with oil, salt and rosemary.",
      "Cook at 190°C for 18 minutes, shaking every 6 minutes.",
      "Drizzle with honey, shake and cook for the last 4 minutes until glossy – watch so it doesn't burn."
    ]
  },
  {
    id: "honey-roasted-cherry-tomatoes", name: "Honey Roasted Cherry Tomatoes", emoji: "🍅", cat: "sides",
    temp: 180, time: 10, prep: 2, serves: 2, turn: "none",
    tags: ["honey roast", "quick", "vegan option", "gluten-free"],
    ing: [["250g", "cherry tomatoes", "on the vine if you like"], ["1 tsp", "oil"], ["1 tbsp", "honey"], ["¼ tsp", "salt"], ["1 tsp", "?thyme"], ["1 tsp", "?balsamic vinegar"]],
    steps: [
      "Put the tomatoes in a small ovenproof dish or on foil, drizzle with oil and season.",
      "Cook at 180°C for 7 minutes until starting to blister.",
      "Drizzle with honey and balsamic, add the thyme and cook for the last 3 minutes – honey burns fast. Great on toast or pasta."
    ]
  },
  {
    id: "honey-thyme-new-potatoes", name: "Honey & Thyme Roast New Potatoes", emoji: "🥔", cat: "sides",
    temp: 200, time: 22, prep: 5, serves: 4, turn: "shake",
    tags: ["honey roast", "vegetarian", "gluten-free"],
    ing: [["750g", "new potatoes", "halved"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["2 tbsp", "honey"], ["1 tbsp", "thyme"], ["15g", "?butter"]],
    steps: [
      "Toss the potatoes with oil and salt.",
      "Cook at 200°C for 18 minutes, shaking halfway, until golden and tender.",
      "Melt the honey with the butter and thyme, toss through and cook for the last 3–4 minutes – watch it doesn't burn."
    ]
  },
  {
    id: "honey-sesame-cauliflower", name: "Honey Sesame Cauliflower", emoji: "🥦", cat: "veggie",
    temp: 200, time: 18, prep: 10, serves: 3, turn: "shake",
    tags: ["honey roast", "trending", "fakeaway", "vegetarian"],
    ing: [["1", "cauliflower", "florets"], ["2 tbsp", "cornflour"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["3 tbsp", "honey"], ["2 tbsp", "soy sauce"], ["1 clove", "garlic", "crushed"], ["1 tbsp", "sesame seeds"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Toss the florets with oil, then cornflour and salt.",
      "Cook at 200°C for 14 minutes, shaking halfway, until crisp at the edges.",
      "Mix the honey, soy and garlic. Toss the cauliflower in it and cook for the last 3–4 minutes – honey burns, so watch closely.",
      "Scatter with sesame seeds and spring onions. Serve with rice."
    ]
  },

  // ───────────── VEGGIE ─────────────
  {
    id: "honey-halloumi-traybake", name: "Honey Halloumi Traybake", emoji: "🧀", cat: "veggie",
    temp: 190, time: 18, prep: 10, serves: 2, turn: "shake",
    tags: ["honey roast", "vegetarian", "midweek"],
    ing: [["225g", "halloumi", "cubed"], ["1", "bell peppers", "chunks"], ["1", "courgette", "chunks"], ["1", "red onion", "wedges"], ["1 tbsp", "oil"], ["1 tsp", "oregano"], ["2 tbsp", "honey"], ["¼ tsp", "?chilli flakes"]],
    steps: [
      "Toss the veg with oil and oregano and cook at 190°C for 10 minutes, shaking halfway.",
      "Add the halloumi and cook for 5 minutes more.",
      "Drizzle with honey and chilli flakes and cook for the last 3 minutes – honey burns, so keep an eye on it."
    ]
  },

  // ───────────── SNACKS ─────────────
  {
    id: "honey-roasted-nuts", name: "Honey Roasted Nuts", emoji: "🥜", cat: "snacks",
    temp: 160, time: 10, prep: 3, serves: 6, turn: "shake",
    tags: ["honey roast", "christmas", "gift", "vegetarian"],
    ing: [["250g", "mixed nuts", "unsalted"], ["2 tbsp", "honey"], ["1 tsp", "oil"], ["½ tsp", "salt"], ["½ tsp", "?cinnamon"]],
    steps: [
      "Cook the nuts alone at 160°C for 5 minutes, shaking halfway.",
      "Warm the honey and oil, toss with the nuts, salt and cinnamon. Return on a piece of baking paper.",
      "Cook for the last 4–5 minutes, shaking every 2 minutes – honey burns quickly at the end.",
      "Spread out to cool; they crisp up as they cool. Store in a jar for up to 2 weeks."
    ]
  },
  {
    id: "honey-cinnamon-apple-slices", name: "Honey Cinnamon Apple Slices", emoji: "🍎", cat: "snacks",
    temp: 160, time: 14, prep: 5, serves: 2, turn: "shake",
    tags: ["honey roast", "kids", "lunchbox", "gluten-free"],
    ing: [["2", "apples", "cored, thinly sliced"], ["1 tbsp", "honey"], ["1 tsp", "cinnamon"], ["1 tsp", "?lemon", "juice, to stop browning"]],
    steps: [
      "Toss the apple slices with lemon juice and cinnamon. Lay in a single layer.",
      "Cook at 160°C for 10 minutes, shaking halfway.",
      "Drizzle lightly with honey and cook for the last 3–4 minutes until golden – honey burns, so watch closely.",
      "Leave to cool for 5 minutes; they firm up as they cool."
    ]
  },

  // ───────────── DESSERTS ─────────────
  {
    id: "honey-roasted-plums-yoghurt", name: "Honey Roasted Plums with Yoghurt", emoji: "🍑", cat: "desserts",
    temp: 180, time: 12, prep: 5, serves: 4, turn: "none",
    tags: ["honey roast", "quick", "gluten-free", "vegetarian"],
    ing: [["6", "plums", "halved and stoned – or use figs, halved, if you have them"], ["2 tbsp", "honey"], ["½ tsp", "cinnamon"], ["200g", "greek yoghurt"], ["2 tbsp", "?pistachios", "chopped"]],
    steps: [
      "Lay the plums cut-side up in a small ovenproof dish or on foil and dust with cinnamon.",
      "Cook at 180°C for 8 minutes until softening.",
      "Drizzle with honey and cook for the last 3–4 minutes until bubbling – honey burns, so watch it.",
      "Serve warm over Greek yoghurt with the juices and pistachios."
    ]
  },
  {
    id: "honey-baked-pears-walnuts", name: "Honey Baked Pears with Walnuts", emoji: "🍐", cat: "desserts",
    temp: 180, time: 18, prep: 5, serves: 2, turn: "none",
    tags: ["honey roast", "autumn", "gluten-free", "vegetarian"],
    ing: [["2", "pears", "halved and cored"], ["15g", "butter"], ["½ tsp", "cinnamon"], ["2 tbsp", "honey"], ["40g", "mixed nuts", "walnuts if you have them, chopped"], ["4 tbsp", "?greek yoghurt", "or cream"]],
    steps: [
      "Put the pears cut-side up on foil or in a small dish. Dot with butter and dust with cinnamon.",
      "Cook at 180°C for 12 minutes until tender.",
      "Fill the hollows with the nuts, drizzle with honey and cook for the last 4–5 minutes – watch it so the honey doesn't burn.",
      "Serve warm with yoghurt or cream and the juices spooned over."
    ]
  }
);
