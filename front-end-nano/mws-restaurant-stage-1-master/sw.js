let static_cache_name = 'mws-restaurant-stage-1-master-' + Math.floor(Math.random() * 1000)
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(static_cache_name).then(function(cache) {
      return cache.addAll([
        'index.html',
        'restaurant.html',
        'css/styles.css',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        'img/10.jpg',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'favicon.ico'
        ]).catch(error => {}); })); });

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cache_names) {
      return Promise.all(cache_names.filter(function(cache_name) {
        return (cache_name.startsWith('mws-restaurant-stage-1-master-') &&
                cache_name != static_cache_name);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response !== undefined) { return response }
    else {
      return fetch(event.request).then(function (response) {
        let response_clone = response.clone();
        caches.open(static_cache_name).then(function (cache) {
          cache.put(event.request, response_clone);
        });
        return response;
      });
    };
  }));
});
