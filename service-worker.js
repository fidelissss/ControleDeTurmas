const CACHE_NAME = 'controle-turmas-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/turmas.html',
  '/turma-form.html',
  '/alunos.html',
  '/aluno-form.html',
  '/disciplinas.html',
  '/disciplina-form.html',
  '/login.html',
  '/minha-area.html',
  '/styles.css',
  '/app.js',
  '/manifest.webmanifest',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});