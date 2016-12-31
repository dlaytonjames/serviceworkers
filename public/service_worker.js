self.importScripts('assets/js/swivel.min.js');

const CACHE_NAME = 'service_worker_cache';

const CACHE_URLS = [
    './',
    'index.php'
];

self.addEventListener('install', function(event) {
    //Install stuff
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        self.clients.claim().then(function() {
            return caches.open(CACHE_NAME).then(function(cache) {
                return cache.addAll(CACHE_URLS);
            });
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request).catch(function() {
                return new Response('Sorry, this page is not available');
            });
        }).catch(function() {
            return new Response('Sorry, an error occurred while trying to load this page');
        })
    );
});



//swivel.on('cachePage', function(context, data) {
//    caches.open(CACHE_NAME)
//        .then(function(cache) {
//            cache.match('/').then((response) => {
//                
//            });
//        });
//});
