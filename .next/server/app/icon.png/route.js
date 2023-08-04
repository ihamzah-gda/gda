"use strict";
(() => {
var exports = {};
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ficon.png%2Froute&isDynamic=0!./app/icon.png?__next_metadata_route__
var icon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(icon_next_metadata_route_namespaceObject);
__webpack_require__.d(icon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ficon.png%2Froute&isDynamic=0!./app/icon.png?__next_metadata_route__


const contentType = "image/png"
const buffer = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAGEAAABgCAYAAAANWhwGAAAACXBIWXMAAAsSAAALEgHS3X78AAAFoklEQVR4nO2d0XHbMAyGqV7fnQF0Z3eCeoM6E8QbhNnAnaDOBHUniDJBkwkSTxB7gtp3GiCeQD34IJWmKUsiSAnp4bvzWyRR/AkCBEElKYpCCcPySfp/eEQEBogIDBARGCAiMEBEYICIwAARgQEiAgNEBAaICAwQERggIjBARGCAiMAAEYEBIgIDRAQGiAgMEBEYICIw4HOsJiRZPlVKwW9i/GKwKnT6ZD07U+Get8PfRin1Wuj0PfQ7BCt5SbL8Sik1x99NkJs2c4DONjsmyfKZUuol4jO3IAaKvwtxQ7IIOOIXSqnbEA3qyH2h06XVHuigbz09f62UWhY6faXcxFuEJMvB3Fc9jnqbIaygDpIYXo45yXIYfX8GFADIHPPzsuZvYwOW95Jk+Qqn5U50sgQc/eAEvw70siZfzDl5QCuw2YNfLHS6aXtBa0vAuX/DRIBHh1PUA7XFZgyOO8nyedsLWomQZDm84JtSahSqpURsZzwZKDCoA/rpN/ZbI40ioKIPQ7xJDS4rGMoXNPHQRoiLPgGnoFdGFqAcvmCCQQJXIIqbXfIRtZaAXp6bAB/JCkpG6CNqo6ZL01HGTACF65IKhr6gjhH2pxOnCOgHhlwDuFg7THrBo2mtuKmLmM4SeGg2tap5AvkWauLLjoiuCGHpvsU7lonHkCmQFa6zTnBlUReBpqFt+dAYmUdiOzM751SHkZjUAQQZQ7RU6PRkAJxER/jAHVEEiAa0nV4OCbGdZzmntuB0QvWV+0KnJ2l22yfMiQ9Y4wtGEwChWMHK1zLxvSZo5b6Mbd9gi0BxdBA+ziJNPRVoBb7t3NsRVlfg/QqdTnHA+XLiyyoRMNzzzQtte4xUfK31gIm1UINkTrCIk8jTtIQZpUGxLcDAZ3G2bVq1dgXf1ztpiFnfIyFEuA+1zdcE5mHGHS6Bzr+D6SOkACV4z0fPy6v+NkPUqefNSHNsRyCNct3ikvcYnV7D0nPV7hTBxx889zgNKbS4XqyuLdCmJMu3Hv1X5ZKodUekDe7/CJ9+qEQ7imA6iY70ZfLcIVlntOIvChgulzVMVHQPgQNpMLISARdiq4Dp6XVfkRsFNiIYm0ghCwn62vDxjSyPHH0CoYKM9HCL0AJsqZVxHSDVvVKjI8oquwKLyUKX0vS5fvHxXVXuyRTBJw9y41NxZkJMyNWxt3P2scBiiC6r+JJqfWWK4OvhqR2oI+xl97n57/v+VX8HEYFoDR/ZCmaESK7yV6YIvhsxFysJLuGRkGtDL1ZA3Is/mEGDvb1JqTWFTZ1OqV0UwY4sKGUsZ1uHMQgQTp/0lb1OAGV/et74Nsly1UUI17SBR518iW4FgdYz0Tf6t5gq6OxjiCWN0a0ALXdF7R/cHq04WSdgWpoaX8MIeYMR3aU8HKGM5ChWAAMTOj/J8h0WRlMjubP+PSsIDmQNJgeMvDYtCsB+eD7jzApwAFAjr0ngwAFyWWcL3LPcEVgDHPshdIjNCIumYh7mc/mRVYTIi4rTWp1pC6xOo9TW9MnBUSgcI/Sl8qsul3Upd6TxBbnjKubiVigMzri2TbUiYHTDverZZQUzJufqSg5NCb6LWVSM4+9itCwQLivgdGikPKVzcWOpMZXNWIg6K+jrNH8TjcekSlrtJzAVgtNhcpt9l4q/1ps6KMQ1I2fN1QqeYccxymFy9W8bdIIPGhKOBwhhcH4vdNq5LpfygZH5gAsibsdooR514VuN6L3HDAcmMFVw1/PCjosVHLDzYUBoSjloyI9OTXGBN49sHUNawQHT2E8hz+JF+Wd32DFT40cqBjB4dXxkSkf8uMjO/PxarEpv+Y+DDJCvQTJARGCAiMAAEYEBIgIDRAQGiAgMEBEYICIwQERggIjAABGBASICA0QEBogIDBARGCAiMEBEYICIwAARgQEiwtAopf4C16YtesWGYxAAAAAASUVORK5CYII=", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, immutable, no-transform, max-age=31536000",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ficon.png%2Froute&name=app%2Ficon.png%2Froute&pagePath=private-next-app-dir%2Ficon.png&appDir=%2FUsers%2Fibrahim%2FDesktop%2FNot%20Synced.nosync%2FWebsite%20Testing%2Fv10%20-%20eb%2Fgda-app%2Fapp&appPaths=%2Ficon.png&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/icon.png/route","pathname":"/icon.png","filename":"icon","bundlePath":"app/icon.png/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ficon.png%2Froute&isDynamic=0!/Users/ibrahim/Desktop/Not Synced.nosync/Website Testing/v10 - eb/gda-app/app/icon.png?__next_metadata_route__","nextConfigOutput":"export"}
    const routeModule = new (module_default())({
      ...options,
      userland: icon_next_metadata_route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/icon.png/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,4218], () => (__webpack_exec__(1401)));
module.exports = __webpack_exports__;

})();