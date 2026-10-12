'use strict';
/* Indian & South Asian favourites (curry-house style) – same format as recipes.js. */
RECIPES.push(
  // ───────────── CHICKEN ─────────────
  { id: "indian-chicken-korma", name: "Chicken Korma with Air-Fried Chicken", emoji: "🍛", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 4, turn: "shake",
    tags: ["indian", "fakeaway", "family", "kids", "trending"],
    ing: [["600g", "chicken thighs", "boneless, in chunks"], ["2 tbsp", "greek yoghurt"], ["1 tsp", "turmeric"], ["1", "onion", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tsp", "curry powder", "mild, or garam masala"], ["4", "cardamom", "pods, bruised"], ["400ml", "coconut milk"], ["50g", "ground almonds"], ["1 tbsp", "sugar"], ["100ml", "?cream", "double"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["300g", "?rice", "to serve"]],
    steps: [
      "Toss the chicken with the yoghurt, turmeric, salt and oil. Air fry at 200°C for 12–14 minutes in a single layer, shaking halfway, until golden at the edges and 75°C inside.",
      "Meanwhile soften the onion in a little oil for 8 minutes, then add the garlic, ginger, curry powder and cardamom for 1 minute.",
      "Stir in the coconut milk, ground almonds and sugar and simmer gently for 10 minutes until thick and creamy.",
      "Add the crispy chicken and cream, warm through for 2 minutes and serve with rice."
    ] },
  { id: "indian-chicken-madras", name: "Chicken Madras", emoji: "🌶️", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 4, turn: "shake",
    tags: ["indian", "fakeaway", "high-protein", "spicy"],
    ing: [["600g", "chicken thighs", "boneless, in chunks"], ["2 tsp", "chilli powder"], ["1 tsp", "turmeric"], ["1", "onion", "finely chopped"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tbsp", "curry powder", "hot"], ["1 tsp", "cumin"], ["1 tsp", "ground coriander"], ["400g", "passata"], ["1 tbsp", "tomato puree"], ["150ml", "water"], ["1", "stock cube", "chicken"], ["1 tbsp", "lemon", "juice"], ["2 tbsp", "oil"], ["½ tsp", "salt"], ["1 handful", "?fresh coriander"]],
    steps: [
      "Toss the chicken with 1 tsp chilli powder, the turmeric, salt and 1 tbsp oil. Air fry at 200°C for 12–14 minutes, single layer, shaking halfway, until charred at the edges and 75°C inside.",
      "Fry the onion in the remaining oil for 8 minutes until golden, add the garlic, ginger, curry powder, cumin, coriander and remaining chilli for 1 minute.",
      "Add the passata, tomato puree, water and stock cube and simmer for 10–12 minutes until thick and rich.",
      "Stir in the chicken and lemon juice, simmer for 2 minutes and finish with fresh coriander."
    ] },
  { id: "indian-chicken-dopiaza", name: "Chicken Dopiaza", emoji: "🧅", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 4, turn: "shake",
    tags: ["indian", "fakeaway", "high-protein"],
    ing: [["600g", "chicken breast", "in chunks"], ["2", "onion", "1 in petals, 1 finely chopped"], ["1", "red onion", "in petals"], ["2 tbsp", "tikka paste"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tbsp", "curry powder", "medium"], ["400g", "tomatoes", "chopped"], ["150ml", "water"], ["2 tbsp", "oil"], ["½ tsp", "salt"], ["1 handful", "?fresh coriander"]],
    steps: [
      "Coat the chicken and onion petals in the tikka paste and 1 tbsp oil. Air fry at 200°C for 12–14 minutes, single layer, shaking halfway, until the onions are charred and the chicken is 75°C inside.",
      "Fry the chopped onion in the remaining oil for 10 minutes until deep golden, then add the garlic, ginger and curry powder for 1 minute.",
      "Add the tomatoes, water and salt and simmer for 10 minutes until saucy.",
      "Fold in the chicken and charred onions (that's the 'double onion'), simmer for 2 minutes and top with coriander."
    ] },
  { id: "indian-chicken-balti", name: "Chicken Balti", emoji: "🥘", cat: "chicken", temp: 200, time: 15, prep: 15, serves: 4, turn: "shake",
    tags: ["indian", "fakeaway", "family", "high-protein"],
    ing: [["600g", "chicken thighs", "boneless, in chunks"], ["2", "bell peppers", "in chunks"], ["1", "onion", "1 in chunks, plus 1 chopped for the sauce"], ["2 tbsp", "tikka paste"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tbsp", "curry powder", "medium"], ["1 tsp", "?mustard seeds"], ["400g", "passata"], ["100ml", "water"], ["1 tbsp", "lemon", "juice"], ["2 tbsp", "oil"], ["½ tsp", "salt"], ["1 handful", "fresh coriander"], ["4", "?naan", "to serve"]],
    steps: [
      "Toss the chicken, peppers and onion chunks with the tikka paste and 1 tbsp oil. Air fry at 200°C for 13–15 minutes, single layer, shaking halfway, until charred and the chicken is 75°C inside.",
      "In a wide pan, fry the chopped onion and mustard seeds in the rest of the oil for 8 minutes, then add the garlic, ginger and curry powder for 1 minute.",
      "Add the passata, water and salt and bubble for 8–10 minutes until thick.",
      "Tip in the chicken and veg, add the lemon juice and plenty of coriander, and serve straight from the pan with naan."
    ] },
  { id: "indian-chicken-saag", name: "Chicken Saag", emoji: "🥬", cat: "chicken", temp: 200, time: 14, prep: 15, serves: 4, turn: "shake",
    tags: ["indian", "fakeaway", "healthy", "high-protein", "low-carb"],
    ing: [["600g", "chicken thighs", "boneless, in chunks"], ["1 tsp", "turmeric"], ["1 tsp", "chilli powder"], ["250g", "spinach"], ["1", "onion", "finely chopped"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["1 tsp", "cumin"], ["2 tsp", "garam masala"], ["200g", "tomatoes", "chopped"], ["2 tbsp", "greek yoghurt"], ["1 tbsp", "oil"], ["½ tsp", "salt"]],
    steps: [
      "Toss the chicken with the turmeric, chilli, salt and half the oil. Air fry at 200°C for 12–14 minutes, single layer, shaking halfway, until golden and 75°C inside.",
      "Meanwhile wilt the spinach in a pan with a splash of water, then blitz or finely chop it.",
      "Fry the onion in the remaining oil for 8 minutes, add the garlic, ginger, cumin and curry powder for 1 minute, then the tomatoes for 5 minutes.",
      "Stir in the spinach and chicken, simmer for 3 minutes, take off the heat and swirl through the yoghurt."
    ] },
  { id: "indian-chicken-seekh-kebabs", name: "Chicken Seekh Kebabs", emoji: "🍢", cat: "chicken", temp: 200, time: 12, prep: 15, serves: 4, turn: "flip",
    tags: ["indian", "high-protein", "healthy", "low-carb", "bbq"],
    ing: [["500g", "chicken mince"], ["1", "onion", "very finely chopped and squeezed dry"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["1", "red chilli", "finely chopped"], ["1 tsp", "cumin"], ["1 tsp", "ground coriander"], ["1 tsp", "garam masala"], ["½ tsp", "chilli powder"], ["1 handful", "fresh coriander", "chopped"], ["½ tsp", "salt"], ["spray", "oil"], ["1", "?lemon", "wedges"], ["4", "?naan", "to serve"]],
    steps: [
      "Mix everything except the oil and lemon really well with your hands – a minute of kneading makes the kebabs hold together. Chill for 15 minutes if you can.",
      "Shape into 8 long sausage shapes (around skewers that fit your basket if you like). Spray with oil.",
      "Air fry at 200°C for 10–12 minutes in a single layer, turning halfway, until charred and 75°C in the centre.",
      "Squeeze over lemon and serve with naan, salad and mint yoghurt."
    ] },
  { id: "indian-tandoori-chicken-wings", name: "Tandoori Chicken Wings", emoji: "🍗", cat: "chicken", temp: 200, time: 22, prep: 10, serves: 4, turn: "shake",
    tags: ["indian", "fakeaway", "low-carb", "high-protein", "trending"],
    ing: [["1kg", "chicken wings", "jointed"], ["4 tbsp", "greek yoghurt"], ["2 tbsp", "tikka paste", "or tandoori paste"], ["1 tsp", "paprika"], ["½ tsp", "chilli powder"], ["2 cloves", "garlic", "crushed"], ["1", "lemon", "juice"], ["½ tsp", "salt"], ["spray", "oil"], ["1 handful", "?fresh coriander"]],
    steps: [
      "Mix the yoghurt, tikka paste, paprika, chilli, garlic, lemon juice and salt. Coat the wings and marinate for at least 30 minutes (overnight is best).",
      "Shake off excess marinade, spray with oil and arrange in a single layer – don't overcrowd, cook in batches if needed.",
      "Air fry at 200°C for 20–22 minutes, shaking halfway, until charred and crispy and 75°C at the bone.",
      "Scatter with coriander and serve with mint yoghurt and lemon wedges."
    ] },
  { id: "indian-chicken-tikka-naan-pizza", name: "Chicken Tikka Naan Pizza", emoji: "🍕", cat: "chicken", temp: 180, time: 8, prep: 10, serves: 2, turn: "none",
    tags: ["indian", "fakeaway", "quick", "leftovers", "kids"],
    ing: [["2", "naan"], ["4 tbsp", "passata"], ["1 tbsp", "tikka paste"], ["200g", "chicken breast", "cooked tikka chicken, sliced"], ["½", "red onion", "thinly sliced"], ["½", "bell peppers", "sliced"], ["100g", "mozzarella", "grated"], ["1", "?red chilli", "sliced"], ["2 tbsp", "?mango chutney"], ["1 handful", "?fresh coriander"]],
    steps: [
      "Mix the passata with the tikka paste and spread over the naans.",
      "Top with the cooked tikka chicken, onion, pepper, chilli and mozzarella.",
      "Air fry one at a time at 180°C for 6–8 minutes until the cheese is bubbling and the chicken is piping hot (75°C).",
      "Drizzle with mango chutney, scatter with coriander and slice."
    ] },

  // ───────────── LAMB ─────────────
  { id: "indian-lamb-seekh-kebabs", name: "Lamb Seekh Kebabs", emoji: "🍢", cat: "lamb", temp: 200, time: 12, prep: 15, serves: 4, turn: "flip",
    tags: ["indian", "fakeaway", "high-protein", "low-carb", "bbq", "trending"],
    ing: [["500g", "lamb mince"], ["1", "onion", "very finely chopped and squeezed dry"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["1", "red chilli", "finely chopped"], ["1 tsp", "cumin"], ["1 tsp", "ground coriander"], ["1 tsp", "garam masala"], ["½ tsp", "chilli powder"], ["1 handful", "fresh coriander", "chopped"], ["½ tsp", "salt"], ["1", "?lemon", "wedges"], ["2 tbsp", "?mint sauce", "stirred into yoghurt"], ["4 tbsp", "?greek yoghurt"]],
    steps: [
      "Knead the mince with the onion, garlic, ginger, chilli, spices, coriander and salt for a minute until sticky.",
      "Shape into 8 long kebabs (on skewers that fit your basket if you have them). Lamb is fatty, so no oil needed.",
      "Air fry at 200°C for 10–12 minutes in a single layer, turning halfway, until charred and 75°C in the centre (it's mince, so cook it through).",
      "Serve with lemon wedges, sliced onion and mint sauce stirred into yoghurt."
    ] },
  { id: "indian-lamb-rogan-josh", name: "Lamb Rogan Josh with Crispy Lamb", emoji: "🍛", cat: "lamb", temp: 200, time: 12, prep: 15, serves: 4, turn: "shake",
    tags: ["indian", "fakeaway", "high-protein"],
    ing: [["600g", "lamb leg steaks", "in 3cm chunks"], ["2 tsp", "paprika"], ["1 tsp", "chilli powder"], ["1", "onion", "finely chopped"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tbsp", "curry powder", "medium"], ["4", "cardamom", "pods, bruised"], ["4", "cloves"], ["1 tsp", "cinnamon"], ["400g", "passata"], ["150ml", "water"], ["1", "stock cube", "lamb or beef"], ["3 tbsp", "greek yoghurt"], ["2 tbsp", "oil"], ["½ tsp", "salt"]],
    steps: [
      "Toss the lamb with 1 tsp paprika, the chilli, salt and 1 tbsp oil. Air fry at 200°C for 10–12 minutes, single layer, shaking halfway, until browned outside – 63°C for medium.",
      "Fry the onion with the cardamom, cloves and cinnamon in the remaining oil for 8 minutes, then add the garlic, ginger, curry powder and remaining paprika for 1 minute.",
      "Add the passata, water and stock cube and simmer for 15 minutes until deep red and thick.",
      "Take off the heat, stir in the yoghurt a spoonful at a time, then fold in the lamb and its juices to warm through."
    ] },
  { id: "indian-lamb-keema", name: "Lamb Keema Matar with Crispy Potatoes", emoji: "🥔", cat: "lamb", temp: 200, time: 20, prep: 15, serves: 4, turn: "shake",
    tags: ["indian", "family", "budget", "meal prep"],
    ing: [["500g", "lamb mince"], ["500g", "potatoes", "in 2cm cubes"], ["1 tsp", "turmeric"], ["1", "onion", "finely chopped"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tbsp", "curry powder", "medium"], ["1 tsp", "cumin"], ["400g", "tomatoes", "chopped"], ["150g", "peas", "frozen"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["1 handful", "?fresh coriander"]],
    steps: [
      "Toss the potatoes with the oil, turmeric and salt. Air fry at 200°C for 18–20 minutes, shaking halfway, until crisp and golden.",
      "Meanwhile brown the mince in a dry pan for 5 minutes, add the onion and cook for 5 minutes more, then the garlic, ginger, curry powder and cumin for 1 minute.",
      "Add the tomatoes and simmer for 12 minutes, stirring in the peas for the last 3. The mince should be cooked through to 75°C.",
      "Spoon into bowls and pile the crispy potatoes on top with coriander."
    ] },
  { id: "indian-tandoori-lamb-chops", name: "Tandoori Lamb Chops", emoji: "🍖", cat: "lamb", temp: 200, time: 10, prep: 10, serves: 2, turn: "flip",
    tags: ["indian", "fakeaway", "low-carb", "high-protein", "bbq"],
    ing: [["6", "lamb chops"], ["3 tbsp", "greek yoghurt"], ["1 tbsp", "tikka paste", "or tandoori paste"], ["1 tsp", "paprika"], ["1 tsp", "cumin"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["1", "lemon", "juice"], ["½ tsp", "salt"]],
    steps: [
      "Mix the yoghurt, tikka paste, spices, garlic, ginger, lemon juice and salt. Coat the chops and marinate for at least 1 hour.",
      "Shake off excess marinade and lay the chops in a single layer.",
      "Air fry at 200°C for 8–10 minutes, turning halfway: 57°C for medium-rare, 63°C for medium, 71°C for well done.",
      "Rest for 3 minutes and serve with lemon wedges and a crunchy onion salad."
    ] },

  // ───────────── FISH ─────────────
  { id: "indian-tandoori-salmon", name: "Tandoori Salmon", emoji: "🐟", cat: "fish", temp: 200, time: 10, prep: 5, serves: 2, turn: "none",
    tags: ["indian", "healthy", "high-protein", "low-carb", "quick"],
    ing: [["2", "salmon fillets"], ["3 tbsp", "greek yoghurt"], ["1 tbsp", "tikka paste", "or tandoori paste"], ["½ tsp", "paprika"], ["1 clove", "garlic", "crushed"], ["½", "lemon", "juice"], ["¼ tsp", "salt"], ["1 handful", "?fresh coriander"]],
    steps: [
      "Mix the yoghurt, tikka paste, paprika, garlic, lemon juice and salt. Coat the salmon (10 minutes' marinating is plenty).",
      "Place skin-side down on pierced baking paper in the basket (add the paper once the basket is in and the fish is on it – never loose while preheating).",
      "Air fry at 200°C for 8–10 minutes until charred at the edges and 63°C in the thickest part.",
      "Scatter with coriander and serve with rice or a cucumber salad."
    ] },
  { id: "indian-amritsari-fish", name: "Amritsari Fish Fry", emoji: "🐠", cat: "fish", temp: 200, time: 10, prep: 15, serves: 4, turn: "flip",
    tags: ["indian", "fakeaway", "high-protein"],
    ing: [["600g", "white fish fillets", "in finger-sized pieces"], ["80g", "gram flour"], ["1 tbsp", "cornflour"], ["1 tsp", "chilli powder"], ["½ tsp", "turmeric"], ["1 tsp", "cumin"], ["1 tsp", "garam masala"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["1", "lemon", "juice, plus wedges"], ["3 tbsp", "water"], ["½ tsp", "salt"], ["spray", "oil"]],
    steps: [
      "Mix the gram flour, cornflour, spices, garlic, ginger, lemon juice, salt and water into a thick paste. Coat the fish and leave for 10 minutes.",
      "Line the basket with pierced baking paper and lay the fish on it in a single layer, not touching. Spray generously with oil.",
      "Air fry at 200°C for 8–10 minutes, carefully turning and spraying again halfway, until crisp and 63°C inside.",
      "Sprinkle with a pinch of chaat-style salt and chilli and serve with lemon wedges and mint chutney."
    ] },
  { id: "indian-prawn-bhuna", name: "Prawn Bhuna", emoji: "🍤", cat: "fish", temp: 200, time: 6, prep: 10, serves: 4, turn: "shake",
    tags: ["indian", "fakeaway", "quick", "high-protein", "low-carb"],
    ing: [["400g", "prawns", "raw king prawns, peeled"], ["1 tsp", "chilli powder"], ["½ tsp", "turmeric"], ["2", "onion", "finely chopped"], ["1", "bell peppers", "diced"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tbsp", "curry powder", "medium"], ["4", "tomatoes", "chopped"], ["1 tbsp", "tomato puree"], ["2 tbsp", "oil"], ["½ tsp", "salt"], ["1 handful", "fresh coriander"]],
    steps: [
      "Fry the onions in 1 tbsp oil for 10 minutes until deep golden, add the pepper, garlic, ginger and curry powder for 2 minutes, then the tomatoes and puree. Cook down for 10 minutes until thick and clinging ('bhuna' means dry-fried).",
      "Meanwhile toss the prawns with the chilli, turmeric, salt and remaining oil.",
      "Air fry the prawns at 200°C for 5–6 minutes in a single layer, shaking halfway, until pink and 63°C inside.",
      "Fold the prawns into the thick sauce and finish with lots of coriander."
    ] },
  { id: "indian-tandoori-king-prawns", name: "Tandoori King Prawns", emoji: "🦐", cat: "fish", temp: 200, time: 6, prep: 10, serves: 2, turn: "flip",
    tags: ["indian", "healthy", "high-protein", "low-carb", "quick", "bbq"],
    ing: [["300g", "prawns", "raw king prawns, peeled with tails on"], ["3 tbsp", "greek yoghurt"], ["1 tbsp", "tikka paste", "or tandoori paste"], ["½ tsp", "paprika"], ["1 clove", "garlic", "crushed"], ["½", "lemon", "juice"], ["¼ tsp", "salt"], ["1", "?red onion", "in wedges"], ["1", "?bell peppers", "in chunks"]],
    steps: [
      "Mix the yoghurt, tikka paste, paprika, garlic, lemon juice and salt. Coat the prawns and marinate for 15 minutes.",
      "Thread onto skewers that fit your basket with the onion and pepper, or just spread out in a single layer.",
      "Air fry at 200°C for 5–6 minutes, turning halfway, until pink, charred and 63°C inside.",
      "Serve with lemon wedges, salad and naan."
    ] },
  { id: "indian-coconut-fish-curry", name: "Kerala-Style Coconut Fish Curry", emoji: "🥥", cat: "fish", temp: 200, time: 10, prep: 10, serves: 4, turn: "none",
    tags: ["indian", "healthy", "high-protein", "low-carb"],
    ing: [["600g", "white fish fillets", "thick chunks"], ["1 tsp", "turmeric"], ["1 tsp", "chilli powder"], ["1", "onion", "sliced"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["1 tsp", "mustard seeds"], ["1", "red chilli", "slit"], ["1 tsp", "curry powder"], ["200g", "cherry tomatoes", "halved"], ["400ml", "coconut milk"], ["1", "lime", "juice"], ["1 tbsp", "oil"], ["½ tsp", "salt"]],
    steps: [
      "Rub the fish with half the turmeric, the chilli powder and salt. Lay on pierced baking paper in the basket and air fry at 200°C for 8–10 minutes until just firm and 63°C inside.",
      "Meanwhile pop the mustard seeds in the oil, then fry the onion for 6 minutes. Add the garlic, ginger, chilli, curry powder and remaining turmeric for 1 minute.",
      "Add the tomatoes and coconut milk and simmer for 8 minutes.",
      "Gently slide in the fish, add the lime juice and serve with rice."
    ] },

  // ───────────── VEGGIE ─────────────
  { id: "indian-paneer-butter-masala", name: "Paneer Butter Masala", emoji: "🧀", cat: "veggie", temp: 200, time: 12, prep: 10, serves: 4, turn: "shake",
    tags: ["indian", "vegetarian", "fakeaway", "family", "trending"],
    ing: [["450g", "paneer", "in cubes"], ["1 tsp", "chilli powder"], ["1 tsp", "turmeric"], ["40g", "butter"], ["1", "onion", "finely chopped"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tsp", "garam masala"], ["1 tsp", "cumin"], ["400g", "passata"], ["1 tbsp", "honey", "or sugar"], ["100ml", "cream", "double"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["300g", "?rice"]],
    steps: [
      "Toss the paneer with the oil, chilli and turmeric. Air fry at 200°C for 10–12 minutes, shaking halfway, until golden on the edges.",
      "Melt the butter and soften the onion for 8 minutes, then add the garlic, ginger, curry powder and cumin for 1 minute.",
      "Add the passata, honey and salt and simmer for 10 minutes. Blend smooth if you like it restaurant-style.",
      "Stir in the cream and paneer, warm through for 2 minutes and serve with rice or naan."
    ] },
  { id: "indian-saag-paneer", name: "Saag Paneer", emoji: "🥬", cat: "veggie", temp: 200, time: 12, prep: 10, serves: 4, turn: "shake",
    tags: ["indian", "vegetarian", "healthy", "low-carb"],
    ing: [["450g", "paneer", "in cubes"], ["1 tsp", "turmeric"], ["300g", "spinach"], ["1", "onion", "finely chopped"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["1", "red chilli", "chopped"], ["1 tsp", "cumin"], ["2 tsp", "garam masala"], ["3 tbsp", "cream"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["1 knob", "?butter"]],
    steps: [
      "Toss the paneer with half the oil, the turmeric and a pinch of salt. Air fry at 200°C for 10–12 minutes, shaking halfway, until golden.",
      "Wilt the spinach with a splash of water, then blitz to a rough purée.",
      "Fry the onion in the remaining oil for 8 minutes, add the garlic, ginger, chilli, cumin and curry powder for 1 minute, then stir in the spinach and simmer for 5 minutes.",
      "Stir in the cream and crispy paneer and finish with a knob of butter."
    ] },
  { id: "indian-aloo-gobi", name: "Aloo Gobi", emoji: "🥔", cat: "veggie", temp: 200, time: 22, prep: 10, serves: 4, turn: "shake",
    tags: ["indian", "vegetarian", "vegan", "budget", "healthy"],
    ing: [["500g", "potatoes", "in 2cm cubes"], ["1", "cauliflower", "in small florets"], ["1 tsp", "turmeric"], ["1 tsp", "cumin"], ["1 tsp", "chilli powder"], ["2 tsp", "garam masala"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2", "tomatoes", "chopped"], ["2 tbsp", "oil"], ["½ tsp", "salt"], ["1 handful", "fresh coriander"], ["½", "?lemon", "juice"]],
    steps: [
      "Toss the potatoes and cauliflower with the oil, turmeric, cumin, chilli and salt.",
      "Air fry at 200°C for 15 minutes, shake, then cook for 5–7 minutes more until tender and crisp at the edges. Don't overcrowd – cook in batches if needed.",
      "Meanwhile soften the garlic, ginger and tomatoes in a pan with the curry powder for 5 minutes to a thick masala.",
      "Toss the crispy veg through the masala and finish with coriander and lemon."
    ] },
  { id: "indian-chana-masala", name: "Chana Masala with Crispy Chickpeas", emoji: "🫘", cat: "veggie", temp: 200, time: 15, prep: 10, serves: 4, turn: "shake",
    tags: ["indian", "vegetarian", "vegan", "budget", "healthy", "meal prep"],
    ing: [["2 x 400g tins", "chickpeas", "drained, 1 tin patted dry"], ["1 tsp", "paprika"], ["1", "onion", "finely chopped"], ["3 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["1", "red chilli", "chopped"], ["2 tbsp", "curry powder", "medium"], ["1 tsp", "cumin"], ["400g", "passata"], ["150ml", "water"], ["1", "lemon", "juice"], ["2 tbsp", "oil"], ["½ tsp", "salt"], ["1 handful", "fresh coriander"]],
    steps: [
      "Toss the dried tin of chickpeas with 1 tbsp oil, the paprika and a pinch of salt. Air fry at 200°C for 13–15 minutes, shaking halfway, until crunchy.",
      "Fry the onion in the remaining oil for 8 minutes, add the garlic, ginger, chilli, curry powder and cumin for 1 minute.",
      "Add the passata, water, the other tin of chickpeas and the salt. Simmer for 15 minutes, crushing a few chickpeas to thicken.",
      "Add the lemon juice and serve topped with the crispy chickpeas and coriander."
    ] },
  { id: "indian-tandoori-cauliflower", name: "Whole Tandoori Cauliflower", emoji: "🥦", cat: "veggie", temp: 180, time: 30, prep: 10, serves: 4, turn: "none",
    tags: ["indian", "vegetarian", "healthy", "low-carb", "trending"],
    ing: [["1", "cauliflower", "medium, leaves trimmed – check it fits your basket"], ["150g", "greek yoghurt"], ["2 tbsp", "tikka paste", "or tandoori paste"], ["1 tsp", "paprika"], ["1 tsp", "cumin"], ["2 cloves", "garlic", "crushed"], ["1", "lemon", "juice"], ["½ tsp", "salt"], ["1 handful", "?fresh coriander"], ["2 tbsp", "?pistachios", "chopped"]],
    steps: [
      "Simmer the whole cauliflower in salted water for 6 minutes, then drain well and steam-dry for 5 minutes.",
      "Mix the yoghurt, tikka paste, spices, garlic, lemon juice and salt and spread all over the cauliflower.",
      "Air fry stalk-side down at 180°C for 25–30 minutes until charred and a knife slides into the centre easily.",
      "Scatter with coriander and pistachios and cut into wedges at the table."
    ] },
  { id: "indian-bhindi-masala", name: "Crispy Bhindi Masala", emoji: "🌿", cat: "veggie", temp: 200, time: 12, prep: 10, serves: 4, turn: "shake",
    tags: ["indian", "vegetarian", "vegan", "healthy", "low-carb"],
    ing: [["400g", "okra", "washed, dried well, in 2cm pieces"], ["1 tbsp", "gram flour"], ["1 tsp", "chilli powder"], ["½ tsp", "turmeric"], ["1", "onion", "sliced"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "cumin"], ["2 tsp", "garam masala"], ["2", "tomatoes", "chopped"], ["2 tbsp", "oil"], ["½ tsp", "salt"], ["½", "lemon", "juice"]],
    steps: [
      "Toss the dry okra with 1 tbsp oil, the gram flour, chilli and turmeric (dry okra = crispy, not slimy).",
      "Air fry at 200°C for 10–12 minutes in a single layer, shaking halfway, until crisp.",
      "Meanwhile fry the onion in the remaining oil for 8 minutes, then add the garlic, cumin, curry powder and tomatoes for 5 minutes until jammy.",
      "Toss the okra through the masala at the last minute with the salt and lemon so it stays crunchy."
    ] },
  { id: "indian-vegetable-kofta-curry", name: "Vegetable Kofta Curry", emoji: "🧆", cat: "veggie", temp: 190, time: 14, prep: 25, serves: 4, turn: "shake",
    tags: ["indian", "vegetarian", "family", "fakeaway"],
    ing: [["300g", "potatoes", "boiled and mashed"], ["1", "carrots", "grated"], ["100g", "peas", "defrosted"], ["100g", "paneer", "grated"], ["60g", "gram flour"], ["1 tsp", "cumin"], ["1 tsp", "curry powder"], ["1", "red chilli", "chopped"], ["1", "onion", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tsp", "curry powder", "for the sauce, or garam masala"], ["400g", "passata"], ["100ml", "cream"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["spray", "oil"]],
    steps: [
      "Mix the mash, carrot, peas, paneer, gram flour, cumin, 1 tsp curry powder, chilli and salt. Roll into 16 walnut-sized balls.",
      "Spray with oil and air fry at 190°C for 12–14 minutes in a single layer, shaking gently halfway, until golden and firm.",
      "Fry the onion in the oil for 8 minutes, add the garlic, ginger and curry powder for 1 minute, then the passata for 10 minutes. Stir in the cream.",
      "Spoon the sauce into bowls and sit the koftas on top just before serving so they stay crisp."
    ] },

  // ───────────── SIDES ─────────────
  { id: "indian-bombay-potatoes", name: "Bombay Potatoes", emoji: "🥔", cat: "sides", temp: 200, time: 20, prep: 10, serves: 4, turn: "shake",
    tags: ["indian", "vegetarian", "vegan", "budget", "fakeaway", "trending"],
    ing: [["750g", "new potatoes", "halved, or potatoes in chunks"], ["1 tsp", "turmeric"], ["1 tsp", "cumin"], ["1 tsp", "mustard seeds"], ["1 tsp", "chilli powder"], ["1 tsp", "curry powder"], ["2 tbsp", "oil"], ["½ tsp", "salt"], ["2", "?tomatoes", "chopped"], ["1 handful", "fresh coriander"], ["½", "lemon", "juice"]],
    steps: [
      "Parboil the potatoes for 6 minutes, drain and steam-dry.",
      "Toss with the oil, spices and salt.",
      "Air fry at 200°C for 18–20 minutes, shaking halfway, until crisp and golden (add the tomatoes for the last 4 minutes if using).",
      "Finish with lemon juice and coriander."
    ] },
  { id: "indian-masala-chips", name: "Masala Chips", emoji: "🍟", cat: "sides", temp: 200, time: 20, prep: 10, serves: 4, turn: "shake",
    tags: ["indian", "vegetarian", "fakeaway", "kids", "budget"],
    ing: [["800g", "potatoes", "in chunky chips"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["1", "onion", "finely chopped"], ["1", "bell peppers", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["2 tsp", "curry powder"], ["1 tsp", "chilli powder"], ["4 tbsp", "tomato ketchup"], ["2 tbsp", "?sriracha", "or hot sauce"], ["1 tsp", "?honey"], ["1 handful", "fresh coriander"]],
    steps: [
      "Soak the chips in cold water for 15 minutes, drain and dry very well. Toss with the oil and salt.",
      "Air fry at 200°C for 18–20 minutes, shaking halfway, until crisp and golden.",
      "Meanwhile fry the onion, pepper and garlic in a little oil for 5 minutes, add the spices for 1 minute, then the ketchup, sriracha and honey to make a sticky masala.",
      "Toss the hot chips through the sauce and finish with coriander – eat straight away."
    ] },
  { id: "indian-peshwari-naan", name: "Peshwari-Style Naan", emoji: "🫓", cat: "sides", temp: 180, time: 5, prep: 5, serves: 2, turn: "none",
    tags: ["indian", "vegetarian", "fakeaway", "quick"],
    ing: [["2", "naan", "shop-bought plain"], ["30g", "desiccated coconut"], ["30g", "raisins"], ["20g", "ground almonds"], ["1 tbsp", "sugar"], ["30g", "butter", "melted"], ["1 tbsp", "?pistachios", "chopped"]],
    steps: [
      "Mix the coconut, raisins, ground almonds and sugar with half the melted butter.",
      "Brush the naans with a little butter, spread the filling over one half of each and fold over, pressing down. Brush the tops with the rest of the butter.",
      "Air fry one at a time at 180°C for 4–5 minutes until crisp and golden (lay a rack on top if it lifts).",
      "Sprinkle with pistachios and cut into wedges."
    ] },

  // ───────────── SNACKS ─────────────
  { id: "indian-aloo-tikki", name: "Aloo Tikki (Spiced Potato Cakes)", emoji: "🥔", cat: "snacks", temp: 200, time: 14, prep: 20, serves: 4, turn: "flip",
    tags: ["indian", "vegetarian", "budget", "lunchbox", "kids"],
    ing: [["600g", "potatoes", "boiled and mashed"], ["100g", "peas", "defrosted"], ["2", "spring onions", "chopped"], ["1", "?red chilli", "finely chopped"], ["1 tsp", "cumin"], ["1 tsp", "curry powder"], ["1 tbsp", "ginger", "grated"], ["1 handful", "fresh coriander", "chopped"], ["3 tbsp", "breadcrumbs"], ["½ tsp", "salt"], ["spray", "oil"], ["4 tbsp", "?greek yoghurt"], ["2 tbsp", "?mango chutney"]],
    steps: [
      "Mix the mash with the peas, spring onions, chilli, spices, ginger, coriander, breadcrumbs and salt. Shape into 12 patties.",
      "Spray both sides with oil and arrange in a single layer – don't overcrowd.",
      "Air fry at 200°C for 12–14 minutes, flipping halfway, until crisp and golden.",
      "Serve with yoghurt and mango chutney drizzled over (chaat-style)."
    ] },
  { id: "indian-chilli-paneer", name: "Chilli Paneer Bites", emoji: "🌶️", cat: "snacks", temp: 200, time: 12, prep: 10, serves: 4, turn: "shake",
    tags: ["crispy & sticky", "indian", "vegetarian", "fakeaway", "spicy"],
    ing: [["450g", "paneer", "in cubes"], ["2 tbsp", "cornflour"], ["½ tsp", "chilli powder"], ["1", "bell peppers", "in chunks"], ["1", "onion", "in petals"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "ginger", "grated"], ["2 tbsp", "soy sauce"], ["2 tbsp", "sweet chilli sauce"], ["1 tbsp", "tomato ketchup"], ["1 tsp", "rice vinegar"], ["2", "spring onions", "sliced"], ["spray", "oil"]],
    steps: [
      "Toss the paneer in the cornflour and chilli powder, then spray well with oil.",
      "Air fry at 200°C for 10–12 minutes with the pepper and onion, shaking halfway, until the paneer is crisp and the veg charred.",
      "Meanwhile warm the garlic and ginger in a little oil for 1 minute, then add the soy, sweet chilli, ketchup and vinegar and bubble for 1 minute.",
      "Toss everything in the glaze and scatter with spring onions. Serve as a starter or with rice."
    ] },

  // ───────────── DESSERTS ─────────────
  { id: "indian-gulab-jamun-bites", name: "Gulab Jamun-Style Doughnut Bites", emoji: "🍩", cat: "desserts", temp: 170, time: 10, prep: 20, serves: 4, turn: "shake",
    tags: ["indian", "vegetarian", "fakeaway", "christmas"],
    ing: [["150g", "self-raising flour"], ["150g", "greek yoghurt"], ["1 tsp", "cardamom", "seeds, ground"], ["150g", "sugar"], ["150ml", "water"], ["½", "lemon", "juice"], ["20g", "butter", "melted"], ["2 tbsp", "?pistachios", "chopped"], ["spray", "oil"]],
    steps: [
      "Make the syrup: simmer the sugar, water, lemon juice and half the cardamom for 5 minutes until slightly syrupy. Keep warm.",
      "Mix the flour, yoghurt and remaining cardamom into a soft dough and roll into 20 small balls.",
      "Spray with oil and air fry at 170°C for 8–10 minutes, shaking gently halfway, until deep golden. Line with pierced baking paper if your basket has big holes.",
      "Brush with melted butter, then soak in the warm syrup for 10 minutes. Serve topped with pistachios."
    ] },
  { id: "indian-mango-cardamom-filo", name: "Mango & Cardamom Filo Parcels", emoji: "🥭", cat: "desserts", temp: 180, time: 10, prep: 15, serves: 4, turn: "none",
    tags: ["indian", "vegetarian", "light"],
    ing: [["4 sheets", "filo pastry"], ["1", "mango", "ripe, diced"], ["½ tsp", "cardamom", "seeds, ground"], ["1 tbsp", "brown sugar"], ["1 tbsp", "desiccated coconut"], ["30g", "butter", "melted"], ["1 tbsp", "icing sugar"], ["4 tbsp", "?greek yoghurt"]],
    steps: [
      "Mix the mango with the cardamom, brown sugar and coconut.",
      "Brush a filo sheet with butter, fold in half, spoon a quarter of the mango near one end and fold into a triangle samosa-style. Brush the outside with butter. Repeat.",
      "Air fry at 180°C for 8–10 minutes until crisp and golden.",
      "Dust with icing sugar and serve warm with yoghurt."
    ] }
);
