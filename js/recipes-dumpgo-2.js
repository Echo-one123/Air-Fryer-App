'use strict';
/* Dump & Go part 2 – veggie dinners, breakfasts and dump cakes. Everything goes in raw, one stir at halfway. Same format as recipes.js. */
RECIPES.push(
  // ───────────── PASTA & GNOCCHI DUMPS ─────────────
  { id: "dumpgo2-tomato-pasta", name: "Dump & Bake Tomato Pasta", emoji: "🍝", cat: "dumpgo", temp: 180, time: 28, prep: 5, serves: 3, turn: "shake",
    tags: ["dump & go", "vegetarian", "budget", "family", "kids", "trending"],
    ing: [["200g", "pasta", "uncooked penne or fusilli"], ["350ml", "passata"], ["150ml", "water", "boiling"], ["1", "stock cube", "veg, crumbled"], ["1", "onion", "finely chopped"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "oregano"], ["1 tbsp", "oil"], ["½ tsp", "salt"], ["50g", "cheddar", "grated"], ["handful", "?basil"]],
    steps: [
      "Use an oven-safe dish (about 20cm) that leaves a gap round the edge. Tip in the uncooked pasta, passata, boiling water, stock cube, onion, garlic, oregano, oil and salt. Stir so every piece of pasta is under the liquid.",
      "Cover with foil tucked in tightly so it can't blow into the element. Cook at 180°C for 28 minutes – uncooked pasta only works covered with this much liquid.",
      "At halfway, lift the foil carefully (hot steam), give it a good stir, splash in a little more water if it looks dry, re-cover and carry on.",
      "When the pasta is tender, stir, scatter over the cheddar and basil and let it sit for 2 minutes to melt."
    ] },
  { id: "dumpgo2-garlic-mushroom-pasta", name: "Creamy Garlic Mushroom Pasta Dump", emoji: "🍄", cat: "dumpgo", temp: 180, time: 27, prep: 5, serves: 3, turn: "shake",
    tags: ["dump & go", "vegetarian", "family", "quick"],
    ing: [["200g", "pasta", "uncooked penne"], ["250g", "mushrooms", "sliced"], ["3 cloves", "garlic", "crushed"], ["450ml", "water", "boiling"], ["1", "stock cube", "veg or mushroom"], ["100g", "cream cheese"], ["30g", "parmesan", "grated"], ["1 tsp", "thyme"], ["½ tsp", "black pepper"], ["handful", "?spinach"]],
    steps: [
      "Use an oven-safe dish that fits with a gap round the edge. Add the uncooked pasta, mushrooms, garlic, thyme, pepper, crumbled stock cube and boiling water. Stir so the pasta is covered.",
      "Cover with foil tucked in tightly and cook at 180°C for 27 minutes.",
      "At halfway, carefully lift the foil, stir well, add a splash of water if it's drying out, then re-cover.",
      "Stir in the cream cheese, parmesan and spinach until glossy and the spinach wilts. Leave 2 minutes before serving."
    ] },
  { id: "dumpgo2-mac-cheese", name: "No-Boil Mac & Cheese Dump", emoji: "🧀", cat: "dumpgo", temp: 180, time: 30, prep: 5, serves: 3, turn: "shake",
    tags: ["dump & go", "vegetarian", "kids", "family", "budget", "trending"],
    ing: [["200g", "pasta", "uncooked macaroni"], ["400ml", "milk"], ["250ml", "water", "boiling"], ["1 tsp", "mustard"], ["½ tsp", "garlic granules"], ["½ tsp", "salt"], ["150g", "cheddar", "grated"], ["25g", "?parmesan", "grated"], ["pinch", "?paprika"]],
    steps: [
      "Use a deep oven-safe dish (at least 5cm deep so it can't bubble over). Tip in the uncooked macaroni, milk, boiling water, mustard, garlic granules and salt and stir.",
      "Cover with foil tucked in tightly and cook at 180°C for 25 minutes, stirring well at halfway (scrape the corners so nothing catches).",
      "Stir in most of the cheddar, scatter the rest plus the parmesan and paprika on top and cook uncovered for 5 more minutes until golden and bubbling.",
      "Rest for 5 minutes – the sauce thickens as it stands."
    ] },
  { id: "dumpgo2-lasagne", name: "Broken Lasagne Dump Bake", emoji: "🍝", cat: "dumpgo", temp: 180, time: 35, prep: 8, serves: 4, turn: "shake",
    tags: ["dump & go", "vegetarian", "family", "meal prep"],
    ing: [["8", "pasta", "dried lasagne sheets, snapped into pieces"], ["500ml", "passata"], ["200ml", "water", "boiling"], ["1", "stock cube", "veg"], ["1", "courgette", "diced small"], ["1", "bell peppers", "diced"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "mixed herbs"], ["½ tsp", "salt"], ["150g", "ricotta"], ["125g", "mozzarella", "torn"]],
    steps: [
      "Use an oven-safe dish that fits with a gap round the edge. Add the snapped lasagne sheets, passata, boiling water, crumbled stock cube, courgette, pepper, garlic, herbs and salt. Stir so all the pasta is submerged.",
      "Cover with foil tucked in tightly and cook at 180°C for 30 minutes, stirring well at halfway and adding a splash of water if it's thick.",
      "Remove the foil, dot over spoonfuls of ricotta and the torn mozzarella and cook uncovered for 5 minutes until melted and golden.",
      "Rest for 5 minutes before spooning out – check the pasta is tender."
    ] },
  { id: "dumpgo2-tortellini-rose", name: "Tortellini Rosé Dump Bake", emoji: "🥟", cat: "dumpgo", temp: 180, time: 16, prep: 3, serves: 2, turn: "shake",
    tags: ["dump & go", "vegetarian", "quick", "family"],
    ing: [["300g", "pasta", "fresh cheese tortellini (chilled)"], ["300ml", "passata"], ["100ml", "water"], ["100ml", "cream", "double"], ["1 clove", "garlic", "crushed"], ["½ tsp", "chilli flakes"], ["½ tsp", "salt"], ["30g", "parmesan", "grated"], ["handful", "?basil"]],
    steps: [
      "Use an oven-safe dish. Tip in the fresh tortellini, passata, water, cream, garlic, chilli flakes and salt and stir so they're coated.",
      "Cover with foil tucked in tightly and cook at 180°C for 16 minutes, stirring at halfway.",
      "Scatter over the parmesan and basil and serve straight from the dish once the sauce is bubbling and the pasta is soft."
    ] },
  { id: "dumpgo2-pesto-gnocchi", name: "Creamy Pesto Gnocchi Dump", emoji: "🌿", cat: "dumpgo", temp: 190, time: 18, prep: 3, serves: 2, turn: "shake",
    tags: ["dump & go", "vegetarian", "quick", "trending"],
    ing: [["500g", "gnocchi", "chilled pack, straight from the pack"], ["200g", "cherry tomatoes"], ["2 tbsp", "pesto"], ["100ml", "cream"], ["50ml", "water"], ["1 clove", "garlic", "crushed"], ["2 handfuls", "spinach"], ["30g", "parmesan", "grated"]],
    steps: [
      "Use an oven-safe dish with a gap round the edge. Tip in the raw gnocchi, cherry tomatoes, pesto, cream, water and garlic and stir.",
      "Cook uncovered at 190°C for 18 minutes, giving it a stir at halfway so the top pieces don't dry out.",
      "Stir in the spinach (it wilts in the heat), scatter over the parmesan and serve once the tomatoes have burst and the gnocchi is soft."
    ] },
  { id: "dumpgo2-lemon-pea-orzo", name: "Lemon, Pea & Feta Orzo Dump", emoji: "🍋", cat: "dumpgo", temp: 180, time: 22, prep: 5, serves: 2, turn: "shake",
    tags: ["dump & go", "vegetarian", "light", "quick"],
    ing: [["150g", "pasta", "uncooked orzo"], ["450ml", "water", "boiling"], ["1", "stock cube", "veg"], ["150g", "peas", "frozen"], ["2 cloves", "garlic", "crushed"], ["1", "lemon", "zest and juice"], ["15g", "butter"], ["100g", "feta", "crumbled"], ["handful", "?parsley"]],
    steps: [
      "Use an oven-safe dish. Add the orzo, boiling water, crumbled stock cube, frozen peas, garlic, lemon zest and butter and stir.",
      "Cover with foil tucked in tightly and cook at 180°C for 22 minutes, stirring at halfway (orzo likes to stick, so scrape the bottom).",
      "Stir in the lemon juice, crumble over the feta and parsley and serve once the orzo is tender and creamy."
    ] },

  // ───────────── VEGGIE DUMP DINNERS ─────────────
  { id: "dumpgo2-chickpea-coconut-curry", name: "Chickpea & Coconut Curry Dump", emoji: "🍛", cat: "dumpgo", temp: 180, time: 20, prep: 5, serves: 3, turn: "shake",
    tags: ["dump & go", "vegan", "vegetarian", "budget", "indian", "healthy"],
    ing: [["400g tin", "chickpeas", "drained"], ["400ml tin", "coconut milk"], ["2 tbsp", "tikka paste", "check it's vegan if needed"], ["1", "onion", "finely sliced"], ["200g", "cherry tomatoes", "halved"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "ginger", "grated"], ["2 handfuls", "spinach"], ["½ tsp", "salt"], ["to serve", "?fresh coriander"]],
    steps: [
      "Use a deep oven-safe dish. Tip in the chickpeas, coconut milk, curry paste, onion, tomatoes, garlic, ginger and salt and stir together.",
      "Cook uncovered at 180°C for 20 minutes, stirring at halfway.",
      "Stir in the spinach until wilted, top with coriander and serve with naan or a microwave rice pouch."
    ] },
  { id: "dumpgo2-lentil-veg-stew", name: "Lentil & Veg Dump Stew", emoji: "🥕", cat: "dumpgo", temp: 180, time: 25, prep: 8, serves: 3, turn: "shake",
    tags: ["dump & go", "vegan", "vegetarian", "healthy", "budget", "meal prep"],
    ing: [["400g tin", "lentils", "green or brown, drained"], ["2", "carrots", "diced small (1cm)"], ["1", "onion", "diced"], ["1", "courgette", "diced"], ["400ml", "passata"], ["150ml", "water", "boiling"], ["1", "stock cube", "veg"], ["1 tsp", "paprika", "smoked"], ["1 tsp", "cumin"], ["1 tbsp", "oil"], ["½ tsp", "salt"]],
    steps: [
      "Use an oven-safe dish with a gap round the edge. Add everything – lentils, raw veg, passata, boiling water, crumbled stock cube, spices, oil and salt – and stir.",
      "Cover with foil tucked in tightly and cook at 180°C for 25 minutes, stirring at halfway.",
      "Check the carrots are tender (give it 5 more minutes if not). Serve with crusty bread or a jacket potato."
    ] },
  { id: "dumpgo2-thai-green-tofu", name: "Thai Green Tofu & Veg Dump", emoji: "🥥", cat: "dumpgo", temp: 190, time: 18, prep: 8, serves: 2, turn: "shake",
    tags: ["dump & go", "vegan", "vegetarian", "healthy", "fakeaway"],
    ing: [["280g", "tofu", "firm, pressed and cubed"], ["200ml", "coconut milk"], ["2 tbsp", "thai curry paste", "green"], ["100g", "green beans", "halved"], ["100g", "baby corn", "halved"], ["80g", "mangetout"], ["1 tbsp", "soy sauce"], ["1", "lime"], ["to serve", "?fresh coriander"]],
    steps: [
      "Use an oven-safe dish. Stir the coconut milk, curry paste and soy sauce together in it, then tip in the tofu, green beans, baby corn and mangetout and stir to coat.",
      "Cook uncovered at 190°C for 18 minutes, stirring at halfway.",
      "Squeeze over the lime, scatter with coriander and serve with a microwave rice pouch or noodles."
    ] },
  { id: "dumpgo2-mexican-rice-bean", name: "Mexican Rice & Bean Dump", emoji: "🌶️", cat: "dumpgo", temp: 180, time: 15, prep: 5, serves: 2, turn: "shake",
    tags: ["dump & go", "vegetarian", "quick", "budget", "mexican", "lunchbox"],
    ing: [["250g pouch", "rice", "microwave rice, cold, straight from the pouch"], ["400g tin", "black beans", "drained"], ["150g", "sweetcorn", "drained"], ["150g", "salsa"], ["1 tsp", "fajita seasoning"], ["2 tbsp", "water"], ["60g", "cheddar", "grated"], ["to serve", "?sour cream"], ["1", "?lime"]],
    steps: [
      "Use an oven-safe dish. Squeeze the rice pouch to break it up, then tip the cold rice in with the black beans, sweetcorn, salsa, fajita seasoning and water. Stir.",
      "Cover with foil tucked in tightly and cook at 180°C for 15 minutes, stirring at halfway.",
      "Remove the foil, scatter over the cheddar and cook for 2–3 minutes more until melted and the rice is piping hot. Serve with sour cream and lime."
    ] },
  { id: "dumpgo2-bean-tortilla-bake", name: "Black Bean & Tortilla Dump Bake", emoji: "🌯", cat: "dumpgo", temp: 180, time: 18, prep: 5, serves: 3, turn: "none",
    tags: ["dump & go", "vegetarian", "family", "mexican", "kids"],
    ing: [["3", "tortilla wraps", "torn into pieces"], ["400g tin", "black beans", "drained"], ["150g", "sweetcorn", "drained"], ["1", "bell peppers", "diced"], ["300g", "salsa"], ["1 tsp", "cumin"], ["100g", "cheddar", "grated"], ["to serve", "?sour cream"], ["to serve", "?fresh coriander"]],
    steps: [
      "Use an oven-safe dish. Toss the torn wraps, beans, sweetcorn, pepper, salsa, cumin and half the cheddar together in it, then press down flat.",
      "Scatter the rest of the cheddar on top. Cover with foil tucked in tightly and cook at 180°C for 12 minutes.",
      "Remove the foil and cook for 6 more minutes until the cheese is golden. Serve with sour cream and coriander."
    ] },
  { id: "dumpgo2-harissa-halloumi-traybake", name: "Harissa Halloumi & Veg Dump Traybake", emoji: "🧀", cat: "dumpgo", temp: 190, time: 20, prep: 8, serves: 2, turn: "shake",
    tags: ["dump & go", "vegetarian", "high-protein", "low-carb", "healthy"],
    ing: [["225g", "halloumi", "cut into 2.5cm chunks"], ["1", "courgette", "chunks"], ["1", "red onion", "wedges"], ["2", "bell peppers", "chunks"], ["150g", "cherry tomatoes"], ["1 tbsp", "harissa"], ["1 tbsp", "oil"], ["1 tsp", "?honey"]],
    steps: [
      "Use a silicone liner or straight in the basket. Toss all the raw veg and the halloumi chunks with the harissa and oil in a bowl, then tip in – single layer, don't overcrowd.",
      "Cook at 190°C for 20 minutes, shaking at halfway.",
      "Drizzle with honey if you like and serve with couscous, pitta or salad."
    ] },
  { id: "dumpgo2-greek-feta-veg", name: "Greek Feta & Veg Dump Bake", emoji: "🫒", cat: "dumpgo", temp: 190, time: 22, prep: 8, serves: 2, turn: "shake",
    tags: ["dump & go", "vegetarian", "low-carb", "healthy", "light"],
    ing: [["200g", "feta", "block"], ["1", "aubergine", "2cm cubes"], ["1", "courgette", "chunks"], ["1", "red onion", "wedges"], ["200g", "cherry tomatoes"], ["50g", "olives", "kalamata"], ["2 tbsp", "oil"], ["1 tsp", "oregano"], ["½ tsp", "salt"], ["1", "?lemon"]],
    steps: [
      "Use an oven-safe dish or foil tray. Toss the raw veg and olives with the oil, oregano and salt, tip into the dish and sit the whole block of feta in the middle.",
      "Cook at 190°C for 22 minutes, stirring the veg round the feta at halfway.",
      "Squeeze over the lemon and break the soft feta through the veg. Serve with crusty bread or pitta."
    ] },
  { id: "dumpgo2-quorn-fajita-traybake", name: "Quorn Fajita Dump Traybake", emoji: "🌮", cat: "dumpgo", temp: 190, time: 18, prep: 5, serves: 3, turn: "shake",
    tags: ["dump & go", "vegetarian", "high-protein", "mexican", "quick"],
    ing: [["300g", "quorn", "pieces, straight from frozen"], ["3", "bell peppers", "sliced"], ["1", "red onion", "sliced"], ["2 tbsp", "fajita seasoning"], ["1 tbsp", "oil"], ["6", "tortilla wraps"], ["to serve", "?sour cream"], ["to serve", "?salsa"]],
    steps: [
      "Use a silicone liner or straight in the basket. Toss the Quorn, peppers and onion with the oil and fajita seasoning in a bowl and tip in.",
      "Cook at 190°C for 18 minutes, shaking at halfway, until the peppers are charred at the edges and the Quorn is piping hot.",
      "Pile into warm wraps with sour cream and salsa."
    ] },
  { id: "dumpgo2-vegan-sausage-bean", name: "Vegan Sausage & Bean Dump Bake", emoji: "🌭", cat: "dumpgo", temp: 180, time: 22, prep: 5, serves: 3, turn: "shake",
    tags: ["dump & go", "vegan", "vegetarian", "budget", "kids", "family"],
    ing: [["6", "vegan sausages", "chilled, cut into thirds"], ["2 x 415g tins", "baked beans"], ["1", "red onion", "diced"], ["1", "bell peppers", "diced"], ["1 tsp", "paprika", "smoked"], ["1 tsp", "?worcestershire sauce", "vegan version"], ["50ml", "water"]],
    steps: [
      "Use an oven-safe dish. Tip in the beans, onion, pepper, paprika, Worcestershire sauce and water, stir, then push the sausage pieces in so they sit half above the sauce.",
      "Cook uncovered at 180°C for 22 minutes, stirring at halfway.",
      "Check the sausages are browned and piping hot, then serve with jacket potatoes or toast."
    ] },

  // ───────────── BREAKFAST DUMPS ─────────────
  { id: "dumpgo2-tomato-egg-skillet", name: "Spiced Tomato & Pepper Egg Dump", emoji: "🍳", cat: "dumpgo", temp: 180, time: 22, prep: 5, serves: 2, turn: "shake",
    tags: ["dump & go", "vegetarian", "breakfast", "low-carb", "healthy"],
    ing: [["400ml", "passata"], ["1", "bell peppers", "diced"], ["1", "onion", "diced"], ["2 cloves", "garlic", "crushed"], ["1 tsp", "cumin"], ["1 tsp", "paprika"], ["½ tsp", "chilli flakes"], ["½ tsp", "salt"], ["4", "eggs"], ["50g", "?feta"], ["to serve", "?fresh coriander"]],
    steps: [
      "Use an oven-safe dish. Tip in the passata, pepper, onion, garlic, spices and salt and stir.",
      "Cook uncovered at 180°C for 14 minutes, stirring at halfway.",
      "Make 4 hollows in the sauce, crack in the eggs and cook for 7–8 minutes more until the whites are set but the yolks still soft (longer if you like them firm).",
      "Crumble over the feta and coriander and serve with toast or pitta for dipping."
    ] },
  { id: "dumpgo2-hash-brown-breakfast", name: "Hash Brown, Sausage & Egg Breakfast Dump", emoji: "🥓", cat: "dumpgo", temp: 190, time: 20, prep: 5, serves: 2, turn: "shake",
    tags: ["dump & go", "breakfast", "family", "high-protein"],
    ing: [["4", "sausages", "raw"], ["4", "hash browns", "frozen"], ["150g", "mushrooms", "halved"], ["2", "tomatoes", "halved"], ["2", "eggs"], ["1 tsp", "oil"], ["¼ tsp", "salt"]],
    steps: [
      "Straight in the basket or on a silicone liner: lay in the raw sausages, frozen hash browns, mushrooms and tomato halves (cut-side up), brushed with a little oil – single layer, don't overcrowd. Crack the eggs into a small greased ramekin and set it to one side.",
      "Cook at 190°C for 12 minutes, then turn the sausages and hash browns and add the egg ramekin.",
      "Cook for 8 minutes more until the egg whites are set and the sausages reach 75°C in the middle.",
      "Season and serve with toast and brown sauce."
    ] },

  // ───────────── DUMP CAKES & PUDDINGS ─────────────
  { id: "dumpgo2-cherry-chocolate-dump-cake", name: "Cherry & Chocolate Dump Cake", emoji: "🍒", cat: "dumpgo", temp: 160, time: 30, prep: 5, serves: 6, turn: "none",
    tags: ["dump & go", "vegetarian", "family", "trending"],
    ing: [["400g", "cherries", "frozen pitted, or a tin of cherry pie filling"], ["2 tbsp", "sugar"], ["120g", "self-raising flour"], ["80g", "sugar"], ["2 tbsp", "cocoa powder"], ["50g", "dark chocolate", "chopped"], ["100g", "butter", "fridge-cold, thinly sliced"], ["to serve", "?ice cream"]],
    steps: [
      "Use an oven-safe dish (about 20cm) that leaves a gap round the edge. Tip in the cherries and sprinkle over 2 tbsp sugar.",
      "Mix the flour, 80g sugar and cocoa together and scatter evenly over the fruit (don't stir). Scatter the chopped chocolate, then cover the top with the butter slices.",
      "Cook at 160°C for 30 minutes until the top is crisp and the cherries bubble up at the edges. If it browns too quickly, lay foil over and tuck it in tightly.",
      "Rest 10 minutes (the fruit is very hot) and serve with ice cream."
    ] },
  { id: "dumpgo2-apple-dump-cake", name: "Apple Cinnamon Dump Cake", emoji: "🍏", cat: "dumpgo", temp: 160, time: 30, prep: 8, serves: 6, turn: "none",
    tags: ["dump & go", "vegetarian", "family", "budget"],
    ing: [["4", "apples", "peeled, cored and thinly sliced"], ["1 tsp", "cinnamon"], ["2 tbsp", "brown sugar"], ["1 tbsp", "lemon", "juice"], ["120g", "self-raising flour"], ["80g", "sugar"], ["100g", "butter", "fridge-cold, thinly sliced"], ["to serve", "?custard"]],
    steps: [
      "Use an oven-safe dish that fits with a gap round the edge. Toss the apple slices with the cinnamon, brown sugar and lemon juice right in the dish and spread level.",
      "Mix the flour and sugar, scatter evenly over the apples without stirring, then cover the top with butter slices.",
      "Cook at 160°C for 30 minutes until golden and the apples are soft when poked with a knife. Cover with tucked-in foil if the top browns too fast.",
      "Rest 10 minutes and serve warm with custard."
    ] },
  { id: "dumpgo2-peach-melba-dump-cake", name: "Peach Melba Dump Cake", emoji: "🍑", cat: "dumpgo", temp: 160, time: 30, prep: 5, serves: 6, turn: "none",
    tags: ["dump & go", "vegetarian", "family"],
    ing: [["410g tin", "peaches", "slices, drained"], ["150g", "raspberries", "fresh or frozen"], ["120g", "self-raising flour"], ["80g", "sugar"], ["½ tsp", "vanilla extract"], ["100g", "butter", "fridge-cold, thinly sliced"], ["to serve", "?ice cream"]],
    steps: [
      "Use an oven-safe dish. Tip in the drained peaches and raspberries and spread out.",
      "Mix the flour and sugar, scatter evenly over the fruit, flick over the vanilla and cover the top with the butter slices – no stirring.",
      "Cook at 160°C for 30 minutes until golden and bubbling at the edges (cover with tucked-in foil if it browns too fast). Rest 10 minutes and serve with ice cream."
    ] },
  { id: "dumpgo2-pineapple-coconut-dump-cake", name: "Pineapple & Coconut Dump Cake", emoji: "🍍", cat: "dumpgo", temp: 160, time: 30, prep: 5, serves: 6, turn: "none",
    tags: ["dump & go", "vegetarian", "family"],
    ing: [["432g tin", "pineapple", "chunks, with 3 tbsp of the juice"], ["120g", "self-raising flour"], ["80g", "brown sugar"], ["40g", "desiccated coconut"], ["100g", "butter", "fridge-cold, thinly sliced"], ["to serve", "?cream"]],
    steps: [
      "Use an oven-safe dish. Tip in the pineapple chunks and 3 tbsp of juice.",
      "Mix the flour, brown sugar and coconut, scatter evenly on top and cover with the butter slices.",
      "Cook at 160°C for 30 minutes until golden and crisp (cover with tucked-in foil if it colours too quickly). Rest 10 minutes and serve with cream."
    ] },
  { id: "dumpgo2-frozen-berry-crumble", name: "Frozen Berry Dump Crumble", emoji: "🫐", cat: "dumpgo", temp: 170, time: 28, prep: 5, serves: 4, turn: "none",
    tags: ["dump & go", "vegetarian", "budget", "family"],
    ing: [["400g", "blueberries", "or frozen mixed berries, straight from frozen"], ["150g", "?blackberries", "frozen"], ["2 tbsp", "sugar"], ["1 tsp", "cornflour"], ["100g", "plain flour"], ["50g", "oats"], ["60g", "brown sugar"], ["75g", "butter", "melted"], ["to serve", "?custard"]],
    steps: [
      "Use an oven-safe dish. Tip in the frozen berries, sprinkle over the sugar and cornflour and give it a quick toss.",
      "In a bowl, stir the flour, oats, brown sugar and melted butter into clumps and scatter over the fruit.",
      "Cook at 170°C for 28 minutes until the top is golden and the fruit is bubbling at the edges. Cover with tucked-in foil if it browns too fast. Rest 5 minutes and serve with custard."
    ] },
  { id: "dumpgo2-chocolate-banana-dump-cake", name: "Chocolate Banana Dump Cake", emoji: "🍌", cat: "dumpgo", temp: 160, time: 28, prep: 5, serves: 6, turn: "none",
    tags: ["dump & go", "vegetarian", "kids", "budget"],
    ing: [["3", "bananas", "ripe, sliced"], ["2 tbsp", "chocolate spread"], ["120g", "self-raising flour"], ["80g", "brown sugar"], ["2 tbsp", "cocoa powder"], ["50g", "?dark chocolate", "chips or chopped"], ["100g", "butter", "fridge-cold, thinly sliced"], ["to serve", "?ice cream"]],
    steps: [
      "Use an oven-safe dish. Spread the banana slices over the base and dot over the chocolate spread.",
      "Mix the flour, brown sugar and cocoa, scatter evenly over the bananas, add the chocolate chips and cover the top with the butter slices.",
      "Cook at 160°C for 28 minutes until the top is crisp and the middle is gooey (cover with tucked-in foil if it darkens too quickly). Rest 10 minutes and serve warm with ice cream."
    ] },
  { id: "dumpgo2-nutella-raspberry-croissant", name: "Nutella & Raspberry Croissant Dump", emoji: "🥐", cat: "dumpgo", temp: 160, time: 20, prep: 5, serves: 4, turn: "none",
    tags: ["dump & go", "vegetarian", "breakfast", "leftovers"],
    ing: [["4", "croissants", "day-old, torn into chunks"], ["3 tbsp", "chocolate spread"], ["100g", "raspberries", "fresh or frozen"], ["3", "eggs"], ["250ml", "milk"], ["2 tbsp", "sugar"], ["½ tsp", "vanilla extract"], ["1 tsp", "?icing sugar"]],
    steps: [
      "Use a buttered oven-safe dish. Tip in the torn croissants, dot over spoonfuls of chocolate spread and scatter in the raspberries.",
      "Whisk the eggs, milk, sugar and vanilla in a jug, pour over and press the croissants down so they soak for 5 minutes.",
      "Cook at 160°C for 20 minutes until puffed and just set in the middle (no wobbly liquid egg). Cover with tucked-in foil if the top darkens too fast. Dust with icing sugar to serve."
    ] }
);
