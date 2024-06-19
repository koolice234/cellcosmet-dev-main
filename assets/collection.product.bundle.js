"use strict";
(self["webpackChunkshopify_theme"] = self["webpackChunkshopify_theme"] || []).push([["collection"],{

/***/ "./src/scripts/modules/module-oneProductCompare.js":
/*!*********************************************************!*\
  !*** ./src/scripts/modules/module-oneProductCompare.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _templates_template_oneProductCompareGrid_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/template-oneProductCompareGrid.html */ "./src/scripts/templates/template-oneProductCompareGrid.html");
/* harmony import */ var _templates_template_oneProductCompareAll_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/template-oneProductCompareAll.html */ "./src/scripts/templates/template-oneProductCompareAll.html");
/* harmony import */ var _styles_modules_oneProductCompare_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/modules/oneProductCompare.scss */ "./src/styles/modules/oneProductCompare.scss");
/*
	OneProductCompare 1.0.0 Usage (Webpack)
	Yang @onerockwell
*/

// Import all dependencies here







const storageName = "comparing_products";
const maxCompareNum = 4;
const specs = [{
  spec: 'name',
  label: 'name'
}, {
  spec: 'price',
  label: 'price'
}, {
  spec: 'type',
  label: 'type'
}, {
  spec: 'vendor',
  label: 'vendor'
}, {
  spec: 'weight',
  label: 'weight'
}];

