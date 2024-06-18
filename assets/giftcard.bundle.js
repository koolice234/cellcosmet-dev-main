"use strict";
(self["webpackChunkshopify_theme"] = self["webpackChunkshopify_theme"] || []).push([["giftcard"],{

/***/ "./src/scripts/pages/page-giftcard.js":
/*!********************************************!*\
  !*** ./src/scripts/pages/page-giftcard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! when-dom-ready */ "./node_modules/when-dom-ready/dist/index.es2015.js");


(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
  console.log('init giftcard');
  var config = {
    qrCode: '#QrCode',
    printButton: '#PrintGiftCard',
    giftCardCode: '.giftcard__code'
  };
  var $qrCode = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#QrCode');
  new QRCode($qrCode[0], {
    text: $qrCode.attr('data-identifier'),
    width: 120,
    height: 120
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(config.printButton).on('click', function () {
    window.print();
  });

  // Auto-select gift card code on click, based on ID passed to the function
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(config.giftCardCode).on('click', {
    element: 'GiftCardDigits'
  }, selectText);
  function selectText(evt) {
    var text = document.getElementById(evt.data.element);
    var range = '';
    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      var selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=giftcard.bundle.js.map