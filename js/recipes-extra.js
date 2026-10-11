'use strict';

/*
 * Extra recipes – same format as recipes.js (see the notes at the top of that file).
 * Loaded after recipes.js and simply added to the RECIPES list.
 */
RECIPES.push(
  // ───────────── CHICKEN ─────────────
  {
    id: "whole-roast-chicken", name: "Whole Roast Chicken", emoji: "🍗", cat: "chicken",
    temp: 180, time: 55, prep: 10, serves: 4, turn: "flip",
    tags: ["sunday roast", "family", "gluten-free", "batch cook"],
    ing: [["1.5kg", "whole chicken", "check it fits your basket (5.5L+)"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["1 tsp", "paprika"], ["1 tsp", "garlic granules"], ["1 tsp", "?thyme"], ["1", "?lemon", "halved"]],
    steps: [
      "Pat the chicken dry. Rub with oil, salt, paprika, garlic granules and thyme. Pop the lemon halves inside.",
      "Place breast-side down in the basket and cook at 180°C for 30 minutes.",
      "Carefully turn it breast-side up (use tongs and a wooden spoon in the cavity) and cook for 20–25 minutes more.",
      "Check the thickest part of the thigh has reached 75°C and the juices run clear.",
      "Rest for 10 minutes before carving – use the juices in the drawer for gravy."
    ]
  },
  {
    id: "chicken-kiev", name: "Garlic Butter Chicken Kievs", emoji: "🧈", cat: "chicken",
    temp: 180, time: 20, prep: 25, serves: 2, turn: "flip",
    tags: ["classic", "retro", "family"],
    ing: [["2", "chicken breast"], ["50g", "butter", "softened"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "?parsley", "chopped"], ["40g", "plain flour"], ["1", "eggs", "beaten"], ["80g", "breadcrumbs"], ["½ tsp", "salt"], ["spray", "oil"]],
    steps: [
      "Mix the butter, garlic, parsley and a pinch of salt. Roll into 2 small logs and chill until firm.",
      "Cut a deep pocket into the side of each breast (don't cut through). Push in the garlic butter and press the opening shut.",
      "Coat in flour, then egg, then breadcrumbs. Repeat the egg and crumbs for a seal that won't leak. Spray with oil.",
      "Cook at 180°C for 20 minutes, turning carefully at halfway.",
      "Check the chicken has reached 75°C. Rest for 3 minutes – the butter inside is very hot."
    ]
  },
  {
    id: "buffalo-wings", name: "Buffalo Wings", emoji: "🔥", cat: "chicken",
    temp: 200, time: 24, prep: 5, serves: 2, turn: "shake",
    tags: ["spicy", "party", "game day", "gluten-free"],
    ing: [["800g", "chicken wings"], ["1 tbsp", "cornflour"], ["1 tsp", "salt"], ["1 tsp", "garlic granules"], ["4 tbsp", "hot sauce"], ["30g", "butter"], ["4 tbsp", "?greek yoghurt", "for dipping"]],
    steps: [
      "Pat the wings dry and toss with the cornflour, salt and garlic granules.",
      "Cook at 200°C for 22–24 minutes, shaking at halfway, until crisp and 75°C inside.",
      "Melt the butter with the hot sauce (20 seconds in the microwave).",
      "Toss the hot wings in the sauce and serve with yoghurt dip."
    ]
  },
  {
    id: "garlic-parmesan-wings", name: "Garlic Parmesan Wings", emoji: "🧄", cat: "chicken",
    temp: 200, time: 22, prep: 5, serves: 2, turn: "shake",
    tags: ["party", "crispy", "gluten-free"],
    ing: [["800g", "chicken wings"], ["1 tbsp", "cornflour"], ["1 tsp", "salt"], ["30g", "butter", "melted"], ["3 cloves", "garlic", "crushed"], ["30g", "parmesan", "finely grated"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Pat the wings dry and toss with the cornflour and salt.",
      "Cook at 200°C for 22 minutes, shaking at halfway, until golden and 75°C inside.",
      "Mix the melted butter and garlic. Toss the wings in it.",
      "Shower with parmesan and parsley and serve straight away."
    ]
  },
  {
    id: "chicken-katsu", name: "Chicken Katsu Curry", emoji: "🍛", cat: "chicken",
    temp: 200, time: 14, prep: 15, serves: 2, turn: "flip",
    tags: ["fakeaway", "japanese", "curry", "crispy"],
    ing: [["2", "chicken breast", "butterflied and flattened"], ["40g", "plain flour"], ["1", "eggs", "beaten"], ["80g", "breadcrumbs", "panko"], ["spray", "oil"], ["1 tbsp", "curry powder"], ["1", "onion", "finely chopped"], ["1", "carrots", "grated"], ["1 tbsp", "soy sauce"], ["1 tsp", "honey"], ["300ml", "water"], ["1 tbsp", "cornflour"], ["to serve", "?rice"]],
    steps: [
      "For the sauce: soften the onion and carrot in a little oil in a pan for 5 minutes. Stir in the curry powder, then the water, soy and honey. Simmer for 10 minutes.",
      "Thicken the sauce with the cornflour mixed with a splash of water, then blend if you like it smooth.",
      "Coat the chicken in flour, egg, then panko. Spray well with oil.",
      "Cook at 200°C for 12–14 minutes, turning at halfway, until golden and 75°C inside.",
      "Slice and serve on rice with the curry sauce poured alongside."
    ]
  },
  {
    id: "chicken-parmigiana", name: "Chicken Parmigiana", emoji: "🧀", cat: "chicken",
    temp: 200, time: 16, prep: 15, serves: 2, turn: "flip",
    tags: ["italian", "family", "cheesy"],
    ing: [["2", "chicken breast", "flattened to 1.5cm"], ["40g", "plain flour"], ["1", "eggs", "beaten"], ["60g", "breadcrumbs"], ["20g", "parmesan", "grated"], ["1 tsp", "oregano"], ["6 tbsp", "passata"], ["100g", "mozzarella", "sliced or grated"], ["spray", "oil"]],
    steps: [
      "Mix the breadcrumbs with the parmesan and oregano.",
      "Coat the chicken in flour, egg, then crumbs. Spray with oil.",
      "Cook at 200°C for 12 minutes, turning at halfway.",
      "Spoon the passata over each piece and top with mozzarella. Cook for 3–4 more minutes until bubbling.",
      "Check the chicken has reached 75°C. Serve with spaghetti or salad."
    ]
  },
  {
    id: "jerk-chicken-thighs", name: "Jerk Chicken Thighs", emoji: "🌴", cat: "chicken",
    temp: 200, time: 20, prep: 10, serves: 4, turn: "flip",
    tags: ["caribbean", "spicy", "gluten-free", "bbq"],
    ing: [["8", "chicken thighs", "bone-in, skin-on"], ["2 tbsp", "jerk seasoning"], ["1", "lime", "juiced"], ["1 tbsp", "honey"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Slash the thighs a few times. Rub with the jerk seasoning, lime juice, honey, oil and salt. Marinate for at least 30 minutes.",
      "Cook skin-side down at 200°C for 10 minutes.",
      "Turn skin-side up and cook for 10 more minutes until charred and crispy.",
      "Check the meat next to the bone has reached 75°C. Scatter with spring onions and serve with rice and peas."
    ]
  },
  {
    id: "chicken-shawarma", name: "Chicken Shawarma Wraps", emoji: "🌯", cat: "chicken",
    temp: 200, time: 16, prep: 15, serves: 4, turn: "shake",
    tags: ["middle eastern", "fakeaway", "wraps"],
    ing: [["6", "chicken thighs", "boneless, skinless"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["½ tsp", "cinnamon"], ["½ tsp", "ground coriander"], ["2 cloves", "garlic", "crushed"], ["1", "lemon", "juiced"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["4", "pitta bread"], ["100g", "greek yoghurt"], ["to serve", "?lettuce"], ["½", "?cucumber"], ["1", "?red onion", "thinly sliced"]],
    steps: [
      "Mix the spices, garlic, half the lemon juice, oil and salt. Coat the chicken and marinate for 30 minutes if you can.",
      "Cook at 200°C for 16 minutes, turning at halfway, until charred at the edges and 75°C inside.",
      "Rest for 3 minutes, then slice thinly.",
      "Mix the yoghurt with the rest of the lemon juice and a pinch of salt.",
      "Warm the pittas for 1 minute and stuff with chicken, salad and the yoghurt sauce."
    ]
  },
  {
    id: "cajun-chicken-breast", name: "Cajun Chicken Breast", emoji: "🤠", cat: "chicken",
    temp: 190, time: 16, prep: 5, serves: 2, turn: "flip",
    tags: ["quick", "spicy", "high-protein", "gluten-free"],
    ing: [["2", "chicken breast"], ["2 tsp", "cajun seasoning"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["1", "?lime"]],
    steps: [
      "Bash the chicken to an even 2cm thickness.",
      "Rub with the oil, Cajun seasoning and salt.",
      "Cook at 190°C for 16 minutes, turning at halfway.",
      "Check it has reached 75°C. Rest for 5 minutes, then slice and squeeze over the lime."
    ]
  },
  {
    id: "hunters-chicken", name: "Hunter's Chicken", emoji: "🥓", cat: "chicken",
    temp: 190, time: 20, prep: 10, serves: 2, turn: "none",
    tags: ["pub classic", "bbq", "cheesy", "family"],
    ing: [["2", "chicken breast"], ["4 rashers", "bacon", "streaky"], ["4 tbsp", "bbq sauce"], ["60g", "cheddar", "grated"], ["½ tsp", "paprika"], ["¼ tsp", "salt"]],
    steps: [
      "Season the chicken with paprika and salt, then wrap each breast in 2 rashers of bacon.",
      "Cook at 190°C for 16 minutes.",
      "Spoon the BBQ sauce over the top and scatter with cheese.",
      "Cook for 4 more minutes until the cheese is bubbling. Check the chicken has reached 75°C. Serve with chips."
    ]
  },
  {
    id: "popcorn-chicken", name: "Popcorn Chicken", emoji: "🍿", cat: "chicken",
    temp: 200, time: 10, prep: 15, serves: 4, turn: "shake",
    tags: ["kids", "party", "crispy", "fakeaway"],
    ing: [["500g", "chicken breast", "cut into 2cm bites"], ["100ml", "milk"], ["1", "lemon", "juice only"], ["60g", "plain flour"], ["30g", "cornflour"], ["1 tsp", "paprika"], ["1 tsp", "garlic granules"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["spray", "oil"]],
    steps: [
      "Mix the milk and lemon juice (a quick buttermilk) and soak the chicken for 20 minutes.",
      "Mix the flour, cornflour, paprika, garlic granules, salt and pepper in a bag.",
      "Lift the chicken out, toss it in the bag until coated, then spray well with oil.",
      "Cook at 200°C for 10 minutes, shaking at halfway, until crisp and 75°C inside."
    ]
  },
  {
    id: "southern-fried-chicken", name: "Southern-Style Fried Chicken", emoji: "🍗", cat: "chicken",
    temp: 190, time: 22, prep: 20, serves: 4, turn: "flip",
    tags: ["fakeaway", "crispy", "weekend", "family"],
    ing: [["8", "chicken drumsticks"], ["200ml", "milk"], ["1", "lemon", "juice only"], ["120g", "plain flour"], ["2 tsp", "paprika"], ["1 tsp", "garlic granules"], ["1 tsp", "mixed herbs"], ["½ tsp", "?chilli powder"], ["1½ tsp", "salt"], ["1 tsp", "black pepper"], ["spray", "oil"]],
    steps: [
      "Mix the milk and lemon juice and soak the chicken for at least 1 hour (or overnight in the fridge).",
      "Mix the flour, spices, herbs, salt and pepper. Dredge the chicken, dip back in the milk, then dredge again for a craggy crust.",
      "Spray every bit of flour with oil – dry patches stay powdery.",
      "Cook at 190°C for 22 minutes, turning and spraying again at halfway.",
      "Check the meat next to the bone has reached 75°C."
    ]
  },
  {
    id: "chicken-satay-skewers", name: "Chicken Satay Skewers", emoji: "🥜", cat: "chicken",
    temp: 200, time: 12, prep: 15, serves: 4, turn: "flip",
    tags: ["asian", "bbq", "party"],
    ing: [["600g", "chicken thighs", "boneless, cut into strips"], ["2 tbsp", "soy sauce"], ["1 tsp", "curry powder"], ["1 tbsp", "honey"], ["3 tbsp", "peanut butter"], ["100ml", "coconut milk"], ["1", "lime", "juiced"], ["1 tsp", "?sweet chilli sauce"]],
    steps: [
      "Mix 1 tbsp soy, the curry powder and honey. Coat the chicken and thread onto skewers that fit your basket.",
      "Cook at 200°C for 12 minutes, turning at halfway, until charred and 75°C inside.",
      "Meanwhile warm the peanut butter, coconut milk, the rest of the soy, lime juice and sweet chilli in a small pan, stirring until smooth.",
      "Serve the skewers with the satay sauce for dipping."
    ]
  },
  {
    id: "pesto-chicken-traybake", name: "Pesto Chicken & Tomatoes", emoji: "🌿", cat: "chicken",
    temp: 190, time: 18, prep: 5, serves: 2, turn: "none",
    tags: ["italian", "quick", "weeknight", "gluten-free"],
    ing: [["2", "chicken breast"], ["2 tbsp", "pesto"], ["200g", "cherry tomatoes"], ["60g", "mozzarella", "torn"], ["1 tsp", "oil"], ["¼ tsp", "salt"]],
    steps: [
      "Score the top of the chicken a few times and spread with the pesto. Season with salt.",
      "Cook at 190°C for 12 minutes.",
      "Add the tomatoes (tossed in oil) around the chicken and top the chicken with mozzarella.",
      "Cook for 6 more minutes until the cheese melts and the tomatoes burst. Check the chicken has reached 75°C."
    ]
  },
  {
    id: "turkey-breast-steaks", name: "Lemon & Thyme Turkey Steaks", emoji: "🦃", cat: "chicken",
    temp: 190, time: 12, prep: 5, serves: 2, turn: "flip",
    tags: ["healthy", "quick", "high-protein", "gluten-free"],
    ing: [["2", "turkey breast", "steaks, about 1.5cm thick"], ["1", "lemon", "zest and juice"], ["1 tsp", "thyme"], ["1 clove", "garlic", "crushed"], ["1 tbsp", "oil"], ["½ tsp", "salt"]],
    steps: [
      "Mix the lemon, thyme, garlic, oil and salt. Coat the turkey.",
      "Cook at 190°C for 10–12 minutes, turning at halfway.",
      "Check it has reached 75°C – turkey dries out quickly, so don't overdo it.",
      "Rest for 3 minutes and serve with salad or new potatoes."
    ]
  },

  // ───────────── BEEF ─────────────
  {
    id: "steak-fajitas", name: "Steak Fajitas", emoji: "🌮", cat: "beef",
    temp: 200, time: 10, prep: 10, serves: 3, turn: "shake",
    tags: ["mexican", "quick", "fakeaway"],
    ing: [["400g", "beef steak", "rump, thinly sliced"], ["2", "bell peppers", "sliced"], ["1", "onion", "sliced"], ["2 tbsp", "fajita seasoning"], ["1 tbsp", "oil"], ["6", "tortilla wraps"], ["4 tbsp", "?salsa"], ["4 tbsp", "?greek yoghurt"], ["1", "?lime"]],
    steps: [
      "Toss the peppers and onion in half the oil and seasoning. Cook at 200°C for 5 minutes.",
      "Toss the steak in the rest of the oil and seasoning and add to the basket.",
      "Cook for 5 more minutes, shaking at halfway – the steak should still be slightly pink.",
      "Warm the wraps for 1 minute and fill with steak, veg, salsa, yoghurt and a squeeze of lime."
    ]
  },
  {
    id: "garlic-steak-bites", name: "Garlic Butter Steak Bites", emoji: "🥩", cat: "beef",
    temp: 200, time: 8, prep: 5, serves: 2, turn: "shake",
    tags: ["quick", "low-carb", "gluten-free", "date night"],
    ing: [["400g", "beef steak", "sirloin or rump, 2.5cm cubes"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["½ tsp", "black pepper"], ["25g", "butter", "melted"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Toss the steak with the oil, salt and pepper.",
      "Cook at 200°C for 6–8 minutes, shaking at halfway (6 for pink, 8 for medium).",
      "Mix the melted butter and garlic and toss the hot steak in it.",
      "Scatter with parsley. Aim for 57–63°C inside for medium-rare to medium."
    ]
  },
  {
    id: "mini-beef-wellingtons", name: "Mini Beef Wellingtons", emoji: "🥐", cat: "beef",
    temp: 190, time: 15, prep: 25, serves: 4, turn: "none",
    tags: ["christmas", "date night", "dinner party"],
    ing: [["4", "beef steak", "fillet medallions, 3cm thick"], ["250g", "mushrooms", "very finely chopped"], ["1 clove", "garlic", "crushed"], ["1 tsp", "mustard"], ["320g sheet", "puff pastry"], ["1", "eggs", "beaten"], ["1 tsp", "?thyme"], ["½ tsp", "salt"], ["1 tbsp", "oil"]],
    steps: [
      "Sear the steaks in a very hot pan for 1 minute each side. Cool, then brush with mustard.",
      "Fry the mushrooms, garlic and thyme until all the liquid has gone. Season and cool.",
      "Cut the pastry into 4. Put a spoon of mushrooms on each, top with a steak, wrap and seal with egg. Brush the tops with egg.",
      "Cook at 190°C for 15 minutes until golden. Rest for 5 minutes – the beef will be medium-rare (about 55°C)."
    ]
  },
  {
    id: "cheeseburger-sliders", name: "Cheeseburger Sliders", emoji: "🍔", cat: "beef",
    temp: 200, time: 8, prep: 10, serves: 4, turn: "flip",
    tags: ["party", "kids", "fakeaway"],
    ing: [["400g", "beef mince"], ["½ tsp", "salt"], ["½ small", "onion", "very finely chopped"], ["8 slices", "cheddar", "small squares"], ["8", "burger buns", "mini/slider buns"], ["to serve", "?tomato ketchup"], ["to serve", "?mustard"], ["to serve", "?lettuce"]],
    steps: [
      "Mix the mince, onion and salt. Shape into 8 small flat patties.",
      "Cook at 200°C for 7–8 minutes, turning at halfway. Add the cheese for the last minute.",
      "Check they have reached 75°C.",
      "Toast the buns for 1 minute and build your mini burgers."
    ]
  },
  {
    id: "beef-taquitos", name: "Cheesy Beef Taquitos", emoji: "🌯", cat: "beef",
    temp: 200, time: 8, prep: 20, serves: 4, turn: "flip",
    tags: ["mexican", "party", "kids", "fakeaway"],
    ing: [["400g", "beef mince"], ["2 tbsp", "fajita seasoning"], ["4 tbsp", "salsa"], ["100g", "cheddar", "grated"], ["8", "tortilla wraps", "small"], ["spray", "oil"], ["4 tbsp", "?greek yoghurt"]],
    steps: [
      "Brown the mince in a pan, stir in the seasoning and salsa and cook for 5 minutes. Cool slightly.",
      "Spoon a line of mince and cheese along each wrap and roll up tightly. Place seam-side down.",
      "Spray with oil and cook at 200°C for 7–8 minutes, turning at halfway, until crisp.",
      "Serve with yoghurt and extra salsa."
    ]
  },
  {
    id: "mini-meatloaves", name: "Mini BBQ Meatloaves", emoji: "🍖", cat: "beef",
    temp: 180, time: 18, prep: 15, serves: 4, turn: "none",
    tags: ["family", "comfort", "batch cook"],
    ing: [["500g", "beef mince"], ["1", "onion", "finely grated"], ["40g", "breadcrumbs"], ["1", "eggs"], ["1 tbsp", "worcestershire sauce"], ["1 tsp", "mixed herbs"], ["½ tsp", "salt"], ["4 tbsp", "bbq sauce"]],
    steps: [
      "Mix everything except the BBQ sauce. Shape into 4 small loaves.",
      "Line the basket with pierced baking paper and cook at 180°C for 14 minutes.",
      "Brush with the BBQ sauce and cook for 4 more minutes.",
      "Check they have reached 75°C in the centre. Rest for 5 minutes and serve with mash."
    ]
  },
  {
    id: "steak-chimichurri", name: "Sirloin with Chimichurri", emoji: "🌿", cat: "beef",
    temp: 200, time: 10, prep: 10, serves: 2, turn: "flip",
    tags: ["argentinian", "gluten-free", "date night"],
    ing: [["2", "beef steak", "sirloin, 2.5cm thick"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["small bunch", "parsley", "finely chopped"], ["1 clove", "garlic", "crushed"], ["1 tsp", "oregano"], ["½ tsp", "chilli flakes"], ["3 tbsp", "oil", "for the sauce"], ["1 tbsp", "balsamic vinegar", "or red wine vinegar"]],
    steps: [
      "Mix the parsley, garlic, oregano, chilli flakes, 3 tbsp oil, vinegar and a pinch of salt. Leave to stand.",
      "Rub the steaks with oil and salt. Cook at 200°C for 9–10 minutes for medium-rare, turning at halfway.",
      "Check: medium-rare 57°C · medium 63°C. Rest for 5 minutes.",
      "Slice and spoon over the chimichurri."
    ]
  },
  {
    id: "teriyaki-beef-skewers", name: "Teriyaki Beef Skewers", emoji: "🍢", cat: "beef",
    temp: 200, time: 8, prep: 20, serves: 4, turn: "flip",
    tags: ["asian", "bbq", "sticky"],
    ing: [["500g", "beef steak", "rump, 3cm cubes"], ["4 tbsp", "teriyaki sauce"], ["1 clove", "garlic", "crushed"], ["1 tsp", "?ginger", "grated"], ["1", "?bell peppers", "chunks"], ["1 tsp", "?sesame seeds"], ["2", "?spring onions"]],
    steps: [
      "Marinate the beef in 3 tbsp teriyaki, garlic and ginger for 20 minutes.",
      "Thread onto skewers with the pepper.",
      "Cook at 200°C for 8 minutes, turning at halfway and brushing with the last of the teriyaki.",
      "Scatter with sesame seeds and spring onions. Aim for 57–63°C for a pink middle."
    ]
  },
  {
    id: "beef-samosas", name: "Spiced Beef Samosas", emoji: "🥟", cat: "beef",
    temp: 190, time: 10, prep: 25, serves: 4, turn: "flip",
    tags: ["indian", "party", "fakeaway"],
    ing: [["300g", "beef mince"], ["1", "onion", "finely chopped"], ["100g", "peas", "frozen"], ["1 tbsp", "curry powder"], ["½ tsp", "salt"], ["6 sheets", "filo pastry"], ["30g", "butter", "melted"]],
    steps: [
      "Fry the onion and mince until browned. Add the curry powder, peas and salt and cook for 5 minutes. Cool.",
      "Cut each filo sheet into 3 long strips. Brush with butter, put a spoon of filling at the end and fold into triangles all the way up.",
      "Brush the outsides with butter.",
      "Cook at 190°C for 10 minutes, turning at halfway, until golden. Serve with mango chutney or yoghurt."
    ]
  },
  {
    id: "stuffed-jacket-chilli", name: "Chilli Beef Jacket Potatoes", emoji: "🥔", cat: "beef",
    temp: 200, time: 40, prep: 15, serves: 2, turn: "flip",
    tags: ["comfort", "family", "gluten-free", "leftovers"],
    ing: [["2 large", "potatoes", "baking potatoes"], ["250g", "beef mince"], ["1", "onion", "chopped"], ["200g", "passata"], ["200g", "black beans", "drained"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["½ tsp", "?chilli powder"], ["60g", "cheddar", "grated"], ["1 tsp", "oil"], ["½ tsp", "salt"]],
    steps: [
      "Prick the potatoes, rub with oil and salt and cook at 200°C for 40 minutes, turning at halfway.",
      "Meanwhile brown the mince and onion, add the spices, passata and beans and simmer for 15 minutes.",
      "Split the potatoes open, fill with chilli and top with cheese.",
      "Return to the air fryer for 2 minutes to melt the cheese."
    ]
  },

  // ───────────── PORK ─────────────
  {
    id: "sticky-bbq-ribs", name: "Sticky BBQ Ribs", emoji: "🍖", cat: "pork",
    temp: 180, time: 30, prep: 10, serves: 2, turn: "flip",
    tags: ["bbq", "weekend", "sticky", "gluten-free"],
    ing: [["1kg", "pork ribs", "cut into 3–4 rib sections"], ["1 tbsp", "brown sugar"], ["1 tsp", "paprika"], ["1 tsp", "garlic granules"], ["1 tsp", "salt"], ["5 tbsp", "bbq sauce"]],
    steps: [
      "Pull the thin membrane off the back of the ribs if it's there. Rub with the sugar, paprika, garlic granules and salt.",
      "Cook at 180°C for 25 minutes, turning at halfway.",
      "Brush thickly with BBQ sauce and cook for 5 more minutes until sticky.",
      "The meat should be pulling away from the bone and at least 71°C (it'll be well above)."
    ]
  },
  {
    id: "pork-tenderloin-apple", name: "Pork Fillet with Apples", emoji: "🍎", cat: "pork",
    temp: 190, time: 20, prep: 10, serves: 3, turn: "flip",
    tags: ["sunday", "autumn", "gluten-free"],
    ing: [["500g", "pork fillet"], ["1 tbsp", "mustard"], ["1 tbsp", "honey"], ["1 tsp", "thyme"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["2", "apples", "cut into wedges"], ["1", "red onion", "wedges"]],
    steps: [
      "Rub the pork with oil, salt and thyme. Mix the mustard and honey.",
      "Cook the pork at 190°C for 10 minutes.",
      "Turn it, brush with honey mustard and add the apples and onion around it.",
      "Cook for 10 more minutes until the pork reaches 71°C. Rest for 5 minutes, then slice."
    ]
  },
  {
    id: "char-siu-pork", name: "Char Siu Pork", emoji: "🥡", cat: "pork",
    temp: 190, time: 22, prep: 10, serves: 3, turn: "flip",
    tags: ["chinese", "fakeaway", "sticky"],
    ing: [["500g", "pork fillet", "or pork shoulder steaks"], ["3 tbsp", "hoisin sauce"], ["1 tbsp", "soy sauce"], ["1 tbsp", "honey"], ["½ tsp", "five spice"], ["1 clove", "garlic", "crushed"], ["to serve", "?rice"], ["2", "?spring onions"]],
    steps: [
      "Mix the hoisin, soy, honey, five spice and garlic. Keep 2 tbsp aside. Marinate the pork in the rest for at least 1 hour.",
      "Line the basket with pierced baking paper. Cook at 190°C for 18 minutes, turning at halfway.",
      "Brush with the reserved glaze and cook for 4 more minutes until sticky and charred at the edges.",
      "Check it has reached 71°C. Rest for 5 minutes, slice and serve on rice."
    ]
  },
  {
    id: "pork-schnitzel", name: "Pork Schnitzel", emoji: "🍋", cat: "pork",
    temp: 200, time: 10, prep: 15, serves: 2, turn: "flip",
    tags: ["german", "crispy", "quick"],
    ing: [["2", "pork chops", "boneless, bashed thin (5mm)"], ["40g", "plain flour"], ["1", "eggs", "beaten"], ["80g", "breadcrumbs"], ["½ tsp", "salt"], ["spray", "oil"], ["1", "lemon", "wedges"]],
    steps: [
      "Bash the pork between cling film until about 5mm thick. Season with salt.",
      "Coat in flour, egg, then breadcrumbs. Spray well with oil.",
      "Cook at 200°C for 8–10 minutes, turning at halfway, until golden.",
      "Check it has reached 71°C. Serve with lemon wedges and potato salad."
    ]
  },
  {
    id: "sausage-pepper-traybake", name: "Sausage & Pepper Traybake", emoji: "🌭", cat: "pork",
    temp: 190, time: 20, prep: 10, serves: 3, turn: "shake",
    tags: ["weeknight", "family", "one-pot", "gluten-free"],
    ing: [["6", "sausages"], ["2", "bell peppers", "chunks"], ["1", "red onion", "wedges"], ["300g", "new potatoes", "halved"], ["1 tbsp", "oil"], ["1 tsp", "paprika"], ["1 tsp", "mixed herbs"], ["½ tsp", "salt"]],
    steps: [
      "Toss the potatoes with half the oil, paprika and salt. Cook at 190°C for 6 minutes.",
      "Add the sausages, peppers and onion tossed in the rest of the oil and herbs.",
      "Cook for 14 more minutes, shaking at halfway.",
      "Check the sausages have reached 75°C."
    ]
  },
  {
    id: "toad-in-the-hole", name: "Toad in the Hole", emoji: "🐸", cat: "pork",
    temp: 200, time: 25, prep: 10, serves: 3, turn: "none",
    tags: ["british", "comfort", "family", "classic"],
    ing: [["6", "sausages"], ["100g", "plain flour"], ["2", "eggs"], ["150ml", "milk"], ["1 tbsp", "oil"], ["¼ tsp", "salt"], ["to serve", "?peas"]],
    steps: [
      "Whisk the flour, eggs, milk and salt into a smooth batter. Rest for 15 minutes.",
      "Put the sausages and oil in a 20cm tin that fits your basket. Cook at 200°C for 8 minutes.",
      "Quickly pour the batter around the hot sausages.",
      "Cook for 15–17 minutes without opening the drawer, until risen and golden. Check the sausages have reached 75°C. Serve with gravy and peas."
    ]
  },
  {
    id: "full-english", name: "Full English Breakfast", emoji: "🍳", cat: "pork",
    temp: 180, time: 15, prep: 5, serves: 2, turn: "flip",
    tags: ["breakfast", "brunch", "weekend", "british"],
    ing: [["4", "sausages"], ["4 rashers", "bacon"], ["2", "tomatoes", "halved"], ["150g", "mushrooms"], ["2", "eggs"], ["1 tsp", "oil"], ["2 slices", "?bread", "toasted"]],
    steps: [
      "Cook the sausages at 180°C for 5 minutes.",
      "Add the bacon, tomatoes and mushrooms (tossed in oil). Crack the eggs into 2 greased ramekins and add those too.",
      "Cook for 9–10 more minutes, turning the sausages and bacon at halfway, until the egg whites are set.",
      "Check the sausages have reached 75°C. Serve with toast and beans."
    ]
  },
  {
    id: "chorizo-potatoes", name: "Chorizo & Paprika Potatoes", emoji: "🌶️", cat: "pork",
    temp: 200, time: 22, prep: 10, serves: 2, turn: "shake",
    tags: ["spanish", "tapas", "gluten-free"],
    ing: [["500g", "new potatoes", "halved"], ["100g", "chorizo", "sliced into coins"], ["1 tbsp", "oil"], ["1 tsp", "paprika"], ["½ tsp", "salt"], ["1", "?red onion", "wedges"], ["1 tbsp", "?parsley"]],
    steps: [
      "Toss the potatoes with the oil, paprika and salt. Cook at 200°C for 14 minutes, shaking at halfway.",
      "Add the chorizo and onion and shake well.",
      "Cook for 8 more minutes until the chorizo is crisp and the potatoes are golden.",
      "Scatter with parsley."
    ]
  },
  {
    id: "asian-pork-meatballs", name: "Asian Pork Meatballs", emoji: "🥢", cat: "pork",
    temp: 200, time: 12, prep: 15, serves: 3, turn: "shake",
    tags: ["asian", "family", "sticky"],
    ing: [["500g", "pork mince"], ["2", "spring onions", "finely sliced"], ["1 tsp", "ginger", "grated"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "soy sauce"], ["30g", "breadcrumbs"], ["3 tbsp", "sweet chilli sauce"], ["1 tsp", "?sesame seeds"], ["to serve", "?rice"]],
    steps: [
      "Mix the pork, spring onions, ginger, garlic, soy and breadcrumbs. Roll into 18 balls.",
      "Cook at 200°C for 10 minutes, shaking at halfway.",
      "Toss in the sweet chilli sauce and cook for 2 more minutes until sticky.",
      "Check they have reached 75°C. Scatter with sesame seeds and serve with rice."
    ]
  },
  {
    id: "scotch-eggs", name: "Scotch Eggs", emoji: "🥚", cat: "pork",
    temp: 190, time: 15, prep: 30, serves: 4, turn: "flip",
    tags: ["picnic", "british", "party"],
    ing: [["5", "eggs", "4 soft-boiled (6½ min), peeled + 1 beaten"], ["400g", "sausages", "skins removed"], ["1 tsp", "mixed herbs"], ["40g", "plain flour"], ["80g", "breadcrumbs"], ["spray", "oil"]],
    steps: [
      "Mix the sausage meat with the herbs and divide into 4. Flatten each into a circle between cling film.",
      "Dust the boiled eggs with flour and wrap each in sausage meat, sealing the joins.",
      "Roll in flour, beaten egg, then breadcrumbs. Spray with oil.",
      "Cook at 190°C for 14–15 minutes, turning at halfway, until golden and the sausage reaches 75°C."
    ]
  },
  {
    id: "honey-mustard-sausages", name: "Honey Mustard Sticky Sausages", emoji: "🍯", cat: "pork",
    temp: 180, time: 14, prep: 3, serves: 4, turn: "shake",
    tags: ["kids", "party", "quick", "sticky"],
    ing: [["12", "cocktail sausages"], ["2 tbsp", "honey"], ["1 tbsp", "mustard"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Cook the sausages at 180°C for 10 minutes, shaking at halfway.",
      "Mix the honey and mustard and toss the sausages in it.",
      "Cook for 3–4 more minutes until sticky.",
      "Check they have reached 75°C and sprinkle with sesame seeds."
    ]
  },

  // ───────────── LAMB ─────────────
  {
    id: "harissa-lamb-chops", name: "Harissa Lamb Chops", emoji: "🌶️", cat: "lamb",
    temp: 200, time: 10, prep: 15, serves: 2, turn: "flip",
    tags: ["spicy", "north african", "gluten-free"],
    ing: [["6", "lamb chops"], ["2 tbsp", "harissa"], ["2 tbsp", "greek yoghurt"], ["½", "lemon", "juiced"], ["½ tsp", "salt"], ["1 tbsp", "?parsley"]],
    steps: [
      "Mix the harissa, 1 tbsp yoghurt, lemon juice and salt. Coat the chops and marinate for 15 minutes.",
      "Cook at 200°C for 8–10 minutes, turning at halfway.",
      "Pink: 63°C. Well done: 71°C. Rest for 3 minutes.",
      "Serve with the rest of the yoghurt and parsley, with couscous or flatbreads."
    ]
  },
  {
    id: "lamb-kebabs", name: "Lamb & Red Onion Kebabs", emoji: "🍢", cat: "lamb",
    temp: 200, time: 10, prep: 20, serves: 4, turn: "flip",
    tags: ["bbq", "summer", "greek"],
    ing: [["500g", "lamb leg steaks", "3cm cubes"], ["1", "red onion", "chunks"], ["1", "bell peppers", "chunks"], ["1 tsp", "oregano"], ["1 tsp", "cumin"], ["2 cloves", "garlic"], ["1", "lemon", "juiced"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["4", "?pitta bread"]],
    steps: [
      "Mix the oregano, cumin, garlic, lemon juice, oil and salt. Marinate the lamb for at least 20 minutes.",
      "Thread onto skewers with the onion and pepper.",
      "Cook at 200°C for 10 minutes, turning at halfway.",
      "Pink: 63°C. Rest for 3 minutes and serve in warm pittas."
    ]
  },
  {
    id: "moroccan-lamb-meatballs", name: "Moroccan Lamb Meatballs", emoji: "🧆", cat: "lamb",
    temp: 190, time: 12, prep: 15, serves: 4, turn: "shake",
    tags: ["north african", "family", "batch cook"],
    ing: [["500g", "lamb mince"], ["1", "onion", "grated"], ["1 tsp", "cumin"], ["1 tsp", "cinnamon"], ["1 tsp", "paprika"], ["1 tbsp", "?harissa"], ["30g", "breadcrumbs"], ["½ tsp", "salt"], ["400g", "passata"], ["1 tbsp", "?honey"]],
    steps: [
      "Mix the lamb, onion, spices, harissa, breadcrumbs and salt. Roll into 20 balls.",
      "Cook at 190°C for 12 minutes, shaking at halfway.",
      "Meanwhile simmer the passata with the honey and a pinch of cumin for 10 minutes.",
      "Check the meatballs have reached 75°C, then drop them into the sauce. Serve with couscous."
    ]
  },
  {
    id: "herb-crusted-rack-lamb", name: "Herb-Crusted Rack of Lamb", emoji: "🐑", cat: "lamb",
    temp: 200, time: 15, prep: 10, serves: 2, turn: "none",
    tags: ["date night", "sunday", "dinner party"],
    ing: [["1", "rack of lamb", "6–8 bones"], ["1 tbsp", "mustard"], ["40g", "breadcrumbs"], ["1 tsp", "rosemary", "finely chopped"], ["1 tbsp", "parsley", "chopped"], ["1 clove", "garlic", "crushed"], ["1 tbsp", "oil"], ["½ tsp", "salt"]],
    steps: [
      "Season the lamb and sear it fat-side down in a hot pan for 2 minutes (optional, but tastier).",
      "Mix the breadcrumbs, herbs, garlic and oil. Brush the fat side with mustard and press on the crumbs.",
      "Cook crumb-side up at 200°C for 13–15 minutes for pink.",
      "Check: pink 60–63°C. Rest for 8 minutes, then slice between the bones."
    ]
  },
  {
    id: "lamb-flatbreads", name: "Spiced Lamb Flatbreads", emoji: "🫓", cat: "lamb",
    temp: 200, time: 8, prep: 10, serves: 2, turn: "none",
    tags: ["quick", "middle eastern", "lunch"],
    ing: [["2", "naan", "or large flatbreads"], ["250g", "lamb mince"], ["1 tsp", "cumin"], ["½ tsp", "cinnamon"], ["1 clove", "garlic", "crushed"], ["½ tsp", "salt"], ["50g", "feta", "crumbled"], ["2 tbsp", "?greek yoghurt"], ["1 tbsp", "?parsley"]],
    steps: [
      "Mix the lamb, spices, garlic and salt.",
      "Spread the raw mince thinly over the flatbreads, right to the edges.",
      "Cook one at a time at 200°C for 7–8 minutes until the lamb is browned and cooked through (75°C).",
      "Top with feta, yoghurt and parsley, then slice into strips."
    ]
  },
  {
    id: "lamb-steaks-rosemary-potatoes", name: "Lamb Steaks with Rosemary Potatoes", emoji: "🥔", cat: "lamb",
    temp: 200, time: 20, prep: 10, serves: 2, turn: "shake",
    tags: ["sunday", "one-pot", "gluten-free"],
    ing: [["2", "lamb leg steaks"], ["400g", "new potatoes", "halved"], ["2 tsp", "rosemary"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["1 tbsp", "?mint sauce"]],
    steps: [
      "Toss the potatoes with half the oil, half the rosemary and salt. Cook at 200°C for 10 minutes.",
      "Rub the lamb with the rest of the oil, rosemary, garlic and salt.",
      "Shake the potatoes and lay the lamb on top. Cook for 10 more minutes, turning the lamb at halfway.",
      "Pink: 63°C. Rest the lamb for 3 minutes and serve with mint sauce."
    ]
  },
  {
    id: "lamb-samosas", name: "Lamb & Pea Samosas", emoji: "🥟", cat: "lamb",
    temp: 190, time: 10, prep: 25, serves: 4, turn: "flip",
    tags: ["indian", "party", "fakeaway"],
    ing: [["300g", "lamb mince"], ["1", "onion", "finely chopped"], ["100g", "peas"], ["1 tbsp", "garam masala"], ["1 tsp", "ginger", "grated"], ["½ tsp", "salt"], ["6 sheets", "filo pastry"], ["30g", "butter", "melted"]],
    steps: [
      "Fry the onion and lamb until browned. Stir in the garam masala, ginger, peas and salt and cook for 5 minutes. Cool.",
      "Cut each filo sheet into 3 strips. Brush with butter, add a spoon of filling and fold into triangles.",
      "Brush the outsides with butter.",
      "Cook at 190°C for 10 minutes, turning at halfway, until crisp and golden."
    ]
  },
  {
    id: "lamb-shepherds-potato-skins", name: "Shepherd's Pie Potato Skins", emoji: "🥧", cat: "lamb",
    temp: 200, time: 45, prep: 20, serves: 4, turn: "none",
    tags: ["comfort", "family", "british", "leftovers"],
    ing: [["4 large", "potatoes", "baking potatoes"], ["300g", "lamb mince"], ["1", "onion", "chopped"], ["1", "carrots", "diced"], ["1 tbsp", "worcestershire sauce"], ["150ml", "water"], ["1 tsp", "?thyme"], ["25g", "butter"], ["50g", "cheddar", "grated"], ["1 tsp", "oil"], ["1 tsp", "salt"]],
    steps: [
      "Prick the potatoes, rub with oil and salt and cook at 200°C for 40 minutes until soft.",
      "Meanwhile brown the lamb, onion and carrot. Add the Worcestershire sauce, thyme and water and simmer for 15 minutes until thick.",
      "Halve the potatoes and scoop out the middles. Mash with the butter. Fill the skins with lamb, top with mash and cheese.",
      "Cook at 200°C for 5 minutes until golden on top."
    ]
  },

  // ───────────── FISH ─────────────
  {
    id: "cajun-salmon", name: "Cajun Salmon", emoji: "🐟", cat: "fish",
    temp: 200, time: 9, prep: 3, serves: 2, turn: "none",
    tags: ["quick", "spicy", "healthy", "gluten-free"],
    ing: [["2", "salmon fillets", "skin on"], ["2 tsp", "cajun seasoning"], ["1 tsp", "brown sugar"], ["1 tsp", "oil"], ["1", "?lime"]],
    steps: [
      "Pat the salmon dry and brush with oil.",
      "Mix the Cajun seasoning and sugar and press onto the flesh.",
      "Cook skin-side down at 200°C for 8–10 minutes – no need to turn.",
      "Done when it flakes easily and reaches 63°C. Squeeze over the lime."
    ]
  },
  {
    id: "teriyaki-salmon", name: "Teriyaki Salmon Bites", emoji: "🍣", cat: "fish",
    temp: 200, time: 8, prep: 15, serves: 2, turn: "shake",
    tags: ["asian", "quick", "sticky"],
    ing: [["2", "salmon fillets", "skinless, 3cm cubes"], ["3 tbsp", "teriyaki sauce"], ["1 tsp", "?sesame seeds"], ["2", "?spring onions", "sliced"], ["to serve", "?rice"]],
    steps: [
      "Toss the salmon in 2 tbsp teriyaki and marinate for 10 minutes.",
      "Line the basket with pierced baking paper. Cook at 200°C for 7–8 minutes, gently shaking at halfway.",
      "Brush with the last of the teriyaki.",
      "Check the salmon has reached 63°C. Scatter with sesame seeds and spring onions and serve on rice."
    ]
  },
  {
    id: "fish-tacos", name: "Crispy Fish Tacos", emoji: "🌮", cat: "fish",
    temp: 200, time: 10, prep: 15, serves: 3, turn: "flip",
    tags: ["mexican", "summer", "fakeaway"],
    ing: [["400g", "white fish fillets", "cut into fingers"], ["40g", "plain flour"], ["1", "eggs"], ["80g", "breadcrumbs"], ["1 tsp", "paprika"], ["½ tsp", "cumin"], ["½ tsp", "salt"], ["spray", "oil"], ["6", "tortilla wraps", "small"], ["4 tbsp", "mayonnaise"], ["1", "lime"], ["to serve", "?lettuce", "shredded (or cabbage)"], ["1", "?red chilli"]],
    steps: [
      "Season the breadcrumbs with paprika, cumin and salt.",
      "Coat the fish in flour, egg, then crumbs. Spray with oil.",
      "Cook at 200°C for 10 minutes, turning gently at halfway, until the fish reaches 63°C.",
      "Mix the mayo with half the lime juice. Fill warm wraps with lettuce, fish, lime mayo and chilli."
    ]
  },
  {
    id: "salmon-fishcakes", name: "Salmon & Dill Fishcakes", emoji: "🐟", cat: "fish",
    temp: 200, time: 12, prep: 25, serves: 4, turn: "flip",
    tags: ["family", "batch cook", "leftovers"],
    ing: [["2", "salmon fillets", "cooked and flaked"], ["400g", "potatoes", "boiled and mashed"], ["2", "spring onions"], ["1", "lemon", "zest"], ["1 tsp", "?mixed herbs", "or fresh dill"], ["1", "eggs", "beaten"], ["60g", "breadcrumbs"], ["½ tsp", "salt"], ["spray", "oil"]],
    steps: [
      "Tip: cook the salmon first in the air fryer – 200°C for 9 minutes – then flake it.",
      "Mix the salmon, mash, spring onions, zest, herbs and salt. Shape into 8 cakes and chill for 15 minutes.",
      "Dip in egg, then breadcrumbs. Spray with oil.",
      "Cook at 200°C for 12 minutes, turning at halfway, until golden and piping hot."
    ]
  },
  {
    id: "breaded-scampi", name: "Breaded Scampi", emoji: "🍤", cat: "fish",
    temp: 200, time: 8, prep: 15, serves: 2, turn: "flip",
    tags: ["pub classic", "fish & chips", "crispy"],
    ing: [["250g", "prawns", "raw, peeled (or langoustine tails)"], ["30g", "plain flour"], ["1", "eggs"], ["60g", "breadcrumbs"], ["1", "lemon"], ["¼ tsp", "salt"], ["spray", "oil"], ["3 tbsp", "?mayonnaise", "for tartare-style dip"]],
    steps: [
      "Pat the prawns dry and season with salt and lemon zest.",
      "Coat in flour, egg, then breadcrumbs. Spray with oil.",
      "Cook at 200°C for 7–8 minutes, turning at halfway, until golden and pink inside (63°C).",
      "Serve with lemon wedges, chips and mayo."
    ]
  },
  {
    id: "prawn-toast", name: "Sesame Prawn Toast", emoji: "🍞", cat: "fish",
    temp: 190, time: 8, prep: 15, serves: 4, turn: "none",
    tags: ["chinese", "fakeaway", "party"],
    ing: [["200g", "prawns", "raw, peeled"], ["1", "spring onions"], ["1 tsp", "ginger", "grated"], ["1 tsp", "soy sauce"], ["1 tsp", "cornflour"], ["1", "eggs", "white only"], ["4 slices", "bread", "white, a day old"], ["3 tbsp", "sesame seeds"], ["spray", "oil"], ["to serve", "?sweet chilli sauce"]],
    steps: [
      "Blitz the prawns, spring onion, ginger, soy, cornflour and egg white to a paste (or chop very finely).",
      "Spread thickly over the bread right to the edges, then press into the sesame seeds.",
      "Cut each slice into 4 triangles and spray with oil.",
      "Cook prawn-side up at 190°C for 7–8 minutes until golden and the prawn topping is cooked through. Serve with sweet chilli."
    ]
  },
  {
    id: "lemon-pepper-mackerel", name: "Lemon Pepper Mackerel", emoji: "🐟", cat: "fish",
    temp: 200, time: 7, prep: 3, serves: 2, turn: "none",
    tags: ["omega-3", "quick", "budget", "gluten-free"],
    ing: [["4", "mackerel", "fresh fillets"], ["1", "lemon", "zest and juice"], ["1 tsp", "black pepper"], ["½ tsp", "salt"], ["1 tsp", "oil"]],
    steps: [
      "Pat the fillets dry and slash the skin 2–3 times.",
      "Rub with oil, lemon zest, pepper and salt.",
      "Cook skin-side up at 200°C for 6–7 minutes until the skin crisps.",
      "Done at 63°C – it should flake easily. Squeeze over the lemon juice and serve with new potatoes."
    ]
  },
  {
    id: "sea-bass-tomatoes", name: "White Fish with Blistered Tomatoes", emoji: "🍅", cat: "fish",
    temp: 200, time: 10, prep: 5, serves: 2, turn: "none",
    tags: ["mediterranean", "healthy", "light", "gluten-free"],
    ing: [["2", "white fish fillets", "sea bass or cod"], ["250g", "cherry tomatoes"], ["1 clove", "garlic", "sliced"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["1 tsp", "oregano"], ["1", "?lemon"], ["1 tbsp", "?pesto"]],
    steps: [
      "Toss the tomatoes with the garlic, half the oil, oregano and salt. Cook at 200°C for 4 minutes.",
      "Brush the fish with the rest of the oil and season. Add skin-side down next to the tomatoes.",
      "Cook for 6 more minutes until the fish flakes and reaches 63°C.",
      "Spoon over the pesto and squeeze over lemon."
    ]
  },
  {
    id: "pesto-crusted-cod", name: "Pesto & Parmesan Crusted Cod", emoji: "🌿", cat: "fish",
    temp: 190, time: 10, prep: 5, serves: 2, turn: "none",
    tags: ["italian", "quick", "light"],
    ing: [["2", "white fish fillets", "thick cod loins"], ["2 tbsp", "pesto"], ["20g", "breadcrumbs"], ["15g", "parmesan", "grated"], ["¼ tsp", "salt"], ["1", "?lemon"]],
    steps: [
      "Season the fish and spread the tops with pesto.",
      "Mix the breadcrumbs and parmesan and press on top.",
      "Cook at 190°C for 10 minutes without turning, until the crust is golden.",
      "Done at 63°C. Serve with lemon wedges and green beans."
    ]
  },
  {
    id: "homemade-fish-fingers", name: "Homemade Fish Finger Sandwich", emoji: "🥪", cat: "fish",
    temp: 200, time: 10, prep: 15, serves: 2, turn: "flip",
    tags: ["kids", "lunch", "british", "comfort"],
    ing: [["300g", "white fish fillets", "cut into fingers"], ["30g", "plain flour"], ["1", "eggs"], ["60g", "breadcrumbs"], ["¼ tsp", "salt"], ["spray", "oil"], ["4 slices", "bread", "soft white"], ["2 tbsp", "tomato ketchup"], ["2 tbsp", "?mayonnaise"], ["to serve", "?lettuce"]],
    steps: [
      "Season the flour with salt. Coat the fish in flour, egg, then breadcrumbs. Spray with oil.",
      "Cook at 200°C for 10 minutes, turning at halfway, until golden and 63°C inside.",
      "Butter the bread and spread with ketchup and mayo.",
      "Pile in the fish fingers and lettuce. (Frozen fish fingers? 200°C for 10–12 minutes.)"
    ]
  },
  {
    id: "chilli-lime-prawns", name: "Chilli Lime Prawns", emoji: "🍤", cat: "fish",
    temp: 200, time: 6, prep: 5, serves: 2, turn: "shake",
    tags: ["quick", "spicy", "healthy", "gluten-free"],
    ing: [["300g", "prawns", "raw king prawns, peeled"], ["1", "lime", "zest and juice"], ["1", "red chilli", "finely chopped"], ["1 clove", "garlic", "crushed"], ["1 tbsp", "oil"], ["¼ tsp", "salt"], ["1 tbsp", "?honey"]],
    steps: [
      "Toss the prawns with the lime zest, chilli, garlic, oil, honey and salt.",
      "Cook at 200°C for 5–6 minutes, shaking at halfway.",
      "They're done when pink and opaque all the way through (63°C).",
      "Squeeze over the lime juice. Great with rice, noodles or in wraps."
    ]
  },
  {
    id: "tuna-melt", name: "Tuna Melt Toasties", emoji: "🧀", cat: "fish",
    temp: 180, time: 8, prep: 5, serves: 2, turn: "flip",
    tags: ["lunch", "quick", "budget", "comfort"],
    ing: [["1 tin (145g)", "tinned tuna", "drained"], ["2 tbsp", "mayonnaise"], ["2", "?spring onions"], ["4 slices", "bread"], ["60g", "cheddar", "grated"], ["15g", "butter", "softened"]],
    steps: [
      "Mix the tuna, mayo and spring onions.",
      "Butter the outsides of the bread. Fill with tuna and cheese.",
      "Cook at 180°C for 8 minutes, turning at halfway. Put a metal rack or a cocktail stick through the top so the bread doesn't blow up into the element.",
      "Leave for 1 minute before cutting – the cheese is very hot."
    ]
  },

  // ───────────── VEGGIE ─────────────
  {
    id: "crispy-gnocchi", name: "Crispy Gnocchi with Pesto", emoji: "🥔", cat: "veggie",
    temp: 200, time: 14, prep: 3, serves: 2, turn: "shake",
    tags: ["vegetarian", "quick", "italian"],
    ing: [["500g", "gnocchi", "shop-bought, straight from the pack"], ["1 tbsp", "oil"], ["¼ tsp", "salt"], ["2 tbsp", "pesto"], ["200g", "?cherry tomatoes"], ["20g", "parmesan", "grated"]],
    steps: [
      "Separate the gnocchi and toss with the oil and salt – no need to boil.",
      "Cook at 200°C for 10 minutes, shaking at halfway.",
      "Add the tomatoes and cook for 4 more minutes until the gnocchi is golden and crisp.",
      "Toss with the pesto and top with parmesan."
    ]
  },
  {
    id: "stuffed-mushrooms", name: "Garlic & Cheese Stuffed Mushrooms", emoji: "🍄", cat: "veggie",
    temp: 180, time: 10, prep: 10, serves: 2, turn: "none",
    tags: ["vegetarian", "low-carb", "starter"],
    ing: [["4", "mushrooms", "large portobello"], ["100g", "cream cheese"], ["1 clove", "garlic", "crushed"], ["30g", "cheddar", "grated"], ["20g", "breadcrumbs"], ["1 tsp", "?mixed herbs"], ["1 tsp", "oil"], ["¼ tsp", "salt"]],
    steps: [
      "Remove the stalks, brush the mushrooms with oil and season.",
      "Mix the cream cheese, garlic and herbs and spread into the mushrooms.",
      "Top with the cheddar and breadcrumbs.",
      "Cook at 180°C for 10 minutes until golden and the mushrooms are tender."
    ]
  },
  {
    id: "veg-spring-rolls", name: "Vegetable Spring Rolls", emoji: "🥢", cat: "veggie",
    temp: 200, time: 10, prep: 25, serves: 4, turn: "flip",
    tags: ["vegan", "chinese", "fakeaway", "party"],
    ing: [["2", "carrots", "cut into matchsticks"], ["1", "bell peppers", "thinly sliced"], ["100g", "mushrooms", "sliced"], ["3", "spring onions", "sliced"], ["1 tsp", "ginger", "grated"], ["2 tbsp", "soy sauce"], ["8 sheets", "filo pastry"], ["2 tbsp", "oil"], ["to serve", "?sweet chilli sauce"]],
    steps: [
      "Stir-fry the veg and ginger for 3 minutes, add the soy and cool.",
      "Brush a filo sheet with oil and fold in half. Put filling along one end, fold in the sides and roll up.",
      "Brush with oil.",
      "Cook at 200°C for 10 minutes, turning at halfway, until crisp. Serve with sweet chilli."
    ]
  },
  {
    id: "halloumi-veg-skewers", name: "Halloumi & Veg Skewers", emoji: "🍢", cat: "veggie",
    temp: 200, time: 10, prep: 15, serves: 2, turn: "flip",
    tags: ["vegetarian", "bbq", "summer", "gluten-free"],
    ing: [["225g", "halloumi", "2cm cubes"], ["1", "courgette", "thick slices"], ["1", "bell peppers", "chunks"], ["1", "red onion", "chunks"], ["8", "cherry tomatoes"], ["1 tbsp", "oil"], ["1 tsp", "oregano"], ["½", "lemon"], ["1 tsp", "?honey"]],
    steps: [
      "Toss everything with the oil and oregano.",
      "Thread onto skewers that fit your basket, alternating halloumi and veg.",
      "Cook at 200°C for 10 minutes, turning at halfway.",
      "Drizzle with honey and a squeeze of lemon."
    ]
  },
  {
    id: "cauliflower-steaks", name: "Smoky Cauliflower Steaks", emoji: "🥦", cat: "veggie",
    temp: 200, time: 16, prep: 5, serves: 2, turn: "flip",
    tags: ["vegan", "gluten-free", "low-carb"],
    ing: [["1 head", "cauliflower", "cut into 2cm slices through the stalk"], ["2 tbsp", "oil"], ["1 tsp", "paprika", "smoked"], ["½ tsp", "garlic granules"], ["½ tsp", "cumin"], ["½ tsp", "salt"], ["2 tbsp", "?hummus"]],
    steps: [
      "Mix the oil, spices and salt and brush all over the cauliflower slices.",
      "Cook at 200°C for 16 minutes, turning at halfway, until tender and charred.",
      "Spread a plate with hummus and lay the steaks on top.",
      "Save the loose florets for another day."
    ]
  },
  {
    id: "paneer-tikka", name: "Paneer Tikka", emoji: "🍢", cat: "veggie",
    temp: 200, time: 10, prep: 20, serves: 2, turn: "flip",
    tags: ["vegetarian", "indian", "fakeaway", "high-protein"],
    ing: [["225g", "paneer", "3cm cubes"], ["100g", "greek yoghurt"], ["2 tbsp", "tikka paste"], ["½", "lemon"], ["1", "bell peppers", "chunks"], ["1", "red onion", "chunks"], ["¼ tsp", "salt"], ["2", "?naan"]],
    steps: [
      "Mix the yoghurt, tikka paste, lemon juice and salt. Coat the paneer and veg and marinate for 20 minutes.",
      "Thread onto skewers.",
      "Cook at 200°C for 10 minutes, turning at halfway, until charred.",
      "Serve with warm naan and extra yoghurt."
    ]
  },
  {
    id: "bean-cheese-quesadillas", name: "Black Bean & Cheese Quesadillas", emoji: "🫓", cat: "veggie",
    temp: 190, time: 6, prep: 10, serves: 2, turn: "flip",
    tags: ["vegetarian", "mexican", "quick", "lunch"],
    ing: [["4", "tortilla wraps"], ["200g", "black beans", "drained"], ["100g", "cheddar", "grated"], ["100g", "sweetcorn"], ["1 tsp", "fajita seasoning"], ["3 tbsp", "salsa"], ["spray", "oil"]],
    steps: [
      "Lightly mash the beans with the seasoning and salsa.",
      "Spread over 2 wraps, top with sweetcorn and cheese, then the other wraps.",
      "Spray with oil. Cook one at a time at 190°C for 6 minutes, turning at halfway. Hold the top down with a metal rack if it lifts.",
      "Cut into wedges and serve with yoghurt and salsa."
    ]
  },
  {
    id: "aubergine-parmigiana-stacks", name: "Aubergine Parmigiana Stacks", emoji: "🍆", cat: "veggie",
    temp: 190, time: 18, prep: 10, serves: 2, turn: "none",
    tags: ["vegetarian", "italian", "gluten-free"],
    ing: [["1 large", "aubergine", "1cm slices"], ["1 tbsp", "oil"], ["¼ tsp", "salt"], ["200g", "passata"], ["1 tsp", "oregano"], ["125g", "mozzarella", "sliced"], ["20g", "parmesan", "grated"]],
    steps: [
      "Brush the aubergine with oil and season. Cook at 190°C for 10 minutes, turning at halfway, until soft.",
      "Mix the passata with the oregano.",
      "In a small dish that fits the basket, layer aubergine, passata and mozzarella. Finish with parmesan.",
      "Cook for 8 minutes until bubbling and golden."
    ]
  },
  {
    id: "spinach-feta-filo", name: "Spinach & Feta Filo Parcels", emoji: "🥬", cat: "veggie",
    temp: 180, time: 12, prep: 20, serves: 4, turn: "none",
    tags: ["vegetarian", "greek", "party"],
    ing: [["200g", "spinach"], ["150g", "feta", "crumbled"], ["1", "eggs", "beaten"], ["2", "spring onions"], ["6 sheets", "filo pastry"], ["30g", "butter", "melted"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Wilt the spinach, squeeze out all the water and chop. Mix with the feta, egg and spring onions.",
      "Cut the filo into strips, brush with butter, add a spoon of filling and fold into triangles.",
      "Brush with butter and sprinkle with sesame seeds.",
      "Cook at 180°C for 12 minutes until crisp and golden."
    ]
  },
  {
    id: "chickpea-veggie-burgers", name: "Chickpea Veggie Burgers", emoji: "🍔", cat: "veggie",
    temp: 200, time: 12, prep: 20, serves: 4, turn: "flip",
    tags: ["vegan", "budget", "family"],
    ing: [["400g tin", "chickpeas", "drained"], ["1", "carrots", "grated"], ["1", "onion", "finely chopped"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["60g", "breadcrumbs"], ["1 tbsp", "plain flour"], ["½ tsp", "salt"], ["spray", "oil"], ["4", "burger buns"], ["to serve", "?lettuce"], ["to serve", "?tomatoes"]],
    steps: [
      "Mash the chickpeas roughly. Mix in the carrot, onion, spices, breadcrumbs, flour and salt.",
      "Shape into 4 burgers and chill for 15 minutes so they hold together.",
      "Spray with oil and cook at 200°C for 12 minutes, turning at halfway.",
      "Serve in toasted buns with salad and your favourite sauce."
    ]
  },
  {
    id: "classic-jacket-potatoes", name: "Crispy Jacket Potatoes", emoji: "🥔", cat: "veggie",
    temp: 200, time: 40, prep: 2, serves: 2, turn: "flip",
    tags: ["vegetarian", "budget", "gluten-free", "comfort"],
    ing: [["2 large", "potatoes", "baking potatoes"], ["1 tsp", "oil"], ["1 tsp", "salt"], ["20g", "butter"], ["60g", "?cheddar", "grated"], ["to serve", "?black beans"]],
    steps: [
      "Scrub and dry the potatoes. Prick all over with a fork.",
      "Rub with oil and plenty of salt – this makes the skin crisp.",
      "Cook at 200°C for 40–45 minutes, turning at halfway, until a knife slides in easily.",
      "Split open and fill with butter and cheese (or beans, tuna mayo or chilli)."
    ]
  },
  {
    id: "naan-pizzas", name: "Margherita Naan Pizzas", emoji: "🍕", cat: "veggie",
    temp: 190, time: 6, prep: 5, serves: 2, turn: "none",
    tags: ["vegetarian", "kids", "quick", "lunch"],
    ing: [["2", "naan"], ["6 tbsp", "passata"], ["1 tsp", "oregano"], ["125g", "mozzarella", "torn"], ["6", "?cherry tomatoes", "halved"], ["1 tbsp", "?pesto"]],
    steps: [
      "Spread the passata over the naans and sprinkle with oregano.",
      "Top with mozzarella and tomatoes.",
      "Cook one at a time at 190°C for 5–6 minutes until the cheese is bubbling.",
      "Drizzle with pesto and slice."
    ]
  },
  {
    id: "baked-eggs-spinach", name: "Baked Eggs with Spinach & Tomato", emoji: "🍳", cat: "veggie",
    temp: 160, time: 10, prep: 5, serves: 2, turn: "none",
    tags: ["vegetarian", "breakfast", "low-carb", "gluten-free"],
    ing: [["4", "eggs"], ["2 handfuls", "spinach"], ["6", "cherry tomatoes", "halved"], ["30g", "feta", "crumbled"], ["1 tsp", "butter"], ["pinch", "?chilli flakes"], ["¼ tsp", "salt"], ["2 slices", "?bread", "toasted"]],
    steps: [
      "Butter 2 ramekins. Divide the spinach and tomatoes between them.",
      "Crack 2 eggs into each, season and scatter with feta.",
      "Cook at 160°C for 9–11 minutes – 9 for runny yolks, 11 for set.",
      "Sprinkle with chilli flakes and serve with toast soldiers."
    ]
  },

  // ───────────── SIDES ─────────────
  {
    id: "hasselback-potatoes", name: "Hasselback Potatoes", emoji: "🥔", cat: "sides",
    temp: 190, time: 35, prep: 10, serves: 4, turn: "none",
    tags: ["sunday roast", "vegetarian", "gluten-free"],
    ing: [["8", "new potatoes", "medium-sized"], ["30g", "butter", "melted"], ["1 tbsp", "oil"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "?rosemary"], ["½ tsp", "salt"], ["15g", "?parmesan"]],
    steps: [
      "Lay each potato between two chopsticks and slice thinly, stopping at the chopsticks so you don't cut through.",
      "Mix the butter, oil, garlic, rosemary and salt. Brush over the potatoes, getting into the slices.",
      "Cook at 190°C for 30–35 minutes, brushing again at halfway, until crisp and fanned out.",
      "Sprinkle with parmesan for the last 2 minutes if you like."
    ]
  },
  {
    id: "potato-wedges", name: "Seasoned Potato Wedges", emoji: "🍟", cat: "sides",
    temp: 200, time: 20, prep: 5, serves: 3, turn: "shake",
    tags: ["vegan", "kids", "gluten-free", "budget"],
    ing: [["3", "potatoes", "cut into wedges, skin on"], ["1 tbsp", "oil"], ["1 tsp", "paprika"], ["½ tsp", "garlic granules"], ["½ tsp", "mixed herbs"], ["1 tsp", "salt"]],
    steps: [
      "Toss the wedges with the oil, spices, herbs and salt.",
      "Spread out in the basket.",
      "Cook at 200°C for 18–20 minutes, shaking at halfway, until golden and fluffy inside."
    ]
  },
  {
    id: "smashed-potatoes", name: "Crispy Smashed Potatoes", emoji: "🥔", cat: "sides",
    temp: 200, time: 20, prep: 20, serves: 3, turn: "flip",
    tags: ["vegetarian", "gluten-free", "crispy"],
    ing: [["600g", "new potatoes"], ["2 tbsp", "oil"], ["1 tsp", "salt"], ["2 cloves", "garlic", "crushed"], ["20g", "?parmesan"], ["1 tbsp", "?parsley"]],
    steps: [
      "Boil the potatoes for 15 minutes until tender. Drain and steam-dry.",
      "Squash each one flat with the bottom of a mug. Brush with the oil mixed with garlic and salt.",
      "Cook at 200°C for 20 minutes, turning at halfway, until very crisp at the edges.",
      "Scatter with parmesan and parsley."
    ]
  },
  {
    id: "sprouts-bacon", name: "Brussels Sprouts with Bacon", emoji: "🥬", cat: "sides",
    temp: 190, time: 14, prep: 5, serves: 4, turn: "shake",
    tags: ["christmas", "sunday roast", "gluten-free"],
    ing: [["400g", "brussels sprouts", "trimmed and halved"], ["4 rashers", "bacon", "chopped"], ["1 tbsp", "oil"], ["¼ tsp", "salt"], ["1 tsp", "?maple syrup"]],
    steps: [
      "Toss the sprouts with the oil and salt.",
      "Cook at 190°C for 6 minutes, then add the bacon.",
      "Cook for 8 more minutes, shaking at halfway, until the sprouts are charred and the bacon crisp.",
      "Drizzle with maple syrup."
    ]
  },
  {
    id: "yorkshire-puddings", name: "Yorkshire Puddings", emoji: "🥧", cat: "sides",
    temp: 200, time: 18, prep: 10, serves: 4, turn: "none",
    tags: ["sunday roast", "british", "vegetarian"],
    ing: [["2", "eggs"], ["70g", "plain flour"], ["100ml", "milk"], ["pinch", "salt"], ["4 tsp", "oil"]],
    steps: [
      "Whisk the eggs, flour, milk and salt to a smooth batter. Rest for at least 30 minutes.",
      "Put 1 tsp oil into each of 4 metal pudding tins or ramekins. Heat in the air fryer at 200°C for 5 minutes until smoking hot.",
      "Quickly pour the batter into the hot oil.",
      "Cook for 15–18 minutes without opening the drawer, until risen and golden."
    ]
  },
  {
    id: "cauliflower-cheese-bites", name: "Cauliflower Cheese Bites", emoji: "🧀", cat: "sides",
    temp: 190, time: 14, prep: 10, serves: 3, turn: "shake",
    tags: ["vegetarian", "sunday roast", "kids"],
    ing: [["½ head", "cauliflower", "small florets"], ["1 tbsp", "oil"], ["¼ tsp", "salt"], ["80g", "cheddar", "grated"], ["1 tsp", "mustard"], ["20g", "breadcrumbs"]],
    steps: [
      "Toss the florets with the oil and salt. Cook at 190°C for 10 minutes, shaking at halfway.",
      "Tip into a small dish that fits the basket and stir in the mustard.",
      "Top with the cheese and breadcrumbs.",
      "Cook for 4 more minutes until bubbling and golden."
    ]
  },
  {
    id: "garlic-green-beans", name: "Garlic Green Beans", emoji: "🫛", cat: "sides",
    temp: 200, time: 8, prep: 3, serves: 2, turn: "shake",
    tags: ["vegan", "quick", "healthy", "gluten-free"],
    ing: [["200g", "green beans", "trimmed"], ["1 tbsp", "oil"], ["1 clove", "garlic", "crushed"], ["¼ tsp", "salt"], ["pinch", "?chilli flakes"], ["½", "?lemon"]],
    steps: [
      "Toss the beans with the oil, garlic, salt and chilli.",
      "Cook at 200°C for 7–8 minutes, shaking at halfway, until blistered.",
      "Squeeze over a little lemon."
    ]
  },
  {
    id: "roasted-asparagus", name: "Roasted Asparagus with Parmesan", emoji: "🌱", cat: "sides",
    temp: 200, time: 7, prep: 3, serves: 2, turn: "shake",
    tags: ["vegetarian", "spring", "quick", "gluten-free"],
    ing: [["1 bunch", "asparagus", "woody ends snapped off"], ["1 tsp", "oil"], ["¼ tsp", "salt"], ["15g", "parmesan", "grated"], ["½", "lemon"]],
    steps: [
      "Toss the asparagus with oil and salt.",
      "Cook at 200°C for 5 minutes.",
      "Sprinkle with parmesan and cook for 2 more minutes.",
      "Squeeze over the lemon."
    ]
  },
  {
    id: "courgette-fries", name: "Parmesan Courgette Fries", emoji: "🥒", cat: "sides",
    temp: 200, time: 10, prep: 15, serves: 2, turn: "flip",
    tags: ["vegetarian", "low-carb", "crispy"],
    ing: [["2", "courgette", "cut into chips"], ["30g", "plain flour"], ["1", "eggs"], ["50g", "breadcrumbs"], ["25g", "parmesan", "grated"], ["¼ tsp", "salt"], ["spray", "oil"]],
    steps: [
      "Mix the breadcrumbs with the parmesan and salt.",
      "Coat the courgette in flour, egg, then crumbs. Spray with oil.",
      "Cook in a single layer at 200°C for 10 minutes, turning at halfway.",
      "Serve with garlic mayo or marinara."
    ]
  },
  {
    id: "peppers-onions", name: "Roasted Peppers & Onions", emoji: "🫑", cat: "sides",
    temp: 200, time: 12, prep: 5, serves: 3, turn: "shake",
    tags: ["vegan", "gluten-free", "healthy"],
    ing: [["3", "bell peppers", "mixed colours, strips"], ["1", "red onion", "wedges"], ["1 tbsp", "oil"], ["1 tsp", "?balsamic vinegar"], ["½ tsp", "mixed herbs"], ["¼ tsp", "salt"]],
    steps: [
      "Toss the peppers and onion with the oil, herbs and salt.",
      "Cook at 200°C for 12 minutes, shaking at halfway, until soft and charred.",
      "Drizzle with balsamic. Great with sausages or in wraps."
    ]
  },
  {
    id: "roast-butternut", name: "Cinnamon Roast Butternut Squash", emoji: "🎃", cat: "sides",
    temp: 200, time: 18, prep: 10, serves: 3, turn: "shake",
    tags: ["vegan", "autumn", "gluten-free"],
    ing: [["½", "butternut squash", "peeled, 2cm cubes"], ["1 tbsp", "oil"], ["½ tsp", "cinnamon"], ["½ tsp", "chilli flakes"], ["¼ tsp", "salt"], ["1 tsp", "?maple syrup"]],
    steps: [
      "Toss the squash with the oil, cinnamon, chilli and salt.",
      "Cook at 200°C for 18 minutes, shaking at halfway, until tender and caramelised.",
      "Drizzle with maple syrup."
    ]
  },
  {
    id: "sausage-stuffing-balls", name: "Sausage Stuffing Balls", emoji: "🎄", cat: "sides",
    temp: 190, time: 14, prep: 10, serves: 4, turn: "shake",
    tags: ["christmas", "sunday roast", "british"],
    ing: [["400g", "sausages", "skins removed"], ["1", "onion", "finely chopped"], ["60g", "breadcrumbs"], ["1 tsp", "thyme"], ["1 tsp", "?rosemary"], ["1", "?apples", "grated"], ["¼ tsp", "salt"]],
    steps: [
      "Mix everything together and roll into 12 balls.",
      "Cook at 190°C for 14 minutes, shaking at halfway.",
      "Check they have reached 75°C in the middle."
    ]
  },
  {
    id: "sweetcorn-fritters", name: "Sweetcorn Fritters", emoji: "🌽", cat: "sides",
    temp: 190, time: 12, prep: 10, serves: 3, turn: "flip",
    tags: ["vegetarian", "brunch", "kids"],
    ing: [["200g", "sweetcorn", "drained"], ["2", "spring onions"], ["1", "eggs"], ["60g", "self-raising flour"], ["40g", "cheddar", "grated"], ["¼ tsp", "salt"], ["½ tsp", "?paprika"], ["spray", "oil"]],
    steps: [
      "Mix everything into a thick batter.",
      "Line the basket with pierced baking paper and spray with oil.",
      "Spoon in 6 heaped tablespoons and flatten slightly.",
      "Cook at 190°C for 12 minutes, turning at halfway, until golden. Great with sweet chilli or a poached egg."
    ]
  },

  // ───────────── SNACKS ─────────────
  {
    id: "jalapeno-poppers", name: "Jalapeño Poppers", emoji: "🌶️", cat: "snacks",
    temp: 190, time: 8, prep: 15, serves: 4, turn: "none",
    tags: ["spicy", "party", "vegetarian", "game day"],
    ing: [["8", "red chilli", "large jalapeños, halved and deseeded"], ["100g", "cream cheese"], ["40g", "cheddar", "grated"], ["20g", "breadcrumbs"], ["¼ tsp", "garlic granules"], ["4 rashers", "?bacon", "halved, to wrap"]],
    steps: [
      "Mix the cream cheese, cheddar and garlic granules. Spoon into the jalapeño halves.",
      "Top with breadcrumbs (or wrap each one in half a rasher of bacon).",
      "Cook at 190°C for 8 minutes until golden and bubbling (10 minutes if using bacon).",
      "Leave for 2 minutes – the filling is molten."
    ]
  },
  {
    id: "loaded-nachos", name: "Loaded Nachos", emoji: "🧀", cat: "snacks",
    temp: 180, time: 5, prep: 5, serves: 2, turn: "none",
    tags: ["vegetarian", "party", "mexican", "quick"],
    ing: [["150g", "tortilla chips"], ["100g", "cheddar", "grated"], ["100g", "?black beans"], ["1", "?red chilli", "sliced"], ["3 tbsp", "salsa"], ["3 tbsp", "?greek yoghurt"], ["1", "?spring onions"]],
    steps: [
      "Line the basket with foil or use a small dish.",
      "Layer the chips with beans and cheese, finishing with cheese.",
      "Cook at 180°C for 4–5 minutes until melted.",
      "Top with salsa, yoghurt, chilli and spring onions."
    ]
  },
  {
    id: "cheese-straws", name: "Cheese Straws", emoji: "🧀", cat: "snacks",
    temp: 190, time: 8, prep: 10, serves: 6, turn: "none",
    tags: ["vegetarian", "party", "christmas", "picnic"],
    ing: [["320g sheet", "puff pastry"], ["80g", "cheddar", "finely grated"], ["20g", "parmesan", "grated"], ["1", "eggs", "beaten"], ["½ tsp", "paprika"]],
    steps: [
      "Brush the pastry with egg and sprinkle half with the cheeses and paprika. Fold the other half over and press down.",
      "Cut into 1cm strips and twist each one.",
      "Cook in batches at 190°C for 7–8 minutes until puffed and golden.",
      "Cool on a rack – they crisp up as they cool."
    ]
  },
  {
    id: "pizza-pinwheels", name: "Pizza Pinwheels", emoji: "🍕", cat: "snacks",
    temp: 190, time: 10, prep: 10, serves: 4, turn: "none",
    tags: ["kids", "party", "picnic", "lunchbox"],
    ing: [["320g sheet", "puff pastry"], ["4 tbsp", "passata"], ["1 tsp", "oregano"], ["100g", "mozzarella", "grated"], ["50g", "?chorizo", "finely chopped (or ham)"], ["1", "eggs", "beaten"]],
    steps: [
      "Spread the pastry with passata, sprinkle with oregano, cheese and chorizo.",
      "Roll up tightly from the long side and chill for 10 minutes.",
      "Slice into 1.5cm rounds, lay flat and brush with egg.",
      "Cook in batches at 190°C for 9–10 minutes until golden."
    ]
  },
  {
    id: "potato-skins", name: "Cheese & Bacon Potato Skins", emoji: "🥔", cat: "snacks",
    temp: 200, time: 45, prep: 10, serves: 4, turn: "none",
    tags: ["pub classic", "party", "gluten-free"],
    ing: [["4", "potatoes", "baking potatoes"], ["1 tsp", "oil"], ["½ tsp", "salt"], ["100g", "cheddar", "grated"], ["4 rashers", "bacon", "chopped"], ["2", "?spring onions"], ["4 tbsp", "?greek yoghurt"]],
    steps: [
      "Prick, oil and salt the potatoes and cook at 200°C for 40 minutes. Cool slightly.",
      "Halve and scoop out most of the potato, leaving a 5mm layer (save the middles for mash).",
      "Fill with cheese and bacon. Cook for 5–6 minutes until the bacon is crisp.",
      "Top with spring onions and a dollop of yoghurt."
    ]
  },
  {
    id: "chicken-nuggets", name: "Homemade Chicken Nuggets", emoji: "🐔", cat: "snacks",
    temp: 200, time: 10, prep: 15, serves: 4, turn: "flip",
    tags: ["kids", "fakeaway", "lunchbox"],
    ing: [["500g", "chicken breast", "cut into nugget-sized pieces"], ["40g", "plain flour"], ["2", "eggs"], ["100g", "breadcrumbs"], ["20g", "parmesan", "finely grated"], ["½ tsp", "garlic granules"], ["½ tsp", "salt"], ["spray", "oil"]],
    steps: [
      "Mix the breadcrumbs, parmesan, garlic granules and salt.",
      "Coat the chicken in flour, egg, then crumbs. Spray with oil.",
      "Cook at 200°C for 10 minutes, turning at halfway.",
      "Check they have reached 75°C. Serve with ketchup or BBQ sauce."
    ]
  },
  {
    id: "arancini", name: "Cheesy Arancini", emoji: "🍙", cat: "snacks",
    temp: 200, time: 12, prep: 25, serves: 4, turn: "shake",
    tags: ["vegetarian", "italian", "leftovers", "party"],
    ing: [["400g", "rice", "cold cooked (ideally leftover risotto)"], ["30g", "parmesan", "grated"], ["2", "eggs"], ["80g", "mozzarella", "cut into small cubes"], ["40g", "plain flour"], ["100g", "breadcrumbs"], ["¼ tsp", "salt"], ["spray", "oil"], ["200g", "?passata", "for dipping"]],
    steps: [
      "Mix the rice, parmesan, 1 egg and salt.",
      "Take a golf-ball amount, push a cube of mozzarella into the middle and roll into a ball.",
      "Coat in flour, the other egg (beaten), then breadcrumbs. Chill for 20 minutes and spray with oil.",
      "Cook at 200°C for 12 minutes, shaking gently at halfway, until golden and piping hot inside."
    ]
  },
  {
    id: "pitta-chips-hummus", name: "Pitta Chips & Hummus", emoji: "🫓", cat: "snacks",
    temp: 180, time: 6, prep: 3, serves: 2, turn: "shake",
    tags: ["vegan", "quick", "healthy"],
    ing: [["2", "pitta bread", "cut into triangles"], ["1 tbsp", "oil"], ["½ tsp", "paprika"], ["¼ tsp", "salt"], ["150g", "hummus"]],
    steps: [
      "Split the pittas open and cut into triangles.",
      "Toss with the oil, paprika and salt.",
      "Cook at 180°C for 5–6 minutes, shaking at halfway, until crisp.",
      "Serve with hummus."
    ]
  },
  {
    id: "homemade-tortilla-chips", name: "Homemade Tortilla Chips", emoji: "🔺", cat: "snacks",
    temp: 180, time: 6, prep: 3, serves: 2, turn: "shake",
    tags: ["vegan", "quick", "budget", "mexican"],
    ing: [["4", "tortilla wraps", "cut into triangles"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["½ tsp", "?paprika"], ["4 tbsp", "salsa"]],
    steps: [
      "Brush the wraps with oil, sprinkle with salt and paprika, then cut into triangles.",
      "Cook in a single layer at 180°C for 5–6 minutes, shaking at halfway.",
      "Watch closely at the end – they go from golden to burnt quickly.",
      "Serve with salsa."
    ]
  },
  {
    id: "cheese-toastie", name: "Ultimate Cheese Toastie", emoji: "🥪", cat: "snacks",
    temp: 180, time: 8, prep: 3, serves: 1, turn: "flip",
    tags: ["vegetarian", "lunch", "quick", "comfort"],
    ing: [["2 slices", "bread"], ["15g", "butter", "softened"], ["60g", "cheddar", "grated"], ["1 tsp", "?mustard"], ["2 slices", "?tomatoes"]],
    steps: [
      "Butter the outsides of the bread. Spread the inside with mustard.",
      "Fill with cheese and tomato.",
      "Cook at 180°C for 8 minutes, turning at halfway. Pin the top with a cocktail stick so it doesn't fly up into the element.",
      "Rest for 1 minute, then cut."
    ]
  },
  {
    id: "hash-browns", name: "Crispy Hash Browns", emoji: "🥔", cat: "snacks",
    temp: 200, time: 15, prep: 15, serves: 3, turn: "flip",
    tags: ["breakfast", "vegetarian", "gluten-free"],
    ing: [["3", "potatoes", "peeled and coarsely grated"], ["½", "onion", "grated"], ["1 tbsp", "cornflour"], ["½ tsp", "salt"], ["spray", "oil"]],
    steps: [
      "Squeeze as much water out of the grated potato and onion as you can using a clean tea towel. This is the secret to crispness.",
      "Mix with the cornflour and salt. Shape into 6 flat patties.",
      "Spray both sides with oil.",
      "Cook at 200°C for 15 minutes, turning at halfway, until deep golden."
    ]
  },
  {
    id: "bacon-asparagus", name: "Bacon-Wrapped Asparagus", emoji: "🥓", cat: "snacks",
    temp: 200, time: 8, prep: 5, serves: 4, turn: "flip",
    tags: ["party", "low-carb", "gluten-free", "starter"],
    ing: [["1 bunch", "asparagus"], ["6 rashers", "bacon", "streaky, halved lengthways"], ["½ tsp", "black pepper"]],
    steps: [
      "Wrap each asparagus spear in a strip of bacon in a spiral.",
      "Season with black pepper.",
      "Cook at 200°C for 8 minutes, turning at halfway, until the bacon is crisp."
    ]
  },
  {
    id: "roasted-nuts", name: "Honey & Chilli Crispy Chickpea Mix", emoji: "🥜", cat: "snacks",
    temp: 180, time: 15, prep: 5, serves: 4, turn: "shake",
    tags: ["vegan", "healthy", "gluten-free", "movie night"],
    ing: [["400g tin", "chickpeas", "drained and dried"], ["1 tbsp", "oil"], ["1 tbsp", "maple syrup"], ["½ tsp", "chilli flakes"], ["½ tsp", "salt"], ["½ tsp", "cinnamon"]],
    steps: [
      "Cook the dried chickpeas at 180°C for 10 minutes, shaking at halfway.",
      "Toss with the oil, maple syrup, chilli, salt and cinnamon.",
      "Cook for 5 more minutes, shaking once, until sticky and crisp.",
      "Spread out to cool – they crisp up more as they cool."
    ]
  },

  // ───────────── DESSERTS ─────────────
  {
    id: "apple-crumble", name: "Apple Crumble", emoji: "🍏", cat: "desserts",
    temp: 170, time: 20, prep: 15, serves: 4, turn: "none",
    tags: ["british", "comfort", "autumn", "vegetarian"],
    ing: [["3", "apples", "peeled and chopped"], ["2 tbsp", "brown sugar"], ["½ tsp", "cinnamon"], ["75g", "plain flour"], ["50g", "butter", "cold, cubed"], ["40g", "sugar"], ["30g", "oats"], ["to serve", "?ice cream"]],
    steps: [
      "Toss the apples with the brown sugar and cinnamon in a dish that fits your basket.",
      "Rub the butter into the flour until it looks like breadcrumbs. Stir in the sugar and oats.",
      "Scatter the crumble over the apples.",
      "Cook at 170°C for 20 minutes until golden and bubbling. Serve with custard or ice cream."
    ]
  },
  {
    id: "chocolate-fondants", name: "Chocolate Fondants", emoji: "🍫", cat: "desserts",
    temp: 180, time: 9, prep: 15, serves: 2, turn: "none",
    tags: ["chocolate", "date night", "vegetarian"],
    ing: [["50g", "dark chocolate"], ["50g", "butter", "plus extra for greasing"], ["1", "eggs"], ["1", "eggs", "yolk only"], ["40g", "sugar"], ["15g", "plain flour"], ["1 tsp", "cocoa powder", "for dusting"], ["to serve", "?ice cream"]],
    steps: [
      "Grease 2 ramekins with butter and dust with cocoa.",
      "Melt the chocolate and butter. Whisk the egg, yolk and sugar until pale and thick, then fold in the chocolate and flour.",
      "Pour into the ramekins.",
      "Cook at 180°C for 8–9 minutes – the edges should be set but the middle wobbly. Rest for 1 minute, then turn out and serve with ice cream."
    ]
  },
  {
    id: "banana-bread", name: "Mini Banana Bread", emoji: "🍌", cat: "desserts",
    temp: 160, time: 30, prep: 10, serves: 6, turn: "none",
    tags: ["baking", "vegetarian", "leftovers", "breakfast"],
    ing: [["2", "bananas", "very ripe, mashed"], ["60g", "butter", "melted"], ["60g", "brown sugar"], ["1", "eggs"], ["130g", "self-raising flour"], ["½ tsp", "cinnamon"], ["50g", "?dark chocolate", "chopped"], ["pinch", "salt"]],
    steps: [
      "Mix the bananas, butter, sugar and egg. Stir in the flour, cinnamon, salt and chocolate.",
      "Pour into a lined small loaf tin (about 450g/1lb) that fits your basket.",
      "Cook at 160°C for 28–32 minutes until a skewer comes out clean. Cover with foil (tucked in tightly) if the top browns too fast.",
      "Cool in the tin for 10 minutes before slicing."
    ]
  },
  {
    id: "blueberry-muffins", name: "Blueberry Muffins", emoji: "🫐", cat: "desserts",
    temp: 160, time: 14, prep: 10, serves: 6, turn: "none",
    tags: ["baking", "breakfast", "vegetarian", "kids"],
    ing: [["150g", "self-raising flour"], ["75g", "sugar"], ["1", "eggs"], ["75ml", "milk"], ["50g", "butter", "melted"], ["100g", "blueberries"], ["½ tsp", "?vanilla extract"]],
    steps: [
      "Mix the flour and sugar. Whisk the egg, milk, butter and vanilla, then stir into the flour until just combined (lumpy is fine).",
      "Fold in the blueberries.",
      "Spoon into 6 silicone muffin cases.",
      "Cook at 160°C for 12–14 minutes until risen and a skewer comes out clean."
    ]
  },
  {
    id: "flapjacks", name: "Golden Syrup Flapjacks", emoji: "🍯", cat: "desserts",
    temp: 160, time: 15, prep: 10, serves: 8, turn: "none",
    tags: ["baking", "british", "lunchbox", "vegetarian"],
    ing: [["100g", "butter"], ["75g", "brown sugar"], ["3 tbsp", "golden syrup"], ["200g", "oats"], ["50g", "?raisins"], ["pinch", "salt"]],
    steps: [
      "Melt the butter, sugar and syrup together. Stir in the oats, raisins and salt.",
      "Press firmly into a lined 18cm tin that fits your basket.",
      "Cook at 160°C for 15 minutes until golden at the edges.",
      "Mark into squares while warm, then leave to cool completely before cutting."
    ]
  },
  {
    id: "fruit-scones", name: "Fruit Scones", emoji: "🍓", cat: "desserts",
    temp: 180, time: 10, prep: 15, serves: 6, turn: "none",
    tags: ["baking", "british", "afternoon tea", "vegetarian"],
    ing: [["225g", "self-raising flour"], ["50g", "butter", "cold, cubed"], ["25g", "sugar"], ["40g", "raisins"], ["120ml", "milk", "plus a little for brushing"], ["pinch", "salt"], ["to serve", "?jam"], ["to serve", "?cream"]],
    steps: [
      "Rub the butter into the flour and salt. Stir in the sugar and raisins.",
      "Add the milk and bring together into a soft dough – don't overwork it.",
      "Pat out to 2.5cm thick and cut 6 rounds. Brush the tops with milk.",
      "Cook on baking paper at 180°C for 9–10 minutes until risen and golden. Serve with jam and cream."
    ]
  },
  {
    id: "jam-tarts", name: "Jam Tarts", emoji: "🍓", cat: "desserts",
    temp: 180, time: 10, prep: 10, serves: 6, turn: "none",
    tags: ["baking", "kids", "british", "vegetarian"],
    ing: [["320g sheet", "shortcrust pastry"], ["6 tsp", "jam"]],
    steps: [
      "Cut 12 circles of pastry and press into a mini muffin tray or silicone cases that fit your basket.",
      "Add ½ tsp of jam to each – don't overfill or it bubbles over.",
      "Cook at 180°C for 9–10 minutes until the pastry is golden.",
      "Cool completely – the jam is like lava when hot."
    ]
  },
  {
    id: "cinnamon-swirls", name: "Cinnamon Swirls", emoji: "🌀", cat: "desserts",
    temp: 180, time: 10, prep: 10, serves: 6, turn: "none",
    tags: ["baking", "breakfast", "vegetarian"],
    ing: [["320g sheet", "puff pastry"], ["30g", "butter", "softened"], ["40g", "brown sugar"], ["2 tsp", "cinnamon"], ["1", "eggs", "beaten"], ["50g", "?icing sugar"]],
    steps: [
      "Spread the pastry with butter and sprinkle with the sugar and cinnamon.",
      "Roll up from the long side and slice into 12.",
      "Lay flat, brush with egg and cook in batches at 180°C for 9–10 minutes.",
      "Mix the icing sugar with a few drops of water and drizzle over."
    ]
  },
  {
    id: "honey-peaches", name: "Honey Roasted Peaches", emoji: "🍑", cat: "desserts",
    temp: 180, time: 10, prep: 5, serves: 2, turn: "none",
    tags: ["summer", "healthy", "gluten-free", "vegetarian"],
    ing: [["2", "peaches", "halved and stoned"], ["1 tbsp", "honey"], ["10g", "butter"], ["¼ tsp", "cinnamon"], ["2 tbsp", "?greek yoghurt"], ["1 tbsp", "?oats"]],
    steps: [
      "Place the peaches cut-side up. Dot with butter, drizzle with honey and dust with cinnamon.",
      "Cook at 180°C for 8–10 minutes until soft and caramelised.",
      "Serve with yoghurt and a sprinkle of toasted oats."
    ]
  },
  {
    id: "cinnamon-pineapple", name: "Caramelised Cinnamon Pineapple", emoji: "🍍", cat: "desserts",
    temp: 200, time: 10, prep: 5, serves: 4, turn: "flip",
    tags: ["summer", "quick", "vegan", "gluten-free"],
    ing: [["8 rings", "pineapple", "fresh or tinned, drained"], ["2 tbsp", "brown sugar"], ["½ tsp", "cinnamon"], ["1", "?lime"], ["to serve", "?ice cream"]],
    steps: [
      "Pat the pineapple dry. Mix the sugar and cinnamon and sprinkle over both sides.",
      "Cook at 200°C for 10 minutes, turning at halfway, until caramelised.",
      "Squeeze over lime and serve with ice cream."
    ]
  },
  {
    id: "bread-butter-pudding", name: "Bread & Butter Pudding", emoji: "🍞", cat: "desserts",
    temp: 160, time: 20, prep: 15, serves: 4, turn: "none",
    tags: ["british", "comfort", "leftovers", "vegetarian"],
    ing: [["4 slices", "bread", "a day or two old"], ["30g", "butter", "softened"], ["40g", "raisins"], ["2", "eggs"], ["250ml", "milk"], ["40g", "sugar"], ["½ tsp", "cinnamon"], ["½ tsp", "?vanilla extract"]],
    steps: [
      "Butter the bread, cut into triangles and layer in a dish that fits your basket, scattering raisins between the layers.",
      "Whisk the eggs, milk, sugar and vanilla and pour over. Leave to soak for 10 minutes.",
      "Sprinkle with cinnamon.",
      "Cook at 160°C for 18–20 minutes until just set with a crisp top."
    ]
  },
  {
    id: "shortbread", name: "Easy Shortbread", emoji: "🍪", cat: "desserts",
    temp: 150, time: 15, prep: 10, serves: 8, turn: "none",
    tags: ["baking", "christmas", "scottish", "vegetarian"],
    ing: [["100g", "butter", "softened"], ["50g", "sugar", "plus extra for sprinkling"], ["150g", "plain flour"], ["pinch", "salt"]],
    steps: [
      "Beat the butter and sugar, then mix in the flour and salt to a dough.",
      "Press into a lined 15–18cm tin that fits your basket and prick all over with a fork.",
      "Cook at 150°C for 15 minutes until pale golden.",
      "Sprinkle with sugar and cut into fingers while warm. Leave to cool in the tin."
    ]
  },
  {
    id: "apple-turnovers", name: "Apple Turnovers", emoji: "🥧", cat: "desserts",
    temp: 180, time: 12, prep: 15, serves: 4, turn: "none",
    tags: ["baking", "autumn", "vegetarian"],
    ing: [["320g sheet", "puff pastry"], ["2", "apples", "peeled and diced"], ["2 tbsp", "brown sugar"], ["½ tsp", "cinnamon"], ["1", "eggs", "beaten"], ["1 tbsp", "?icing sugar"]],
    steps: [
      "Mix the apple, sugar and cinnamon.",
      "Cut the pastry into 4 squares. Spoon the apple onto one half of each, fold into triangles and seal with a fork.",
      "Brush with egg and cut a small slit in the tops.",
      "Cook at 180°C for 12 minutes until puffed and golden. Dust with icing sugar."
    ]
  }
);