// Define the Backbone View here (Optional)
let OneProductCompareView = backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (settings) {
    var self = this;

    // Status
    self.adding = false;
    self.compareAllEngage = false;
    self.canCompareAll = false;
    self.canRemoveAll = false;
    self.canAddItem = true;
    self.$compareModal = self.$el.find('#ProductCompareDrawer');
    self.$compareAddingOverlay = self.$el.find('#product-compare-adding-overlay');
    self.$compareModalTrigger = self.$el.find('.product-compare-trigger');
    if (self.$compareModal.length) {
      console.log('init product compare');
      self.$compareGrid = self.$compareModal.find('.compare-grid');
      self.$compareAllWrapper = self.$compareModal.find('.compare-all-wrapper');
      self.$controls = self.$compareModal.find('.controls');
      self.statusUpdate();
      self.initModal();
    } else {
      self.destroy();
    }
  },
  events: {
    'click .product-compare.add-ctl:not(.disabled)': 'addItem',
    'click #ProductCompareDrawer .remove-all:not(.disabled)': 'removeItem',
    'click #ProductCompareDrawer .remove': 'removeItem',
    'click #ProductCompareDrawer .compare-all:not(.disabled)': 'compareAll',
    'click #ProductCompareDrawer .compare-print:not(.disabled)': 'comparePrint'
  },
  initModal: function () {
    var self = this;
    self.renderModalGrid();
    self.compareModalDrawer = _modules_module_oneDrawer__WEBPACK_IMPORTED_MODULE_3__["default"].init({
      dontCloseWhenClickOutside: true,
      dontShowOverlay: true,
      drawerElem: '#' + self.$compareModal.attr('id'),
      triggerEvent: 'click',
      triggerElem: '.product-compare-trigger',
      openCallback: function (e) {
        self.$compareModalTrigger.addClass('disabled');
      },
      closeCallback: function (e) {
        self.$compareModalTrigger.removeClass('disabled');
      }
    });
  },
  compareAll: function () {
    var self = this;
    if (!self.compareAllEngage) {
      // open
      self.renderCompareAllGrid();
      self.compareAllOpen();
    } else {
      // close
      self.compareAllClose();
    }
    self.statusUpdate();
  },
  compareAllOpen: function () {
    var self = this;
    self.compareAllEngage = true;
    self.$compareModal.addClass('compare-all-engage');
  },
  compareAllClose: function () {
    var self = this;
    self.compareAllEngage = false;
    self.$compareModal.removeClass('compare-all-engage');
  },
  addItem: function (e) {
    var self = this;
    if (self.adding) {
      return false;
    } else {
      self.adding = true;
      self.$compareAddingOverlay.addClass('adding');
    }
    var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
    var $currItem = $curr.parents('.item');
    var url = $currItem.find('a').attr('href') + '?view=json-view';
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      async: true,
      type: 'GET',
      url: url,
      cache: true,
      error: function (err) {
        console.log(err);
      },
      success: function (data) {
        data = JSON.parse(data);
        self.updateCookie(data);
        self.renderModalGrid();
        self.adding = false;
        self.$compareAddingOverlay.removeClass('adding');
        if (!self.compareModalDrawer.drawerOpened) {
          self.open();
        }
      }
    });
  },
  removeItem: function (e) {
    var self = this;
    var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
    if ($curr.hasClass('remove-all')) {
      // remove all
      self.updateCookie({}, true);
      self.renderModalGrid();
    } else if ($curr.parents('.item').data('id')) {
      // remove single item
      var id = $curr.parents('.item').data('id');
      self.updateCookie({
        id: id
      }, true);
      self.renderModalGrid();
    }
  },
  comparePrint: function (e) {
    var self = this;
    var title = "Compare Product";
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    var styleSheets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('link[type="text/css"]');
    var styleSheetsHtml = '';
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].each(styleSheets, function (link) {
      styleSheetsHtml += `<link href="${link.href}" rel="stylesheet" type="text/css" media="all">`;
    });
    mywindow.document.write('<html><head><title>' + title + '</title>' + styleSheetsHtml);
    mywindow.document.write('</head><body onload="window.print(); window.close();">');
    mywindow.document.write('<h1>' + title + '</h1>');
    mywindow.document.write('<div id="ProductCompareDrawer" class="print" style="height: 100%;">');
    mywindow.document.write(document.getElementById("ProductCompareDrawer").innerHTML);
    mywindow.document.write('</div>');
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    return true;
  },
  statusUpdate: function () {
    var self = this;

    // Get data update
    let data = self.updateCookie({});
    if (!data || data.length < 1) {
      console.log('Cannot compare, remove, can add');
      self.canCompareAll = false;
      self.canRemoveAll = false;
      self.canAddItem = true;
      self.$controls.find('.compare-all span').text(self.$controls.find('.compare-all span').data('disable'));
      self.$controls.find('.compare-all,.remove-all').addClass('disabled');
    } else if (data.length == 1) {
      console.log('Cannot compare, can remove and add');
      self.canCompareAll = false;
      self.canRemoveAll = true;
      self.canAddItem = true;
      self.$controls.find('.compare-all span').text(self.$controls.find('.compare-all span').data('disable'));
      self.$controls.find('.compare-all').addClass('disabled');
      self.$controls.find('.remove-all').removeClass('disabled');
    } else if (data.length < maxCompareNum) {
      console.log('Can compare, remove and add');
      self.canCompareAll = true;
      self.canRemoveAll = true;
      self.canAddItem = true;
      if (self.compareAllEngage) {
        self.$controls.find('.compare-all span').text(self.$controls.find('.compare-all span').data('close'));
      } else {
        self.$controls.find('.compare-all span').text(self.$controls.find('.compare-all span').data('enable'));
      }
      self.$controls.find('.compare-all,.remove-all').removeClass('disabled');
    } else {
      console.log('Cannot add, can compare and remove');
      self.canCompareAll = true;
      self.canRemoveAll = true;
      self.canAddItem = false;
      if (self.compareAllEngage) {
        self.$controls.find('.compare-all span').text(self.$controls.find('.compare-all span').data('close'));
      } else {
        self.$controls.find('.compare-all span').text(self.$controls.find('.compare-all span').data('enable'));
      }
      self.$controls.find('.compare-all,.remove-all').removeClass('disabled');
    }
  },
  renderModalGrid: function () {
    var self = this;

    // Get data update
    let data = self.updateCookie({});
    var content = self.buildTemplate({
      productdata: data,
      maxCompareNum: maxCompareNum
    }, 'grid');
    self.$compareGrid.html(content);
    if (self.compareAllEngage) {
      // also update compare all if engaged.
      self.renderCompareAllGrid();
    } else {
      self.statusUpdate();
    }
  },
  renderCompareAllGrid: function () {
    var self = this;

    // Get data update
    let data = self.updateCookie({});
    if (!data || data.length == 0) {
      self.compareAllClose();
    }
    var content = self.buildTemplate({
      specs: specs,
      productdata: data,
      maxCompareNum: maxCompareNum
    }, 'compare-all');
    self.$compareAllWrapper.html(content);
    self.statusUpdate();
  },
  updateCookie: function (data, remove) {
    var self = this;
    var storageData = localStorage.getItem(storageName) ? localStorage.getItem(storageName) : false;
    if (!data || jquery__WEBPACK_IMPORTED_MODULE_0___default().isEmptyObject(data)) {
      // If no data given, read from cookie
      var response = [];
      if (storageData && JSON.parse(storageData)) {
        if (remove) {
          // Remove all
          localStorage.setItem(storageName, JSON.stringify([]));
        }
        return JSON.parse(storageData);
      } else {
        return response;
      }
    } else {
      // Read from cookie
      if (storageData && JSON.parse(storageData)) {
        var newData = JSON.parse(storageData); // expecting an array
      } else {
        var newData = [];
      }

      // Update cookie
      if (storageData && storageData.indexOf(data.id) >= 0) {
        // already in your list
        if (remove) {
          // Remove one from the list
          var results = jquery__WEBPACK_IMPORTED_MODULE_0___default().grep(newData, function (item, i) {
            return item.id == data.id;
          }, true);
          newData = results;
          localStorage.setItem(storageName, JSON.stringify(newData));
        } else {
          alert(`Item ${data.name} already in your list!`);
        }
      } else if (newData.length < maxCompareNum && !remove) {
        // add new product to compare
        newData.push(data);
        localStorage.setItem(storageName, JSON.stringify(newData));
      } else if (!remove) {
        // max number reach
        alert(`You are reaching the max number to compare`);
      }
      return newData;
    }
  },
  open: function () {
    var self = this;
    self.compareModalDrawer.openDrawer();
  },
  close: function () {
    var self = this;
    self.compareModalDrawer.closeDrawer();
  },
  buildTemplate: function (content, type) {
    var self = this,
      typeTemplate;
    switch (type) {
      case '':
        break;
      case 'compare-all':
        typeTemplate = _templates_template_oneProductCompareAll_html__WEBPACK_IMPORTED_MODULE_5__["default"];
        break;
      case 'grid':
        typeTemplate = _templates_template_oneProductCompareGrid_html__WEBPACK_IMPORTED_MODULE_4__["default"];
        break;
    }
    ;
    return typeTemplate({
      _: underscore__WEBPACK_IMPORTED_MODULE_1__["default"],
      content: content
    });
  },
  destroy: function () {
    var self = this;
    self.undelegateEvents();
  }
});

