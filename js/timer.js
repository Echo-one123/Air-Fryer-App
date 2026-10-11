'use strict';

/*
 * Cooking timer.
 * - Counts down from wall-clock time, so it stays accurate if the phone throttles the page.
 * - Fires "events" (halfway shake, add the chicken, glaze…) with a beep + vibration.
 * - Keeps the screen awake while running (where the browser supports it).
 * - State is saved to localStorage so a running timer survives a reload.
 */
const CookTimer = (() => {
  const KEY = 'af.timer';
  let state = null;          // { recipeId, name, duration, remaining, endAt, running, done, events: [{at, msg, kind, fired}] }
  let interval = null;
  let audio = null;
  let alarmLoop = null;
  let wakeLock = null;
  const listeners = { tick: [], event: [] };

  const now = () => Date.now();
  const emit = (type, payload) => listeners[type].forEach(fn => fn(payload));
  const save = () => { try { state ? localStorage.setItem(KEY, JSON.stringify(state)) : localStorage.removeItem(KEY); } catch (e) { /* storage full or blocked */ } };

  function halfwayMsg(turn) {
    if (turn === 'flip') return 'Turn everything over';
    if (turn === 'none') return 'Have a quick look – no need to shake';
    return 'Shake the basket';
  }

  function buildEvents(recipe, duration) {
    const evs = (recipe.events || []).map(e => ({ at: e.at, msg: e.msg, kind: /halfway/i.test(e.msg) ? 'half' : 'step', fired: false }));
    if (!evs.some(e => e.kind === 'half')) {
      evs.push({ at: Math.round(duration / 2), msg: `Halfway – ${halfwayMsg(recipe.turn)}`, kind: 'half', fired: false });
    }
    return evs.sort((a, b) => a.at - b.at);
  }

  function remainingNow() {
    if (!state) return 0;
    if (state.running) return Math.max(0, Math.ceil((state.endAt - now()) / 1000));
    return state.remaining;
  }

  /** Prepare the timer for a recipe (keeps an existing timer for the same recipe). */
  function load(recipe) {
    if (state && state.recipeId === recipe.id) return state;
    if (state && (state.running || state.remaining !== state.duration) && !state.done) return state; // another recipe's timer is in use
    const duration = recipe.time * 60;
    state = { recipeId: recipe.id, name: recipe.name, duration, remaining: duration, endAt: null, running: false, done: false, events: buildEvents(recipe, duration), turn: recipe.turn };
    save();
    emit('tick', snapshot());
    return state;
  }

  /** Force-replace whatever timer is running with this recipe's timer. */
  function replace(recipe) {
    stopAlarm();
    clear();
    return load(recipe);
  }

  function snapshot() {
    if (!state) return null;
    return { ...state, remaining: remainingNow(), nextEvent: state.events.find(e => !e.fired) || null };
  }

  function unlockAudio() {
    try {
      if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
    } catch (e) { audio = null; }
  }

  function tone(freq, start, len, vol = 0.35) {
    if (!audio) return;
    const o = audio.createOscillator();
    const g = audio.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    const t = audio.currentTime + start;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(g).connect(audio.destination);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  function beep(kind) {
    unlockAudio();
    if (kind === 'done') {
      [0, 0.25, 0.5].forEach(s => tone(880, s, 0.18));
      tone(1175, 0.75, 0.4);
      vibrate([400, 150, 400, 150, 600]);
    } else {
      tone(660, 0, 0.15); tone(880, 0.2, 0.25);
      vibrate([200, 100, 200]);
    }
  }

  function vibrate(pattern) {
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (e) { /* not supported (e.g. iPhone) */ }
  }

  async function keepAwake(on) {
    try {
      if (on && 'wakeLock' in navigator && !wakeLock && document.visibilityState === 'visible') {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => { wakeLock = null; });
      } else if (!on && wakeLock) {
        await wakeLock.release();
        wakeLock = null;
      }
    } catch (e) { wakeLock = null; }
  }

  function startAlarm() {
    stopAlarm();
    let count = 0;
    beep('done');
    alarmLoop = setInterval(() => {
      if (++count >= 15) return stopAlarm();
      beep('done');
    }, 2000);
  }

  function stopAlarm() {
    if (alarmLoop) clearInterval(alarmLoop);
    alarmLoop = null;
  }

  function tick() {
    if (!state) return;
    const rem = remainingNow();
    const elapsed = state.duration - rem;
    if (state.running) {
      const due = state.events.filter(e => !e.fired && e.at > 0 && e.at < state.duration && elapsed >= e.at);
      if (due.length) {
        due.forEach(e => { e.fired = true; });
        const last = due[due.length - 1];
        beep('event');
        const msg = due.map(e => e.msg.replace(/^Halfway – /, '')).map(m => m[0].toUpperCase() + m.slice(1)).join(' · ');
        emit('event', { type: last.kind, title: last.kind === 'half' ? 'Halfway!' : 'Next step', msg });
        save();
      }
      if (rem <= 0) {
        state.running = false;
        state.remaining = 0;
        state.done = true;
        save();
        stopTicking();
        keepAwake(false);
        startAlarm();
        emit('event', { type: 'done', title: "Time's up!", msg: `${state.name} is ready. Check it's cooked through before serving.` });
      }
    }
    emit('tick', snapshot());
  }

  function startTicking() {
    if (!interval) interval = setInterval(tick, 250);
  }
  function stopTicking() {
    if (interval) clearInterval(interval);
    interval = null;
  }

  function start() {
    if (!state) return;
    unlockAudio();
    if (state.done || state.remaining <= 0) reset();
    state.endAt = now() + state.remaining * 1000;
    state.running = true;
    save();
    startTicking();
    keepAwake(true);
    tick();
  }

  function pause() {
    if (!state || !state.running) return;
    state.remaining = remainingNow();
    state.running = false;
    state.endAt = null;
    save();
    stopTicking();
    keepAwake(false);
    tick();
  }

  function reset() {
    if (!state) return;
    stopAlarm();
    state.running = false;
    state.done = false;
    state.endAt = null;
    state.remaining = state.duration;
    state.events.forEach(e => { e.fired = false; });
    save();
    stopTicking();
    keepAwake(false);
    tick();
  }

  /** Add or remove time (in seconds). */
  function adjust(delta) {
    if (!state) return;
    const rem = remainingNow();
    const newRem = Math.max(0, rem + delta);
    if (newRem === 0 && delta < 0 && !state.running) return;
    const elapsed = state.duration - rem;
    state.duration = Math.max(60, elapsed + newRem);
    const half = state.events.find(e => e.kind === 'half');
    if (half && !half.fired) half.at = Math.round(state.duration / 2);
    state.events.sort((a, b) => a.at - b.at);
    if (state.running) state.endAt = now() + newRem * 1000;
    else state.remaining = state.duration - elapsed;
    if (state.done && newRem > 0) state.done = false;
    stopAlarm();
    save();
    tick();
  }

  function clear() {
    stopAlarm();
    stopTicking();
    keepAwake(false);
    state = null;
    save();
    emit('tick', null);
  }

  function dismissAlarm() { stopAlarm(); }

  function restore() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (saved && saved.recipeId) {
        state = saved;
        if (state.running) startTicking();
        tick();
      }
    } catch (e) { state = null; }
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      if (state && state.running) { keepAwake(true); tick(); }
    }
  });

  const on = (type, fn) => listeners[type].push(fn);
  const isFor = id => !!state && state.recipeId === id;
  const isBusyElsewhere = id => !!state && state.recipeId !== id && (state.running || (state.remaining !== state.duration && !state.done));

  return { load, replace, start, pause, reset, adjust, clear, restore, on, snapshot, isFor, isBusyElsewhere, dismissAlarm, unlockAudio, beep };
})();
