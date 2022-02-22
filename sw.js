const staticCacheName = 'site-static';
const dynamicCache = 'site-dynamic';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    //unfinished(see pre-caching asset)
];

//listen to the intallation event of service worker
self.addEventListener('install', evt => {
    //console.log('serivce worker has been installed');
    evt.waitUntil(    
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll()
    }))
});

//listen to the activation event of service worker
self.addEventListener('activate', evt => {
    //console.log('serivce worker has been activated');
    //this is to delete all the old caches and only retains the recent cache
    evt.waitUntil(
        caches.keys().then(keys => {
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
});

//fetch event
self.addEventListener(' fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes; 
                })
            });
        })
    )
});