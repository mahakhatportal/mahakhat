// हे ॲप इन्स्टॉल करण्यासाठी ब्राउझरला मदत करते
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

// सध्या आपण कोणताही डेटा ऑफलाईन सेव्ह करत नाही आहोत (कारण आपला डेटा लाईव्ह आहे)
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});
