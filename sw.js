const CACHE="autocorr-v1";
const FILES=["./","./index.html","./manifest.json","./icons/icon-192.png","./icons/icon-512.png",
"https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(u=>c.add(u).catch(()=>{})))));
  self.skipWaiting();
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res;
  })));
});
