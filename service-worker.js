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
    "revision": "47f0d5e09a7d3fac9d2fdffcc4fcbcea"
  },
  {
    "url": "assets/css/0.styles.0e679f3e.css",
    "revision": "40699468f816415afa33bb135ec1f8b2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cee86537.js",
    "revision": "28a4f4047d0c4ded4ba0f0e4e6911333"
  },
  {
    "url": "assets/js/11.fb61f4f6.js",
    "revision": "d50ff499a5544145e9e933fc4eb42578"
  },
  {
    "url": "assets/js/12.16e51058.js",
    "revision": "7f750d21e1eb8777354ff0b3df75f2c8"
  },
  {
    "url": "assets/js/13.4c8bec93.js",
    "revision": "a7f00408ae48329e4b485f115155ee94"
  },
  {
    "url": "assets/js/14.72a02057.js",
    "revision": "f4c442f2f6b24d3a51311ade6440643a"
  },
  {
    "url": "assets/js/15.5692781d.js",
    "revision": "4a7758382cb41a4190f41e53c8ddbdb8"
  },
  {
    "url": "assets/js/16.3e5ca33d.js",
    "revision": "b17f7fe3406480888e6d284c53652aa2"
  },
  {
    "url": "assets/js/17.754b68da.js",
    "revision": "0054f0c98d028b08a14639b46dcea33d"
  },
  {
    "url": "assets/js/18.7ac81b5d.js",
    "revision": "c2695397bac04183cdadb17610698c0f"
  },
  {
    "url": "assets/js/19.752c3f56.js",
    "revision": "5f9601ed4583371cee0d683579fe351c"
  },
  {
    "url": "assets/js/2.9c63479a.js",
    "revision": "cf1751ffc0b5ae3c3e38d4cff11f1440"
  },
  {
    "url": "assets/js/20.4efc19ea.js",
    "revision": "459b028c17d20866f9effb150f878c9a"
  },
  {
    "url": "assets/js/21.be54593a.js",
    "revision": "7b440447ba8ab391312a7b3e3162fdc7"
  },
  {
    "url": "assets/js/22.a5502e3e.js",
    "revision": "3c6cc8dd8f8858058835dcbafdfde3c4"
  },
  {
    "url": "assets/js/23.a4a8361a.js",
    "revision": "ebfff9de010d849c8bca995968a1913d"
  },
  {
    "url": "assets/js/24.c1532144.js",
    "revision": "b050831c600b4b71a92ccc1b67bfce7f"
  },
  {
    "url": "assets/js/25.4eabb438.js",
    "revision": "a67a0b8149ea18eda817761f7a63c556"
  },
  {
    "url": "assets/js/26.51554094.js",
    "revision": "8504796ef26f2ebf48ea9a6254cca332"
  },
  {
    "url": "assets/js/27.0a62f8c1.js",
    "revision": "d26d035629dba19073aff213a09a01f7"
  },
  {
    "url": "assets/js/28.ae7ef5bd.js",
    "revision": "b1b9e0ab4f8021f5441147a70514db42"
  },
  {
    "url": "assets/js/29.06666d48.js",
    "revision": "2e1e61b24aab4825627fc0646260e1dd"
  },
  {
    "url": "assets/js/3.2c4fd210.js",
    "revision": "1af7d2436eebb5bdbbef438757b81113"
  },
  {
    "url": "assets/js/30.736800cb.js",
    "revision": "4d7fcd2465d9985f59348ab054e77987"
  },
  {
    "url": "assets/js/31.3a388976.js",
    "revision": "ed3bc4259ee1b7d1451eed6867d8091c"
  },
  {
    "url": "assets/js/32.5e4f1c47.js",
    "revision": "6361cc2a38803c709ea93170525d9f3e"
  },
  {
    "url": "assets/js/4.d45eafdf.js",
    "revision": "3966953e5831583c8b80413aabee913f"
  },
  {
    "url": "assets/js/5.b89c96e6.js",
    "revision": "8340c21412907131f5e322cefb5e49e0"
  },
  {
    "url": "assets/js/6.ca0782f7.js",
    "revision": "52e82228ccbebc271ac88259eae7a329"
  },
  {
    "url": "assets/js/7.c84146f4.js",
    "revision": "eacb16b97e7af79e1cf5699ee2955882"
  },
  {
    "url": "assets/js/8.1936f7cf.js",
    "revision": "fe1a527723f12e3fa3e07c9e1d96ed9e"
  },
  {
    "url": "assets/js/9.e6f429b5.js",
    "revision": "2fde92e174237315f9bbd127557dda80"
  },
  {
    "url": "assets/js/app.15730a9d.js",
    "revision": "d3fbf96e944dc21570a1103015e6d0a1"
  },
  {
    "url": "cli/index.html",
    "revision": "a4e2202a5a1d5db5ea85aa5ff2259ce3"
  },
  {
    "url": "config/application/index.html",
    "revision": "08a65130311d6946221cf9ea5a4f9701"
  },
  {
    "url": "config/applicationSecurityPolicy/index.html",
    "revision": "1d83251971f15d1fbe9618b13e5a1283"
  },
  {
    "url": "config/external/index.html",
    "revision": "d29529a6c6c94027a13ed18bcced8f0d"
  },
  {
    "url": "config/externalSecurityPolicy/index.html",
    "revision": "3b0b74f4cd5ce2074a462e8be5692d84"
  },
  {
    "url": "config/index.html",
    "revision": "e64f9083f8c527d939ac313f2d673100"
  },
  {
    "url": "config/metadata/index.html",
    "revision": "7f2e74f1714f47896b95e78701e269ac"
  },
  {
    "url": "config/service/index.html",
    "revision": "90e338ab8b7f7fc8b33122117edba5e7"
  },
  {
    "url": "config/serviceSecurityPolicy/index.html",
    "revision": "0f8f75b97d81ad855e7e1e3c8ac3fd73"
  },
  {
    "url": "config/session/index.html",
    "revision": "bf2e4b06e353a21261bcbe68c6f18f85"
  },
  {
    "url": "config/storage/index.html",
    "revision": "51080d4178b5a1062521345a42242b7a"
  },
  {
    "url": "config/tray/index.html",
    "revision": "3ba12391b7e88065bce1dd94717b43d7"
  },
  {
    "url": "config/updatePolicy/index.html",
    "revision": "f1a7649e1c4247b96d63975816834585"
  },
  {
    "url": "favicon-16.png",
    "revision": "96549c584a8e0fe1736caedac20ba4ce"
  },
  {
    "url": "favicon-32.png",
    "revision": "fd6f990095840d43ddde90a3e06ddd12"
  },
  {
    "url": "guide/index.html",
    "revision": "bc7b32045ebdd31f5889f0553dd602ce"
  },
  {
    "url": "icon-256.png",
    "revision": "630a99247bd8c4bff944a41035c5f1b5"
  },
  {
    "url": "icon-512.png",
    "revision": "079bf353ee7c2456844800e3ff607e5f"
  },
  {
    "url": "index.html",
    "revision": "0855526a36d77917d2e02f2f6124fc19"
  },
  {
    "url": "sdk/desktop/index.html",
    "revision": "e7a27c13eb4625759866615f37befcf3"
  },
  {
    "url": "sdk/globalshortcut/index.html",
    "revision": "3edcacf09c75a9012da95f884e34f71b"
  },
  {
    "url": "sdk/index.html",
    "revision": "99c869e9dd0d2831a7f3da56610f97ee"
  },
  {
    "url": "sdk/launcher/index.html",
    "revision": "9e64c8c8ce472e3abcb78de4eb869fd6"
  },
  {
    "url": "sdk/logger/index.html",
    "revision": "c4ce597035b45f6769baecf64312a780"
  },
  {
    "url": "sdk/registry/index.html",
    "revision": "5639941a3515c33b80944b9d74c48e70"
  },
  {
    "url": "sdk/router/index.html",
    "revision": "0366266d2dc0c7bc4039eb03ee324056"
  },
  {
    "url": "sdk/window/index.html",
    "revision": "b54668e8d89b16b5291f679fd79a1be3"
  },
  {
    "url": "support/index.html",
    "revision": "a2f043229cebdc2428afe01a5b2ed936"
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
