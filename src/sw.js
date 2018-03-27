// self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));

// self.addEventListener('fetch', event => {
//     //event.respondWith(new Response('hijacked directly!'));
// });


self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open("first").then(function(cache) {
        return cache.add(
            '/offline'
        );
        // return cache.addAll(
        //     ['/offline']
        // );
      }).then(self.skipWaiting())
    );
  });
  