const CNAME = 'dual-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CNAME).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CNAME).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e=>{
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return; // only cache GET
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res=>{
        const clone = res.clone();
        caches.open(CNAME).then(c=>c.put(e.request, clone));
        return res;
      }).catch(()=>caches.match('./index.html')))
    );
  }
});
