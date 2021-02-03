var cacheName = 'hello-pwa';
var filesToCache = [
  '/Fechtanalyse/',
  '/Fechtanalyse/fontawesome/css/all.css',
  '/Fechtanalyse/favicon.svg',
  '/Fechtanalyse/stylesheet.css',
  '/Fechtanalyse/Fechten.html',
  '/Fechtanalyse/sw.js',
  '/Fechtanalyse/manifest.json',
  '/Fechtanalyse/fontawesome/webfonts/fa-regular-400.woff2',
  '/Fechtanalyse/roboto/roboto-v20-latin-regular.woff2',
  '/Fechtanalyse/fontawesome/webfonts/fa-solid-900.woff2',
  '/Fechtanalyse/title.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});