// Roman Urdu comment: Yeh service worker offline caching ke liye hai

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('billing-cache').then(cache => {
      return cache.addAll(['/', '/index.html', '/app.js', '/manifest.json']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
