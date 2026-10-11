'use strict';
/* Sunday roasts, Christmas & festive, and BBQ-style recipes – same format as recipes.js. */
RECIPES.push(
  // ───────────── SUNDAY ROASTS ─────────────
  { id: "roast-rare-beef-sandwiches", name: "Rare Roast Beef for Sandwiches", emoji: "🥩", cat: "beef", temp: 170, time: 35, prep: 10, serves: 6, turn: "flip",
    tags: ["sunday roast", "high-protein", "meal prep", "lunchbox"],
    ing: [["1kg", "beef joint", "topside, tied – check it fits your basket"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["1 tsp", "black pepper"], ["1 tsp", "mustard", "English"], ["1 tsp", "?thyme"], ["2 tbsp", "?horseradish", "to serve"], ["1", "?bread", "crusty loaf, to serve"]],
    steps: [
      "Take the beef out of the fridge 30 minutes before cooking. Check it fits your basket with space around it for the air to flow. Pat it dry, then rub with oil, mustard, salt, pepper and thyme.",
      "Cook at 200°C for 10 minutes to brown, then turn it over, lower to 170°C and cook for 20–25 minutes.",
      "Check the centre with a probe: rare 52°C, medium-rare 57°C, medium 63°C, well done 71°C. For sandwiches, take it out at 52–55°C.",
      "Rest under loose foil for 15 minutes, then chill completely. Slice it wafer-thin and pile into crusty bread with horseradish. Keeps 3 days in the fridge."
    ] },
  { id: "roast-pork-shoulder-apple-sauce", name: "Roast Pork Shoulder with Apple Sauce", emoji: "🐖", cat: "pork", temp: 170, time: 75, prep: 15, serves: 6, turn: "none",
    tags: ["sunday roast", "family", "batch cook"],
    ing: [["1.5kg", "pork shoulder", "boneless, rolled, skin scored – check it fits your basket"], ["1 tbsp", "oil"], ["2 tsp", "salt"], ["1 tsp", "fennel seeds", "crushed"], ["1 tsp", "black pepper"], ["2", "apples", "Bramley or Granny Smith, peeled and chopped"], ["1 tbsp", "sugar"], ["150ml", "?apple sauce", "shop-bought, if not making your own"]],
    steps: [
      "Pat the skin bone-dry (leave it uncovered in the fridge overnight if you can). Rub the skin with oil and salt, and the meat with fennel and pepper. Check the joint fits your basket with a gap around it.",
      "Cook skin-side up at 200°C for 15 minutes to start the crackling, then lower to 170°C and cook for 55–65 minutes.",
      "Meanwhile, simmer the apples with the sugar and 2 tbsp water in a small pan for 8–10 minutes until fluffy, then beat smooth.",
      "Check the thickest part has reached 71°C. If the crackling needs more, give it 5 minutes at 200°C.",
      "Rest for 15 minutes, then carve. Serve with the warm apple sauce and the pan juices."
    ] },
  { id: "roast-rolled-pork-belly-crackling", name: "Rolled Pork Belly Joint with Crackling", emoji: "🥓", cat: "pork", temp: 170, time: 65, prep: 20, serves: 4, turn: "none",
    tags: ["sunday roast", "family", "low-carb"],
    ing: [["1kg", "pork belly", "boneless slab, skin scored – check it fits your basket once rolled"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "rosemary", "chopped"], ["1 tsp", "fennel seeds"], ["1", "lemon", "zest only"], ["2 tsp", "salt"], ["1 tsp", "black pepper"], ["1 tbsp", "oil"]],
    steps: [
      "Lay the belly skin-side down. Spread the meat side with garlic, rosemary, fennel, lemon zest, pepper and 1 tsp salt. Roll it up tightly and tie with string every 3cm.",
      "Dry the skin well and rub it with oil and the rest of the salt. Check the joint fits your basket with room around it.",
      "Cook seam-side down at 200°C for 20 minutes, then lower to 170°C for 40–45 minutes until the crackling has puffed up.",
      "Check the centre has reached at least 71°C (belly is more tender at 80°C+).",
      "Rest for 10–15 minutes, then slice into thick rounds with a serrated knife."
    ] },
  { id: "roast-lamb-shoulder-rosemary-garlic", name: "Slow-Style Lamb Shoulder with Rosemary & Garlic", emoji: "🐑", cat: "lamb", temp: 160, time: 90, prep: 15, serves: 4, turn: "none",
    tags: ["sunday roast", "family"],
    ing: [["1.2kg", "lamb shoulder", "half shoulder, bone in – check it fits your basket"], ["6 cloves", "garlic", "sliced"], ["3 sprigs", "rosemary"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["1 tsp", "black pepper"], ["1", "?lemon", "juice"], ["1 tbsp", "?mint sauce", "to serve"]],
    steps: [
      "Check the shoulder fits your basket. Make small cuts all over and push in garlic slices and little rosemary sprigs. Rub with oil, lemon, salt and pepper.",
      "Wrap the lamb in a double layer of foil, tucking the edges in tightly so nothing can blow into the element. Cook at 160°C for 65 minutes.",
      "Carefully open the foil (hot steam), fold it back around the base and cook at 180°C for 20–25 minutes more to brown.",
      "For pull-apart lamb you want it well past 71°C (around 90°C) so it falls off the bone; if you prefer it sliceable, aim for 63°C medium.",
      "Rest for 15 minutes, then pull or carve. Spoon the juices from the foil over the top and serve with mint sauce."
    ] },
  { id: "roast-turkey-breast-joint", name: "Turkey Breast Joint with Bacon", emoji: "🦃", cat: "chicken", temp: 180, time: 50, prep: 10, serves: 4, turn: "flip",
    tags: ["sunday roast", "christmas", "high-protein", "family"],
    ing: [["1kg", "turkey breast", "boneless rolled joint – check it fits your basket"], ["6 rashers", "bacon", "streaky"], ["20g", "butter", "softened"], ["1 tsp", "thyme"], ["1 tsp", "?sage"], ["½ tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Check the joint fits your basket with space around it. Mix the butter with thyme, sage, salt and pepper and rub it all over.",
      "Cook at 180°C for 25 minutes, then turn it over.",
      "Drape the bacon rashers over the top, tucking the ends underneath so they can't lift in the fan. Cook for 20–25 minutes more until the bacon is crisp.",
      "Check the thickest part has reached 75°C. If the bacon is browning too fast, lay a piece of foil over it and tuck it in tightly.",
      "Rest for 10–15 minutes before slicing so it stays juicy."
    ] },
  { id: "roast-lemon-thyme-chicken-crown", name: "Lemon & Thyme Chicken Crown", emoji: "🍋", cat: "chicken", temp: 180, time: 45, prep: 10, serves: 4, turn: "flip",
    tags: ["sunday roast", "family", "low-carb"],
    ing: [["1.2kg", "whole chicken", "or a chicken crown (legs removed) – check it fits your basket"], ["1", "lemon", "zest and juice"], ["4 sprigs", "thyme"], ["2 cloves", "garlic", "crushed"], ["20g", "butter", "softened"], ["1 tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Mix the butter with lemon zest, garlic and thyme leaves. Loosen the skin over the breasts with your fingers and push the butter underneath. Season the outside with salt and pepper.",
      "Check it fits your basket. Cook breast-side down at 180°C for 20 minutes.",
      "Turn it breast-side up, squeeze over the lemon juice and cook for 20–25 minutes more (a whole bird with legs may need 10 minutes extra).",
      "Check the thickest part of the breast (and thigh, if there) has reached 75°C and the juices run clear.",
      "Rest for 10 minutes, then carve. Use the lemony drippings for gravy."
    ] },
  { id: "roast-duck-breast-cherry-sauce", name: "Duck Breast with Cherry Sauce", emoji: "🍒", cat: "chicken", temp: 200, time: 12, prep: 10, serves: 2, turn: "none",
    tags: ["christmas", "high-protein", "date night"],
    ing: [["2", "duck breast"], ["½ tsp", "salt"], ["½ tsp", "five spice", "or black pepper"], ["150g", "cherries", "pitted, fresh or frozen"], ["1 tbsp", "honey"], ["1 tbsp", "balsamic vinegar"], ["1 tsp", "cornflour", "mixed with 1 tbsp water"]],
    steps: [
      "Score the duck skin in a criss-cross pattern without cutting into the meat. Rub with salt and five spice and leave for 10 minutes.",
      "Cook skin-side up at 200°C for 10–14 minutes until the skin is crisp and much of the fat has rendered into the drawer.",
      "Check the thickest part: 57–63°C for pink (whole duck breast with a well-seared outside), or 75°C for well done.",
      "Rest for 10 minutes. Meanwhile, simmer the cherries, honey and balsamic in a small pan for 5 minutes, stir in the cornflour mix and bubble for 1 minute until glossy.",
      "Slice the duck thickly and spoon the cherry sauce over."
    ] },
  // ───────────── CHRISTMAS & FESTIVE ─────────────
  { id: "roast-beef-wellington-for-two", name: "Beef Wellington for Two", emoji: "🥧", cat: "beef", temp: 190, time: 20, prep: 30, serves: 2, turn: "none",
    tags: ["christmas", "date night", "trending"],
    ing: [["2", "beef steak", "fillet steaks, about 150g each and 4cm thick"], ["250g", "mushrooms", "very finely chopped"], ["1 clove", "garlic", "crushed"], ["1 tsp", "thyme"], ["4 slices", "prosciutto"], ["1 tsp", "mustard", "English"], ["320g", "puff pastry", "ready-rolled sheet"], ["1", "eggs", "beaten"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Season the steaks and sear in a hot pan with the oil for 1 minute each side. Brush with mustard and leave to cool. In the same pan, cook the mushrooms, garlic and thyme for 8–10 minutes until dry and paste-like, then cool.",
      "Lay 2 slices of prosciutto per steak on cling film, spread over the mushrooms, put the steak on top and roll up tightly. Chill for 15 minutes.",
      "Cut the pastry in half, wrap each parcel and seal the edges underneath. Brush with egg and score lightly. Line the basket with pierced baking paper (put it in only once the parcels are on it).",
      "Cook at 190°C for 18–20 minutes until deep golden. Check the centre: rare 52°C, medium-rare 57°C, medium 63°C.",
      "Rest for 10 minutes before slicing in half."
    ] },
  { id: "roast-festive-nut-roast", name: "Festive Nut Roast", emoji: "🌰", cat: "veggie", temp: 170, time: 35, prep: 20, serves: 6, turn: "none",
    tags: ["christmas", "sunday roast", "vegetarian", "high-protein"],
    ing: [["150g", "mixed nuts", "roughly chopped"], ["400g tin", "lentils", "drained"], ["1", "onion", "finely chopped"], ["1", "carrots", "grated"], ["150g", "mushrooms", "chopped"], ["2 cloves", "garlic", "crushed"], ["100g", "breadcrumbs"], ["100g", "cheddar", "grated"], ["2", "eggs", "beaten"], ["1 tsp", "sage"], ["1 tsp", "thyme"], ["2 tbsp", "cranberry sauce"], ["1 tbsp", "oil"], ["½ tsp", "salt"]],
    steps: [
      "Fry the onion, carrot, mushrooms and garlic in the oil for 8 minutes until soft. Cool slightly.",
      "Mix with the nuts, lentils, breadcrumbs, cheddar, eggs, herbs and salt. Spread the cranberry sauce in the base of a lined 900g (2lb) loaf tin that fits your basket, then press the mixture in firmly.",
      "Cover with foil tucked tightly round the tin and cook at 170°C for 20 minutes. Remove the foil and cook for 12–15 minutes more until firm and browned.",
      "Leave in the tin for 10 minutes, then turn out onto a board and slice thickly."
    ] },
  { id: "roast-pigs-in-blankets-wreath", name: "Pigs in Blankets Wreath", emoji: "🎄", cat: "pork", temp: 180, time: 20, prep: 20, serves: 6, turn: "none",
    tags: ["christmas", "family", "party", "trending"],
    ing: [["320g", "puff pastry", "ready-rolled sheet"], ["12", "cocktail sausages"], ["6 rashers", "bacon", "streaky, halved lengthways"], ["2 tbsp", "cranberry sauce"], ["1", "eggs", "beaten"], ["1 tsp", "?sesame seeds"], ["1 sprig", "?rosemary", "to decorate"]],
    steps: [
      "Wrap each sausage in a strip of bacon. Cut the pastry into 12 strips, spread thinly with cranberry sauce and roll a pig in blanket in each.",
      "Arrange the rolls in a ring on pierced baking paper cut to fit your basket, each touching the next so they bake into a wreath. Brush with egg and sprinkle with sesame seeds.",
      "Lift into the basket on the paper and cook at 180°C for 18–22 minutes until the pastry is puffed and deep golden.",
      "Check a sausage in the middle has reached 75°C. Cool for 5 minutes, slide onto a board and decorate with rosemary."
    ] },
  { id: "roast-turkey-stuffing-parcels", name: "Turkey & Stuffing Parcels", emoji: "🎁", cat: "chicken", temp: 180, time: 22, prep: 20, serves: 4, turn: "none",
    tags: ["christmas", "family"],
    ing: [["2", "turkey breast", "steaks, cut into 4 pieces"], ["320g", "puff pastry", "ready-rolled sheet"], ["100g", "breadcrumbs", "sage & onion stuffing mix, made up"], ["4 tbsp", "cranberry sauce"], ["4 rashers", "?bacon", "streaky"], ["1", "eggs", "beaten"], ["½ tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Make up the stuffing with boiling water as the packet says and let it cool. Season the turkey pieces.",
      "Cut the pastry into 4 squares. Put a spoon of stuffing in the middle of each, top with turkey, a spoon of cranberry sauce and a bacon rasher.",
      "Fold the corners in to make a parcel and pinch to seal. Brush with egg.",
      "Cook on pierced baking paper at 180°C for 20–24 minutes, single layer, until golden. Check the turkey has reached 75°C in the middle."
    ] },
  { id: "roast-christmas-dinner-traybake", name: "Christmas Dinner Traybake for Two", emoji: "🎅", cat: "chicken", temp: 190, time: 30, prep: 15, serves: 2, turn: "shake",
    tags: ["christmas", "family", "trending"],
    ing: [["2", "turkey breast", "steaks"], ["300g", "potatoes", "cut into chunks"], ["2", "parsnips", "cut into batons"], ["2", "carrots", "cut into batons"], ["150g", "brussels sprouts", "halved"], ["6", "cocktail sausages"], ["3 rashers", "bacon", "streaky, halved"], ["1 tbsp", "oil"], ["1 tbsp", "honey"], ["1 tsp", "thyme"], ["½ tsp", "salt"], ["½ tsp", "black pepper"], ["4 tsp", "?gravy granules", "to serve"]],
    steps: [
      "Toss the potatoes, parsnips and carrots in the oil, salt and thyme. Cook at 190°C for 12 minutes.",
      "Wrap each sausage in half a rasher of bacon. Add them, the sprouts and the seasoned turkey steaks to the basket. Drizzle the parsnips and carrots with honey.",
      "Cook for 15–18 minutes, shaking the veg and turning the turkey halfway. Don't overcrowd – use two batches if needed.",
      "Check the turkey and sausages have reached 75°C. Serve with gravy made up while it cooks."
    ] },
  { id: "roast-cranberry-stuffing-chicken", name: "Cranberry & Stuffing Chicken Breasts", emoji: "🍗", cat: "chicken", temp: 180, time: 20, prep: 15, serves: 2, turn: "none",
    tags: ["christmas", "high-protein", "family"],
    ing: [["2", "chicken breast"], ["50g", "breadcrumbs", "sage & onion stuffing mix, made up"], ["2 tbsp", "cranberry sauce"], ["4 rashers", "?bacon", "streaky"], ["1 tbsp", "oil"], ["½ tsp", "paprika"], ["½ tsp", "salt"]],
    steps: [
      "Make up the stuffing and let it cool. Cut a deep pocket in the side of each chicken breast without cutting through.",
      "Fill each pocket with stuffing and a spoon of cranberry sauce. Wrap with bacon to hold it shut, or secure with cocktail sticks.",
      "Rub with oil, paprika and salt. Cook at 180°C for 18–22 minutes.",
      "Check the chicken has reached 75°C in the thickest part (not the stuffing). Rest for 5 minutes before slicing."
    ] },
  { id: "roast-cranberry-glazed-gammon-steaks", name: "Cranberry Glazed Gammon Steaks", emoji: "🍖", cat: "pork", temp: 190, time: 12, prep: 5, serves: 2, turn: "flip",
    tags: ["christmas", "quick", "high-protein"],
    ing: [["2", "gammon steaks"], ["2 tbsp", "cranberry sauce"], ["1 tsp", "mustard", "wholegrain"], ["1 tsp", "honey"], ["1", "?oranges", "zest"]],
    steps: [
      "Snip the fat around the edge of the gammon every 2cm so it doesn't curl.",
      "Cook at 190°C for 5 minutes, then flip.",
      "Mix the cranberry sauce, mustard, honey and orange zest. Brush over the gammon and cook for 5–7 minutes more until sticky.",
      "Check the gammon has reached 71°C, then serve."
    ] },
  { id: "roast-brie-cranberry-puff-bites", name: "Brie & Cranberry Puff Bites", emoji: "🧀", cat: "snacks", temp: 180, time: 12, prep: 10, serves: 6, turn: "none",
    tags: ["christmas", "vegetarian", "party"],
    ing: [["320g", "puff pastry", "ready-rolled sheet"], ["150g", "brie", "cut into 18 cubes"], ["4 tbsp", "cranberry sauce"], ["1", "eggs", "beaten"], ["1 tsp", "?thyme"], ["1 tbsp", "?pistachios", "chopped"]],
    steps: [
      "Cut the pastry into 18 squares. Brush the edges with egg.",
      "Put a cube of brie and ½ tsp cranberry sauce in the middle of each and pinch the corners up to make little parcels.",
      "Cook on pierced baking paper at 180°C for 10–12 minutes in a single layer, in batches, until puffed and golden.",
      "Cool for 2 minutes (the brie is molten), then scatter with thyme and pistachios."
    ] },
  { id: "roast-orange-thyme-glazed-carrots", name: "Orange & Thyme Glazed Carrots", emoji: "🥕", cat: "sides", temp: 190, time: 18, prep: 5, serves: 4, turn: "shake",
    tags: ["sunday roast", "christmas", "vegetarian", "healthy"],
    ing: [["500g", "carrots", "halved lengthways"], ["1", "oranges", "zest and juice"], ["1 tbsp", "honey", "or maple syrup for vegan"], ["15g", "butter", "melted"], ["1 tsp", "thyme"], ["½ tsp", "salt"]],
    steps: [
      "Toss the carrots with the melted butter, thyme and salt.",
      "Cook at 190°C for 10 minutes.",
      "Mix the orange zest, juice and honey. Pour over the carrots, shake and cook for 6–8 minutes more until tender and sticky at the edges."
    ] },
  { id: "roast-parmesan-parsnips", name: "Parmesan-Crusted Parsnips", emoji: "🧀", cat: "sides", temp: 190, time: 20, prep: 10, serves: 4, turn: "shake",
    tags: ["sunday roast", "christmas", "vegetarian"],
    ing: [["600g", "parsnips", "cut into batons"], ["1 tbsp", "oil"], ["30g", "parmesan", "finely grated"], ["2 tbsp", "plain flour"], ["½ tsp", "salt"], ["½ tsp", "black pepper"], ["1 tsp", "?thyme"]],
    steps: [
      "Boil the parsnips for 3 minutes, drain and steam-dry for a few minutes.",
      "Mix the parmesan, flour, salt, pepper and thyme. Toss the parsnips in the oil, then in the parmesan mix.",
      "Cook at 190°C for 18–20 minutes, shaking halfway, until golden and crisp. Single layer, don't overcrowd."
    ] },
  { id: "roast-boxing-day-turkey-ham-pie", name: "Boxing Day Turkey & Ham Pie", emoji: "🥧", cat: "chicken", temp: 180, time: 25, prep: 15, serves: 4, turn: "none",
    tags: ["christmas", "leftovers", "family"],
    ing: [["300g", "turkey breast", "leftover cooked, shredded"], ["150g", "ham", "leftover cooked, chopped"], ["1", "leeks", "sliced"], ["15g", "butter"], ["1 tbsp", "plain flour"], ["200ml", "milk"], ["1", "stock cube", "chicken"], ["1 tsp", "mustard", "wholegrain"], ["320g", "puff pastry", "ready-rolled sheet"], ["1", "eggs", "beaten"]],
    steps: [
      "Soften the leek in the butter for 5 minutes. Stir in the flour, then gradually add the milk and crumbled stock cube and simmer for 3 minutes until thick. Stir in the mustard, turkey and ham.",
      "Spoon into an ovenproof dish that fits your basket. Top with the pastry, trim, crimp the edges and cut a steam hole. Brush with egg.",
      "Cook at 180°C for 22–25 minutes until the pastry is risen and golden.",
      "Check the filling is piping hot (75°C) right through before serving."
    ] },
  { id: "roast-mince-pie-crumble", name: "Mince Pie Crumble", emoji: "🥧", cat: "desserts", temp: 170, time: 20, prep: 10, serves: 4, turn: "none",
    tags: ["christmas", "vegetarian", "family"],
    ing: [["400g", "mincemeat"], ["2", "apples", "peeled and chopped"], ["1", "?oranges", "zest"], ["100g", "plain flour"], ["50g", "oats"], ["75g", "butter", "cold, cubed"], ["50g", "brown sugar"], ["1 tsp", "mixed spice"], ["300ml", "?custard", "to serve"]],
    steps: [
      "Mix the mincemeat, apples and orange zest and spread in an ovenproof dish that fits your basket.",
      "Rub the butter into the flour until it looks like breadcrumbs, then stir in the oats, sugar and mixed spice. Scatter over the fruit.",
      "Cook at 170°C for 18–22 minutes until golden and bubbling at the edges. If the top browns too fast, cover with foil tucked in tightly.",
      "Stand for 5 minutes and serve with hot custard."
    ] },
  // ───────────── BBQ-STYLE ─────────────
  { id: "roast-bbq-bone-in-chicken-thighs", name: "Smoky BBQ Bone-In Chicken Thighs", emoji: "🍗", cat: "chicken", temp: 190, time: 24, prep: 5, serves: 4, turn: "flip",
    tags: ["bbq", "family", "budget", "high-protein"],
    ing: [["8", "chicken thighs", "bone-in, skin on"], ["1 tbsp", "oil"], ["2 tsp", "paprika", "smoked"], ["1 tsp", "garlic granules"], ["1 tsp", "brown sugar"], ["½ tsp", "salt"], ["4 tbsp", "bbq sauce"]],
    steps: [
      "Pat the thighs dry. Rub with oil, smoked paprika, garlic, sugar and salt.",
      "Cook skin-side down at 190°C for 10 minutes, then flip skin-side up and cook for 8 minutes.",
      "Brush with BBQ sauce and cook for 4–6 minutes more until sticky and charred at the edges. Single layer – cook in batches if needed.",
      "Check the thickest part next to the bone has reached 75°C."
    ] },
  { id: "roast-dry-rub-bbq-ribs", name: "Dry-Rub BBQ Ribs", emoji: "🍖", cat: "pork", temp: 160, time: 45, prep: 10, serves: 2, turn: "flip",
    tags: ["bbq", "fakeaway", "trending"],
    ing: [["1kg", "pork ribs", "baby back rack, cut to fit your basket"], ["1 tbsp", "brown sugar"], ["2 tsp", "paprika", "smoked"], ["1 tsp", "garlic granules"], ["1 tsp", "onion granules"], ["½ tsp", "chilli powder"], ["½ tsp", "cumin"], ["1 tsp", "salt"], ["1 tsp", "black pepper"], ["1 tbsp", "?bbq sauce", "to serve"]],
    steps: [
      "Pull the thin membrane off the back of the ribs. Mix all the spices, sugar and salt and rub it well into both sides. Leave for 30 minutes or overnight.",
      "Cut the rack into 3–4 rib sections so they fit in a single layer.",
      "Cook meat-side down at 160°C for 25 minutes, then flip and cook for 15 minutes more.",
      "Turn up to 200°C for 5 minutes to crisp the bark. Check they've reached at least 71°C (they're most tender around 90°C, when the meat pulls back from the bones).",
      "Rest for 5 minutes and serve as they are or with a little BBQ sauce for dipping."
    ] },
  { id: "roast-bbq-sausage-burger-platter", name: "BBQ Sausage & Burger Platter", emoji: "🍔", cat: "beef", temp: 190, time: 16, prep: 10, serves: 4, turn: "flip",
    tags: ["bbq", "family", "kids", "party"],
    ing: [["4", "beef mince", "quarter-pounder burgers"], ["4", "sausages"], ["4", "burger buns"], ["4", "hot dog rolls"], ["4 slices", "cheddar"], ["1", "red onion", "sliced into rings"], ["1", "?lettuce"], ["2", "?tomatoes", "sliced"], ["to serve", "?tomato ketchup"], ["to serve", "?mustard"]],
    steps: [
      "Cook the sausages at 190°C for 6 minutes. Add the burgers in a single layer (cook in batches if needed) and cook for 10–12 minutes, flipping everything halfway.",
      "Add a cheese slice to each burger for the last minute.",
      "Check the burgers and sausages have reached 75°C in the middle.",
      "Warm the buns and rolls for 1 minute, then load up with onion, lettuce, tomato and sauces."
    ] },
  { id: "roast-smoky-bbq-pulled-chicken", name: "Smoky BBQ Pulled Chicken", emoji: "🍔", cat: "chicken", temp: 180, time: 22, prep: 5, serves: 4, turn: "flip",
    tags: ["bbq", "family", "meal prep", "high-protein"],
    ing: [["800g", "chicken thighs", "boneless, skinless"], ["2 tsp", "paprika", "smoked"], ["1 tsp", "garlic granules"], ["1 tsp", "brown sugar"], ["½ tsp", "salt"], ["1 tbsp", "oil"], ["6 tbsp", "bbq sauce"], ["1 tsp", "?worcestershire sauce"], ["4", "?burger buns"]],
    steps: [
      "Toss the thighs in oil, smoked paprika, garlic, sugar and salt.",
      "Cook at 180°C for 18–20 minutes, flipping halfway, single layer.",
      "Check the chicken has reached 75°C, then shred with two forks.",
      "Toss with the BBQ sauce and Worcestershire, return to the basket in a tin and heat for 2–3 minutes until sticky. Pile into buns with coleslaw."
    ] },
  { id: "roast-smoky-bbq-steak-skewers", name: "Smoky BBQ Steak Skewers", emoji: "🍢", cat: "beef", temp: 200, time: 9, prep: 15, serves: 4, turn: "flip",
    tags: ["bbq", "high-protein", "low-carb"],
    ing: [["600g", "beef steak", "rump, cut into 3cm cubes"], ["3 tbsp", "bbq sauce"], ["1 tbsp", "worcestershire sauce"], ["1 tsp", "paprika", "smoked"], ["1 clove", "garlic", "crushed"], ["1", "red onion", "cut into chunks"], ["1", "bell peppers", "cut into chunks"], ["½ tsp", "salt"]],
    steps: [
      "Mix the BBQ sauce, Worcestershire, paprika, garlic and salt. Toss the beef in it and marinate for 30 minutes (or overnight).",
      "Thread onto skewers that fit your basket, alternating with onion and pepper. Soak wooden skewers for 20 minutes first.",
      "Cook at 200°C for 8–10 minutes, turning halfway. Single layer, don't overcrowd.",
      "Check a cube: medium-rare 57°C, medium 63°C, well done 71°C. Rest for 3 minutes."
    ] },
  { id: "roast-bbq-chicken-kebab-platter", name: "BBQ Chicken Kebab Platter", emoji: "🍢", cat: "chicken", temp: 200, time: 14, prep: 20, serves: 4, turn: "flip",
    tags: ["bbq", "family", "healthy", "high-protein"],
    ing: [["600g", "chicken breast", "cut into 3cm chunks"], ["150g", "greek yoghurt"], ["1", "lemon", "juice"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "paprika"], ["1 tsp", "cumin"], ["½ tsp", "salt"], ["1", "courgette", "thick slices"], ["1", "bell peppers", "chunks"], ["1", "red onion", "chunks"], ["4", "pitta bread"], ["4 tbsp", "?tzatziki"]],
    steps: [
      "Mix the yoghurt, lemon, garlic, spices and salt. Coat the chicken and marinate for at least 30 minutes.",
      "Thread the chicken and veg onto skewers that fit your basket (soak wooden ones first).",
      "Cook at 200°C for 12–15 minutes, turning halfway, in batches so they're in a single layer.",
      "Check the chicken has reached 75°C. Warm the pittas for 1 minute and serve everything on a big board with tzatziki."
    ] },
  { id: "roast-mixed-grill", name: "Mixed Grill", emoji: "🥩", cat: "beef", temp: 200, time: 18, prep: 10, serves: 2, turn: "flip",
    tags: ["bbq", "high-protein", "low-carb", "pub classic"],
    ing: [["2", "beef steak", "sirloin, about 2cm thick"], ["2", "sausages"], ["2", "lamb chops"], ["2 rashers", "bacon"], ["2", "tomatoes", "halved"], ["4", "mushrooms", "large flat"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["½ tsp", "black pepper"], ["1", "?gammon steaks", "half each, if you like"]],
    steps: [
      "Cook the sausages at 200°C for 6 minutes. Rub everything else with oil, salt and pepper.",
      "Add the lamb chops, tomatoes and mushrooms and cook for 4 minutes. Flip everything.",
      "Add the steaks and bacon and cook for 6–8 minutes more, flipping the steaks halfway. Cook in two batches if your basket is crowded.",
      "Check temperatures: sausages 75°C; steak and lamb rare 52°C, medium-rare 57°C, medium 63°C, well done 71°C. Rest the steaks for 3 minutes and serve with chips."
    ] },
  { id: "roast-surf-and-turf", name: "Surf & Turf with Garlic Butter Prawns", emoji: "🦐", cat: "beef", temp: 200, time: 12, prep: 10, serves: 2, turn: "flip",
    tags: ["bbq", "date night", "high-protein", "low-carb"],
    ing: [["2", "beef steak", "ribeye or sirloin, 2–3cm thick"], ["200g", "prawns", "raw king prawns, peeled"], ["30g", "butter", "melted"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "parsley", "chopped"], ["½ tsp", "chilli flakes"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["½ tsp", "black pepper"], ["1", "?lemon", "wedges"]],
    steps: [
      "Take the steaks out of the fridge 20 minutes before. Rub with oil, salt and pepper.",
      "Cook the steaks at 200°C for 8–10 minutes, flipping halfway. Check: rare 52°C, medium-rare 57°C, medium 63°C. Rest them on a warm plate.",
      "Toss the prawns in the garlic butter, chilli and parsley and put them in a small tin in the basket. Cook for 4–5 minutes until pink; they must reach 63°C.",
      "Slice the steaks, pile the prawns on top and pour over the buttery juices. Serve with lemon wedges."
    ] },
  { id: "roast-cajun-bbq-prawn-skewers", name: "Cajun BBQ Prawn Skewers", emoji: "🍤", cat: "fish", temp: 200, time: 7, prep: 10, serves: 2, turn: "flip",
    tags: ["bbq", "quick", "healthy", "low-carb"],
    ing: [["300g", "prawns", "raw king prawns, peeled"], ["1 tbsp", "oil"], ["2 tsp", "cajun seasoning"], ["1 tbsp", "bbq sauce"], ["1 tbsp", "honey"], ["1", "lime", "wedges"], ["1 tbsp", "?fresh coriander", "chopped"]],
    steps: [
      "Toss the prawns in the oil and Cajun seasoning. Thread onto skewers that fit your basket (soak wooden ones first).",
      "Cook at 200°C for 3 minutes, then flip.",
      "Brush with the BBQ sauce and honey mixed together and cook for 3–4 minutes more until pink and sticky. Check they've reached 63°C.",
      "Squeeze over lime and scatter with coriander."
    ] },
  { id: "roast-smoky-bbq-pork-chops", name: "Smoky BBQ Pork Chops", emoji: "🐖", cat: "pork", temp: 190, time: 14, prep: 5, serves: 2, turn: "flip",
    tags: ["bbq", "high-protein", "quick", "family"],
    ing: [["2", "pork chops", "bone-in, 2cm thick"], ["1 tbsp", "oil"], ["1 tsp", "paprika", "smoked"], ["1 tsp", "brown sugar"], ["½ tsp", "garlic granules"], ["½ tsp", "mustard", "powder or English"], ["½ tsp", "salt"], ["2 tbsp", "bbq sauce"]],
    steps: [
      "Snip the fat on the chops every few centimetres. Rub with oil, paprika, sugar, garlic, mustard and salt.",
      "Cook at 190°C for 6 minutes, then flip.",
      "Brush with BBQ sauce and cook for 6–8 minutes more.",
      "Check the chops have reached 71°C. Rest for 5 minutes before serving."
    ] }
);
