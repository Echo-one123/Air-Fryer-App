# 🍟 Air Fryer Kitchen

An air fryer recipe app you can install on your phone. It's a Progressive Web App (PWA) in plain HTML, CSS and JavaScript, with no build step and no backend. It runs straight from GitHub Pages and works offline.

## Features

- **Search**: 51 built-in recipes covering chicken, beef, pork, lamb, fish, veggie, sides, snacks and desserts. Search matches recipe names, ingredients and tags, and understands synonyms ("shrimp" finds prawns). Category chips filter the list.
- **My Kitchen**
  - Add what you've got with autocomplete or quick-add chips. It understands synonyms: *steak* → beef steak, *mince* → beef mince, *chips* → potatoes, *shrimp* → prawns, and many more. You can add several at once, e.g. `chicken, broccoli and soy`.
  - **Recipe idea**: picks a protein, up to 2 veg and a flavour style based on your sauces (honey soy, sweet chilli, BBQ, lemon garlic, peri-peri, teriyaki, Cajun, tikka and more). It works out the timings so everything finishes together ("put the potatoes in first, add the chicken after 4 minutes"), and includes safe internal temperatures for meat.
  - **🔀 Another idea** shuffles the combination. The **Flavour** dropdown lets you choose a style.
  - A ranked list of database recipes you can make, each with a "Missing: x, y" line.
- **Recipe page**: ingredients are marked ✅ (you have it) or 🛒 (need to buy). Tap an ingredient to change it, and tap a step to tick it off. The built-in timer beeps and vibrates, reminds you to shake the basket at halfway, and gives step prompts for "My Kitchen" recipes. Tap the ♥ to save a recipe.
- **Saved**: your favourite recipes, including any recipe ideas you've saved.
- Light and dark mode. By default it follows your phone, and you can change it with the 🌗 button. Everything is saved in `localStorage` on your phone.

## Project layout

```
index.html          app shell + bottom tab bar
styles.css          mobile-first styles, light/dark themes
manifest.json       PWA manifest (name, colours, icons)
sw.js               service worker (offline cache)
js/ingredients.js   ingredient catalogue + synonyms + autocomplete
js/recipes.js       the recipe database
js/kitchen.js       recipe-idea generator, timings, safe temps, ranking
js/timer.js         cooking timer (beeps, vibration, halfway reminders)
js/app.js           UI, routing, storage
icons/              PNG icons (192, 512, maskable 512, 180 apple-touch-icon)
tools/make_icons.py regenerates the icons (needs Python + Pillow)
```

To try it on your computer, run `python3 -m http.server` in this folder and open <http://localhost:8000>. The service worker needs `http://localhost` or `https://`. It won't work if you double-click `index.html`.

---

## Putting it on GitHub Pages (step by step)

### A. If you're starting from scratch

1. **Create a GitHub account** at <https://github.com/signup> (it's free).
2. **Create a repository:** click **+** (top right) → **New repository**.
   - Name: `Air-Fryer-App` (any name works).
   - Make it **Public**. GitHub Pages is free for public repos.
   - Don't tick "Add a README" (this project already has one).
   - Click **Create repository**.
3. **Push the code** from this folder in a terminal:
   ```bash
   git init
   git add .
   git commit -m "Air fryer recipe app"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/Air-Fryer-App.git
   git push -u origin main
   ```
   If it asks for a password, use a **personal access token** (GitHub → Settings → Developer settings → Personal access tokens). Your normal password won't work. The GitHub Desktop app is an easier alternative: **File → Add local repository → Publish repository**.
4. **Turn on GitHub Pages:** in the repo, go to **Settings** → **Pages** (left sidebar).
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` and folder `/ (root)` → **Save**
5. Wait 1–2 minutes and refresh the Pages settings. You'll see **"Your site is live at https://YOUR-USERNAME.github.io/Air-Fryer-App/"**.

### B. Updating it later

Edit the files, then `git add . && git commit -m "…" && git push`. Pages redeploys automatically.
**Important:** bump `VERSION` in `sw.js` (e.g. `'v1'` → `'v2'`) whenever you change a file. Otherwise phones keep showing the cached old version. Close and reopen the app twice to pick up the update.

---

## Adding it to your phone's home screen

Open the GitHub Pages link on your phone first.

**iPhone (Safari):**
1. Open the link in **Safari**. Chrome on iPhone can do this too on newer iOS versions, but Safari is the most reliable.
2. Tap the **Share** button (the square with an arrow pointing up).
3. Scroll down and tap **Add to Home Screen**, then **Add**.
4. Open it from the new 🍟 icon. It runs full-screen like a normal app and works offline.

**Android (Chrome):**
1. Open the link in **Chrome**.
2. Tap **Install app** if a banner pops up. If not, tap the **⋮** menu → **Add to Home screen** / **Install app**.
3. Tap **Install**. The icon appears on your home screen and in your app drawer.

Open the app once while online so it can save itself for offline use.

## Good to know

- **Timer & locked screens:** phones pause web pages when the screen locks, so keep the recipe open while cooking. The app asks the phone to keep the screen awake while the timer runs, on phones that support it. If you leave and come back, the timer catches up with the real time.
- **iPhone:** iOS doesn't let websites vibrate, and the **silent switch mutes the beeps**. Tap Start once so iOS allows the sound.
- Your saved recipes and kitchen list live on your phone (`localStorage`). If you clear Safari/Chrome website data, they're deleted.
- Cooking times are guides because air fryers vary. Always check meat with a thermometer.
