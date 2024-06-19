(self["webpackChunkshopify_theme"] = self["webpackChunkshopify_theme"] || []).push([["src_scripts_modules_module-oneQuickShop_js"],{

/***/ "./src/scripts/lib/jquery.doubletap.js":
/*!*********************************************!*\
  !*** ./src/scripts/lib/jquery.doubletap.js ***!
  \*********************************************/
/***/ (() => {

(function ($) {
  $.event.special.doubletap = {
    bindType: 'touchend',
    delegateType: 'touchend',
    handle: function (event) {
      var handleObj = event.handleObj,
        targetData = jQuery.data(event.target),
        now = new Date().getTime(),
        delta = targetData.lastTouch ? now - targetData.lastTouch : 0,
        delay = delay == null ? 300 : delay;
      if (delta < delay && delta > 30) {
        targetData.lastTouch = null;
        event.type = handleObj.origType;
        ['clientX', 'clientY', 'pageX', 'pageY'].forEach(function (property) {
          event[property] = event.originalEvent.changedTouches[0][property];
        });

        // let jQuery handle the triggering of "doubletap" event handlers
        handleObj.handler.apply(this, arguments);
      } else {
        targetData.lastTouch = now;
      }
    }
  };
})(jQuery);

/***/ }),

/***/ "./src/scripts/modules/module-oneProductForm.js":
/*!******************************************************!*\
  !*** ./src/scripts/modules/module-oneProductForm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../lib/pubsub */ "./src/scripts/lib/pubsub.js");
/* harmony import */ var _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/module-oneMarketing */ "./src/scripts/modules/module-oneMarketing.js");
/* harmony import */ var _styles_modules_oneSwatch_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/modules/oneSwatch.scss */ "./src/styles/modules/oneSwatch.scss");
/*
	OneSwatches 2.2.0 Usage (Webpack)
	Yang @onerockwell
	Adding option availablity check

	OneSwatches 2.1.0 Usage
	Yang @onerockwell
	Adding option availablity check
	
	OneSwatches 2.0.0 Usage
	Yang @onerockwell
	
	OneSwatches 1.0.0 Usage
	Yang & Patrick @onerockwell
*/

// Import all dependencies here






