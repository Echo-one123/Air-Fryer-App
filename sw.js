/* Service worker: caches the whole app so it works offline.
 * Bump VERSION whenever you change any file so phones pick up the update. */
const VERSION = 'v5';
const CACHE = `air-fryer-${VERSION}`;
const ASSETS = [
  './',
  'index.html',
  'styles.css',
  'manifest.json',
  'js/ingredients.js',
  'js/recipes.js',
  'js/recipes-extra.js',
  'js/recipes-trending.js',
  'js/recipes-takeaway.js',
  'js/recipes-british.js',
  'js/recipes-frozen.js',
  'js/recipes-wraps-veg.js',
  'js/recipes-wraps-meat.js',
  'js/recipes-chicken.js',
  'js/recipes-chicken-2.js',
  'js/recipes-pyrex.js',
  'js/recipes-pyrex-2.js',
  'js/kitchen.js',
  'js/timer.js',
  'js/app.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('air-fryer-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache first (fast + offline), then refresh the cache in the background.
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(cached => {
      const network = fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return res;
      }).catch(() => cached || (req.mode === 'navigate' ? caches.match('index.html') : undefined));
      return cached || network;
    })
  );
});