// Define the module here 
let OneProductCompare = {
  init: function (settings) {
    settings.el = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    return new OneProductCompareView(settings);
  }
};

// Output the module
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneProductCompare);

/***/ }),

/***/ "./src/scripts/modules/module-oneQuickBuy.js":
/*!***************************************************!*\
  !*** ./src/scripts/modules/module-oneQuickBuy.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_module_oneProductForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/module-oneProductForm */ "./src/scripts/modules/module-oneProductForm.js");
/* harmony import */ var _styles_pages_product_product_quickbuy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/pages/product/product-quickbuy.scss */ "./src/styles/pages/product/product-quickbuy.scss");
/*
	OneQuickBuy 2.0.0 Usage (Webpack)
	YourName @onerockwell        
*/

// Import all dependencies here






// Define the Backbone View here (Optional)
let OneQuickBuyView = backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (settings) {
    var self = this;
    console.log('Init quickbuy');
    self.$productGrid = self.$el.find('.collection-products');
    self.$products = self.$productGrid.find('.item');
    self.quickbuy();
    // self.addAll();
  },
  events: {},
  quickbuy: function () {
    var self = this;
    var $products = self.$products.filter(function (index) {
      var $qbcontainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.quick-buy-container');
      return $qbcontainer.length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('qb-initialized');
    });
    var events = {
      'click .quick-buy-trigger': function (e) {
        var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
        var $item = $curr.parents('.item');
        var temp = '';
        temp = $curr.text();
        $curr.text($curr.data('toggle'));
        $curr.data('toggle', temp);
        $item.toggleClass('qb-active');
        $item.find('.quick-buy-container').toggleClass('active');
      }
    };
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].each($products, function (item) {
      var $product = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item);
      if ($product.find('.quick-buy-container').length) {
        var $form = $product.find('form'),
          pid = $product.data('id');
        var productSelector = 'productSelect-' + pid;

        // Check for duplicate products
        var matchingProducts = document.querySelectorAll('#' + productSelector);
        if (matchingProducts.length > 1) {
          var newId = productSelector + '-' + matchingProducts.length;
          $product.find('#' + productSelector).attr("id", newId);
        }
        _modules_module_oneProductForm__WEBPACK_IMPORTED_MODULE_3__["default"].init({
          el: $product,
          preSelect: true,
          updateURL: false
        });
        $product.addClass('qb-initialized');
      }
    });

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  addAll: function () {
    // AddAll feature is in beta
    // Add All requires Quickbuy
    var self = this;
    var addAllToBag = function (e) {
      e.preventDefault();
      // Add CTA status change here..

      // Collecting data
      var productIds = [];
      underscore__WEBPACK_IMPORTED_MODULE_1__["default"].each(self.$products, function (product) {
        var $productSelected = jquery__WEBPACK_IMPORTED_MODULE_0___default()(product).find('select.product-single__variants');
        if ($productSelected.length) {
          productIds.push($productSelected.val());
        }
      });

      // Add Multiple Products
      var data = {
          id: productIds,
          quantity: 1
        },
        callback = function (line_item) {
          // Success callback, cart loaded, please add CTA status change here..
          console.log(line_item);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('header .block-minicart').trigger('click');
        },
        errorCallback = function (XMLHttpRequest, textStatus) {
          // Error callback, please add extra error handling here
          var data = eval('(' + XMLHttpRequest.responseText + ')');
          console.log(data);
        };
      ShopifyAPI.addMultipleItems(data, callback, errorCallback);
    };
    var events = {
      'click .add-all-to-bag': addAllToBag
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
let OneQuickBuy = {
  init: function (settings) {
    return new OneQuickBuyView(settings);
  }
};

// Output the module
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneQuickBuy);

/***/ }),

