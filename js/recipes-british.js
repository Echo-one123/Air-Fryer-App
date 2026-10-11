'use strict';
/* British favourites, family classics & breakfasts – same format as recipes.js. */
RECIPES.push(
  // ───────────── ROASTS & MEAT ─────────────
  { id: "roast-beef-joint", name: "Roast Beef Joint", emoji: "🥩", cat: "beef", temp: 180, time: 45, prep: 10, serves: 4, turn: "flip",
    tags: ["british", "sunday roast", "family", "gluten-free"],
    ing: [["1kg", "beef steak", "topside or silverside joint – check it fits your basket"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["1 tsp", "black pepper"], ["1 tsp", "mustard", "English"], ["1 tsp", "?thyme"], ["2", "?garlic", "cloves, crushed"]],
    steps: [
      "Take the joint out of the fridge 30 minutes before cooking. Pat dry and rub with oil, mustard, garlic, thyme, salt and pepper.",
      "Cook at 200°C for 10 minutes to brown, then reduce to 180°C for the remaining time, turning at halfway.",
      "Check the centre with a probe: 52°C for rare, 60–63°C for medium, 71°C for well done. Allow roughly 35–50 minutes for 1kg.",
      "Wrap loosely in foil and rest for 15 minutes before carving thinly – use the drawer juices for gravy."
    ] },
  { id: "roast-leg-of-lamb", name: "Roast Leg of Lamb", emoji: "🍖", cat: "lamb", temp: 180, time: 60, prep: 15, serves: 6, turn: "flip",
    tags: ["british", "sunday roast", "easter", "gluten-free"],
    ing: [["1.5kg", "lamb leg joint", "bone-in or boneless – check it fits your basket"], ["4", "garlic", "cloves, sliced"], ["3 sprigs", "rosemary"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["2 tbsp", "?mint sauce", "to serve"]],
    steps: [
      "Make small cuts all over the lamb and push in slivers of garlic and small sprigs of rosemary. Rub with oil, salt and pepper.",
      "Cook at 180°C for 50–65 minutes, turning at halfway.",
      "Check the thickest part: 52°C for rare, 60–63°C for medium (pink), 71°C for well done.",
      "Rest under foil for 15 minutes, then carve and serve with mint sauce."
    ] },
  { id: "honey-mustard-gammon-joint", name: "Honey Mustard Gammon Joint", emoji: "🍯", cat: "pork", temp: 180, time: 50, prep: 10, serves: 4, turn: "flip",
    tags: ["british", "trending", "christmas", "sunday roast", "gluten-free"],
    ing: [["1kg", "gammon joint", "unsmoked, check it fits your basket"], ["2 tbsp", "honey"], ["1 tbsp", "mustard", "wholegrain"], ["1 tbsp", "brown sugar"], ["½ tsp", "?cinnamon"]],
    steps: [
      "Remove the packaging and pat the gammon dry. Wrap loosely in foil and cook at 180°C for 35 minutes, turning at halfway.",
      "Mix the honey, mustard, sugar and cinnamon. Unwrap the gammon, cut off any string-tied skin and score the fat in a diamond pattern.",
      "Brush with half the glaze and cook unwrapped for 10 minutes, then brush with the rest and cook 5–10 minutes more until sticky.",
      "Check the centre has reached 71°C. Rest for 10–15 minutes before slicing – great hot or cold."
    ] },
  { id: "crispy-pork-belly-crackling", name: "Crispy Pork Belly Slices with Crackling", emoji: "🥓", cat: "pork", temp: 200, time: 25, prep: 10, serves: 3, turn: "flip",
    tags: ["british", "crispy", "gluten-free"],
    ing: [["600g", "pork belly", "thick slices, skin on"], ["1 tsp", "salt"], ["½ tsp", "five spice", "or fennel seeds"], ["1 tsp", "oil"], ["½ tsp", "black pepper"]],
    steps: [
      "Pat the slices really dry with kitchen paper – dry skin is the key to crackling. Rub with oil, then salt the skin generously and season the meat with pepper and five spice.",
      "Lay in a single layer, skin-side up, and cook at 200°C for 25 minutes, turning at halfway and finishing skin-side up.",
      "If the skin isn't fully puffed, give it 3–5 minutes more.",
      "Check the meat has reached at least 71°C, then rest for 5 minutes before serving."
    ] },
  { id: "crispy-duck-legs-orange", name: "Crispy Duck Legs with Orange", emoji: "🦆", cat: "chicken", temp: 180, time: 40, prep: 10, serves: 2, turn: "flip",
    tags: ["british", "date night", "gluten-free"],
    ing: [["2", "duck legs"], ["1 tsp", "salt"], ["½ tsp", "five spice"], ["2 tbsp", "marmalade"], ["1", "oranges", "zested and juiced"], ["1 tsp", "?thyme"]],
    steps: [
      "Prick the duck skin all over (not into the meat), pat dry and rub with salt, five spice and thyme.",
      "Cook skin-side down at 180°C for 20 minutes, then turn skin-side up for 15 minutes. Pour off the fat at halfway (save it for roast potatoes).",
      "Warm the marmalade with the citrus juice and zest. Brush over the skin and cook 5 minutes more at 180°C until glossy.",
      "Check the meat has reached at least 75°C and is tender. Rest 5 minutes before serving."
    ] },
  { id: "pork-apple-burgers", name: "Pork & Apple Burgers", emoji: "🍔", cat: "pork", temp: 180, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["british", "family", "bbq"],
    ing: [["500g", "pork mince"], ["1", "apples", "grated, squeezed dry"], ["½", "onion", "finely chopped"], ["30g", "breadcrumbs"], ["1 tsp", "?thyme"], ["½ tsp", "salt"], ["½ tsp", "black pepper"], ["4", "burger buns"], ["4 handfuls", "?lettuce"]],
    steps: [
      "Mix the pork, apple, onion, breadcrumbs, thyme, salt and pepper. Shape into 4 patties and chill for 10 minutes.",
      "Cook at 180°C for 12–14 minutes, turning at halfway.",
      "Check they have reached 75°C in the centre – mince must be cooked through.",
      "Toast the buns in the air fryer for 1 minute, then build with lettuce and your favourite sauce."
    ] },
  { id: "hot-dogs-crispy-onions", name: "Hot Dogs with Crispy Onions", emoji: "🌭", cat: "pork", temp: 190, time: 12, prep: 5, serves: 4, turn: "shake",
    tags: ["british", "family", "quick", "kids"],
    ing: [["8", "hot dogs"], ["8", "hot dog rolls"], ["2", "onion", "thinly sliced"], ["1 tbsp", "oil"], ["2 tbsp", "?tomato ketchup"], ["2 tbsp", "?mustard"]],
    steps: [
      "Toss the onion slices in the oil with a pinch of salt and cook at 190°C for 8 minutes, shaking at halfway.",
      "Add the hot dogs to the basket and cook for 4 minutes more until the onions are golden and crispy and the hot dogs are piping hot.",
      "Warm the rolls in the basket for 1 minute.",
      "Load each roll with a hot dog, crispy onions, ketchup and mustard."
    ] },
  // ───────────── PIES & PASTRY ─────────────
  { id: "cornish-pasties", name: "Cornish Pasties", emoji: "🥟", cat: "beef", temp: 170, time: 30, prep: 30, serves: 4, turn: "none",
    tags: ["british", "family", "lunchbox", "batch cook"],
    ing: [["2 x 320g", "shortcrust pastry", "ready-rolled"], ["250g", "beef steak", "skirt or chuck, finely diced"], ["1", "potatoes", "peeled, finely diced"], ["100g", "swede", "finely diced"], ["1", "onion", "finely chopped"], ["15g", "butter"], ["1", "eggs", "beaten"], ["½ tsp", "salt"], ["1 tsp", "black pepper"]],
    steps: [
      "Cut 4 circles (about 18cm) from the pastry. Mix the raw beef, potato, swede and onion and season well with salt and plenty of pepper.",
      "Pile the filling onto one half of each circle, dot with butter, fold over and crimp the edge tightly. Brush with egg and cut a small steam hole.",
      "Cook at 170°C for 30 minutes on baking paper, in batches if needed, until deep golden.",
      "Check the filling is piping hot and the vegetables are tender (a skewer slides in easily). Rest 5 minutes before eating."
    ] },
  { id: "mini-steak-pies", name: "Mini Steak Pies", emoji: "🥧", cat: "beef", temp: 180, time: 18, prep: 20, serves: 4, turn: "none",
    tags: ["british", "family", "comfort food"],
    ing: [["500g", "beef steak", "leftover slow-cooked braising steak or stew"], ["1", "stock cube", "beef, made into 200ml gravy"], ["1 tbsp", "cornflour"], ["1", "onion", "chopped, cooked"], ["320g", "puff pastry", "ready-rolled"], ["1", "eggs", "beaten"], ["1 tsp", "?worcestershire sauce"]],
    steps: [
      "Mix the cooked steak and onion with the gravy, thickened with cornflour and worcestershire sauce. Allow to cool.",
      "Spoon into 4 small foil pie tins or ramekins that fit your basket. Top with circles of puff pastry, press the edges and brush with egg.",
      "Cut a small slit in each lid and cook at 180°C for 15–18 minutes until puffed and golden.",
      "Check the filling is piping hot (75°C) before serving with mash and peas."
    ] },
  { id: "chicken-leek-pie", name: "Chicken & Leek Pie", emoji: "🥧", cat: "chicken", temp: 180, time: 20, prep: 20, serves: 4, turn: "none",
    tags: ["british", "family", "comfort food", "leftovers"],
    ing: [["400g", "chicken breast", "cooked and shredded – leftover roast is ideal"], ["2", "leeks", "sliced and softened in butter"], ["20g", "butter"], ["150ml", "cream"], ["100ml", "water"], ["1", "stock cube", "chicken"], ["1 tsp", "?mustard", "wholegrain"], ["1 tsp", "?thyme"], ["320g", "puff pastry", "ready-rolled"], ["1", "eggs", "beaten"]],
    steps: [
      "Soften the leeks in butter, then stir in the cream, water, crumbled stock cube, mustard and thyme and simmer until thickened. Stir in the chicken and cool slightly.",
      "Spoon into an ovenproof dish that fits your basket. Lay the puff pastry over the top, trim, crimp the edges and brush with egg.",
      "Cut a steam hole and cook at 180°C for 18–20 minutes until the pastry is risen and golden. Cover with foil if it browns too quickly.",
      "Check the filling is piping hot (75°C) and rest for 5 minutes before serving."
    ] },
  { id: "mini-cottage-pies", name: "Mini Cottage Pies", emoji: "🥔", cat: "beef", temp: 180, time: 20, prep: 30, serves: 4, turn: "none",
    tags: ["british", "family", "batch cook", "freezer friendly"],
    ing: [["500g", "beef mince"], ["1", "onion", "chopped"], ["2", "carrots", "diced"], ["1 tbsp", "tomato puree"], ["1", "stock cube", "beef, in 250ml water"], ["1 tbsp", "worcestershire sauce"], ["800g", "potatoes", "peeled and chunked"], ["30g", "butter"], ["50ml", "milk"], ["50g", "?cheddar", "grated"]],
    steps: [
      "Brown the mince with the onion and carrots, add the tomato puree, stock and worcestershire sauce and simmer for 20 minutes until thick. Meanwhile boil and mash the potatoes with butter and milk.",
      "Divide the mince between 4 ramekins or foil dishes that fit your basket. Top with mash, rough it up with a fork and sprinkle with cheese.",
      "Cook at 180°C for 18–20 minutes until the tops are golden and bubbling at the edges.",
      "Check the centre is piping hot (75°C) before serving."
    ] },
  { id: "cheese-onion-pasties", name: "Cheese & Onion Pasties", emoji: "🧀", cat: "veggie", temp: 180, time: 18, prep: 20, serves: 4, turn: "none",
    tags: ["british", "vegetarian", "lunchbox", "bakery classic"],
    ing: [["320g", "puff pastry", "ready-rolled"], ["150g", "cheddar", "grated"], ["1", "onion", "finely chopped and softened"], ["1", "potatoes", "small, cooked and diced"], ["1 tsp", "?mustard"], ["1", "eggs", "beaten"], ["½ tsp", "black pepper"]],
    steps: [
      "Mix the cheddar, softened onion, potato, mustard and pepper.",
      "Cut the pastry into 4 squares. Spoon filling onto one half of each, fold into triangles and seal with a fork. Brush with egg and snip a steam hole.",
      "Cook on baking paper at 180°C for 16–18 minutes until puffed and deep golden.",
      "Cool for 5 minutes – the cheese filling will be very hot."
    ] },
  { id: "mini-quiche-lorraine", name: "Mini Quiche Lorraine", emoji: "🥚", cat: "pork", temp: 170, time: 18, prep: 15, serves: 6, turn: "none",
    tags: ["british", "picnic", "party", "lunchbox"],
    ing: [["320g", "shortcrust pastry", "ready-rolled"], ["100g", "bacon", "lardons, cooked"], ["60g", "cheddar", "grated, or Gruyère"], ["3", "eggs"], ["150ml", "cream"], ["¼ tsp", "salt"], ["¼ tsp", "black pepper"]],
    steps: [
      "Cut circles of pastry and press into silicone muffin cases (or a small muffin tray that fits your basket).",
      "Divide the cooked bacon and cheese between the cases. Whisk the eggs, cream, salt and pepper and pour in until nearly full.",
      "Cook at 170°C for 16–18 minutes until the filling is just set with a slight wobble and the pastry is golden.",
      "Cool in the cases for 5 minutes before lifting out. Serve warm or cold."
    ] },
  // ───────────── FAMILY CLASSICS ─────────────
  { id: "macaroni-cheese", name: "Macaroni Cheese", emoji: "🧀", cat: "veggie", temp: 180, time: 15, prep: 15, serves: 4, turn: "none",
    tags: ["british", "family", "comfort food", "vegetarian"],
    ing: [["300g", "pasta", "macaroni"], ["40g", "butter"], ["40g", "plain flour"], ["600ml", "milk"], ["200g", "cheddar", "mature, grated"], ["1 tsp", "mustard"], ["30g", "breadcrumbs"], ["2", "?tomatoes", "sliced"], ["½ tsp", "salt"]],
    steps: [
      "Cook the macaroni for 2 minutes less than the pack says and drain. Melt the butter, stir in the flour, then whisk in the milk until thick. Off the heat, stir in mustard and three-quarters of the cheese.",
      "Mix the pasta into the sauce and tip into an ovenproof dish that fits your basket. Top with tomato slices, the rest of the cheese and the breadcrumbs.",
      "Cook at 180°C for 12–15 minutes until golden and bubbling.",
      "Rest for 5 minutes before serving."
    ] },
  { id: "mac-cheese-bites", name: "Mac & Cheese Bites", emoji: "🧆", cat: "snacks", temp: 190, time: 10, prep: 20, serves: 4, turn: "flip",
    tags: ["british", "trending", "party", "vegetarian", "kids"],
    ing: [["400g", "pasta", "leftover macaroni cheese, chilled until firm"], ["50g", "cheddar", "grated"], ["40g", "plain flour"], ["2", "eggs", "beaten"], ["100g", "breadcrumbs"], ["½ tsp", "?paprika"], ["spray", "oil"]],
    steps: [
      "Mix the cold macaroni cheese with the extra cheddar and roll into walnut-sized balls (or cut a firm set tray into squares). Freeze for 20 minutes to firm up.",
      "Coat in flour, then egg, then breadcrumbs mixed with paprika. Spray well with oil.",
      "Cook in a single layer at 190°C for 8–10 minutes, turning carefully at halfway, until crisp and golden.",
      "Cool for 2–3 minutes – the centres are molten. Serve with ketchup or sweet chilli sauce."
    ] },
  { id: "mini-lasagnes", name: "Mini Lasagnes", emoji: "🍝", cat: "beef", temp: 180, time: 20, prep: 25, serves: 4, turn: "none",
    tags: ["british", "family", "batch cook", "freezer friendly"],
    ing: [["400g", "beef mince"], ["1", "onion", "chopped"], ["2", "garlic", "cloves, crushed"], ["500g", "passata"], ["1 tsp", "oregano"], ["6", "pasta", "fresh lasagne sheets, cut to fit"], ["300ml", "milk", "made into white sauce with butter and flour"], ["20g", "butter"], ["20g", "plain flour"], ["100g", "mozzarella", "grated"]],
    steps: [
      "Brown the mince with onion and garlic, add passata and oregano and simmer for 15 minutes. Make a white sauce with the butter, flour and milk.",
      "Layer meat sauce, lasagne sheet and white sauce in 4 ramekins or foil dishes that fit your basket, finishing with white sauce and mozzarella.",
      "Cover with foil and cook at 180°C for 12 minutes, then uncover and cook 6–8 minutes more until golden and bubbling.",
      "Check the centre is piping hot (75°C) and the pasta is tender. Rest 5 minutes."
    ] },
  { id: "bubble-squeak-cakes", name: "Bubble & Squeak Cakes", emoji: "🥬", cat: "sides", temp: 190, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["british", "leftovers", "boxing day", "vegetarian"],
    ing: [["500g", "potatoes", "leftover mash or roast potatoes"], ["200g", "cabbage", "or sprouts, cooked and shredded"], ["½", "onion", "finely chopped"], ["2 tbsp", "plain flour"], ["30g", "?cheddar", "grated"], ["½ tsp", "salt"], ["½ tsp", "black pepper"], ["spray", "oil"]],
    steps: [
      "Mash the potatoes with the cabbage, onion, cheese, salt and pepper. Shape into 8 small cakes and dust with flour.",
      "Spray both sides with oil and place on baking paper in the basket.",
      "Cook at 190°C for 12–14 minutes, turning at halfway, until crisp and golden.",
      "Serve with a fried egg, cold meats or brown sauce."
    ] },
  { id: "welsh-rarebit", name: "Welsh Rarebit", emoji: "🏴", cat: "veggie", temp: 190, time: 6, prep: 10, serves: 2, turn: "none",
    tags: ["british", "quick", "vegetarian", "lunch"],
    ing: [["4 slices", "bread", "thick-cut"], ["150g", "cheddar", "mature, grated"], ["2 tbsp", "milk", "or ale"], ["1 tsp", "mustard", "English"], ["1 tsp", "worcestershire sauce"], ["1", "eggs", "yolk only"], ["15g", "butter"]],
    steps: [
      "Toast the bread in the air fryer at 190°C for 2 minutes.",
      "Mix the cheddar, milk, mustard, worcestershire sauce, egg yolk and soft butter into a thick paste.",
      "Spread right to the edges of the toast and cook at 190°C for 3–4 minutes until bubbling and golden in patches.",
      "Add an extra splash of worcestershire sauce and serve straight away."
    ] },
  { id: "cheese-on-toast", name: "Cheese on Toast", emoji: "🍞", cat: "snacks", temp: 190, time: 5, prep: 2, serves: 1, turn: "none",
    tags: ["british", "quick", "vegetarian", "kids"],
    ing: [["2 slices", "bread"], ["60g", "cheddar", "grated or sliced"], ["1 tsp", "?worcestershire sauce"], ["1", "?tomatoes", "sliced"]],
    steps: [
      "Toast the bread at 190°C for 2 minutes.",
      "Top with tomato slices (if using) and the cheese, right to the edges. Add a few drops of worcestershire sauce.",
      "Cook for 2–3 minutes more until the cheese is melted and bubbling. Use a rack or a pinch of cheese weighted on top so light bread doesn't blow around the fan."
    ] },
  { id: "croque-monsieur", name: "Croque Monsieur", emoji: "🥪", cat: "pork", temp: 180, time: 10, prep: 10, serves: 2, turn: "flip",
    tags: ["cafe classic", "lunch"],
    ing: [["4 slices", "bread"], ["4 slices", "ham"], ["100g", "cheddar", "or Gruyère, grated"], ["15g", "butter"], ["1 tbsp", "plain flour"], ["100ml", "milk"], ["1 tsp", "mustard", "Dijon"]],
    steps: [
      "Make a quick white sauce: melt the butter, stir in flour, whisk in milk until thick and stir in half the cheese.",
      "Spread mustard on 2 slices of bread, add ham and a little cheese, and top with the other slices. Spread the white sauce on top and scatter with the remaining cheese.",
      "Cook at 180°C for 8–10 minutes until the top is golden and bubbling (turn the sandwich over before adding the sauce if you want a crisp base: 3 minutes first, then sauce).",
      "Rest 2 minutes, then slice and serve."
    ] },
  { id: "chicken-caesar-wraps", name: "Chicken Caesar Wraps", emoji: "🌯", cat: "chicken", temp: 190, time: 18, prep: 10, serves: 2, turn: "flip",
    tags: ["lunch", "high protein", "meal prep"],
    ing: [["2", "chicken breast"], ["1 tsp", "oil"], ["½ tsp", "garlic granules"], ["4 rashers", "?bacon", "streaky"], ["2", "tortilla wraps"], ["1", "lettuce", "romaine, shredded"], ["30g", "parmesan", "grated"], ["3 tbsp", "mayonnaise"], ["1", "lemon", "juice"], ["½ tsp", "worcestershire sauce"], ["½ tsp", "salt"]],
    steps: [
      "Rub the chicken with oil, garlic granules and salt. Cook at 190°C for 16–18 minutes, turning at halfway, adding the bacon for the last 6 minutes.",
      "Check the chicken has reached 75°C, then rest and slice. Crumble the bacon.",
      "Mix the mayonnaise, lemon juice, worcestershire sauce and half the parmesan into a quick Caesar dressing.",
      "Fill the wraps with lettuce, chicken, bacon, dressing and the rest of the parmesan. Roll up tightly and halve."
    ] },
  { id: "blt-sandwich", name: "BLT Sandwich", emoji: "🥪", cat: "pork", temp: 200, time: 8, prep: 5, serves: 2, turn: "flip",
    tags: ["british", "lunch", "quick"],
    ing: [["8 rashers", "bacon", "streaky or back"], ["4 slices", "bread", "thick-cut"], ["2", "tomatoes", "sliced"], ["4 leaves", "lettuce"], ["2 tbsp", "mayonnaise"]],
    steps: [
      "Lay the bacon in a single layer and cook at 200°C for 6–8 minutes, turning at halfway, until crisp.",
      "Toast the bread in the basket for 2 minutes while you drain the bacon on kitchen paper.",
      "Spread the toast with mayonnaise and layer with lettuce, tomato and bacon. Season the tomato with a little salt and pepper."
    ] },
  // ───────────── BREAKFAST ─────────────
  { id: "sausage-egg-breakfast-muffins", name: "Sausage & Egg Breakfast Muffins", emoji: "🥯", cat: "breakfast", temp: 180, time: 14, prep: 10, serves: 4, turn: "flip",
    tags: ["british", "brunch", "high protein"],
    ing: [["400g", "sausages", "sausage meat or skinned sausages"], ["4", "eggs"], ["4", "english muffins", "split"], ["4 slices", "cheddar"], ["spray", "oil"], ["1 tbsp", "?tomato ketchup"]],
    steps: [
      "Shape the sausage meat into 4 thin patties slightly wider than the muffins. Cook at 180°C for 10 minutes, turning at halfway; check they reach 75°C.",
      "Crack an egg into each of 4 greased ramekins or silicone cups, prick the yolks if you want them firm, and cook at 180°C for 4–6 minutes alongside the toasting muffins.",
      "Layer each muffin with a patty, a slice of cheese and an egg. Return to the basket for 1 minute to melt the cheese."
    ] },
  { id: "breakfast-burritos", name: "Breakfast Burritos", emoji: "🌯", cat: "breakfast", temp: 190, time: 8, prep: 15, serves: 2, turn: "flip",
    tags: ["trending", "brunch", "meal prep", "freezer friendly"],
    ing: [["4 rashers", "bacon", "or 2 sausages, cooked"], ["4", "eggs", "scrambled"], ["2", "hash browns", "cooked"], ["50g", "cheddar", "grated"], ["2", "tortilla wraps", "large"], ["2 tbsp", "?salsa"], ["1", "?avocado", "sliced"], ["spray", "oil"]],
    steps: [
      "Cook the bacon and hash browns in the air fryer at 200°C for 10 minutes and softly scramble the eggs on the hob.",
      "Lay out the wraps and fill with hash brown, bacon, eggs, cheese, salsa and avocado. Fold in the sides and roll up tightly.",
      "Spray with oil and cook seam-side down at 190°C for 6–8 minutes, turning at halfway, until golden and crisp.",
      "Cut in half and serve – or cool, wrap and freeze for grab-and-go breakfasts."
    ] },
  { id: "ham-cheese-egg-muffins", name: "Ham & Cheese Egg Muffins", emoji: "🧁", cat: "breakfast", temp: 160, time: 14, prep: 10, serves: 6, turn: "none",
    tags: ["high protein", "meal prep", "gluten-free", "low carb"],
    ing: [["6", "eggs"], ["50ml", "milk"], ["4 slices", "ham", "chopped"], ["60g", "cheddar", "grated"], ["2", "spring onions", "sliced"], ["1 handful", "?spinach", "chopped"], ["¼ tsp", "salt"], ["¼ tsp", "black pepper"]],
    steps: [
      "Grease 6 silicone muffin cases and divide the ham, cheese, spring onion and spinach between them.",
      "Whisk the eggs, milk, salt and pepper and pour over until three-quarters full.",
      "Cook at 160°C for 12–14 minutes until puffed and just set in the middle.",
      "Cool for a few minutes before popping out. Keep in the fridge for up to 3 days."
    ] },
  { id: "air-fryer-boiled-eggs", name: "Air Fryer \"Boiled\" Eggs", emoji: "🥚", cat: "breakfast", temp: 150, time: 11, prep: 1, serves: 2, turn: "none",
    tags: ["british", "trending", "quick", "gluten-free", "hack"],
    ing: [["4", "eggs", "straight from the fridge"], ["2 slices", "?bread", "toasted soldiers"], ["10g", "?butter"]],
    steps: [
      "Place the cold eggs straight into the basket (no need to preheat).",
      "Cook at 150°C: 9 minutes for runny yolks, 11 minutes for jammy, 14–15 minutes for hard. Air fryers vary, so test one first.",
      "Plunge into cold water for 1 minute to stop the cooking, then serve in egg cups with buttered toast soldiers."
    ] },
  { id: "french-toast", name: "French Toast", emoji: "🍞", cat: "breakfast", temp: 180, time: 8, prep: 5, serves: 2, turn: "flip",
    tags: ["brunch", "sweet", "vegetarian", "kids"],
    ing: [["4 slices", "bread", "thick-cut or brioche"], ["2", "eggs"], ["80ml", "milk"], ["1 tsp", "sugar"], ["½ tsp", "cinnamon"], ["½ tsp", "?vanilla extract"], ["spray", "oil"], ["2 tbsp", "?maple syrup"], ["100g", "?strawberries"]],
    steps: [
      "Whisk the eggs, milk, sugar, cinnamon and vanilla in a shallow dish.",
      "Dip each slice of bread for a few seconds per side, letting the excess drip off.",
      "Line the basket with baking paper, spray it with oil and cook at 180°C for 7–8 minutes, turning at halfway, until golden.",
      "Serve with maple syrup and strawberries."
    ] },
  { id: "honey-nut-granola", name: "Honey Nut Granola", emoji: "🥣", cat: "breakfast", temp: 150, time: 12, prep: 5, serves: 6, turn: "shake",
    tags: ["healthy", "batch cook", "vegetarian", "meal prep"],
    ing: [["200g", "oats"], ["60g", "mixed nuts", "roughly chopped"], ["3 tbsp", "honey"], ["2 tbsp", "oil", "coconut or light olive oil"], ["1 tsp", "cinnamon"], ["30g", "?desiccated coconut"], ["50g", "?raisins"], ["pinch", "salt"]],
    steps: [
      "Warm the honey and oil together, then mix with the oats, nuts, coconut, cinnamon and salt until evenly coated.",
      "Spread in a lined cake tin or tray that fits your basket.",
      "Cook at 150°C for 10–12 minutes, stirring every 4 minutes, until golden. Watch closely at the end – it catches quickly.",
      "Stir in the raisins and leave to cool completely; it crisps up as it cools. Store in an airtight jar for up to 2 weeks."
    ] },
  { id: "breakfast-hash", name: "Breakfast Hash", emoji: "🍳", cat: "breakfast", temp: 200, time: 24, prep: 10, serves: 2, turn: "shake",
    tags: ["brunch", "gluten-free", "one pan"],
    ing: [["400g", "potatoes", "diced 1.5cm"], ["80g", "chorizo", "diced"], ["1", "red onion", "chopped"], ["1", "bell peppers", "diced"], ["1 tbsp", "oil"], ["1 tsp", "paprika"], ["½ tsp", "salt"], ["2", "eggs"], ["1 tbsp", "?parsley"]],
    steps: [
      "Toss the potatoes with oil, paprika and salt and cook at 200°C for 12 minutes, shaking at halfway.",
      "Add the chorizo, onion and pepper, shake and cook 6 minutes more until the potatoes are crisp.",
      "Tip everything into an ovenproof dish that fits your basket, make 2 wells and crack in the eggs. Cook at 180°C for 5–6 minutes until the whites are set.",
      "Scatter with parsley and serve straight from the dish."
    ] },
  { id: "cheesy-crumpets", name: "Cheesy Crumpets", emoji: "🧀", cat: "breakfast", temp: 190, time: 6, prep: 2, serves: 2, turn: "none",
    tags: ["british", "quick", "vegetarian", "comfort food"],
    ing: [["4", "crumpets"], ["80g", "cheddar", "grated"], ["1 tsp", "?worcestershire sauce"], ["15g", "?butter"], ["1", "?spring onions", "sliced"]],
    steps: [
      "Toast the crumpets at 190°C for 3 minutes.",
      "Butter lightly, top with the cheese, spring onion and a few drops of worcestershire sauce.",
      "Cook for 2–3 minutes more until the cheese is melted, bubbling and running into the holes."
    ] },
  { id: "mushrooms-on-toast", name: "Garlic Mushrooms on Toast", emoji: "🍄", cat: "breakfast", temp: 200, time: 10, prep: 5, serves: 2, turn: "shake",
    tags: ["british", "vegetarian", "brunch", "quick"],
    ing: [["250g", "mushrooms", "chestnut, thickly sliced"], ["1 tbsp", "oil"], ["15g", "butter", "melted"], ["2", "garlic", "cloves, crushed"], ["1 tsp", "?thyme"], ["2 slices", "bread", "sourdough"], ["1 tbsp", "?parsley"], ["½ tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Toss the mushrooms with oil, salt and pepper and cook at 200°C for 6 minutes, shaking at halfway.",
      "Stir in the melted butter, garlic and thyme and cook 3 minutes more until golden and juicy.",
      "Toast the bread in the basket for 2 minutes, then pile on the mushrooms and their juices and scatter with parsley."
    ] },
  // ───────────── BAKES & DESSERTS ─────────────
  { id: "victoria-sponge", name: "Victoria Sponge", emoji: "🍰", cat: "desserts", temp: 160, time: 25, prep: 15, serves: 8, turn: "none",
    tags: ["british", "baking", "afternoon tea", "vegetarian"],
    ing: [["175g", "butter", "softened"], ["175g", "sugar", "caster"], ["3", "eggs"], ["175g", "self-raising flour"], ["1 tsp", "baking powder"], ["1 tsp", "vanilla extract"], ["4 tbsp", "jam", "raspberry or strawberry"], ["150ml", "cream", "double, whipped"], ["1 tbsp", "icing sugar"]],
    steps: [
      "Beat the butter and sugar until pale, then beat in the eggs, flour, baking powder and vanilla until smooth.",
      "Divide between two lined cake tins that fit your basket (about 15–18cm). Bake one at a time at 160°C for 20–25 minutes; cover with foil after 10 minutes if browning too fast.",
      "A skewer in the centre should come out clean. Cool in the tins for 5 minutes, then on a rack.",
      "Sandwich with jam and whipped cream and dust with icing sugar."
    ] },
  { id: "lemon-drizzle-loaf", name: "Lemon Drizzle Loaf", emoji: "🍋", cat: "desserts", temp: 155, time: 35, prep: 15, serves: 8, turn: "none",
    tags: ["british", "baking", "afternoon tea", "vegetarian"],
    ing: [["125g", "butter", "softened"], ["125g", "sugar", "caster"], ["2", "eggs"], ["125g", "self-raising flour"], ["2 tbsp", "milk"], ["2", "lemon", "zest of both, juice of 1½"], ["80g", "icing sugar", "or granulated for a crunchy top"]],
    steps: [
      "Beat the butter, sugar, eggs, flour, milk and lemon zest until smooth. Spoon into a lined 1lb loaf tin that fits your basket.",
      "Bake at 155°C for 30–35 minutes, covering with foil after 15 minutes so the top doesn't burn. A skewer should come out clean.",
      "While still hot, prick all over with a skewer. Mix the lemon juice with the sugar and spoon over the cake.",
      "Leave to cool completely in the tin so the drizzle sets."
    ] },
  { id: "carrot-cake-muffins", name: "Carrot Cake Muffins", emoji: "🥕", cat: "desserts", temp: 160, time: 16, prep: 15, serves: 8, turn: "none",
    tags: ["baking", "lunchbox", "vegetarian"],
    ing: [["150g", "self-raising flour"], ["100g", "brown sugar"], ["1 tsp", "cinnamon"], ["2", "eggs"], ["80ml", "oil"], ["150g", "carrots", "finely grated"], ["50g", "?raisins"], ["100g", "cream cheese"], ["40g", "icing sugar"]],
    steps: [
      "Mix the flour, sugar and cinnamon. Whisk the eggs and oil, stir into the dry ingredients with the carrot and raisins.",
      "Spoon into 8 silicone muffin cases, about two-thirds full.",
      "Bake at 160°C for 14–16 minutes, until risen and a skewer comes out clean. Cool completely.",
      "Beat the cream cheese with the icing sugar and swirl over the top."
    ] },
  { id: "sticky-toffee-puddings", name: "Sticky Toffee Puddings", emoji: "🍮", cat: "desserts", temp: 160, time: 18, prep: 20, serves: 4, turn: "none",
    tags: ["british", "comfort food", "dinner party", "vegetarian"],
    ing: [["120g", "raisins", "or chopped dates"], ["120ml", "water", "boiling"], ["½ tsp", "baking powder", "or bicarbonate of soda"], ["50g", "butter", "softened"], ["80g", "brown sugar"], ["1", "eggs"], ["100g", "self-raising flour"], ["60g", "butter", "for the sauce"], ["80g", "brown sugar", "for the sauce"], ["150ml", "cream", "double, for the sauce"]],
    steps: [
      "Soak the dates or raisins in the boiling water for 10 minutes, then mash with the baking powder.",
      "Beat the butter and sugar, add the egg, flour and the date mixture. Divide between 4 greased ramekins.",
      "Bake at 160°C for 16–18 minutes until risen and springy and a skewer comes out clean.",
      "Meanwhile, melt the sauce butter, sugar and cream together and bubble for 3 minutes. Turn out the puddings and pour over the toffee sauce."
    ] },
  { id: "rock-cakes", name: "Rock Cakes", emoji: "🪨", cat: "desserts", temp: 170, time: 12, prep: 10, serves: 8, turn: "none",
    tags: ["british", "baking", "retro", "vegetarian"],
    ing: [["200g", "self-raising flour"], ["100g", "butter", "cold, cubed"], ["70g", "sugar"], ["100g", "raisins", "or mixed dried fruit"], ["1 tsp", "cinnamon", "or mixed spice"], ["1", "eggs"], ["1 tbsp", "milk"]],
    steps: [
      "Rub the butter into the flour until it looks like breadcrumbs, then stir in the sugar, raisins and cinnamon.",
      "Add the egg and milk and mix to a stiff, lumpy dough.",
      "Place rough heaps on baking paper in the basket, spaced apart, and sprinkle with a little extra sugar.",
      "Bake at 170°C for 10–12 minutes until golden. Cool on a rack – best eaten the same day."
    ] },
  { id: "strawberry-puff-tarts", name: "Strawberry Puff Tarts", emoji: "🍓", cat: "desserts", temp: 190, time: 12, prep: 10, serves: 6, turn: "none",
    tags: ["summer", "quick", "vegetarian", "wimbledon"],
    ing: [["320g", "puff pastry", "ready-rolled"], ["150g", "cream cheese"], ["2 tbsp", "icing sugar"], ["½ tsp", "vanilla extract"], ["250g", "strawberries", "hulled and sliced"], ["1", "eggs", "beaten"], ["2 tbsp", "?jam", "strawberry, warmed, to glaze"]],
    steps: [
      "Cut the pastry into 6 rectangles and score a 1cm border round each. Prick inside the border with a fork and brush the edges with egg.",
      "Bake on baking paper at 190°C for 10–12 minutes until puffed and golden. Press down the centres and cool.",
      "Beat the cream cheese, icing sugar and vanilla and spread inside the borders.",
      "Top with sliced strawberries and brush with warm jam to glaze."
    ] },
  { id: "apple-pie-bites", name: "Apple Pie Bites", emoji: "🥧", cat: "desserts", temp: 180, time: 12, prep: 15, serves: 6, turn: "none",
    tags: ["autumn", "party", "vegetarian", "kids"],
    ing: [["320g", "puff pastry", "ready-rolled"], ["2", "apples", "peeled and finely diced"], ["2 tbsp", "brown sugar"], ["1 tsp", "cinnamon"], ["15g", "butter", "melted"], ["1 tbsp", "sugar", "for sprinkling"], ["scoop", "?ice cream"]],
    steps: [
      "Mix the apple with the brown sugar and half the cinnamon.",
      "Cut the pastry into 12 strips. Spoon apple along each, roll up into a little spiral bite (or fold into parcels) and place on baking paper.",
      "Brush with melted butter and sprinkle with the sugar and remaining cinnamon.",
      "Bake at 180°C for 10–12 minutes until golden. Cool briefly – the apple is very hot – and serve with ice cream."
    ] }
);