// Define the Backbone View here (Optional)
let OneProductFormView = backbone__WEBPACK_IMPORTED_MODULE_1___default().View.extend({
  /**
   * @param {Boolean} settings.preSelect Pre-select the first variant
   * @param {Boolean} settings.updateURL Update the "variant" URL parameter on variant change
   */
  initialize: function (settings) {
    this.settings = settings || {};

    // Master ID input is disabled by default to give <noscript> form priority
    this.el.querySelector('[name="id"]').disabled = false;
    this.setVariant();
    this.onVariantChange();
    this.el.addEventListener('submit', e => this.onFormSubmit(e));
  },
  events: {
    'change': 'onVariantChange'
  },
  onFormSubmit: function (e) {
    e.preventDefault();
    this.handleErrorMessage();
    const formData = new FormData(this.el);
    const config = {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/javascript'
      },
      body: formData
    };
    fetch(this.el.getAttribute('action'), config).then(response => response.json()).then(response => {
      if (response.status) {
        (0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.PUB_SUB_EVENTS.cartError, {
          errors: response.errors || response.description,
          message: response.message
        });
        this.handleErrorMessage(response.description);
      } else {
        (0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.PUB_SUB_EVENTS.cartUpdate, response);
        if (ORW.enableGTM) {
          ORW.marketing = ORW.marketing || new _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_3__["default"]();
          ORW.marketing.addToCart(this.el);
        }
      }
    });
  },
  handleErrorMessage: function (errorMessage = false) {
    if (this.hideErrors) return;
    this.errorMessage = this.errorMessage || this.el.querySelector('.form-errors');
    if (!this.errorMessage) return;
    this.errorMessage.toggleAttribute('hidden', !errorMessage);
    if (errorMessage) {
      this.errorMessage.textContent = errorMessage;
    }
  },
  onVariantChange: function () {
    this.updateOptions();
    this.updateMasterId();
    this.updateVariantStatuses();
    this.updateAddButton();
    if (this.currentVariant) {
      this.updateVariantInput();
      this.settings.updateURL && this.updateURL();
    }
  },
  /**
      *  Mark radios as checked if a variant is present in the URL params or if
      *  preSelect setting is true
      */
  setVariant: function () {
    const params = new URLSearchParams(window.location.search);
    const variantId = this.settings.preSelect ? this.getVariantData()[0].id : params.get('variant');
    if (variantId) {
      this.currentVariant = this.getVariantData().find(variant => {
        return variant.id.toString() === variantId.toString();
      });
      if (this.currentVariant) {
        this.currentVariant.options.forEach(option => {
          this.el.querySelector(`[value="${option}"]`).checked = true;
        });
      }
    }
  },
  updateAddButton: function () {
    this.numOptions = this.numOptions || this.el.querySelectorAll('fieldset').length;
    const addButton = this.el.querySelector('[name="add"]');
    const addButtonText = this.el.querySelector('[name="add"] > span');
    if (!addButton) return;
    if (this.currentVariant && this.currentVariant.available) {
      addButton.removeAttribute('disabled');
      addButtonText.textContent = 'Add to Cart';
    } else if (this.currentVariant && !this.currentVariant.available) {
      addButton.setAttribute('disabled', 'disabled');
      addButtonText.textContent = 'Sold Out';
    } else {
      addButton.setAttribute('disabled', 'disabled');
      addButtonText.textContent = this.options?.length < this.numOptions ? 'Add to Cart' : 'Unavailable';
    }
  },
  updateOptions: function () {
    const fieldsets = Array.from(this.el.querySelectorAll('fieldset'));
    this.options = fieldsets.map(fieldset => {
      return Array.from(fieldset.querySelectorAll('input')).find(input => input.checked)?.value;
    }).filter(Boolean);
    (0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.PUB_SUB_EVENTS.variantOptionsChange, this.options);
  },
  updateMasterId: function () {
    this.currentVariant = this.getVariantData().find(variant => {
      // Assumes that options appear in the same order as they do in the DOM
      return !variant.options.map((option, index) => {
        return this.options[index] === option;
      }).includes(false);
    });
    if (this.currentVariant) (0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_2__.PUB_SUB_EVENTS.variantChange, this.currentVariant);
  },
  // Mark radios as disabled depending on currently selected values
  updateVariantStatuses: function () {
    if (!this.el.querySelector(':checked')) return;
    const selectedOptionOneVariants = this.getVariantData().filter(variant => this.el.querySelector(':checked').value === variant.option1);
    const inputWrappers = [...this.el.querySelectorAll('fieldset')];
    inputWrappers.forEach((option, index) => {
      if (index === 0) return;
      const optionInputs = [...option.querySelectorAll('input[type="radio"], option')];
      const previousOptionSelected = inputWrappers[index - 1].querySelector('[checked],:checked');
      if (!previousOptionSelected) return;
      const availableOptionInputsValue = selectedOptionOneVariants.filter(variant => variant.available && variant[`option${index}`] === previousOptionSelected.value).map(variantOption => variantOption[`option${index + 1}`]);
      this.setInputAvailability(optionInputs, availableOptionInputsValue);
    });
  },
  setInputAvailability: function (listOfOptions, listOfAvailableOptions) {
    listOfOptions.forEach(input => {
      if (listOfAvailableOptions.includes(input.getAttribute('value'))) {
        input.classList.remove('disabled');
      } else {
        input.classList.add('disabled');
      }
    });
  },
  getVariantData: function () {
    this.variantData = this.variantData || JSON.parse(this.el.querySelector('.variants-json').textContent);
    return this.variantData;
  },
  updateVariantInput: function () {
    const input = this.el.querySelector('input[name="id"]');
    input.value = this.currentVariant.id;
  },
  toggleAddButton: function (disable = true, text) {
    const productForm = this.el.querySelector('form.add-to-cart-form');
    if (!productForm) return;
    const addButton = productForm.querySelector('[name="add"]');
    const addButtonText = productForm.querySelector('[name="add"] > span');
    if (!addButton) return;
    if (disable) {
      addButton.setAttribute('disabled', 'disabled');
      if (text) addButtonText.textContent = text;
    } else {
      addButton.removeAttribute('disabled');
      addButtonText.textContent = 'Add to Cart';
    }
  },
  updateURL: function () {
    if (this.currentVariant) {
      window.history.replaceState({}, '', `${window.location.pathname}?variant=${this.currentVariant.id}`);
    }
  },
  destroy: function () {
    var self = this;
    self.undelegateEvents();
  }
});

// Define the module here 
let OneProductForm = {
  init: function (settings) {
    return new OneProductFormView(settings);
  }
};

// Output the module
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneProductForm);

/***/ }),

/***/ "./src/scripts/modules/module-oneQuickShop.js":
/*!****************************************************!*\
  !*** ./src/scripts/modules/module-oneQuickShop.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/module-oneDrawer */ "./src/scripts/modules/module-oneDrawer.js");
/* harmony import */ var _pages_views_view_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/views/view-product */ "./src/scripts/pages/views/view-product.js");
/* harmony import */ var _styles_pages_product_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/pages/product.scss */ "./src/styles/pages/product.scss");
/* harmony import */ var _styles_pages_product_product_quickshop_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/pages/product/product-quickshop.scss */ "./src/styles/pages/product/product-quickshop.scss");
/*
    OneQuickShop 2.0.0 Usage (Webpack)
    yang @onerockwell        
*/

// Import all dependencies here








