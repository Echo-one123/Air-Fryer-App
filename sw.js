/* Service worker: caches the whole app so it works offline.
 * Bump VERSION whenever you change any file so phones pick up the update. */
const VERSION = 'v9';
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
  'js/recipes-desserts.js',
  'js/recipes-desserts-2.js',
  'js/recipes-pyrex-3.js',
  'js/recipes-pyrex-4.js',
  'js/recipes-honey.js',
  'js/recipes-pasta.js',
  'js/recipes-beef-2.js',
  'js/recipes-pork-2.js',
  'js/recipes-lamb-2.js',
  'js/recipes-fish-2.js',
  'js/recipes-veggie-2.js',
  'js/recipes-vegan.js',
  'js/recipes-sides-2.js',
  'js/recipes-snacks-2.js',
  'js/recipes-breakfast-2.js',
  'js/recipes-indian.js',
  'js/recipes-east-asian.js',
  'js/recipes-world.js',
  'js/recipes-healthy.js',
  'js/recipes-kids-budget.js',
  'js/recipes-roasts-bbq.js',
  'js/recipes-reheat.js',
  'js/recipes-dumpgo.js',
  'js/recipes-dumpgo-2.js',
  'js/recipes-sticky-beef-pork.js',
  'js/recipes-sticky-chicken.js',
  'js/recipes-sticky-seafood-veg.js',
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
