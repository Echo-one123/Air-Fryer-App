'use strict';

/* ───────────────────────── Storage ───────────────────────── */
const Store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { toast('Could not save – storage is full or blocked'); }
  }
};

const state = {
  pantry: Store.get('af.pantry', []),
  saved: Store.get('af.saved', []),
  custom: Store.get('af.custom', {}),       // saved generated recipes, by id
  idea: Store.get('af.lastIdea', null),      // the current "My Kitchen" suggestion
  flavour: Store.get('af.flavour', 'auto'),
  theme: Store.get('af.theme', 'auto'),
  cat: 'all',
  query: '',
  ticks: Store.get('af.ticks', {}),          // ticked-off steps per recipe
  view: 'search',
  scroll: {}
};

const savePantry = () => Store.set('af.pantry', state.pantry);
const saveSaved = () => { Store.set('af.saved', state.saved); Store.set('af.custom', state.custom); };

/* ───────────────────────── Helpers ───────────────────────── */
const $ = sel => document.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const capFirst = s => s ? s[0].toUpperCase() + s.slice(1) : s;
const nice = n => capFirst(Ingredients.pretty(n));
const fmt = secs => { const m = Math.floor(secs / 60), s = secs % 60; return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`; };
const catOf = id => CATEGORIES.find(c => c.id === id);
const pantrySet = () => new Set(state.pantry);
const isSaved = id => state.saved.includes(id);
const GROUP_EMOJI = { meat: '🥩', veg: '🥕', sauce: '🥫', spice: '🌿', dairy: '🧀', cupboard: '🥖', freezer: '🧊', other: '🛒' };

function getRecipe(id) {
  return RECIPES.find(r => r.id === id) || state.custom[id] || (state.idea && state.idea.id === id ? state.idea : null);
}

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

function ingredientStatus(recipe) {
  const p = pantrySet();
  const rows = recipe.ing.map(([qty, raw, note]) => {
    const optional = raw.startsWith('?');
    const name = raw.replace(/^\?/, '');
    const staple = Ingredients.isStaple(name);
    return { qty, name, note, optional, staple, have: staple || p.has(name) };
  });
  const core = rows.filter(r => !r.optional && !r.staple);
  const uniq = [...new Map(core.map(r => [r.name, r])).values()];
  return { rows, have: uniq.filter(r => r.have).length, total: uniq.length, missing: uniq.filter(r => !r.have).map(r => r.name) };
}

/* ───────────────────────── Theme ───────────────────────── */
function applyTheme() {
  const root = document.documentElement;
  if (state.theme === 'auto') root.removeAttribute('data-theme');
  else root.dataset.theme = state.theme;
  const icons = { auto: '🌗', light: '☀️', dark: '🌙' };
  const labels = { auto: 'follows your phone', light: 'light', dark: 'dark' };
  $('#themeIcon').textContent = icons[state.theme];
  $('#themeBtn').title = `Theme: ${labels[state.theme]}`;
  $('#themeBtn').setAttribute('aria-label', `Theme: ${labels[state.theme]}. Tap to change.`);
}
$('#themeBtn').addEventListener('click', () => {
  const order = ['auto', 'light', 'dark'];
  state.theme = order[(order.indexOf(state.theme) + 1) % order.length];
  Store.set('af.theme', state.theme);
  applyTheme();
  toast({ auto: 'Theme follows your phone', light: 'Light mode', dark: 'Dark mode' }[state.theme]);
});

/* ───────────────────────── Recipe cards ───────────────────────── */
function recipeCard(r, { missing = null, showHave = true } = {}) {
  const c = catOf(r.cat);
  let extra = '';
  if (missing) {
    extra = missing.length
      ? `<p class="missing">🛒 Missing: ${esc(missing.slice(0, 4).map(nice).join(', '))}${missing.length > 4 ? ` +${missing.length - 4} more` : ''}</p>`
      : `<p class="missing ok">✅ You've got everything!</p>`;
  } else if (showHave && state.pantry.length) {
    const st = ingredientStatus(r);
    extra = `<p class="have-line">✅ You have ${st.have} of ${st.total}</p>`;
  }
  return `
    <a class="card" href="#recipe/${esc(r.id)}">
      <div class="card-emoji" aria-hidden="true">${r.emoji}</div>
      <div class="card-body">
        <h3>${r.tags.includes('trending') ? '<span class="hot" title="Trending">🔥</span> ' : ''}${esc(r.name)}${isSaved(r.id) ? ' <span class="saved-dot" aria-label="Saved">♥</span>' : ''}</h3>
        <p class="meta">${c ? `${c.label} · ` : ''}${r.temp}°C · ${r.time} min · Serves ${r.serves}</p>
        ${extra}
        <div class="tags">${r.tags.filter(t => t !== 'trending').slice(0, 3).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>
    </a>`;
}

