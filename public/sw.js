/* eslint-disable no-restricted-globals */
console.log("Hola desde el Service Worker");

self.addEventListener("install", () => self.skipWaiting());
// self.addEventListener("activate", console.log);

self.addEventListener("fetch", event => {
    // Podemos hacer toda la lógica del caché
    const currentCache = "version 1"
    event.respondWith(
        caches.match(event.request).then((cacheResponse) => {
          return cacheResponse || fetch(event.request).then((networkResponse) => {
            return caches.open(currentCache).then((cache) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
          })
        })
      )
     
});

self.addEventListener("push", event => {
    // console.log(event)
    self.registration.showNotification("Título de la notificación", {
        body: "Este es el cuerpo del mensaje"
    })
});
