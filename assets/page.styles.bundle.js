"use strict";
(self["webpackChunkshopify_theme"] = self["webpackChunkshopify_theme"] || []).push([["page.styles"],{

/***/ "./src/scripts/pages/page-styleGuide.js":
/*!**********************************************!*\
  !*** ./src/scripts/pages/page-styleGuide.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! when-dom-ready */ "./node_modules/when-dom-ready/dist/index.es2015.js");
/* harmony import */ var _views_view_styleGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/view-styleGuide */ "./src/scripts/pages/views/view-styleGuide.js");
/* harmony import */ var _styles_pages_styleguide_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pages/styleguide.scss */ "./src/styles/pages/styleguide.scss");




(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
  new _views_view_styleGuide__WEBPACK_IMPORTED_MODULE_2__["default"]({
    el: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.style-guide-wrapper')
  });
});

/***/ }),

/***/ "./src/scripts/pages/views/view-styleGuide.js":
/*!****************************************************!*\
  !*** ./src/scripts/pages/views/view-styleGuide.js ***!
  \****************************************************/
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
  // Styleguide Init Function
  initialize: function (opts) {
    console.log('init styleguide view !');
    var self = this;
    self.initGrid();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function () {
      self.$el.find('.grid-col').removeClass('show-frame');
    });
  },
  events: {
    'click .bleeding-ctl': function (e) {
      var self = this;
      e.preventDefault();
      e.stopPropagation();
      self.$el.toggleClass('full-bleed');
    },
    'click .frame-ctl': function (e) {
      var self = this;
      e.preventDefault();
      e.stopPropagation();
      self.$el.find('.grid-system').toggleClass('show-frame');
    },
    'click .grid-col': function (e) {
      var self = this,
        $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      e.preventDefault();
      e.stopPropagation();
      self.$el.find('.grid-col').not(e.currentTarget).removeClass('show-frame');
      $curr.toggleClass('show-frame');
    }
  },
  initGrid: function () {
    var self = this,
      html = '';
    self.$grid = self.$el.find('.grid-system');
    if (self.$grid.length && gridConfig) {
      underscore__WEBPACK_IMPORTED_MODULE_1___default().each(gridConfig, function (row, index) {
        html += '<div class="grid-row" title="row: ' + (index + 1) + '">';
        if (row.col && row.col.length > 0) {
          underscore__WEBPACK_IMPORTED_MODULE_1___default().each(row.col, function (col) {
            switch (col.style) {
              case 'padding':
                html += '<div class="grid-col grid-padding grid-col-' + col.value + '"></div>';
                break;
              case 'margin':
                html += '<div class="grid-col grid-col-with-margin-' + col.value + '"></div>';
                break;
              default:
                html += '<div class="grid-col grid-col-' + col.value + '"></div>';
            }
          });
        } else if (row.col) {
          var temp = '<div class="grid-col grid-col-with-margin-1"></div>';
          html += temp.repeat(12);
        }
        html += '</div>';
      });
      self.$grid.append(html);
    }
  },
  destroy: function () {
    this.undelegateEvents();
  }
}));

/***/ }),

/***/ "./src/styles/pages/styleguide.scss":
/*!******************************************!*\
  !*** ./src/styles/pages/styleguide.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=page.styles.bundle.js.map