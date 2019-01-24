/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/businessList/mix.js":
/*!************************************!*\
  !*** ./src/js/businessList/mix.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  $('.bl-list a').each(function () {\n    var $href = $(this).attr('href').replace('/?page_id=', '');\n\n    if ($href == page_id) {\n      $(this).parent().css('display', 'none');\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/businessList/mix.js?");

/***/ }),

/***/ "./src/js/form/mix.js":
/*!****************************!*\
  !*** ./src/js/form/mix.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('wpcf7mailsent', function (event) {\n  location = '/?page_id=64';\n}, false);\n$(function () {\n  var target1 = $('.wpcf7c-elm-step2');\n  $(target1).on('click', function () {\n    $('form').removeClass('custom-wpcf7c-confirmed');\n  });\n});\n$(function () {\n  var target1 = $('.fm-btn__next'),\n      target2 = $('.name-f input'),\n      target3 = $('.name-l input'),\n      target4 = $('.phonetic-f input'),\n      target5 = $('.phonetic-l input'),\n      target6 = $('.email input'),\n      target7 = $('.tel input'),\n      name_f,\n      name_l,\n      phonetic_f,\n      phonetic_l,\n      email,\n      tel,\n      flg = 0;\n  $(target1).on('click', function () {\n    name_f = $(target2).val();\n    localStorage.setItem('ametrine-name-f', name_f);\n    name_l = $(target3).val();\n    localStorage.setItem('ametrine-name-l', name_l);\n    phonetic_f = $(target4).val();\n    localStorage.setItem('ametrine-phonetic-f', phonetic_f);\n    phonetic_l = $(target5).val();\n    localStorage.setItem('ametrine-phonetic-l', phonetic_l);\n    email = $(target6).val();\n    localStorage.setItem('ametrine-email', email);\n    tel = $(target7).val();\n    localStorage.setItem('ametrine-tel', tel);\n    flg = 1;\n    localStorage.setItem('ametrine-flg', flg);\n  });\n\n  if (localStorage.getItem('ametrine-flg') == 1) {\n    $(target2).val(localStorage.getItem('ametrine-name-f'));\n    $(target3).val(localStorage.getItem('ametrine-name-l'));\n    $(target4).val(localStorage.getItem('ametrine-phonetic-f'));\n    $(target5).val(localStorage.getItem('ametrine-phonetic-l'));\n    $(target6).val(localStorage.getItem('ametrine-email'));\n    $(target7).val(localStorage.getItem('ametrine-tel'));\n  } else {\n    return;\n  }\n});\n\n//# sourceURL=webpack:///./src/js/form/mix.js?");

/***/ }),

/***/ "./src/js/linkAction/mix.js":
/*!**********************************!*\
  !*** ./src/js/linkAction/mix.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var dir = location.href.split(\"/\")[3];\n\n  if (dir == '') {\n    localStorage.setItem('linkAction', 0);\n  }\n\n  $('.js-linkAction').on('click', function () {\n    if (dir == '') {\n      $(this).toggleClass('action');\n      var link = document.getElementById('ul').children[0].getElementsByTagName('a')[0].getAttribute('href');\n      setTimeout(function () {\n        window.location.href = link;\n      }, 500);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/linkAction/mix.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scrollLogo_mix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollLogo/mix */ \"./src/js/scrollLogo/mix.js\");\n/* harmony import */ var _linkAction_mix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkAction/mix */ \"./src/js/linkAction/mix.js\");\n/* harmony import */ var _linkAction_mix__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_linkAction_mix__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pageOpen_mix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageOpen/mix */ \"./src/js/pageOpen/mix.js\");\n/* harmony import */ var _form_mix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/mix */ \"./src/js/form/mix.js\");\n/* harmony import */ var _form_mix__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_form_mix__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _businessList_mix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./businessList/mix */ \"./src/js/businessList/mix.js\");\n/* harmony import */ var _businessList_mix__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_businessList_mix__WEBPACK_IMPORTED_MODULE_5__);\n // 消さないでね。css出力用\n// jsはこの下に書く感じ\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/pageOpen/_pageOpen.js":