/***/ "./src/scripts/pages/page-collection.js":
/*!**********************************************!*\
  !*** ./src/scripts/pages/page-collection.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var when_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! when-dom-ready */ "./node_modules/when-dom-ready/dist/index.es2015.js");
/* harmony import */ var _views_view_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/view-collection */ "./src/scripts/pages/views/view-collection.js");
/* harmony import */ var _views_view_collectionNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/view-collectionNav */ "./src/scripts/pages/views/view-collectionNav.js");
/* harmony import */ var _modules_module_oneQuickShop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/module-oneQuickShop */ "./src/scripts/modules/module-oneQuickShop.js");
/* harmony import */ var _modules_module_oneQuickBuy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/module-oneQuickBuy */ "./src/scripts/modules/module-oneQuickBuy.js");
/* harmony import */ var _modules_module_oneProductCompare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/module-oneProductCompare */ "./src/scripts/modules/module-oneProductCompare.js");
/* harmony import */ var _styles_pages_collection_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/pages/collection.scss */ "./src/styles/pages/collection.scss");
/* harmony import */ var _styles_pages_search_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/pages/search.scss */ "./src/styles/pages/search.scss");









let collection,
  rebuilt,
  quickbuy = false;
let $productCollection = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product-collection');
let $productCollectionNav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.collection-nav');

// For lazy loading
ORW.pagerStack = [];
ORW.isLoading = false;
ORW.isFinished = false;
ORW.rebuildListing = function () {
  if (rebuilt) {
    console.log('rebuilt listing page');
  } else {
    console.log('init listing page');
  }
  collection && collection.destroy();
  if ($productCollection.length) {
    collection = new _views_view_collection__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: $productCollection,
      rebuilt: rebuilt
    });
  }
  quickbuy && quickbuy.destroy();
  if ($productCollection.length && $productCollection.data('quickbuy')) {
    quickbuy = _modules_module_oneQuickBuy__WEBPACK_IMPORTED_MODULE_5__["default"].init({
      el: $productCollection
    });
  }
  if (!rebuilt) rebuilt = true;
};
(0,when_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
  $productCollectionNav.length && new _views_view_collectionNav__WEBPACK_IMPORTED_MODULE_3__["default"]({
    el: $productCollection
  });
  if ($productCollection.length && $productCollection.data('quickshop')) {
    _modules_module_oneQuickShop__WEBPACK_IMPORTED_MODULE_4__["default"].init({});
  }
  _modules_module_oneProductCompare__WEBPACK_IMPORTED_MODULE_6__["default"].init({});
  ORW.rebuildListing();
});

/***/ }),

