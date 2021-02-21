// version 1.1
// change version to reinstall service worker and update Files

var cacheName = 'cache_fechtanalyse';
var filesToCache = [
	'/Fechtanalyse/',
	'/Fechtanalyse/fontawesome/css/all.css',
	'/Fechtanalyse/favicon.svg',
	'/Fechtanalyse/stylesheet.css',
	'/Fechtanalyse/Fechten.html',
	'/Fechtanalyse/manifest.json',
	'/Fechtanalyse/fontawesome/webfonts/fa-regular-400.woff2',
	'/Fechtanalyse/roboto/roboto-v20-latin-regular.woff2',
	'/Fechtanalyse/fontawesome/webfonts/fa-solid-900.woff2',
	'/Fechtanalyse/title.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  caches.delete(cacheName);
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});