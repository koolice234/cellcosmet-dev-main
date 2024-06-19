"use strict";
(self["webpackChunkshopify_theme"] = self["webpackChunkshopify_theme"] || []).push([["cart"],{

/***/ "./src/scripts/pages/page-cart.js":
/*!****************************************!*\
  !*** ./src/scripts/pages/page-cart.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var when_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! when-dom-ready */ "./node_modules/when-dom-ready/dist/index.es2015.js");
/* harmony import */ var _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/module-oneMarketing */ "./src/scripts/modules/module-oneMarketing.js");
/* harmony import */ var _modules_module_oneCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/module-oneCart */ "./src/scripts/modules/module-oneCart.js");
/* harmony import */ var _styles_pages_cart_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pages/cart.scss */ "./src/styles/pages/cart.scss");




(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  if (ORW.enableGTM) {
    ORW.marketing = ORW.marketing || new _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_1__["default"]();
    ORW.marketing.viewCart();
  }
  const cartElem = document.querySelector('main form.cart');
  if (cartElem) {
    new _modules_module_oneCart__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: cartElem
    });
  }
});

/***/ }),

/***/ "./src/styles/pages/cart.scss":
/*!************************************!*\
  !*** ./src/styles/pages/cart.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=cart.bundle.js.map