/***/ "./src/scripts/pages/views/view-collection.js":
/*!****************************************************!*\
  !*** ./src/scripts/pages/views/view-collection.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/module-oneMarketing */ "./src/scripts/modules/module-oneMarketing.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (opts) {
    var self = this;
    self.$pager = self.$el.find('.collection-pagination');
    self.$productGrid = self.$el.find('.collection-products');
    self.$products = self.$productGrid.find('.item');
    self.$quickbuy = self.$productGrid.find('.quick-buy-container');
    self.$reviewsModule = self.$el.find('.reviews-slides');
    self.rebuilt = opts.rebuilt;
    if (ORW.enableGTM) {
      ORW.marketing = ORW.marketing || new _modules_module_oneMarketing__WEBPACK_IMPORTED_MODULE_3__["default"]();
      if (!self.rebuilt) {
        // Send initial set of products on page load
        ORW.marketing.viewItemList(self.$productGrid, self.$products);
      }
    }
    if (self.$quickbuy.length > 0) {
      self.productQuantity();
    }
    // self.infinityScroll();
    self.collectionReviewsModule();
  },
  events: {},
  infinityScroll: function () {
    var self = this;
    var events = {
      'click .item a:not(.quick-shop-trigger)': function (e) {
        var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
        var $item = $curr.parents('.item');
        var pageIndex = $item.data('page');
        e.preventDefault();
        if (pageIndex) {
          var currentUrl = ORW.utilities.getUrlParam(window.location.href, 'page', pageIndex);
          window.history.pushState(null, null, currentUrl);
        }
        window.location.href = $curr.prop('href');
      }
    };
    var loadMore = function (prev) {
      // Passing param to determin whether loading next page or prev
      var addPage = function (d) {
        var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(d).find('.product-collection');
        var $pager = $content.find('.collection-pagination');
        var $newItems = $content.find('.collection-products .item');
        var loadingPageNum = ORW.utilities.getUrlParam(self.url, 'page');
        var afterAppend = function (index, item) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).data('page', loadingPageNum);
          if (index == $newItems.length - 1) {
            // Perform re-init of product grid if needed
            ORW.rebuildListing();

            // Need to re-init ajax cart
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.add-to-cart-form').off('submit');
            ORW.isLoading = false;
            if (prev) {
              loadMore(true); // Recursive!!
              // $('html, body').animate({
              //     scrollTop: self.$productGrid.prop("scrollHeight")
              // }, 0);
            } else {
              return false;
            }
          }
        };
        ORW.pagerStack.push(self.url);
        if (!ORW.isFinished) {
          self.$pager = $pager;
          $newItems.prependTo(self.$productGrid).each(afterAppend);
        } else {
          self.$pager.replaceWith($pager);
          self.$pager = $pager;
          $newItems.appendTo(self.$productGrid).each(afterAppend);
          window.history.pushState(null, null, self.url);
        }
        self.$products = self.$productGrid.find('.item');
        // Send newly appended set of products
        if (ORW.enableGTM) {
          ORW.marketing.viewItemList(self.$productGrid, $newItems);
        }
        window.ORW.lazyload?.update();
      };

      // Start of Load More
      if (!ORW.isLoading) {
        var status = prev ? 'prev' : 'next';
        if (ORW.isFinished) {
          // Load next page
          self.url = self.$pager.find('.next a').length ? self.$pager.find('.next a').attr('href') : '';
        } else {
          // Load prev page
          self.url = self.$pager.find('.prev a').length ? self.$pager.find('.prev a').attr('href') : '';
        }
        self.url = self.url.replace('&view=ajax', '').replace('?view=ajax', '');
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default().inArray(self.url, ORW.pagerStack) == -1 && self.url) {
          console.log('load ' + status);
          ORW.isLoading = true;
          let ajaxUrl = '';
          if (self.url.includes('?')) {
            ajaxUrl = self.url + `&view=ajax`;
          } else {
            ajaxUrl = self.url + `?view=ajax`;
          }
          jquery__WEBPACK_IMPORTED_MODULE_0___default().get(ajaxUrl).done(addPage);
        } else {
          if (prev) {
            ORW.isFinished = true;
            console.log('load prev finished');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#loadmore').addClass('disabled');
            return false;
          }
        }
      }
    };

    // Load Prev Page Trigger
    loadMore(true);

    // Load Next Page Triggers
    if (self.isOnScreen(jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer.site-footer'))) {
      loadMore();
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll.listview', function () {
      clearTimeout(jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'scrollTimer'));
      jquery__WEBPACK_IMPORTED_MODULE_0___default().data(this, 'scrollTimer', setTimeout(function () {
        if (self.isOnScreen(jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer.site-footer'))) {
          loadMore();
        }
      }, 150));
    });

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  collectionReviewsModule: function () {
    var self = this;
    console.log('reviews module');
    self.$reviewsModule.slick({
      dots: true,
      infinite: false,
      speed: 600,
      slidesToShow: 1,
      arrows: false,
      responsive: [{
        breakpoint: ORW.responsiveSizes.large,
        settings: {}
      }]
    });
  },
  productQuantity: function () {
    var self = this;
    var events = {
      'click .product-qty-container .qty-btn': function (e) {
        e.preventDefault();
        var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
        var $input = $curr.siblings('.qty-input[type=number]');
        var $inputValue = parseInt($input[0].value);
        if ($curr.hasClass('plus')) {
          $inputValue = $inputValue + 1;
        } else {
          $inputValue = $inputValue - 1;
        }
        $input.attr('value', $inputValue);
      }
    };

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  isOnScreen: function (elem) {
    // if the element doesn't exist, abort
    if (elem.length == 0) {
      return;
    }
    var $window = jQuery(window);
    var viewport_top = $window.scrollTop();
    var viewport_height = $window.height();
    var viewport_bottom = viewport_top + viewport_height;
    var $elem = jQuery(elem);
    var top = $elem.offset().top;
    var height = $elem.height();
    var bottom = top + height;
    return top >= viewport_top && top < viewport_bottom || bottom > viewport_top && bottom <= viewport_bottom || height > viewport_height && top <= viewport_top && bottom >= viewport_bottom;
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
    // self.swatches.destroy();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('scroll.listview');
  }
}));

