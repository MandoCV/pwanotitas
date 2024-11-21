if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const t=e=>n(e,s),f={module:{uri:s},exports:c,require:t};i[s]=Promise.all(o.map((e=>f[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-1c674fbd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icon512_maskable.png",revision:"20ffb9b4974f643db23f9bf5579983d0"},{url:"icon512_rounded.png",revision:"187f2daaa9fc0f210b4a6947ce14c620"},{url:"index.html",revision:"caa239ffc9136ccb0b01a5b8893b27c0"},{url:"manifest.json",revision:"96e60f9d9de093c647dd114a56f53491"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map

caches.open(cacheName).then(function(cache){
    //# todo el codigo del cache
});

const currentCache='cache-v1.0';
const files=[
    "favicon.ico",
    "icon512_maskable.png",
    "icon512_rounded.png",
    "index.html",
    "manifest.json"

];

self.addEventListener('install',event=>{
    event.waitUntil(
        caches.open(currentCache).then(cache =>{
            return cache.addAll(files);
        })
    );
});

self.addEventListener('activate',event =>{
    event.waitUntil(
        caches.keys().then(cacheName=> Promise.all(
            cacheName.filter(cacheName => {
                return cacheName !== currentCache
             }).map(cacheName=> caches.delete(cacheName))
        ))
    );
});
