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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "72cd8afb2cfa89957fc1ae4e66daea3d"
  },
  {
    "url": "api/index.html",
    "revision": "a45de6c44d78f336904c1b93a7b18497"
  },
  {
    "url": "api/rules.html",
    "revision": "a6f9e5cccfc3ecd1d26dce0396406bc9"
  },
  {
    "url": "assets/css/0.styles.28c99067.css",
    "revision": "b98c247351c6b4a72f3fa6620886265d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.087a6433.js",
    "revision": "0ce0bd8fd287e503c780f4fbf1336cb8"
  },
  {
    "url": "assets/js/11.001366f1.js",
    "revision": "d5d1bd1b9a0becc81fa28a32bb9e0ef5"
  },
  {
    "url": "assets/js/12.33b5d792.js",
    "revision": "4a080085ab0729819ad25f06bdeeec55"
  },
  {
    "url": "assets/js/13.0f09fde9.js",
    "revision": "859c464888f73113a016e45812c5d28f"
  },
  {
    "url": "assets/js/14.570125fd.js",
    "revision": "3ed609f41255420f791f48995fd36a93"
  },
  {
    "url": "assets/js/15.842b806b.js",
    "revision": "d0569a0876c9f5b8cb2545dc3d633b4a"
  },
  {
    "url": "assets/js/16.6288b8c7.js",
    "revision": "b70efa1ddd43252cb0b1ff9b0f227c36"
  },
  {
    "url": "assets/js/17.4572a02c.js",
    "revision": "3cd58931d71b4c0b3d9905aeda7712bc"
  },
  {
    "url": "assets/js/18.515d9bb1.js",
    "revision": "f6005a1555e1f2fa830e2971bd608782"
  },
  {
    "url": "assets/js/19.a6350141.js",
    "revision": "57018a043f593b1e486f4cd0489c65c0"
  },
  {
    "url": "assets/js/2.cc1e3b21.js",
    "revision": "2ddf1d037488faecf664ace29afc68c8"
  },
  {
    "url": "assets/js/20.287922e7.js",
    "revision": "1d6e88f030e112f84c1dca39cbc27679"
  },
  {
    "url": "assets/js/21.4b9b64cf.js",
    "revision": "f0789b51b0e407ba7e3c8ca58614376c"
  },
  {
    "url": "assets/js/22.994db40e.js",
    "revision": "a3316028638bd302314513014ff13911"
  },
  {
    "url": "assets/js/23.4c9335fb.js",
    "revision": "d18566532cb91eb8d0e25a8abe025a02"
  },
  {
    "url": "assets/js/24.2caae87a.js",
    "revision": "89b512dec85f956ad8bf0f7b861fecdb"
  },
  {
    "url": "assets/js/25.180bcc5a.js",
    "revision": "206c649405ccbf0f212926ab065e11e6"
  },
  {
    "url": "assets/js/26.f4987097.js",
    "revision": "c54475f07158d722e74e96b029a56cdb"
  },
  {
    "url": "assets/js/27.e39d0e95.js",
    "revision": "360d23f32d69eee5768a2eb39c34bf7b"
  },
  {
    "url": "assets/js/28.db2c8d5f.js",
    "revision": "4cb90d38cb86faa39498d2f4b35228a2"
  },
  {
    "url": "assets/js/29.60e2dd82.js",
    "revision": "2cd80bafde66a86cb1b5a58e1bc572b2"
  },
  {
    "url": "assets/js/3.d8c5785d.js",
    "revision": "1b77223da3b51314bbbcfa6e115ee84f"
  },
  {
    "url": "assets/js/30.389f1631.js",
    "revision": "3727a81fe881e84bdcc57a62a096be54"
  },
  {
    "url": "assets/js/31.f7030153.js",
    "revision": "495699e493a96dc0ac5a285c2bbddb30"
  },
  {
    "url": "assets/js/4.21a0ef0b.js",
    "revision": "d551f837a1d63988458186058b6b998b"
  },
  {
    "url": "assets/js/5.d6f1d3be.js",
    "revision": "17c290e3a8eadb6db6719147c8de0b72"
  },
  {
    "url": "assets/js/6.ae94c91d.js",
    "revision": "577b76eee87c3186ef39707294509ea4"
  },
  {
    "url": "assets/js/7.f08858b6.js",
    "revision": "77738d24beea8a0ebfd7aa4f547020a3"
  },
  {
    "url": "assets/js/8.31d0810e.js",
    "revision": "b77f2fdf86a85cfacc98703be150e9a3"
  },
  {
    "url": "assets/js/9.481977f8.js",
    "revision": "026bc4c5da02b8d1ca04a233231c8b44"
  },
  {
    "url": "assets/js/app.00a4c46f.js",
    "revision": "dc0ccb5befb9c479541955894aa5e647"
  },
  {
    "url": "configuration.html",
    "revision": "e7791129b0eb379b9038bd10317693d3"
  },
  {
    "url": "examples/backend.html",
    "revision": "ba9f4fb420f146786d875ac3bb7c3ee1"
  },
  {
    "url": "examples/i18n.html",
    "revision": "4604b350e91aa0250fe389094397579c"
  },
  {
    "url": "examples/index.html",
    "revision": "5f7f3cabcb1f7c0b71d70bf2657bac97"
  },
  {
    "url": "examples/multiple-forms.html",
    "revision": "d7ead29631415b56147828207bf980b9"
  },
  {
    "url": "examples/nuxt.html",
    "revision": "727042268ee332c31b38788614875824"
  },
  {
    "url": "examples/ui-libraries.html",
    "revision": "8c3e5a2dde944ba322f098168af303d4"
  },
  {
    "url": "guide/a11y.html",
    "revision": "c81839f68fc5f10a02ad7f9c6d06eaa7"
  },
  {
    "url": "guide/advanced-validation.html",
    "revision": "ef8ad0bd7f62d6f437e9f209924c3985"
  },
  {
    "url": "guide/applying-rules.html",
    "revision": "9d95d19bfe16b7f301afa6f9e97b0314"
  },
  {
    "url": "guide/basic-validation.html",
    "revision": "6bdff9d4d77a59263d58954a8adb4094"
  },
  {
    "url": "guide/displaying-errors.html",
    "revision": "ea8d0c84b56e8c375424b4df4ff86f99"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b193dd2eed4e85a6277077664d22e2f1"
  },
  {
    "url": "guide/html5-validation.html",
    "revision": "18f977a0c2dbcf943e93d46eec49d7a1"
  },
  {
    "url": "guide/index.html",
    "revision": "d013570467326cb397f036fc85f24a83"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "1de3e17f0ba86f4f1463376ecf014faa"
  },
  {
    "url": "guide/localization.html",
    "revision": "cabd26e81906e2ac38f47930da31d2eb"
  },
  {
    "url": "guide/styling.html",
    "revision": "9e170a8967cc10bc15c83d6a8e7de324"
  },
  {
    "url": "guide/testing.html",
    "revision": "9969e89eb543329cf039ecb38c59b62b"
  },
  {
    "url": "guide/validation-observer.html",
    "revision": "6adca253e30e2bdc122044adf89e2a19"
  },
  {
    "url": "guide/validation-provider.html",
    "revision": "be750a9f61aa24e1e128b5ad0b1c852f"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "be702545b67828068db05234c585faa0"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
  }
].concat(self.__precacheManifest || []);
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
