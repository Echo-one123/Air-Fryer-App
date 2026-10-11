'use strict';

/*
 * Trending & viral air fryer recipes – same format as recipes.js (see the notes at the top of that file).
 * Loaded after recipes.js and simply added to the RECIPES list.
 */
// Remember which recipes are the newest viral ones, so the Trending tab can show them first.
const VIRAL_START = RECIPES.length;
RECIPES.push(
  // ───────────── CHICKEN ─────────────
  {
    id: "marry-me-chicken", name: "Marry Me Chicken", emoji: "💍", cat: "chicken",
    temp: 180, time: 22, prep: 10, serves: 2, turn: "none",
    tags: ["trending", "creamy", "date night", "gluten-free"],
    ing: [["2", "chicken breast", "halved horizontally"], ["1 tsp", "paprika"], ["1 tsp", "garlic granules"], ["60g", "sun-dried tomatoes", "chopped, plus 1 tbsp of their oil"], ["2 cloves", "garlic", "crushed"], ["150ml", "cream", "double cream"], ["40g", "parmesan", "grated"], ["1 tsp", "?oregano"], ["½ tsp", "?chilli flakes"], ["handful", "?spinach"], ["½ tsp", "salt"]],
    steps: [
      "Rub the chicken with the sun-dried tomato oil, paprika, garlic granules and salt. Lay in a small ovenproof dish or foil tray that fits your basket.",
      "Cook at 180°C for 12 minutes.",
      "Stir together the cream, parmesan, sun-dried tomatoes, garlic, oregano and chilli flakes. Pour around the chicken.",
      "Cook for 8–10 minutes more until bubbling and the chicken reaches 75°C in the thickest part.",
      "Stir the spinach into the hot sauce to wilt and serve with pasta or crusty bread."
    ]
  },
  {
    id: "hot-honey-chicken-bites", name: "Hot Honey Chicken Bites", emoji: "🍯", cat: "chicken",
    temp: 200, time: 14, prep: 10, serves: 2, turn: "shake",
    tags: ["trending", "spicy", "sticky", "game day"],
    ing: [["2", "chicken breast", "cut into 3cm chunks"], ["3 tbsp", "cornflour"], ["1 tsp", "paprika"], ["1 tsp", "garlic granules"], ["½ tsp", "salt"], ["spray", "oil"], ["3 tbsp", "honey"], ["1 tbsp", "hot sauce"], ["½ tsp", "chilli flakes"]],
    steps: [
      "Toss the chicken with the cornflour, paprika, garlic granules and salt until well coated. Spray generously with oil.",
      "Spread out in a single layer and cook at 200°C for 12–14 minutes, shaking at halfway, until golden and the chicken reaches 75°C.",
      "Meanwhile warm the honey, hot sauce and chilli flakes together for 30 seconds in the microwave.",
      "Toss the hot chicken in the hot honey and serve straight away."
    ]
  },
  {
    id: "korean-fried-chicken", name: "Korean Fried Chicken", emoji: "🇰🇷", cat: "chicken",
    temp: 200, time: 22, prep: 10, serves: 2, turn: "shake",
    tags: ["trending", "spicy", "sticky", "fakeaway"],
    ing: [["600g", "chicken wings", "or boneless thigh pieces"], ["3 tbsp", "cornflour"], ["½ tsp", "salt"], ["2 tbsp", "gochujang"], ["2 tbsp", "honey"], ["1 tbsp", "soy sauce"], ["1 tsp", "rice vinegar"], ["1 clove", "garlic", "crushed"], ["1 tsp", "sesame oil"], ["1 tsp", "?sesame seeds"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Pat the chicken very dry, then toss in the cornflour and salt. Spray with oil.",
      "Cook at 200°C for 20–22 minutes, shaking at halfway, until crisp and the chicken reaches 75°C.",
      "Gently simmer the gochujang, honey, soy, rice vinegar, garlic and sesame oil in a small pan for 1–2 minutes until glossy.",
      "Toss the crispy chicken in the glaze and top with sesame seeds and spring onions."
    ]
  },
  {
    id: "bang-bang-chicken", name: "Bang Bang Chicken", emoji: "💥", cat: "chicken",
    temp: 200, time: 14, prep: 10, serves: 2, turn: "shake",
    tags: ["trending", "fakeaway", "spicy"],
    ing: [["2", "chicken breast", "cut into bite-size pieces"], ["1", "eggs", "beaten"], ["40g", "cornflour"], ["50g", "breadcrumbs", "panko if you have it"], ["½ tsp", "salt"], ["spray", "oil"], ["3 tbsp", "mayonnaise"], ["2 tbsp", "sweet chilli sauce"], ["1 tsp", "sriracha"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Season the cornflour with salt. Coat the chicken in cornflour, then egg, then breadcrumbs. Spray with oil.",
      "Cook in a single layer at 200°C for 12–14 minutes, shaking at halfway, until golden and the chicken reaches 75°C.",
      "Mix the mayonnaise, sweet chilli sauce and sriracha to make the bang bang sauce.",
      "Toss the chicken in the sauce (or serve it on the side) and scatter with spring onions."
    ]
  },
  {
    id: "nashville-hot-chicken-sandwich", name: "Nashville Hot Chicken Sandwich", emoji: "🌶️", cat: "chicken",
    temp: 200, time: 18, prep: 15, serves: 2, turn: "flip",
    tags: ["trending", "spicy", "burger night"],
    ing: [["2", "chicken thighs", "boneless, skinless"], ["100ml", "milk", "with 1 tsp lemon juice"], ["60g", "plain flour"], ["30g", "breadcrumbs"], ["1 tsp", "paprika"], ["½ tsp", "salt"], ["spray", "oil"], ["2 tbsp", "oil", "for the hot oil"], ["2 tsp", "chilli powder", "cayenne if you have it"], ["1 tsp", "brown sugar"], ["2", "burger buns", "brioche ideally"], ["4 slices", "gherkins"], ["2 tbsp", "?mayonnaise"], ["handful", "?cabbage", "shredded as slaw"]],
    steps: [
      "Soak the chicken in the milk for at least 10 minutes. Mix the flour, breadcrumbs, paprika and salt, then dredge the chicken, pressing the coating on well. Spray all over with oil.",
      "Cook at 200°C for 16–18 minutes, flipping at halfway and spraying any dry patches, until crisp and the chicken reaches 75°C.",
      "Warm the oil, chilli powder and brown sugar for 30 seconds and brush generously over the hot chicken.",
      "Toast the buns for 1 minute in the air fryer, then layer with mayo, slaw, chicken and gherkins."
    ]
  },
  {
    id: "crunchy-nut-chicken-tenders", name: "Crunchy Nut Cornflake Chicken Tenders", emoji: "🥣", cat: "chicken",
    temp: 200, time: 12, prep: 10, serves: 2, turn: "flip",
    tags: ["trending", "kids", "crunchy"],
    ing: [["300g", "chicken breast", "mini fillets or strips"], ["60g", "cornflakes", "Crunchy Nut, lightly crushed"], ["30g", "plain flour"], ["1", "eggs", "beaten"], ["½ tsp", "salt"], ["½ tsp", "paprika"], ["spray", "oil"], ["2 tbsp", "?honey", "mixed with 1 tsp mustard for dipping"], ["1 tsp", "?mustard"]],
    steps: [
      "Season the flour with salt and paprika. Coat the chicken in flour, then egg, then the crushed cornflakes, pressing them on.",
      "Spray with oil and lay in a single layer, lined with pierced baking paper if your basket sticks.",
      "Cook at 200°C for 10–12 minutes, flipping at halfway. Keep an eye out as the sugary coating browns quickly.",
      "Check the thickest tender reaches 75°C. Serve with honey mustard for dipping."
    ]
  },

  // ───────────── BEEF ─────────────
  {
    id: "smash-burger-tacos", name: "Smash Burger Tacos", emoji: "🌮", cat: "beef",
    temp: 200, time: 10, prep: 10, serves: 2, turn: "flip",
    tags: ["trending", "burger night", "viral"],
    ing: [["250g", "beef mince", "15–20% fat"], ["4", "tortilla wraps", "small/mini wraps"], ["4 slices", "cheddar"], ["½", "onion", "very finely diced"], ["½ tsp", "salt"], ["2", "gherkins", "sliced"], ["handful", "lettuce", "shredded"], ["2 tbsp", "mayonnaise"], ["1 tbsp", "tomato ketchup"], ["1 tsp", "mustard"]],
    steps: [
      "Divide the mince into 4 and press each into a very thin layer covering one side of a wrap, right to the edges. Season with salt and press a little onion in.",
      "Lay meat-side up in the basket (cook in batches) and cook at 200°C for 6 minutes.",
      "Flip so the meat side faces down, top with cheese and cook for 3–4 minutes more until the wrap is crisp and the mince reaches 75°C.",
      "Mix the mayo, ketchup and mustard into burger sauce. Fold each taco with lettuce, gherkins and a drizzle of sauce."
    ]
  },
  {
    id: "walking-tacos", name: "Walking Tacos", emoji: "🛍️", cat: "beef",
    temp: 200, time: 10, prep: 5, serves: 4, turn: "shake",
    tags: ["trending", "party", "kids", "viral"],
    ing: [["400g", "beef mince"], ["2 tbsp", "fajita seasoning", "or taco seasoning"], ["4 small bags", "tortilla chips"], ["80g", "cheddar", "grated"], ["4 tbsp", "salsa"], ["4 tbsp", "sour cream"], ["handful", "lettuce", "shredded"], ["1", "?avocado", "diced"], ["1", "?red chilli", "sliced"]],
    steps: [
      "Crumble the mince into a foil tray or ovenproof dish that fits your basket and mix in the seasoning with a splash of water.",
      "Cook at 200°C for 10 minutes, breaking up and stirring at halfway, until browned and the mince reaches 75°C.",
      "Lightly crush each bag of tortilla chips, then open it along the long side.",
      "Spoon in the mince and top with cheese, lettuce, salsa, sour cream and avocado. Eat straight from the bag with a fork."
    ]
  },

  // ───────────── FISH ─────────────
  {
    id: "bang-bang-prawns", name: "Bang Bang Prawns", emoji: "🦐", cat: "fish",
    temp: 200, time: 8, prep: 10, serves: 2, turn: "shake",
    tags: ["trending", "fakeaway", "quick"],
    ing: [["250g", "prawns", "raw king prawns, peeled"], ["30g", "cornflour"], ["1", "eggs", "beaten"], ["50g", "breadcrumbs", "panko if you have it"], ["¼ tsp", "salt"], ["spray", "oil"], ["3 tbsp", "mayonnaise"], ["2 tbsp", "sweet chilli sauce"], ["1 tsp", "sriracha"], ["1", "?lime"]],
    steps: [
      "Pat the prawns dry. Coat in salted cornflour, then egg, then breadcrumbs. Spray with oil.",
      "Cook in a single layer at 200°C for 7–8 minutes, shaking gently at halfway, until golden and the prawns are pink and reach 63°C.",
      "Stir together the mayonnaise, sweet chilli and sriracha.",
      "Toss the prawns in the sauce and serve with lime wedges, over rice or in lettuce cups."
    ]
  },
  {
    id: "cajun-honey-butter-salmon", name: "Cajun Honey Butter Salmon", emoji: "🐟", cat: "fish",
    temp: 200, time: 9, prep: 5, serves: 2, turn: "none",
    tags: ["trending", "quick", "gluten-free"],
    ing: [["2", "salmon fillets"], ["2 tsp", "cajun seasoning"], ["1 tsp", "oil"], ["25g", "butter"], ["1 tbsp", "honey"], ["1 clove", "garlic", "crushed"], ["½", "?lemon"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Pat the salmon dry, brush with oil and coat the tops and sides with cajun seasoning.",
      "Place skin-side down on pierced baking paper and cook at 200°C for 8–9 minutes, until the salmon reaches 63°C and flakes easily.",
      "Meanwhile melt the butter with the honey and garlic.",
      "Spoon the honey butter over the hot salmon, squeeze over lemon and scatter with parsley."
    ]
  },
  {
    id: "viral-salmon-rice-bowl", name: "Viral Salmon Rice Bowl", emoji: "🍚", cat: "fish",
    temp: 200, time: 9, prep: 10, serves: 2, turn: "none",
    tags: ["trending", "viral", "healthy", "leftovers"],
    ing: [["2", "salmon fillets"], ["2 tbsp", "soy sauce"], ["1 tsp", "honey"], ["1 tsp", "sesame oil"], ["300g", "rice", "cooked, ideally leftover"], ["1", "avocado", "sliced"], ["2 tbsp", "mayonnaise"], ["1 tbsp", "sriracha"], ["½", "cucumber", "sliced"], ["1 tsp", "?sesame seeds"], ["1", "?spring onions", "sliced"]],
    steps: [
      "Brush the salmon with 1 tbsp soy, the honey and sesame oil. Cook skin-side down on pierced baking paper at 200°C for 8–9 minutes until it reaches 63°C.",
      "Flake the salmon (discard the skin or crisp it up separately) and mash it into the warm rice with the remaining soy sauce.",
      "Mix the mayonnaise and sriracha.",
      "Top bowls with avocado, cucumber, sriracha mayo, sesame seeds and spring onion. Mix it all up before eating."
    ]
  },

  // ───────────── VEGGIE ─────────────
  {
    id: "hot-honey-halloumi", name: "Hot Honey Halloumi", emoji: "🧀", cat: "veggie",
    temp: 200, time: 8, prep: 5, serves: 2, turn: "flip",
    tags: ["trending", "vegetarian", "quick", "brunch"],
    ing: [["225g", "halloumi", "cut into 1cm slices"], ["1 tsp", "oil"], ["2 tbsp", "honey"], ["1 tsp", "hot sauce"], ["½ tsp", "chilli flakes"], ["1 tsp", "?thyme"], ["½", "?lemon"]],
    steps: [
      "Pat the halloumi dry and brush lightly with oil. Lay in a single layer on pierced baking paper.",
      "Cook at 200°C for 7–8 minutes, flipping at halfway, until golden on both sides.",
      "Warm the honey, hot sauce and chilli flakes together for 20 seconds.",
      "Drizzle over the hot halloumi, sprinkle with thyme and a squeeze of lemon. Serve straight away while soft."
    ]
  },
  {
    id: "cottage-cheese-flatbread", name: "Cottage Cheese Flatbread", emoji: "🫓", cat: "veggie",
    temp: 180, time: 20, prep: 5, serves: 2, turn: "flip",
    tags: ["trending", "high protein", "gluten-free", "viral"],
    ing: [["250g", "cottage cheese"], ["2", "eggs"], ["1 tsp", "?mixed herbs"], ["½ tsp", "garlic granules"], ["¼ tsp", "salt"], ["30g", "?parmesan", "grated"]],
    steps: [
      "Blend the cottage cheese and eggs until completely smooth, then stir in the herbs, garlic granules and salt.",
      "Line a cake tin or silicone liner that fits your basket with baking paper, oil it well and pour in the mix about 5mm thick. Sprinkle with parmesan.",
      "Cook at 180°C for 15 minutes until set and golden.",
      "Carefully flip onto fresh paper, peel off the old paper and cook for 4–5 minutes more. Cool for a few minutes before using as a wrap."
    ]
  },
  {
    id: "baked-feta-pasta", name: "Baked Feta Pasta", emoji: "🍝", cat: "veggie",
    temp: 200, time: 20, prep: 5, serves: 3, turn: "none",
    tags: ["trending", "vegetarian", "viral", "one pan"],
    ing: [["200g", "feta", "a whole block"], ["400g", "cherry tomatoes"], ["3 cloves", "garlic", "peeled"], ["3 tbsp", "oil", "olive oil"], ["½ tsp", "chilli flakes"], ["1 tsp", "oregano"], ["250g", "pasta"], ["handful", "?spinach"], ["¼ tsp", "salt"]],
    steps: [
      "Put the tomatoes and garlic in an ovenproof dish that fits your basket. Sit the feta in the middle, drizzle everything with oil and sprinkle over chilli, oregano and salt.",
      "Cook at 200°C for 18–20 minutes, until the tomatoes burst and the feta is soft and golden. Cook the pasta in the meantime.",
      "Squash the garlic and tomatoes and stir everything into a creamy sauce.",
      "Toss in the drained pasta with a splash of pasta water and the spinach. Season and serve."
    ]
  },
  {
    id: "rice-paper-dumplings", name: "Rice Paper Dumplings", emoji: "🥟", cat: "veggie",
    temp: 200, time: 12, prep: 20, serves: 2, turn: "flip",
    tags: ["trending", "vegetarian", "dairy-free", "viral"],
    ing: [["8 sheets", "rice paper"], ["150g", "tofu", "firm, crumbled"], ["100g", "mushrooms", "finely chopped"], ["1", "carrots", "grated"], ["2", "spring onions", "sliced"], ["1 clove", "garlic", "crushed"], ["1 tsp", "ginger", "grated"], ["2 tbsp", "soy sauce"], ["1 tsp", "sesame oil"], ["1 tbsp", "?sweet chilli sauce", "for dipping"]],
    steps: [
      "Mix the tofu, mushrooms, carrot, spring onions, garlic, ginger, 1 tbsp soy and sesame oil.",
      "Dip two sheets of rice paper in water for a few seconds, stack them, add a spoonful of filling and fold into a square parcel. Repeat.",
      "Brush with oil and lay on pierced baking paper, not touching (they stick together).",
      "Cook at 200°C for 10–12 minutes, carefully flipping at halfway, until crisp and blistered. Serve with soy sauce or sweet chilli for dipping."
    ]
  },

  // ───────────── SIDES ─────────────
  {
    id: "gochujang-green-beans", name: "Gochujang Green Beans", emoji: "🫛", cat: "sides",
    temp: 200, time: 10, prep: 5, serves: 2, turn: "shake",
    tags: ["trending", "vegan", "spicy", "quick"],
    ing: [["250g", "green beans", "trimmed"], ["1 tbsp", "oil"], ["1 tbsp", "gochujang"], ["1 tsp", "soy sauce"], ["1 tsp", "honey", "or maple syrup to keep it vegan"], ["1 clove", "garlic", "crushed"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Toss the beans with the oil and a pinch of salt.",
      "Cook at 200°C for 6 minutes, shaking at halfway.",
      "Mix the gochujang, soy, honey and garlic, toss through the beans and cook for 3–4 minutes more until blistered and sticky.",
      "Sprinkle with sesame seeds and serve."
    ]
  },
  {
    id: "corn-ribs", name: "Corn Ribs", emoji: "🌽", cat: "sides",
    temp: 200, time: 15, prep: 10, serves: 2, turn: "shake",
    tags: ["trending", "vegetarian", "bbq", "viral"],
    ing: [["2", "corn on the cob"], ["1 tbsp", "oil"], ["1 tsp", "paprika"], ["½ tsp", "garlic granules"], ["½ tsp", "salt"], ["20g", "butter", "melted"], ["1", "?lime"], ["2 tbsp", "?parmesan", "grated"]],
    steps: [
      "Carefully cut each cob in half widthways, stand on the flat end and cut lengthways into quarters with a heavy, sharp knife.",
      "Toss with oil, paprika, garlic granules and salt.",
      "Cook at 200°C for 13–15 minutes, shaking at halfway, until the ribs curl and char at the edges.",
      "Brush with melted butter, squeeze over lime and sprinkle with parmesan."
    ]
  },
  {
    id: "crispy-potato-stacks", name: "Crispy Potato Stacks", emoji: "🥔", cat: "sides",
    temp: 190, time: 25, prep: 15, serves: 4, turn: "none",
    tags: ["trending", "vegetarian", "dinner party", "viral"],
    ing: [["500g", "potatoes", "Maris Piper, peeled"], ["30g", "butter", "melted"], ["1 tbsp", "oil"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "thyme"], ["30g", "parmesan", "grated"], ["½ tsp", "salt"]],
    steps: [
      "Slice the potatoes paper-thin (a mandoline is easiest). Toss with the butter, oil, garlic, thyme, parmesan and salt.",
      "Stack the slices into a greased silicone muffin tray or silicone cases, about 2cm higher than the rim as they shrink.",
      "Cook at 190°C for 20–25 minutes until golden on top and a knife slides through easily.",
      "Rest for 2 minutes, then turn out and sprinkle with a little more parmesan and salt."
    ]
  },
  {
    id: "blooming-onion", name: "Blooming Onion", emoji: "🧅", cat: "sides",
    temp: 190, time: 20, prep: 15, serves: 2, turn: "none",
    tags: ["trending", "party", "sharing"],
    ing: [["1 large", "onion", "a big Spanish onion"], ["1", "eggs", "beaten with 2 tbsp milk"], ["2 tbsp", "milk"], ["60g", "plain flour"], ["40g", "breadcrumbs"], ["1 tsp", "paprika"], ["½ tsp", "garlic granules"], ["½ tsp", "salt"], ["spray", "oil"], ["3 tbsp", "mayonnaise"], ["1 tbsp", "tomato ketchup"], ["½ tsp", "?hot sauce"]],
    steps: [
      "Peel the onion and trim the top, keeping the root intact. Cut from 1cm below the root down to the board into 12–16 wedges, then gently open out the petals.",
      "Mix the flour, breadcrumbs, paprika, garlic granules and salt. Dust the onion all over with it, dip in the egg mix, then coat again, getting between the petals.",
      "Spray generously with oil and place on pierced baking paper. Cook at 190°C for 18–20 minutes until golden and the centre is tender.",
      "Mix the mayo, ketchup and hot sauce for dipping and serve in the middle of the onion."
    ]
  },
  {
    id: "smashed-brussels-sprouts", name: "Garlic Parmesan Smashed Brussels Sprouts", emoji: "🥬", cat: "sides",
    temp: 200, time: 12, prep: 15, serves: 3, turn: "flip",
    tags: ["trending", "vegetarian", "christmas", "crispy"],
    ing: [["400g", "brussels sprouts", "trimmed"], ["2 tbsp", "oil"], ["1 tsp", "garlic granules"], ["40g", "parmesan", "grated"], ["½ tsp", "salt"], ["½", "?lemon"]],
    steps: [
      "Boil or microwave the sprouts for 6–8 minutes until just tender. Drain and steam-dry.",
      "Press each sprout flat with the bottom of a glass. Brush with oil and season with garlic granules and salt.",
      "Cook at 200°C for 10–12 minutes, flipping at halfway, sprinkling with parmesan for the last 3 minutes.",
      "Serve crisp, with a squeeze of lemon."
    ]
  },

  // ───────────── SNACKS ─────────────
  {
    id: "pasta-chips", name: "Pasta Chips", emoji: "🍝", cat: "snacks",
    temp: 200, time: 12, prep: 15, serves: 2, turn: "shake",
    tags: ["trending", "vegetarian", "viral", "crunchy"],
    ing: [["150g", "pasta", "rigatoni, farfalle or penne"], ["1 tbsp", "oil"], ["25g", "parmesan", "grated"], ["1 tsp", "garlic granules"], ["1 tsp", "mixed herbs"], ["½ tsp", "salt"], ["100ml", "?passata", "warmed, or marinara for dipping"]],
    steps: [
      "Boil the pasta in salted water until al dente. Drain well and let it steam-dry for 5 minutes.",
      "Toss with oil, parmesan, garlic granules, herbs and salt.",
      "Cook at 200°C for 10–12 minutes, shaking every few minutes, until golden and crunchy. They crisp up more as they cool.",
      "Serve with warm passata or your favourite dip."
    ]
  },
  {
    id: "dorito-mozzarella-sticks", name: "Dorito-Crusted Mozzarella Sticks", emoji: "🧀", cat: "snacks",
    temp: 200, time: 6, prep: 15, serves: 2, turn: "none",
    tags: ["trending", "vegetarian", "party", "freezer"],
    ing: [["8", "mozzarella", "string cheese sticks, or a firm block cut into sticks"], ["30g", "plain flour"], ["1", "eggs", "beaten"], ["70g", "tortilla chips", "Doritos, crushed fine"], ["spray", "oil"], ["4 tbsp", "?salsa", "for dipping"]],
    steps: [
      "Coat each stick in flour, then egg, then crushed Doritos. Dip in egg and Doritos a second time for a coating that won't leak.",
      "Freeze for at least 1 hour – this stops them melting before the coating crisps.",
      "Spray with oil and cook from frozen on pierced baking paper at 200°C for 5–6 minutes, until crisp. Watch closely – stop as soon as you see any cheese peeking out.",
      "Leave for 1 minute (the cheese is very hot), then serve with salsa."
    ]
  },
  {
    id: "folded-tortilla-wrap", name: "Folded Tortilla Wrap Hack", emoji: "🌯", cat: "snacks",
    temp: 200, time: 6, prep: 5, serves: 1, turn: "flip",
    tags: ["trending", "viral", "lunch", "quick"],
    ing: [["1", "tortilla wraps", "large"], ["2 slices", "ham"], ["40g", "cheddar", "grated"], ["2 tbsp", "salsa"], ["handful", "spinach"], ["1 tbsp", "?cream cheese"]],
    steps: [
      "Cut from the centre of the wrap straight to the edge. Imagine it in quarters and add one filling to each: ham, cheese, salsa with cream cheese, spinach.",
      "Starting at the quarter left of the cut, fold over quarter by quarter until you have a layered triangle.",
      "Brush lightly with oil and cook at 200°C for 5–6 minutes, flipping at halfway, until crisp and the cheese has melted. Weigh it down with a small rack if it pops open."
    ]
  },

  // ───────────── BREAKFAST ─────────────
  {
    id: "chilli-oil-fried-eggs", name: "Chilli Oil Crispy Fried Eggs", emoji: "🍳", cat: "breakfast",
    temp: 180, time: 7, prep: 2, serves: 1, turn: "none",
    tags: ["trending", "vegetarian", "quick", "viral"],
    ing: [["2", "eggs"], ["1 tbsp", "chilli oil", "with plenty of crispy bits"], ["1 tsp", "?soy sauce"], ["1", "?spring onions", "sliced"], ["2 slices", "?bread", "toasted, or rice"]],
    steps: [
      "Put the chilli oil in a small ovenproof dish or ramekin and heat at 180°C for 2 minutes until sizzling.",
      "Carefully crack in the eggs and cook for 4–5 minutes, until the whites are set and lacy at the edges and the yolks still runny.",
      "Drizzle with soy sauce, scatter with spring onions and serve on toast or rice."
    ]
  },
  {
    id: "cheesy-beans-on-toast", name: "Viral Cheesy Beans on Toast", emoji: "🫘", cat: "breakfast",
    temp: 190, time: 8, prep: 3, serves: 2, turn: "none",
    tags: ["trending", "vegetarian", "comfort food", "budget"],
    ing: [["2 slices", "bread", "thick sourdough"], ["15g", "butter"], ["400g tin", "baked beans", "drained of some sauce"], ["80g", "cheddar", "grated"], ["½ tsp", "?worcestershire sauce"], ["pinch", "?chilli flakes"]],
    steps: [
      "Butter the bread and press the centre of each slice down with the back of a spoon to make a well.",
      "Spoon the beans into the wells, add a dash of Worcestershire sauce and pile the cheese on top.",
      "Cook at 190°C for 7–8 minutes until the toast is golden and the cheese is bubbling. Sprinkle with chilli flakes."
    ]
  },
  {
    id: "cottage-cheese-egg-bites", name: "Cottage Cheese Egg Bites", emoji: "🥚", cat: "breakfast",
    temp: 160, time: 14, prep: 5, serves: 2, turn: "none",
    tags: ["trending", "high protein", "gluten-free", "meal prep"],
    ing: [["4", "eggs"], ["150g", "cottage cheese"], ["30g", "cheddar", "grated"], ["2 slices", "?bacon", "cooked and chopped"], ["handful", "?spinach", "chopped"], ["4", "?cherry tomatoes", "quartered"], ["¼ tsp", "salt"]],
    steps: [
      "Blend the eggs, cottage cheese, cheddar and salt until smooth and frothy.",
      "Divide the fillings between 6 greased silicone muffin cases, then pour over the egg mix to three-quarters full.",
      "Cook at 160°C for 12–14 minutes until just set with a slight wobble.",
      "Rest for 2 minutes before popping out. Keep in the fridge for up to 3 days."
    ]
  },
  {
    id: "baked-oats", name: "Baked Oats", emoji: "🥣", cat: "breakfast",
    temp: 180, time: 12, prep: 5, serves: 1, turn: "none",
    tags: ["trending", "vegetarian", "healthy", "viral"],
    ing: [["40g", "oats"], ["1", "bananas", "ripe, mashed"], ["1", "eggs"], ["60ml", "milk"], ["½ tsp", "baking powder"], ["½ tsp", "cinnamon"], ["handful", "?blueberries"], ["1 tbsp", "?chocolate spread", "or a square of dark chocolate"], ["1 tbsp", "?greek yoghurt", "to serve"]],
    steps: [
      "Blend the oats, banana, egg, milk, baking powder and cinnamon until smooth (or just mash and mix for a rougher texture).",
      "Pour into a greased ramekin or small ovenproof dish. Press in the blueberries and a blob of chocolate spread in the middle.",
      "Cook at 180°C for 10–12 minutes until risen and a skewer comes out mostly clean (a gooey middle is fine).",
      "Top with a spoonful of Greek yoghurt."
    ]
  },
  {
    id: "croissant-french-toast-bake", name: "Croissant French Toast Bake", emoji: "🥐", cat: "breakfast",
    temp: 160, time: 18, prep: 10, serves: 2, turn: "none",
    tags: ["trending", "vegetarian", "brunch", "treat"],
    ing: [["3", "croissants", "day-old, torn into chunks"], ["2", "eggs"], ["150ml", "milk"], ["1 tbsp", "sugar"], ["½ tsp", "vanilla extract"], ["½ tsp", "cinnamon"], ["handful", "?strawberries", "sliced"], ["1 tbsp", "?maple syrup", "to serve"], ["1 tsp", "?icing sugar", "for dusting"]],
    steps: [
      "Pack the croissant pieces into a greased ovenproof dish that fits your basket.",
      "Whisk the eggs, milk, sugar, vanilla and cinnamon and pour over. Leave to soak for 5 minutes, pressing the croissants down.",
      "Cook at 160°C for 15–18 minutes until set in the middle and golden on top. Cover with foil tucked in tightly so it can't fly into the element if it browns too fast.",
      "Top with strawberries, a drizzle of maple syrup and a dusting of icing sugar."
    ]
  },
  {
    id: "two-ingredient-bagels", name: "Two-Ingredient Bagels", emoji: "🥯", cat: "breakfast",
    temp: 170, time: 16, prep: 15, serves: 4, turn: "flip",
    tags: ["trending", "vegetarian", "high protein", "viral"],
    ing: [["150g", "self-raising flour", "plus extra for dusting"], ["150g", "greek yoghurt", "thick, full-fat"], ["1", "?eggs", "beaten, for glazing"], ["1 tbsp", "?sesame seeds"]],
    steps: [
      "Mix the flour and yoghurt into a soft dough, then knead on a floured surface for a minute until smooth. Add a little more flour if sticky.",
      "Divide into 4, roll each into a 20cm rope and join the ends into a ring.",
      "Brush with beaten egg, sprinkle with sesame seeds and place on pierced baking paper.",
      "Cook at 170°C for 14–16 minutes, flipping at 10 minutes, until golden and they sound hollow when tapped. Cool for 10 minutes before slicing."
    ]
  },

  // ───────────── DESSERTS ─────────────
  {
    id: "smores-dip", name: "S'mores Dip", emoji: "🔥", cat: "desserts",
    temp: 180, time: 6, prep: 3, serves: 4, turn: "none",
    tags: ["trending", "sharing", "kids", "treat"],
    ing: [["150g", "dark chocolate", "or milk chocolate, broken up"], ["150g", "marshmallows"], ["10", "digestive biscuits", "for dipping"]],
    steps: [
      "Scatter the chocolate over the base of a small ovenproof dish that fits your basket.",
      "Cover completely with marshmallows, packed tightly side by side.",
      "Cook at 180°C for 5–6 minutes until the marshmallows are puffed and toasted. Watch closely – they go from golden to burnt quickly.",
      "Serve straight away with digestive biscuits for dipping. The dish will be very hot."
    ]
  },
  {
    id: "yoghurt-doughnuts", name: "Two-Ingredient Yoghurt Doughnuts", emoji: "🍩", cat: "desserts",
    temp: 180, time: 8, prep: 15, serves: 4, turn: "flip",
    tags: ["trending", "vegetarian", "viral", "kids"],
    ing: [["150g", "self-raising flour"], ["150g", "greek yoghurt"], ["20g", "?butter", "melted, for brushing"], ["3 tbsp", "?sugar", "mixed with ½ tsp cinnamon"], ["½ tsp", "?cinnamon"]],
    steps: [
      "Mix the flour and yoghurt into a soft dough and knead briefly on a floured surface.",
      "Pat out to 2cm thick and cut out rings (or roll into balls for doughnut bites).",
      "Place on pierced baking paper and cook at 180°C for 7–8 minutes, flipping at halfway, until golden and cooked through.",
      "Brush with melted butter while warm and roll in cinnamon sugar."
    ]
  },
  {
    id: "dubai-pistachio-filo-cups", name: "Dubai-Style Pistachio Chocolate Filo Cups", emoji: "🍫", cat: "desserts",
    temp: 180, time: 6, prep: 15, serves: 6, turn: "none",
    tags: ["trending", "viral", "treat", "vegetarian"],
    ing: [["3 sheets", "filo pastry", "shredded finely, like kataifi"], ["25g", "butter", "melted"], ["100g", "pistachios", "blitzed to a paste, or 4 tbsp pistachio cream"], ["2 tbsp", "condensed milk"], ["150g", "dark chocolate", "or milk chocolate, melted"]],
    steps: [
      "Toss the shredded filo with the melted butter, spread on pierced baking paper and cook at 180°C for 5–6 minutes, stirring at halfway, until golden and crisp. Watch it closely.",
      "Mix the toasted filo with the pistachio paste, cream and icing sugar.",
      "Brush 6 silicone muffin cases with melted chocolate and chill for 10 minutes. Fill with the pistachio crunch and seal with more chocolate.",
      "Chill for 30 minutes until set, then pop out of the cases."
    ]
  },
  {
    id: "mini-biscoff-cheesecakes", name: "Mini Biscoff Cheesecakes", emoji: "🍰", cat: "desserts",
    temp: 150, time: 15, prep: 15, serves: 4, turn: "none",
    tags: ["trending", "vegetarian", "make ahead", "treat"],
    ing: [["8", "biscoff", "biscuits, crushed, plus extra to decorate"], ["20g", "butter", "melted"], ["200g", "cream cheese", "full-fat"], ["50g", "sugar"], ["1", "eggs"], ["½ tsp", "vanilla extract"], ["2 tbsp", "biscoff", "spread, warmed"]],
    steps: [
      "Mix the crushed biscuits with the butter and press into the bottom of 4 ramekins or silicone cases.",
      "Beat the cream cheese, sugar, egg and vanilla until smooth, then spoon over the bases.",
      "Cook at 150°C for 13–15 minutes until set at the edges with a slight wobble in the middle.",
      "Cool, then chill for at least 2 hours. Top with warmed Biscoff spread and a crumbled biscuit."
    ]
  }
);
const VIRAL_IDS = new Set(RECIPES.slice(VIRAL_START).map(r => r.id));
