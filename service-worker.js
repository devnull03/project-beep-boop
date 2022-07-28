const o = "1658967396590", c = self, i = `cache${o}`, r = `offline${o}`, d = (t) => t.map((e) => self.location.origin + e), f = d([]), h = [...f], u = new Set(h);
c.addEventListener("install", (t) => {
  t.waitUntil(caches.open(i).then((e) => e.addAll(h)).then(() => {
    c.skipWaiting();
  }));
});
c.addEventListener("activate", (t) => {
  t.waitUntil(caches.keys().then(async (e) => {
    for (const s of e)
      s !== i && s !== r && await caches.delete(s);
    c.clients.claim();
  }));
});
async function p(t) {
  const e = await caches.open(r);
  try {
    const s = await fetch(t);
    return e.put(t, s.clone()), s;
  } catch (s) {
    const a = await e.match(t);
    if (a)
      return a;
    throw s;
  }
}
c.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET" || t.request.headers.has("range"))
    return;
  const e = new URL(t.request.url), s = e.protocol.startsWith("http"), a = e.hostname === self.location.hostname && e.port !== self.location.port, n = u.has(e.href), l = t.request.cache === "only-if-cached" && !n;
  s && !a && !l && t.respondWith((async () => n && await caches.match(t.request) || p(t.request))());
});
