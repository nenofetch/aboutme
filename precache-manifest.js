importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
// Inject precache-manifest
workbox.precaching.precacheAndRoute([]);
// Cache images
workbox.routing.registerRoute(
  /\.(?:jpg|jpeg|png|gif|webp|ico|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        // 30 Days
        maxAgeSeconds: 60 * 60 * 24 * 30
      })
    ]
  })
);
// Cache JavaScript and CSS Files
workbox.routing.registerRoute(
  /\.(?:js|mjs|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static'
  })
);
// Force service worker to update immediately after installing
self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function(event) {
  self.clients.claim();
});