/* ───────────────────────── SEARCH ───────────────────────── */
function renderCatChips() {
  const chips = [{ id: 'all', label: 'All', emoji: '🍽️' }, { id: 'trending', label: 'Trending', emoji: '🔥' }, ...CATEGORIES];
  $('#catChips').innerHTML = chips.map(c =>
    `<button class="chip ${state.cat === c.id ? 'active' : ''}" data-cat="${c.id}" aria-pressed="${state.cat === c.id}">${c.emoji} ${c.label}</button>`
  ).join('');
}

function searchRecipes(query, cat) {
  const q = Ingredients.clean(query).replace(/\band\b/g, '&');
  const tokens = q.split(' ').filter(t => t && t !== '&');
  const whole = q ? Ingredients.resolveExact(q) : null;
  // Best matches first: whole phrase in the name, then every word in the name, then the rest.
  const rank = r => {
    const n = r.name.toLowerCase().replace(/[^a-z0-9& ]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (!q) return (cat === 'trending' && !VIRAL_IDS.has(r.id)) || (cat === 'wraps' && r.cat !== 'wraps') ? 1 : 0;
    if (n === q) return 0;
    if (n.startsWith(q)) return 1;
    if (n.includes(q)) return 2;
    if (tokens.every(t => n.includes(t))) return 3;
    return 4;
  };
  return RECIPES.filter(r => {
    if (cat === 'trending') { if (!r.tags.includes('trending')) return false; }
    else if (cat === 'wraps') { if (r.cat !== 'wraps' && !r.tags.includes('wraps')) return false; }
    else if (cat !== 'all' && r.cat !== cat) return false;
    if (!tokens.length) return true;
    const hay = [r.name, r.cat, catOf(r.cat)?.label || '', ...r.tags, ...r.ing.map(i => i[1].replace('?', '') + ' ' + (i[2] || ''))].join(' | ').toLowerCase();
    const stemHay = Ingredients.stem(hay);
    if (whole && r.ing.some(i => i[1].replace('?', '') === whole)) return true;
    return tokens.every(t => {
      if (hay.includes(t) || stemHay.includes(Ingredients.stem(t))) return true;
      const syn = Ingredients.resolve(t);
      return !!syn && hay.includes(syn);
    });
  }).map((r, i) => [rank(r), i, r]).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map(x => x[2]);
}

function renderSearch() {
  renderCatChips();
  const results = searchRecipes(state.query, state.cat);
  $('#searchClear').hidden = !state.query;
  const tip = CATEGORY_TIPS[state.cat];
  $('#catTip').innerHTML = tip
    ? `<details class="cat-tip" open><summary>${esc(tip.title)}</summary><ul>${tip.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul></details>`
    : '';
  $('#resultCount').textContent = `${results.length} recipe${results.length === 1 ? '' : 's'}`;
  $('#searchResults').innerHTML = results.length
    ? results.map(r => recipeCard(r)).join('')
    : `<div class="empty"><div class="empty-emoji">🤔</div><h2>No recipes found</h2><p>Try another word, or clear the filter.</p></div>`;
}

$('#searchInput').addEventListener('input', e => { state.query = e.target.value; renderSearch(); });
$('#searchClear').addEventListener('click', () => { state.query = ''; $('#searchInput').value = ''; renderSearch(); $('#searchInput').focus(); });
$('#catChips').addEventListener('click', e => {
  const b = e.target.closest('[data-cat]');
  if (!b) return;
  state.cat = b.dataset.cat;
  renderSearch();
});

/* ───────────────────────── MY KITCHEN ───────────────────────── */
function addIngredient(text, { quiet = false } = {}) {
  const raw = String(text || '').trim();
  if (!raw) return null;
  const canonical = Ingredients.resolve(raw);
  const name = canonical || Ingredients.clean(raw);
  if (!name) return null;
  if (state.pantry.includes(name)) {
    if (!quiet) feedback(`You've already got ${nice(name)}.`);
    return name;
  }
  state.pantry.push(name);
  savePantry();
  if (!quiet) {
    if (!canonical) feedback(`Added “${name}”. I don't know that one, so it won't be used in suggestions.`);
    else if (Ingredients.clean(raw) !== canonical) feedback(`“${raw}” → added ${nice(canonical)} ✅`);
    else feedback(`Added ${nice(canonical)} ✅`);
  }
  return name;
}

function removeIngredient(name) {
  state.pantry = state.pantry.filter(n => n !== name);
  savePantry();
}

function feedback(msg) {
  const el = $('#addFeedback');
  el.textContent = msg;
  clearTimeout(feedback.t);
  feedback.t = setTimeout(() => { el.textContent = ''; }, 4000);
}

function renderPantry() {
  const groups = {};
  state.pantry.forEach(n => { const g = Ingredients.group(n); (groups[g] = groups[g] || []).push(n); });
  $('#pantryCount').textContent = state.pantry.length ? `(${state.pantry.length})` : '';
  $('#clearPantry').hidden = !state.pantry.length;
  $('#pantryList').innerHTML = state.pantry.length
    ? GROUPS.filter(g => groups[g.id]).map(g => `
        <div class="pantry-group">
          <h4>${GROUP_EMOJI[g.id]} ${g.label}</h4>
          <div class="chip-wrap">${groups[g.id].map(n =>
            `<button class="chip have" data-remove="${esc(n)}" aria-label="Remove ${esc(nice(n))}">${esc(nice(n))} <span class="x" aria-hidden="true">✕</span></button>`).join('')}
          </div>
        </div>`).join('')
    : `<p class="hint empty-pantry">Nothing yet – add a few things above or use Quick add.</p>`;
}

function renderQuickAdd() {
  const p = pantrySet();
  $('#quickList').innerHTML = GROUPS.filter(g => QUICK_ADD[g.id]).map(g => `
    <div class="pantry-group">
      <h4>${GROUP_EMOJI[g.id]} ${g.label}</h4>
      <div class="chip-wrap">${QUICK_ADD[g.id].map(n =>
        `<button class="chip ${p.has(n) ? 'active' : ''}" data-quick="${esc(n)}" aria-pressed="${p.has(n)}">${p.has(n) ? '✓ ' : '+ '}${esc(nice(n))}</button>`).join('')}
      </div>
    </div>`).join('');
}

/* Autocomplete */
let acIndex = -1;
let acItems = [];
function renderAutocomplete() {
  const input = $('#ingInput');
  const list = $('#acList');
  const val = input.value.split(',').pop().trim();
  acItems = val.length ? Ingredients.suggest(val, 7) : [];
  acIndex = -1;
  if (!acItems.length) { list.hidden = true; input.setAttribute('aria-expanded', 'false'); return; }
  const p = pantrySet();
  list.innerHTML = acItems.map((s, i) => `
    <li role="option" id="ac-${i}" data-i="${i}" aria-selected="false">
      <span class="ac-emoji">${GROUP_EMOJI[Ingredients.group(s.canonical)]}</span>
      <span class="ac-label">${s.isCanonical ? esc(nice(s.canonical)) : `${esc(s.label)} <span class="ac-arrow">→ ${esc(nice(s.canonical))}</span>`}</span>
      ${p.has(s.canonical) ? '<span class="ac-have">✓ got it</span>' : ''}
    </li>`).join('');
  list.hidden = false;
  input.setAttribute('aria-expanded', 'true');
}
function highlightAc() {
  [...$('#acList').children].forEach((li, i) => li.setAttribute('aria-selected', i === acIndex));
  $('#ingInput').setAttribute('aria-activedescendant', acIndex >= 0 ? `ac-${acIndex}` : '');
}
function closeAc() { $('#acList').hidden = true; $('#ingInput').setAttribute('aria-expanded', 'false'); acItems = []; acIndex = -1; }

function chooseAc(i) {
  const s = acItems[i];
  if (!s) return;
  const input = $('#ingInput');
  const parts = input.value.split(',');
  parts.pop();
  parts.forEach(p => addIngredient(p, { quiet: true }));
  addIngredient(s.canonical);
  input.value = '';
  closeAc();
  kitchenChanged();
  input.focus();
}

$('#ingInput').addEventListener('input', renderAutocomplete);
$('#ingInput').addEventListener('keydown', e => {
  if ($('#acList').hidden) return;
  if (e.key === 'ArrowDown') { e.preventDefault(); acIndex = Math.min(acItems.length - 1, acIndex + 1); highlightAc(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); acIndex = Math.max(-1, acIndex - 1); highlightAc(); }
  else if (e.key === 'Escape') closeAc();
});
$('#ingInput').addEventListener('blur', () => setTimeout(closeAc, 150));
$('#acList').addEventListener('mousedown', e => e.preventDefault()); // keep focus on the input
$('#acList').addEventListener('click', e => { const li = e.target.closest('li'); if (li) chooseAc(+li.dataset.i); });

$('#addForm').addEventListener('submit', e => {
  e.preventDefault();
  if (acIndex >= 0) return chooseAc(acIndex);
  const input = $('#ingInput');
  const parts = input.value.split(/,|\band\b|\+/).map(s => s.trim()).filter(Boolean);
  if (!parts.length) return;
  if (parts.length === 1) addIngredient(parts[0]);
  else {
    const added = parts.map(p => addIngredient(p, { quiet: true })).filter(Boolean);
    feedback(`Added ${added.length} ingredients ✅`);
  }
  input.value = '';
  closeAc();
  kitchenChanged();
});

$('#pantryList').addEventListener('click', e => {
  const b = e.target.closest('[data-remove]');
  if (!b) return;
  removeIngredient(b.dataset.remove);
  kitchenChanged();
});
$('#quickList').addEventListener('click', e => {
  const b = e.target.closest('[data-quick]');
  if (!b) return;
  const n = b.dataset.quick;
  if (state.pantry.includes(n)) removeIngredient(n); else addIngredient(n, { quiet: true });
  kitchenChanged();
});
$('#clearPantry').addEventListener('click', () => {
  if (!confirm('Clear everything from your kitchen list?')) return;
  state.pantry = [];
  savePantry();
  kitchenChanged();
});

function kitchenChanged() {
  makeIdea({ keepFlavour: true });
  renderKitchen();
}

/* Suggested recipe */
function makeIdea({ random = false, keepFlavour = true } = {}) {
  const prev = state.idea;
  const idea = Kitchen.generate(state.pantry, {
    flavourId: keepFlavour ? state.flavour : 'auto',
    random,
    avoid: prev && prev.key,
    avoidFlavour: prev && prev.flavourId
  });
  state.idea = idea;
  Store.set('af.lastIdea', idea);
}

function flavourSelect(idea) {
  const opts = Kitchen.flavourOptions(pantrySet());
  const have = opts.filter(o => o.available);
  const need = opts.filter(o => !o.available);
  const o = a => `<option value="${a.flavour.id}" ${state.flavour === a.flavour.id ? 'selected' : ''}>${a.flavour.emoji} ${esc(a.flavour.name)}${a.available ? '' : ` – need ${esc(a.missing.map(nice).join(', '))}`}</option>`;
  return `
    <label class="select-label" for="flavourSel">Flavour</label>
    <div class="select-wrap">
      <select id="flavourSel">
        <option value="auto" ${state.flavour === 'auto' ? 'selected' : ''}>✨ Best match${state.flavour === 'auto' && idea ? ` (${esc(Kitchen.flavourOptions(pantrySet()).find(x => x.flavour.id === idea.flavourId)?.flavour.name || '')})` : ''}</option>
        <optgroup label="You've got everything for">${have.map(o).join('')}</optgroup>
        ${need.length ? `<optgroup label="Need to buy something">${need.map(o).join('')}</optgroup>` : ''}
      </select>
    </div>`;
}

function timelineHtml(r) {
  if (!r.timeline || !r.timeline.length) return '';
  const total = r.time;
  return `
    <div class="timeline" aria-label="Cooking timeline">
      ${r.timeline.map(t => `
        <div class="tl-row">
          <span class="tl-label">${esc(t.label)}</span>
          <div class="tl-track"><div class="tl-bar ${t.kind}" style="left:${(t.start / total) * 100}%;width:${(t.time / total) * 100}%">
            <span>${t.start ? `in at ${t.start} min` : 'in first'}</span></div></div>
        </div>`).join('')}
      <div class="tl-scale"><span>0</span><span>${Math.round(total / 2)} min</span><span>${total} min</span></div>
    </div>`;
}

function ingredientListHtml(r, { interactive = true } = {}) {
  const st = ingredientStatus(r);
  return `<ul class="ing-list">${st.rows.map(row => {
    const icon = row.have ? '✅' : '🛒';
    const label = row.staple ? 'cupboard staple' : row.have ? 'you have it' : 'need to buy';
    const inner = `
      <span class="ing-icon" aria-hidden="true">${icon}</span>
      <span class="ing-name">${esc(nice(row.name))}${row.optional ? ' <span class="opt">optional</span>' : ''}${row.note ? `<small>${esc(row.note)}</small>` : ''}</span>
      <span class="ing-qty">${esc(row.qty)}</span>`;
    return interactive && !row.staple
      ? `<li><button class="ing-row ${row.have ? 'have' : 'need'}" data-toggle-ing="${esc(row.name)}" aria-label="${esc(nice(row.name))}: ${label}. Tap to change.">${inner}</button></li>`
      : `<li><div class="ing-row ${row.have ? 'have' : 'need'}" aria-label="${esc(nice(row.name))}: ${label}">${inner}</div></li>`;
  }).join('')}</ul>`;
}

function safeHtml(r) {
  const temps = Kitchen.safeTempsFor(r);
  if (!temps.length) return '';
  return `
    <div class="safe-box">
      <h3>🌡️ Safe internal temperatures</h3>
      <ul>${temps.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      <p class="small">Use a meat thermometer in the thickest part, away from bone.</p>
    </div>`;
}

function renderIdea() {
  const wrap = $('#ideaWrap');
  const idea = state.idea;
  if (!state.pantry.length) { wrap.innerHTML = ''; return; }
  if (!idea) {
    wrap.innerHTML = `
      <div class="panel idea">
        <h2 class="panel-title">💡 Suggested recipe</h2>
        <p class="hint">Add a meat, fish, halloumi/tofu or some veg and I'll write you a recipe with timings that all finish together.</p>
      </div>`;
    return;
  }
  const st = ingredientStatus(idea);
  wrap.innerHTML = `
    <div class="panel idea">
      <div class="idea-top">
        <h2 class="panel-title">💡 Recipe idea</h2>
        <button class="btn" id="anotherBtn">🔀 Another idea</button>
      </div>
      ${flavourSelect(idea)}
      <div class="idea-title">
        <span class="idea-emoji" aria-hidden="true">${idea.emoji}</span>
        <h3>${esc(idea.name)}</h3>
      </div>
      <p class="meta big-meta">🌡️ ${idea.temp}°C · ⏱️ ${idea.time} min total · 🍽️ Serves ${idea.serves}</p>
      ${idea.flavourMissing && idea.flavourMissing.length ? `<p class="missing">🛒 For this flavour you need: ${esc(idea.flavourMissing.map(nice).join(', '))}</p>` : ''}
      <h4 class="sub">When it all goes in</h4>
      ${timelineHtml(idea)}
      <h4 class="sub">Ingredients <span class="count">(${st.have}/${st.total} in your kitchen)</span></h4>
      ${ingredientListHtml(idea, { interactive: false })}
      <h4 class="sub">Method</h4>
      <ol class="steps plain">${idea.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
      ${idea.tips && idea.tips.length ? `<div class="tip">${idea.tips.map(t => `<p>💡 ${esc(t)}</p>`).join('')}</div>` : ''}
      ${safeHtml(idea)}
      <div class="btn-row">
        <a class="btn primary big" href="#recipe/${esc(idea.id)}">⏱️ Cook it with timer</a>
        <button class="btn big" id="saveIdeaBtn" aria-pressed="${isSaved(idea.id)}">${isSaved(idea.id) ? '♥ Saved' : '♡ Save'}</button>
      </div>
    </div>`;
}

$('#ideaWrap').addEventListener('click', e => {
  if (e.target.closest('#anotherBtn')) {
    makeIdea({ random: true, keepFlavour: true });
    renderIdea();
    toast('Here’s another idea 🔀');
  } else if (e.target.closest('#saveIdeaBtn')) {
    toggleSave(state.idea);
    renderIdea();
  }
});
$('#ideaWrap').addEventListener('change', e => {
  if (e.target.id !== 'flavourSel') return;
  state.flavour = e.target.value;
  Store.set('af.flavour', state.flavour);
  makeIdea({ keepFlavour: true });
  renderIdea();
});

function renderCanMake() {
  const ranked = Kitchen.rankRecipes(state.pantry, 20);
  $('#canMakeHint').hidden = ranked.length > 0;
  if (!state.pantry.length) $('#canMakeHint').textContent = 'Add a few ingredients and I’ll rank the recipes you’re closest to making.';
  else if (!ranked.length) { $('#canMakeHint').hidden = false; $('#canMakeHint').textContent = 'No matches yet – try adding a meat or a veg.'; }
  $('#canMakeList').innerHTML = ranked.map(x => recipeCard(x.recipe, { missing: x.missing })).join('');
}

function renderKitchen() {
  renderPantry();
  renderQuickAdd();
  if (!state.pantry.length) $('#quickAdd').open = true;
  renderIdea();
  renderCanMake();
}

/* ───────────────────────── SAVED ───────────────────────── */
function toggleSave(recipe) {
  if (!recipe) return;
  if (isSaved(recipe.id)) {
    state.saved = state.saved.filter(id => id !== recipe.id);
    delete state.custom[recipe.id];
    toast('Removed from saved');
  } else {
    state.saved.unshift(recipe.id);
    if (recipe.generated) state.custom[recipe.id] = recipe;
    toast('Saved ♥');
  }
  saveSaved();
}

function renderSaved() {
  const list = state.saved.map(getRecipe).filter(Boolean);
  $('#savedEmpty').hidden = list.length > 0;
  $('#savedList').innerHTML = list.map(r => recipeCard(r)).join('');
}

/* ───────────────────────── RECIPE PAGE ───────────────────────── */
let currentRecipe = null;

function renderRecipe(id) {
  const r = getRecipe(id);
  const view = $('#view-recipe');
  currentRecipe = r;
  if (!r) {
    view.innerHTML = `<div class="empty"><div class="empty-emoji">🍳</div><h2>Recipe not found</h2><p><a href="#search">Back to recipes</a></p></div>`;
    return;
  }
  const c = catOf(r.cat);
  const st = ingredientStatus(r);
  const ticks = state.ticks[r.id] || [];
  view.innerHTML = `
    <article class="recipe">
      <div class="hero">
        <div class="hero-emoji" aria-hidden="true">${r.emoji}</div>
        <div class="hero-text">
          <p class="eyebrow">${c ? `${c.emoji} ${c.label}` : '💡 My Kitchen idea'}</p>
          <h2>${esc(r.name)}</h2>
        </div>
        <button class="heart ${isSaved(r.id) ? 'on' : ''}" id="heartBtn" aria-pressed="${isSaved(r.id)}" aria-label="${isSaved(r.id) ? 'Remove from saved' : 'Save recipe'}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>
        </button>
      </div>
      <div class="stats">
        <div><span>🌡️</span><strong>${r.temp}°C</strong><small>temp</small></div>
        <div><span>⏱️</span><strong>${r.time} min</strong><small>cook</small></div>
        <div><span>🔪</span><strong>${r.prep || 5} min</strong><small>prep</small></div>
        <div><span>🍽️</span><strong>${r.serves}</strong><small>serves</small></div>
      </div>
      <div class="tags">${r.tags.map(t => `<a class="tag" href="#search" data-tag="${esc(t)}">${esc(t)}</a>`).join('')}</div>

      <div class="timer-card" id="timerCard"></div>

      ${r.timeline ? `<section class="block"><h3>When it all goes in</h3>${timelineHtml(r)}</section>` : ''}

      <section class="block">
        <div class="block-head">
          <h3>Ingredients</h3>
          <span class="count">${st.have}/${st.total} in your kitchen</span>
        </div>
        ${st.missing.length ? `<p class="missing">🛒 Need to buy: ${esc(st.missing.map(nice).join(', '))}</p>` : `<p class="missing ok">✅ You've got everything you need!</p>`}
        <p class="hint small">Tap an ingredient to mark it as in your kitchen (or not).</p>
        <div id="ingWrap">${ingredientListHtml(r)}</div>
      </section>

      <section class="block">
        <div class="block-head">
          <h3>Method</h3>
          <button class="link-btn" id="resetSteps" ${ticks.length ? '' : 'hidden'}>Untick all</button>
        </div>
        <p class="hint small">Tap a step to tick it off.</p>
        <ol class="steps" id="stepList">
          ${r.steps.map((s, i) => `
            <li><button class="step ${ticks.includes(i) ? 'done' : ''}" data-step="${i}" aria-pressed="${ticks.includes(i)}">
              <span class="step-num" aria-hidden="true">${ticks.includes(i) ? '✓' : i + 1}</span>
              <span class="step-text">${esc(s)}</span>
            </button></li>`).join('')}
        </ol>
      </section>

      ${r.tips && r.tips.length ? `<div class="tip">${r.tips.map(t => `<p>💡 ${esc(t)}</p>`).join('')}</div>` : ''}
      ${safeHtml(r)}
    </article>`;
  renderTimerCard();
}

$('#view-recipe').addEventListener('click', e => {
  const r = currentRecipe;
  if (!r) return;
  const step = e.target.closest('[data-step]');
  const ing = e.target.closest('[data-toggle-ing]');
  const tag = e.target.closest('[data-tag]');
  if (step) {
    const i = +step.dataset.step;
    const ticks = new Set(state.ticks[r.id] || []);
    ticks.has(i) ? ticks.delete(i) : ticks.add(i);
    state.ticks[r.id] = [...ticks];
    if (!ticks.size) delete state.ticks[r.id];
    Store.set('af.ticks', state.ticks);
    step.classList.toggle('done', ticks.has(i));
    step.setAttribute('aria-pressed', ticks.has(i));
    step.querySelector('.step-num').textContent = ticks.has(i) ? '✓' : i + 1;
    $('#resetSteps').hidden = !ticks.size;
    if (ticks.size === r.steps.length) toast('All done – enjoy! 😋');
  } else if (e.target.closest('#resetSteps')) {
    delete state.ticks[r.id];
    Store.set('af.ticks', state.ticks);
    renderRecipe(r.id);
  } else if (ing) {
    const n = ing.dataset.toggleIng;
    if (state.pantry.includes(n)) { removeIngredient(n); toast(`${nice(n)} removed from your kitchen`); }
    else { state.pantry.push(n); savePantry(); toast(`${nice(n)} added to your kitchen ✅`); }
    const y = window.scrollY;
    renderRecipe(r.id);
    window.scrollTo(0, y);
  } else if (e.target.closest('#heartBtn')) {
    toggleSave(r);
    const b = $('#heartBtn');
    b.classList.toggle('on', isSaved(r.id));
    b.setAttribute('aria-pressed', isSaved(r.id));
    b.setAttribute('aria-label', isSaved(r.id) ? 'Remove from saved' : 'Save recipe');
    if (isSaved(r.id)) { b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
  } else if (tag) {
    e.preventDefault();
    state.query = tag.dataset.tag;
    state.cat = 'all';
    $('#searchInput').value = state.query;
    location.hash = '#search';
  } else {
    handleTimerClick(e);
  }
});

/* Timer UI */
function renderTimerCard() {
  const card = $('#timerCard');
  if (!card || !currentRecipe) return;
  const r = currentRecipe;
  if (CookTimer.isBusyElsewhere(r.id)) {
    const s = CookTimer.snapshot();
    card.innerHTML = `
      <div class="timer-busy">
        <p>⏱️ A timer is already going for <strong>${esc(s.name)}</strong> (${fmt(s.remaining)} left).</p>
        <div class="btn-row">
          <a class="btn" href="#recipe/${esc(s.recipeId)}">Go to it</a>
          <button class="btn primary" data-timer="replace">Use timer here</button>
        </div>
      </div>`;
    return;
  }
  CookTimer.load(r);
  const s = CookTimer.snapshot();
  const pct = s.duration ? (1 - s.remaining / s.duration) * 100 : 0;
  const next = s.nextEvent && s.nextEvent.at < s.duration ? s.nextEvent : null;
  const nextIn = next ? next.at - (s.duration - s.remaining) : 0;
  card.innerHTML = `
    <div class="timer ${s.running ? 'running' : ''} ${s.done ? 'done' : ''}">
      <div class="timer-top">
        <span class="timer-label">${s.done ? '✅ Done!' : s.running ? 'Cooking…' : (s.remaining === s.duration ? 'Cooking timer' : 'Paused')}</span>
        <span class="timer-temp">${r.temp}°C</span>
      </div>
      <div class="timer-display" id="timerDisplay" aria-live="off">${fmt(s.remaining)}</div>
      <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(pct)}"><div style="width:${pct}%"></div>
        ${s.events.filter(ev => ev.at > 0 && ev.at < s.duration).map(ev => `<i class="marker ${ev.fired ? 'fired' : ''}" style="left:${(ev.at / s.duration) * 100}%" title="${esc(ev.msg)}"></i>`).join('')}
      </div>
      <p class="timer-next">${s.done ? 'Check it’s cooked through, then tuck in!' : next ? `Next: ${esc(next.msg)} ${s.running || s.remaining !== s.duration ? `in ${fmt(Math.max(0, nextIn))}` : `at ${fmt(next.at)}`}` : 'Nearly there!'}</p>
      <div class="timer-btns">
        <button class="btn round" data-timer="minus" aria-label="Take off 1 minute">−1</button>
        <button class="btn primary round big-btn" data-timer="${s.running ? 'pause' : 'start'}">${s.running ? '❚❚ Pause' : s.done ? '↻ Restart' : (s.remaining === s.duration ? '▶ Start' : '▶ Resume')}</button>
        <button class="btn round" data-timer="plus" aria-label="Add 1 minute">+1</button>
      </div>
      ${(!s.running && s.remaining !== s.duration) || s.done ? `<button class="link-btn center" data-timer="reset">Reset timer</button>` : ''}
      <p class="hint small center">Beeps${'vibrate' in navigator ? ' and vibrates' : ''} at each step and when done. Keep this screen open – phones pause timers when locked.</p>
    </div>`;
}

function handleTimerClick(e) {
  const b = e.target.closest('[data-timer]');
  if (!b || !currentRecipe) return;
  const act = b.dataset.timer;
  if (act === 'replace') { CookTimer.replace(currentRecipe); }
  else if (act === 'start') { CookTimer.start(); }
  else if (act === 'pause') CookTimer.pause();
  else if (act === 'reset') CookTimer.reset();
  else if (act === 'plus') CookTimer.adjust(60);
  else if (act === 'minus') CookTimer.adjust(-60);
  renderTimerCard();
}

let lastTimerRender = '';
CookTimer.on('tick', s => {
  // Update just the digits each tick; re-render the card when its state changes.
  const sig = s ? [s.recipeId, s.running, s.done, s.duration, s.events.map(e => e.fired).join(), s.remaining === s.duration].join('|') : 'none';
  if (state.view === 'recipe' && currentRecipe) {
    if (sig !== lastTimerRender) renderTimerCard();
    else {
      const d = $('#timerDisplay');
      if (d && s && s.recipeId === currentRecipe.id) {
        d.textContent = fmt(s.remaining);
        const bar = document.querySelector('.timer .progress > div');
        if (bar) bar.style.width = `${(1 - s.remaining / s.duration) * 100}%`;
        const next = s.nextEvent && s.nextEvent.at < s.duration ? s.nextEvent : null;
        const nx = document.querySelector('.timer-next');
        if (nx && next && (s.running || s.remaining !== s.duration)) nx.textContent = `Next: ${next.msg} in ${fmt(Math.max(0, next.at - (s.duration - s.remaining)))}`;
      }
    }
  }
  lastTimerRender = sig;
  updateMiniTimer(s);
});

function updateMiniTimer(s) {
  const mini = $('#miniTimer');
  const onItsPage = state.view === 'recipe' && currentRecipe && s && s.recipeId === currentRecipe.id;
  const show = s && (s.running || s.done || s.remaining !== s.duration) && !onItsPage;
  mini.hidden = !show;
  if (show) {
    $('#miniTimerText').textContent = s.done ? 'Done!' : fmt(s.remaining);
    mini.classList.toggle('paused', !s.running && !s.done);
    mini.classList.toggle('done', !!s.done);
  }
}
$('#miniTimer').addEventListener('click', () => {
  const s = CookTimer.snapshot();
  if (s) location.hash = `#recipe/${s.recipeId}`;
});

