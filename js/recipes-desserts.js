'use strict';
/* More desserts: cakes, bakes, biscuits & classics – same format as recipes.js. */
RECIPES.push(
  // ───────────── COOKIES & BISCUITS ─────────────
  { id: "double-chocolate-cookies", name: "Double Chocolate Cookies", emoji: "🍪", cat: "desserts", temp: 170, time: 9, prep: 15, serves: 10, turn: "none",
    tags: ["baking", "chocolate", "kids", "vegetarian"],
    ing: [["100g", "butter", "softened"], ["100g", "brown sugar"], ["50g", "sugar"], ["1", "eggs"], ["150g", "plain flour"], ["30g", "cocoa powder"], ["½ tsp", "baking powder"], ["100g", "dark chocolate", "chopped into chunks"], ["1 tsp", "?vanilla extract"]],
    steps: [
      "Beat the butter and both sugars until creamy, then beat in the egg and vanilla.",
      "Stir in the flour, cocoa and baking powder, then fold in the chocolate chunks. Chill the dough for 15 minutes.",
      "Line the basket with a trimmed piece of baking paper (only once the dough is on it – never loose in a preheating air fryer). Roll into golf-ball sizes and space 4–5cm apart.",
      "Bake in batches at 170°C for 8–9 minutes until the edges are set but the middles still look soft.",
      "Leave on the paper for 5 minutes to firm up before moving to a rack."
    ] },
  { id: "white-choc-raspberry-cookies", name: "White Chocolate & Raspberry Cookies", emoji: "🍪", cat: "desserts", temp: 170, time: 9, prep: 15, serves: 10, turn: "none",
    tags: ["baking", "chocolate", "vegetarian", "afternoon tea"],
    ing: [["100g", "butter", "softened"], ["120g", "brown sugar"], ["1", "eggs"], ["1 tsp", "vanilla extract"], ["180g", "plain flour"], ["½ tsp", "baking powder"], ["100g", "white chocolate", "chopped"], ["80g", "raspberries", "fresh or frozen, torn into pieces"]],
    steps: [
      "Cream the butter and sugar, then beat in the egg and vanilla. Stir in the flour and baking powder.",
      "Fold in the white chocolate, then gently fold in the raspberries (use frozen straight from the freezer so they don't bleed too much).",
      "Chill for 15 minutes, then scoop 8–10 balls onto trimmed baking paper in the basket, well spaced.",
      "Bake at 170°C for 8–9 minutes until golden at the edges. Cool on the paper for 5 minutes before lifting off."
    ] },
  { id: "biscoff-stuffed-cookies", name: "Biscoff Stuffed Cookies", emoji: "🍪", cat: "desserts", temp: 170, time: 10, prep: 25, serves: 8, turn: "none",
    tags: ["baking", "trending", "vegetarian", "kids"],
    ing: [["8 tsp", "biscoff", "spread, frozen in blobs"], ["100g", "butter", "softened"], ["120g", "brown sugar"], ["1", "eggs"], ["200g", "plain flour"], ["½ tsp", "baking powder"], ["1 tsp", "cinnamon"], ["4", "?biscoff", "biscuits, crushed, for topping"]],
    steps: [
      "Spoon 8 teaspoons of Biscoff spread onto baking paper and freeze for 30 minutes until firm.",
      "Cream the butter and sugar, beat in the egg, then stir in the flour, baking powder and cinnamon.",
      "Split the dough into 8, flatten each piece, wrap around a frozen Biscoff blob and seal completely. Top with crushed biscuits.",
      "Place 4 at a time on trimmed baking paper in the basket and bake at 170°C for 9–10 minutes.",
      "Cool for 10 minutes before eating – the middle is molten and very hot."
    ] },
  { id: "crookies", name: "Crookies", emoji: "🥐", cat: "desserts", temp: 160, time: 10, prep: 10, serves: 4, turn: "none",
    tags: ["baking", "trending", "chocolate", "quick"],
    ing: [["4", "croissants", "day-old is best"], ["60g", "butter", "softened"], ["70g", "brown sugar"], ["1", "eggs", "use half, beaten"], ["100g", "plain flour"], ["60g", "dark chocolate", "chopped"], ["1 tbsp", "?icing sugar", "for dusting"]],
    steps: [
      "Make a quick cookie dough (or use 300g shop-bought cookie dough): cream the butter and sugar, beat in half the egg, then stir in the flour and chocolate.",
      "Slice each croissant open like a sandwich. Spread a thin layer of dough inside, close, then press a thick layer of dough over the top.",
      "Sit the croissants in the basket with space between them. Bake at 160°C for 8–10 minutes until the cookie top is golden and just set – cover loosely with foil tucked in tightly if the croissant browns too fast.",
      "Cool for 5 minutes, dust with icing sugar and eat warm."
    ] },
  { id: "oat-raisin-cookies", name: "Oat & Raisin Cookies", emoji: "🍪", cat: "desserts", temp: 170, time: 10, prep: 15, serves: 10, turn: "none",
    tags: ["baking", "british", "vegetarian", "afternoon tea"],
    ing: [["100g", "butter", "softened"], ["100g", "brown sugar"], ["1", "eggs"], ["100g", "plain flour"], ["½ tsp", "baking powder"], ["1 tsp", "cinnamon"], ["120g", "oats"], ["80g", "raisins"]],
    steps: [
      "Cream the butter and sugar, then beat in the egg.",
      "Stir in the flour, baking powder and cinnamon, then the oats and raisins.",
      "Roll into balls, flatten slightly and place on trimmed baking paper in the basket, 4–5cm apart.",
      "Bake in batches at 170°C for 9–10 minutes until golden. Cool on the paper for 5 minutes, then on a rack."
    ] },
  { id: "homemade-ginger-biscuits", name: "Homemade Ginger Biscuits", emoji: "🍪", cat: "desserts", temp: 170, time: 9, prep: 15, serves: 14, turn: "none",
    tags: ["baking", "british", "vegetarian", "afternoon tea"],
    ing: [["100g", "self-raising flour"], ["2 tsp", "ginger", "ground"], ["½ tsp", "?cinnamon"], ["½ tsp", "baking powder", "or bicarbonate of soda"], ["50g", "butter"], ["50g", "sugar"], ["2 tbsp", "golden syrup"]],
    steps: [
      "Gently melt the butter, sugar and golden syrup together, then stir into the flour, ginger, cinnamon and baking powder to make a soft dough.",
      "Roll into walnut-sized balls and flatten slightly – they spread, so place only 5–6 on trimmed baking paper in the basket.",
      "Bake at 170°C for 8–9 minutes until cracked and golden.",
      "Leave on the paper for 5 minutes (they crisp as they cool), then move to a rack."
    ] },
  { id: "millionaires-shortbread", name: "Millionaire's Shortbread", emoji: "🍫", cat: "desserts", temp: 160, time: 20, prep: 30, serves: 9, turn: "none",
    tags: ["baking", "british", "chocolate", "afternoon tea"],
    ing: [["150g", "plain flour"], ["50g", "sugar"], ["100g", "butter", "for the base"], ["397g tin", "condensed milk"], ["100g", "butter", "for the caramel"], ["100g", "brown sugar"], ["2 tbsp", "golden syrup"], ["150g", "dark chocolate"], ["30g", "?white chocolate", "for drizzling"]],
    steps: [
      "Rub the flour, sugar and 100g butter into a dough. Press into a lined 18cm square (or 20cm round) tin that fits the basket with room for air around it. Prick all over.",
      "Bake at 160°C for 18–20 minutes until pale golden. Cool in the tin.",
      "For the caramel, melt the butter, brown sugar, syrup and condensed milk in a pan, then simmer, stirring constantly, for 5–7 minutes until thick and fudge-coloured. Pour over the base and chill for 1 hour.",
      "Melt the chocolate, spread over the caramel, drizzle with white chocolate and chill until set. Cut into squares with a hot knife."
    ] },
  { id: "brownie-cookies", name: "Brownie Cookies", emoji: "🍪", cat: "desserts", temp: 170, time: 8, prep: 15, serves: 10, turn: "none",
    tags: ["baking", "chocolate", "vegetarian"],
    ing: [["150g", "dark chocolate"], ["40g", "butter"], ["2", "eggs"], ["120g", "brown sugar"], ["70g", "plain flour"], ["15g", "cocoa powder"], ["½ tsp", "baking powder"], ["50g", "?white chocolate", "chopped"]],
    steps: [
      "Melt 100g of the dark chocolate with the butter. Whisk the eggs and sugar for 3–4 minutes until thick and pale.",
      "Fold in the melted chocolate, then the flour, cocoa and baking powder, and the rest of the chocolate, chopped. Rest for 10 minutes to thicken.",
      "Spoon 5 blobs onto trimmed baking paper in the basket, well apart.",
      "Bake at 170°C for 7–8 minutes until shiny and crackled on top. Leave on the paper until cool – they're fragile while warm."
    ] },
  { id: "cookie-dough-bites", name: "Cookie Dough Bites", emoji: "🍪", cat: "desserts", temp: 170, time: 6, prep: 15, serves: 6, turn: "none",
    tags: ["baking", "trending", "kids", "quick"],
    ing: [["80g", "butter", "softened"], ["80g", "brown sugar"], ["1 tbsp", "milk"], ["1 tsp", "vanilla extract"], ["120g", "plain flour"], ["70g", "dark chocolate", "chips or chopped"], ["2 tbsp", "?chocolate spread", "for dipping"]],
    steps: [
      "Cream the butter and sugar, then mix in the milk and vanilla. Stir in the flour and chocolate.",
      "Roll into 18–20 small balls (about a heaped teaspoon each) and chill for 15 minutes.",
      "Place on trimmed baking paper in the basket with a little space between and bake at 170°C for 5–6 minutes – they should be golden underneath but still soft and gooey inside.",
      "Cool for 5 minutes and serve with warm chocolate spread for dipping."
    ] },
  { id: "coconut-macaroons", name: "Coconut Macaroons", emoji: "🥥", cat: "desserts", temp: 150, time: 12, prep: 10, serves: 12, turn: "none",
    tags: ["baking", "gluten-free", "vegetarian", "afternoon tea"],
    ing: [["2", "eggs", "whites only"], ["100g", "sugar"], ["150g", "desiccated coconut"], ["½ tsp", "vanilla extract"], ["50g", "?dark chocolate", "melted, for dipping"], ["6", "?cherries", "glacé or fresh, halved, for the tops"]],
    steps: [
      "Whisk the egg whites until frothy, then stir in the sugar, coconut and vanilla to a sticky mixture.",
      "Shape into 12 little pyramids with damp hands and put on trimmed baking paper in the basket. Top with a cherry half if you like.",
      "Bake at 150°C for 10–12 minutes until the tips are golden – cover loosely with foil tucked in tightly if they brown too fast.",
      "Cool completely, then dip the bases in melted chocolate and leave to set."
    ] },

  // ───────────── CUPCAKES ─────────────
  { id: "chocolate-cupcakes", name: "Chocolate Cupcakes", emoji: "🧁", cat: "desserts", temp: 160, time: 14, prep: 15, serves: 8, turn: "none",
    tags: ["baking", "chocolate", "kids", "vegetarian"],
    ing: [["100g", "self-raising flour"], ["20g", "cocoa powder"], ["100g", "sugar"], ["100g", "butter", "softened"], ["2", "eggs"], ["2 tbsp", "milk"], ["100g", "butter", "for the icing"], ["180g", "icing sugar"], ["25g", "cocoa powder", "for the icing"]],
    steps: [
      "Beat the flour, cocoa, sugar, butter, eggs and milk together until smooth.",
      "Divide between 8 silicone cupcake cases (or paper cases inside foil or silicone ones so they keep their shape), two-thirds full. Stand them in the basket with gaps for air.",
      "Bake at 160°C for 12–14 minutes until a skewer comes out clean.",
      "Cool completely, then beat the icing butter, icing sugar, cocoa and a splash of milk and pipe or swirl on top."
    ] },
  { id: "vanilla-sprinkle-cupcakes", name: "Vanilla Cupcakes with Sprinkles", emoji: "🧁", cat: "desserts", temp: 160, time: 13, prep: 15, serves: 8, turn: "none",
    tags: ["baking", "kids", "vegetarian", "afternoon tea"],
    ing: [["100g", "self-raising flour"], ["100g", "sugar"], ["100g", "butter", "softened"], ["2", "eggs"], ["1 tsp", "vanilla extract"], ["1 tbsp", "milk"], ["100g", "butter", "for the buttercream"], ["200g", "icing sugar"], ["2 tbsp", "sprinkles"]],
    steps: [
      "Beat the flour, sugar, butter, eggs, vanilla and milk together until pale and smooth.",
      "Spoon into 8 silicone cupcake cases (or doubled paper cases), two-thirds full, and stand them in the basket with space around each.",
      "Bake at 160°C for 12–13 minutes until risen, golden and springy; a skewer should come out clean.",
      "Cool completely, top with vanilla buttercream (butter beaten with icing sugar and a drop of vanilla) and plenty of sprinkles."
    ] },
  { id: "lemon-curd-cupcakes", name: "Lemon Curd Cupcakes", emoji: "🍋", cat: "desserts", temp: 160, time: 13, prep: 20, serves: 8, turn: "none",
    tags: ["baking", "vegetarian", "afternoon tea"],
    ing: [["100g", "self-raising flour"], ["100g", "sugar"], ["100g", "butter", "softened"], ["2", "eggs"], ["1", "lemon", "zest and juice"], ["4 tbsp", "lemon curd"], ["150g", "cream cheese", "full-fat, for the frosting"], ["100g", "icing sugar"]],
    steps: [
      "Beat the flour, sugar, butter, eggs and lemon zest with 1 tbsp lemon juice until smooth.",
      "Divide between 8 silicone cupcake cases in the basket, leaving gaps, and bake at 160°C for 12–13 minutes until a skewer comes out clean.",
      "Cool completely, then cut a small cone from the top of each, fill with lemon curd and replace the lid.",
      "Beat the cream cheese and icing sugar with a squeeze of lemon, swirl on top and finish with a little more curd."
    ] },
  { id: "red-velvet-cupcakes", name: "Red Velvet-Style Cupcakes", emoji: "❤️", cat: "desserts", temp: 160, time: 14, prep: 20, serves: 8, turn: "none",
    tags: ["baking", "vegetarian", "afternoon tea"],
    ing: [["110g", "self-raising flour"], ["10g", "cocoa powder"], ["100g", "sugar"], ["60g", "butter", "softened"], ["1", "eggs"], ["80ml", "milk", "with 1 tsp lemon juice stirred in"], ["1 tsp", "vanilla extract"], ["150g", "cream cheese", "full-fat"], ["120g", "icing sugar"]],
    steps: [
      "Beat the butter and sugar, then the egg and vanilla. Add red gel food colouring now if using (gel gives a deep red; liquid colouring just turns it pink-brown).",
      "Fold in the flour and cocoa, alternating with the soured milk, until smooth.",
      "Spoon into 8 silicone cupcake cases in the basket with room for air and bake at 160°C for 13–14 minutes until a skewer comes out clean.",
      "Cool completely and top with cream cheese frosting (cream cheese beaten with icing sugar). Crumble a spare cupcake over the top if you like."
    ] },

  // ───────────── CAKES & LOAVES ─────────────
  { id: "coffee-walnut-mini-cake", name: "Coffee & Walnut Mini Cake", emoji: "☕", cat: "desserts", temp: 155, time: 28, prep: 20, serves: 6, turn: "none",
    tags: ["baking", "british", "vegetarian", "afternoon tea"],
    ing: [["125g", "self-raising flour"], ["125g", "brown sugar"], ["125g", "butter", "softened"], ["2", "eggs"], ["2 tsp", "coffee", "instant, dissolved in 1 tbsp hot water"], ["50g", "mixed nuts", "walnuts, chopped"], ["75g", "butter", "for the icing"], ["150g", "icing sugar"], ["1 tsp", "coffee", "instant, dissolved, for the icing"]],
    steps: [
      "Beat the flour, sugar, butter, eggs and coffee until smooth, then fold in most of the walnuts.",
      "Spoon into a greased, lined 15–18cm round cake tin that fits the basket with a gap all round for air.",
      "Bake at 155°C for 25–28 minutes. Cover with foil tucked in tightly if the top browns too quickly; it's done when a skewer comes out clean.",
      "Cool completely, then top with coffee buttercream and the remaining walnuts."
    ] },
  { id: "chocolate-fudge-cake", name: "Chocolate Fudge Cake", emoji: "🎂", cat: "desserts", temp: 155, time: 30, prep: 20, serves: 6, turn: "none",
    tags: ["baking", "chocolate", "vegetarian", "kids"],
    ing: [["125g", "self-raising flour"], ["30g", "cocoa powder"], ["125g", "brown sugar"], ["125g", "butter", "softened"], ["2", "eggs"], ["3 tbsp", "milk"], ["100g", "dark chocolate", "for the frosting"], ["50g", "butter", "for the frosting"], ["100g", "icing sugar"], ["2 tbsp", "golden syrup"]],
    steps: [
      "Beat the flour, cocoa, sugar, butter, eggs and milk until smooth and spoon into a greased, lined 15–18cm round tin that fits the basket with room around it.",
      "Bake at 155°C for 28–30 minutes, covering with foil tucked in tightly after 20 minutes if the top is getting dark. A skewer should come out with just a few moist crumbs.",
      "Cool in the tin for 10 minutes, then on a rack until completely cold.",
      "Melt the chocolate, butter and syrup together, beat in the icing sugar and spread thickly over the cake. Leave to set a little before slicing."
    ] },
  { id: "lemon-blueberry-loaf", name: "Lemon & Blueberry Loaf", emoji: "🫐", cat: "desserts", temp: 155, time: 35, prep: 15, serves: 8, turn: "none",
    tags: ["baking", "vegetarian", "afternoon tea"],
    ing: [["175g", "self-raising flour"], ["150g", "sugar"], ["125g", "butter", "softened"], ["2", "eggs"], ["3 tbsp", "milk"], ["1", "lemon", "zest and juice"], ["125g", "blueberries"], ["100g", "icing sugar", "for the glaze"]],
    steps: [
      "Beat the flour, sugar, butter, eggs, milk and lemon zest until smooth. Toss the blueberries in a spoon of flour and fold in.",
      "Spoon into a lined 1lb (450g) loaf tin that fits the basket with space for air around it.",
      "Bake at 155°C for 30–35 minutes. Cover with foil tucked in tightly after 15–20 minutes so the top doesn't burn; done when a skewer comes out clean.",
      "Cool completely, then drizzle with icing sugar mixed with lemon juice. Slice once the glaze has set."
    ] },

  // ───────────── CHEESECAKES ─────────────
  { id: "mini-basque-cheesecakes", name: "Mini Basque Burnt Cheesecakes", emoji: "🍰", cat: "desserts", temp: 200, time: 14, prep: 10, serves: 4, turn: "none",
    tags: ["baking", "trending", "gluten-free", "vegetarian"],
    ing: [["300g", "cream cheese", "full-fat, room temperature"], ["80g", "sugar"], ["2", "eggs"], ["100ml", "cream", "double"], ["1 tbsp", "plain flour", "or cornflour for gluten-free"], ["1 tsp", "vanilla extract"]],
    steps: [
      "Line 4 ramekins with scrunched-up squares of baking paper, letting the paper stick up above the rim.",
      "Whisk the cream cheese and sugar until smooth, then whisk in the eggs one at a time, the cream, flour and vanilla.",
      "Pour into the ramekins and stand them in the basket with gaps between. Bake at 200°C for 12–14 minutes until deeply caramelised on top but still very wobbly in the middle.",
      "Cool to room temperature, then chill for at least 2 hours – they set as they cool."
    ] },
  { id: "new-york-mini-cheesecakes", name: "New York-Style Mini Cheesecakes", emoji: "🍰", cat: "desserts", temp: 150, time: 18, prep: 20, serves: 6, turn: "none",
    tags: ["baking", "vegetarian", "party"],
    ing: [["100g", "digestive biscuits", "crushed"], ["40g", "butter", "melted"], ["300g", "cream cheese", "full-fat, room temperature"], ["70g", "sugar"], ["1", "eggs"], ["75g", "?sour cream"], ["1 tsp", "vanilla extract"], ["1", "?lemon", "zest only"], ["100g", "?strawberries", "to serve"]],
    steps: [
      "Mix the biscuits and butter and press into 6 silicone muffin cases or small ramekins lined with paper.",
      "Beat the cream cheese, sugar, egg, sour cream, vanilla and lemon zest just until smooth – don't over-whisk or they crack.",
      "Spoon over the bases, stand in the basket with room for air and bake at 150°C for 16–18 minutes until set at the edges with a slight wobble in the middle.",
      "Leave in the switched-off air fryer for 10 minutes, then cool and chill for at least 3 hours. Top with sliced strawberries."
    ] },

  // ───────────── TARTS & PASTRY ─────────────
  { id: "mini-bakewell-tarts", name: "Mini Bakewell Tarts", emoji: "🍒", cat: "desserts", temp: 160, time: 16, prep: 20, serves: 12, turn: "none",
    tags: ["baking", "british", "vegetarian", "afternoon tea"],
    ing: [["320g", "shortcrust pastry", "ready-rolled"], ["4 tbsp", "jam", "raspberry or cherry"], ["50g", "butter", "softened"], ["50g", "sugar"], ["1", "eggs"], ["50g", "ground almonds"], ["15g", "self-raising flour"], ["½ tsp", "?vanilla extract", "or almond extract"], ["80g", "?icing sugar", "for the icing"], ["6", "?cherries", "glacé, halved"]],
    steps: [
      "Cut 12 circles of pastry and press into a silicone or foil mini muffin tray (or foil cases) that fits your basket. Add ½ tsp jam to each.",
      "Beat the butter, sugar, egg, almonds, flour and extract into a frangipane and spoon over the jam, two-thirds full.",
      "Bake in batches at 160°C for 14–16 minutes until golden and springy.",
      "Cool completely, then top with thick water icing and half a cherry."
    ] },
  { id: "treacle-tart", name: "Treacle Tart", emoji: "🥧", cat: "desserts", temp: 160, time: 25, prep: 15, serves: 6, turn: "none",
    tags: ["baking", "british", "vegetarian"],
    ing: [["320g", "shortcrust pastry", "ready-rolled"], ["250g", "golden syrup"], ["75g", "breadcrumbs", "fresh white"], ["1", "lemon", "zest and 1 tbsp juice"], ["1", "eggs", "beaten"], ["2 tbsp", "cream", "double"], ["150ml", "?custard", "to serve"]],
    steps: [
      "Line an 18cm loose-bottomed tart tin (that fits the basket with room around it) with the pastry and prick the base. Bake blind at 170°C for 8 minutes with baking paper and baking beans weighed down on top.",
      "Warm the golden syrup until runny, then stir in the breadcrumbs, lemon zest and juice, egg and cream.",
      "Pour into the pastry case and bake at 160°C for 22–25 minutes until set with a slight wobble. Cover the pastry edges with foil tucked in tightly if they darken.",
      "Cool for at least 20 minutes before slicing. Serve warm with custard or cream."
    ] },
  { id: "custard-tarts", name: "Custard Tarts", emoji: "🥧", cat: "desserts", temp: 160, time: 18, prep: 20, serves: 6, turn: "none",
    tags: ["baking", "british", "vegetarian", "afternoon tea"],
    ing: [["320g", "shortcrust pastry", "ready-rolled"], ["2", "eggs", "yolks, plus 1 whole egg"], ["40g", "sugar"], ["200ml", "milk"], ["100ml", "cream", "double"], ["1 tsp", "vanilla extract"], ["1 pinch", "nutmeg", "freshly grated"]],
    steps: [
      "Cut 6 large pastry circles and press into a silicone or foil muffin tray (or deep foil cases) that fits your basket.",
      "Whisk the yolks, whole egg and sugar, then whisk in the warmed milk, cream and vanilla. Strain into a jug.",
      "Stand the cases in the basket, then carefully pour in the custard almost to the top and grate over nutmeg.",
      "Bake at 160°C for 16–18 minutes until just set with a slight wobble. Cool completely in the tray before removing."
    ] },
  { id: "air-fryer-mince-pies", name: "Mince Pies", emoji: "🎄", cat: "desserts", temp: 180, time: 12, prep: 20, serves: 12, turn: "none",
    tags: ["baking", "british", "christmas", "vegetarian"],
    ing: [["2 × 320g", "shortcrust pastry", "ready-rolled"], ["300g", "mincemeat"], ["1", "eggs", "beaten, or milk to glaze"], ["1 tbsp", "?sugar", "for sprinkling"], ["1 tbsp", "?icing sugar", "for dusting"], ["1", "?oranges", "zest, stirred into the mincemeat"]],
    steps: [
      "Cut 12 bases with a fluted cutter and press into foil cases or a silicone mini-pie tray that fits the basket. Fill each with a heaped teaspoon of mincemeat.",
      "Top with smaller pastry lids or stars, pressing the edges. Brush with egg and sprinkle with sugar.",
      "Bake in batches at 180°C for 10–12 minutes until golden.",
      "Cool for 10 minutes before lifting out (the filling is very hot). Dust with icing sugar."
    ] },
  { id: "eccles-style-cakes", name: "Eccles-Style Cakes", emoji: "🥮", cat: "desserts", temp: 190, time: 12, prep: 20, serves: 8, turn: "none",
    tags: ["baking", "british", "vegetarian", "afternoon tea"],
    ing: [["320g", "puff pastry", "ready-rolled"], ["150g", "raisins", "or currants"], ["30g", "butter", "melted"], ["40g", "brown sugar"], ["½ tsp", "mixed spice"], ["1", "?oranges", "zest"], ["1", "eggs", "white, beaten"], ["2 tbsp", "sugar", "for sprinkling"]],
    steps: [
      "Mix the raisins, melted butter, brown sugar, mixed spice and orange zest.",
      "Cut 8 circles about 10cm across. Put a spoonful of filling in the middle of each, gather the edges and pinch to seal, then flip and flatten gently with a rolling pin until the fruit just shows through.",
      "Brush with egg white, sprinkle with sugar and cut 2–3 slits in the top. Place on trimmed baking paper in the basket with space between.",
      "Bake at 190°C for 10–12 minutes until puffed and deep golden. Cool on a rack."
    ] },

  // ───────────── PUDDINGS ─────────────
  { id: "chocolate-lava-ramekin-cakes", name: "Chocolate Lava Ramekin Cakes", emoji: "🌋", cat: "desserts", temp: 180, time: 9, prep: 10, serves: 2, turn: "none",
    tags: ["baking", "chocolate", "vegetarian", "quick"],
    ing: [["60g", "dark chocolate"], ["50g", "butter", "plus extra for greasing"], ["1", "eggs"], ["40g", "sugar"], ["20g", "plain flour"], ["2", "?chocolate bars", "squares of milk chocolate for the middle"], ["2 scoops", "?ice cream", "to serve"]],
    steps: [
      "Grease 2 ramekins well with butter and dust with a little cocoa or flour.",
      "Melt the chocolate and butter. Whisk the egg and sugar until frothy, then whisk in the chocolate and fold in the flour.",
      "Half-fill each ramekin, press in a square of chocolate, then cover with the rest of the mix. Stand in the basket with room for air.",
      "Bake at 180°C for 8–9 minutes until risen and firm on top but wobbly in the centre. Serve straight away in the ramekins with ice cream."
    ] }
);
