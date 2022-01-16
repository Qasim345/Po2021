self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["/", "style.css", "script.js","img/q-logo.png"])
    })
  );
});
self.addEventListener("fetch", e => {
  e.respndWith(
    catches.match(e.request).then(respons => {
      return respons || fetch(e.request)
    })
  )
});
