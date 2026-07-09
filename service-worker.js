self.addEventListener("install", () => {
  console.log("Service Worker installiert");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});

