'use strict';
/* Popular takeaway & world classics – same format as recipes.js. */
RECIPES.push(
  // ───────────── CHICKEN ─────────────
  { id: "chicken-tikka-masala", name: "Chicken Tikka Masala", emoji: "🍛", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 4, turn: "shake",
    tags: ["fakeaway", "curry", "indian", "family", "gluten-free"],
    ing: [["600g", "chicken thighs", "diced"], ["3 tbsp", "tikka paste"], ["100g", "greek yoghurt"], ["1", "onion", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["2cm", "ginger", "grated"], ["400g", "passata"], ["100ml", "cream", "double or single"], ["1 tsp", "garam masala"], ["1 tsp", "sugar"], ["1 tbsp", "oil"], ["handful", "?fresh coriander"], ["to serve", "?rice"]],
    steps: [
      "Mix the chicken with 2 tbsp tikka paste and the yoghurt. Marinate for at least 20 minutes (overnight is best).",
      "Shake off excess marinade and air fry at 200°C for 12–14 minutes, shaking at halfway, until charred at the edges and 75°C inside.",
      "Meanwhile, fry the onion in the oil for 8 minutes, add the garlic, ginger and remaining tikka paste for 1 minute, then add the passata and sugar and simmer for 10 minutes.",
      "Stir in the cream, garam masala and cooked chicken and simmer for 2 minutes. Scatter with coriander and serve with rice."
    ] },
  { id: "butter-chicken", name: "Butter Chicken", emoji: "🧈", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 4, turn: "shake",
    tags: ["fakeaway", "trending", "curry", "indian", "mild", "gluten-free"],
    ing: [["600g", "chicken thighs", "diced"], ["100g", "greek yoghurt"], ["2 tsp", "garam masala"], ["1 tsp", "chilli powder", "Kashmiri if you have it"], ["1 tsp", "cumin"], ["3 cloves", "garlic", "crushed"], ["2cm", "ginger", "grated"], ["40g", "butter"], ["2 tbsp", "tomato puree"], ["300g", "passata"], ["150ml", "cream"], ["1 tbsp", "honey"], ["1 tsp", "salt"], ["to serve", "?naan"]],
    steps: [
      "Mix the chicken with the yoghurt, 1 tsp garam masala, chilli powder, cumin, half the garlic and ginger and the salt. Marinate for 20 minutes or longer.",
      "Air fry at 200°C for 12–14 minutes, shaking at halfway, until lightly charred and 75°C inside.",
      "Melt the butter in a pan, fry the remaining garlic and ginger for 1 minute, then add the tomato puree, passata and honey and simmer for 8 minutes.",
      "Stir in the cream, remaining garam masala and the chicken. Simmer for 2 minutes and serve with naan or rice."
    ] },
  { id: "tandoori-chicken-legs", name: "Tandoori Chicken Legs", emoji: "🍗", cat: "chicken", temp: 190, time: 25, prep: 10, serves: 4, turn: "flip",
    tags: ["fakeaway", "indian", "spicy", "gluten-free"],
    ing: [["8", "chicken drumsticks", "skin removed, slashed"], ["150g", "greek yoghurt"], ["1 tbsp", "tikka paste", "or tandoori paste"], ["1 tsp", "paprika"], ["1 tsp", "chilli powder"], ["1 tsp", "garam masala"], ["2 cloves", "garlic", "crushed"], ["1", "lemon", "juiced"], ["1 tsp", "salt"], ["1", "?red onion", "sliced, to serve"]],
    steps: [
      "Cut 2–3 deep slashes in each drumstick. Mix everything else (except the red onion) and rub well into the chicken. Marinate for at least 1 hour.",
      "Shake off the excess and lay the legs in a single layer in the basket.",
      "Cook at 190°C for 22–25 minutes, turning at halfway, until charred and 75°C at the bone.",
      "Serve with sliced red onion, lemon wedges and a minty yoghurt dip."
    ] },
  { id: "sweet-sour-chicken", name: "Sweet & Sour Chicken", emoji: "🍍", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 3, turn: "shake",
    tags: ["fakeaway", "chinese", "family"],
    ing: [["500g", "chicken breast", "bite-size pieces"], ["1", "eggs", "beaten"], ["60g", "cornflour"], ["1", "bell peppers", "chunks"], ["1", "onion", "chunks"], ["200g", "pineapple", "chunks, tinned is fine"], ["4 tbsp", "tomato ketchup"], ["3 tbsp", "rice vinegar"], ["2 tbsp", "brown sugar"], ["1 tbsp", "soy sauce"], ["100ml", "water", "or pineapple juice"], ["spray", "oil"], ["to serve", "?rice"]],
    steps: [
      "Dip the chicken in egg, then toss in 50g cornflour with a pinch of salt. Spray well with oil.",
      "Air fry at 200°C for 12–14 minutes, shaking at halfway, until golden and 75°C inside.",
      "Meanwhile stir-fry the pepper and onion for 3 minutes. Add the ketchup, vinegar, sugar, soy, water and pineapple, then thicken with the remaining 10g cornflour mixed with a splash of water.",
      "Toss the crispy chicken through the sauce just before serving so it stays crunchy. Serve with rice."
    ] },
  { id: "orange-chicken", name: "Orange Chicken", emoji: "🍊", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 3, turn: "shake",
    tags: ["fakeaway", "trending", "chinese", "sticky"],
    ing: [["500g", "chicken thighs", "bite-size pieces"], ["1", "eggs", "beaten"], ["60g", "cornflour"], ["2", "oranges", "zest and juice"], ["3 tbsp", "honey"], ["2 tbsp", "soy sauce"], ["1 tbsp", "rice vinegar"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "ginger", "grated"], ["½ tsp", "chilli flakes"], ["2", "spring onions", "sliced"], ["1 tsp", "sesame seeds"], ["spray", "oil"]],
    steps: [
      "Dip the chicken in egg, then toss in 50g cornflour with a pinch of salt. Spray with oil.",
      "Air fry at 200°C for 12–14 minutes, shaking at halfway, until crisp and 75°C inside.",
      "Meanwhile simmer the orange (or lemon) zest and juice, honey, soy, vinegar, garlic, ginger and chilli for 3 minutes. Thicken with the remaining cornflour mixed with a splash of water.",
      "Toss the chicken in the glossy sauce and finish with spring onions and sesame seeds."
    ] },
  { id: "general-tsos-chicken", name: "General Tso's Chicken", emoji: "🌶️", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 3, turn: "shake",
    tags: ["fakeaway", "chinese", "spicy", "sticky"],
    ing: [["500g", "chicken thighs", "bite-size pieces"], ["1", "eggs", "beaten"], ["60g", "cornflour"], ["3 tbsp", "soy sauce"], ["2 tbsp", "hoisin sauce"], ["2 tbsp", "brown sugar"], ["2 tbsp", "rice vinegar"], ["1 tsp", "sesame oil"], ["3 cloves", "garlic", "crushed"], ["1 tsp", "ginger", "grated"], ["1 tsp", "chilli flakes", "or 4 dried chillies"], ["3", "spring onions", "sliced"], ["spray", "oil"], ["to serve", "?rice"]],
    steps: [
      "Coat the chicken in egg, then 50g cornflour and a pinch of salt. Spray with oil.",
      "Air fry at 200°C for 12–14 minutes, shaking at halfway, until crisp and 75°C inside.",
      "Fry the garlic, ginger and chilli in the sesame oil for 30 seconds. Add the soy, hoisin, sugar, vinegar and 4 tbsp water, then thicken with the remaining cornflour mixed with water.",
      "Toss the chicken in the sauce, scatter with spring onions and serve with rice."
    ] },
  { id: "chinese-lemon-chicken", name: "Chinese Lemon Chicken", emoji: "🍋", cat: "chicken", temp: 200, time: 14, prep: 10, serves: 2, turn: "flip",
    tags: ["fakeaway", "chinese", "classic"],
    ing: [["2", "chicken breast", "butterflied and halved"], ["1", "eggs", "beaten"], ["60g", "cornflour"], ["2", "lemon", "zest and juice"], ["3 tbsp", "sugar"], ["150ml", "water"], ["1 tbsp", "?honey"], ["spray", "oil"], ["1", "?spring onions", "sliced"]],
    steps: [
      "Dip the chicken pieces in egg, then press into 50g cornflour with a pinch of salt. Spray both sides with oil.",
      "Air fry at 200°C for 12–14 minutes, flipping at halfway, until golden and 75°C inside.",
      "Simmer the lemon zest and juice, sugar, honey and water for 2 minutes. Thicken with the remaining cornflour mixed with a splash of water until glossy.",
      "Slice the chicken into strips, pour over the lemon sauce and scatter with spring onion."
    ] },
  { id: "crispy-shredded-chicken", name: "Crispy Shredded Chicken", emoji: "🥢", cat: "chicken", temp: 200, time: 12, prep: 15, serves: 2, turn: "shake",
    tags: ["fakeaway", "chinese", "sweet chilli"],
    ing: [["2", "chicken breast", "cut into thin strips"], ["1", "eggs", "beaten"], ["60g", "cornflour"], ["1", "carrots", "matchsticks"], ["1", "bell peppers", "thin strips"], ["3", "spring onions", "sliced"], ["4 tbsp", "sweet chilli sauce"], ["2 tbsp", "soy sauce"], ["1 tbsp", "rice vinegar"], ["1 tbsp", "honey"], ["2 cloves", "garlic", "crushed"], ["spray", "oil"]],
    steps: [
      "Toss the thin chicken strips in egg, then cornflour with a pinch of salt. Spread out in the basket and spray well with oil.",
      "Air fry at 200°C for 10–12 minutes, shaking at halfway, until crunchy and 75°C inside.",
      "Stir-fry the carrot, pepper and garlic for 2 minutes, then add the sweet chilli, soy, vinegar and honey and bubble until sticky.",
      "Toss the chicken through quickly, top with spring onions and serve straight away."
    ] },
  { id: "salt-chilli-chicken", name: "Salt & Chilli Chicken", emoji: "🧂", cat: "chicken", temp: 200, time: 14, prep: 10, serves: 2, turn: "shake",
    tags: ["fakeaway", "chinese", "spicy", "gluten-free"],
    ing: [["500g", "chicken thighs", "bite-size pieces"], ["1", "eggs", "beaten"], ["50g", "cornflour"], ["1 tsp", "five spice"], ["1 tsp", "salt"], ["1", "onion", "sliced"], ["1", "bell peppers", "sliced"], ["1", "red chilli", "sliced"], ["3", "spring onions", "sliced"], ["3 cloves", "garlic", "sliced"], ["½ tsp", "chilli flakes"], ["spray", "oil"]],
    steps: [
      "Toss the chicken in egg, then cornflour mixed with half the five spice and salt. Spray with oil.",
      "Air fry at 200°C for 12–14 minutes, shaking at halfway, until crisp and 75°C inside.",
      "Stir-fry the onion, pepper, chilli and garlic in a little oil for 3 minutes until softened.",
      "Toss in the chicken with the remaining five spice, salt, chilli flakes and spring onions. Serve immediately."
    ] },
  { id: "yakitori-chicken-skewers", name: "Yakitori Chicken Skewers", emoji: "🍢", cat: "chicken", temp: 200, time: 12, prep: 15, serves: 2, turn: "flip",
    tags: ["fakeaway", "japanese", "skewers", "sticky"],
    ing: [["400g", "chicken thighs", "bite-size pieces"], ["4", "spring onions", "cut into 3cm lengths"], ["4 tbsp", "soy sauce"], ["2 tbsp", "honey"], ["1 tbsp", "rice vinegar", "or mirin"], ["1 tsp", "ginger", "grated"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Simmer the soy, honey, vinegar and ginger in a small pan for 3–4 minutes until syrupy. Set half aside for serving.",
      "Thread the chicken and spring onions onto short skewers (soak wooden ones for 20 minutes) and brush with the glaze.",
      "Air fry at 200°C for 10–12 minutes, turning and brushing with more glaze at halfway, until sticky and 75°C inside.",
      "Brush with the reserved glaze and sprinkle with sesame seeds."
    ] },
  { id: "peri-peri-chicken-burger", name: "Peri-Peri Chicken Burger", emoji: "🍔", cat: "chicken", temp: 200, time: 16, prep: 10, serves: 2, turn: "flip",
    tags: ["fakeaway", "spicy", "burgers", "nando's-style"],
    ing: [["2", "chicken breast", "butterflied"], ["3 tbsp", "peri peri sauce", "plus extra to serve"], ["1", "lemon", "juiced"], ["1 tsp", "paprika"], ["1 tsp", "garlic granules"], ["2", "burger buns"], ["2 tbsp", "mayonnaise"], ["handful", "lettuce"], ["1", "tomatoes", "sliced"], ["2 slices", "?cheddar"]],
    steps: [
      "Marinate the butterflied chicken in peri peri sauce, lemon juice, paprika, garlic granules and a pinch of salt for 20 minutes or longer.",
      "Air fry at 200°C for 14–16 minutes, flipping at halfway, until charred and 75°C inside. Add the cheese for the last minute if using.",
      "Toast the buns in the air fryer for 1 minute.",
      "Mix the mayo with a dash of peri peri and build the burgers with lettuce, tomato and chicken."
    ] },
  { id: "spicy-chicken-fillet-burger", name: "Spicy Chicken Fillet Burger", emoji: "🍔", cat: "chicken", temp: 200, time: 16, prep: 15, serves: 2, turn: "flip",
    tags: ["fakeaway", "spicy", "burgers", "zinger-style"],
    ing: [["2", "chicken breast", "flattened to 2cm"], ["100ml", "milk"], ["1 tsp", "hot sauce"], ["60g", "plain flour"], ["40g", "cornflakes", "crushed"], ["1 tsp", "paprika"], ["1 tsp", "chilli powder"], ["1 tsp", "garlic granules"], ["1 tsp", "salt"], ["2", "burger buns"], ["2 tbsp", "mayonnaise"], ["handful", "lettuce", "shredded"], ["spray", "oil"]],
    steps: [
      "Soak the chicken in the milk and hot sauce for at least 20 minutes.",
      "Mix the flour, crushed cornflakes, paprika, chilli, garlic and salt. Press the chicken into the coating, dip back in the milk and coat again. Spray well with oil.",
      "Air fry at 200°C for 14–16 minutes, flipping and spraying again at halfway, until crunchy and 75°C inside.",
      "Build in toasted buns with mayo and shredded lettuce."
    ] },
  { id: "chicken-enchiladas", name: "Chicken Enchiladas", emoji: "🌯", cat: "chicken", temp: 180, time: 12, prep: 20, serves: 4, turn: "none",
    tags: ["wraps", "fakeaway", "mexican", "family", "cheesy"],
    ing: [["400g", "chicken breast", "cooked and shredded"], ["1", "onion", "chopped"], ["1", "bell peppers", "chopped"], ["2 tbsp", "fajita seasoning"], ["200g", "black beans", "drained"], ["400g", "passata"], ["1 tsp", "chilli powder"], ["4", "tortilla wraps"], ["120g", "cheddar", "grated"], ["3 tbsp", "?sour cream"], ["handful", "?fresh coriander"]],
    steps: [
      "Fry the onion and pepper for 5 minutes, add the chicken, beans and fajita seasoning and heat through until piping hot (75°C).",
      "Simmer the passata with the chilli powder and a pinch of salt for 5 minutes.",
      "Fill and roll the tortillas, then sit seam-side down in an ovenproof dish that fits your basket. Spoon over the sauce and top with cheese.",
      "Air fry at 180°C for 10–12 minutes until bubbling and golden. Finish with sour cream and coriander."
    ] },
  { id: "chicken-quesadillas", name: "Chicken Quesadillas", emoji: "🧀", cat: "chicken", temp: 180, time: 8, prep: 10, serves: 2, turn: "flip",
    tags: ["wraps", "fakeaway", "mexican", "quick", "cheesy"],
    ing: [["250g", "chicken breast", "cooked and shredded"], ["1 tsp", "fajita seasoning"], ["2", "tortilla wraps"], ["100g", "cheddar", "grated"], ["50g", "?mozzarella", "grated"], ["2", "spring onions", "sliced"], ["2 tbsp", "salsa"], ["1", "?red chilli", "sliced"], ["spray", "oil"]],
    steps: [
      "Toss the chicken with the fajita seasoning. Scatter half the cheese over one half of each tortilla, then the chicken, spring onions, salsa, chilli and the rest of the cheese.",
      "Fold over and spray the outsides with oil. Weigh down with a metal rack or cocktail sticks so they don't open.",
      "Air fry at 180°C for 7–8 minutes, flipping at halfway, until crisp and the filling is piping hot (75°C).",
      "Rest for 1 minute, cut into wedges and serve with sour cream and salsa."
    ] },
  { id: "chicken-souvlaki", name: "Chicken Souvlaki", emoji: "🍢", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["fakeaway", "greek", "skewers", "healthy"],
    ing: [["600g", "chicken thighs", "chunks"], ["3 tbsp", "oil", "olive oil"], ["1", "lemon", "zest and juice"], ["2 tsp", "oregano"], ["3 cloves", "garlic", "crushed"], ["1 tsp", "paprika"], ["4", "pitta bread"], ["150g", "greek yoghurt"], ["½", "cucumber", "grated and squeezed"], ["2", "tomatoes", "sliced"], ["½", "red onion", "sliced"]],
    steps: [
      "Marinate the chicken in the oil, lemon, oregano, two-thirds of the garlic, paprika and a pinch of salt for 30 minutes or more.",
      "Thread onto skewers and air fry at 200°C for 12–14 minutes, turning at halfway, until charred and 75°C inside.",
      "Mix the yoghurt, cucumber and remaining garlic for a quick tzatziki. Warm the pittas in the air fryer for 1 minute.",
      "Serve the chicken in the pittas with tzatziki, tomato and red onion."
    ] },

  // ───────────── LAMB ─────────────
  { id: "doner-kebab", name: "Homemade Doner Kebab", emoji: "🥙", cat: "lamb", temp: 180, time: 30, prep: 15, serves: 4, turn: "flip",
    tags: ["wraps", "fakeaway", "trending", "kebab", "batch cook"],
    ing: [["500g", "lamb mince", "20% fat is ideal"], ["1 tsp", "garlic granules"], ["1 tsp", "ground coriander"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["1 tsp", "oregano"], ["½ tsp", "chilli powder"], ["1 tsp", "salt"], ["4", "pitta bread"], ["handful", "lettuce", "shredded"], ["1", "red onion", "sliced"], ["2", "tomatoes", "sliced"], ["3 tbsp", "?hot sauce"], ["3 tbsp", "?greek yoghurt", "garlic sauce"]],
    steps: [
      "Put the mince, spices and salt in a bowl and knead hard for 5 minutes until it turns smooth and paste-like – this gives the classic doner texture.",
      "Shape into a tight, flat loaf about 4cm thick and wrap tightly in foil. Chill for 30 minutes if you have time.",
      "Unwrap and air fry at 180°C for 25–30 minutes, turning at halfway, until 75°C in the centre.",
      "Rest for 5 minutes, then slice as thinly as you can. For extra crispy bits, return the slices to the basket at 200°C for 2–3 minutes.",
      "Stuff into warm pittas with salad, chilli sauce and garlic yoghurt."
    ] },
  { id: "lamb-gyros", name: "Lamb Gyros", emoji: "🥙", cat: "lamb", temp: 200, time: 12, prep: 15, serves: 4, turn: "shake",
    tags: ["wraps", "fakeaway", "greek", "wraps"],
    ing: [["500g", "lamb leg steaks", "thinly sliced"], ["2 tbsp", "oil", "olive oil"], ["1", "lemon", "juiced"], ["2 tsp", "oregano"], ["1 tsp", "paprika"], ["1 tsp", "cumin"], ["3 cloves", "garlic", "crushed"], ["4", "pitta bread"], ["150g", "greek yoghurt"], ["½", "cucumber", "grated"], ["2", "tomatoes", "chopped"], ["½", "red onion", "sliced"], ["200g", "?potatoes", "as chips, Greek-style"]],
    steps: [
      "Marinate the lamb slices in the oil, lemon, oregano, paprika, cumin, most of the garlic and a pinch of salt for 30 minutes.",
      "Air fry at 200°C for 10–12 minutes, shaking at halfway, until browned and crisp at the edges (63°C for medium, 71°C for well done).",
      "Stir the cucumber and remaining garlic into the yoghurt. Warm the pittas.",
      "Wrap the lamb in the pittas with tzatziki, tomato, onion and a few chips tucked in, Greek-style."
    ] },

  // ───────────── BEEF ─────────────
  { id: "beef-burritos", name: "Beef Burritos", emoji: "🌯", cat: "beef", temp: 190, time: 8, prep: 20, serves: 4, turn: "flip",
    tags: ["wraps", "fakeaway", "mexican", "family", "batch cook"],
    ing: [["500g", "beef mince"], ["1", "onion", "chopped"], ["2 tbsp", "fajita seasoning"], ["2 tbsp", "tomato puree"], ["400g", "black beans", "drained"], ["250g", "rice", "cooked"], ["100g", "cheddar", "grated"], ["4", "tortilla wraps", "large"], ["4 tbsp", "salsa"], ["3 tbsp", "?sour cream"], ["1", "?avocado", "sliced"], ["spray", "oil"]],
    steps: [
      "Brown the mince and onion in a pan, add the fajita seasoning, tomato puree, beans and a splash of water and simmer for 10 minutes until thick and the mince reaches 75°C.",
      "Fill each tortilla with rice, beef, cheese and salsa. Fold in the sides and roll up tightly.",
      "Place seam-side down, spray with oil and air fry at 190°C for 7–8 minutes, turning at halfway, until crisp.",
      "Halve and serve with sour cream and avocado."
    ] },
  { id: "beef-empanadas", name: "Beef Empanadas", emoji: "🥟", cat: "beef", temp: 180, time: 14, prep: 25, serves: 4, turn: "flip",
    tags: ["fakeaway", "south american", "party", "batch cook"],
    ing: [["300g", "beef mince"], ["1", "onion", "finely chopped"], ["1", "?bell peppers", "finely chopped"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["½ tsp", "chilli flakes"], ["1 tbsp", "tomato puree"], ["1", "eggs", "1 hard-boiled & chopped, plus 1 beaten to glaze"], ["2 sheets", "shortcrust pastry", "ready-rolled"]],
    steps: [
      "Brown the mince with the onion and pepper, add the spices and tomato puree and cook for 10 minutes until the mince reaches 75°C. Cool, then stir in the chopped egg.",
      "Cut 12cm circles from the pastry. Spoon filling onto one half, fold over and crimp the edges with a fork.",
      "Brush with beaten egg and air fry at 180°C for 12–14 minutes in batches, turning at halfway, until deep golden.",
      "Cool for 5 minutes before eating – the filling is very hot."
    ] },
  { id: "birria-style-beef-tacos", name: "Birria-Style Beef Tacos", emoji: "🌮", cat: "beef", temp: 200, time: 8, prep: 30, serves: 4, turn: "flip",
    tags: ["wraps", "fakeaway", "trending", "mexican", "cheesy", "quick version"],
    ing: [["500g", "beef steak", "braising or rump, thinly sliced"], ["1", "onion", "half sliced, half finely chopped"], ["3 cloves", "garlic", "crushed"], ["2 tsp", "chilli powder", "ancho or chipotle if you have it"], ["1 tsp", "cumin"], ["1 tsp", "oregano"], ["½ tsp", "cinnamon"], ["2 tbsp", "tomato puree"], ["1", "stock cube", "beef"], ["400ml", "water"], ["8", "tortilla wraps", "small"], ["150g", "mozzarella", "grated"], ["handful", "fresh coriander"], ["1", "lime"]],
    steps: [
      "Brown the beef and sliced onion in a pan, add the garlic, spices and tomato puree for 1 minute, then the stock cube and water. Simmer covered for 25–30 minutes until tender, then shred the beef. Keep the broth (consommé).",
      "Dip each tortilla in the fat on top of the broth, lay flat and fill one half with beef and mozzarella. Fold over.",
      "Air fry at 200°C for 7–8 minutes in batches, flipping at halfway, until crisp and the cheese has melted.",
      "Serve with chopped onion, coriander, lime and a cup of hot consommé for dipping."
    ] },
  { id: "philly-cheesesteak", name: "Philly Cheesesteak", emoji: "🥖", cat: "beef", temp: 200, time: 10, prep: 10, serves: 2, turn: "shake",
    tags: ["fakeaway", "american", "cheesy", "sandwiches"],
    ing: [["300g", "beef steak", "ribeye, sliced paper-thin (freeze 30 min first)"], ["1", "onion", "sliced"], ["1", "bell peppers", "green, sliced"], ["100g", "?mushrooms", "sliced"], ["1 tbsp", "oil"], ["1 tsp", "worcestershire sauce"], ["4 slices", "cheddar", "or provolone"], ["2", "hot dog rolls", "sub rolls, split"]],
    steps: [
      "Toss the onion, pepper and mushrooms in half the oil and air fry at 200°C for 6 minutes, shaking at halfway.",
      "Toss the steak in the remaining oil, worcestershire sauce, salt and pepper, add to the basket with the veg and cook for 3–4 minutes, shaking once, until just browned (63°C for medium).",
      "Pile into the rolls, lay the cheese on top and return to the basket for 1 minute to melt.",
      "Serve straight away with chips or crisps."
    ] },
  { id: "meatball-subs", name: "Meatball Subs", emoji: "🥖", cat: "beef", temp: 190, time: 14, prep: 15, serves: 4, turn: "shake",
    tags: ["fakeaway", "american", "cheesy", "family", "sandwiches"],
    ing: [["500g", "beef mince"], ["40g", "breadcrumbs"], ["1", "eggs"], ["30g", "parmesan", "grated"], ["1 tsp", "oregano"], ["2 cloves", "garlic", "crushed"], ["400g", "passata"], ["1 tsp", "?mixed herbs"], ["4", "hot dog rolls", "sub rolls or baguette pieces"], ["150g", "mozzarella", "sliced or grated"]],
    steps: [
      "Mix the mince, breadcrumbs, egg, parmesan, oregano, half the garlic and a pinch of salt. Roll into 16 balls.",
      "Air fry at 190°C for 10–12 minutes, shaking at halfway, until browned and 75°C inside.",
      "Meanwhile simmer the passata with the remaining garlic and mixed herbs for 10 minutes, then add the meatballs.",
      "Fill the split rolls with meatballs and sauce, top with mozzarella and air fry for 2 minutes until melted."
    ] },
  { id: "korean-beef-bulgogi-bowls", name: "Korean Beef Bulgogi Bowls", emoji: "🍚", cat: "beef", temp: 200, time: 8, prep: 15, serves: 2, turn: "shake",
    tags: ["fakeaway", "trending", "korean", "rice bowls"],
    ing: [["350g", "beef steak", "sirloin or rump, very thinly sliced"], ["3 tbsp", "soy sauce"], ["1 tbsp", "brown sugar"], ["1 tbsp", "sesame oil"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "ginger", "grated"], ["1 tsp", "?gochujang"], ["1", "?apples", "pear is traditional – grate 2 tbsp"], ["1", "onion", "thinly sliced"], ["250g", "rice", "cooked"], ["2", "spring onions", "sliced"], ["1", "carrots", "matchsticks"], ["½", "cucumber", "sliced"], ["1 tsp", "sesame seeds"]],
    steps: [
      "Mix the soy, sugar, sesame oil, garlic, ginger, gochujang and grated apple. Add the beef and onion and marinate for 20 minutes or more.",
      "Lift out of the marinade and spread in the basket. Air fry at 200°C for 6–8 minutes, shaking at halfway, until caramelised (63°C for medium).",
      "Simmer any leftover marinade in a pan for 2 minutes to make a sauce.",
      "Serve over rice with carrot, cucumber, spring onions, sesame seeds and the sauce."
    ] },

  // ───────────── PORK ─────────────
  { id: "tonkatsu-pork", name: "Tonkatsu Pork", emoji: "🍱", cat: "pork", temp: 200, time: 14, prep: 15, serves: 2, turn: "flip",
    tags: ["fakeaway", "japanese", "crispy"],
    ing: [["2", "pork chops", "boneless, 2cm thick"], ["30g", "plain flour"], ["1", "eggs", "beaten"], ["80g", "breadcrumbs", "panko if possible"], ["3 tbsp", "tomato ketchup"], ["1 tbsp", "worcestershire sauce"], ["1 tsp", "soy sauce"], ["1 tsp", "sugar"], ["¼", "cabbage", "very finely shredded"], ["to serve", "?rice"], ["spray", "oil"]],
    steps: [
      "Snip the fat on the edge of the chops so they stay flat. Season, then coat in flour, egg and breadcrumbs. Spray both sides with oil.",
      "Air fry at 200°C for 12–14 minutes, flipping at halfway, until golden and 71°C inside.",
      "Mix the ketchup, worcestershire, soy and sugar to make tonkatsu sauce.",
      "Rest the pork for 2 minutes, slice into strips and serve with shredded cabbage, rice and the sauce."
    ] },
  { id: "sweet-sour-pork", name: "Sweet & Sour Pork", emoji: "🍍", cat: "pork", temp: 200, time: 14, prep: 15, serves: 3, turn: "shake",
    tags: ["fakeaway", "chinese", "family"],
    ing: [["500g", "pork fillet", "bite-size chunks"], ["1", "eggs", "beaten"], ["60g", "cornflour"], ["1", "bell peppers", "chunks"], ["1", "onion", "chunks"], ["200g", "pineapple", "chunks"], ["4 tbsp", "tomato ketchup"], ["3 tbsp", "rice vinegar"], ["2 tbsp", "brown sugar"], ["1 tbsp", "soy sauce"], ["100ml", "water"], ["spray", "oil"], ["to serve", "?rice"]],
    steps: [
      "Coat the pork in egg, then 50g cornflour with a pinch of salt. Spray well with oil.",
      "Air fry at 200°C for 12–14 minutes, shaking at halfway, until crisp and 71°C inside.",
      "Stir-fry the pepper and onion for 3 minutes, add the pineapple, ketchup, vinegar, sugar, soy and water and thicken with the remaining cornflour mixed with water.",
      "Toss the pork in the sauce at the last minute and serve with rice."
    ] },
  { id: "pork-souvlaki", name: "Pork Souvlaki", emoji: "🍢", cat: "pork", temp: 200, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["fakeaway", "greek", "skewers"],
    ing: [["600g", "pork fillet", "3cm chunks"], ["3 tbsp", "oil", "olive oil"], ["1", "lemon", "zest and juice"], ["2 tsp", "oregano"], ["2 cloves", "garlic", "crushed"], ["1", "red onion", "wedges"], ["1", "bell peppers", "chunks"], ["4", "pitta bread"], ["150g", "?greek yoghurt", "for tzatziki"], ["½", "?cucumber", "grated"]],
    steps: [
      "Marinate the pork in the oil, lemon, oregano, garlic and a pinch of salt for 30 minutes or longer.",
      "Thread onto skewers with the onion and pepper.",
      "Air fry at 200°C for 12–14 minutes, turning at halfway, until charred and 71°C inside.",
      "Serve with warm pitta and a quick tzatziki made from yoghurt, cucumber and a pinch of salt."
    ] },

  // ───────────── FISH ─────────────
  { id: "salt-pepper-squid", name: "Salt & Pepper Squid", emoji: "🦑", cat: "fish", temp: 200, time: 8, prep: 10, serves: 2, turn: "shake",
    tags: ["fakeaway", "chinese", "starter", "quick"],
    ing: [["400g", "squid", "rings or scored tubes, patted dry"], ["1", "eggs", "beaten"], ["60g", "cornflour"], ["1 tsp", "salt"], ["1 tsp", "black pepper", "coarsely ground"], ["½ tsp", "five spice"], ["1", "red chilli", "sliced"], ["2", "spring onions", "sliced"], ["1", "lemon", "wedges"], ["spray", "oil"]],
    steps: [
      "Dip the squid in egg, then toss in the cornflour mixed with the salt, pepper and five spice. Spray well with oil.",
      "Spread in a single layer and air fry at 200°C for 6–8 minutes, shaking at halfway, until crisp and golden (63°C) – don't overcook or it turns rubbery.",
      "Toss with the chilli and spring onions straight away.",
      "Serve with lemon wedges and sweet chilli sauce."
    ] },
  { id: "prawn-tempura-style", name: "Tempura-Style Prawns", emoji: "🍤", cat: "fish", temp: 200, time: 8, prep: 15, serves: 2, turn: "flip",
    tags: ["fakeaway", "japanese", "starter"],
    ing: [["250g", "prawns", "large raw, peeled with tails on"], ["40g", "plain flour"], ["30g", "cornflour"], ["1", "eggs", "beaten"], ["80g", "breadcrumbs", "panko, lightly crushed"], ["3 tbsp", "soy sauce", "for dipping"], ["1 tsp", "?ginger", "grated, for dipping"], ["1 tsp", "?rice vinegar"], ["spray", "oil"]],
    steps: [
      "Make a few shallow cuts along the belly of each prawn and press gently to straighten them.",
      "Dust in the mixed flours, dip in egg mixed with 1 tbsp ice-cold water, then coat lightly in panko. Spray well with oil.",
      "Air fry at 200°C for 6–8 minutes in a single layer, flipping at halfway, until golden and the prawns are pink and 63°C.",
      "Mix the soy, ginger and vinegar for a dipping sauce and serve immediately."
    ] },
  { id: "chippy-fish-and-chips", name: "Chippy-Style Fish & Chips", emoji: "🐟", cat: "fish", temp: 200, time: 32, prep: 15, serves: 2, turn: "flip",
    tags: ["fakeaway", "british", "friday night", "classic"],
    ing: [["2", "white fish fillets", "cod or haddock, thick loins"], ["600g", "potatoes", "Maris Piper, cut into chunky chips"], ["50g", "plain flour"], ["1", "eggs", "beaten"], ["80g", "breadcrumbs"], ["½ tsp", "?baking powder"], ["1 tsp", "?paprika"], ["1", "lemon", "wedges"], ["200g", "?peas", "for mushy peas"], ["1 tbsp", "oil"], ["spray", "oil"]],
    steps: [
      "Soak the chips in cold water for 10 minutes, dry well and toss with 1 tbsp oil and salt. Air fry at 200°C for 20 minutes, shaking halfway.",
      "Meanwhile pat the fish dry, dust in flour mixed with the baking powder and paprika, dip in egg, then coat in breadcrumbs. Spray well with oil.",
      "Move the chips to one side (or take them out and keep warm), add the fish and cook at 200°C for 10–12 minutes, flipping carefully at halfway, until golden and 63°C inside. Return the chips for the last 3 minutes.",
      "Serve with lemon, salt, a splash of vinegar and mushy peas (simmer the peas and mash with butter)."
    ] },

  // ───────────── DUCK ─────────────
  { id: "crispy-duck-pancakes", name: "Crispy Duck Pancakes", emoji: "🦆", cat: "chicken", temp: 180, time: 40, prep: 10, serves: 4, turn: "flip",
    tags: ["wraps", "fakeaway", "chinese", "sharing", "duck"],
    ing: [["4", "duck legs"], ["2 tsp", "five spice"], ["1 tsp", "salt"], ["12", "tortilla wraps", "Chinese pancakes – small wraps work in a pinch"], ["6 tbsp", "hoisin sauce"], ["½", "cucumber", "matchsticks"], ["4", "spring onions", "shredded"]],
    steps: [
      "Prick the duck skin all over, pat dry and rub with the five spice and salt.",
      "Air fry skin-side down at 180°C for 20 minutes, then turn skin-side up and cook for another 18–20 minutes until the skin is crisp and the meat is tender (75°C+).",
      "Rest for 5 minutes, then shred the meat and crispy skin with two forks.",
      "Warm the pancakes (wrapped in foil, 2 minutes in the basket) and serve with hoisin, cucumber and spring onions to wrap at the table."
    ] },

  // ───────────── SIDES ─────────────
  { id: "chilli-cheese-fries", name: "Chilli Cheese Fries", emoji: "🍟", cat: "sides", temp: 200, time: 25, prep: 15, serves: 4, turn: "shake",
    tags: ["fakeaway", "american", "cheesy", "sharing"],
    ing: [["800g", "potatoes", "cut into fries"], ["1 tbsp", "oil"], ["250g", "beef mince"], ["1", "onion", "chopped"], ["2 tsp", "chilli powder"], ["1 tsp", "cumin"], ["200g", "passata"], ["200g", "?black beans", "drained"], ["120g", "cheddar", "grated"], ["1", "?red chilli", "sliced"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Soak the fries in cold water for 10 minutes, dry well and toss with the oil and salt. Air fry at 200°C for 20–22 minutes, shaking at halfway.",
      "Meanwhile brown the mince and onion, add the spices, passata and beans and simmer for 10 minutes until thick and the mince reaches 75°C.",
      "Tip the fries into an ovenproof dish that fits the basket, spoon over the chilli and cover with cheese.",
      "Air fry for 3 minutes until the cheese melts. Top with chilli and spring onions."
    ] },
  { id: "loaded-fries", name: "Loaded Fries", emoji: "🍟", cat: "sides", temp: 200, time: 25, prep: 10, serves: 3, turn: "shake",
    tags: ["fakeaway", "trending", "cheesy", "sharing"],
    ing: [["800g", "potatoes", "cut into fries"], ["1 tbsp", "oil"], ["1 tsp", "paprika"], ["4 rashers", "bacon", "streaky, chopped"], ["120g", "cheddar", "grated"], ["2 tbsp", "sour cream"], ["2 tbsp", "?bbq sauce"], ["2 tbsp", "?sriracha", "mixed with mayo"], ["1 tbsp", "?mayonnaise"], ["3", "spring onions", "sliced"], ["1", "?red chilli", "sliced"]],
    steps: [
      "Soak the fries for 10 minutes, dry well and toss with the oil, paprika and salt. Air fry at 200°C for 18 minutes, shaking at halfway.",
      "Add the chopped bacon on top and cook for 4 minutes more until the bacon is crisp.",
      "Transfer to a dish that fits the basket, cover with cheese and air fry for 2–3 minutes until melted.",
      "Drizzle with sour cream, BBQ sauce and sriracha mayo, then scatter with spring onions and chilli."
    ] },
  { id: "salt-pepper-chips", name: "Salt & Pepper Chips", emoji: "🧂", cat: "sides", temp: 200, time: 22, prep: 10, serves: 3, turn: "shake",
    tags: ["fakeaway", "trending", "chinese", "vegan", "gluten-free"],
    ing: [["700g", "potatoes", "cut into chips"], ["1 tbsp", "oil"], ["1", "onion", "sliced"], ["1", "bell peppers", "green, sliced"], ["1", "red chilli", "sliced"], ["2 cloves", "garlic", "sliced"], ["1 tsp", "salt"], ["½ tsp", "five spice"], ["½ tsp", "chilli flakes"], ["½ tsp", "sugar"], ["2", "spring onions", "sliced"]],
    steps: [
      "Soak the chips for 10 minutes, dry well, toss in half the oil and air fry at 200°C for 20–22 minutes, shaking at halfway, until crisp.",
      "Mix the salt, five spice, chilli flakes and sugar to make the seasoning.",
      "In a wok, fry the onion, pepper, chilli and garlic in the remaining oil for 3 minutes.",
      "Toss in the chips and seasoning, stir-fry for 30 seconds and finish with spring onions."
    ] },
  { id: "cheesy-garlic-naan", name: "Cheesy Garlic Naan", emoji: "🫓", cat: "sides", temp: 180, time: 5, prep: 5, serves: 2, turn: "none",
    tags: ["fakeaway", "indian", "quick", "vegetarian", "cheesy"],
    ing: [["2", "naan"], ["30g", "butter", "melted"], ["2 cloves", "garlic", "crushed"], ["80g", "mozzarella", "grated"], ["30g", "?cheddar", "grated"], ["1 tbsp", "fresh coriander", "chopped"], ["½ tsp", "?chilli flakes"]],
    steps: [
      "Mix the melted butter and garlic and brush over the naans.",
      "Scatter over the cheese and chilli flakes.",
      "Air fry at 180°C for 4–5 minutes until bubbling and golden (cook one at a time if needed).",
      "Sprinkle with coriander and cut into strips to serve."
    ] },

  // ───────────── VEGGIE ─────────────
  { id: "onion-bhajis", name: "Onion Bhajis", emoji: "🧅", cat: "veggie", temp: 190, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["fakeaway", "indian", "vegan", "gluten-free", "starter"],
    ing: [["2", "onion", "thinly sliced"], ["100g", "gram flour"], ["1 tsp", "cumin"], ["1 tsp", "ground coriander"], ["1 tsp", "curry powder", "for turmeric colour"], ["½ tsp", "chilli powder"], ["1", "?red chilli", "finely chopped"], ["2 tbsp", "fresh coriander", "chopped"], ["1 tsp", "salt"], ["4 tbsp", "water"], ["spray", "oil"], ["3 tbsp", "?mango chutney"]],
    steps: [
      "Mix the onions with the salt and leave for 10 minutes to soften and release liquid.",
      "Stir in the gram flour, spices, chilli and coriander, adding water a spoonful at a time until it just clumps together.",
      "Line the basket with baking paper, add golf-ball-sized mounds, flatten slightly and spray well with oil.",
      "Air fry at 190°C for 12–14 minutes, flipping and spraying again at halfway, until crisp. Serve with mango chutney."
    ] },
  { id: "vegetable-pakoras", name: "Vegetable Pakoras", emoji: "🥦", cat: "veggie", temp: 190, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["fakeaway", "indian", "vegan", "gluten-free", "starter"],
    ing: [["1", "onion", "thinly sliced"], ["1", "potatoes", "grated"], ["100g", "cauliflower", "finely chopped"], ["50g", "spinach", "shredded"], ["120g", "gram flour"], ["1 tsp", "garam masala"], ["1 tsp", "cumin"], ["½ tsp", "chilli powder"], ["1 tsp", "salt"], ["5 tbsp", "water"], ["2 tbsp", "fresh coriander", "chopped"], ["spray", "oil"]],
    steps: [
      "Squeeze excess water from the grated potato. Mix all the veg with the gram flour, spices and salt.",
      "Add water a spoonful at a time to make a thick, sticky batter that coats the veg. Stir in the coriander.",
      "Spoon small heaps onto baking paper in the basket, flatten slightly and spray with oil.",
      "Air fry at 190°C for 12–14 minutes, flipping at halfway, until golden and crisp. Serve with mint yoghurt or chutney."
    ] },
  { id: "vegetable-samosas", name: "Vegetable Samosas", emoji: "🥟", cat: "veggie", temp: 180, time: 12, prep: 25, serves: 4, turn: "flip",
    tags: ["fakeaway", "indian", "vegan", "party"],
    ing: [["2", "potatoes", "boiled and diced"], ["100g", "peas"], ["1", "onion", "finely chopped"], ["1", "carrots", "finely diced"], ["2 tsp", "curry powder"], ["1 tsp", "garam masala"], ["1 tsp", "cumin"], ["1", "?red chilli", "chopped"], ["1 tbsp", "fresh coriander", "chopped"], ["6 sheets", "filo pastry"], ["2 tbsp", "oil"]],
    steps: [
      "Fry the onion and carrot in 1 tsp oil for 5 minutes, add the spices for 1 minute, then stir in the potato, peas, chilli and coriander. Lightly crush and cool.",
      "Cut the filo into long strips, brush with oil, place a spoonful of filling at one end and fold over and over into triangles.",
      "Brush with oil and air fry at 180°C for 10–12 minutes in a single layer, turning at halfway, until golden and crisp.",
      "Serve warm with mango chutney or a tamarind dip."
    ] }
);
