"use strict";
(self["webpackChunkshopify_theme"] = self["webpackChunkshopify_theme"] || []).push([["page.about"],{

/***/ "./src/scripts/pages/page-about.js":
/*!*****************************************!*\
  !*** ./src/scripts/pages/page-about.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! when-dom-ready */ "./node_modules/when-dom-ready/dist/index.es2015.js");
/* harmony import */ var _views_view_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/view-about */ "./src/scripts/pages/views/view-about.js");
/* harmony import */ var _styles_pages_about_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pages/about.scss */ "./src/styles/pages/about.scss");




(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
  new _views_view_about__WEBPACK_IMPORTED_MODULE_2__["default"]({
    el: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#MainContent')
  });
});

/***/ }),

/***/ "./src/scripts/pages/views/view-about.js":
/*!***********************************************!*\
  !*** ./src/scripts/pages/views/view-about.js ***!
  \***********************************************/
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
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/module-oneVideo */ "./src/scripts/modules/module-oneVideo.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (opts) {
    console.log('init about page');
    var self = this;
    self.$content = self.$el;
    self.$moduleE = self.$content.find('.about-module-e');
    self.$moduleF = self.$content.find('.about-module-f');
    if (self.$moduleE.length > 0) {
      self.moduleE();
    }
    if (self.$moduleF.length > 0) {
      self.moduleF();
    }
  },
  events: {},
  moduleE: function () {
    var self = this;
    var $videos = self.$moduleE.find('.video-wrapper');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()($videos).each(function () {
      _modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_4__["default"].init({
        el: this,
        isResponsive: false,
        bgVideo: true,
        autoplay: true
      });
    });
  },
  moduleF: function () {
    var self = this;
    var $productSlider = self.$moduleF.find('.product-slider.slick');
    var $editorialSlider = self.$moduleF.find('.editorial-slider.slick');
    var $editorialTitleSlider = self.$moduleF.find('.editorial-title-slider.slick');
    $productSlider.slick({
      dots: false,
      infinite: true,
      speed: 600,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 2,
      arrows: true,
      mobileFirst: true,
      responsive: [{
        breakpoint: ORW.responsiveSizes.medium,
        settings: {
          centerPadding: '80px',
          slidesToShow: 4
        }
      }, {
        breakpoint: ORW.responsiveSizes.large,
        settings: {
          centerPadding: '100px',
          slidesToShow: 5
        }
      }]
    });

    // var $scrollableProducts = self.$moduleB.find('.scrollable');
    // OneCustomScroll.init({
    //     el: $scrollableProducts[0], // HTML object (required), not a jQuery object,
    //     margin: 40 // Number (optional), margin off of the containers bounds.
    // });
    if ($editorialSlider.length && $editorialTitleSlider.length) {
      $editorialSlider.slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        arrows: false,
        mobileFirst: true,
        asNavFor: $editorialTitleSlider
      });
      $editorialTitleSlider.slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        arrows: false,
        mobileFirst: true,
        asNavFor: $editorialSlider
      });
    }
  },
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
    if (ORW.responsive == 'small') {
      return true;
    }
    return false;
  }
}));

/***/ }),

/***/ "./src/styles/pages/about.scss":
/*!*************************************!*\
  !*** ./src/styles/pages/about.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=page.about.bundle.js.map