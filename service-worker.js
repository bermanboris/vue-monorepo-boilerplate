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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fee6fda5624cdff5667ef421a41d72a4"
  },
  {
    "url": "assets/css/2.styles.db1af2ec.css",
    "revision": "a026118f2b526d5830f40c828b107ad3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.2105ee28.js",
    "revision": "0226815a23843ab5eaa65b3ccfd03797"
  },
  {
    "url": "assets/js/1.0b86db34.js",
    "revision": "32685ed2ff145de00868a87de625fa87"
  },
  {
    "url": "assets/js/app.672e9e68.js",
    "revision": "e58947443b37e165cebc5a3fa5bb1f63"
  },
  {
    "url": "guide/index.html",
    "revision": "672674de9778c2e488dce5a10595d5b2"
  },
  {
    "url": "index.html",
    "revision": "3b927f485ced14cb15031932b3defa3d"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
