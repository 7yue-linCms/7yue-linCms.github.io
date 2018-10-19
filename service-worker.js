/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "032f1e26632cf55122db0f3ccaada24e"
  },
  {
    "url": "assets/css/1.styles.660b644b.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.b8174427.css",
    "revision": "27c433152cbe829319ee7413419f35a3"
  },
  {
    "url": "assets/css/3.styles.8f8a9b66.css",
    "revision": "13f2e2310c50ec2731cd89dd4e4ba48f"
  },
  {
    "url": "assets/css/4.styles.1803ea27.css",
    "revision": "fece63d6d831506a99e942d7df8466bf"
  },
  {
    "url": "assets/css/5.styles.a3d90e0d.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/styles.9c71c48a.css",
    "revision": "8ae4debcbddfe9d64ffb71dc3baec36a"
  },
  {
    "url": "assets/img/index.40106efb.jpg",
    "revision": "40106efb472932b47a5e6c16dd1db6e2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vuepressScreen.ac725735.jpg",
    "revision": "ac7257350e6602332b15313119cec590"
  },
  {
    "url": "assets/js/1.660b644b.js",
    "revision": "166523850970dffcd8ffd1534c07480c"
  },
  {
    "url": "assets/js/10.96bf659a.js",
    "revision": "a0e3aa5909ceade9892631f733abfbae"
  },
  {
    "url": "assets/js/11.f495bb07.js",
    "revision": "84f194f1b05a0807a1b8f7641a6a6640"
  },
  {
    "url": "assets/js/12.4c99ecbb.js",
    "revision": "85f5cc3344e243f3324f9391b745c29c"
  },
  {
    "url": "assets/js/13.7531b2b0.js",
    "revision": "d3456866e749251542d79d97594d7d92"
  },
  {
    "url": "assets/js/2.b8174427.js",
    "revision": "bcb7daacec64d6bef6f8ca5914eef8f9"
  },
  {
    "url": "assets/js/3.8f8a9b66.js",
    "revision": "3353f8466996823454a79cf8c54f6a89"
  },
  {
    "url": "assets/js/4.1803ea27.js",
    "revision": "1af0896774776a9d7289bb18f3cdc889"
  },
  {
    "url": "assets/js/5.a3d90e0d.js",
    "revision": "4ec982f9a979342c1af3c74670e21403"
  },
  {
    "url": "assets/js/6.c90bc166.js",
    "revision": "3c16fc1bf80056096b0f04ed1ba02991"
  },
  {
    "url": "assets/js/7.4c1b9984.js",
    "revision": "2116e6ba033560ef14e386c85b95574b"
  },
  {
    "url": "assets/js/8.c68c8eb4.js",
    "revision": "9ddadcfbd9671975719abbc51da4c9b1"
  },
  {
    "url": "assets/js/9.f6f82b12.js",
    "revision": "53ec7b8d8012168b35816bfa6c76e6f0"
  },
  {
    "url": "assets/js/app.9c71c48a.js",
    "revision": "45ebcdc6b402dbffa52ee3814ae43965"
  },
  {
    "url": "component/index.html",
    "revision": "d9ada5d64f799eaa3f3e8a6b2ecf3502"
  },
  {
    "url": "component/组件指南.html",
    "revision": "90a0a3e0556973631e62d449a5534165"
  },
  {
    "url": "component/组件描述.html",
    "revision": "1a5199629e9720646403e6f5df1218f4"
  },
  {
    "url": "hero.png",
    "revision": "631612eccd822da8696d23a4ac599333"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "96fa04a38cc08aaa3acecf1af9931b59"
  },
  {
    "url": "left-logo.jpg",
    "revision": "6f848a5fe6a0526453a17d96d53e6fe0"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "openSource/index.html",
    "revision": "402d29aa437d962f23b611b241923cd9"
  },
  {
    "url": "sideIcon.jpg",
    "revision": "6049ddd942370393f91ccd5805df2029"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
