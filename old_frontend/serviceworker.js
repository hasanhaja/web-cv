
const staticCacheName = "pwa"; 
  
self.addEventListener("install", e => { 
    e.waitUntil( 
    caches.open(staticCacheName).then(cache => { 
      return cache.addAll(["/"]); 
    }) 
  ); 
}); 
  
self.addEventListener("fetch", event =>{ 
  console.log(event.request.url); 
  
  event.respondWith( 
    caches.match(event.request).then(response => { 
      return response || fetch(event.request); 
    }) 
  ); 
}); 