// Define the Backbone View here (Optional)
let OneQuickShopView = backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (settings) {
    console.log('init quickshop');
    var self = this;
    self.quickshop();
  },
  events: {},
  quickshop: function () {
    var self = this;

    /*
        Possible trigger of this function are :
        1. Click on '.quick-shop-trigger' which has data-url or href attribute.
        2. Click on '.swatch-linked' in quickshop container, which has data-url or href attribute.
        3. Direct call with 'event' object and target url as param.
    */
    var quickshopCtl = function (e, url) {
      e.stopPropagation();
      e.preventDefault();
      var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      if (url) {
        var url = ORW.utilities.updateUrlParam(url, 'view', 'quickshop');
      } else {
        var url = $curr.data('url') ? ORW.utilities.updateUrlParam($curr.data('url'), 'view', 'quickshop') : ORW.utilities.updateUrlParam($curr.attr('href'), 'view', 'quickshop');
      }
      console.log(url);
      if (url == '#?view=quickshop') {
        // Skip the empty URL 
        return false;
      }
      if (self.$currentQuickshop) {
        self.$currentQuickshop.destroy();
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
        async: true,
        type: 'GET',
        url: url,
        cache: true,
        error: function (err) {
          console.log(err);
        },
        success: function (html) {
          var $productDetail = jquery__WEBPACK_IMPORTED_MODULE_0___default()(html).find('.product-quickshop');
          var quickshopHtml = $productDetail[0].outerHTML;
          $productDetail.remove();
          if (self.$currentModal) {
            // Replace content html
            self.$currentModal.$drawer.find('.product-quickshop').remove();
            self.$currentModal.$drawer.find('.drawer-content').append(quickshopHtml);
            self.$currentQuickshop = new _pages_views_view_product__WEBPACK_IMPORTED_MODULE_4__["default"]({
              el: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-quickshop .product-detail-container')
            });
          } else {
            _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_3__["default"].init({
              drawerContent: quickshopHtml,
              drawerModalId: 'QuickShopDrawerModal',
              triggerEvent: 'click',
              triggerElem: '.quick-shop-hidden-trigger',
              initCallback: function () {
                self.$currentModal = this;
                self.$currentModal.openDrawer();
              },
              openCallback: function () {
                self.$currentQuickshop = new _pages_views_view_product__WEBPACK_IMPORTED_MODULE_4__["default"]({
                  el: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-quickshop .product-detail-container')
                });
              },
              closeCallback: function () {
                if (self.$currentModal) {
                  self.$currentModal.destroy();
                  self.$currentModal = false;
                }
              },
              events: {
                'ajax-reload-inner': function (e, url) {
                  quickshopCtl(e, url);
                }
              }
            });
          }
        }
      });
    };
    var events = {
      'click .quick-shop-trigger': quickshopCtl,
      'click .quick-shop-trigger-link': quickshopCtl
    };

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  destroy: function () {
    var self = this;
    self.undelegateEvents();
  }
});

// Define the module here 
let OneQuickShop = {
  init: function (settings) {
    if (!settings.el) {
      settings.el = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    }
    return new OneQuickShopView(settings);
  }
};

// Output the module
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneQuickShop);

/***/ }),

/***/ "./src/scripts/modules/module-oneRecentlyViewed.js":
/*!*********************************************************!*\
  !*** ./src/scripts/modules/module-oneRecentlyViewed.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_modules_oneRecentlyViewed_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/modules/oneRecentlyViewed.scss */ "./src/styles/modules/oneRecentlyViewed.scss");
/*
 * OneRecentlyViewed 1.0 (Webpack)
 * Tracks recently viewed products and appends them to a jQuery object
 * Nic Shak | nshak@onerockwell.com
 * 
 * Usage:
 * 
 * <div class="recently-viewed">
 *     <h2>Recently Viewed</h2>
 *     <div class="items"></div>
 * </div>
 * 
 * OneRecentlyViewed.init({
 *     el: $('.recently-viewed .items')
 * });
 */





let OneRecentlyViewedView = backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (settings = {}) {
    let self = this;
    self.$target = settings.el || undefined;
    self.maxProducts = 4;
    self.cookieKey = "recentlyviewed";
    self.cookieDays = 30;
    let cookie = self.readCookie();
    if (self.$target) {
      self.renderProducts(cookie.products);
    }
    self.recordCookie(cookie);
  },
  events: {},
  /*
   * Reads cookie from browser and returns it. Returns a default
   * template if it does not exist.
   * 
   * @return {Object} The object stored in the cookie
   */
  readCookie: function () {
    let self = this;
    let cookie = ORW.utilities.getCookie(self.cookieKey);

    // Parse cookie or initialize to default if doesn't exist
    let parsedCookie = cookie ? JSON.parse(cookie) : {
      products: []
    };
    return parsedCookie;
  },
  /*
   * Adds product current to the queue (or brings it to the front
   * if present) and writes the data to the cookie
   * 
   * @param {Object} oldCookie The cookie to be mutated
   */
  recordCookie: function (oldCookie) {
    let self = this;

    // If on a PDP
    if (window.location.pathname.indexOf('/products/') !== -1) {
      let productHandle = window.location.pathname.match(/\/products\/([a-z0-9\-]+)/)[1];
      let position = oldCookie.products.indexOf(productHandle);
      if (position === -1) {
        oldCookie.products.unshift(productHandle);
        oldCookie.products = oldCookie.products.splice(0, self.maxProducts);
      } else {
        oldCookie.products.splice(position, 1);
        oldCookie.products.unshift(productHandle);
      }
    }
    ORW.utilities.setCookie(self.cookieKey, JSON.stringify(oldCookie), self.cookieDays);
  },
  /*
   * Ajax requests content using ?view=thumbnail and appends it to the
   * element specified in the config
   * 
   * @param {Array} productHandles Array of product handles to render
   */
  renderProducts: function (products) {
    let self = this;

    // Don't do anything if target already has content
    if (!self.$target.is(':empty')) {
      return;
    }
    let promises = products.map(productHandle => {
      let urlWithParam = ORW.utilities.updateUrlParam(`/products/${productHandle}`, "view", "thumbnail");
      return new Promise((resolve, reject) => {
        jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
          async: true,
          type: 'get',
          url: urlWithParam
        }).done(data => resolve(jquery__WEBPACK_IMPORTED_MODULE_0___default()(data))).fail(err => reject(err));
      });
    });
    Promise.all(promises).then(values => {
      self.$target.append(values);
      ORW.lazyload?.update();
    }).catch(err => console.log(err));
  }
});
let OneRecentlyViewed = {
  init: function (settings) {
    return new OneRecentlyViewedView(settings);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneRecentlyViewed);

/***/ }),

