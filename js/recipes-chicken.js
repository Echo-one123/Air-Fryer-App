'use strict';

/* More chicken: world flavours & fakeaways – same format as recipes.js. */
RECIPES.push(
  // ───────────── INDIAN & INDO-CHINESE ─────────────
  {
    id: "bone-in-chicken-tikka-thighs", name: "Chicken Tikka Thighs", emoji: "🍗", cat: "chicken",
    temp: 190, time: 24, prep: 10, serves: 4, turn: "flip",
    tags: ["indian", "fakeaway", "marinade", "gluten-free"],
    ing: [["8", "chicken thighs", "bone-in, skin removed"], ["150g", "greek yoghurt"], ["3 tbsp", "tikka paste"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "ginger", "grated"], ["1", "lemon", "juiced"], ["½ tsp", "salt"], ["1 tbsp", "oil"], ["1 tbsp", "?fresh coriander", "chopped"]],
    steps: [
      "Slash each thigh 2–3 times to the bone. Mix the yoghurt, tikka paste, garlic, ginger, lemon juice and salt, then coat the chicken (marinate for at least 1 hour, ideally overnight).",
      "Shake off excess marinade, brush with oil and lay in a single layer in the basket.",
      "Cook at 190°C for 24 minutes, turning at halfway, until charred at the edges.",
      "Check the thickest part next to the bone has reached 75°C. Scatter with coriander and serve with lemon wedges."
    ]
  },
  {
    id: "chicken-jalfrezi-bites", name: "Chicken Jalfrezi Bites", emoji: "🌶️", cat: "chicken",
    temp: 200, time: 14, prep: 10, serves: 3, turn: "shake",
    tags: ["indian", "fakeaway", "spicy", "high protein"],
    ing: [["500g", "chicken breast", "cut into 3cm chunks"], ["1", "bell peppers", "chunks"], ["1", "onion", "cut into petals"], ["2", "red chilli", "sliced"], ["2 tbsp", "tikka paste"], ["1 tbsp", "tomato puree"], ["1 tsp", "garam masala"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["1 tbsp", "?fresh coriander"]],
    steps: [
      "Toss the chicken, pepper, onion and chillies with the tikka paste, tomato puree, garam masala, oil and salt.",
      "Spread out in the basket and cook at 200°C for 14 minutes, shaking at halfway.",
      "Check the largest chunk of chicken has reached 75°C in the middle.",
      "Scatter with coriander and serve with rice or naan."
    ]
  },
  {
    id: "chicken-65", name: "Chicken 65", emoji: "🔥", cat: "chicken",
    temp: 200, time: 14, prep: 15, serves: 3, turn: "shake",
    tags: ["indian", "spicy", "street food", "trending"],
    ing: [["500g", "chicken thighs", "boneless, bite-sized pieces"], ["3 tbsp", "greek yoghurt"], ["1 tbsp", "chilli powder", "Kashmiri if you can"], ["1 tsp", "ginger", "grated"], ["2 cloves", "garlic", "crushed"], ["½ tsp", "cumin"], ["½ tsp", "salt"], ["2 tbsp", "cornflour"], ["1 tbsp", "plain flour"], ["spray", "oil"], ["1", "?lemon", "wedges"]],
    steps: [
      "Mix the yoghurt, chilli powder, ginger, garlic, cumin and salt. Coat the chicken and leave for 30 minutes.",
      "Stir in the cornflour and flour until each piece is tacky and coated. Spray well with oil.",
      "Cook at 200°C for 14 minutes, shaking and spraying again at halfway, until deep red and crisp.",
      "Check the biggest piece has reached 75°C. Serve with lemon wedges and sliced onion."
    ]
  },
  {
    id: "indo-chinese-chilli-chicken", name: "Chilli Chicken (Indo-Chinese)", emoji: "🌶️", cat: "chicken",
    temp: 200, time: 14, prep: 15, serves: 3, turn: "shake",
    tags: ["crispy & sticky", "indo-chinese", "fakeaway", "spicy"],
    ing: [["500g", "chicken thighs", "boneless, chunks"], ["1", "eggs", "beaten"], ["3 tbsp", "cornflour"], ["spray", "oil"], ["1", "bell peppers", "green, chunks"], ["1", "onion", "chunks"], ["2", "red chilli", "slit"], ["2 cloves", "garlic", "chopped"], ["2 tbsp", "soy sauce"], ["2 tbsp", "tomato ketchup"], ["1 tbsp", "sriracha"], ["1 tsp", "rice vinegar"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Toss the chicken in the egg, then in the cornflour. Spray with oil.",
      "Cook at 200°C for 14 minutes, shaking at halfway. Check the chicken has reached 75°C in the middle.",
      "Meanwhile stir-fry the pepper, onion, chillies and garlic in a little oil for 3 minutes. Add the soy, ketchup, sriracha, vinegar and 3 tbsp water and bubble until glossy.",
      "Toss the crispy chicken through the sauce and scatter with spring onions."
    ]
  },

  // ───────────── EAST & SOUTH-EAST ASIAN ─────────────
  {
    id: "malaysian-honey-chicken", name: "Malaysian Honey Chicken", emoji: "🍯", cat: "chicken",
    temp: 200, time: 14, prep: 10, serves: 3, turn: "shake",
    tags: ["crispy & sticky", "fakeaway", "sticky", "family"],
    ing: [["500g", "chicken thighs", "boneless, chunks"], ["1", "eggs", "beaten"], ["4 tbsp", "cornflour"], ["spray", "oil"], ["3 tbsp", "honey"], ["2 tbsp", "soy sauce"], ["1 tbsp", "tomato ketchup"], ["1 tsp", "rice vinegar"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Dip the chicken in the egg, then toss in the cornflour. Spray with oil.",
      "Cook at 200°C for 14 minutes, shaking at halfway, until crisp. Check the largest piece has reached 75°C.",
      "Meanwhile simmer the honey, soy, ketchup, vinegar and garlic in a pan for 2 minutes until syrupy.",
      "Toss the chicken in the sauce and sprinkle with sesame seeds. Serve with rice."
    ]
  },
  {
    id: "thai-basil-chicken-lettuce-cups", name: "Thai Basil Chicken Lettuce Cups", emoji: "🥬", cat: "chicken",
    temp: 200, time: 12, prep: 10, serves: 3, turn: "shake",
    tags: ["thai", "low carb", "high protein", "quick"],
    ing: [["500g", "turkey mince", "or minced chicken"], ["3 cloves", "garlic", "crushed"], ["1", "red chilli", "finely chopped"], ["2 tbsp", "soy sauce"], ["1 tbsp", "honey"], ["1", "lime", "juiced"], ["1 small bunch", "basil", "Thai basil ideally"], ["1", "lettuce", "Little Gem leaves"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Mix the mince with the garlic, chilli, soy and honey. Spread in a thin layer in a lined basket or a small tin.",
      "Cook at 200°C for 12 minutes, breaking it up with a fork at halfway.",
      "Check the mince has reached 75°C and no pink remains. Stir through the lime juice and herbs.",
      "Spoon into lettuce leaves and top with spring onions."
    ]
  },
  {
    id: "thai-green-chicken-skewers", name: "Thai Green Curry Chicken Skewers", emoji: "🍢", cat: "chicken",
    temp: 200, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["thai", "skewers", "bbq", "gluten-free"],
    ing: [["600g", "chicken thighs", "boneless, chunks"], ["4 tbsp", "coconut milk"], ["2 tbsp", "thai curry paste", "green"], ["1 small bunch", "?fresh coriander"], ["1", "red chilli", "use green if you have it"], ["3 cloves", "garlic"], ["1 thumb", "ginger"], ["1", "lime", "zest and juice"], ["1 tsp", "brown sugar"], ["½ tsp", "salt"]],
    steps: [
      "Blitz the coriander, chilli, garlic, ginger, lime, sugar, salt and coconut milk into a green paste. Coat the chicken and marinate for 30 minutes.",
      "Thread onto short skewers (soak wooden ones first) that fit your basket.",
      "Cook at 200°C for 14 minutes, turning at halfway.",
      "Check the chicken has reached 75°C in the thickest piece. Serve with lime wedges and rice."
    ]
  },
  {
    id: "vietnamese-lemongrass-chicken", name: "Vietnamese Lemongrass-Style Chicken", emoji: "🍋", cat: "chicken",
    temp: 200, time: 18, prep: 10, serves: 4, turn: "flip",
    tags: ["vietnamese", "rice bowl", "dairy-free"],
    ing: [["6", "chicken thighs", "boneless, skin on"], ["2 stalks", "lemongrass", "finely chopped (or 2 tsp paste)"], ["1", "lime", "zest and juice"], ["3 cloves", "garlic", "crushed"], ["1 thumb", "ginger", "grated"], ["2 tbsp", "soy sauce", "or fish sauce"], ["1 tbsp", "brown sugar"], ["1 tbsp", "oil"], ["1", "?red chilli", "sliced"], ["1 tbsp", "?fresh coriander"]],
    steps: [
      "Mix the lime zest and juice, garlic, ginger, soy, sugar and oil. Coat the chicken and marinate for 30 minutes (or use 2 sticks finely chopped lemongrass if you have them).",
      "Lay skin-side down in the basket and cook at 200°C for 18 minutes, turning skin-side up at halfway.",
      "Check the thickest part has reached 75°C. Rest for 3 minutes, then slice.",
      "Serve over rice or noodles with chilli, coriander and cucumber."
    ]
  },
  {
    id: "chinese-soy-ginger-wings", name: "Chinese Soy & Ginger Wings", emoji: "🍗", cat: "chicken",
    temp: 200, time: 24, prep: 5, serves: 3, turn: "shake",
    tags: ["wings", "fakeaway", "sticky", "party"],
    ing: [["1kg", "chicken wings", "jointed"], ["1 tbsp", "cornflour"], ["1 tsp", "five spice"], ["½ tsp", "salt"], ["3 tbsp", "soy sauce"], ["2 tbsp", "honey"], ["1 thumb", "ginger", "grated"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "sesame oil"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Pat the wings dry and toss with cornflour, five spice and salt.",
      "Cook at 200°C for 24 minutes, shaking at halfway, until crisp.",
      "Meanwhile simmer the soy, honey, ginger, garlic and sesame oil for 2 minutes until sticky.",
      "Check the wings have reached 75°C, then toss in the glaze and top with spring onions."
    ]
  },
  {
    id: "kung-pao-chicken", name: "Kung Pao Chicken", emoji: "🥜", cat: "chicken",
    temp: 200, time: 12, prep: 10, serves: 3, turn: "shake",
    tags: ["crispy & sticky", "chinese", "fakeaway", "spicy", "quick"],
    ing: [["500g", "chicken thighs", "boneless, small chunks"], ["2 tbsp", "cornflour"], ["spray", "oil"], ["1", "bell peppers", "chunks"], ["3 tbsp", "soy sauce"], ["1 tbsp", "rice vinegar"], ["1 tbsp", "brown sugar"], ["1 tsp", "chilli flakes"], ["2 cloves", "garlic", "sliced"], ["1 thumb", "ginger", "sliced"], ["50g", "mixed nuts", "unsalted peanuts ideally"], ["3", "spring onions", "chopped"]],
    steps: [
      "Toss the chicken in 1 tbsp soy and the cornflour. Spray with oil and add the pepper to the basket.",
      "Cook at 200°C for 12 minutes, shaking at halfway. Check the chicken has reached 75°C.",
      "Meanwhile fry the garlic, ginger and chilli flakes in a little oil for 1 minute. Add the remaining soy, vinegar, sugar and 2 tbsp water, plus ½ tsp cornflour mixed with water, and bubble until glossy.",
      "Toss in the chicken, peppers, nuts and spring onions. Serve with rice."
    ]
  },
  {
    id: "sesame-chicken", name: "Sesame Chicken", emoji: "🥢", cat: "chicken",
    temp: 200, time: 14, prep: 10, serves: 3, turn: "shake",
    tags: ["crispy & sticky", "chinese", "fakeaway", "sticky", "family"],
    ing: [["500g", "chicken breast", "chunks"], ["1", "eggs", "beaten"], ["4 tbsp", "cornflour"], ["spray", "oil"], ["3 tbsp", "soy sauce"], ["2 tbsp", "honey"], ["1 tbsp", "hoisin sauce"], ["1 tsp", "sesame oil"], ["1 clove", "garlic", "crushed"], ["2 tbsp", "sesame seeds", "toasted"]],
    steps: [
      "Dip the chicken in the egg, toss in the cornflour and spray with oil.",
      "Cook at 200°C for 14 minutes, shaking at halfway. Check the biggest piece has reached 75°C.",
      "Meanwhile simmer the soy, honey, hoisin, sesame oil, garlic and 2 tbsp water until thick.",
      "Toss the chicken in the sauce, then shower with sesame seeds."
    ]
  },
  {
    id: "chicken-gyoza-meatballs", name: "Chicken Gyoza-Style Meatballs", emoji: "🥟", cat: "chicken",
    temp: 190, time: 12, prep: 15, serves: 3, turn: "shake",
    tags: ["asian", "high protein", "meal prep"],
    ing: [["500g", "turkey mince", "or minced chicken"], ["100g", "cabbage", "very finely shredded"], ["3", "spring onions", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["1 thumb", "ginger", "grated"], ["1 tbsp", "soy sauce"], ["1 tsp", "sesame oil"], ["3 tbsp", "breadcrumbs", "panko ideally"], ["spray", "oil"], ["2 tbsp", "?soy sauce", "plus rice vinegar for dipping"], ["1 tsp", "?rice vinegar"], ["1 tsp", "?chilli oil"]],
    steps: [
      "Squeeze the shredded cabbage dry, then mix with the mince, spring onions, garlic, ginger, soy, sesame oil and breadcrumbs.",
      "Roll into about 16 walnut-sized balls and spray with oil.",
      "Cook at 190°C for 12 minutes, shaking gently at halfway, until golden.",
      "Check the centre of a meatball has reached 75°C. Serve with soy, rice vinegar and chilli oil for dipping."
    ]
  },
  {
    id: "japanese-karaage", name: "Japanese Karaage", emoji: "🍱", cat: "chicken",
    temp: 200, time: 14, prep: 15, serves: 3, turn: "shake",
    tags: ["japanese", "crispy", "street food", "trending"],
    ing: [["500g", "chicken thighs", "boneless, skin on, bite-sized"], ["2 tbsp", "soy sauce"], ["1 thumb", "ginger", "grated"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "sugar"], ["5 tbsp", "cornflour", "or potato starch"], ["spray", "oil"], ["3 tbsp", "?mayonnaise", "Kewpie if you have it"], ["1", "?lemon", "wedges"]],
    steps: [
      "Marinate the chicken in the soy, ginger, garlic and sugar for 20–30 minutes.",
      "Shake off excess, toss in the cornflour until dry and powdery, and leave 5 minutes so the coating hydrates. Spray all over with oil.",
      "Cook at 200°C for 14 minutes, shaking and spraying any floury spots at halfway.",
      "Check the largest piece has reached 75°C. Serve with lemon and mayo."
    ]
  },
  {
    id: "chicken-adobo-thighs", name: "Chicken Adobo Thighs", emoji: "🧄", cat: "chicken",
    temp: 200, time: 22, prep: 5, serves: 4, turn: "flip",
    tags: ["filipino", "dairy-free", "budget"],
    ing: [["8", "chicken thighs", "bone-in, skin on"], ["4 tbsp", "soy sauce"], ["4 tbsp", "rice vinegar", "or cider vinegar"], ["6 cloves", "garlic", "crushed"], ["1 tbsp", "brown sugar"], ["1 tsp", "black pepper", "coarsely ground"], ["2", "?spring onions", "sliced"]],
    steps: [
      "Mix the soy, vinegar, garlic, sugar and pepper. Marinate the thighs for at least 30 minutes.",
      "Lift out (keep the marinade) and cook skin-side down at 200°C for 22 minutes, turning skin-side up at halfway.",
      "Meanwhile simmer the marinade in a small pan for 5 minutes until slightly reduced.",
      "Check the thickest part near the bone has reached 75°C. Spoon the sauce over and serve with rice."
    ]
  },

  // ───────────── AFRICAN, LATIN & CARIBBEAN ─────────────
  {
    id: "piri-piri-spatchcock-chicken", name: "Piri-Piri Spatchcock Chicken", emoji: "🔥", cat: "chicken",
    temp: 180, time: 40, prep: 15, serves: 4, turn: "flip",
    tags: ["fakeaway", "spicy", "family", "trending"],
    ing: [["1.4kg", "whole chicken", "spatchcocked – check it fits flat in your basket"], ["4 tbsp", "peri peri sauce"], ["1", "lemon", "juiced"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "paprika"], ["1 tsp", "salt"], ["1 tbsp", "oil"]],
    steps: [
      "Spatchcock the chicken: cut out the backbone with scissors and press flat. Slash the legs.",
      "Mix the peri peri sauce, lemon, garlic, paprika, salt and oil. Rub all over and marinate for 1 hour or overnight.",
      "Cook skin-side down at 180°C for 20 minutes, then turn skin-side up and cook for 20 minutes more, basting with extra sauce.",
      "Check the thickest part of the thigh has reached 75°C and the juices run clear. Rest for 10 minutes before cutting."
    ]
  },
  {
    id: "garlic-lime-chicken-skewers", name: "Garlic Lime Chicken Skewers", emoji: "🍢", cat: "chicken",
    temp: 200, time: 14, prep: 10, serves: 4, turn: "flip",
    tags: ["brazilian", "skewers", "bbq", "gluten-free"],
    ing: [["600g", "chicken thighs", "boneless, chunks"], ["4 cloves", "garlic", "crushed"], ["2", "lime", "zest and juice"], ["1 tsp", "paprika"], ["½ tsp", "cumin"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["1 tbsp", "?parsley", "chopped"]],
    steps: [
      "Mix the garlic, lime, paprika, cumin, oil and salt. Coat the chicken and marinate for 30 minutes.",
      "Thread onto short skewers that fit your basket.",
      "Cook at 200°C for 14 minutes, turning at halfway.",
      "Check the chicken has reached 75°C. Finish with parsley and an extra squeeze of lime."
    ]
  },
  {
    id: "chicken-tinga-tacos", name: "Mexican Chicken Tinga Tacos", emoji: "🌮", cat: "chicken",
    temp: 200, time: 18, prep: 10, serves: 4, turn: "flip",
    tags: ["mexican", "tacos", "family"],
    ing: [["4", "chicken thighs", "boneless"], ["1 tsp", "paprika", "smoked"], ["1 tbsp", "oil"], ["1", "onion", "sliced"], ["2 cloves", "garlic", "crushed"], ["200ml", "passata"], ["1 tbsp", "chipotle paste"], ["½ tsp", "oregano"], ["8", "tortilla wraps", "small"], ["1", "?avocado", "sliced"], ["2 tbsp", "?sour cream"], ["1 tbsp", "?fresh coriander"]],
    steps: [
      "Rub the chicken with smoked paprika, oil and salt. Cook at 200°C for 18 minutes, turning at halfway.",
      "Check the chicken has reached 75°C, then shred with two forks.",
      "Meanwhile soften the onion and garlic in a pan for 5 minutes, add the passata, hot sauce and oregano and simmer for 5 minutes. Stir in the chicken.",
      "Warm the tortillas in the air fryer for 1 minute and fill with tinga, avocado, sour cream and coriander."
    ]
  },
  {
    id: "chipotle-chicken-burrito-bowl", name: "Chipotle-Style Chicken Burrito Bowl", emoji: "🥙", cat: "chicken",
    temp: 200, time: 18, prep: 10, serves: 4, turn: "flip",
    tags: ["mexican", "meal prep", "high protein", "trending"],
    ing: [["6", "chicken thighs", "boneless"], ["2 tbsp", "chipotle paste"], ["1 tsp", "paprika", "smoked"], ["1 tsp", "cumin"], ["½ tsp", "oregano"], ["1", "lime", "juiced"], ["1 tbsp", "oil"], ["250g", "rice", "cooked"], ["400g", "black beans", "drained"], ["150g", "sweetcorn"], ["4 tbsp", "salsa"], ["1", "?avocado"], ["4 tbsp", "?sour cream"], ["1 tbsp", "?fresh coriander"]],
    steps: [
      "Mix the hot sauce, paprika, cumin, oregano, half the lime juice, oil and a pinch of salt. Coat the chicken and marinate for 20 minutes.",
      "Cook at 200°C for 18 minutes, turning at halfway, until charred.",
      "Check the thickest piece has reached 75°C, rest for 3 minutes, then chop.",
      "Stir the remaining lime and coriander through the rice. Build bowls with rice, beans, sweetcorn, chicken, salsa, avocado and sour cream."
    ]
  },
  {
    id: "caribbean-brown-stew-drumsticks", name: "Caribbean Brown Stew-Style Drumsticks", emoji: "🍗", cat: "chicken",
    temp: 190, time: 26, prep: 15, serves: 4, turn: "flip",
    tags: ["caribbean", "family", "dairy-free"],
    ing: [["8", "chicken drumsticks", "skin removed, slashed"], ["1 tbsp", "jerk seasoning", "mild all-purpose seasoning works too"], ["1 tbsp", "brown sugar"], ["2 tbsp", "worcestershire sauce", "or browning sauce"], ["1 tbsp", "soy sauce"], ["3 cloves", "garlic", "crushed"], ["1 tsp", "thyme"], ["1", "onion", "sliced"], ["1", "bell peppers", "sliced"], ["2 tbsp", "tomato ketchup"], ["1", "?red chilli", "Scotch bonnet if brave"]],
    steps: [
      "Rub the drumsticks with the seasoning, sugar, worcestershire, soy, garlic and thyme. Marinate for at least 1 hour.",
      "Cook at 190°C for 26 minutes, turning at halfway, until dark and sticky.",
      "Meanwhile soften the onion, pepper and chilli in a pan for 5 minutes. Add any leftover marinade, the ketchup and 150ml water and simmer for 8 minutes into a gravy.",
      "Check the drumsticks have reached 75°C near the bone, then toss in the gravy. Serve with rice and peas."
    ]
  },

  // ───────────── MEDITERRANEAN & MIDDLE EAST ─────────────
  {
    id: "greek-lemon-chicken-potatoes", name: "Greek Lemon Chicken & Potatoes", emoji: "🍋", cat: "chicken",
    temp: 190, time: 28, prep: 10, serves: 3, turn: "shake",
    tags: ["greek", "one-basket", "gluten-free", "family"],
    ing: [["6", "chicken thighs", "boneless, skin on"], ["600g", "potatoes", "2cm chunks"], ["2", "lemon", "zest and juice"], ["3 cloves", "garlic", "crushed"], ["2 tsp", "oregano"], ["2 tbsp", "oil"], ["1 tsp", "salt"], ["50g", "?feta", "crumbled"]],
    steps: [
      "Toss the potatoes with 1 tbsp oil and half the salt. Cook at 190°C for 10 minutes.",
      "Meanwhile mix the lemon, garlic, oregano, remaining oil and salt and coat the chicken.",
      "Shake the potatoes, sit the chicken on top skin-side up and cook for 18 minutes more, shaking the potatoes around at halfway.",
      "Check the chicken has reached 75°C in the thickest part. Pour any lemony juices over and crumble on feta."
    ]
  },
  {
    id: "moroccan-harissa-chicken-thighs", name: "Moroccan Harissa Chicken Thighs", emoji: "🌶️", cat: "chicken",
    temp: 200, time: 18, prep: 5, serves: 4, turn: "flip",
    tags: ["moroccan", "spicy", "quick", "gluten-free"],
    ing: [["6", "chicken thighs", "boneless, skin on"], ["2 tbsp", "harissa"], ["1 tbsp", "honey"], ["1 tsp", "cumin"], ["½ tsp", "cinnamon"], ["1", "lemon", "zest and juice"], ["½ tsp", "salt"], ["4 tbsp", "?greek yoghurt"], ["1 tbsp", "?fresh coriander"]],
    steps: [
      "Mix the harissa, honey, cumin, cinnamon, lemon and salt. Coat the chicken.",
      "Cook skin-side down at 200°C for 18 minutes, turning skin-side up at halfway.",
      "Check the thickest part has reached 75°C. Rest for 3 minutes.",
      "Serve with yoghurt, coriander and couscous or flatbreads."
    ]
  },
  {
    id: "lebanese-chicken-taouk", name: "Lebanese Chicken Taouk", emoji: "🧆", cat: "chicken",
    temp: 200, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["lebanese", "skewers", "high protein"],
    ing: [["600g", "chicken breast", "3cm chunks"], ["100g", "greek yoghurt"], ["1", "lemon", "juiced"], ["4 cloves", "garlic", "crushed"], ["1 tbsp", "tomato puree"], ["1 tsp", "paprika"], ["½ tsp", "cinnamon", "a pinch of allspice too if you have it"], ["½ tsp", "salt"], ["1 tbsp", "oil"], ["4", "?pitta bread"], ["4 tbsp", "?hummus"]],
    steps: [
      "Mix the yoghurt, lemon, garlic, tomato puree, spices, salt and oil. Marinate the chicken for at least 1 hour.",
      "Thread onto short skewers that fit your basket.",
      "Cook at 200°C for 14 minutes, turning at halfway.",
      "Check the chicken has reached 75°C. Serve in warm pittas with hummus, pickles and salad."
    ]
  },
  {
    id: "turkish-tavuk-sis", name: "Turkish Chicken Kebab (Tavuk Şiş)", emoji: "🍢", cat: "chicken",
    temp: 200, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["turkish", "skewers", "bbq"],
    ing: [["600g", "chicken thighs", "boneless, chunks"], ["100g", "greek yoghurt"], ["1 tbsp", "tomato puree", "or Turkish pepper paste"], ["1 tsp", "chilli flakes", "pul biber ideally"], ["1 tsp", "paprika"], ["1 tsp", "oregano"], ["2 cloves", "garlic", "crushed"], ["1", "lemon", "juiced"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["1", "?red onion", "thinly sliced, to serve"], ["1 tbsp", "?parsley"]],
    steps: [
      "Mix everything except the chicken, onion and parsley. Coat the chicken and marinate for at least 1 hour.",
      "Thread onto short skewers that fit your basket.",
      "Cook at 200°C for 14 minutes, turning at halfway, until charred at the edges.",
      "Check the chicken has reached 75°C. Serve with red onion and parsley, rice or flatbreads."
    ]
  },
  {
    id: "chicken-saltimbocca", name: "Italian Chicken Saltimbocca", emoji: "🇮🇹", cat: "chicken",
    temp: 190, time: 14, prep: 10, serves: 2, turn: "flip",
    tags: ["italian", "low carb", "dinner party"],
    ing: [["2", "chicken breast", "butterflied and flattened"], ["4 slices", "prosciutto"], ["4 leaves", "sage", "or 1 tsp dried"], ["1 tbsp", "oil"], ["15g", "butter"], ["½", "lemon", "juiced"], ["2 tbsp", "?parmesan", "grated"]],
    steps: [
      "Season the flattened chicken, lay sage on top and wrap each piece in 2 slices of ham. Brush with oil.",
      "Cook at 190°C for 14 minutes, turning carefully at halfway, until the ham is crisp.",
      "Check the chicken has reached 75°C in the thickest part.",
      "Melt the butter with the lemon juice, spoon over and finish with parmesan."
    ]
  },
  {
    id: "chicken-chorizo-skewers", name: "Spanish Chicken & Chorizo Skewers", emoji: "🍢", cat: "chicken",
    temp: 200, time: 14, prep: 15, serves: 4, turn: "flip",
    tags: ["spanish", "skewers", "tapas", "gluten-free"],
    ing: [["500g", "chicken breast", "3cm chunks"], ["150g", "chorizo", "cooking chorizo, thick slices"], ["1", "bell peppers", "chunks"], ["1", "red onion", "wedges"], ["1 tsp", "paprika", "smoked"], ["2 cloves", "garlic", "crushed"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["1 tbsp", "?parsley"]],
    steps: [
      "Toss the chicken with paprika, garlic, oil and salt.",
      "Thread the chicken, chorizo, pepper and onion alternately onto short skewers that fit your basket.",
      "Cook at 200°C for 14 minutes, turning at halfway.",
      "Check the chicken has reached 75°C. Drizzle with the paprika oil from the drawer and scatter with parsley."
    ]
  }
);
