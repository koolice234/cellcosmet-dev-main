"use strict";
(self["webpackChunkshopify_theme"] = self["webpackChunkshopify_theme"] || []).push([["blog"],{

/***/ "./src/scripts/pages/page-blog.js":
/*!****************************************!*\
  !*** ./src/scripts/pages/page-blog.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! when-dom-ready */ "./node_modules/when-dom-ready/dist/index.es2015.js");
/* harmony import */ var _views_view_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/view-blog */ "./src/scripts/pages/views/view-blog.js");
/* harmony import */ var _styles_pages_blog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pages/blog.scss */ "./src/styles/pages/blog.scss");




(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
  new _views_view_blog__WEBPACK_IMPORTED_MODULE_2__["default"]({
    el: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#MainContent')
  });
});

/***/ }),

/***/ "./src/scripts/pages/views/view-blog.js":
/*!**********************************************!*\
  !*** ./src/scripts/pages/views/view-blog.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (opts) {
    console.log("init blog listing page");
    var self = this;
    self.$content = self.$el;
  },
  events: {},
  destroy: function () {
    var self = this;
    self.undelegateEvents();
  },
  responsive: function () {
    var self = this;
    ORW.utilities.mediaCheck(function () {
      // Desktop actions
    }, function () {
      // Mobile actions
    });
  },
  isMobile: function () {
    if (ORW.responsive == "small") {
      return true;
    }
    return false;
  }
}));

/***/ }),

/***/ "./src/styles/pages/blog.scss":
/*!************************************!*\
  !*** ./src/styles/pages/blog.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=blog.bundle.js.map