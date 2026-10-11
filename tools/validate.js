// Checks every recipe file: node tools/validate.js
// Reports unknown ingredients, duplicate ids/names and bad fields.
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const files = [...html.matchAll(/<script src="(js\/[^"]+)"/g)].map(m => m[1]).filter(f => !/app\.js|timer\.js/.test(f));
// also include any recipes-*.js not yet listed in index.html
for (const f of fs.readdirSync(path.join(root, 'js'))) if (/^recipes-.*\.js$/.test(f) && !files.includes('js/' + f)) files.splice(files.indexOf('js/kitchen.js'), 0, 'js/' + f);
const ctx = { console, Math, Set, Map }; vm.createContext(ctx);
for (const f of files.filter(f => fs.existsSync(path.join(root, f)))) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8').replace(/^const (\w+) =/gm, 'var $1 ='), ctx, { filename: f });
vm.runInContext(`
const bad = []; const ids = new Map(); const names = new Map();
for (const r of RECIPES) {
  if (ids.has(r.id)) bad.push('duplicate id: ' + r.id); ids.set(r.id, 1);
  const n = r.name.toLowerCase(); if (names.has(n)) bad.push('duplicate name: ' + r.name); names.set(n, 1);
  if (!CATEGORIES.find(c => c.id === r.cat)) bad.push(r.id + ': unknown cat ' + r.cat);
  if (!['shake', 'flip', 'none'].includes(r.turn)) bad.push(r.id + ': bad turn');
  if (!(r.temp >= 140 && r.temp <= 200)) bad.push(r.id + ': temp ' + r.temp);
  if (!(r.time > 0 && r.time <= 90)) bad.push(r.id + ': time ' + r.time);
  if (!(r.serves > 0) || !(r.prep >= 0)) bad.push(r.id + ': serves/prep');
  if (!r.emoji || !r.tags.length || !r.steps.length || !r.ing.length) bad.push(r.id + ': missing fields');
  for (const i of r.ing) { const c = String(i[1]).replace(/^\\?/, ''); if (!Ingredients.known(c)) bad.push(r.id + ': unknown ingredient "' + c + '"'); }
}
const cats = {}; RECIPES.forEach(r => cats[r.cat] = (cats[r.cat] || 0) + 1);
console.log('Recipes:', RECIPES.length, JSON.stringify(cats));
console.log('Trending:', RECIPES.filter(r => r.tags.includes('trending')).length);
console.log(bad.length ? 'PROBLEMS:\\n' + bad.join('\\n') : 'All good ✅');
`, ctx);