/*!**************************************!*\
  !*** ./src/js/pageOpen/_pageOpen.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  $(window).on('load', function () {\n    var dir = location.href.split(\"/\")[3];\n\n    if (dir != '' && localStorage.getItem('linkAction') == 0) {\n      setTimeout(function () {\n        $('.js-pageOpen').addClass('js-open');\n      }, 1000);\n      setTimeout(function () {\n        $('.js-pageOpen').css('display', 'none');\n      }, 2000);\n      localStorage.setItem('linkAction', 1);\n    } else {\n      $('.js-pageOpen').css('display', 'none');\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/pageOpen/_pageOpen.js?");

/***/ }),

/***/ "./src/js/pageOpen/mix.js":
/*!********************************!*\
  !*** ./src/js/pageOpen/mix.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_pageOpen */ \"./src/js/pageOpen/_pageOpen.js\");\n/* harmony import */ var _pageOpen__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageOpen__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/js/pageOpen/mix.js?");

/***/ }),

/***/ "./src/js/scrollLogo/_custom.js":
/*!**************************************!*\
  !*** ./src/js/scrollLogo/_custom.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function scrollLogo() {\n  var wH = innerHeight,\n      wW = innerWidth,\n      topH = 75,\n      bottomH = wH - Math.floor($('.top-logo img').innerHeight()) - topH,\n      lrW = (wW - Math.floor($('.top-logo img').innerWidth())) / 2,\n      target1 = $('.js-sectionLogo__partsTop'),\n      target2 = $('.js-scrollLogo__parts1'),\n      target3 = $('.js-sectionLogo__partsBottom'),\n      target4 = $('.js-sectionLogo__partsLeft'),\n      target5 = $('.js-sectionLogo__partsRight');\n  $(target1).css('height', topH + 'px');\n  $(target2).css('height', wH + 'px');\n  $(target3).css('height', bottomH + 'px');\n  $(target4).css('width', lrW + 'px');\n  $(target5).css('width', lrW + 'px'); // console.log(topH, wH, bottomH, lrW);\n}\n\n$(function () {\n  var dir = location.href.split(\"/\")[3],\n      target1 = $('.js-scrollLogo__parts2'),\n      target2 = $('.loop-message');\n  scrollLogo();\n  localStorage.setItem('scrollFlg', 1);\n  $('html, body').animate({\n    scrollTop: innerHeight + 10\n  }, 500, 'swing');\n  $('header').css({\n    'margin-bottom': innerHeight\n  });\n  $(target1).addClass('active');\n  $(target2).addClass('active');\n  $(window).on('scroll', function () {\n    var scrollSize = $(window).scrollTop();\n\n    if (dir == '' && localStorage.getItem('scrollFlg') == 1 && scrollSize > 10) {\n      localStorage.setItem('scrollFlg', 0);\n    } else if (scrollSize == 0) {\n      localStorage.setItem('scrollFlg', 1);\n    } else {\n      return;\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/scrollLogo/_custom.js?");

/***/ }),