CookTimer.on('event', ev => {
  $('#alertEmoji').textContent = ev.type === 'done' ? '⏰' : ev.type === 'half' ? '🧺' : '👉';
  $('#alertTitle').textContent = ev.title;
  $('#alertMsg').textContent = ev.msg;
  $('#alertBox').hidden = false;
  $('#alertBox').classList.toggle('is-done', ev.type === 'done');
  $('#alertOk').focus({ preventScroll: true });
  if (document.visibilityState !== 'visible' && 'Notification' in window && Notification.permission === 'granted') {
    try { new Notification(ev.title, { body: ev.msg, icon: 'icons/icon-192.png' }); } catch (e) { /* ignore */ }
  }
});
$('#alertOk').addEventListener('click', () => {
  $('#alertBox').hidden = true;
  CookTimer.dismissAlarm();
});

/* ───────────────────────── Router ───────────────────────── */
const TITLES = { search: 'Air Fryer Recipes', kitchen: 'My Kitchen', saved: 'Saved Recipes', recipe: 'Recipe' };
let navDepth = 0;

function route() {
  const hash = location.hash.replace(/^#\/?/, '') || 'search';
  const [view, ...rest] = hash.split('/');
  const name = ['search', 'kitchen', 'saved', 'recipe'].includes(view) ? view : 'search';

  if (state.view !== 'recipe') state.scroll[state.view] = window.scrollY;
  state.view = name;

  document.querySelectorAll('.view').forEach(v => { v.hidden = v.id !== `view-${name}`; });
  document.querySelectorAll('.tab').forEach(t => {
    const active = t.dataset.tab === name;
    t.classList.toggle('active', active);
    if (active) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
  });
  $('#backBtn').hidden = name !== 'recipe';
  $('#pageTitle').textContent = TITLES[name];
  document.body.classList.toggle('on-recipe', name === 'recipe');

  if (name === 'search') renderSearch();
  if (name === 'kitchen') renderKitchen();
  if (name === 'saved') renderSaved();
  if (name === 'recipe') {
    renderRecipe(decodeURIComponent(rest.join('/')));
    window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, state.scroll[name] || 0);
  }
  updateMiniTimer(CookTimer.snapshot());
}

window.addEventListener('hashchange', () => { navDepth++; route(); });
$('#backBtn').addEventListener('click', () => {
  if (navDepth > 0) history.back();
  else location.hash = '#search';
});

/* ───────────────────────── Start-up ───────────────────────── */
applyTheme();
if (state.pantry.length && !state.idea) makeIdea();
CookTimer.restore();
route();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => console.warn('Service worker failed', err));
  });
}
