'use strict';
/* More chicken: everyday, healthy, cuts & meal prep – same format as recipes.js. */
RECIPES.push(
  {
    id: "perfect-juicy-chicken-breast", name: "Perfect Juicy Chicken Breast", emoji: "🍗", cat: "chicken",
    temp: 190, time: 18, prep: 5, serves: 4, turn: "flip",
    tags: ["meal prep", "high protein", "healthy", "gluten-free", "trending"],
    ing: [["4", "chicken breast", "about 200g each"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["1 tsp", "paprika"], ["1 tsp", "garlic granules"], ["½ tsp", "?mixed herbs"]],
    steps: [
      "Bash the thick end of each breast with a rolling pin so they're an even thickness – this is the secret to juicy chicken.",
      "Rub with oil, then season with salt, pepper, paprika, garlic granules and herbs.",
      "Cook at 190°C for 16–18 minutes, flipping at halfway.",
      "Check the thickest part has reached 75°C, then rest for 5 minutes before slicing. Keeps 3 days in the fridge."
    ]
  },
  {
    id: "crispy-skin-chicken-thighs", name: "Crispy Skin Chicken Thighs", emoji: "🍗", cat: "chicken",
    temp: 200, time: 24, prep: 5, serves: 4, turn: "flip",
    tags: ["budget", "family", "gluten-free", "crispy"],
    ing: [["8", "chicken thighs", "bone-in, skin-on"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["1 tsp", "garlic granules"], ["1 tsp", "paprika"], ["1 tsp", "?thyme"]],
    steps: [
      "Pat the thighs very dry with kitchen paper – dry skin means crispy skin.",
      "Season all over with salt, pepper, garlic granules, paprika and thyme. No oil needed – the skin renders its own fat.",
      "Cook skin-side down at 200°C for 10 minutes, then flip skin-side up for 12–14 minutes until golden and crackly.",
      "Check the meat by the bone has reached 75°C. Rest for 5 minutes."
    ]
  },
  {
    id: "spatchcock-chicken", name: "Spatchcock Chicken", emoji: "🐔", cat: "chicken",
    temp: 180, time: 40, prep: 15, serves: 4, turn: "flip",
    tags: ["sunday roast", "family", "gluten-free"],
    ing: [["1.4kg", "whole chicken", "check it fits flat in your basket"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["1 tsp", "paprika"], ["2 cloves", "garlic", "crushed"], ["1", "?lemon", "zested"], ["1 tsp", "?thyme"]],
    steps: [
      "Place the chicken breast-side down and cut along both sides of the backbone with strong scissors. Remove it, flip the bird and press firmly on the breastbone to flatten.",
      "Rub with oil, garlic, paprika, salt, pepper, lemon zest and thyme.",
      "Cook skin-side down at 180°C for 20 minutes, then turn skin-side up and cook for 18–20 minutes more until golden.",
      "Check the thickest part of the thigh has reached 75°C and the juices run clear.",
      "Rest for 10 minutes, then cut into quarters to serve."
    ]
  },
  {
    id: "chicken-leg-quarters", name: "Chicken Legs (Whole Leg Quarters)", emoji: "🍗", cat: "chicken",
    temp: 190, time: 30, prep: 5, serves: 4, turn: "flip",
    tags: ["budget", "family", "gluten-free"],
    ing: [["4", "chicken drumsticks", "whole leg quarters (thigh and drumstick attached)"], ["1 tbsp", "oil"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["1 tsp", "paprika"], ["1 tsp", "garlic granules"], ["1 tsp", "?mixed herbs"]],
    steps: [
      "Pat the legs dry, then rub with oil and season with salt, pepper, paprika, garlic granules and herbs.",
      "Arrange skin-side down in a single layer – cook in batches if needed.",
      "Cook at 190°C for 15 minutes, flip skin-side up and cook for 13–15 minutes more until the skin is crisp.",
      "Check the thickest part of the thigh near the bone has reached 75°C. Rest for 5 minutes."
    ]
  },
  {
    id: "lemon-pepper-wings", name: "Lemon Pepper Wings", emoji: "🍋", cat: "chicken",
    temp: 200, time: 24, prep: 5, serves: 2, turn: "shake",
    tags: ["party", "game day", "gluten-free", "trending"],
    ing: [["800g", "chicken wings"], ["1 tbsp", "cornflour"], ["1 tsp", "salt"], ["2 tsp", "black pepper", "coarsely ground"], ["1", "lemon", "zest and juice"], ["30g", "butter", "melted"], ["½ tsp", "garlic granules"]],
    steps: [
      "Pat the wings dry and toss with cornflour, salt and half the pepper.",
      "Cook at 200°C for 22–24 minutes, shaking at halfway, until crisp and golden.",
      "Check the thickest wing has reached 75°C.",
      "Mix the melted butter, lemon zest and juice, garlic granules and remaining pepper. Toss the hot wings through and serve straight away."
    ]
  },
  {
    id: "honey-bbq-wings", name: "Honey BBQ Wings", emoji: "🍯", cat: "chicken",
    temp: 200, time: 24, prep: 5, serves: 2, turn: "shake",
    tags: ["sticky", "party", "game day", "kids"],
    ing: [["800g", "chicken wings"], ["1 tbsp", "cornflour"], ["1 tsp", "salt"], ["1 tsp", "paprika"], ["4 tbsp", "bbq sauce"], ["2 tbsp", "honey"]],
    steps: [
      "Pat the wings dry and toss with cornflour, salt and paprika.",
      "Cook at 200°C for 20 minutes, shaking at halfway.",
      "Mix the BBQ sauce and honey, toss the wings through it and return to the basket for 3–4 minutes until sticky.",
      "Check the thickest wing has reached 75°C before serving."
    ]
  },
  {
    id: "sweet-chilli-wings", name: "Sweet Chilli Wings", emoji: "🌶️", cat: "chicken",
    temp: 200, time: 24, prep: 5, serves: 2, turn: "shake",
    tags: ["sticky", "party", "game day"],
    ing: [["800g", "chicken wings"], ["1 tbsp", "cornflour"], ["1 tsp", "salt"], ["5 tbsp", "sweet chilli sauce"], ["1 tbsp", "soy sauce"], ["1", "?lime", "juice"], ["2", "?spring onions", "sliced"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Pat the wings dry and toss with cornflour and salt.",
      "Cook at 200°C for 20 minutes, shaking at halfway.",
      "Mix the sweet chilli sauce, soy sauce and lime juice. Toss the wings in it and cook for 3–4 minutes more until glazed.",
      "Check the thickest wing has reached 75°C. Scatter with spring onions and sesame seeds."
    ]
  },
  {
    id: "salt-and-vinegar-wings", name: "Salt & Vinegar Wings", emoji: "🧂", cat: "chicken",
    temp: 200, time: 24, prep: 5, serves: 2, turn: "shake",
    tags: ["party", "game day", "gluten-free", "crispy"],
    ing: [["800g", "chicken wings"], ["4 tbsp", "malt vinegar"], ["1 tbsp", "cornflour"], ["1½ tsp", "salt", "flaky sea salt is best"], ["½ tsp", "black pepper"]],
    steps: [
      "Soak the wings in 3 tbsp vinegar for 20 minutes (or overnight in the fridge), then pat very dry.",
      "Toss with cornflour, 1 tsp salt and the pepper.",
      "Cook at 200°C for 22–24 minutes, shaking at halfway, until crisp.",
      "Check the thickest wing has reached 75°C. Splash over the remaining vinegar and sprinkle with the rest of the salt while hot."
    ]
  },
  {
    id: "chicken-tenders-honey-mustard", name: "Chicken Tenders with Honey Mustard Dip", emoji: "🍯", cat: "chicken",
    temp: 200, time: 12, prep: 15, serves: 4, turn: "flip",
    tags: ["kids", "family", "crispy"],
    ing: [["500g", "chicken breast", "mini fillets, or breasts cut into strips"], ["40g", "plain flour"], ["2", "eggs", "beaten"], ["100g", "breadcrumbs", "panko if you have it"], ["1 tsp", "paprika"], ["1 tsp", "salt"], ["spray", "oil"], ["3 tbsp", "mayonnaise"], ["1 tbsp", "mustard", "Dijon or wholegrain"], ["1 tbsp", "honey"]],
    steps: [
      "Season the flour with salt and paprika. Coat the chicken in flour, then egg, then breadcrumbs.",
      "Spray with oil and arrange in a single layer in the basket.",
      "Cook at 200°C for 10–12 minutes, flipping at halfway, until golden.",
      "Check the thickest tender has reached 75°C.",
      "Mix the mayonnaise, mustard and honey for the dip and serve alongside."
    ]
  },
  {
    id: "parmesan-crusted-chicken", name: "Parmesan Crusted Chicken", emoji: "🧀", cat: "chicken",
    temp: 190, time: 16, prep: 10, serves: 2, turn: "flip",
    tags: ["family", "crispy", "midweek"],
    ing: [["2", "chicken breast", "bashed to an even thickness"], ["40g", "parmesan", "finely grated"], ["40g", "breadcrumbs"], ["1 tsp", "mixed herbs"], ["½ tsp", "garlic granules"], ["1 tbsp", "mayonnaise", "or 1 beaten egg"], ["½ tsp", "salt"], ["spray", "oil"], ["1", "?lemon", "wedges to serve"]],
    steps: [
      "Mix the parmesan, breadcrumbs, herbs, garlic granules and salt.",
      "Brush the chicken all over with mayonnaise, then press firmly into the crumb mix. Spray with oil.",
      "Cook at 190°C for 14–16 minutes, carefully flipping at halfway.",
      "Check the thickest part has reached 75°C. Serve with lemon wedges."
    ]
  },
  {
    id: "bacon-wrapped-stuffed-chicken", name: "Bacon-Wrapped Stuffed Chicken", emoji: "🥓", cat: "chicken",
    temp: 180, time: 22, prep: 15, serves: 2, turn: "flip",
    tags: ["low carb", "date night", "gluten-free", "trending"],
    ing: [["2", "chicken breast"], ["60g", "cream cheese"], ["30g", "spinach", "chopped"], ["1 clove", "garlic", "crushed"], ["4 rashers", "bacon", "streaky"], ["½ tsp", "black pepper"], ["½ tsp", "paprika"]],
    steps: [
      "Mix the cream cheese, spinach, garlic and pepper.",
      "Cut a deep pocket into the side of each breast and fill with the cream cheese mix.",
      "Dust with paprika, then wrap each breast tightly in 2 rashers of bacon, tucking the ends underneath.",
      "Cook seam-side down at 180°C for 20–22 minutes, flipping at halfway, until the bacon is crisp.",
      "Check the chicken has reached 75°C in the thickest part. Rest for 3 minutes."
    ]
  },
  {
    id: "caprese-stuffed-chicken", name: "Caprese Stuffed Chicken", emoji: "🍅", cat: "chicken",
    temp: 180, time: 20, prep: 10, serves: 2, turn: "none",
    tags: ["low carb", "italian-style", "gluten-free"],
    ing: [["2", "chicken breast"], ["60g", "mozzarella", "sliced"], ["1", "tomatoes", "sliced"], ["1 tbsp", "pesto", "or fresh basil"], ["1 tsp", "oil"], ["½ tsp", "oregano"], ["½ tsp", "salt"], ["½ tsp", "black pepper"], ["1 tsp", "?balsamic vinegar", "to drizzle"]],
    steps: [
      "Cut 4–5 deep slits across the top of each breast, without cutting through.",
      "Spread a little pesto into each slit, then tuck in alternating slices of mozzarella and tomato.",
      "Brush with oil and season with oregano, salt and pepper.",
      "Cook at 180°C for 18–20 minutes – no need to turn. Check the thickest part has reached 75°C.",
      "Drizzle with balsamic before serving."
    ]
  },
  {
    id: "chicken-cordon-bleu", name: "Chicken Cordon Bleu", emoji: "🧀", cat: "chicken",
    temp: 180, time: 20, prep: 20, serves: 2, turn: "flip",
    tags: ["classic", "retro", "family"],
    ing: [["2", "chicken breast"], ["2 slices", "ham"], ["2 slices", "cheddar", "or Swiss cheese"], ["40g", "plain flour"], ["1", "eggs", "beaten"], ["80g", "breadcrumbs"], ["½ tsp", "salt"], ["spray", "oil"], ["1 tsp", "?mustard"]],
    steps: [
      "Butterfly each breast and bash it thin between cling film. Spread with a little mustard, lay over the ham and cheese and roll up tightly. Secure with cocktail sticks.",
      "Coat in seasoned flour, then egg, then breadcrumbs. Spray with oil.",
      "Cook seam-side down at 180°C for 18–20 minutes, turning carefully at halfway.",
      "Check the chicken has reached 75°C in the middle. Rest for 3 minutes and remove the cocktail sticks."
    ]
  },
  {
    id: "chicken-schnitzel", name: "Chicken Schnitzel", emoji: "🍋", cat: "chicken",
    temp: 200, time: 10, prep: 15, serves: 2, turn: "flip",
    tags: ["classic", "crispy", "quick"],
    ing: [["2", "chicken breast", "bashed to 1cm thick"], ["40g", "plain flour"], ["1", "eggs", "beaten"], ["80g", "breadcrumbs", "panko if you have it"], ["½ tsp", "salt"], ["½ tsp", "black pepper"], ["½ tsp", "paprika"], ["spray", "oil"], ["1", "lemon", "wedges to serve"]],
    steps: [
      "Bash the chicken between cling film to an even 1cm thickness.",
      "Season the flour with salt, pepper and paprika. Coat the chicken in flour, then egg, then breadcrumbs.",
      "Spray both sides well with oil and cook at 200°C for 8–10 minutes, flipping at halfway, until golden.",
      "Check the chicken has reached 75°C. Serve with lemon wedges."
    ]
  },
  {
    id: "mustard-herb-drumsticks", name: "Mustard & Herb Chicken Drumsticks", emoji: "🍗", cat: "chicken",
    temp: 190, time: 25, prep: 5, serves: 4, turn: "flip",
    tags: ["family", "budget", "gluten-free"],
    ing: [["8", "chicken drumsticks"], ["2 tbsp", "mustard", "wholegrain"], ["1 tbsp", "honey"], ["1 tbsp", "oil"], ["1 tsp", "mixed herbs"], ["1 clove", "garlic", "crushed"], ["1 tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Slash each drumstick a couple of times to the bone.",
      "Mix the mustard, honey, oil, herbs, garlic, salt and pepper and coat the drumsticks well.",
      "Cook at 190°C for 22–25 minutes, turning at halfway, until golden and sticky.",
      "Check the meat near the bone has reached 75°C before serving."
    ]
  },
  {
    id: "smoky-paprika-drumsticks", name: "Smoky Paprika Drumsticks", emoji: "🔥", cat: "chicken",
    temp: 190, time: 25, prep: 5, serves: 4, turn: "flip",
    tags: ["budget", "family", "gluten-free", "bbq"],
    ing: [["8", "chicken drumsticks"], ["1 tbsp", "oil"], ["2 tsp", "paprika", "smoked"], ["1 tsp", "garlic granules"], ["1 tsp", "brown sugar"], ["½ tsp", "cumin"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["¼ tsp", "?chilli powder"]],
    steps: [
      "Pat the drumsticks dry and slash a couple of times to the bone.",
      "Mix the oil with all the spices, sugar, salt and pepper and rub well into the chicken.",
      "Cook at 190°C for 22–25 minutes, turning at halfway, until charred at the edges.",
      "Check the meat near the bone has reached 75°C. Rest for 5 minutes."
    ]
  },
  {
    id: "garlic-herb-butter-thighs", name: "Garlic Herb Butter Chicken Thighs", emoji: "🧈", cat: "chicken",
    temp: 200, time: 18, prep: 5, serves: 4, turn: "flip",
    tags: ["midweek", "low carb", "gluten-free"],
    ing: [["8", "chicken thighs", "boneless, skinless"], ["40g", "butter", "softened"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "parsley", "chopped"], ["½ tsp", "thyme"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["1", "?lemon", "juice"]],
    steps: [
      "Mix the butter, garlic, parsley, thyme, salt and pepper.",
      "Rub half the garlic butter over the thighs and lay them flat in the basket.",
      "Cook at 200°C for 16–18 minutes, flipping at halfway.",
      "Check the thickest thigh has reached 75°C. Top with the remaining butter and a squeeze of lemon and let it melt for a minute."
    ]
  },
  {
    id: "chicken-meatballs", name: "Chicken Meatballs", emoji: "🧆", cat: "chicken",
    temp: 190, time: 12, prep: 15, serves: 4, turn: "shake",
    tags: ["meal prep", "kids", "high protein"],
    ing: [["500g", "chicken mince"], ["30g", "breadcrumbs"], ["1", "eggs"], ["30g", "parmesan", "grated"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "oregano"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["spray", "oil"]],
    steps: [
      "Mix everything except the oil until just combined. Wet your hands and roll into about 20 walnut-sized balls.",
      "Spray the basket and the meatballs with oil and arrange in a single layer.",
      "Cook at 190°C for 10–12 minutes, shaking gently at halfway.",
      "Check the centre of a large meatball has reached 75°C. Serve with pasta sauce or in wraps."
    ]
  },
  {
    id: "turkey-burgers", name: "Turkey Burgers", emoji: "🍔", cat: "chicken",
    temp: 190, time: 14, prep: 10, serves: 4, turn: "flip",
    tags: ["healthy", "high protein", "family"],
    ing: [["500g", "turkey mince"], ["30g", "breadcrumbs"], ["1", "eggs"], ["½", "red onion", "finely chopped"], ["1 tsp", "worcestershire sauce"], ["1 tsp", "paprika"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["spray", "oil"], ["4", "burger buns"], ["4 slices", "?cheddar"], ["", "?lettuce"]],
    steps: [
      "Mix the turkey, breadcrumbs, egg, onion, Worcestershire sauce, paprika, salt and pepper. Shape into 4 patties with a dip in the middle.",
      "Spray with oil and cook at 190°C for 12–14 minutes, flipping at halfway.",
      "Check the centre has reached 75°C – turkey must be cooked through. Add cheese for the last minute if using.",
      "Serve in toasted buns with lettuce."
    ]
  },
  {
    id: "turkey-meatballs", name: "Turkey Meatballs", emoji: "🧆", cat: "chicken",
    temp: 190, time: 12, prep: 15, serves: 4, turn: "shake",
    tags: ["healthy", "meal prep", "high protein"],
    ing: [["500g", "turkey mince"], ["30g", "oats", "or breadcrumbs"], ["1", "eggs"], ["2", "spring onions", "finely sliced"], ["1 clove", "garlic", "crushed"], ["1 tsp", "mixed herbs"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["spray", "oil"]],
    steps: [
      "Mix everything except the oil and roll into about 20 balls.",
      "Spray the basket and meatballs with oil and arrange in a single layer.",
      "Cook at 190°C for 10–12 minutes, shaking gently at halfway, until golden.",
      "Check the centre of a large meatball has reached 75°C before serving."
    ]
  },
  {
    id: "chicken-veg-meal-prep", name: "Chicken & Veg Meal-Prep Traybake", emoji: "🥦", cat: "chicken",
    temp: 200, time: 18, prep: 15, serves: 4, turn: "shake",
    tags: ["meal prep", "healthy", "high protein", "gluten-free", "trending"],
    ing: [["600g", "chicken breast", "cut into 3cm chunks"], ["1", "broccoli", "small florets"], ["2", "bell peppers", "chunks"], ["1", "red onion", "wedges"], ["1", "courgette", "half-moons"], ["2 tbsp", "oil"], ["2 tsp", "paprika"], ["1 tsp", "garlic granules"], ["1 tsp", "mixed herbs"], ["1 tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Toss the chicken and veg with oil, spices, herbs, salt and pepper in a big bowl.",
      "Spread out in the basket – cook in two batches if it's piled up more than two layers deep.",
      "Cook at 200°C for 16–18 minutes, shaking at halfway, until the chicken is golden and the veg is charred at the edges.",
      "Check the largest chicken chunk has reached 75°C.",
      "Cool, then split between 4 tubs with rice. Keeps 3 days in the fridge."
    ]
  },
  {
    id: "chicken-breakfast-patties", name: "Chicken Sausage-Style Patties", emoji: "🍳", cat: "chicken",
    temp: 190, time: 10, prep: 10, serves: 4, turn: "flip",
    tags: ["breakfast", "high protein", "meal prep"],
    ing: [["500g", "chicken thighs", "boneless, minced in a food processor"], ["1 tsp", "sage", "dried"], ["½ tsp", "paprika"], ["½ tsp", "garlic granules"], ["1 tbsp", "maple syrup"], ["¼ tsp", "chilli flakes"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["spray", "oil"]],
    steps: [
      "Mix the minced chicken with the herbs, spices, maple syrup, salt and pepper.",
      "Shape into 8 thin patties, about 1cm thick. Spray with oil.",
      "Cook at 190°C for 9–10 minutes, flipping at halfway.",
      "Check the centre has reached 75°C. Serve in English muffins with eggs, or freeze for later."
    ]
  },
  {
    id: "rotisserie-style-thighs", name: "Rotisserie-Style Chicken Thighs", emoji: "🍗", cat: "chicken",
    temp: 190, time: 25, prep: 5, serves: 4, turn: "flip",
    tags: ["family", "gluten-free", "fakeaway"],
    ing: [["8", "chicken thighs", "bone-in, skin-on"], ["1 tbsp", "oil"], ["2 tsp", "paprika"], ["1 tsp", "garlic granules"], ["1 tsp", "thyme"], ["1 tsp", "brown sugar"], ["½ tsp", "?onion granules"], ["1 tsp", "salt"], ["½ tsp", "black pepper"]],
    steps: [
      "Mix the paprika, garlic granules, thyme, sugar, onion, salt and pepper.",
      "Pat the thighs dry, rub with oil, then coat well with the spice mix, getting some under the skin.",
      "Cook skin-side down at 190°C for 12 minutes, flip and cook skin-side up for 11–13 minutes until deep golden.",
      "Check the meat by the bone has reached 75°C. Rest for 5 minutes."
    ]
  },
  {
    id: "grilled-chicken-fillet-burgers", name: "Grilled Chicken Fillet Burgers", emoji: "🍔", cat: "chicken",
    temp: 200, time: 14, prep: 10, serves: 4, turn: "flip",
    tags: ["healthy", "family", "quick"],
    ing: [["2", "chicken breast", "sliced in half horizontally into 4 thin fillets"], ["1 tbsp", "oil"], ["1 tsp", "paprika"], ["½ tsp", "garlic granules"], ["½ tsp", "mixed herbs"], ["1 tsp", "salt"], ["½ tsp", "black pepper"], ["4", "burger buns"], ["", "lettuce"], ["1", "tomatoes", "sliced"], ["2 tbsp", "?mayonnaise"]],
    steps: [
      "Rub the thin chicken fillets with oil, paprika, garlic granules, herbs, salt and pepper.",
      "Cook at 200°C for 12–14 minutes, flipping at halfway.",
      "Check the thickest fillet has reached 75°C. Toast the buns in the basket for the last minute.",
      "Build the burgers with mayonnaise, lettuce and tomato."
    ]
  }
);