/***/ }),

/***/ "./src/scripts/pages/views/view-collectionNav.js":
/*!*******************************************************!*\
  !*** ./src/scripts/pages/views/view-collectionNav.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*
    Filter and Sorter HTML structure
    <div class="collection-nav-block">
        <div class="nav-title">[title]</div>
        <div class="nav-content">
            <div class="nav-list-container">
                [drop down content]
            </div>
        </div>
    </div>
*/





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backbone__WEBPACK_IMPORTED_MODULE_2___default().View.extend({
  initialize: function (opts) {
    var self = this;
    self.$collection = self.$el;
    self.$sorter = self.$collection.find('.collection-nav-block.sorting');
    self.$filter = self.$collection.find('.collection-nav-block.filters');
    self.$category = self.$collection.find('.collection-nav-block.category');
    self.$mode = self.$collection.find('.collection-nav-block.mode');
    self.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    self.$header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('header.site-header');
    self.$footer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('footer.site-footer');
    self.layout = self.$collection.data('layout');
    self.navDropdown();
    // self.modeSwitcher();
    // self.fixNav();
    self.initSorting();
    if (self.$filter.hasClass('tag-filtering')) {
      self.prepareParams();
      self.initFiltering();
    }
    if (self.$filter.hasClass('storefront-filtering')) {
      // self.initSorting();
    }
  },
  events: {},
  navDropdown: function () {
    /*
        The goal here is to use one dropdown handle for both PLP (one-column, two columns) layouts on both large and smaller screen.
        Handling total 4 situations.
    */
    var self = this;
    var navDropdownCtl = function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).parent();
      if (self.layout == 'one-column' && !self.isMobile()) {
        var $currentOpened = self.$collection.find('.nav-dropdown.opened').not($curr);
      } else if (self.isMobile()) {
        var $currentOpened = self.$collection.find('.collection-nav .opened').not($curr);
      } else {
        var $currentOpened = $curr.siblings('.opened');
      }
      $currentOpened.removeClass('opened');
      $curr.toggleClass('opened');
    };
    var events = {
      'click .nav-title': navDropdownCtl,
      'click .filter-title': navDropdownCtl
    };

    // Click outside to close
    // $(window).on('click', function (e) {
    //     self.$body.removeClass('collection-nav-opened');
    //     self.$collection.find('.collection-nav-block.opened').removeClass('opened');
    // });

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  modeSwitcher: function () {
    var self = this;
    var modeSwitchCtl = function (e) {
      var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      var $currentActive = $curr.siblings();
      $currentActive.removeClass('active');
      self.$collection.removeClass($currentActive.data('mode')).addClass($curr.data('mode'));
      $curr.addClass('active');
    };
    var events = {
      'click .mode .mode-switcher:not(.active)': modeSwitchCtl
    };
    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  fixNav: function () {
    // Consider improve the logic below 
    // Consider better mobile fixed nav interaction with dynamic header interactions.
    var self = this;
    var initScrollFix = function () {
      // Deactive current fixed nav
      if (self.$activeFixedNav) {
        self.$activeFixedNav.trigger('detach.ScrollToFixed');
      }

      // Assign the correct nav to fix
      if (self.isMobile()) {
        if (self.layout == 'one-column') {
          self.$activeFixedNav = self.$collection.find('.collection-nav .nav');
        } else if (self.layout == 'two-columns') {
          self.$activeFixedNav = self.$collection.find('.collection-nav.nav');
        }
      } else {
        if (self.layout == 'one-column') {
          self.$activeFixedNav = self.$collection.find('.collection-nav');
        } else if (self.layout == 'two-columns') {
          // Only filter part will be fixed
          self.$activeFixedNav = self.$collection.find('.collection-nav.nav .filters');

          // Whole nav part will be fixed
          // self.$activeFixedNav = self.$collection.find('.collection-nav.nav');
        }
      }

      // Fix it
      if (self.$activeFixedNav) {
        self.$activeFixedNav.scrollToFixed({
          zIndex: 2,
          marginTop: function () {
            if (self.isMobile()) {
              // Note: if header stays at top (without going away during scrolling down) this return value will then need to be the header outter height.
              return 0;
            } else {
              return self.$header.outerHeight();
            }
          },
          removeOffsets: true,
          dontSetWidth: true,
          limit: function () {
            var limit = self.$footer.offset().top - jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).height();
            return limit;
          }
        });
      }
    };
    ORW.utilities.mediaCheck(function () {
      initScrollFix();
    }, function () {
      initScrollFix();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function (event) {
      if (self.$activeFixedNav) {
        self.$activeFixedNav.removeClass('scroll-up');
        if (self.isMobile() && self.$header.hasClass('scroll-up')) {
          self.$activeFixedNav.addClass('scroll-up');
        }
      }
    });
  },
  prepareParams: function () {
    var self = this;
    if (location.search.length) {
      for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
        aKeyValue = aCouples[i].split('=');
        // console.log(aKeyValue);
        if (aKeyValue.length > 1) {
          Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
        }
      }
    }

    // Clean the pagination
    delete Shopify.queryParams.page;
    delete Shopify.queryParams.showAll;
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().isEmptyObject(Shopify.queryParams)) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.collection-nav-block.clear-all').removeClass('hide');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.clear-all.clear-all-sort').removeClass('hide');
    }
  },
  initSorting: function () {
    var self = this;
    var events = {
      'click .collection-nav-block.sorting .filter': function (e) {
        e.preventDefault();
        var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget),
          sortVal = $curr.data('link');
        if (sortVal != '') {
          $curr.addClass('active').siblings('.filter').removeClass('active');
          Shopify.queryParams.sort_by = $curr.data('link');
        } else {
          delete Shopify.queryParams.sort_by;
        }
        location.search = jquery__WEBPACK_IMPORTED_MODULE_0___default().param(Shopify.queryParams);
      }
    };

    // Active Status
    if (Shopify.queryParams.sort_by) {
      self.$sorter.find('*[data-link="' + Shopify.queryParams.sort_by + '"]').addClass('active');
    }

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  initFiltering: function () {
    var self = this;
    var $filterSelects = self.$filter.find('select');
    var events = {
      'click .collection-nav-block.filters .filter-swatch': function (e) {
        e.preventDefault();
        var $curr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget),
          $filterParent = $curr.parents('.filter-swatches'),
          $fitlerSelect = $filterParent.siblings('select'),
          filterVal = $curr.data('link');
        if ($curr.hasClass('disabled')) {
          return false;
        }
        if (filterVal !== '') {
          $curr.addClass('active').siblings('.filter-swatch').removeClass('active');
          $fitlerSelect.val(filterVal).change();
        } else {
          // If found parent link for the fake collection filter, then go back to parent.
          if (self.parentCollectionLink) {
            console.log('go back to :' + self.parentCollectionLink);
            var newURL = self.parentCollectionLink;
          } else {
            var newURL = '/collections/' + Shopify.collectionHandle;
            var search = jquery__WEBPACK_IMPORTED_MODULE_0___default().param(Shopify.queryParams);
            if (search.length) {
              newURL += '?' + search;
            }
          }
          location.href = newURL;
        }
      },
      'change .collection-nav-block.filters select': function (e) {
        delete Shopify.queryParams.page;
        var newTags = [];
        underscore__WEBPACK_IMPORTED_MODULE_1__["default"].each($filterSelects, function (select) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(select).val()) {
            newTags.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(select).val());
          }
        });
        if (Shopify.collectionHandle) {
          // PLP
          var newURL = '/collections/' + Shopify.collectionHandle;
          var search = jquery__WEBPACK_IMPORTED_MODULE_0___default().param(Shopify.queryParams);
          if (newTags.length) {
            newURL += '/' + newTags.join('+');
          }
          if (search.length) {
            newURL += '?' + search;
          }
          location.href = newURL;
        } else {
          // Search
          if (newTags.length) {
            Shopify.queryParams.constraint = newTags.join('+');
          } else {
            delete Shopify.queryParams.constraint;
          }
          location.search = jquery__WEBPACK_IMPORTED_MODULE_0___default().param(Shopify.queryParams);
        }
      }
    };

    // Build the fake 'Style' filter using main navigation, will be disabled for Phase 2
    self.navLinkFilters();

    // Update applied filter count
    var appliedFilterCount = self.$filter.find('.active').length;
    if (appliedFilterCount > 0) {
      var $navTitle = self.$filter.find('.nav-title');
      $navTitle.text($navTitle.data('title') + ' (' + appliedFilterCount + ')');
    }

    // Update and delegate adding events
    underscore__WEBPACK_IMPORTED_MODULE_1__["default"].extend(self.events, events);
    self.delegateEvents();
  },
  navLinkFilters: function () {
    var self = this;
    var $rawNav = ORW.Global?.$rawNav ? ORW.Global.$rawNav.clone() : jquery__WEBPACK_IMPORTED_MODULE_0___default()('header.site-header nav').clone();
    var currentUrl = self.$collection.data('url');
    self.parentCollectionLink = false;

    // Build fake collection filter
    var $activeLink = $rawNav.find('a[href="' + currentUrl + '"]');
    if ($activeLink.length) {
      var $children = $activeLink.siblings('.children');
      if ($children.length) {
        // console.log('on parent level!');
        self.$filter.find('.filter.collection .filter-swatches').html($children.html());
        self.$filter.find('.filter.collection').show();
      } else if ($activeLink.parent().hasClass('level-3')) {
        // console.log('on sub level!');
        $children = $activeLink.parent().parent('.children');
        if ($children.length) {
          self.parentCollectionLink = $children.siblings('.nav-link').attr('href');
          $children.find('a[href="' + currentUrl + '"]').addClass('active');
          self.$filter.find('.filter.collection .filter-swatches').html($children.html());
          self.$filter.find('.filter.collection').show();
          self.$filter.find('.clear-all').removeClass('hide hidden');
        }
      }
    }
  },
  destroy: function () {
    var self = this;
    self.undelegateEvents();
  },
  isMobile: function () {
    if (ORW.responsive == 'small') {
      return true;
    }
    return false;
  }
}));

