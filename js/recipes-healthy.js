'use strict';
/* Healthy recipes – lean proteins, lots of veg, spray oil and meal-prep friendly portions. Same format as recipes.js. */
RECIPES.push(
  // ───────────── CHICKEN & TURKEY ─────────────
  { id: "fit-chicken-quinoa-bowls", name: "High-Protein Chicken & Quinoa Bowls", emoji: "🥗", cat: "chicken", temp: 200, time: 18, prep: 15, serves: 4, turn: "flip",
    tags: ["healthy", "high-protein", "meal prep", "lunchbox"],
    ing: [["4", "chicken breast", "about 150g each"], ["200g", "quinoa", "dry weight – roughly 50g per portion"], ["1 tsp", "paprika"], ["1 tsp", "garlic granules"], ["1", "lemon"], ["150g", "edamame", "frozen, defrosted"], ["1", "cucumber", "diced"], ["200g", "cherry tomatoes", "halved"], ["4 tbsp", "?greek yoghurt", "0% fat, to serve"], ["spray", "oil"]],
    steps: [
      "Rinse the quinoa and simmer in twice its volume of water for 15 minutes on the hob until the water's absorbed. Fluff up and squeeze over half the lemon.",
      "Spray the chicken lightly with oil and rub with paprika, garlic granules, salt and pepper.",
      "Cook in a single layer at 200°C for 18 minutes, flipping at halfway.",
      "Check the thickest part has reached 75°C, then rest for 5 minutes and slice.",
      "Split the quinoa, edamame, cucumber and tomatoes between 4 bowls or tubs, top with the chicken and a spoon of yoghurt. Keeps 3 days in the fridge."
    ] },
  { id: "fit-chicken-roast-veg-couscous", name: "Chicken Breast with Roasted Veg & Couscous", emoji: "🍗", cat: "chicken", temp: 200, time: 20, prep: 15, serves: 2, turn: "shake",
    tags: ["healthy", "high-protein", "quick"],
    ing: [["2", "chicken breast", "cut into large chunks"], ["1", "courgette", "chunked"], ["1", "bell peppers", "chunked"], ["1", "red onion", "wedged"], ["1 tsp", "mixed herbs"], ["1 tsp", "paprika"], ["120g", "couscous", "dry weight – about 60g per person"], ["1", "stock cube", "made up with 180ml boiling water"], ["1", "?lemon"], ["spray", "oil"]],
    steps: [
      "Toss the chicken and veg with herbs, paprika, salt, pepper and a few sprays of oil.",
      "Cook at 200°C for 18–20 minutes, shaking at halfway, until the veg is charred at the edges.",
      "Meanwhile pour the hot stock over the couscous, cover for 5 minutes, then fork through with a squeeze of lemon.",
      "Check the chicken has reached 75°C in the middle of the biggest piece, then pile on top of the couscous."
    ] },
  { id: "fit-lemon-chicken-green-beans", name: "Lemon Chicken & Green Beans", emoji: "🍋", cat: "chicken", temp: 200, time: 18, prep: 10, serves: 2, turn: "flip",
    tags: ["healthy", "high-protein", "low-carb", "quick"],
    ing: [["2", "chicken breast", "butterflied or bashed to an even thickness"], ["1", "lemon", "zest and juice"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "oregano"], ["250g", "green beans", "trimmed"], ["1 tbsp", "?parmesan", "finely grated"], ["spray", "oil"]],
    steps: [
      "Mix the lemon zest, half the juice, garlic, oregano, salt and pepper. Coat the chicken and leave for 10 minutes if you have time.",
      "Cook the chicken at 200°C for 10 minutes, then flip and add the green beans, sprayed with oil and seasoned, around it.",
      "Cook for 8 minutes more, giving the beans a shake once.",
      "Check the chicken has reached 75°C. Squeeze over the rest of the lemon and scatter with parmesan if using."
    ] },
  { id: "fit-cajun-turkey-sweet-potato", name: "Cajun Turkey Steaks with Sweet Potato", emoji: "🦃", cat: "chicken", temp: 200, time: 28, prep: 10, serves: 2, turn: "shake",
    tags: ["healthy", "high-protein"],
    ing: [["2", "turkey breast", "steaks, about 150g each"], ["2 tsp", "cajun seasoning"], ["2", "sweet potatoes", "medium, cut into 2cm cubes"], ["1", "red onion", "wedged"], ["100g", "spinach", "?to serve"], ["2 tbsp", "?greek yoghurt"], ["spray", "oil"]],
    steps: [
      "Toss the sweet potato and onion with a few sprays of oil, half the cajun seasoning and a pinch of salt. Cook at 200°C for 15 minutes, shaking at halfway.",
      "Spray the turkey steaks and rub with the rest of the cajun seasoning.",
      "Push the potatoes to the sides, lay the steaks on top in a single layer and cook for 10–13 minutes, turning the steaks at halfway.",
      "Check the turkey has reached 75°C – thin steaks cook fast, so don't overdo them. Serve on a handful of spinach with a spoon of yoghurt."
    ] },
  { id: "fit-chilli-lime-chicken-thighs", name: "Chilli Lime Skinless Chicken Thighs", emoji: "🌶️", cat: "chicken", temp: 190, time: 20, prep: 10, serves: 4, turn: "flip",
    tags: ["healthy", "high-protein", "low-carb", "meal prep"],
    ing: [["8", "chicken thighs", "boneless and skinless, fat trimmed – 2 per portion"], ["2", "lime", "zest and juice"], ["1", "red chilli", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "cumin"], ["1 tsp", "honey"], ["1 handful", "?fresh coriander"], ["spray", "oil"]],
    steps: [
      "Mix the lime zest and juice, chilli, garlic, cumin, honey and a pinch of salt. Coat the thighs and marinate for at least 15 minutes (or overnight).",
      "Lay the thighs flat in the basket, single layer, don't overcrowd. Spray lightly with oil.",
      "Cook at 190°C for 20 minutes, flipping at halfway.",
      "Check they've reached 75°C. Scatter with coriander and serve with salad or veg, or cool and box up for the week."
    ] },
  { id: "fit-cauli-rice-chicken-bowls", name: "Cauliflower Rice & Chicken Bowls", emoji: "🥦", cat: "chicken", temp: 200, time: 18, prep: 15, serves: 2, turn: "shake",
    tags: ["healthy", "high-protein", "low-carb"],
    ing: [["2", "chicken breast", "diced"], ["2 tbsp", "soy sauce", "reduced-salt if you have it"], ["1 tsp", "ginger", "grated"], ["1 clove", "garlic", "crushed"], ["1", "cauliflower", "small, blitzed into rice"], ["100g", "frozen veg", "peas or mixed"], ["2", "spring onions", "sliced"], ["1 tsp", "?sesame seeds"], ["spray", "oil"]],
    steps: [
      "Toss the chicken with 1 tbsp soy sauce, ginger and garlic.",
      "Cook the chicken at 200°C for 8 minutes. Add the cauliflower rice and frozen veg, sprayed with oil, and cook for 10 minutes more, shaking every few minutes so it toasts evenly.",
      "Check the chicken has reached 75°C.",
      "Stir through the remaining soy sauce and spring onions, and top with sesame seeds. A good-sized bowl each with plenty of veg."
    ] },
  { id: "fit-chicken-tikka-bowls", name: "Lighter Chicken Tikka Bowls", emoji: "🍛", cat: "chicken", temp: 200, time: 18, prep: 15, serves: 4, turn: "shake",
    tags: ["healthy", "high-protein", "fakeaway", "indian", "meal prep"],
    ing: [["500g", "chicken breast", "diced"], ["150g", "greek yoghurt", "0% fat"], ["2 tbsp", "tikka paste"], ["1", "bell peppers", "chunked"], ["1", "red onion", "chunked"], ["200g", "rice", "basmati, dry weight – about 50g per portion"], ["1", "cucumber", "diced, for raita"], ["1 tsp", "?mint sauce", "for raita"], ["1", "lemon"]],
    steps: [
      "Mix half the yoghurt with the tikka paste and a squeeze of lemon. Coat the chicken and marinate for 20 minutes or longer.",
      "Cook the rice on the hob according to the packet (usually 10–12 minutes).",
      "Cook the chicken, pepper and onion at 200°C for 16–18 minutes, single layer, shaking at halfway.",
      "Check the chicken has reached 75°C.",
      "Mix the rest of the yoghurt with cucumber and mint sauce for a quick raita. Split the rice, tikka and raita between 4 bowls."
    ] },
  { id: "fit-chicken-shawarma-meal-prep", name: "Chicken Shawarma Meal-Prep Bowls", emoji: "🥙", cat: "chicken", temp: 190, time: 20, prep: 15, serves: 4, turn: "flip",
    tags: ["healthy", "high-protein", "meal prep", "trending", "lunchbox"],
    ing: [["600g", "chicken thighs", "boneless and skinless, fat trimmed"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["½ tsp", "turmeric"], ["½ tsp", "cinnamon"], ["2 cloves", "garlic", "crushed"], ["1", "lemon"], ["200g", "couscous", "dry weight – about 50g per portion"], ["1", "cucumber", "diced"], ["200g", "cherry tomatoes", "halved"], ["1", "red onion", "thinly sliced"], ["4 tbsp", "tzatziki"]],
    steps: [
      "Mix the spices, garlic, juice of half the lemon and a pinch of salt. Coat the thighs and leave for at least 15 minutes.",
      "Cook the thighs flat in a single layer at 190°C for 20 minutes, flipping at halfway.",
      "Check they've reached 75°C, rest for 5 minutes, then slice thinly.",
      "Make the couscous up with an equal volume of boiling water, cover for 5 minutes, then fork through with the rest of the lemon.",
      "Divide into 4 tubs with the salad and a tablespoon of tzatziki each (keep the tzatziki in a separate pot if prepping ahead). Keeps 3 days in the fridge."
    ] },
  { id: "fit-turkey-stuffed-courgettes", name: "Turkey Mince Stuffed Courgettes", emoji: "🥒", cat: "chicken", temp: 180, time: 18, prep: 15, serves: 2, turn: "none",
    tags: ["healthy", "high-protein", "low-carb"],
    ing: [["2", "courgette", "large, halved lengthways and scooped out"], ["250g", "turkey mince", "5% fat or less"], ["1", "onion", "finely chopped"], ["1 clove", "garlic", "crushed"], ["200ml", "passata"], ["1 tsp", "oregano"], ["30g", "mozzarella", "light, grated"], ["spray", "oil"]],
    steps: [
      "Fry the onion, garlic and chopped courgette flesh in a non-stick pan with a few sprays of oil for 3 minutes. Add the turkey and brown for 5 minutes, then stir in the passata and oregano and simmer for 5 minutes.",
      "Spray the courgette shells, season, and pack the turkey filling in. Sit them in the basket (or a tin that fits) in a single layer.",
      "Cook at 180°C for 15 minutes, add the mozzarella and cook 3 minutes more until bubbling.",
      "Check the filling is piping hot and has reached 75°C. Two halves make a filling portion with salad."
    ] },
  { id: "fit-harissa-chicken-chickpea", name: "Harissa Chicken & Chickpea Traybake", emoji: "🌶️", cat: "chicken", temp: 200, time: 20, prep: 10, serves: 2, turn: "shake",
    tags: ["healthy", "high-protein", "meal prep"],
    ing: [["2", "chicken breast", "cut into chunks"], ["1 tbsp", "harissa"], ["400g", "chickpeas", "1 tin, drained and patted dry"], ["1", "red onion", "wedged"], ["1", "bell peppers", "chunked"], ["100g", "spinach"], ["2 tbsp", "greek yoghurt", "to serve"], ["1", "?lemon"], ["spray", "oil"]],
    steps: [
      "Toss the chicken in the harissa with a pinch of salt. Toss the chickpeas, onion and pepper with a few sprays of oil.",
      "Cook everything at 200°C for 18–20 minutes, shaking at halfway, until the chickpeas are crisp-edged.",
      "Check the chicken has reached 75°C.",
      "Tip into a bowl with the spinach so it wilts in the heat, then add a squeeze of lemon and a spoon of yoghurt."
    ] },

  // ───────────── BEEF ─────────────
  { id: "fit-steak-courgette-skewers", name: "Lean Rump Steak & Courgette Skewers", emoji: "🍢", cat: "beef", temp: 200, time: 9, prep: 15, serves: 2, turn: "flip",
    tags: ["healthy", "high-protein", "low-carb", "bbq"],
    ing: [["300g", "beef steak", "lean rump, fat trimmed, cut into 3cm cubes"], ["1", "courgette", "thick slices"], ["150g", "mushrooms", "small, whole"], ["1", "red onion", "chunked"], ["1 tbsp", "balsamic vinegar"], ["1 tsp", "rosemary", "chopped"], ["1 clove", "garlic", "crushed"], ["spray", "oil"]],
    steps: [
      "Mix the balsamic, rosemary, garlic, salt and pepper. Toss the steak in it and marinate for 15 minutes. Soak wooden skewers in water for 20 minutes so they don't scorch.",
      "Thread the steak and veg onto the skewers (make sure they fit your basket) and spray with oil.",
      "Cook in a single layer at 200°C for 8–10 minutes, turning at halfway.",
      "Check the steak with a thermometer: 57°C medium-rare, 63°C medium, 71°C well done. Rest for 3 minutes before serving."
    ] },

  // ───────────── FISH ─────────────
  { id: "fit-salmon-quinoa-bowl", name: "Salmon & Quinoa Power Bowl", emoji: "🐟", cat: "fish", temp: 180, time: 12, prep: 15, serves: 2, turn: "none",
    tags: ["healthy", "high-protein", "trending"],
    ing: [["2", "salmon fillets", "about 120g each"], ["1 tbsp", "soy sauce"], ["1 tsp", "honey"], ["100g", "quinoa", "dry weight – about 50g per person"], ["100g", "edamame", "frozen, defrosted"], ["1", "avocado", "half each, sliced"], ["½", "cucumber", "sliced"], ["2", "spring onions", "sliced"], ["1 tsp", "?sesame seeds"]],
    steps: [
      "Simmer the rinsed quinoa in twice its volume of water for 15 minutes until absorbed.",
      "Mix the soy sauce and honey and brush over the salmon. Sit the fillets skin-side down on pierced baking paper in the basket (add the paper once the basket's loaded, never while preheating).",
      "Cook at 180°C for 10–12 minutes – no need to turn.",
      "Check the salmon has reached 63°C and flakes easily.",
      "Build the bowls with quinoa, edamame, avocado, cucumber and spring onion, then top with the salmon and sesame seeds."
    ] },
  { id: "fit-spiced-cod-chickpeas", name: "Spiced Cod with Chickpeas & Spinach", emoji: "🐟", cat: "fish", temp: 180, time: 18, prep: 10, serves: 2, turn: "none",
    tags: ["healthy", "high-protein"],
    ing: [["2", "white fish fillets", "cod, about 140g each"], ["400g", "chickpeas", "1 tin, drained"], ["200g", "cherry tomatoes"], ["2 cloves", "garlic", "sliced"], ["1 tsp", "paprika"], ["½ tsp", "cumin"], ["100g", "spinach"], ["1", "lemon"], ["spray", "oil"]],
    steps: [
      "In a small tin or ovenproof dish that fits your basket, toss the chickpeas, tomatoes and garlic with half the spices, a few sprays of oil and a pinch of salt. Cook at 180°C for 8 minutes.",
      "Stir in the spinach, then sit the cod on top. Sprinkle with the rest of the spices and spray lightly with oil.",
      "Cook for 10 minutes more until the cod is opaque and flaky.",
      "Check the thickest part of the cod has reached 63°C. Squeeze over the lemon and serve straight from the dish."
    ] },
  { id: "fit-prawn-veg-traybake", name: "Prawn & Veg Stir-Fry-Style Traybake", emoji: "🍤", cat: "fish", temp: 200, time: 14, prep: 10, serves: 2, turn: "shake",
    tags: ["healthy", "high-protein", "low-carb", "quick"],
    ing: [["250g", "prawns", "raw king prawns, defrosted and patted dry"], ["1", "bell peppers", "sliced"], ["150g", "mangetout"], ["100g", "baby corn", "halved"], ["1", "pak choi", "quartered"], ["2 tbsp", "soy sauce"], ["1 tsp", "ginger", "grated"], ["1 clove", "garlic", "crushed"], ["1 tsp", "sesame oil"], ["1", "?red chilli", "sliced"]],
    steps: [
      "Mix the soy sauce, ginger, garlic and sesame oil.",
      "Toss the pepper, mangetout and baby corn with half the sauce and cook at 200°C for 6 minutes, shaking once.",
      "Add the prawns, pak choi and the rest of the sauce, toss and cook for 6–8 minutes more, shaking at halfway, until the prawns are pink all the way through.",
      "Check the prawns have reached 63°C. Scatter with chilli. Serve as it is, or with a small portion of noodles or rice."
    ] },
  { id: "fit-tuna-nicoise", name: "Tuna Steak Niçoise-Style Salad", emoji: "🥗", cat: "fish", temp: 200, time: 23, prep: 15, serves: 2, turn: "shake",
    tags: ["healthy", "high-protein", "light"],
    ing: [["2", "tuna steaks", "about 120g each"], ["300g", "new potatoes", "halved"], ["150g", "green beans", "trimmed"], ["2", "eggs"], ["100g", "cherry tomatoes", "halved"], ["40g", "olives", "black"], ["1", "lettuce", "little gem, leaves separated"], ["1 tsp", "mustard", "Dijon, for the dressing"], ["1 tbsp", "?balsamic vinegar"], ["spray", "oil"]],
    steps: [
      "Spray the potatoes with oil, season and cook at 200°C for 15 minutes, shaking at halfway. Meanwhile boil the eggs on the hob for 8 minutes, then cool in cold water and halve.",
      "Add the green beans to the basket for the last 5 minutes of the potatoes, then tip both out.",
      "Spray and season the tuna steaks and cook at 200°C for 6–8 minutes, turning at halfway.",
      "Check the tuna has reached 63°C in the centre.",
      "Whisk the mustard, balsamic, 1 tbsp water and a pinch of salt. Arrange the lettuce, potatoes, beans, tomatoes, olives and eggs, top with the tuna and drizzle over the dressing."
    ] },
  { id: "fit-lighter-fish-chips", name: "Lighter Fish & Chips", emoji: "🐟", cat: "fish", temp: 200, time: 28, prep: 15, serves: 2, turn: "shake",
    tags: ["healthy", "high-protein", "family"],
    ing: [["2", "white fish fillets", "cod or haddock, about 140g each"], ["400g", "potatoes", "skin on, cut into chunky chips – about 200g each"], ["1", "eggs", "white only, lightly beaten"], ["40g", "breadcrumbs", "panko or dried"], ["1", "lemon", "zest, plus wedges to serve"], ["1 tsp", "?parsley", "chopped"], ["200g", "peas", "frozen, to serve"], ["spray", "oil"]],
    steps: [
      "Boil the chips for 5 minutes, drain and steam-dry for 5 minutes. Spray with oil, season and cook at 200°C for 18 minutes, shaking a couple of times.",
      "Meanwhile dip the fish in the egg white, then press just the top into the crumbs mixed with lemon zest and parsley – one light crumb layer, no flour or batter. Spray with oil.",
      "Push the chips to the sides, sit the fish crumb-side up on pierced baking paper and cook for 10 minutes more.",
      "Check the fish has reached 63°C and flakes easily. Serve with the boiled peas and lemon wedges."
    ] },
  { id: "fit-ginger-soy-cod-parcels", name: "Ginger & Soy Cod Parcels with Pak Choi", emoji: "🐟", cat: "fish", temp: 180, time: 14, prep: 10, serves: 2, turn: "none",
    tags: ["healthy", "high-protein", "low-carb", "light"],
    ing: [["2", "white fish fillets", "cod, about 140g each"], ["2", "pak choi", "halved"], ["100g", "mangetout"], ["1 tbsp", "soy sauce"], ["1 tsp", "ginger", "grated"], ["1 clove", "garlic", "sliced"], ["1", "lime"], ["2", "spring onions", "sliced"], ["1", "?red chilli", "sliced"]],
    steps: [
      "Lay out 2 large sheets of foil. Put the pak choi and mangetout in the middle of each and sit the cod on top.",
      "Mix the soy sauce, ginger, garlic and lime juice, spoon over the fish and scatter with spring onion and chilli.",
      "Fold the foil into sealed parcels, crimping the edges tightly so nothing can lift into the element. Cook at 180°C for 12–14 minutes.",
      "Open carefully (hot steam) and check the cod has reached 63°C and flakes easily. Serve as it is, or with a small portion of rice."
    ] },

  // ───────────── VEGGIE ─────────────
  { id: "fit-cottage-cheese-peppers", name: "Cottage Cheese & Spinach Stuffed Peppers", emoji: "🫑", cat: "veggie", temp: 180, time: 18, prep: 10, serves: 2, turn: "none",
    tags: ["healthy", "high-protein", "low-carb", "vegetarian"],
    ing: [["2", "bell peppers", "large, halved and deseeded"], ["300g", "cottage cheese"], ["1", "eggs", "beaten"], ["80g", "spinach", "chopped"], ["60g", "sun-dried tomatoes", "chopped"], ["1 tsp", "oregano"], ["15g", "parmesan", "grated"], ["spray", "oil"]],
    steps: [
      "Spray the pepper halves with oil and cook cut-side up at 180°C for 6 minutes to soften.",
      "Mix the cottage cheese, egg, spinach, sun-dried tomatoes, oregano, salt and pepper.",
      "Spoon the filling into the peppers, sprinkle with parmesan and cook for 12 minutes more until set and golden.",
      "Two halves per person make a high-protein lunch – serve with a big salad."
    ] },
  { id: "fit-courgette-lentil-lasagne", name: "Courgette & Lentil Lasagne Stacks", emoji: "🥒", cat: "veggie", temp: 180, time: 20, prep: 20, serves: 2, turn: "none",
    tags: ["healthy", "low-carb", "vegetarian", "meal prep"],
    ing: [["2", "courgette", "sliced lengthways into thin ribbons"], ["400g", "lentils", "1 tin green lentils, drained"], ["1", "onion", "finely chopped"], ["1", "carrots", "grated"], ["2 cloves", "garlic", "crushed"], ["300ml", "passata"], ["1 tsp", "mixed herbs"], ["150g", "ricotta"], ["30g", "mozzarella", "light, grated"], ["spray", "oil"]],
    steps: [
      "Soften the onion, carrot and garlic in a non-stick pan with a few sprays of oil for 5 minutes. Add the lentils, passata and herbs and simmer for 10 minutes until thick.",
      "In a small tin or ovenproof dish that fits your basket, layer courgette ribbons, lentil sauce and spoonfuls of ricotta, repeating 2–3 times and finishing with sauce.",
      "Scatter over the mozzarella. Cover tightly with foil, tucked well under the rim so it can't lift into the element.",
      "Cook at 180°C for 15 minutes, remove the foil and cook 5 minutes more until bubbling and golden. Rest for 5 minutes so it slices neatly."
    ] },
  { id: "fit-halloumi-veg-bowls", name: "Light Halloumi & Roasted Veg Bowls", emoji: "🧀", cat: "veggie", temp: 200, time: 20, prep: 10, serves: 2, turn: "shake",
    tags: ["healthy", "low-carb", "vegetarian", "light"],
    ing: [["125g", "halloumi", "light/reduced-fat, cut into 8 slices – a little goes a long way"], ["1", "courgette", "chunked"], ["1", "bell peppers", "chunked"], ["½", "cauliflower", "small florets"], ["1", "red onion", "wedged"], ["1 tsp", "zaatar"], ["100g", "spinach", "or mixed leaves"], ["1", "lemon"], ["spray", "oil"]],
    steps: [
      "Toss the veg with a few sprays of oil, the za'atar, salt and pepper. Cook at 200°C for 14 minutes, shaking at halfway.",
      "Lay the halloumi slices on top and cook for 6 minutes more, until golden on top.",
      "Pile the leaves into 2 bowls, add the roasted veg and halloumi and finish with a good squeeze of lemon."
    ] },
  { id: "fit-lentil-stuffed-sweet-potatoes", name: "Lentil & Veg Stuffed Sweet Potatoes", emoji: "🍠", cat: "veggie", temp: 190, time: 40, prep: 10, serves: 2, turn: "flip",
    tags: ["healthy", "vegetarian", "vegan", "meal prep"],
    ing: [["2", "sweet potatoes", "medium, about 250g each"], ["400g", "lentils", "1 tin, drained"], ["1", "onion", "chopped"], ["1", "bell peppers", "diced"], ["200ml", "passata"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["1 handful", "?fresh coriander"], ["2 tbsp", "?greek yoghurt", "skip for vegan"], ["spray", "oil"]],
    steps: [
      "Prick the sweet potatoes all over, spray with oil and rub with a little salt. Cook at 190°C for 35–40 minutes, turning at halfway, until a knife slides in easily.",
      "Meanwhile soften the onion and pepper in a non-stick pan with a few sprays of oil for 5 minutes. Add the spices, lentils and passata and simmer for 10 minutes.",
      "Split the potatoes open, fluff the insides and pile in the lentil filling.",
      "Top with coriander and yoghurt if using. The lentil filling keeps 4 days in the fridge for quick lunches."
    ] },
  { id: "fit-chickpea-spinach-feta-bites", name: "Chickpea, Spinach & Feta Bites", emoji: "🧆", cat: "veggie", temp: 190, time: 12, prep: 15, serves: 3, turn: "flip",
    tags: ["healthy", "vegetarian", "lunchbox", "meal prep"],
    ing: [["400g", "chickpeas", "1 tin, drained and patted dry"], ["80g", "spinach", "wilted, squeezed dry and chopped"], ["60g", "feta", "crumbled"], ["1", "eggs"], ["3 tbsp", "gram flour"], ["1 tsp", "cumin"], ["1 clove", "garlic", "crushed"], ["1", "lemon", "zest"], ["spray", "oil"]],
    steps: [
      "Roughly mash the chickpeas (leave some texture), then mix in the spinach, feta, egg, gram flour, cumin, garlic, lemon zest and pepper.",
      "Shape into 12 small patties, about 4 per portion, and chill for 10 minutes so they hold together.",
      "Spray both sides with oil and cook in a single layer at 190°C for 12 minutes, carefully flipping at halfway.",
      "Serve warm with salad and a yoghurt dip, or cold in a lunchbox."
    ] },
  { id: "fit-tofu-broccoli-bowl", name: "Tofu & Broccoli Power Bowl", emoji: "🥦", cat: "veggie", temp: 200, time: 16, prep: 15, serves: 2, turn: "shake",
    tags: ["healthy", "high-protein", "vegetarian", "vegan"],
    ing: [["280g", "tofu", "extra-firm, pressed and cubed"], ["1 tbsp", "cornflour"], ["2 tbsp", "soy sauce"], ["1", "broccoli", "small florets"], ["100g", "edamame", "frozen, defrosted"], ["100g", "quinoa", "dry weight – about 50g per person"], ["1 tbsp", "peanut butter", "for the dressing"], ["1 tsp", "rice vinegar"], ["1 tsp", "?sriracha"], ["spray", "oil"]],
    steps: [
      "Simmer the rinsed quinoa in twice its volume of water for 15 minutes.",
      "Toss the tofu in 1 tbsp soy sauce, then the cornflour, and spray with oil. Cook at 200°C for 8 minutes, shaking once.",
      "Add the broccoli, sprayed and seasoned, and cook for 8 minutes more, shaking at halfway, until the tofu is crisp and the broccoli is charred at the tips.",
      "Whisk the peanut butter, rest of the soy sauce, rice vinegar, sriracha and 1–2 tbsp warm water. Build the bowls with quinoa, edamame, tofu and broccoli and drizzle over."
    ] },
  { id: "fit-roast-veg-meal-prep", name: "Roasted Veg & Chickpea Meal-Prep Boxes", emoji: "🍱", cat: "veggie", temp: 200, time: 22, prep: 15, serves: 4, turn: "shake",
    tags: ["healthy", "vegetarian", "vegan", "meal prep", "budget"],
    ing: [["1", "butternut squash", "small, peeled and cubed"], ["1", "courgette", "chunked"], ["2", "bell peppers", "chunked"], ["1", "red onion", "wedged"], ["400g", "chickpeas", "1 tin, drained and patted dry"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["200g", "couscous", "dry weight – about 50g per box"], ["4 tbsp", "hummus"], ["spray", "oil"]],
    steps: [
      "Toss the squash and chickpeas with half the spices and a few sprays of oil. Cook at 200°C for 10 minutes.",
      "Add the courgette, peppers and onion with the rest of the spices and a little more oil spray. Cook for 12 minutes more, shaking at halfway. Do it in 2 batches if your basket is small – don't overcrowd or the veg will steam.",
      "Make the couscous up with an equal volume of boiling water, cover for 5 minutes and fork through.",
      "Divide between 4 boxes with a tablespoon of hummus each. Cool quickly and keep in the fridge for up to 4 days – eat cold or reheat until piping hot."
    ] },
  { id: "fit-turmeric-cauli-steaks-lentils", name: "Turmeric Cauliflower Steaks with Lentils", emoji: "🥦", cat: "veggie", temp: 190, time: 18, prep: 10, serves: 2, turn: "flip",
    tags: ["healthy", "vegetarian", "vegan", "low-carb"],
    ing: [["1", "cauliflower", "large, cut into 2 thick steaks through the stem"], ["1 tsp", "turmeric"], ["1 tsp", "cumin"], ["½ tsp", "chilli flakes"], ["400g", "lentils", "1 tin, drained"], ["100g", "cherry tomatoes", "halved"], ["1 handful", "parsley", "chopped"], ["1", "lemon"], ["1 tbsp", "?tahini"], ["spray", "oil"]],
    steps: [
      "Spray the cauliflower steaks with oil on both sides and rub with turmeric, cumin, chilli flakes and salt.",
      "Cook at 190°C for 16–18 minutes, carefully turning with a fish slice at halfway, until tender in the middle and charred at the edges.",
      "Meanwhile warm the lentils in a pan with the tomatoes, half the lemon juice and the parsley.",
      "Serve the steaks on the lentils with a drizzle of tahini loosened with lemon juice and water. Use the leftover florets in tomorrow's lunch."
    ] },

  // ───────────── SIDES ─────────────
  { id: "fit-lighter-chips", name: "Lighter Spray-Oil Chips", emoji: "🍟", cat: "sides", temp: 200, time: 22, prep: 15, serves: 2, turn: "shake",
    tags: ["healthy", "vegetarian", "vegan", "budget"],
    ing: [["500g", "potatoes", "Maris Piper or King Edward, cut into 1.5cm chips"], ["1 tsp", "?paprika"], ["spray", "oil"], ["½ tsp", "salt"]],
    steps: [
      "Boil the chips in salted water for 5 minutes, drain and leave to steam-dry for 5 minutes – this gives fluffy middles with very little oil.",
      "Spray all over with oil (about 5–6 sprays) and season with salt and paprika.",
      "Cook at 200°C for 20–22 minutes in a single layer, don't overcrowd, shaking every 7 minutes until golden and crisp."
    ] },
  { id: "fit-lighter-sweet-potato-wedges", name: "Lighter Sweet Potato Wedges", emoji: "🍠", cat: "sides", temp: 200, time: 18, prep: 5, serves: 2, turn: "shake",
    tags: ["healthy", "vegetarian", "vegan", "quick"],
    ing: [["2", "sweet potatoes", "medium, skin on, cut into wedges"], ["1 tsp", "cornflour", "helps them crisp"], ["1 tsp", "paprika"], ["½ tsp", "garlic granules"], ["½ tsp", "?cumin"], ["spray", "oil"]],
    steps: [
      "Toss the wedges with the cornflour, spices and a pinch of salt, then spray with oil until lightly coated.",
      "Cook in a single layer at 200°C for 16–18 minutes, shaking at halfway. Don't overcrowd – sweet potato goes soft if it steams.",
      "Leave in the basket for a minute after cooking; they crisp up more as they cool slightly."
    ] },

  // ───────────── BREAKFAST ─────────────
  { id: "fit-egg-white-veg-muffins", name: "Egg White & Veg Muffins", emoji: "🥚", cat: "breakfast", temp: 160, time: 15, prep: 10, serves: 3, turn: "none",
    tags: ["healthy", "high-protein", "low-carb", "vegetarian", "meal prep", "breakfast"],
    ing: [["8", "eggs", "whites only (or 2 whole eggs + 5 whites)"], ["1", "bell peppers", "finely diced"], ["50g", "spinach", "chopped"], ["2", "spring onions", "sliced"], ["6", "cherry tomatoes", "quartered"], ["20g", "feta", "crumbled"], ["spray", "oil"]],
    steps: [
      "Spray 6 silicone muffin cases with oil and divide the veg and feta between them.",
      "Whisk the egg whites with salt and pepper and pour over the veg, filling each case about three-quarters full.",
      "Cook at 160°C for 13–15 minutes until set in the middle – they'll puff up and settle as they cool.",
      "Two muffins per portion. Keep in the fridge for 3 days and reheat until piping hot."
    ] },
  { id: "fit-banana-yoghurt-protein-muffins", name: "Banana & Greek Yoghurt Protein Muffins", emoji: "🍌", cat: "breakfast", temp: 160, time: 15, prep: 10, serves: 8, turn: "none",
    tags: ["healthy", "vegetarian", "breakfast", "lunchbox", "trending"],
    ing: [["2", "bananas", "very ripe, mashed"], ["150g", "greek yoghurt", "0% fat"], ["2", "eggs"], ["120g", "oats", "blitzed into flour"], ["1 tsp", "baking powder"], ["1 tsp", "cinnamon"], ["1 tbsp", "honey"], ["50g", "?blueberries"]],
    steps: [
      "Mix the banana, yoghurt, eggs and honey, then stir in the oat flour, baking powder, cinnamon and blueberries.",
      "Divide between 8 silicone muffin cases (about two-thirds full).",
      "Cook at 160°C for 13–15 minutes, in batches if needed, until risen and a skewer comes out clean.",
      "Cool on a rack. One or two make a filling breakfast; they keep 3 days in an airtight tub or freeze well."
    ] },

  // ───────────── DESSERT ─────────────
  { id: "fit-apple-oat-crumble-cups", name: "Baked Apple Oat Crumble Cups", emoji: "🍎", cat: "desserts", temp: 170, time: 15, prep: 10, serves: 4, turn: "none",
    tags: ["healthy", "vegetarian", "light"],
    ing: [["3", "apples", "cored and diced"], ["1 tsp", "cinnamon"], ["1 tbsp", "water"], ["60g", "oats"], ["1 tbsp", "honey"], ["15g", "butter", "melted"], ["20g", "?mixed nuts", "chopped"], ["4 tbsp", "greek yoghurt", "to serve"]],
    steps: [
      "Toss the apple with half the cinnamon and the water, then divide between 4 ramekins.",
      "Mix the oats, honey, melted butter, nuts and the rest of the cinnamon and sprinkle over the apple.",
      "Cook at 170°C for 15 minutes until the tops are golden and the apple is soft. Cover loosely with foil, tucked in, if the tops brown too fast.",
      "Leave to cool for a few minutes (the fruit is very hot) and serve each with a spoon of yoghurt."
    ] }
);
