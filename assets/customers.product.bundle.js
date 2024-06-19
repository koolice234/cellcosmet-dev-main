"use strict";
(self["webpackChunkshopify_theme"] = self["webpackChunkshopify_theme"] || []).push([["customers"],{

/***/ "./src/scripts/pages/page-account.js":
/*!*******************************************!*\
  !*** ./src/scripts/pages/page-account.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! when-dom-ready */ "./node_modules/when-dom-ready/dist/index.es2015.js");
/* harmony import */ var _modules_module_oneContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/module-oneContact */ "./src/scripts/modules/module-oneContact.js");
/* harmony import */ var _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/module-oneMarketing */ "./src/scripts/modules/module-oneMarketing.js");
/* harmony import */ var _styles_pages_account_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/pages/account.scss */ "./src/styles/pages/account.scss");




let urlPath = window.location.pathname.toLowerCase();
let urlHash = window.location.hash.toLowerCase();

(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
  console.log('init account page');
  if (urlPath == '/account/login') {
    // Login page
    var $accountLogin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.account.account-login');
    var $accountRecover = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.account.account-recover-password');
    if (urlHash.indexOf("recover") >= 0) {
      $accountRecover.removeClass('hide');
    } else {
      $accountLogin.removeClass('hide');
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.RecoverPassword').on('click', function () {
      $accountRecover.removeClass('hide');
      $accountLogin.addClass('hide');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.HideRecoverPasswordLink').on('click', function () {
      $accountLogin.removeClass('hide');
      $accountRecover.addClass('hide');
    });
  } else if (urlPath == '/account/register') {
    // Register page
    if (ORW.enableGTM) {
      ORW.marketing = ORW.marketing || new _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
  } else if (urlPath == '/account/invalid_token') {
    // Reset error page
    var $accountError = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.account.account-error');
    $accountError.removeClass('hide');
  } else if (urlPath == '/account/addresses') {
    // Addresses page

    if (Shopify) {
      // Initialize observers on address selectors, defined in shopify_common.js
      new Shopify.CountryProvinceSelector(
      // eslint-disable-next-line no-new
      'AddressCountryNew', 'AddressProvinceNew', {
        hideElement: 'AddressProvinceContainerNew'
      });
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.address-list-empty').length) {
        // Initialize each edit form's country/province selector
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.address-country-option').each(function () {
          var formId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('form-id');
          var countrySelector = 'AddressCountry_' + formId;
          var provinceSelector = 'AddressProvince_' + formId;
          var containerSelector = 'AddressProvinceContainer_' + formId;
          new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
            // eslint-disable-next-line no-new
            hideElement: containerSelector
          });
        });

        // Initialize each addresses delete action
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.address-delete').on('click', function () {
          var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
          var formId = $el.data('form-id');
          var confirmMessage = $el.data('confirm-message');
          if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
            Shopify.postLink('/account/addresses/' + formId, {
              // eslint-disable-next-line no-alert
              parameters: {
                _method: 'delete'
              }
            });
          }
        });
      }
      var toggleAddressForm = function (e) {
        var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
        var formId = $curr.data('form-id');
        var $formContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#EditAddress_' + formId);
        if ($formContainer.length) {
          $formContainer.fadeToggle();
        }
      };
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.address-edit-toggle, .address-new-toggle').on('click', function (e) {
        toggleAddressForm(e);
      });
    }
  }

  // Form validation
  _modules_module_oneContact__WEBPACK_IMPORTED_MODULE_2__["default"].init({
    el: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.account-wrapper form').parent(),
    submitType: 'custom',
    errorMsg: 'error',
    successMsg: 'success',
    requiredMsg: 'Required field.',
    errorEmail: 'Please provide a correct email address',
    onSubmit: function (e) {
      var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      var $form = $curr;
      if ($form.find('.fieldset.dob').length) {
        var $dobFieldset = $form.find('.fieldset.dob');
        var $dobField = $dobFieldset.find('#Dob');
        var dobMonth = $dobFieldset.find('#DobMonth').val();
        var dobDay = $dobFieldset.find('#DobDay').val();
        if (dobMonth && dobDay) {
          $dobField.val(dobMonth + '/' + dobDay).removeAttr('disabled');
        }
      }
      if (ORW.marketing) {
        ORW.marketing.accountForm($form);
      }
      return true;
    }
  });
});

/***/ }),

/***/ "./src/styles/pages/account.scss":
/*!***************************************!*\
  !*** ./src/styles/pages/account.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=customers.product.bundle.js.map