'use strict';
/* Wraps: veggie, breakfast, snack & sweet – same format as recipes.js. */
RECIPES.push(
  // ───────────── VEGGIE WRAPS ─────────────
  { id: "wrap-halloumi-roasted-veg", name: "Halloumi & Roasted Veg Wrap", emoji: "🌯", cat: "wraps", temp: 200, time: 15, prep: 10, serves: 2, turn: "shake",
    tags: ["wraps", "vegetarian", "lunch"],
    ing: [["2", "tortilla wraps", "large"], ["225g", "halloumi", "sliced"], ["1", "bell peppers", "sliced"], ["1", "courgette", "sliced into half-moons"], ["1", "red onion", "cut into wedges"], ["1 tbsp", "oil"], ["1 tsp", "mixed herbs"], ["4 tbsp", "hummus"], ["1 handful", "?spinach"], ["1 tsp", "?honey"]],
    steps: [
      "Toss the pepper, courgette and onion with the oil, herbs, salt and pepper. Air fry at 200°C for 8 minutes, shaking halfway.",
      "Add the halloumi slices on top and cook for 5 minutes more until golden. Drizzle the halloumi with honey if you like.",
      "Spread each wrap with hummus, add spinach, the veg and halloumi, then roll up tightly, tucking in the ends.",
      "Return seam-side down, pin with a cocktail stick, and toast for 2 minutes until crisp. Halve and serve."
    ] },
  { id: "wrap-falafel-hummus", name: "Falafel Wrap with Hummus", emoji: "🧆", cat: "wraps", temp: 190, time: 16, prep: 20, serves: 2, turn: "flip",
    tags: ["wraps", "vegan", "lunch"],
    ing: [["400g tin", "chickpeas", "drained and patted very dry"], ["½", "onion", "roughly chopped"], ["2 cloves", "garlic"], ["1 small bunch", "fresh coriander"], ["1 tsp", "cumin"], ["1 tsp", "ground coriander"], ["2 tbsp", "gram flour", "or plain flour"], ["spray", "oil"], ["2", "tortilla wraps", "large"], ["4 tbsp", "hummus"], ["1 handful", "lettuce", "shredded"], ["½", "cucumber", "sliced"], ["2", "tomatoes", "sliced"], ["1 tbsp", "?hot sauce"]],
    steps: [
      "Blitz the chickpeas, onion, garlic, coriander, spices, flour and a pinch of salt until it holds together. Shape into 8 small patties.",
      "Spray with oil and air fry at 190°C for 14 minutes, flipping halfway, until crisp and golden.",
      "Warm the wraps in the basket for 1 minute. Spread with hummus, add lettuce, cucumber, tomato and the falafel.",
      "Add a splash of hot sauce, roll up tightly and serve straight away."
    ] },
  { id: "wrap-paneer-tikka", name: "Paneer Tikka Wrap", emoji: "🌯", cat: "wraps", temp: 200, time: 14, prep: 15, serves: 2, turn: "shake",
    tags: ["wraps", "vegetarian", "lunch", "fakeaway"],
    ing: [["225g", "paneer", "cut into cubes"], ["2 tbsp", "tikka paste"], ["3 tbsp", "greek yoghurt"], ["1", "bell peppers", "cut into chunks"], ["1", "red onion", "cut into chunks"], ["spray", "oil"], ["2", "tortilla wraps", "large"], ["1 handful", "lettuce", "shredded"], ["2 tbsp", "?mango chutney"], ["1 tbsp", "?mint sauce", "stirred into extra yoghurt"]],
    steps: [
      "Mix the tikka paste and yoghurt, then coat the paneer, pepper and onion. Leave for 10 minutes if you have time.",
      "Spray with oil and air fry at 200°C for 12 minutes, shaking halfway, until charred at the edges.",
      "Spread the wraps with mango chutney, add lettuce and the paneer tikka, drizzle with minty yoghurt and roll up.",
      "Toast seam-side down for 2 minutes, pinned with a cocktail stick, then slice and serve."
    ] },
  { id: "wrap-sweet-potato-black-bean-burrito", name: "Sweet Potato & Black Bean Burrito", emoji: "🌯", cat: "wraps", temp: 200, time: 22, prep: 10, serves: 2, turn: "shake",
    tags: ["wraps", "vegetarian", "lunch", "batch cook"],
    ing: [["1 large", "sweet potatoes", "peeled and diced 1.5cm"], ["1 tbsp", "oil"], ["2 tsp", "fajita seasoning"], ["400g tin", "black beans", "drained"], ["100g", "sweetcorn"], ["60g", "cheddar", "grated"], ["3 tbsp", "salsa"], ["2", "tortilla wraps", "large"], ["2 tbsp", "?sour cream"], ["1", "?avocado", "sliced"]],
    steps: [
      "Toss the sweet potato with oil, fajita seasoning and salt. Air fry at 200°C for 15 minutes, shaking halfway, until tender.",
      "Stir in the black beans and sweetcorn and cook for 3 minutes more to warm through.",
      "Pile onto the wraps with cheese, salsa, sour cream and avocado. Fold in the sides and roll into tight burritos.",
      "Put back seam-side down, weigh down with a metal rack, and toast for 3–4 minutes until golden."
    ] },
  { id: "wrap-bang-bang-cauliflower", name: "Bang Bang Cauliflower Wrap", emoji: "🥦", cat: "wraps", temp: 200, time: 18, prep: 15, serves: 2, turn: "shake",
    tags: ["wraps", "vegetarian", "lunch"],
    ing: [["½", "cauliflower", "cut into small florets"], ["50g", "plain flour"], ["1", "eggs", "beaten"], ["60g", "breadcrumbs"], ["1 tsp", "garlic granules"], ["spray", "oil"], ["3 tbsp", "mayonnaise"], ["2 tbsp", "sweet chilli sauce"], ["1 tsp", "sriracha"], ["2", "tortilla wraps", "large"], ["1 handful", "lettuce", "shredded"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Dust the florets in flour, dip in egg, then coat in breadcrumbs mixed with garlic granules and salt. Spray well with oil.",
      "Air fry at 200°C for 16–18 minutes, shaking halfway, until crisp and tender.",
      "Mix the mayonnaise, sweet chilli sauce and sriracha. Toss half through the hot cauliflower.",
      "Fill the wraps with lettuce, cauliflower, spring onion and the rest of the sauce. Roll up and serve."
    ] },
  { id: "wrap-sweet-chilli-tofu", name: "Crispy Sweet Chilli Tofu Wrap", emoji: "🌯", cat: "wraps", temp: 200, time: 16, prep: 15, serves: 2, turn: "shake",
    tags: ["wraps", "vegan", "lunch"],
    ing: [["280g", "tofu", "extra-firm, pressed and cubed"], ["1 tbsp", "soy sauce"], ["1 tbsp", "cornflour"], ["spray", "oil"], ["3 tbsp", "sweet chilli sauce"], ["2", "tortilla wraps", "large"], ["1", "carrots", "grated"], ["½", "cucumber", "cut into matchsticks"], ["1 handful", "lettuce", "shredded"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Toss the tofu in soy sauce, then in cornflour until coated. Spray with oil.",
      "Air fry at 200°C for 14 minutes, shaking halfway, until crisp on all sides.",
      "Toss the hot tofu in sweet chilli sauce, return to the basket and cook for 2 minutes more to glaze.",
      "Fill the wraps with lettuce, carrot, cucumber and tofu, scatter with sesame seeds and roll up."
    ] },
  { id: "wrap-spinach-feta-toasted", name: "Spinach & Feta Toasted Wrap", emoji: "🥬", cat: "wraps", temp: 190, time: 5, prep: 10, serves: 2, turn: "flip",
    tags: ["wraps", "vegetarian", "lunch", "quick"],
    ing: [["2", "tortilla wraps", "large"], ["100g", "spinach"], ["100g", "feta", "crumbled"], ["50g", "mozzarella", "grated"], ["1 clove", "garlic", "crushed"], ["6", "?sun-dried tomatoes", "chopped"], ["spray", "oil"]],
    steps: [
      "Wilt the spinach with a splash of boiling water, squeeze out every drop of liquid, then mix with the feta, mozzarella, garlic, sun-dried tomatoes and black pepper.",
      "Spread over one half of each wrap and fold over into a half-moon (or use the folded-wrap quarter cut).",
      "Spray both sides with oil and air fry at 190°C for 5 minutes, weighed down with a metal rack and flipped halfway, until crisp and melted."
    ] },
  { id: "wrap-mexican-bean-chimichangas", name: "Mexican Bean Chimichangas", emoji: "🌯", cat: "wraps", temp: 190, time: 10, prep: 15, serves: 4, turn: "flip",
    tags: ["wraps", "vegetarian", "fakeaway", "family"],
    ing: [["400g tin", "black beans", "drained"], ["400g tin", "baked beans", "or refried beans"], ["1", "onion", "finely chopped"], ["1 tsp", "cumin"], ["1 tsp", "chilli powder"], ["1 tbsp", "oil"], ["100g", "cheddar", "grated"], ["4", "tortilla wraps", "large"], ["4 tbsp", "?salsa"], ["4 tbsp", "?sour cream"]],
    steps: [
      "Fry the onion in the oil until soft, add the spices and both tins of beans, and mash roughly until thick. Cool slightly.",
      "Spoon onto the wraps, top with cheese, fold in the sides and roll into tight parcels.",
      "Brush or spray all over with oil and place seam-side down. Air fry at 190°C for 10 minutes, flipping halfway, until crisp and golden.",
      "Serve with salsa and sour cream."
    ] },
  { id: "wrap-veggie-enchiladas", name: "Veggie Enchiladas", emoji: "🫔", cat: "wraps", temp: 180, time: 22, prep: 15, serves: 4, turn: "none",
    tags: ["wraps", "vegetarian", "family", "dinner"],
    ing: [["2", "bell peppers", "sliced"], ["1", "courgette", "diced"], ["1", "red onion", "sliced"], ["1 tbsp", "oil"], ["2 tsp", "fajita seasoning"], ["400g tin", "black beans", "drained"], ["300g", "passata"], ["1 tsp", "?chilli powder"], ["120g", "cheddar", "grated"], ["4", "tortilla wraps", "small"], ["1 handful", "?fresh coriander", "chopped"]],
    steps: [
      "Toss the peppers, courgette and onion with the oil and fajita seasoning. Air fry at 200°C for 10 minutes, shaking halfway, then stir in the beans.",
      "Season the passata with chilli powder and salt. Spread a few spoonfuls in an oven-safe dish that fits your basket.",
      "Fill and roll the wraps, sit them seam-side down in the dish, pour over the remaining passata and scatter with cheese.",
      "Air fry at 180°C for 12 minutes until bubbling and golden. Top with coriander."
    ] },
  { id: "wrap-mushroom-cheese-quesadilla", name: "Mushroom & Cheese Quesadilla", emoji: "🍄", cat: "wraps", temp: 190, time: 14, prep: 5, serves: 2, turn: "flip",
    tags: ["wraps", "vegetarian", "lunch", "quick"],
    ing: [["250g", "mushrooms", "sliced"], ["1 clove", "garlic", "crushed"], ["1 tsp", "oil"], ["½ tsp", "thyme"], ["2", "tortilla wraps", "large"], ["80g", "cheddar", "grated"], ["50g", "mozzarella", "grated"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Toss the mushrooms with oil, garlic, thyme and salt. Air fry at 200°C for 8 minutes, shaking halfway, until browned and dry.",
      "Scatter cheese, mushrooms and spring onion over half of each wrap and fold over.",
      "Weigh down with a metal rack and air fry at 190°C for 6 minutes, flipping halfway, until crisp. Cut into wedges."
    ] },

  // ───────────── BREAKFAST ─────────────
  { id: "wrap-egg-cheese-breakfast-quesadilla", name: "Egg & Cheese Breakfast Quesadilla", emoji: "🍳", cat: "wraps", temp: 180, time: 10, prep: 5, serves: 1, turn: "flip",
    tags: ["wraps", "vegetarian", "breakfast", "quick"],
    ing: [["2", "eggs"], ["1 tbsp", "milk"], ["1", "tortilla wraps", "large"], ["40g", "cheddar", "grated"], ["1 small handful", "?spinach"], ["1", "?spring onions", "sliced"], ["1 tsp", "?hot sauce"], ["1 tsp", "butter"]],
    steps: [
      "Whisk the eggs with milk, salt and pepper. Pour into a buttered small oven-safe dish and air fry at 160°C for 5–6 minutes, stirring once, until just set.",
      "Spread the egg over half the wrap, top with cheese, spinach and spring onion, add hot sauce and fold over.",
      "Weigh down with a metal rack and air fry at 180°C for 4 minutes, flipping halfway, until golden and melted."
    ] },
  { id: "wrap-baked-egg-tortilla-cups", name: "Baked Egg Tortilla Cups", emoji: "🥚", cat: "wraps", temp: 170, time: 12, prep: 5, serves: 2, turn: "none",
    tags: ["wraps", "vegetarian", "breakfast", "kids"],
    ing: [["2", "tortilla wraps", "small"], ["4", "eggs"], ["30g", "cheddar", "grated"], ["4", "cherry tomatoes", "quartered"], ["1", "?spring onions", "sliced"], ["spray", "oil"]],
    steps: [
      "Cut two 12cm circles from each wrap. Spray 4 ramekins with oil and press a circle into each to make a cup.",
      "Air fry the empty cups at 170°C for 2 minutes to firm up.",
      "Add tomatoes and spring onion, crack an egg into each and top with cheese, salt and pepper.",
      "Cook at 170°C for 9–10 minutes until the whites are set and the yolks are as runny as you like."
    ] },
  { id: "wrap-mini-tortilla-quiches", name: "Mini Tortilla Quiches", emoji: "🥧", cat: "wraps", temp: 170, time: 14, prep: 10, serves: 4, turn: "none",
    tags: ["wraps", "vegetarian", "breakfast", "kids", "lunchbox"],
    ing: [["3", "tortilla wraps", "small"], ["4", "eggs"], ["100ml", "milk"], ["60g", "cheddar", "grated"], ["½", "bell peppers", "finely diced"], ["2", "spring onions", "sliced"], ["1 handful", "?spinach", "chopped"], ["spray", "oil"]],
    steps: [
      "Cut 10cm circles from the wraps and press into oiled silicone muffin cases or ramekins.",
      "Whisk the eggs, milk, salt and pepper. Divide the pepper, spring onion, spinach and cheese between the cases, then pour over the egg.",
      "Air fry at 170°C for 12–14 minutes until puffed and set in the middle. Cool for 5 minutes before turning out."
    ] },

  // ───────────── SNACKS & LIGHT BITES ─────────────
  { id: "wrap-tortilla-pizza", name: "Tortilla Pizza (Wrap Pizza)", emoji: "🍕", cat: "wraps", temp: 190, time: 6, prep: 5, serves: 1, turn: "none",
    tags: ["wraps", "vegetarian", "kids", "quick", "trending"],
    ing: [["1", "tortilla wraps", "large or small to fit your basket"], ["2 tbsp", "tomato puree", "or passata"], ["½ tsp", "oregano"], ["50g", "mozzarella", "grated"], ["4", "?cherry tomatoes", "sliced"], ["3", "?mushrooms", "thinly sliced"], ["1 tsp", "?chilli flakes"]],
    steps: [
      "Air fry the plain wrap at 190°C for 2 minutes until lightly crisp, weighed down with a metal rack so it can't lift into the element.",
      "Spread with tomato puree, sprinkle with oregano and top with cheese and your toppings — keep them light so the base stays crisp.",
      "Cook at 190°C for 3–4 minutes (rack on again if your fan is strong) until melted and bubbling. Add chilli flakes and slice."
    ] },
  { id: "wrap-crispy-tortilla-taco-bowls", name: "Crispy Tortilla Taco Bowls", emoji: "🥗", cat: "wraps", temp: 180, time: 6, prep: 10, serves: 2, turn: "none",
    tags: ["wraps", "vegetarian", "lunch", "trending"],
    ing: [["2", "tortilla wraps", "large"], ["spray", "oil"], ["400g tin", "black beans", "drained and warmed"], ["1 handful", "lettuce", "shredded"], ["100g", "sweetcorn"], ["6", "cherry tomatoes", "quartered"], ["40g", "cheddar", "grated"], ["1", "?avocado", "diced"], ["2 tbsp", "?salsa"], ["2 tbsp", "?sour cream"]],
    steps: [
      "Spray both sides of each wrap with oil. Drape over an upturned oven-safe bowl (or press into a larger oven-safe bowl) in the basket.",
      "Air fry at 180°C for 5–6 minutes until crisp and holding its shape. Let cool for 2 minutes before lifting off.",
      "Fill with lettuce, warm beans, sweetcorn, tomatoes, cheese and avocado. Top with salsa and sour cream."
    ] },
  { id: "wrap-homemade-hard-taco-shells", name: "Homemade Hard Taco Shells", emoji: "🌮", cat: "wraps", temp: 190, time: 6, prep: 5, serves: 4, turn: "none",
    tags: ["wraps", "vegan", "kids", "family"],
    ing: [["8", "tortilla wraps", "small"], ["spray", "oil"], ["pinch", "salt"]],
    steps: [
      "Warm the wraps for 20 seconds in the microwave so they bend without cracking. Spray both sides with oil and sprinkle with salt.",
      "Drape each one over two bars of a rack (or between upturned ramekins) to form a U shape, open side down.",
      "Air fry at 190°C for 5–6 minutes in batches until crisp and golden. They firm up more as they cool."
    ] },
  { id: "wrap-cheese-onion-toasted", name: "Cheese & Onion Toasted Wrap", emoji: "🧀", cat: "wraps", temp: 190, time: 5, prep: 5, serves: 2, turn: "flip",
    tags: ["wraps", "vegetarian", "kids", "quick", "lunch"],
    ing: [["2", "tortilla wraps", "large"], ["120g", "cheddar", "grated"], ["½", "onion", "very finely chopped"], ["2", "?spring onions", "sliced"], ["1 tbsp", "mayonnaise"], ["spray", "oil"]],
    steps: [
      "Mix the cheese, onion, spring onion and mayonnaise with plenty of black pepper.",
      "Spread over half of each wrap, fold over and press flat. Spray the outsides with oil.",
      "Weigh down with a metal rack and air fry at 190°C for 5 minutes, flipping halfway, until golden and oozing."
    ] },
  { id: "wrap-caprese", name: "Caprese Wrap", emoji: "🍅", cat: "wraps", temp: 190, time: 4, prep: 5, serves: 2, turn: "flip",
    tags: ["wraps", "vegetarian", "lunch", "quick"],
    ing: [["2", "tortilla wraps", "large"], ["2 tbsp", "pesto"], ["125g ball", "mozzarella", "sliced and patted dry"], ["2", "tomatoes", "sliced"], ["1 handful", "?spinach"], ["1 tsp", "?balsamic vinegar"]],
    steps: [
      "Spread the wraps with pesto. Layer mozzarella, tomato and spinach down the middle and season with salt and pepper.",
      "Fold in the ends and roll up tightly. Pin with a cocktail stick.",
      "Air fry seam-side down at 190°C for 4 minutes, turning halfway, until crisp and the mozzarella starts to melt. Drizzle with balsamic."
    ] },

  // ───────────── SWEET ─────────────
  { id: "wrap-churro-tortilla-crisps", name: "Churro Tortilla Crisps", emoji: "🍩", cat: "wraps", temp: 180, time: 6, prep: 5, serves: 4, turn: "shake",
    tags: ["wraps", "sweet", "vegetarian", "kids", "trending"],
    ing: [["4", "tortilla wraps", "small"], ["30g", "butter", "melted"], ["3 tbsp", "sugar"], ["1 tsp", "cinnamon"], ["3 tbsp", "?chocolate spread", "warmed, for dipping"]],
    steps: [
      "Brush the wraps with melted butter and cut each into 8 triangles.",
      "Air fry in a single layer at 180°C for 5–6 minutes, shaking halfway, until crisp and golden.",
      "Toss straight away in the cinnamon sugar while still warm. Serve with warm chocolate spread for dipping."
    ] },
  { id: "wrap-nutella-banana", name: "Nutella & Banana Wrap", emoji: "🍌", cat: "wraps", temp: 180, time: 4, prep: 3, serves: 1, turn: "flip",
    tags: ["wraps", "sweet", "vegetarian", "kids", "quick"],
    ing: [["1", "tortilla wraps", "large"], ["2 tbsp", "chocolate spread"], ["1", "bananas", "sliced"], ["1 tsp", "butter", "melted"], ["1 tsp", "?icing sugar"]],
    steps: [
      "Spread the wrap with chocolate spread, layer the banana down the middle, then fold in the ends and roll up.",
      "Brush with melted butter and air fry seam-side down at 180°C for 4 minutes, pinned with a cocktail stick and turned halfway.",
      "Dust with icing sugar and slice into pieces. Careful — the filling is very hot."
    ] },
  { id: "wrap-apple-pie", name: "Apple Pie Wraps", emoji: "🍎", cat: "wraps", temp: 180, time: 8, prep: 10, serves: 4, turn: "flip",
    tags: ["wraps", "sweet", "vegetarian", "family"],
    ing: [["2", "apples", "peeled and finely diced"], ["2 tbsp", "brown sugar"], ["1 tsp", "cinnamon"], ["1 tsp", "cornflour"], ["4", "tortilla wraps", "small"], ["20g", "butter", "melted"], ["1 tbsp", "sugar", "mixed with a pinch of cinnamon"], ["4 scoops", "?ice cream"]],
    steps: [
      "Mix the apple with brown sugar, cinnamon and cornflour. Microwave for 2 minutes to soften slightly.",
      "Spoon down each wrap, fold in the ends and roll up tightly. Brush with butter and sprinkle with cinnamon sugar.",
      "Air fry seam-side down at 180°C for 8 minutes, turning halfway, until golden and crisp. Serve with ice cream."
    ] },
  { id: "wrap-biscoff-banana-quesadilla", name: "Biscoff & Banana Quesadilla", emoji: "🍪", cat: "wraps", temp: 180, time: 5, prep: 3, serves: 2, turn: "flip",
    tags: ["wraps", "sweet", "vegetarian", "kids", "trending"],
    ing: [["2", "tortilla wraps", "large"], ["3 tbsp", "biscoff", "spread"], ["1", "bananas", "sliced"], ["2", "?biscoff", "biscuits, crushed"], ["1 tsp", "butter", "melted"]],
    steps: [
      "Spread Biscoff over one half of each wrap, add banana slices and crushed biscuits, then fold over.",
      "Brush with melted butter, weigh down with a metal rack and air fry at 180°C for 5 minutes, flipping halfway.",
      "Leave for a minute, then cut into wedges."
    ] },
  { id: "wrap-smores", name: "S'mores Wrap", emoji: "🔥", cat: "wraps", temp: 180, time: 4, prep: 3, serves: 2, turn: "flip",
    tags: ["wraps", "sweet", "vegetarian", "kids"],
    ing: [["2", "tortilla wraps", "small"], ["2 tbsp", "chocolate spread"], ["40g", "marshmallows", "mini"], ["2", "digestive biscuits", "crushed"], ["30g", "?dark chocolate", "chopped"]],
    steps: [
      "Spread chocolate spread over half of each wrap and scatter with marshmallows, crushed digestives and chocolate.",
      "Fold over and weigh down with a metal rack so it stays shut.",
      "Air fry at 180°C for 3–4 minutes, flipping halfway, until crisp and gooey. Cool briefly before cutting."
    ] },
  { id: "wrap-strawberry-cheesecake", name: "Strawberry Cheesecake Wrap", emoji: "🍓", cat: "wraps", temp: 180, time: 5, prep: 10, serves: 2, turn: "flip",
    tags: ["wraps", "sweet", "vegetarian"],
    ing: [["100g", "cream cheese"], ["1 tbsp", "icing sugar"], ["½ tsp", "vanilla extract"], ["6", "strawberries", "sliced"], ["2", "tortilla wraps", "small"], ["15g", "butter", "melted"], ["2", "digestive biscuits", "crushed"], ["1 tbsp", "sugar"]],
    steps: [
      "Beat the cream cheese with icing sugar and vanilla. Spread down the middle of each wrap and top with strawberries.",
      "Fold in the ends, roll up tightly and pin with a cocktail stick. Brush with butter and roll in the crushed digestives mixed with sugar.",
      "Air fry seam-side down at 180°C for 4–5 minutes, turning halfway, until golden. Rest for 2 minutes before slicing."
    ] }
);
