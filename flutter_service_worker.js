'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "beacaa6e051e277b048c54de6c1edcb8",
"rimidalv.github.io/version.json": "beacaa6e051e277b048c54de6c1edcb8",
"rimidalv.github.io/index.html": "e3534581311828d16bffdd427fe016b1",
"/": "c4c82dfd2ea0c0adee0c4b5d9997f9cb",
"rimidalv.github.io/main.dart.js": "0feea2d82300893846cff6210bfe6152",
"rimidalv.github.io/ads.txt": "d826d50440cbd7d7cb2babe679a20628",
"rimidalv.github.io/flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"rimidalv.github.io/app-ads.txt": "d826d50440cbd7d7cb2babe679a20628",
"rimidalv.github.io/README.md": "9842d8ca5b81e6efd2353f9a24d6ca45",
"rimidalv.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"rimidalv.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"rimidalv.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"rimidalv.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"rimidalv.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"rimidalv.github.io/manifest.json": "9c30b8d2031c9cf0d8baabd2c4bb98f4",
"rimidalv.github.io/.git/config": "9ab74bf9daf32e7fe9595fa72c920d1c",
"rimidalv.github.io/.git/objects/pack/pack-7a2f2aa88794839d201f8d9dff2785cebafa7dfb.pack": "ddf0aa5d5910545838ab5abbebf4c200",
"rimidalv.github.io/.git/objects/pack/pack-7a2f2aa88794839d201f8d9dff2785cebafa7dfb.idx": "11be3e825266f0ae6cc2644b6a014270",
"rimidalv.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"rimidalv.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"rimidalv.github.io/.git/logs/HEAD": "4518a70de3a078d00c8612a0a4d26c0b",
"rimidalv.github.io/.git/logs/refs/heads/main": "4518a70de3a078d00c8612a0a4d26c0b",
"rimidalv.github.io/.git/logs/refs/remotes/origin/HEAD": "4518a70de3a078d00c8612a0a4d26c0b",
"rimidalv.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"rimidalv.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"rimidalv.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"rimidalv.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"rimidalv.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"rimidalv.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"rimidalv.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"rimidalv.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"rimidalv.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"rimidalv.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"rimidalv.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"rimidalv.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"rimidalv.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"rimidalv.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"rimidalv.github.io/.git/refs/heads/main": "0b778da6c0d10d1448275c84765b7c15",
"rimidalv.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"rimidalv.github.io/.git/index": "0332c0a381a673ec8993ef2f56790351",
"rimidalv.github.io/.git/packed-refs": "5fd3adf53e367e653fca2994aac49789",
"rimidalv.github.io/assets/AssetManifest.json": "591fe40b2e567e87932bbefc9294ae03",
"rimidalv.github.io/assets/NOTICES": "259068529bed6e57beac74e9760f7147",
"rimidalv.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"rimidalv.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"rimidalv.github.io/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"rimidalv.github.io/assets/assets/images/8.png": "9091ba34739e6d2071ed8b9b993f9c93",
"rimidalv.github.io/assets/assets/images/4.png": "d5c479034f7224e0efc782542086e08f",
"rimidalv.github.io/assets/assets/images/5.png": "2ba7eedf4557cd8eca67ebacef542734",
"rimidalv.github.io/assets/assets/images/7.png": "ee57e3239affb82be7b4d3305bbb4586",
"rimidalv.github.io/assets/assets/images/6.png": "e22ca887d3eb07479ed3b4bb8eaaa89d",
"rimidalv.github.io/assets/assets/images/2.png": "89c24bd4a52bfaf7971b74cc2bcadb6c",
"rimidalv.github.io/assets/assets/images/3.png": "fce2430555674009c1c44389ff008e9e",
"rimidalv.github.io/assets/assets/images/1.png": "5abe4a27adf538d01935efa67aac8b4b",
"rimidalv.github.io/canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"rimidalv.github.io/canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"rimidalv.github.io/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"rimidalv.github.io/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"index.html": "c4c82dfd2ea0c0adee0c4b5d9997f9cb",
"main.dart.js": "928d3b92288f0f578b9198d0753d6425",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9c30b8d2031c9cf0d8baabd2c4bb98f4",
"assets/AssetManifest.json": "aea3a5193ec11c687713a35e531eb5c5",
"assets/NOTICES": "9a4b7ded01b0c27832a275c31d104188",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/8.png": "9091ba34739e6d2071ed8b9b993f9c93",
"assets/assets/images/banner.png": "8e94247ed782902f1e3e14e16f1d81b7",
"assets/assets/images/google-play-badge.png": "d88c0430b1de67ddfd69fbfda2305e6d",
"assets/assets/images/4.png": "d5c479034f7224e0efc782542086e08f",
"assets/assets/images/5.png": "2ba7eedf4557cd8eca67ebacef542734",
"assets/assets/images/7.png": "ee57e3239affb82be7b4d3305bbb4586",
"assets/assets/images/6.png": "e22ca887d3eb07479ed3b4bb8eaaa89d",
"assets/assets/images/2.png": "89c24bd4a52bfaf7971b74cc2bcadb6c",
"assets/assets/images/3.png": "fce2430555674009c1c44389ff008e9e",
"assets/assets/images/1.png": "5abe4a27adf538d01935efa67aac8b4b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
