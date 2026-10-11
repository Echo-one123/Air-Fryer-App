'use strict';
/* Reheating & leftovers – crisp up takeaways and leftovers instead of making them soggy, plus leftover makeovers. Same format as recipes.js. */
RECIPES.push(
  { id: "reheat-pizza-slices", name: "Reheat Pizza Slices", emoji: "🍕", cat: "reheat", temp: 180, time: 4, prep: 1, serves: 2, turn: "none",
    tags: ["reheat", "leftovers", "budget", "quick", "fakeaway", "trending"],
    ing: [["4", "frozen pizza", "leftover takeaway or homemade slices, from the fridge"]],
    steps: [
      "Leftover pizza must have been cooled quickly and kept covered in the fridge – eat within 2 days. Take it out of the box (never reheat in plastic containers or cardboard).",
      "Lay the slices in the basket in a single layer, don't overcrowd. No preheat needed.",
      "Cook at 180°C for 3–4 minutes until the base is crisp and the cheese is bubbling again. Thick or deep-pan slices may need 5 minutes.",
      "Check it's piping hot (75°C in the centre) before eating. Reheat only once – don't put it back in the fridge."
    ] },
  { id: "reheat-chips", name: "Reheat Leftover Chips", emoji: "🍟", cat: "reheat", temp: 200, time: 5, prep: 1, serves: 2, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "quick", "fakeaway"],
    ing: [["300g", "potatoes", "leftover cooked chips or fries"], ["spray", "oil"], ["pinch", "salt"]],
    steps: [
      "Use chips that were cooled quickly and kept in the fridge for no more than 2 days. Tip them out of any plastic tub or paper wrapping.",
      "Spread in a single layer, don't overcrowd, and give a light spray of oil.",
      "Cook at 200°C for 4–5 minutes, shaking at halfway, until crisp and sizzling.",
      "Check they're piping hot (75°C) all the way through, salt and eat straight away. Reheat only once."
    ] },
  { id: "reheat-roast-potatoes", name: "Reheat Roast Potatoes", emoji: "🥔", cat: "reheat", temp: 200, time: 8, prep: 1, serves: 2, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "sunday roast", "christmas"],
    ing: [["8", "potatoes", "leftover roast potatoes"], ["1 tsp", "oil"], ["pinch", "salt"], ["½ tsp", "?rosemary"]],
    steps: [
      "Roast potatoes should have been cooled quickly and kept in the fridge – use within 2 days. Take them out of any plastic container.",
      "Toss with the oil (and rosemary) and spread in a single layer – halve any really big ones so the middles heat through.",
      "Cook at 200°C for 7–8 minutes, shaking at halfway, until the edges are crunchy again.",
      "Check they're piping hot (75°C in the centre). Season and serve. Reheat only once."
    ] },
  { id: "reheat-fried-chicken", name: "Reheat Fried Chicken (KFC-Style)", emoji: "🍗", cat: "reheat", temp: 180, time: 12, prep: 10, serves: 2, turn: "flip",
    tags: ["reheat", "leftovers", "budget", "fakeaway", "trending"],
    ing: [["4", "chicken drumsticks", "leftover takeaway fried chicken pieces, on the bone"]],
    steps: [
      "Chicken must have been cooled quickly (within an hour or two) and kept in the fridge – eat within 2 days. Never reheat in the plastic tub or bucket.",
      "Let the pieces sit out for 10 minutes to take the fridge chill off, then lay them in a single layer, don't overcrowd.",
      "Cook at 180°C for 10–12 minutes, turning at halfway, until the coating is crackly again. Big breast pieces may need 2–3 minutes more.",
      "Check the meat by the bone is piping hot – 75°C on a probe thermometer. Reheat only once."
    ] },
  { id: "reheat-chicken-wings", name: "Reheat Takeaway Chicken Wings", emoji: "🔥", cat: "reheat", temp: 190, time: 8, prep: 1, serves: 2, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "fakeaway", "quick"],
    ing: [["10", "chicken wings", "leftover cooked wings"], ["1 tbsp", "?hot sauce", "or bbq sauce, to re-glaze"]],
    steps: [
      "Wings must have been cooled quickly and kept in the fridge for no more than 2 days. Take them out of any plastic container.",
      "Spread in a single layer, don't overcrowd. Cook at 190°C for 6–8 minutes, shaking at halfway.",
      "For saucy wings, toss in a little fresh sauce for the last minute so they don't burn.",
      "Check they're piping hot (75°C by the bone) before eating. Reheat only once."
    ] },
  { id: "reheat-chicken-nuggets", name: "Reheat Chicken Nuggets & Popcorn Chicken", emoji: "🐔", cat: "reheat", temp: 190, time: 5, prep: 1, serves: 2, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "kids", "quick"],
    ing: [["12", "chicken nuggets", "leftover cooked nuggets or popcorn chicken"]],
    steps: [
      "Use nuggets that were cooled quickly and kept in the fridge for no more than 2 days, out of any plastic box.",
      "Spread in a single layer, don't overcrowd. Cook at 190°C for 4–5 minutes, shaking at halfway.",
      "Cut the biggest one open to check it's piping hot (75°C in the centre). Cool slightly for little ones.",
      "Reheat only once – bin any that are left after this."
    ] },
  { id: "reheat-fish-and-chips", name: "Reheat Chippy Fish & Chips", emoji: "🐟", cat: "reheat", temp: 180, time: 12, prep: 2, serves: 1, turn: "flip",
    tags: ["reheat", "leftovers", "budget", "fakeaway"],
    ing: [["1", "white fish fillets", "leftover battered chippy fish"], ["200g", "potatoes", "leftover chips"], ["1", "?lemon", "wedges"], ["", "?malt vinegar"]],
    steps: [
      "The fish and chips must have been cooled quickly, unwrapped and kept in the fridge – eat within 1–2 days. Don't reheat in the paper or a plastic tub.",
      "Put the fish in the basket and cook at 180°C for 6 minutes, then turn it carefully with a fish slice.",
      "Add the chips around it in a single layer and cook for 5–6 minutes more, shaking the chips once, until the batter is crisp.",
      "Check the fish is piping hot – 75°C in the thickest part. Serve with lemon and vinegar. Reheat only once."
    ] },
  { id: "reheat-spring-rolls-prawn-crackers", name: "Reheat Spring Rolls & Prawn Crackers", emoji: "🥢", cat: "reheat", temp: 180, time: 6, prep: 1, serves: 2, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "fakeaway", "chinese", "quick"],
    ing: [["6", "frozen spring rolls", "leftover cooked takeaway spring rolls"], ["2 tbsp", "?sweet chilli sauce", "to dip"]],
    steps: [
      "Use spring rolls that were cooled quickly and kept in the fridge for no more than 2 days, out of the plastic tub.",
      "Spread in a single layer and cook at 180°C for 5–6 minutes, shaking at halfway, until crisp. Check they're piping hot (75°C) in the middle.",
      "Soft, stale prawn crackers: add a handful to the basket for the last 1 minute only – they crisp up again as they cool.",
      "Reheat only once and serve with sweet chilli sauce."
    ] },
  { id: "reheat-samosas-bhajis", name: "Reheat Samosas & Onion Bhajis", emoji: "🥟", cat: "reheat", temp: 180, time: 6, prep: 1, serves: 2, turn: "flip",
    tags: ["reheat", "leftovers", "budget", "fakeaway", "indian", "vegetarian"],
    ing: [["4", "filo pastry", "leftover cooked samosas (any filling)"], ["4", "onion", "leftover cooked onion bhajis"], ["4 tbsp", "?mango chutney"]],
    steps: [
      "Samosas and bhajis must have been cooled quickly and kept in the fridge for no more than 2 days. Tip them out of any plastic tub.",
      "Arrange in a single layer, don't overcrowd. Cook at 180°C for 5–6 minutes, turning at halfway.",
      "Check the fillings are piping hot (75°C in the centre) – meat samosas especially.",
      "Reheat only once. Serve with mango chutney. (Vegetarian only if the samosas are veg.)"
    ] },
  { id: "reheat-naan", name: "Reheat Takeaway Naan", emoji: "🫓", cat: "reheat", temp: 180, time: 3, prep: 1, serves: 2, turn: "none",
    tags: ["reheat", "leftovers", "budget", "fakeaway", "indian", "vegetarian", "quick"],
    ing: [["2", "naan", "leftover takeaway naan"], ["1 tsp", "water"], ["15g", "?butter", "melted"]],
    steps: [
      "Keep leftover naan wrapped in the fridge and use within 2 days. Don't reheat it in a plastic bag or container.",
      "Flick a few drops of water over each naan so it steams rather than dries out. Fold big ones in half to fit.",
      "Cook at 180°C for 2–3 minutes until soft inside and crisp at the edges. Put a metal trivet on top if your fan lifts it.",
      "Brush with butter and serve piping hot. Reheat only once – stuffed naans must reach 75°C in the filling."
    ] },
  { id: "reheat-sausage-rolls-pasties", name: "Reheat Sausage Rolls & Pasties", emoji: "🥐", cat: "reheat", temp: 170, time: 10, prep: 1, serves: 2, turn: "flip",
    tags: ["reheat", "leftovers", "budget", "lunchbox"],
    ing: [["2", "frozen sausage rolls", "leftover cooked bakery sausage rolls"], ["2", "shortcrust pastry", "leftover cooked pasties or steak bakes"]],
    steps: [
      "Pastries with meat must have been cooled quickly and kept in the fridge – eat within 2 days. Take them out of paper bags and plastic packaging.",
      "Sausage rolls: cook at 170°C for 5–6 minutes. Pasties and steak bakes: 9–10 minutes, turning at halfway. The lower heat warms the middle before the pastry burns.",
      "Loosely lay a sheet of foil over pasties if the top browns too fast, tucked in tightly so it can't blow into the element.",
      "Check the filling is piping hot – 75°C in the centre. Reheat only once."
    ] },
  { id: "reheat-croissants-pastries", name: "Refresh Croissants & Pastries", emoji: "🥐", cat: "reheat", temp: 160, time: 3, prep: 1, serves: 2, turn: "none",
    tags: ["reheat", "leftovers", "budget", "breakfast", "quick", "vegetarian"],
    ing: [["2", "croissants", "day-old croissants, pain au chocolat or Danish"]],
    steps: [
      "Day-old plain or sweet pastries keep in a sealed tin; any with ham, cheese or custard filling must be kept in the fridge and eaten within 2 days.",
      "Take them out of the plastic packet and place in the basket with space around each.",
      "Cook at 160°C for 2–3 minutes until flaky and fragrant – any longer and they'll scorch. Filled pastries need 4–5 minutes and must be piping hot (75°C) inside.",
      "Refresh only once and eat straight away."
    ] },
  { id: "reheat-roast-chicken", name: "Reheat Leftover Roast Chicken", emoji: "🍗", cat: "reheat", temp: 170, time: 10, prep: 2, serves: 2, turn: "none",
    tags: ["reheat", "leftovers", "budget", "sunday roast", "high-protein"],
    ing: [["300g", "whole chicken", "leftover roast chicken pieces or slices"], ["2 tbsp", "water", "or stock"], ["1 tsp", "?butter"]],
    steps: [
      "The chicken must have been cooled quickly (within 1–2 hours) and kept in the fridge – use within 2 days. Never reheat it in a plastic container.",
      "Put the chicken in a small foil tray or ovenproof dish, add the water or stock and dot with butter. Cover with foil tucked in tightly so it can't blow about.",
      "Cook at 170°C for 8–10 minutes until steaming. For crispy skin, uncover for the last 2 minutes.",
      "Check the thickest piece is piping hot – 75°C on a probe thermometer. Reheat only once."
    ] },
  { id: "reheat-roast-beef-gravy", name: "Reheat Roast Beef Slices in Gravy", emoji: "🥩", cat: "reheat", temp: 170, time: 8, prep: 3, serves: 2, turn: "none",
    tags: ["reheat", "leftovers", "budget", "sunday roast"],
    ing: [["300g", "beef joint", "leftover cooked roast beef, sliced"], ["200ml", "gravy granules", "made-up gravy, or leftover gravy"]],
    steps: [
      "The beef must have been cooled quickly and kept in the fridge – use within 2 days. Don't reheat in a plastic container.",
      "Lay the slices in a foil tray and pour over the gravy so they're covered – this stops them drying out. Cover tightly with foil, tucked in so it can't blow into the element.",
      "Cook at 170°C for 7–8 minutes until the gravy is bubbling.",
      "Check it's piping hot (75°C in the centre) – reheated beef won't stay pink. Reheat only once."
    ] },
  { id: "reheat-yorkshire-puddings", name: "Reheat Leftover Yorkshire Puddings", emoji: "🍮", cat: "reheat", temp: 180, time: 3, prep: 1, serves: 4, turn: "none",
    tags: ["reheat", "leftovers", "budget", "sunday roast", "vegetarian", "quick"],
    ing: [["4", "frozen yorkshire puddings", "leftover cooked homemade Yorkshires"]],
    steps: [
      "Cool leftover Yorkshires quickly, keep in the fridge and use within 2 days. Take them out of any plastic tub or bag.",
      "Sit them upright in the basket in a single layer.",
      "Cook at 180°C for 2–3 minutes until crisp and puffed again – keep an eye on them as the tops catch quickly.",
      "Check they're piping hot (75°C) all through. Reheat only once."
    ] },
  { id: "reheat-pigs-in-blankets-stuffing", name: "Reheat Pigs in Blankets & Stuffing Balls", emoji: "🎄", cat: "reheat", temp: 180, time: 7, prep: 1, serves: 4, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "christmas", "sunday roast"],
    ing: [["12", "cocktail sausages", "leftover cooked pigs in blankets"], ["8", "breadcrumbs", "leftover cooked stuffing balls"]],
    steps: [
      "The leftovers must have been cooled quickly and kept in the fridge – eat within 2 days (Boxing Day is fine; the day after, bin them). Not in a plastic tub.",
      "Spread in a single layer, don't overcrowd. Cook at 180°C for 6–7 minutes, shaking at halfway, until the bacon crisps up again.",
      "Cut into one sausage and one stuffing ball – both must be piping hot, 75°C in the centre.",
      "Reheat only once. Great in a Boxing Day sandwich."
    ] },
  { id: "reheat-burgers", name: "Reheat Leftover Burgers", emoji: "🍔", cat: "reheat", temp: 170, time: 8, prep: 2, serves: 2, turn: "flip",
    tags: ["reheat", "leftovers", "budget", "fakeaway"],
    ing: [["2", "beef mince", "leftover cooked burger patties"], ["2", "burger buns"], ["2 slices", "?cheddar"]],
    steps: [
      "The patties must have been cooled quickly and kept in the fridge – use within 2 days. Take the burgers apart: salad and sauce out, and out of any plastic box.",
      "Cook the patties at 170°C for 6–7 minutes, turning at halfway. Add the cheese for the last minute.",
      "Toast the bun halves cut-side up in the basket for the final 1 minute.",
      "Check the patties are piping hot – 75°C in the centre. Rebuild and serve. Reheat only once."
    ] },
  { id: "reheat-kebab-meat", name: "Reheat Doner Kebab Meat", emoji: "🥙", cat: "reheat", temp: 200, time: 5, prep: 2, serves: 1, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "fakeaway", "high-protein"],
    ing: [["150g", "lamb mince", "leftover doner kebab meat"], ["1", "pitta bread"], ["", "?lettuce"], ["1 tbsp", "?hot sauce"]],
    steps: [
      "The kebab meat must have been cooled quickly and kept in the fridge – eat within 1–2 days. Pull out the salad and sauce and don't reheat it in the polystyrene or plastic box.",
      "Spread the meat thinly in the basket and cook at 200°C for 4–5 minutes, shaking at halfway, until the edges sizzle and crisp.",
      "Warm the pitta in the basket for the last 1 minute.",
      "Check the meat is piping hot (75°C) all through, then stuff the pitta with meat, fresh salad and sauce. Reheat only once."
    ] },
  { id: "reheat-lasagne-portion", name: "Reheat a Lasagne Portion", emoji: "🍝", cat: "reheat", temp: 160, time: 22, prep: 2, serves: 1, turn: "none",
    tags: ["reheat", "leftovers", "budget", "family"],
    ing: [["1", "pasta", "leftover lasagne portion"], ["20g", "?cheddar", "grated, for a fresh top"]],
    steps: [
      "Lasagne must have been cooled quickly and kept in the fridge – eat within 2 days. Move it from any plastic box into a small ovenproof dish or foil tray that fits your basket.",
      "Splash 1 tbsp water round the edges, cover with foil tucked in tightly so it can't blow into the element, and cook at 160°C for 16–18 minutes.",
      "Uncover, sprinkle with cheese and cook for 4 minutes more until bubbling.",
      "Probe the very centre – it must be piping hot, 75°C. Stand for 2 minutes (the dish is very hot). Reheat only once."
    ] },
  { id: "reheat-mac-and-cheese", name: "Reheat Leftover Mac & Cheese", emoji: "🧀", cat: "reheat", temp: 160, time: 15, prep: 2, serves: 2, turn: "none",
    tags: ["reheat", "leftovers", "budget", "kids", "vegetarian"],
    ing: [["400g", "pasta", "leftover macaroni cheese"], ["3 tbsp", "milk"], ["30g", "?cheddar", "grated"], ["2 tbsp", "?breadcrumbs"]],
    steps: [
      "Use mac & cheese that was cooled quickly and kept in the fridge for no more than 2 days. Tip it out of any plastic tub into an ovenproof dish that fits your basket.",
      "Stir in the milk to loosen the sauce, cover with foil tucked in tightly and cook at 160°C for 10 minutes.",
      "Uncover, stir, scatter over cheese and breadcrumbs and cook for 4–5 minutes until golden and crunchy on top.",
      "Check the middle is piping hot – 75°C. Reheat only once."
    ] },
  { id: "reheat-garlic-bread", name: "Reheat Leftover Garlic Bread", emoji: "🥖", cat: "reheat", temp: 180, time: 4, prep: 1, serves: 2, turn: "none",
    tags: ["reheat", "leftovers", "budget", "vegetarian", "quick"],
    ing: [["4 slices", "garlic bread", "leftover cooked slices"], ["15g", "?butter"]],
    steps: [
      "Keep leftover garlic bread wrapped in the fridge and use within 2 days. Don't reheat it in plastic wrap or a plastic box.",
      "Lay the slices buttery-side up in a single layer. Dot with a little extra butter if they look dry.",
      "Cook at 180°C for 3–4 minutes until crisp at the edges and soft in the middle (cheesy garlic bread may need 5).",
      "Serve piping hot (75°C if it has a cheese topping). Reheat only once."
    ] },
  { id: "reheat-takeaway-fried-rice", name: "Reheat Takeaway Fried Rice", emoji: "🍚", cat: "reheat", temp: 170, time: 10, prep: 2, serves: 2, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "fakeaway", "chinese"],
    ing: [["400g", "rice", "leftover takeaway fried rice"], ["1 tbsp", "water"], ["1 tsp", "?soy sauce"]],
    steps: [
      "Rice is the riskiest leftover: it must have been cooled quickly (within 1 hour), kept in the fridge and eaten within 1 day. If it sat out overnight, bin it.",
      "Tip the rice out of the plastic tub into a foil tray or ovenproof dish, break up the clumps and sprinkle with the water. Cover with foil tucked in tightly.",
      "Cook at 170°C for 8–10 minutes, stirring at halfway (shake reminder). Uncover for the last 2 minutes for crispy bits.",
      "Check it's piping hot – steaming all through and 75°C in the centre. Reheat only once – never reheat rice twice."
    ] },
  { id: "reheat-roast-potato-hash", name: "Leftover Roast Potato Hash", emoji: "🍳", cat: "reheat", temp: 200, time: 14, prep: 5, serves: 2, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "breakfast", "sunday roast", "trending"],
    ing: [["8", "potatoes", "leftover roast potatoes, chopped"], ["150g", "brussels sprouts", "or any leftover cooked veg, chopped"], ["1", "onion", "sliced"], ["3 rashers", "?bacon", "chopped"], ["1 tbsp", "oil"], ["½ tsp", "paprika"], ["2", "eggs"]],
    steps: [
      "Use roast potatoes and veg that were cooled quickly and kept in the fridge for no more than 2 days.",
      "Toss the onion and bacon with the oil and cook at 200°C for 4 minutes in the basket.",
      "Add the potatoes, veg and paprika, spread out and cook for 6–7 minutes, shaking at halfway, until crispy. Check it's piping hot (75°C) and the bacon is cooked through.",
      "Push into a lined or greased ovenproof dish, crack in the eggs, and cook for 3–4 minutes at 180°C until the whites are set. This is the leftovers' one and only reheat."
    ] },
  { id: "reheat-turkey-croquettes", name: "Leftover Turkey & Mash Croquettes", emoji: "🦃", cat: "reheat", temp: 190, time: 12, prep: 20, serves: 4, turn: "flip",
    tags: ["reheat", "leftovers", "budget", "christmas", "family"],
    ing: [["200g", "turkey breast", "leftover cooked turkey, finely chopped"], ["400g", "potatoes", "cold leftover mash"], ["2", "spring onions", "chopped"], ["40g", "plain flour"], ["1", "eggs", "beaten"], ["80g", "breadcrumbs"], ["spray", "oil"], ["4 tbsp", "?cranberry sauce", "to dip"]],
    steps: [
      "The turkey and mash must have been cooled quickly and kept in the fridge – use within 2 days of the roast.",
      "Mix the turkey, mash and spring onions with salt and pepper. Shape into 12 sausage-shaped croquettes. Coat in flour, then egg, then breadcrumbs, and spray with oil.",
      "Cook in a single layer, don't overcrowd, at 190°C for 10–12 minutes, turning carefully at halfway, until golden.",
      "Check the centres are piping hot – 75°C. Serve with cranberry sauce. Don't reheat these again."
    ] },
  { id: "reheat-mash-potato-cakes", name: "Leftover Mash Potato Cakes", emoji: "🥔", cat: "reheat", temp: 190, time: 12, prep: 10, serves: 2, turn: "flip",
    tags: ["reheat", "leftovers", "budget", "vegetarian", "kids"],
    ing: [["400g", "potatoes", "cold leftover mash"], ["50g", "cheddar", "grated"], ["2", "spring onions", "chopped"], ["2 tbsp", "plain flour", "plus extra for dusting"], ["spray", "oil"]],
    steps: [
      "Use mash that was cooled quickly and kept in the fridge for no more than 2 days.",
      "Mix the mash, cheese, spring onions and flour with salt and pepper. Shape into 6 flat cakes about 2cm thick and dust in flour.",
      "Line the basket with pierced baking paper (only once the cakes are on it), spray the cakes with oil and cook at 190°C for 10–12 minutes, flipping carefully at halfway.",
      "Check they're piping hot (75°C) in the middle and golden outside. Don't reheat them a second time."
    ] },
  { id: "reheat-garlic-croutons", name: "Stale Bread Garlic Croutons", emoji: "🍞", cat: "reheat", temp: 180, time: 7, prep: 5, serves: 4, turn: "shake",
    tags: ["reheat", "leftovers", "budget", "vegetarian", "quick"],
    ing: [["3 slices", "bread", "stale or day-old, crusts on"], ["2 tbsp", "oil"], ["1 tsp", "garlic granules"], ["½ tsp", "?mixed herbs"], ["2 tbsp", "?parmesan", "finely grated"], ["pinch", "salt"]],
    steps: [
      "Use stale bread with no mould – bin the whole loaf if you spot any. Cut into 2cm cubes.",
      "Toss with the oil, garlic granules, herbs and salt (add parmesan now if using).",
      "Cook at 180°C for 6–7 minutes in a single layer, shaking at halfway, until golden and crunchy. They're light, so don't overfill or the fan will blow them about.",
      "Cool completely, then keep in a jar (not a plastic tub) for up to 5 days. Great on soups and salads."
    ] },
  { id: "reheat-veg-pakora-fritters", name: "Leftover Veg Pakora-Style Fritters", emoji: "🥕", cat: "reheat", temp: 190, time: 12, prep: 10, serves: 3, turn: "flip",
    tags: ["reheat", "leftovers", "budget", "vegetarian", "vegan", "indian"],
    ing: [["300g", "frozen veg", "leftover cooked veg (carrots, peas, cabbage, sprouts), chopped"], ["1", "onion", "thinly sliced"], ["100g", "gram flour"], ["½ tsp", "cumin"], ["½ tsp", "turmeric"], ["½ tsp", "chilli powder"], ["2 tbsp", "?fresh coriander", "chopped"], ["80ml", "water"], ["spray", "oil"], ["4 tbsp", "?mango chutney"]],
    steps: [
      "Use cooked veg that was cooled quickly and kept in the fridge for no more than 2 days.",
      "Mix the gram flour, spices, ½ tsp salt and water into a thick batter, then stir in the veg, onion and coriander.",
      "Line the basket with pierced baking paper (only once the fritters are on it). Drop in spoonfuls, flatten slightly, spray with oil and cook at 190°C for 10–12 minutes, flipping at halfway.",
      "Check they're crisp and piping hot (75°C) in the middle. Serve with mango chutney – and don't reheat them again."
    ] }
);
