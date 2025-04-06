
const staticCacheName = "jinwoostream-pwa-v" + new Date().getTime();
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './register.js',
  './service-worker.js',
  './assets/css/style.min.css',
  './assets/js/main.min.js',
  './assets/js/player.min.js',
  './assets/js/header.min.js',
  './assets/js/setbg.min.js',
  './assets/js/search.min.js',
  './assets/js/showmoreless.min.js',
  './assets/js/timezone-detector.min.js',
  './assets/js/chatroom-preferences.min.js',
  './assets/js/check-shown-chat.min.js',
  './assets/js/check-new-tab.min.js',
  './assets/js/arc-signal.min.js',
  './assets/js/should-do-galak.min.js',
  './assets/js/debounce.min.js',
  './assets/js/sizzly.js',
  './assets/js/paper.js',
  './images/icons/icon-512x512.png',
  './images/icons/favicon-32x32.png',
  './images/icons/apple-touch-icon-180x180.png'
];

// Install event - cache static assets
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith("jinwoostream-pwa-"))
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
      )
    )
  );
  return self.clients.claim();
});

// Fetch event - serve from cache or fetch, with offline fallback
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => caches.match('./offline.html'));
    })
  );
});