/***/ "./src/scripts/modules/module-oneZoom.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/module-oneZoom.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _panzoom_panzoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @panzoom/panzoom */ "./node_modules/@panzoom/panzoom/dist/panzoom.es.js");
/* harmony import */ var _lib_jquery_doubletap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/jquery.doubletap */ "./src/scripts/lib/jquery.doubletap.js");
/* harmony import */ var _lib_jquery_doubletap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_doubletap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_modules_oneZoom_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/modules/oneZoom.scss */ "./src/styles/modules/oneZoom.scss");
/*
	OneZoom 2.2.0 Usage (Webpack)
	
	2.0.0 adding webpack
	2.1.0 adding in frame zooming
	
	Yang@onerockwell
*/

// Import all dependencies here




// import 'jquery.panzoom';




// Define the Backbone View here (Optional)
let OneZoomView = backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (settings) {
    var self = this;
    self.zoomEngaging = false;
    self.zoomInFrame = true;
    self.zoomMobilePan = false;
    self.$productMedia = self.$el;
    self.$mainImage = settings.mainImage;
    self.$thumbImage = settings.thumbImage;
    self.buildDesktopZoom();
    self.buildMobileZoom();
  },
  events: {
    'click .image-slide:not(.media-video)': 'desktopZoomHandle',
    'click #onezoom.opened': 'desktopZoomClose',
    'doubletap .image-slide:not(.media-video)': 'mobileZoomHandle',
    'doubletap #onezoom-mobile': 'mobileZoomHandle',
    'click .onezoom-close': 'mobileZoomeOut'
  },
  buildDesktopZoom: function () {
    var self = this;
    self.$zoomContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div id="onezoom"></div>');
    self.$zoomContainer.appendTo(self.$productMedia);
  },
  buildMobileZoom: function () {
    var self = this;
    self.zoomMobileEngaging = false;
    self.$zoomMobileContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div id="onezoom-mobile"><div class="panzoom"></div></div>');
    self.$zoomMobileContainer.appendTo(self.$productMedia);
  },
  desktopZoomHandle: function (e) {
    var self = this;
    e.preventDefault();
    if (!self.isMobile()) {
      var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      var imageUrl = $curr.attr('href');
      if (self.zoomInFrame) {
        // As inframe
        function setPosition(e) {
          var offset = $zoomContainerInFrame.offset();
          var relativeX = (e.pageX - offset.left) * 100 / $zoomContainerInFrame.width();
          var relativeY = (e.pageY - offset.top) * 100 / $zoomContainerInFrame.height();
          var position = relativeX + '%' + ' ' + relativeY + '%';
          $zoomContainerInFrame.css('background-position', position);
        }
        if ($curr.find('.onezoom-frame').length) {
          // Close
          var $zoomContainerInFrame = $curr.find('.onezoom-frame');
          $zoomContainerInFrame.off('mousemove');
          $zoomContainerInFrame.remove();
        } else {
          // Open
          var $zoomContainerInFrame = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="onezoom-frame loading-image">').appendTo($curr);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img/>').attr('src', imageUrl).on('load', function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).remove();
            setPosition(e);
            $zoomContainerInFrame.removeClass('loading-image');
            $zoomContainerInFrame.css('background-image', 'url(' + imageUrl + ')');
            $zoomContainerInFrame.on('mousemove', e => {
              setPosition(e);
            });
          });
        }
      } else {
        // As pop-up
        var $zoomImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img class="zoomed-image" src="' + imageUrl + '" />');
        self.$zoomContainer.html($zoomImage);
        $zoomImage.on('load', function () {
          self.$zoomContainer.removeClass('loading-image');
        });
        if (!self.zoomEngaging) {
          self.zoomStatus('engage');
          self.$zoomContainer.addClass('opened loading-image');
        }
      }
    }
  },
  desktopZoomClose: function (e) {
    var self = this;
    self.$zoomContainer.on('transitionend', function () {
      self.$zoomContainer.off('transitionend');
      self.$zoomContainer.html('');
      self.zoomStatus('disengage');
    });
    self.$zoomContainer.removeClass('opened');
  },
  mobileZoomHandle: function (e) {
    var self = this;
    if (self.isMobile()) {
      if (self.$zoomMobileEngaging) {
        self.mobileZoomeOut();
      } else {
        self.mobileZoomeIn(e);
      }
    }
  },
  mobileZoomeIn: function (e) {
    let self = this;
    let eventOrg = e;
    let $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
    let $currImage = $curr.find('img');
    let $bigImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<img src="${$curr.attr('href')}" />`);
    self.$zoomMobileCloseIcon = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="onezoom-close"></div>');
    self.$zoomMobileContainer.addClass('opened loading-image').find(".panzoom").append($bigImage);
    self.$zoomMobileContainer.prepend(self.$zoomMobileCloseIcon);

    // get proper coordinates for touchend event
    if (e.changedTouches) {
      eventOrg = e.changedTouches[0];
    }
    $bigImage.on('load', function () {
      self.$zoomMobileContainer.removeClass('loading-image');
      const rate = $bigImage?.width() / $currImage?.width();
      const pan = {
        x: (self.$mainImage?.offset().left - eventOrg?.pageX) * rate + $currImage?.width() / 2,
        y: (self.$mainImage?.offset().top - eventOrg?.pageY) * rate + $currImage?.height() / 2
      };
      const panElem = self.$zoomMobileContainer.find(".panzoom").get(0);
      self.zoomMobilePan = (0,_panzoom_panzoom__WEBPACK_IMPORTED_MODULE_3__["default"])(panElem, {
        contain: "outside",
        startScale: 1,
        startX: pan.x,
        startY: pan.y
      });
    });

    // mark as zoomed
    this.$zoomMobileEngaging = true;
  },
  mobileZoomeOut: function (e) {
    var self = this;
    if (!this.$zoomMobileContainer) {
      return false;
    }
    if (self.zoomMobilePan) {
      self.zoomMobilePan.destroy();
    }
    self.$zoomMobileContainer.on('transitionend', function () {
      self.$zoomMobileContainer.off('transitionend');
      self.$zoomMobileContainer.html(`<div class="panzoom"></div>`);
      self.$zoomMobileEngaging = false;
    });
    this.$zoomMobileContainer.removeClass('opened');
  },
  zoomStatus: function (opt) {
    var self = this;
    if (opt == 'engage') {
      self.zoomEngaging = true;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('zooming');
    } else if (opt == 'disengage') {
      self.zoomEngaging = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zooming');
    }
  },
  isMobile: function () {
    if (ORW.responsive == 'small') {
      return true;
    }
    return false;
  },
  destroy: function () {
    var self = this;
    self.undelegateEvents();
  }
});

// Define the module here 
let OneZoom = {
  init: function (settings) {
    return new OneZoomView(settings);
  }
};

// Output the module
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneZoom);

/***/ }),

/***/ "./src/scripts/pages/views/view-product.js":
/*!*************************************************!*\
  !*** ./src/scripts/pages/views/view-product.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scrolltofixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scrolltofixed */ "./node_modules/scrolltofixed/jquery-scrolltofixed.js");
/* harmony import */ var scrolltofixed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scrolltofixed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_module_oneProductForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/module-oneProductForm */ "./src/scripts/modules/module-oneProductForm.js");
/* harmony import */ var _modules_module_oneZoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/module-oneZoom */ "./src/scripts/modules/module-oneZoom.js");
/* harmony import */ var _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/module-oneDrawer */ "./src/scripts/modules/module-oneDrawer.js");
/* harmony import */ var _modules_module_oneTabSystem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/module-oneTabSystem */ "./src/scripts/modules/module-oneTabSystem.js");
/* harmony import */ var _modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/module-oneVideo */ "./src/scripts/modules/module-oneVideo.js");
/* harmony import */ var _modules_module_oneRecentlyViewed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../modules/module-oneRecentlyViewed */ "./src/scripts/modules/module-oneRecentlyViewed.js");
/* harmony import */ var _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/module-oneMarketing */ "./src/scripts/modules/module-oneMarketing.js");
/* harmony import */ var _styles_modules_oneSizeChart_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../styles/modules/oneSizeChart.scss */ "./src/styles/modules/oneSizeChart.scss");
/* harmony import */ var _lib_pubsub__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/pubsub */ "./src/scripts/lib/pubsub.js");














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (opts) {
    console.log('init PDP');
    var self = this;

    // $content is <body>
    self.$content = self.$el;
    self.$detailContainer = self.$content.find('.product-detail-container');
    self.$media = self.$content.find('.product-media');
    self.$mainImage = self.$media.find('#ProductMediaImages');
    self.$thumbImage = self.$media.find('#ProductMediaThumbs');
    self.$mediaSlider = self.$mainImage.find('.images-wrapper');
    self.$thumbSlider = self.$thumbImage.find('.images-wrapper');
    self.$productCore = self.$content.find('.product-core');
    self.$socialIcons = self.$productCore.find('.one-social');
    self.isGiftCard = self.$detailContainer.hasClass('gift-card');
    self.productQty = self.$content.find('.product-qty-container');
    self.$recentlyViewed = self.$content.find('.recently-viewed .items');
    self.$productExtra = self.$content.find('.product-extra');

    // Features
    self.enableMiniCore = false;
    self.isScrollingLayout = self.$content.data('layout') == 'scrolling' ? true : false;
    self.isScrollingGrid = self.$content.hasClass('scrolling-grid');
    self.isSliderLayout = self.$content.data('layout') == 'slider' ? true : false;
    self.isQuickshopLayout = self.$content.data('layout') == 'quickshop' ? true : false;
    if (ORW.enableGTM) {
      ORW.marketing = ORW.marketing || new _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_11__["default"]();
      ORW.marketing.initVariantWatcher(self.$productCore);
    }
    self.productCore();
    self.productVariants();
    self.initPrice();
    //self.initStickyAddToCart();

    if (!self.isGiftCard) {
      self.productMedia();
    }
    if (!self.isQuickshopLayout) {
      self.social();
      if (ORW.enableGTM) {
        ORW.marketing.viewItem(self.$productCore);
      }
    }
    if (!self.isGiftCard && !self.isQuickshopLayout) {
      self.zoom();
      self.video();
      // self.sizeChart();
      self.accordionsAndTabs();
      self.recentlyViewed();
      self.tabContent();
      // self.fullIngredients();
    }
    _modules_module_oneProductForm__WEBPACK_IMPORTED_MODULE_5__["default"].init({
      el: self.el.querySelector('form.add-to-cart-form'),
      preSelect: true,
      updateURL: !self.isQuickshopLayout
    });

    /*OneProductForm.init({
        el: self.el.querySelector('.product-form-sticky-container form.add-to-cart-form'),
        preSelect: true,
        updateURL: !self.isQuickshopLayout,
    });*/
  },
  events: {
    'click .read-more'(e) {
      e.preventDefault();
      var id = e.currentTarget.dataset.scroll;
      if (id != null) {
        var scrollDiv = document.getElementById(id).offsetTop;
        var scrollEl = document.getElementById(id);
        if (scrollEl.classList.contains('system-content')) {
          var scrollDivMeta = document.getElementById('metafields-tabs').offsetTop;
          var systems = document.querySelectorAll(".product-extra .system");
          var systemsContent = document.querySelectorAll(".product-extra .system-content");
          for (var i = 0; i < systems.length; ++i) {
            systems[i].classList.remove('active');
          }
          for (var i = 0; i < systemsContent.length; ++i) {
            systemsContent[i].classList.remove('active');
          }
          scrollEl.classList.add('active');
          scrollEl.closest('.system').classList.add('active');
          window.scrollTo({
            top: scrollDivMeta,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({
            top: scrollDiv,
            behavior: 'smooth'
          });
        }
      }
    }
  },
  productMedia: function () {
    var self = this;
    (0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_13__.subscribe)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_13__.PUB_SUB_EVENTS.variantChange, variant => {
      const productDetailContainer = document.querySelector('.product-detail-container');
      self.updateVariantImage(variant, productDetailContainer);
    });
    var events = {
      'click .image-thumbnail': function (e) {
        e.preventDefault();
        // var $curr = $(e.currentTarget);
        // var index = $curr.data('index') - 1;
        // if (self.$media.hasClass('initialized')) {
        //     self.$mediaSlider.slick('slickGoTo',index);
        // }
      }
    };
    self.$mediaSlider.on('init', function (event, slick, direction) {
      self.$media.addClass('initialized');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize();
    });
    self.$mediaSlider.slick({
      dots: false,
      infinite: false,
      speed: 600,
      slidesToShow: 1,
      arrows: false,
      fade: true,
      asNavFor: self.$thumbSlider,
      responsive: [{
        breakpoint: ORW.responsiveSizes.large,
        settings: {
          dots: true
        }
      }]
    });
    if (ORW.responsive != 'small' || ORW.responsive != 'medium') {
      // Sidebar Thumbnail
      self.$thumbSlider.slick({
        infinite: false,
        speed: 600,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 150,
        swipeToSlide: true,
        verticalSwiping: true,
        arrows: true,
        vertical: true,
        asNavFor: self.$mediaSlider,
        focusOnSelect: true,
        rows: 0
      });
    }

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();

    // Mobile Slick slider
    // const imageSlider = this.$el.find('.product-media-images .images-wrapper');
    // // Desktop images
    // const imageThumbs = this.el.querySelector('.product-media-thumbnails .images-wrapper');

    // Check if image elements have more than one value. If not, don't initialize
    // const imageVariantValues = new Set(
    //     [...imageThumbs.querySelectorAll('[data-variant-option-value]')]
    //     .map(el => el.dataset.variantOptionValue)
    //     .filter(Boolean) // Remove empty values
    // );
    // if (imageVariantValues.size <= 1) return;

    // subscribe(PUB_SUB_EVENTS.variantOptionsChange, (options) => {

    //     const filterSelector = options.map(option => `[data-variant-option-value="${option.toLowerCase()}"]`).join(',');

    //     // Mobile Slick slider
    //     imageSlider.slick('slickUnfilter');
    //     imageSlider.slick('slickFilter', filterSelector);

    //     // Desktop images
    //     if (filterSelector) {
    //         const imagesToShow = imageThumbs.querySelectorAll(filterSelector);
    //         if (imagesToShow.length) {
    //             imageThumbs.querySelectorAll('.image-thumbnail').forEach(el => {
    //                 el.hidden = true;
    //             });
    //             imagesToShow.forEach(el => el.hidden = false);
    //         }
    //     }
    // });
  },
  updateVariantImage: function (variant, productDetailContainer) {
    const imageSize = '900x';
    const variantImage = variant.featured_image;
    const getImageSizedURL = function (imageUrl, size, is_2x = false) {
      const lastPeriodIndex = imageUrl.lastIndexOf('.');
      if (lastPeriodIndex >= 0) {
        const beforeLastPeriod = imageUrl.substring(0, lastPeriodIndex);
        const afterLastPeriod = imageUrl.substring(lastPeriodIndex + 1);
        return is_2x ? beforeLastPeriod + `_${imageSize}@2x.` + afterLastPeriod : beforeLastPeriod + `_${imageSize}.` + afterLastPeriod;
      } else {
        return imageUrl;
      }
    };
    if (variantImage) {
      const image_src_size = getImageSizedURL(variantImage.src, imageSize);
      const image_src_size_2x = getImageSizedURL(variantImage.src, imageSize, true);
      const imageSlide = productDetailContainer.querySelector(`.product-media-images .image-slide`);
      const thumbnailSlide = productDetailContainer.querySelector(`.product-media-thumbnails .image-thumbnail`);
      if (imageSlide) {
        const img_elm = imageSlide.querySelector(`img`);
        const thumbnail_img = thumbnailSlide.querySelector(`img`);
        const srcset_to_set = `
                    ${image_src_size}, 
                    ${image_src_size_2x} 2x
                `;
        imageSlide.setAttribute(`href`, srcset_to_set);
        thumbnailSlide.setAttribute(`href`, srcset_to_set);
        img_elm.setAttribute(`src`, image_src_size);
        thumbnail_img.setAttribute(`src`, image_src_size);
      }
    }
  },
  initPrice: function () {
    const priceElems = this.el.querySelectorAll('.price-box');
    (0,_lib_pubsub__WEBPACK_IMPORTED_MODULE_13__.subscribe)(_lib_pubsub__WEBPACK_IMPORTED_MODULE_13__.PUB_SUB_EVENTS.variantChange, variant => {
      let html = `<span class="h2 product-price" itemprop="price">${Shopify.formatMoney(variant.price, window.theme.moneyFormat)}</span>`;
      if (variant.compare_at_price) {
        html += `<span class="product-compare-price">${Shopify.formatMoney(variant.compare_at_price, window.theme.moneyFormat)}</span>`;
      }
      priceElems.forEach(priceElem => {
        priceElem.innerHTML = html;
      });
    });
  },
  initStickyAddToCart: function () {
    const pdpCta = this.el.querySelector('.product-core-inner .add-to-cart-wrapper');
    const stickyAddToCArtContainer = this.el.querySelector('.product-form-sticky-container');
    const globalHeader = this.el.querySelector('header.site-header');
    window.addEventListener('scroll', () => {
      /*const buyButtonPos = pdpCta.getBoundingClientRect().bottom;
      var scrolPosition = $(window).scrollTop();
      var addToCartMainPosition = $('.product-core-inner .add-to-cart-wrapper').offset().top + $('.product-core-inner .add-to-cart-wrapper').outerHeight();
        var scrollPositionVanilla = window.scrollY;*/
      var addToCartMainPositionVanilla = pdpCta.getBoundingClientRect().bottom - globalHeader.offsetHeight;
      if (addToCartMainPositionVanilla <= 0) {
        stickyAddToCArtContainer.classList.remove('hidden');
        //console.log(scrolPosition + ' ' + scrollPositionVanilla + ' ' + addToCartMainPosition + ' ' + addToCartMainPositionVanilla + ' ' + 'yes');
      } else {
        stickyAddToCArtContainer.classList.add('hidden');
        //console.log(scrolPosition + ' ' + scrollPositionVanilla + ' ' + addToCartMainPosition + ' ' + addToCartMainPositionVanilla);
      }
    });
  },
  productCore: function () {
    var self = this;
    self.productQuantity();
    if (!self.isQuickshopLayout) {
      if (self.enableMiniCore) {
        self.productCoreMini();
      }
      if (self.isScrollingLayout && !self.isScrollingGrid) {
        self.productCoreScrollFixing();
      }
    }
  },
  productVariants: function () {
    var self = this;
    var events = {
      'click .product-attribute-container .oneswatch-size .swatch': function (e) {
        var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
        var classSwatch = Array.from(e.currentTarget.classList).find(function (el) {
          return el.startsWith('swatch-');
        });
        console.log($curr);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-attribute-container').find('.oneswatch-size .swatch.active').removeClass('active');
        this.el.querySelectorAll('.' + classSwatch).forEach(elem => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).addClass('active');
        });
        //$curr.addClass('active');
      },
      'click .product-attribute-container .oneswatch-shade .swatch': function (e) {
        var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
        var classSwatch = Array.from(e.currentTarget.classList).find(function (el) {
          return el.startsWith('swatch-');
        });
        console.log($curr);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-attribute-container').find('.oneswatch-shade .swatch.active').removeClass('active');
        //$curr.addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-attribute-container').find('.oneswatch-size .swatch.active').removeClass('active');
        this.el.querySelectorAll('.' + classSwatch).forEach(elem => {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).addClass('active');
        });
      }
    };

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  productQuantity: function () {
    var self = this;
    var $input = self.productQty.find('.qty-input[type=number]');
    var qty = $input.data('value');
    var events = {
      'click .product-qty-container .qty-btn': function (e) {
        e.preventDefault();
        var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
        if ($curr.hasClass('plus')) {
          $input[0].stepUp();
        } else {
          $input[0].stepDown();
        }
        $input.attr('value', $input.val());
      }
    };

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  productCoreScrollFixing: function () {
    var self = this;
    var init = function ($elm) {
      $elm.scrollToFixed({
        zIndex: 2,
        removeOffsets: true,
        dontSetWidth: true,
        marginTop: function () {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()('header.site-header').outerHeight() + 50;
        },
        limit: function () {
          var limit = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scrolling-fix-stopper').offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).height();
          return limit;
        }
      });
    };
    self.$scrollFixingCore = self.$productCore.find('.product-core-inner');
    // Not available on Mobile.
    ORW.utilities.mediaCheck(function () {
      init(self.$scrollFixingCore);
    }, function () {
      self.$scrollFixingCore.trigger('detach.ScrollToFixed');
    });
  },
  productCoreMini: function () {
    var self = this;
    var init = function ($elm) {
      console.log('init minicore');
      $elm.scrollToFixed({
        zIndex: 2,
        removeOffsets: true,
        dontSetWidth: true,
        triggerAtBottom: true,
        marginTop: function () {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).height() * -1;
        },
        fixed: function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('fixed-core fadeInUp animated');
        },
        unfixed: function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('fixed-core fadeInUp animated');
        }
      });
    };
    self.$miniCore = self.$productCore.find('.block-core');
    // Under scrolling layout, miniCore will only available on Small screen.
    ORW.utilities.mediaCheck(function () {
      self.$miniCore.trigger('detach.ScrollToFixed');
      if (!self.isScrollingLayout || self.isScrollingGrid) {
        init(self.$miniCore);
      }
    }, function () {
      self.$miniCore.trigger('detach.ScrollToFixed');
      init(self.$miniCore);
    });
  },
  social: function () {
    var self = this;
    var events = {
      'click .share-title': function (e) {
        self.$socialIcons.toggleClass('active');
      }
    };

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  zoom: function () {
    var self = this;
    _modules_module_oneZoom__WEBPACK_IMPORTED_MODULE_6__["default"].init({
      el: self.$media,
      mainImage: self.$mainImage,
      thumbImage: self.$thumbImage
    });
  },
  video: function () {
    var self = this;
    var $videos = self.$media.find('.video-wrapper');
    _modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_9__["default"].init({
      el: $videos,
      isResponsive: false,
      bgVideo: false,
      autoplay: false
    });
  },
  tabContent: function () {
    var self = this;
    var $videos = self.$productExtra.find('.video-wrapper');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()($videos).each(function () {
      _modules_module_oneVideo__WEBPACK_IMPORTED_MODULE_9__["default"].init({
        el: this,
        isResponsive: false,
        bgVideo: true,
        autoplay: false
      });
    });
  },
  accordionsAndTabs: function () {
    var self = this;
    _modules_module_oneTabSystem__WEBPACK_IMPORTED_MODULE_8__["default"].init({
      el: self.$content
    });
  },
  sizeChart: function () {
    var self = this;
    var sizeChartHtml = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SizeChartModal')[0].outerHTML;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SizeChartModal').remove();
    var drawerCtl = _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_7__["default"].init({
      drawerContent: sizeChartHtml,
      drawerModalId: 'SizeChartDrawerModal',
      triggerEvent: 'click',
      triggerElem: '.size-chart-trigger',
      initCallback: function () {
        _modules_module_oneTabSystem__WEBPACK_IMPORTED_MODULE_8__["default"].init({
          el: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#SizeChartModal')
        });
      },
      openCallback: function () {},
      closeCallback: function () {},
      events: {}
    });
  },
  fullIngredients: function () {
    var self = this;
    var fullIngreidentstHtml = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#FullIngredientsModal')[0].outerHTML;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#FullIngredientsModal').remove();
    var drawerCtl = _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_7__["default"].init({
      drawerContent: fullIngreidentstHtml,
      drawerModalId: 'FullIngredientsDrawerModal',
      triggerEvent: 'click',
      triggerElem: '.full-ingredients-trigger',
      initCallback: function () {},
      openCallback: function () {},
      closeCallback: function () {},
      events: {}
    });
  },
  recentlyViewed: function () {
    let self = this;
    _modules_module_oneRecentlyViewed__WEBPACK_IMPORTED_MODULE_10__["default"].init({
      el: self.$recentlyViewed
    });
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

/***/ "./src/styles/modules/oneRecentlyViewed.scss":
/*!***************************************************!*\
  !*** ./src/styles/modules/oneRecentlyViewed.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/modules/oneSizeChart.scss":
/*!**********************************************!*\
  !*** ./src/styles/modules/oneSizeChart.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/modules/oneSwatch.scss":
/*!*******************************************!*\
  !*** ./src/styles/modules/oneSwatch.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/modules/oneZoom.scss":
/*!*****************************************!*\
  !*** ./src/styles/modules/oneZoom.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/pages/product.scss":
/*!***************************************!*\
  !*** ./src/styles/pages/product.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/pages/product/product-quickshop.scss":
/*!*********************************************************!*\
  !*** ./src/styles/pages/product/product-quickshop.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_scripts_modules_module-oneQuickShop_js.product.bundle.js.map