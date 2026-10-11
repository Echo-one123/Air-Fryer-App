'use strict';

/*
 * Pasta dishes – same format as recipes.js (see the notes at the top of that file).
 * The air fryer roasts the sauce veg, crisps the meat/fish/crumbs or bakes in a small metal tin;
 * the pasta itself is boiled on the hob. Loaded after recipes.js and added to the RECIPES list.
 */
RECIPES.push(
  // ───────────── ROASTED VEG SAUCES ─────────────
  {
    id: "pasta-roasted-tomato-garlic-spaghetti", name: "Roasted Cherry Tomato & Garlic Spaghetti", emoji: "🍅", cat: "pasta",
    temp: 190, time: 15, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "trending", "vegetarian", "quick", "italian", "weeknight"],
    ing: [["400g", "cherry tomatoes"], ["6 cloves", "garlic", "peeled, left whole"], ["2 tbsp", "oil", "olive oil"], ["½ tsp", "salt"], ["200g", "pasta", "spaghetti"], ["30g", "parmesan", "grated"], ["handful", "?basil"], ["pinch", "?chilli flakes"]],
    steps: [
      "Toss the tomatoes and garlic cloves with the oil, salt and chilli flakes in a small metal tin or straight in the basket.",
      "Air fry at 190°C for 15 minutes, shaking at halfway, until the tomatoes have burst and the garlic is soft.",
      "Meanwhile, cook the pasta in a pan of salted water for 9–10 minutes. Save a mugful of the water, then drain.",
      "Squash the tomatoes and garlic with a fork, tip into the pasta pan with a splash of pasta water and the parmesan, and toss until glossy. Finish with basil."
    ]
  },
  {
    id: "pasta-roasted-red-pepper", name: "Roasted Red Pepper Pasta", emoji: "🫑", cat: "pasta",
    temp: 200, time: 16, prep: 10, serves: 2, turn: "flip",
    tags: ["pasta", "vegetarian", "italian", "batch cook", "weeknight"],
    ing: [["3", "bell peppers", "red, halved and deseeded"], ["1", "red onion", "quartered"], ["4 cloves", "garlic", "unpeeled"], ["1 tbsp", "oil"], ["200g", "pasta", "penne or fusilli"], ["2 tbsp", "cream cheese"], ["30g", "parmesan", "grated"], ["1 tsp", "?paprika", "smoked"], ["½ tsp", "salt"]],
    steps: [
      "Toss the peppers, onion and garlic with the oil and salt. Lay the peppers skin-side up in the basket.",
      "Air fry at 200°C for 16 minutes, turning the onion at halfway, until the pepper skins are blistered and charred.",
      "Meanwhile, cook the pasta in a pan of salted water for 10–11 minutes. Save a mugful of the water, then drain.",
      "Squeeze the garlic from its skins and blend with the peppers, onion, cream cheese, paprika and a splash of pasta water until smooth.",
      "Stir the sauce through the pasta with the parmesan, loosening with more pasta water if needed."
    ]
  },
  {
    id: "pasta-spicy-vodka-style-rigatoni", name: "Spicy Vodka-Style Rigatoni", emoji: "🌶️", cat: "pasta",
    temp: 190, time: 12, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "trending", "vegetarian", "italian", "spicy"],
    ing: [["1", "onion", "finely chopped"], ["3 cloves", "garlic", "sliced"], ["1 tbsp", "oil"], ["3 tbsp", "tomato puree"], ["1 tsp", "chilli flakes"], ["150ml", "cream", "double"], ["200g", "pasta", "rigatoni"], ["40g", "parmesan", "grated"], ["15g", "butter"], ["handful", "?basil"]],
    steps: [
      "Mix the onion, garlic and oil in a small metal tin. Air fry at 190°C for 6 minutes, shaking once, until soft and starting to colour.",
      "Stir in the tomato puree and chilli flakes and cook for 3 minutes to caramelise. Stir in the cream and cook for 3 minutes more until bubbling.",
      "Meanwhile, cook the pasta in a pan of salted water for 11–12 minutes. Save a mugful of the water, then drain.",
      "Tip the sauce into the pasta pan with the butter, parmesan and a good splash of pasta water. Toss until silky and pink-orange. Top with basil."
    ]
  },
  {
    id: "pasta-roasted-med-veg", name: "Roasted Mediterranean Veg Pasta", emoji: "🍆", cat: "pasta",
    temp: 200, time: 18, prep: 10, serves: 3, turn: "shake",
    tags: ["pasta", "vegetarian", "vegan option", "family", "weeknight"],
    ing: [["1", "courgette", "chunks"], ["1", "bell peppers", "chunks"], ["1", "red onion", "wedges"], ["½", "aubergine", "chunks"], ["200g", "cherry tomatoes"], ["2 tbsp", "oil"], ["1 tsp", "mixed herbs"], ["½ tsp", "salt"], ["250g", "pasta", "penne"], ["2 tbsp", "pesto"], ["50g", "?feta", "crumbled"]],
    steps: [
      "Toss the courgette, pepper, onion and aubergine with the oil, mixed herbs and salt.",
      "Air fry at 200°C for 18 minutes, shaking every 5 minutes. Add the cherry tomatoes for the last 6 minutes.",
      "Meanwhile, cook the pasta in a pan of salted water for 10–11 minutes. Save a splash of the water, then drain.",
      "Toss the pasta with the pesto, roasted veg and a splash of pasta water. Crumble over the feta to serve."
    ]
  },
  {
    id: "pasta-butternut-sage", name: "Roasted Butternut Squash & Sage Pasta", emoji: "🎃", cat: "pasta",
    temp: 200, time: 20, prep: 10, serves: 2, turn: "shake",
    tags: ["pasta", "vegetarian", "autumn", "italian", "comfort"],
    ing: [["400g", "butternut squash", "peeled, 2cm cubes"], ["3 cloves", "garlic", "unpeeled"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["200g", "pasta", "conchiglie or penne"], ["30g", "butter"], ["8", "sage", "fresh leaves"], ["30g", "parmesan", "grated"], ["pinch", "?nutmeg"], ["pinch", "?chilli flakes"]],
    steps: [
      "Toss the squash and garlic with the oil and salt. Air fry at 200°C for 18 minutes, shaking twice, until soft and caramelised.",
      "Add the sage leaves brushed with a little of the butter and cook for 2 minutes until crisp. Set the sage aside.",
      "Meanwhile, cook the pasta in a pan of salted water for 10–11 minutes. Save a mugful of the water, then drain.",
      "Mash half the squash with the squeezed-out garlic, remaining butter, nutmeg and pasta water to make a sauce. Toss with the pasta, the rest of the squash and parmesan, then crumble over the crispy sage."
    ]
  },
  {
    id: "pasta-mushroom-garlic-tagliatelle", name: "Roasted Mushroom & Garlic Tagliatelle", emoji: "🍄", cat: "pasta",
    temp: 200, time: 12, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "vegetarian", "quick", "creamy", "weeknight"],
    ing: [["300g", "mushrooms", "chestnut, thickly sliced"], ["3 cloves", "garlic", "sliced"], ["1 tbsp", "oil"], ["½ tsp", "thyme"], ["½ tsp", "salt"], ["200g", "pasta", "tagliatelle"], ["100ml", "cream", "double"], ["30g", "parmesan", "grated"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Toss the mushrooms with the oil, thyme and salt. Air fry at 200°C for 8 minutes, shaking at halfway.",
      "Add the garlic, shake and cook for 4 minutes more until the mushrooms are golden and the garlic is soft.",
      "Meanwhile, cook the pasta in a pan of salted water for 8–10 minutes. Save a splash of the water, then drain.",
      "Warm the cream in the pasta pan, add the mushrooms, pasta, parmesan and a splash of pasta water and toss until coated. Finish with parsley."
    ]
  },
  {
    id: "pasta-aubergine-norma", name: "Aubergine Pasta alla Norma-Style", emoji: "🍆", cat: "pasta",
    temp: 200, time: 16, prep: 10, serves: 2, turn: "shake",
    tags: ["pasta", "vegetarian", "italian", "classic"],
    ing: [["1", "aubergine", "2cm cubes"], ["2 tbsp", "oil"], ["½ tsp", "salt"], ["2 cloves", "garlic", "crushed"], ["400g", "passata"], ["½ tsp", "oregano"], ["pinch", "chilli flakes"], ["200g", "pasta", "rigatoni or penne"], ["60g", "ricotta"], ["handful", "basil"]],
    steps: [
      "Toss the aubergine with the oil and salt. Air fry at 200°C for 16 minutes, shaking every 5 minutes, until golden and creamy inside.",
      "Meanwhile, simmer the passata with the garlic, oregano and chilli flakes in a pan for 10 minutes.",
      "Cook the pasta in a pan of salted water for 11–12 minutes, then drain.",
      "Stir most of the aubergine and the pasta into the sauce. Serve topped with the remaining aubergine, spoonfuls of ricotta and torn basil."
    ]
  },
  {
    id: "pasta-broccoli-chilli-orecchiette", name: "Roasted Broccoli & Chilli Orecchiette", emoji: "🥦", cat: "pasta",
    temp: 200, time: 10, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "vegetarian", "quick", "italian", "weeknight"],
    ing: [["1 head", "broccoli", "small florets"], ["3 cloves", "garlic", "sliced"], ["2 tbsp", "oil", "olive oil"], ["½ tsp", "chilli flakes"], ["½ tsp", "salt"], ["200g", "pasta", "orecchiette"], ["½", "lemon", "zest and juice"], ["30g", "parmesan", "grated"]],
    steps: [
      "Toss the broccoli with half the oil and the salt. Air fry at 200°C for 6 minutes.",
      "Add the garlic and chilli flakes with the rest of the oil, shake and cook for 4 minutes more until the broccoli edges are charred.",
      "Meanwhile, cook the pasta in a pan of salted water for 11–12 minutes. Save a mugful of the water, then drain.",
      "Toss the pasta with the broccoli, lemon zest and juice, parmesan and a splash of pasta water, crushing some of the broccoli into the sauce."
    ]
  },
  {
    id: "pasta-pea-ricotta-crumbs", name: "Pea & Ricotta Pasta with Crispy Crumbs", emoji: "🟢", cat: "pasta",
    temp: 180, time: 5, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "vegetarian", "quick", "spring", "budget"],
    ing: [["40g", "breadcrumbs", "panko or fresh"], ["1 tbsp", "oil"], ["1 clove", "garlic", "crushed"], ["200g", "pasta", "fusilli or shells"], ["150g", "peas", "frozen"], ["125g", "ricotta"], ["½", "lemon", "zest and juice"], ["30g", "parmesan", "grated"], ["pinch", "?chilli flakes"]],
    steps: [
      "Mix the breadcrumbs, oil and garlic in a small metal tin. Air fry at 180°C for 5 minutes, shaking every 2 minutes, until golden. Watch them closely.",
      "Cook the pasta in a pan of salted water for 10–11 minutes, adding the peas for the last 2 minutes. Save a mugful of the water, then drain.",
      "Beat the ricotta with the lemon zest and juice, parmesan and a splash of pasta water, then stir through the pasta and peas.",
      "Serve scattered with the crispy crumbs and chilli flakes."
    ]
  },
  {
    id: "pasta-crispy-chilli-oil", name: "Crispy Chilli Oil Pasta", emoji: "🔥", cat: "pasta",
    temp: 180, time: 6, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "trending", "vegetarian", "quick", "spicy"],
    ing: [["4 cloves", "garlic", "thinly sliced"], ["2", "spring onions", "sliced"], ["1 tbsp", "oil"], ["200g", "pasta", "spaghetti or linguine"], ["2 tbsp", "chilli oil", "crispy chilli oil"], ["1 tbsp", "soy sauce"], ["15g", "butter"], ["20g", "parmesan", "grated"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Toss the garlic and the white parts of the spring onions with the oil in a small metal tin. Air fry at 180°C for 6 minutes, shaking every 2 minutes, until golden and crisp – don't let the garlic burn.",
      "Meanwhile, cook the pasta in a pan of salted water for 9–10 minutes. Save a mugful of the water, then drain.",
      "Toss the pasta with the chilli oil, soy sauce, butter, parmesan and a splash of pasta water until glossy.",
      "Top with the crispy garlic, green spring onion and sesame seeds."
    ]
  },
  {
    id: "pasta-pangrattato-spaghetti", name: "Pangrattato Spaghetti", emoji: "🍞", cat: "pasta",
    temp: 180, time: 5, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "vegetarian", "quick", "budget", "italian"],
    ing: [["50g", "breadcrumbs", "fresh or panko"], ["2 tbsp", "oil", "olive oil"], ["2 cloves", "garlic", "crushed"], ["1", "lemon", "zest"], ["pinch", "chilli flakes"], ["200g", "pasta", "spaghetti"], ["25g", "butter"], ["30g", "parmesan", "grated"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Mix the breadcrumbs with half the oil, the garlic and chilli flakes in a small metal tin.",
      "Air fry at 180°C for 5 minutes, shaking every 2 minutes, until deep golden and crunchy. Stir in the lemon zest and parsley.",
      "Meanwhile, cook the pasta in a pan of salted water for 9–10 minutes. Save a mugful of the water, then drain.",
      "Toss the pasta with the butter, remaining oil, parmesan and a splash of pasta water. Serve buried under the garlicky crumbs."
    ]
  },

  // ───────────── CHICKEN ─────────────
  {
    id: "pasta-sun-dried-tomato-chicken", name: "Creamy Sun-Dried Tomato Chicken Pasta", emoji: "🍗", cat: "pasta",
    temp: 190, time: 16, prep: 10, serves: 2, turn: "flip",
    tags: ["pasta", "trending", "creamy", "weeknight", "italian"],
    ing: [["2", "chicken breast"], ["1 tbsp", "oil"], ["1 tsp", "mixed herbs"], ["½ tsp", "garlic granules"], ["½ tsp", "salt"], ["200g", "pasta", "penne"], ["60g", "sun-dried tomatoes", "chopped, plus 1 tbsp of their oil"], ["2 cloves", "garlic", "crushed"], ["150ml", "cream", "double"], ["40g", "parmesan", "grated"], ["2 handfuls", "spinach"]],
    steps: [
      "Rub the chicken with the oil, mixed herbs, garlic granules and salt. Air fry at 190°C for 16 minutes, turning at halfway, until it reaches 75°C. Rest, then slice.",
      "Meanwhile, cook the pasta in a pan of salted water for 10–11 minutes. Save a mugful of the water, then drain.",
      "In the empty pan, fry the garlic in the sun-dried tomato oil for 1 minute. Add the sun-dried tomatoes, cream and spinach and bubble until wilted.",
      "Stir in the parmesan, pasta and a splash of pasta water, then top with the sliced chicken."
    ]
  },
  {
    id: "pasta-crispy-chicken-pesto", name: "Crispy Chicken Pesto Pasta", emoji: "🌿", cat: "pasta",
    temp: 200, time: 12, prep: 10, serves: 2, turn: "shake",
    tags: ["pasta", "family", "quick", "italian"],
    ing: [["2", "chicken breast", "bite-sized pieces"], ["1 tbsp", "cornflour"], ["1 tbsp", "oil"], ["½ tsp", "garlic granules"], ["½ tsp", "salt"], ["200g", "pasta", "fusilli"], ["3 tbsp", "pesto"], ["200g", "?cherry tomatoes", "halved"], ["30g", "parmesan", "grated"]],
    steps: [
      "Toss the chicken pieces with the oil, then the cornflour, garlic granules and salt.",
      "Air fry at 200°C for 12 minutes, shaking twice, until golden and crisp and the chicken reaches 75°C.",
      "Meanwhile, cook the pasta in a pan of salted water for 10–11 minutes. Save a splash of the water, then drain.",
      "Toss the pasta with the pesto, cherry tomatoes and a splash of pasta water. Top with the crispy chicken and parmesan."
    ]
  },
  {
    id: "pasta-cajun-chicken", name: "Cajun Chicken Pasta", emoji: "🌶️", cat: "pasta",
    temp: 200, time: 16, prep: 10, serves: 3, turn: "flip",
    tags: ["pasta", "spicy", "creamy", "family", "weeknight"],
    ing: [["2", "chicken breast"], ["2 tsp", "cajun seasoning"], ["1 tbsp", "oil"], ["1", "bell peppers", "sliced"], ["1", "onion", "sliced"], ["250g", "pasta", "penne"], ["150ml", "cream", "double"], ["2 cloves", "garlic", "crushed"], ["40g", "parmesan", "grated"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Rub the chicken with half the oil and 1½ tsp cajun seasoning. Toss the pepper and onion with the rest of the oil and seasoning.",
      "Air fry the chicken at 200°C for 16 minutes, turning at halfway; add the pepper and onion around it for the last 10 minutes. Check the chicken reaches 75°C, then slice.",
      "Meanwhile, cook the pasta in a pan of salted water for 10–11 minutes. Save a mugful of the water, then drain.",
      "Warm the cream and garlic in the pasta pan, stir in the parmesan, pasta, veg and a splash of pasta water. Top with the chicken and spring onions."
    ]
  },
  {
    id: "pasta-chicken-alfredo-fettuccine", name: "Chicken Alfredo-Style Fettuccine", emoji: "🧀", cat: "pasta",
    temp: 190, time: 16, prep: 5, serves: 2, turn: "flip",
    tags: ["pasta", "creamy", "comfort", "family"],
    ing: [["2", "chicken breast"], ["1 tbsp", "oil"], ["½ tsp", "garlic granules"], ["½ tsp", "salt"], ["200g", "pasta", "fettuccine or tagliatelle"], ["30g", "butter"], ["2 cloves", "garlic", "crushed"], ["150ml", "cream", "double"], ["50g", "parmesan", "finely grated"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Rub the chicken with the oil, garlic granules and salt. Air fry at 190°C for 16 minutes, turning at halfway, until it reaches 75°C. Rest, then slice.",
      "Meanwhile, cook the pasta in a pan of salted water for 8–10 minutes. Save a mugful of the water, then drain.",
      "Melt the butter in the pan with the garlic for 1 minute, add the cream and simmer for 2 minutes, then stir in the parmesan off the heat.",
      "Toss in the pasta with a splash of pasta water until silky. Serve topped with the chicken, black pepper and parsley."
    ]
  },

  // ───────────── MEAT ─────────────
  {
    id: "pasta-spaghetti-meatballs", name: "Spaghetti & Air-Fried Meatballs", emoji: "🍝", cat: "pasta",
    temp: 190, time: 12, prep: 15, serves: 4, turn: "shake",
    tags: ["pasta", "family", "classic", "italian", "kids"],
    ing: [["500g", "beef mince"], ["40g", "breadcrumbs"], ["1", "eggs"], ["30g", "parmesan", "grated, plus extra to serve"], ["1 tsp", "oregano"], ["2 cloves", "garlic", "crushed"], ["½ tsp", "salt"], ["700g", "passata"], ["1 tsp", "?sugar"], ["350g", "pasta", "spaghetti"], ["handful", "?basil"]],
    steps: [
      "Mix the mince, breadcrumbs, egg, parmesan, oregano, half the garlic and the salt. Roll into about 20 meatballs.",
      "Air fry at 190°C for 12 minutes, shaking gently at halfway, until browned and they reach 75°C in the centre.",
      "Meanwhile, simmer the passata with the remaining garlic and sugar for 10 minutes, and cook the pasta in a pan of salted water for 9–10 minutes, then drain.",
      "Drop the meatballs into the sauce for 2 minutes, then serve over the spaghetti with extra parmesan and basil."
    ]
  },
  {
    id: "pasta-sausage-ragu-penne", name: "Sausage Ragu Penne", emoji: "🌭", cat: "pasta",
    temp: 200, time: 12, prep: 10, serves: 3, turn: "shake",
    tags: ["pasta", "family", "comfort", "weeknight", "italian"],
    ing: [["6", "sausages", "skins removed, pinched into chunks"], ["1", "red onion", "chopped"], ["2 cloves", "garlic", "crushed"], ["400g", "passata"], ["1 tbsp", "tomato puree"], ["½ tsp", "chilli flakes"], ["½ tsp", "?mixed herbs", "or fennel seeds"], ["250g", "pasta", "penne"], ["30g", "parmesan", "grated"]],
    steps: [
      "Spread the sausage chunks and onion in the basket. Air fry at 200°C for 12 minutes, shaking twice, until browned and the sausage reaches 75°C.",
      "Meanwhile, simmer the passata, tomato puree, garlic and chilli flakes in a pan for 10 minutes.",
      "Cook the pasta in a pan of salted water for 10–11 minutes. Save a splash of the water, then drain.",
      "Stir the crispy sausage and onion into the sauce, then toss with the pasta and a splash of pasta water. Serve with parmesan."
    ]
  },
  {
    id: "pasta-crispy-bacon-carbonara", name: "Crispy Bacon Carbonara-Style Spaghetti", emoji: "🥓", cat: "pasta",
    temp: 200, time: 8, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "quick", "classic", "italian", "weeknight"],
    ing: [["150g", "bacon", "lardons or chopped streaky"], ["200g", "pasta", "spaghetti"], ["2", "eggs", "plus 1 extra yolk"], ["50g", "parmesan", "finely grated"], ["1 clove", "?garlic", "crushed"], ["½ tsp", "black pepper", "coarsely ground"]],
    steps: [
      "Spread the bacon in the basket and air fry at 200°C for 8 minutes, shaking at halfway, until crisp.",
      "Meanwhile, cook the pasta in a pan of salted water for 9–10 minutes. Beat the eggs, yolk, parmesan, garlic and lots of black pepper together.",
      "Save a mugful of the pasta water, drain and return the pasta to the pan off the heat. Let it stand for 1 minute.",
      "Pour in the egg mix with a splash of pasta water and toss quickly until creamy, not scrambled. Stir in the bacon and any fat from the drawer."
    ]
  },
  {
    id: "pasta-chorizo-tomato", name: "Chorizo & Tomato Pasta", emoji: "🍅", cat: "pasta",
    temp: 190, time: 12, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "quick", "spicy", "weeknight"],
    ing: [["100g", "chorizo", "diced"], ["250g", "cherry tomatoes"], ["1", "red onion", "sliced"], ["2 cloves", "garlic", "sliced"], ["1 tsp", "oil"], ["200g", "pasta", "penne or rigatoni"], ["1 tbsp", "tomato puree"], ["2 handfuls", "?spinach"], ["30g", "parmesan", "grated"]],
    steps: [
      "Toss the chorizo, tomatoes, onion and garlic with the oil in a small metal tin or the basket.",
      "Air fry at 190°C for 12 minutes, shaking twice, until the chorizo is crisp and the tomatoes have burst into the red oil.",
      "Meanwhile, cook the pasta in a pan of salted water for 10–11 minutes. Save a mugful of the water, then drain.",
      "Tip everything from the air fryer into the pasta pan with the tomato puree, spinach and a splash of pasta water. Toss until the spinach wilts and serve with parmesan."
    ]
  },

  // ───────────── FISH ─────────────
  {
    id: "pasta-garlic-chilli-prawn-linguine", name: "Garlic Chilli Prawn Linguine", emoji: "🍤", cat: "pasta",
    temp: 200, time: 6, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "trending", "quick", "seafood", "italian"],
    ing: [["200g", "prawns", "raw king prawns, peeled"], ["3 cloves", "garlic", "crushed"], ["2 tbsp", "oil", "olive oil"], ["½ tsp", "chilli flakes"], ["200g", "pasta", "linguine"], ["150g", "cherry tomatoes", "halved"], ["1", "lemon", "zest and juice"], ["20g", "butter"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Toss the prawns with half the oil, the garlic, chilli flakes and a pinch of salt.",
      "Air fry at 200°C for 6 minutes, shaking at halfway, until pink and they reach 63°C.",
      "Meanwhile, cook the pasta in a pan of salted water for 9–10 minutes. Save a mugful of the water, then drain.",
      "Toss the pasta with the remaining oil, butter, cherry tomatoes, lemon zest and juice and a splash of pasta water. Add the prawns and parsley."
    ]
  },
  {
    id: "pasta-lemon-herb-salmon", name: "Lemon & Herb Salmon Pasta", emoji: "🐟", cat: "pasta",
    temp: 190, time: 10, prep: 5, serves: 2, turn: "none",
    tags: ["pasta", "quick", "creamy", "healthy-ish", "weeknight"],
    ing: [["2", "salmon fillets"], ["1 tsp", "oil"], ["½ tsp", "mixed herbs"], ["1", "lemon", "zest and juice"], ["200g", "pasta", "penne or farfalle"], ["100g", "peas", "frozen"], ["100g", "cream cheese", "or crème fraîche"], ["2 handfuls", "?spinach"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Rub the salmon with the oil, mixed herbs, lemon zest and a pinch of salt. Air fry skin-side down at 190°C for 10 minutes until it reaches 63°C and flakes easily.",
      "Meanwhile, cook the pasta in a pan of salted water for 10–11 minutes, adding the peas for the last 2 minutes. Save a mugful of the water, then drain.",
      "Stir the cream cheese, lemon juice, spinach and a splash of pasta water through the pasta until creamy.",
      "Flake in the salmon (leave the skin behind), fold gently and finish with parsley and black pepper."
    ]
  },
  {
    id: "pasta-tuna-sweetcorn-crumbs", name: "Tuna & Sweetcorn Pasta with Crispy Crumbs", emoji: "🥫", cat: "pasta",
    temp: 180, time: 10, prep: 5, serves: 3, turn: "none",
    tags: ["pasta", "budget", "family", "kids", "store cupboard"],
    ing: [["250g", "pasta", "fusilli"], ["2 tins", "tinned tuna", "drained"], ["150g", "sweetcorn", "tinned, drained"], ["150g", "cream cheese"], ["50g", "cheddar", "grated"], ["4", "?spring onions", "sliced"], ["40g", "breadcrumbs"], ["1 tbsp", "butter", "melted"]],
    steps: [
      "Cook the pasta in a pan of salted water for 10–11 minutes. Save a splash of the water, then drain.",
      "Stir in the cream cheese, tuna, sweetcorn, spring onions and half the cheddar with a splash of pasta water. Tip into a small metal tin or ovenproof dish that fits your basket.",
      "Mix the breadcrumbs with the melted butter and remaining cheddar and scatter over the top.",
      "Air fry at 180°C for 10 minutes until bubbling with a crunchy golden top."
    ]
  },

  // ───────────── BAKED & GNOCCHI ─────────────
  {
    id: "pasta-baked-ziti-penne", name: "Baked Ziti-Style Penne", emoji: "🧀", cat: "pasta",
    temp: 180, time: 14, prep: 10, serves: 3, turn: "none",
    tags: ["pasta", "family", "cheesy", "comfort", "italian"],
    ing: [["250g", "pasta", "penne or ziti"], ["400g", "passata"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "oregano"], ["125g", "ricotta"], ["125g", "mozzarella", "torn"], ["30g", "parmesan", "grated"], ["½ tsp", "salt"], ["handful", "?basil"]],
    steps: [
      "Cook the pasta in a pan of salted water for 2 minutes less than the pack says (about 8 minutes), then drain.",
      "Stir the passata, garlic, oregano and salt through the pasta. Spoon half into a small metal tin or ovenproof dish that fits your basket.",
      "Dot over the ricotta, add the rest of the pasta, then top with the mozzarella and parmesan.",
      "Cover with foil and air fry at 180°C for 8 minutes, then uncover and cook for 6 minutes more until golden and bubbling. Rest for 5 minutes and add basil."
    ]
  },
  {
    id: "pasta-gnocchi-sausage-traybake", name: "Crispy Gnocchi Sausage Traybake", emoji: "🥔", cat: "pasta",
    temp: 200, time: 18, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "family", "one pan", "weeknight"],
    ing: [["500g", "gnocchi", "shop-bought"], ["4", "sausages", "cut into chunks"], ["1", "red onion", "wedges"], ["1", "bell peppers", "chunks"], ["1 tbsp", "oil"], ["1 tsp", "mixed herbs"], ["150g", "cherry tomatoes"], ["30g", "?parmesan", "grated"]],
    steps: [
      "Toss the gnocchi, sausages, onion and pepper with the oil and mixed herbs.",
      "Air fry at 200°C for 18 minutes, shaking every 5 minutes. Add the cherry tomatoes for the last 6 minutes.",
      "Check the sausages reach 75°C and the gnocchi are crisp and golden.",
      "Serve straight away with parmesan grated over."
    ]
  },
  {
    id: "pasta-gnocchi-roasted-tomato-mozzarella", name: "Gnocchi with Roasted Tomatoes & Mozzarella", emoji: "🍅", cat: "pasta",
    temp: 200, time: 17, prep: 5, serves: 2, turn: "shake",
    tags: ["pasta", "vegetarian", "cheesy", "italian", "quick"],
    ing: [["500g", "gnocchi", "shop-bought"], ["1 tbsp", "oil"], ["300g", "cherry tomatoes"], ["2 cloves", "garlic", "sliced"], ["½ tsp", "oregano"], ["½ tsp", "salt"], ["125g", "mozzarella", "torn"], ["handful", "basil"]],
    steps: [
      "Toss the gnocchi with half the oil and air fry at 200°C for 8 minutes, shaking at halfway.",
      "Toss the tomatoes and garlic with the rest of the oil, oregano and salt. Add to the gnocchi in a small metal tin or ovenproof dish that fits your basket and cook for 6 minutes until the tomatoes burst.",
      "Stir, squashing a few tomatoes to make a sauce, then top with the mozzarella.",
      "Cook for 3 minutes more until the cheese melts. Scatter with basil."
    ]
  }
);