/***/ }),

/***/ "./src/scripts/templates/template-oneProductCompareAll.html":
/*!******************************************************************!*\
  !*** ./src/scripts/templates/template-oneProductCompareAll.html ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<% console.log(content) %>\r\n<% var productsData = content.productdata %>\r\n<% if (productsData.length) { %>\r\n    <% _.each(content.specs, function(spec){ %>\r\n        <% var specHandle = spec.spec %>\r\n        <% var specLable = spec.label %>\r\n        <div class=\"row col-wrapper\">\r\n            <div class=\"col compare-all-labels\">\r\n                <div class=\"label-spec\" data-spec=\"<%= specHandle %>\" ><%= specLable %></div>\r\n            </div>\r\n            <div class=\"col compare-all-grid\">\r\n            <% for (var i = 0; i < content.maxCompareNum; i++) { %>\r\n                <% if ( typeof productsData[i] === 'undefined' ) { %>\r\n                    <div class=\"item empty\" ></div>\r\n                <% } else { %>\r\n                    <div class=\"item\" data-id=\"<%= productsData[i].id %>\" data-spec=\"<%= specHandle %>\">\r\n                        <p><%= productsData[i][specHandle] %></p>\r\n                    </div>\r\n                <% } %>\r\n            <% } %>\r\n            </div>\r\n        </div>\r\n    <% }) %>\r\n<% } %>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/scripts/templates/template-oneProductCompareGrid.html":
/*!*******************************************************************!*\
  !*** ./src/scripts/templates/template-oneProductCompareGrid.html ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<% console.log(content) %>\r\n<% var productsData = content.productdata %>\r\n<% for (var i = 0; i < content.maxCompareNum; i++) { %>\r\n    <% if ( typeof productsData[i] === 'undefined' ) { %>\r\n        <div class=\"item empty\" >\r\n            <div class=\"product-image\">\r\n            </div>\r\n        </div>\r\n    <% } else { %>\r\n        <div class=\"item\" data-id=\"<%= productsData[i].id %>\">\r\n            <div class=\"product-image\">\r\n                <% if (productsData[i].image) { %>\r\n                <img src=\"<%= productsData[i].image %>\" alt=\"<%= productsData[i].alt %>\">\r\n                <% } %>\r\n                <button type=\"button\" name=\"remove\" class=\"remove\">X</button>\r\n            </div>\r\n            <div class=\"product-info\">\r\n                <p class=\"product-name\"><%= productsData[i].name %></p>\r\n                <a href=\"<%= productsData[i].url %>\" target=\"_blank\" title=\"<%= productsData[i].name %>\">View Details</a>\r\n            </div>\r\n        </div>\r\n    <% } %>\r\n<% } %>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/styles/modules/oneProductCompare.scss":
/*!***************************************************!*\
  !*** ./src/styles/modules/oneProductCompare.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/pages/collection.scss":
/*!******************************************!*\
  !*** ./src/styles/pages/collection.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/pages/product/product-quickbuy.scss":
/*!********************************************************!*\
  !*** ./src/styles/pages/product/product-quickbuy.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/pages/search.scss":
/*!**************************************!*\
  !*** ./src/styles/pages/search.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=collection.product.bundle.js.map