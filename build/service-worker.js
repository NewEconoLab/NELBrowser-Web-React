"use strict";var precacheConfig=[["/index.html","344570e6092da4661541cb36f88d3748"],["/static/css/main.0d8ea263.css","8a098e8c55b753825c746f9093fb2d99"],["/static/js/0.f036bb84.chunk.js","f38619a6a4bbb12059a2b6b433558637"],["/static/js/1.513c74fd.chunk.js","5d6d409599ae6121a1e4fa32e9091d1a"],["/static/js/10.cc178b9b.chunk.js","afe2af421c7ea5aa609ee63f80457339"],["/static/js/11.cec1dc05.chunk.js","d48ee6a17bf797b3dd0f1787b0dd35af"],["/static/js/12.230c21c9.chunk.js","27771d7334e9268745d4e91e188ef7be"],["/static/js/13.b0071252.chunk.js","e08288d4b927df9cb483c85999cd5d2f"],["/static/js/14.6c80d75b.chunk.js","affe003a1cfa7713e18ebf51cad5407e"],["/static/js/2.7125f15a.chunk.js","a14269cfdab9179ef66570f319fd94b9"],["/static/js/3.b31c5271.chunk.js","e80b090e2b4fbd0f23324b9e9981a5a0"],["/static/js/4.41994e42.chunk.js","75f8bec1eade750c4e42c947bd7d6c93"],["/static/js/5.7dfeb954.chunk.js","12f5c933667f8c3ca8ab04a808606ff4"],["/static/js/6.c5d54286.chunk.js","9f0f9b2f9d2a5fbe452abfdba03ef103"],["/static/js/7.73783187.chunk.js","f9eb7d4d2e765aab8015aab6aff6238e"],["/static/js/8.0aea96e3.chunk.js","0ddfe546697840025cc9277f14df3bbf"],["/static/js/9.3791da57.chunk.js","9e6b8b5a00b2c251c90cbc78bb032ce3"],["/static/js/main.addc8450.js","3f2b46b16a3c66bb8144507b5c4690ee"],["/static/media/logo2.7c554ac9.png","7c554ac99d92e5e8f2b0fa7949906ad4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});