/***/ "./src/js/scrollLogo/_intersectionObserver.js":
/*!****************************************************!*\
  !*** ./src/js/scrollLogo/_intersectionObserver.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copyright 2016 Google Inc. All Rights Reserved.\n *\n * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.\n *\n *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document\n *\n */\n(function (window, document) {\n  'use strict'; // Exits early if all IntersectionObserver and IntersectionObserverEntry\n  // features are natively supported.\n\n  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {\n    // Minimal polyfill for Edge 15's lack of `isIntersecting`\n    // See: https://github.com/w3c/IntersectionObserver/issues/211\n    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {\n      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {\n        get: function get() {\n          return this.intersectionRatio > 0;\n        }\n      });\n    }\n\n    return;\n  }\n  /**\n   * An IntersectionObserver registry. This registry exists to hold a strong\n   * reference to IntersectionObserver instances currently observing a target\n   * element. Without this registry, instances without another reference may be\n   * garbage collected.\n   */\n\n\n  var registry = [];\n  /**\n   * Creates the global IntersectionObserverEntry constructor.\n   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry\n   * @param {Object} entry A dictionary of instance properties.\n   * @constructor\n   */\n\n  function IntersectionObserverEntry(entry) {\n    this.time = entry.time;\n    this.target = entry.target;\n    this.rootBounds = entry.rootBounds;\n    this.boundingClientRect = entry.boundingClientRect;\n    this.intersectionRect = entry.intersectionRect || getEmptyRect();\n    this.isIntersecting = !!entry.intersectionRect; // Calculates the intersection ratio.\n\n    var targetRect = this.boundingClientRect;\n    var targetArea = targetRect.width * targetRect.height;\n    var intersectionRect = this.intersectionRect;\n    var intersectionArea = intersectionRect.width * intersectionRect.height; // Sets intersection ratio.\n\n    if (targetArea) {\n      // Round the intersection ratio to avoid floating point math issues:\n      // https://github.com/w3c/IntersectionObserver/issues/324\n      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));\n    } else {\n      // If area is zero and is intersecting, sets to 1, otherwise to 0\n      this.intersectionRatio = this.isIntersecting ? 1 : 0;\n    }\n  }\n  /**\n   * Creates the global IntersectionObserver constructor.\n   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface\n   * @param {Function} callback The function to be invoked after intersection\n   *     changes have queued. The function is not invoked if the queue has\n   *     been emptied by calling the `takeRecords` method.\n   * @param {Object=} opt_options Optional configuration options.\n   * @constructor\n   */\n\n\n  function IntersectionObserver(callback, opt_options) {\n    var options = opt_options || {};\n\n    if (typeof callback != 'function') {\n      throw new Error('callback must be a function');\n    }\n\n    if (options.root && options.root.nodeType != 1) {\n      throw new Error('root must be an Element');\n    } // Binds and throttles `this._checkForIntersections`.\n\n\n    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT); // Private properties.\n\n    this._callback = callback;\n    this._observationTargets = [];\n    this._queuedEntries = [];\n    this._rootMarginValues = this._parseRootMargin(options.rootMargin); // Public properties.\n\n    this.thresholds = this._initThresholds(options.threshold);\n    this.root = options.root || null;\n    this.rootMargin = this._rootMarginValues.map(function (margin) {\n      return margin.value + margin.unit;\n    }).join(' ');\n  }\n  /**\n   * The minimum interval within which the document will be checked for\n   * intersection changes.\n   */\n\n\n  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;\n  /**\n   * The frequency in which the polyfill polls for intersection changes.\n   * this can be updated on a per instance basis and must be set prior to\n   * calling `observe` on the first target.\n   */\n\n  IntersectionObserver.prototype.POLL_INTERVAL = null;\n  /**\n   * Use a mutation observer on the root element\n   * to detect intersection changes.\n   */\n\n  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;\n  /**\n   * Starts observing a target element for intersection changes based on\n   * the thresholds values.\n   * @param {Element} target The DOM element to observe.\n   */\n\n  IntersectionObserver.prototype.observe = function (target) {\n    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {\n      return item.element == target;\n    });\n\n    if (isTargetAlreadyObserved) {\n      return;\n    }\n\n    if (!(target && target.nodeType == 1)) {\n      throw new Error('target must be an Element');\n    }\n\n    this._registerInstance();\n\n    this._observationTargets.push({\n      element: target,\n      entry: null\n    });\n\n    this._monitorIntersections();\n\n    this._checkForIntersections();\n  };\n  /**\n   * Stops observing a target element for intersection changes.\n   * @param {Element} target The DOM element to observe.\n   */\n\n\n  IntersectionObserver.prototype.unobserve = function (target) {\n    this._observationTargets = this._observationTargets.filter(function (item) {\n      return item.element != target;\n    });\n\n    if (!this._observationTargets.length) {\n      this._unmonitorIntersections();\n\n      this._unregisterInstance();\n    }\n  };\n  /**\n   * Stops observing all target elements for intersection changes.\n   */\n\n\n  IntersectionObserver.prototype.disconnect = function () {\n    this._observationTargets = [];\n\n    this._unmonitorIntersections();\n\n    this._unregisterInstance();\n  };\n  /**\n   * Returns any queue entries that have not yet been reported to the\n   * callback and clears the queue. This can be used in conjunction with the\n   * callback to obtain the absolute most up-to-date intersection information.\n   * @return {Array} The currently queued entries.\n   */\n\n\n  IntersectionObserver.prototype.takeRecords = function () {\n    var records = this._queuedEntries.slice();\n\n    this._queuedEntries = [];\n    return records;\n  };\n  /**\n   * Accepts the threshold value from the user configuration object and\n   * returns a sorted array of unique threshold values. If a value is not\n   * between 0 and 1 and error is thrown.\n   * @private\n   * @param {Array|number=} opt_threshold An optional threshold value or\n   *     a list of threshold values, defaulting to [0].\n   * @return {Array} A sorted list of unique and valid threshold values.\n   */\n\n\n  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {\n    var threshold = opt_threshold || [0];\n    if (!Array.isArray(threshold)) threshold = [threshold];\n    return threshold.sort().filter(function (t, i, a) {\n      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {\n        throw new Error('threshold must be a number between 0 and 1 inclusively');\n      }\n\n      return t !== a[i - 1];\n    });\n  };\n  /**\n   * Accepts the rootMargin value from the user configuration object\n   * and returns an array of the four margin values as an object containing\n   * the value and unit properties. If any of the values are not properly\n   * formatted or use a unit other than px or %, and error is thrown.\n   * @private\n   * @param {string=} opt_rootMargin An optional rootMargin value,\n   *     defaulting to '0px'.\n   * @return {Array<Object>} An array of margin objects with the keys\n   *     value and unit.\n   */\n\n\n  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {\n    var marginString = opt_rootMargin || '0px';\n    var margins = marginString.split(/\\s+/).map(function (margin) {\n      var parts = /^(-?\\d*\\.?\\d+)(px|%)$/.exec(margin);\n\n      if (!parts) {\n        throw new Error('rootMargin must be specified in pixels or percent');\n      }\n\n      return {\n        value: parseFloat(parts[1]),\n        unit: parts[2]\n      };\n    }); // Handles shorthand.\n\n    margins[1] = margins[1] || margins[0];\n    margins[2] = margins[2] || margins[0];\n    margins[3] = margins[3] || margins[1];\n    return margins;\n  };\n  /**\n   * Starts polling for intersection changes if the polling is not already\n   * happening, and if the page's visibility state is visible.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._monitorIntersections = function () {\n    if (!this._monitoringIntersections) {\n      this._monitoringIntersections = true; // If a poll interval is set, use polling instead of listening to\n      // resize and scroll events or DOM mutations.\n\n      if (this.POLL_INTERVAL) {\n        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);\n      } else {\n        addEvent(window, 'resize', this._checkForIntersections, true);\n        addEvent(document, 'scroll', this._checkForIntersections, true);\n\n        if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {\n          this._domObserver = new MutationObserver(this._checkForIntersections);\n\n          this._domObserver.observe(document, {\n            attributes: true,\n            childList: true,\n            characterData: true,\n            subtree: true\n          });\n        }\n      }\n    }\n  };\n  /**\n   * Stops polling for intersection changes.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._unmonitorIntersections = function () {\n    if (this._monitoringIntersections) {\n      this._monitoringIntersections = false;\n      clearInterval(this._monitoringInterval);\n      this._monitoringInterval = null;\n      removeEvent(window, 'resize', this._checkForIntersections, true);\n      removeEvent(document, 'scroll', this._checkForIntersections, true);\n\n      if (this._domObserver) {\n        this._domObserver.disconnect();\n\n        this._domObserver = null;\n      }\n    }\n  };\n  /**\n   * Scans each observation target for intersection changes and adds them\n   * to the internal entries queue. If new entries are found, it\n   * schedules the callback to be invoked.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._checkForIntersections = function () {\n    var rootIsInDom = this._rootIsInDom();\n\n    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();\n\n    this._observationTargets.forEach(function (item) {\n      var target = item.element;\n      var targetRect = getBoundingClientRect(target);\n\n      var rootContainsTarget = this._rootContainsTarget(target);\n\n      var oldEntry = item.entry;\n\n      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);\n\n      var newEntry = item.entry = new IntersectionObserverEntry({\n        time: now(),\n        target: target,\n        boundingClientRect: targetRect,\n        rootBounds: rootRect,\n        intersectionRect: intersectionRect\n      });\n\n      if (!oldEntry) {\n        this._queuedEntries.push(newEntry);\n      } else if (rootIsInDom && rootContainsTarget) {\n        // If the new entry intersection ratio has crossed any of the\n        // thresholds, add a new entry.\n        if (this._hasCrossedThreshold(oldEntry, newEntry)) {\n          this._queuedEntries.push(newEntry);\n        }\n      } else {\n        // If the root is not in the DOM or target is not contained within\n        // root but the previous entry for this target had an intersection,\n        // add a new record indicating removal.\n        if (oldEntry && oldEntry.isIntersecting) {\n          this._queuedEntries.push(newEntry);\n        }\n      }\n    }, this);\n\n    if (this._queuedEntries.length) {\n      this._callback(this.takeRecords(), this);\n    }\n  };\n  /**\n   * Accepts a target and root rect computes the intersection between then\n   * following the algorithm in the spec.\n   * TODO(philipwalton): at this time clip-path is not considered.\n   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo\n   * @param {Element} target The target DOM element\n   * @param {Object} rootRect The bounding rect of the root after being\n   *     expanded by the rootMargin value.\n   * @return {?Object} The final intersection rect object or undefined if no\n   *     intersection is found.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {\n    // If the element isn't displayed, an intersection can't happen.\n    if (window.getComputedStyle(target).display == 'none') return;\n    var targetRect = getBoundingClientRect(target);\n    var intersectionRect = targetRect;\n    var parent = getParentNode(target);\n    var atRoot = false;\n\n    while (!atRoot) {\n      var parentRect = null;\n      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {}; // If the parent isn't displayed, an intersection can't happen.\n\n      if (parentComputedStyle.display == 'none') return;\n\n      if (parent == this.root || parent == document) {\n        atRoot = true;\n        parentRect = rootRect;\n      } else {\n        // If the element has a non-visible overflow, and it's not the <body>\n        // or <html> element, update the intersection rect.\n        // Note: <body> and <html> cannot be clipped to a rect that's not also\n        // the document rect, so no need to compute a new intersection.\n        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {\n          parentRect = getBoundingClientRect(parent);\n        }\n      } // If either of the above conditionals set a new parentRect,\n      // calculate new intersection data.\n\n\n      if (parentRect) {\n        intersectionRect = computeRectIntersection(parentRect, intersectionRect);\n        if (!intersectionRect) break;\n      }\n\n      parent = getParentNode(parent);\n    }\n\n    return intersectionRect;\n  };\n  /**\n   * Returns the root rect after being expanded by the rootMargin value.\n   * @return {Object} The expanded root rect.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._getRootRect = function () {\n    var rootRect;\n\n    if (this.root) {\n      rootRect = getBoundingClientRect(this.root);\n    } else {\n      // Use <html>/<body> instead of window since scroll bars affect size.\n      var html = document.documentElement;\n      var body = document.body;\n      rootRect = {\n        top: 0,\n        left: 0,\n        right: html.clientWidth || body.clientWidth,\n        width: html.clientWidth || body.clientWidth,\n        bottom: html.clientHeight || body.clientHeight,\n        height: html.clientHeight || body.clientHeight\n      };\n    }\n\n    return this._expandRectByRootMargin(rootRect);\n  };\n  /**\n   * Accepts a rect and expands it by the rootMargin value.\n   * @param {Object} rect The rect object to expand.\n   * @return {Object} The expanded rect.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {\n    var margins = this._rootMarginValues.map(function (margin, i) {\n      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;\n    });\n\n    var newRect = {\n      top: rect.top - margins[0],\n      right: rect.right + margins[1],\n      bottom: rect.bottom + margins[2],\n      left: rect.left - margins[3]\n    };\n    newRect.width = newRect.right - newRect.left;\n    newRect.height = newRect.bottom - newRect.top;\n    return newRect;\n  };\n  /**\n   * Accepts an old and new entry and returns true if at least one of the\n   * threshold values has been crossed.\n   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a\n   *    particular target element or null if no previous entry exists.\n   * @param {IntersectionObserverEntry} newEntry The current entry for a\n   *    particular target element.\n   * @return {boolean} Returns true if a any threshold has been crossed.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {\n    // To make comparing easier, an entry that has a ratio of 0\n    // but does not actually intersect is given a value of -1\n    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;\n    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; // Ignore unchanged ratios\n\n    if (oldRatio === newRatio) return;\n\n    for (var i = 0; i < this.thresholds.length; i++) {\n      var threshold = this.thresholds[i]; // Return true if an entry matches a threshold or if the new ratio\n      // and the old ratio are on the opposite sides of a threshold.\n\n      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {\n        return true;\n      }\n    }\n  };\n  /**\n   * Returns whether or not the root element is an element and is in the DOM.\n   * @return {boolean} True if the root element is an element and is in the DOM.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._rootIsInDom = function () {\n    return !this.root || containsDeep(document, this.root);\n  };\n  /**\n   * Returns whether or not the target element is a child of root.\n   * @param {Element} target The target element to check.\n   * @return {boolean} True if the target element is a child of root.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._rootContainsTarget = function (target) {\n    return containsDeep(this.root || document, target);\n  };\n  /**\n   * Adds the instance to the global IntersectionObserver registry if it isn't\n   * already present.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._registerInstance = function () {\n    if (registry.indexOf(this) < 0) {\n      registry.push(this);\n    }\n  };\n  /**\n   * Removes the instance from the global IntersectionObserver registry.\n   * @private\n   */\n\n\n  IntersectionObserver.prototype._unregisterInstance = function () {\n    var index = registry.indexOf(this);\n    if (index != -1) registry.splice(index, 1);\n  };\n  /**\n   * Returns the result of the performance.now() method or null in browsers\n   * that don't support the API.\n   * @return {number} The elapsed time since the page was requested.\n   */\n\n\n  function now() {\n    return window.performance && performance.now && performance.now();\n  }\n  /**\n   * Throttles a function and delays its execution, so it's only called at most\n   * once within a given time period.\n   * @param {Function} fn The function to throttle.\n   * @param {number} timeout The amount of time that must pass before the\n   *     function can be called again.\n   * @return {Function} The throttled function.\n   */\n\n\n  function throttle(fn, timeout) {\n    var timer = null;\n    return function () {\n      if (!timer) {\n        timer = setTimeout(function () {\n          fn();\n          timer = null;\n        }, timeout);\n      }\n    };\n  }\n  /**\n   * Adds an event handler to a DOM node ensuring cross-browser compatibility.\n   * @param {Node} node The DOM node to add the event handler to.\n   * @param {string} event The event name.\n   * @param {Function} fn The event handler to add.\n   * @param {boolean} opt_useCapture Optionally adds the even to the capture\n   *     phase. Note: this only works in modern browsers.\n   */\n\n\n  function addEvent(node, event, fn, opt_useCapture) {\n    if (typeof node.addEventListener == 'function') {\n      node.addEventListener(event, fn, opt_useCapture || false);\n    } else if (typeof node.attachEvent == 'function') {\n      node.attachEvent('on' + event, fn);\n    }\n  }\n  /**\n   * Removes a previously added event handler from a DOM node.\n   * @param {Node} node The DOM node to remove the event handler from.\n   * @param {string} event The event name.\n   * @param {Function} fn The event handler to remove.\n   * @param {boolean} opt_useCapture If the event handler was added with this\n   *     flag set to true, it should be set to true here in order to remove it.\n   */\n\n\n  function removeEvent(node, event, fn, opt_useCapture) {\n    if (typeof node.removeEventListener == 'function') {\n      node.removeEventListener(event, fn, opt_useCapture || false);\n    } else if (typeof node.detatchEvent == 'function') {\n      node.detatchEvent('on' + event, fn);\n    }\n  }\n  /**\n   * Returns the intersection between two rect objects.\n   * @param {Object} rect1 The first rect.\n   * @param {Object} rect2 The second rect.\n   * @return {?Object} The intersection rect or undefined if no intersection\n   *     is found.\n   */\n\n\n  function computeRectIntersection(rect1, rect2) {\n    var top = Math.max(rect1.top, rect2.top);\n    var bottom = Math.min(rect1.bottom, rect2.bottom);\n    var left = Math.max(rect1.left, rect2.left);\n    var right = Math.min(rect1.right, rect2.right);\n    var width = right - left;\n    var height = bottom - top;\n    return width >= 0 && height >= 0 && {\n      top: top,\n      bottom: bottom,\n      left: left,\n      right: right,\n      width: width,\n      height: height\n    };\n  }\n  /**\n   * Shims the native getBoundingClientRect for compatibility with older IE.\n   * @param {Element} el The element whose bounding rect to get.\n   * @return {Object} The (possibly shimmed) rect of the element.\n   */\n\n\n  function getBoundingClientRect(el) {\n    var rect;\n\n    try {\n      rect = el.getBoundingClientRect();\n    } catch (err) {// Ignore Windows 7 IE11 \"Unspecified error\"\n      // https://github.com/w3c/IntersectionObserver/pull/205\n    }\n\n    if (!rect) return getEmptyRect(); // Older IE\n\n    if (!(rect.width && rect.height)) {\n      rect = {\n        top: rect.top,\n        right: rect.right,\n        bottom: rect.bottom,\n        left: rect.left,\n        width: rect.right - rect.left,\n        height: rect.bottom - rect.top\n      };\n    }\n\n    return rect;\n  }\n  /**\n   * Returns an empty rect object. An empty rect is returned when an element\n   * is not in the DOM.\n   * @return {Object} The empty rect.\n   */\n\n\n  function getEmptyRect() {\n    return {\n      top: 0,\n      bottom: 0,\n      left: 0,\n      right: 0,\n      width: 0,\n      height: 0\n    };\n  }\n  /**\n   * Checks to see if a parent element contains a child element (including inside\n   * shadow DOM).\n   * @param {Node} parent The parent element.\n   * @param {Node} child The child element.\n   * @return {boolean} True if the parent node contains the child node.\n   */\n\n\n  function containsDeep(parent, child) {\n    var node = child;\n\n    while (node) {\n      if (node == parent) return true;\n      node = getParentNode(node);\n    }\n\n    return false;\n  }\n  /**\n   * Gets the parent node of an element or its host element if the parent node\n   * is a shadow root.\n   * @param {Node} node The node whose parent to get.\n   * @return {Node|null} The parent node or null if no parent exists.\n   */\n\n\n  function getParentNode(node) {\n    var parent = node.parentNode;\n\n    if (parent && parent.nodeType == 11 && parent.host) {\n      // If the parent is a shadow root, return the host element.\n      return parent.host;\n    }\n\n    if (parent && parent.assignedSlot) {\n      // If the parent is distributed in a <slot>, return the parent of a slot.\n      return parent.assignedSlot.parentNode;\n    }\n\n    return parent;\n  } // Exposes the constructors globally.\n\n\n  window.IntersectionObserver = IntersectionObserver;\n  window.IntersectionObserverEntry = IntersectionObserverEntry;\n})(window, document);\n\n$(function () {\n  // IntersectionObserverを使用してjs-scrollLogo__parts1が画面内にあるかどうかで表示を切り替えています。\n  var observer = new IntersectionObserver(function (entries) {\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var e = _step.value;\n        var flag = e.isIntersecting,\n            target1 = $('.js-scrollLogo__parts2'),\n            target2 = $('.loop-message');\n\n        if (flag == true) {\n          $('header').css({\n            'margin-bottom': innerHeight\n          });\n          $(target1).addClass('active');\n          $(target2).addClass('active');\n          $('html, body').animate({\n            scrollTop: 0\n          }, 500, 'swing'); // localStorage.setItem('scrollFlg', 1);\n\n          console.log(\"true\");\n        } else {\n          $('header').css({\n            'margin-bottom': '0'\n          });\n          $(target1).removeClass('active');\n          $(target2).removeClass('active').css('transition', '');\n          $('header').css('display', 'none');\n          $('body').css('position', 'fixed');\n          setTimeout(function () {\n            $('body').css({\n              'position': ''\n            });\n          }, 1000);\n          console.log(\"false 5\");\n        }\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  }); // observer.observe(document.querySelector('.js-scrollLogo__parts1'));\n});\n\n//# sourceURL=webpack:///./src/js/scrollLogo/_intersectionObserver.js?");

/***/ }),

/***/ "./src/js/scrollLogo/mix.js":
/*!**********************************!*\
  !*** ./src/js/scrollLogo/mix.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _intersectionObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_intersectionObserver */ \"./src/js/scrollLogo/_intersectionObserver.js\");\n/* harmony import */ var _intersectionObserver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_intersectionObserver__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_custom */ \"./src/js/scrollLogo/_custom.js\");\n/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/js/scrollLogo/mix.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });