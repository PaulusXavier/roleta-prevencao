const CACHE_NAME = 'roleta-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'Logo-Photoroom.jpg',
  'IMG-20240613-WA0009.jpg',
  'Video Project 28.m4a',
  'vitoria.mp3',
  'erro.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});