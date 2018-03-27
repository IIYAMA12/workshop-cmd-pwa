self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));

self.addEventListener('fetch', event => {
    // event.respondWith(new Response('hijacked directly!'));
});