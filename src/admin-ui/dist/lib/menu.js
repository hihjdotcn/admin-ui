(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("admin-ui-breadcrumb-button-cascading-checkbox-collapse-datepicker-frame-grid-icon-input-json-schema-loading-menu", [], factory);
	else if(typeof exports === 'object')
		exports["admin-ui-breadcrumb-button-cascading-checkbox-collapse-datepicker-frame-grid-icon-input-json-schema-loading-menu"] = factory();
	else
		root["admin-ui-breadcrumb-button-cascading-checkbox-collapse-datepicker-frame-grid-icon-input-json-schema-loading-menu"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "40SK");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+E39":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("S82l")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "+SQz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("+s0W");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("cde297b8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6e8f300\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6e8f300\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "+ZMJ":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("lOnJ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "+s0W":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "\n.au-menu {\n  position: relative;\n  height: 100%;\n  list-style: none;\n}\n.au-menu li {\n    position: relative;\n}\n.au-menu .menu {\n    position: relative;\n    height: 40px;\n    padding: 0 20px 0 0;\n    overflow: hidden;\n    line-height: 40px;\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    cursor: pointer;\n}\n.au-menu .menu-text {\n    display: inline-block;\n}\n.au-menu .menu-icon {\n    position: relative;\n    top: 1px;\n    margin-right: 10px;\n    font-size: 18px;\n}\n.au-menu .menu-fold-icon {\n    position: absolute;\n    right: 12px;\n    text-align: center;\n    line-height: 40px;\n    font-size: 18px;\n}\n.au-menu .active-dec {\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    height: 100%;\n    width: 4px;\n}\n.au-menu .collapse-handle-top,\n  .au-menu .collapse-handle-bottom {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 40px;\n    padding: 0 22px;\n    line-height: 40px;\n    text-align: right;\n    font-size: 18px;\n    cursor: pointer;\n}\n.au-menu .collapse-handle-top {\n    top: 0;\n    border-bottom: 1px solid;\n}\n.au-menu .collapse-handle-bottom {\n    bottom: 0;\n    border-top: 1px solid;\n}\n.au-menu.top-level {\n  padding: 10px 0;\n}\n.au-menu.collapsable-top {\n  padding-top: 40px;\n}\n.au-menu.collapsable-bottom {\n  padding-bottom: 40px;\n}\n.au-menu.collapse {\n  width: 60px !important;\n}\n.au-menu.collapse .menu {\n    padding: 0;\n    cursor: pointer;\n}\n.au-menu.collapse .menu-icon {\n    margin-right: 10px;\n}\n.au-menu.collapse .menu-text {\n    display: none;\n}\n.au-menu.collapse .collapse-handle {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n}\n.au-menu-pop-content {\n  padding: 12px;\n  font-size: 14px;\n}\n.au-menu-children-triangle,\n.au-menu-has-children-pop {\n  border-width: 1px;\n  border-style: solid;\n}\n.au-menu-popover-content {\n  padding: 10px 0;\n  max-height: 320px;\n}\n", "", {"version":3,"sources":["/Users/awey/Documents/projects/admin-ui/src/admin-ui/src/components/menu/src/menu.vue"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,aAAa;EACb,iBAAiB;CAClB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,mBAAmB;IACnB,aAAa;IACb,oBAAoB;IACpB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,wBAAwB;IACxB,iBAAiB;IACjB,oBAAoB;IACpB,gBAAgB;CACnB;AACD;IACI,sBAAsB;CACzB;AACD;IACI,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,gBAAgB;CACnB;AACD;IACI,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;CACnB;AACD;IACI,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,OAAO;IACP,WAAW;IACX,aAAa;IACb,WAAW;CACd;AACD;;IAEI,mBAAmB;IACnB,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,OAAO;IACP,yBAAyB;CAC5B;AACD;IACI,UAAU;IACV,sBAAsB;CACzB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,uBAAuB;CACxB;AACD;IACI,WAAW;IACX,gBAAgB;CACnB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,cAAc;CACjB;AACD;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;CACtB;AACD;EACE,cAAc;EACd,gBAAgB;CACjB;AACD;;EAEE,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,kBAAkB;CACnB","file":"menu.vue","sourcesContent":["\n.au-menu {\n  position: relative;\n  height: 100%;\n  list-style: none;\n}\n.au-menu li {\n    position: relative;\n}\n.au-menu .menu {\n    position: relative;\n    height: 40px;\n    padding: 0 20px 0 0;\n    overflow: hidden;\n    line-height: 40px;\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    cursor: pointer;\n}\n.au-menu .menu-text {\n    display: inline-block;\n}\n.au-menu .menu-icon {\n    position: relative;\n    top: 1px;\n    margin-right: 10px;\n    font-size: 18px;\n}\n.au-menu .menu-fold-icon {\n    position: absolute;\n    right: 12px;\n    text-align: center;\n    line-height: 40px;\n    font-size: 18px;\n}\n.au-menu .active-dec {\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    height: 100%;\n    width: 4px;\n}\n.au-menu .collapse-handle-top,\n  .au-menu .collapse-handle-bottom {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 40px;\n    padding: 0 22px;\n    line-height: 40px;\n    text-align: right;\n    font-size: 18px;\n    cursor: pointer;\n}\n.au-menu .collapse-handle-top {\n    top: 0;\n    border-bottom: 1px solid;\n}\n.au-menu .collapse-handle-bottom {\n    bottom: 0;\n    border-top: 1px solid;\n}\n.au-menu.top-level {\n  padding: 10px 0;\n}\n.au-menu.collapsable-top {\n  padding-top: 40px;\n}\n.au-menu.collapsable-bottom {\n  padding-bottom: 40px;\n}\n.au-menu.collapse {\n  width: 60px !important;\n}\n.au-menu.collapse .menu {\n    padding: 0;\n    cursor: pointer;\n}\n.au-menu.collapse .menu-icon {\n    margin-right: 10px;\n}\n.au-menu.collapse .menu-text {\n    display: none;\n}\n.au-menu.collapse .collapse-handle {\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n}\n.au-menu-pop-content {\n  padding: 12px;\n  font-size: 14px;\n}\n.au-menu-children-triangle,\n.au-menu-has-children-pop {\n  border-width: 1px;\n  border-style: solid;\n}\n.au-menu-popover-content {\n  padding: 10px 0;\n  max-height: 320px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "+tPU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xGkn");
var global = __webpack_require__("7KvD");
var hide = __webpack_require__("hJx8");
var Iterators = __webpack_require__("/bQp");
var TO_STRING_TAG = __webpack_require__("dSzd")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "/PwX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getSize(el) {
  // let computed = window.getComputedStyle(el)
  // let rect = el.getBoundingClientRect()
  // return {
  //   width: el.offsetWidth || rect.width || parseInt(computed.width) || 0,
  //   height: el.offsetHeight || rect.height || parseInt(computed.height) || 0
  // }
  return {
    width: el.offsetWidth || 0,
    height: el.offsetHeight || 0
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (el, isFragment) {
  var temp = getSize(el);
  if (temp.width || temp.height) return temp;

  // clone the el
  var copy = el.cloneNode(true);
  // ste some style to minimize the influence to the document
  // if (isFragment) copy.setAttribute('style', 'visibility:hidden !important; display:block !important;')
  // else copy.setAttribute('style', 'visibility:hidden !important;')
  copy.style.visibility = 'hidden';
  copy.style.display = 'block';
  copy.style.position = 'absolute';
  copy.style.top = '-9999999px';
  copy.style.left = '-9999999px';

  var res = null;
  // insert it to document
  // if (isFragment) document.body.appendChild(copy)
  // else el.parentNode.insertBefore(copy, el)
  document.body.appendChild(copy);
  res = getSize(copy);

  // remove it
  // if (isFragment) document.body.removeChild(copy)
  // else el.parentNode.removeChild(copy)
  document.body.removeChild(copy);
  return res;
});

/***/ }),

/***/ "/bQp":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "00yw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (str) {
  return str === '' || /^\s+$/g.test(str);
});

/***/ }),

/***/ "06OY":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("3Eo+")('meta');
var isObject = __webpack_require__("EqjI");
var has = __webpack_require__("D2L2");
var setDesc = __webpack_require__("evD5").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("S82l")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "2KxR":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "3Eo+":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "3fs2":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "40SK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_menu_vue__ = __webpack_require__("g3KR");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__src_menu_vue__["a"]; });


/***/ }),

/***/ "4WTo":
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__("NWt+");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "4mcu":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "50m2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "\n.au-popover {\n  position: absolute;\n  z-index: 9999;\n  line-height: inherit;\n}\n.au-popover:focus {\n  outline: none;\n}\n.au-popover-triangle {\n  position: absolute;\n  left: 8px;\n  bottom: -4px;\n  z-index: -1;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.au-popover-triangle.top-center {\n  left: 50%;\n  margin-left: -7px;\n}\n.au-popover-triangle.top-right {\n  right: 8px;\n  left: auto;\n}\n.au-popover-triangle.bottom-left {\n  top: -5px;\n  bottom: auto;\n  left: 8px;\n  right: auto;\n}\n.au-popover-triangle.bottom-center {\n  top: -5px;\n  bottom: auto;\n  left: 50%;\n  margin-left: -7px;\n}\n.au-popover-triangle.bottom-right {\n  top: -5px;\n  bottom: auto;\n  right: 10px;\n  left: auto;\n}\n.au-popover-triangle.left-top {\n  left: auto;\n  right: -5px;\n  top: 8px;\n  bottom: auto;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.au-popover-triangle.left-middle {\n  left: auto;\n  right: -5px;\n  top: 50%;\n  margin-top: -7px;\n  bottom: auto;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.au-popover-triangle.left-bottom {\n  left: auto;\n  right: -5px;\n  top: auto;\n  bottom: 8px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.au-popover-triangle.right-bottom {\n  right: auto;\n  left: -5px;\n  top: auto;\n  bottom: 8px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.au-popover-triangle.right-middle {\n  right: auto;\n  left: -5px;\n  top: 50%;\n  margin-top: -7px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.au-popover-triangle.right-top {\n  right: auto;\n  left: -5px;\n  top: 8px;\n  bottom: auto;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.au-popover-plain {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.au-popover-plain-triangle,\n.au-popover-plain {\n  border-width: 1px;\n  border-style: solid;\n}\n", "", {"version":3,"sources":["/Users/awey/Documents/projects/admin-ui/src/admin-ui/src/components/popover/src/popover.vue"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,cAAc;EACd,qBAAqB;CACtB;AACD;EACE,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,iCAAiC;UACzB,yBAAyB;CAClC;AACD;EACE,UAAU;EACV,kBAAkB;CACnB;AACD;EACE,WAAW;EACX,WAAW;CACZ;AACD;EACE,UAAU;EACV,aAAa;EACb,UAAU;EACV,YAAY;CACb;AACD;EACE,UAAU;EACV,aAAa;EACb,UAAU;EACV,kBAAkB;CACnB;AACD;EACE,UAAU;EACV,aAAa;EACb,YAAY;EACZ,WAAW;CACZ;AACD;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,aAAa;EACb,kCAAkC;UAC1B,0BAA0B;CACnC;AACD;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,iBAAiB;EACjB,aAAa;EACb,kCAAkC;UAC1B,0BAA0B;CACnC;AACD;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,kCAAkC;UAC1B,0BAA0B;CACnC;AACD;EACE,YAAY;EACZ,WAAW;EACX,UAAU;EACV,YAAY;EACZ,iCAAiC;UACzB,yBAAyB;CAClC;AACD;EACE,YAAY;EACZ,WAAW;EACX,SAAS;EACT,iBAAiB;EACjB,iCAAiC;UACzB,yBAAyB;CAClC;AACD;EACE,YAAY;EACZ,WAAW;EACX,SAAS;EACT,aAAa;EACb,iCAAiC;UACzB,yBAAyB;CAClC;AACD;EACE,gCAAgC;UACxB,wBAAwB;CACjC;AACD;;EAEE,kBAAkB;EAClB,oBAAoB;CACrB","file":"popover.vue","sourcesContent":["\n.au-popover {\n  position: absolute;\n  z-index: 9999;\n  line-height: inherit;\n}\n.au-popover:focus {\n  outline: none;\n}\n.au-popover-triangle {\n  position: absolute;\n  left: 8px;\n  bottom: -4px;\n  z-index: -1;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.au-popover-triangle.top-center {\n  left: 50%;\n  margin-left: -7px;\n}\n.au-popover-triangle.top-right {\n  right: 8px;\n  left: auto;\n}\n.au-popover-triangle.bottom-left {\n  top: -5px;\n  bottom: auto;\n  left: 8px;\n  right: auto;\n}\n.au-popover-triangle.bottom-center {\n  top: -5px;\n  bottom: auto;\n  left: 50%;\n  margin-left: -7px;\n}\n.au-popover-triangle.bottom-right {\n  top: -5px;\n  bottom: auto;\n  right: 10px;\n  left: auto;\n}\n.au-popover-triangle.left-top {\n  left: auto;\n  right: -5px;\n  top: 8px;\n  bottom: auto;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.au-popover-triangle.left-middle {\n  left: auto;\n  right: -5px;\n  top: 50%;\n  margin-top: -7px;\n  bottom: auto;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.au-popover-triangle.left-bottom {\n  left: auto;\n  right: -5px;\n  top: auto;\n  bottom: 8px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.au-popover-triangle.right-bottom {\n  right: auto;\n  left: -5px;\n  top: auto;\n  bottom: 8px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.au-popover-triangle.right-middle {\n  right: auto;\n  left: -5px;\n  top: 50%;\n  margin-top: -7px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.au-popover-triangle.right-top {\n  right: auto;\n  left: -5px;\n  top: 8px;\n  bottom: auto;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.au-popover-plain {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.au-popover-plain-triangle,\n.au-popover-plain {\n  border-width: 1px;\n  border-style: solid;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "52gC":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "77Pl":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "7Doy":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
var isArray = __webpack_require__("7UMu");
var SPECIES = __webpack_require__("dSzd")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "7KvD":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "7UMu":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("R9M2");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "880/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hJx8");


/***/ }),

/***/ "8n+S":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("50m2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("46ff3d87", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39184694\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39184694\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "94VQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("Yobk");
var descriptor = __webpack_require__("X8DO");
var setToStringTag = __webpack_require__("e6n0");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("hJx8")(IteratorPrototype, __webpack_require__("dSzd")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9Bbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("kM2E");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "9C8M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("evD5").f;
var create = __webpack_require__("Yobk");
var redefineAll = __webpack_require__("xH/j");
var ctx = __webpack_require__("+ZMJ");
var anInstance = __webpack_require__("2KxR");
var forOf = __webpack_require__("NWt+");
var $iterDefine = __webpack_require__("vIB/");
var step = __webpack_require__("EGZi");
var setSpecies = __webpack_require__("bRrM");
var DESCRIPTORS = __webpack_require__("+E39");
var fastKey = __webpack_require__("06OY").fastKey;
var validate = __webpack_require__("LIJb");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "ALrJ":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("+ZMJ");
var IObject = __webpack_require__("MU5D");
var toObject = __webpack_require__("sB3e");
var toLength = __webpack_require__("QRG4");
var asc = __webpack_require__("oeOm");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "BDhv":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("kM2E");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__("m9gC")('Set') });


/***/ }),

/***/ "BcU/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getLeft(el) {
  var actualLeft = el.offsetLeft;
  var current = el.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft;
    current = current.offsetParent;
  }

  return actualLeft;
}

function getTop(el) {
  var actualTop = el.offsetTop;
  var current = el.offsetParent;

  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }

  return actualTop;
}

/* harmony default export */ __webpack_exports__["a"] = (function (el) {
  return {
    left: getLeft(el),
    top: getTop(el)
  };
});

/***/ }),

/***/ "D2L2":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "DP5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popover_vue__ = __webpack_require__("kpb8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39184694_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popover_vue__ = __webpack_require__("uDO3");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("8n+S")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popover_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39184694_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popover_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/admin-ui/src/components/popover/src/popover.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39184694", Component.options)
  } else {
    hotAPI.reload("data-v-39184694", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Dk1r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", {
    staticClass: "au-icon",
    class: _vm.custom || "fa fa-" + _vm.type,
    style: {
      fontSize: _vm.size,
      color: _vm.color
    },
    attrs: { "aria-hidden": "true" },
    on: {
      click: function($event) {
        _vm.$emit("click")
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a8e77880", esExports)
  }
}

/***/ }),

/***/ "EGZi":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "EqjI":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "FZ+f":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "FeBl":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "G6Xs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
if (!window.adminUiNameSpace) window.adminUiNameSpace = {};
/* harmony default export */ __webpack_exports__["a"] = ({
  set: function set(key, value) {
    window.adminUiNameSpace[key] = value;
    return window.adminUiNameSpace[key];
  },
  get: function get(key) {
    return window.adminUiNameSpace[key];
  },
  remove: function remove(key) {
    return delete window.adminUiNameSpace[key];
  }
});

/***/ }),

/***/ "Gm0U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__("dJt8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__("LV4O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scroller__ = __webpack_require__("ovkV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_utils_is_empty_string_js__ = __webpack_require__("00yw");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






function plainObjectEqual(o1, o2) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(o1) === __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(o2);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'au-menu',
  components: { AuIcon: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], AuScroller: __WEBPACK_IMPORTED_MODULE_3__scroller__["a" /* default */], AuPopover: __WEBPACK_IMPORTED_MODULE_2__popover__["a" /* default */] },
  data: function data() {
    return {
      localItems: [],
      localCollapse: this.collapse,
      currentItem: {},
      originWidth: '',
      scrollTop: 0,
      urlMap: {}
    };
  },

  props: {
    items: Array,
    collapse: Boolean,
    collapsable: {
      type: Boolean,
      default: true
    },

    all: Array,
    isTopLevel: {
      type: Boolean,
      default: true
    },
    isPopover: Boolean,
    collapseHandlebarPosition: {
      type: String,
      default: 'top'
    },
    reactivateOnHashchange: {
      type: Boolean,
      default: true
    },
    backgroundColor: String,
    itemFontColor: String,
    itemUnlinkTextColor: String,
    itemBackgroundColor: String,
    itemHoverFontColor: String,
    itemHoverBackgroundColor: String,
    itemActiveFontColor: String,
    itemActiveBackgroundColor: String,
    collapseHandlebarSepratorColor: String
  },
  mounted: function mounted() {
    if (this.isTopLevel) {
      this.localItems = this.setInfo(this.items);
      this.activate(this.currentItem);
      if (!this.$route) window.addEventListener('hashchange', this.handleHashchange);
    } else this.localItems = this.items;
  },
  destroyed: function destroyed() {
    if (this.isTopLevel && !this.$route) window.removeEventListener('hashchange', this.handleHashchange);
  },

  watch: {
    items: {
      deep: true,
      handler: function handler(v, o) {
        if (plainObjectEqual(this.localItems, this.items)) return;
        if (this.isTopLevel) {
          this.localItems = this.setInfo(this.items);
          this.activate(this.currentItem);
        } else {
          this.localItems = this.items;
        }
      }
    },
    collapse: function collapse(v) {
      this.localCollapse = v;
    },
    localCollapse: function localCollapse(v) {
      if (v) {
        this.originWidth = this.$refs.self.style.width;
        this.$refs.self.style.width = '60px';
        this.scrollTop = 0;
      } else {
        this.$refs.self.style.width = this.originWidth;
      }
      this.$emit('toggle', v);
    },
    $route: function $route(v) {
      if (this.isTopLevel) {
        this.handleHashchange();
      }
    }
  },
  methods: {
    select: function select(item, i) {
      this.currentItem = item;
      this.activate();
      this.toggleCollapse(item);
      if (i !== undefined && this.localCollapse && item.children && item.children.length) this.$refs.tipPopover[i].hide();
      if (i !== undefined) this.$emit('select', item);
    },
    deactivate: function deactivate() {
      var _this = this;

      var allItems = this.isTopLevel ? this.localItems : this.all;
      var deactive = function deactive(items) {
        items.forEach(function (item) {
          _this.$set(item, 'active', false);
          _this.$set(item, 'childrenActive', false);
          if (_this.hasChildren(item)) {
            deactive(item.children);
          }
        });
      };
      deactive(allItems);
    },
    activate: function activate() {
      var item = this.currentItem;
      if (item.url && !item.active) {
        this.deactivate();
        this.$set(item, 'active', true);
        var allItems = this.isTopLevel ? this.localItems : this.all;
        var parent = null;
        for (var i = 0; i < item.indexes.length - 1; i++) {
          parent = !parent ? allItems[item.indexes[i]] : parent.children[item.indexes[i]];
          this.$set(parent, 'childrenActive', true);
        }
      }
    },
    reactivate: function reactivate(url) {
      if (url === this.currentItem.url) return;
      if (url && this.urlMap[url]) {
        this.select(this.urlMap[url]);
      }
    },
    handleHashchange: function handleHashchange(e) {
      if (this.reactivateOnHashchange) {
        this.localItems = this.setInfo(this.items);
        this.activate(this.currentItem);
      }
    },
    isItemActive: function isItemActive(item) {
      if (this.localCollapse) {
        return item.active || item.childrenActive;
      } else {
        if (item.collapse) {
          return item.childrenActive || item.active;
        } else {
          return !item.childrenActive && item.active;
        }
      }
    },
    setInfo: function setInfo(items) {
      var _this2 = this;

      var parentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var result = [];
      if (items instanceof Array && items.length) {
        result = items;
        result.forEach(function (item, i) {
          var res = [].concat(parentIndex);
          res.push(i);
          item.indexes = res;
          if (item.url) _this2.urlMap[item.url] = item;
          item.children = _this2.setInfo(item.children, item.indexes);

          if (_this2.isCurrent(item)) {
            _this2.currentItem = item;
          }
        });
      }
      return result;
    },
    toggleCollapse: function toggleCollapse(item) {
      this.$set(item, 'collapse', !item.collapse);
    },
    calcPaddingLeft: function calcPaddingLeft(item) {
      var res = 20;
      if (!this.isTopLevel) {
        if (!item.icon) {
          res += 14;
        }
        // parent icon
        var allItems = this.isTopLevel ? this.localItems : this.all;
        var parentItem = null;
        item.indexes.forEach(function (e, i) {
          parentItem = !parentItem ? allItems[e] : parentItem.children[e];
          if (parentItem.icon) {
            res += 18;
          } else {
            res += 14;
          }
        });
      }
      var isPopover = false;
      var self = this;
      while (true) {
        if (self.isPopover) {
          isPopover = true;
          break;
        } else {
          if (self.$parent) {
            self = self.$parent;
          } else break;
        }
      }
      if (isPopover) {
        res -= 46;
      }
      return res + 'px';
    },
    isCurrent: function isCurrent(item) {
      var url = item.url,
          isRouteName = item.isRouteName;

      if (isRouteName) {
        if (this.$route.matched.length) {
          return this.$route.matched.find(function (r) {
            return r.name === url + '';
          });
        } else {
          var pathName = this.$route ? this.$route.name : '';
          if (!pathName) return false;
          return pathName === item.url + '';
        }
      } else {
        var href = location.href;
        var pos = href.indexOf(url);
        if (pos !== -1) {
          var rest = href.slice(pos + url.length).trim();
          return !rest || /^[/#?]/.test(rest) || Object(__WEBPACK_IMPORTED_MODULE_4__helpers_utils_is_empty_string_js__["a" /* default */])(rest);
        }
        return false;
      }
    },
    toggle: function toggle() {
      this.localCollapse = !this.localCollapse;
    },
    hasChildren: function hasChildren(item) {
      return !!(item.children && item.children.length);
    },
    handlePopSelect: function handlePopSelect(item) {
      // hide children container popover
      if (this.isCurrent(item)) return;
      if (this.$refs.popover) {
        this.$refs.popover.forEach(function (p) {
          return p.hide();
        });
      }
      this.$emit('select', item);
    },
    isColorNum: function isColorNum(color) {
      return (/^#/.test(color)
      );
    }
  }
});

/***/ }),

/***/ "HSee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "self",
      staticClass: "au-menu au-theme-color--base-3",
      class: ((_obj = {
        "collapsable-top":
          _vm.collapsable &&
          _vm.isTopLevel &&
          _vm.collapseHandlebarPosition != "bottom",
        "collapsable-bottom":
          _vm.collapsable &&
          _vm.isTopLevel &&
          _vm.collapseHandlebarPosition == "bottom",
        collapse: _vm.localCollapse
      }),
      (_obj[
        "top-level au-theme-background-color--" +
          (_vm.backgroundColor || "base-12")
      ] =
        _vm.isTopLevel),
      _obj)
    },
    [
      _vm.collapsable &&
      _vm.isTopLevel &&
      _vm.collapseHandlebarPosition != "bottom"
        ? _c(
            "div",
            {
              staticClass: "collapse-handle-top",
              class: ((_obj$1 = {}),
              (_obj$1[
                "au-theme-border-color--" +
                  (_vm.collapseHandlebarSepratorColor || "base-9") +
                  "-important"
              ] = true),
              (_obj$1[
                "au-theme-color--" + (_vm.itemFontColor || "base-3")
              ] = true),
              (_obj$1[
                "au-theme-hover-color--" + (_vm.itemHoverFontColor || "primary")
              ] = true),
              _obj$1),
              on: { click: _vm.toggle }
            },
            [
              _c("au-icon", {
                staticClass: "collapse-handle-icon",
                style: {
                  transform: _vm.localCollapse ? "" : "rotate(180deg)"
                },
                attrs: { type: "angle-double-right", "unify-size": "" }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isTopLevel
        ? _c(
            "au-scroller",
            {
              staticStyle: { height: "100%" },
              attrs: { "scroll-top": _vm.scrollTop },
              on: {
                scroll: function(v) {
                  return (_vm.scrollTop = v)
                }
              }
            },
            [
              _c(
                "ul",
                _vm._l(_vm.localItems, function(item, i) {
                  return _c(
                    "li",
                    { key: i },
                    [
                      _c(
                        "au-popover",
                        {
                          ref: "popover",
                          refInFor: true,
                          attrs: {
                            disabled: !_vm.localCollapse,
                            trigger: _vm.hasChildren(item) ? "click" : "hover",
                            "hide-on-blur": true,
                            placement: _vm.hasChildren(item)
                              ? i < 5 ? "right top" : "right bottom"
                              : "right middle",
                            plain: _vm.hasChildren(item)
                          }
                        },
                        [
                          _c(
                            "au-popover",
                            {
                              ref: "tipPopover",
                              refInFor: true,
                              attrs: {
                                slot: "target",
                                disabled: !_vm.localCollapse,
                                trigger: "hover",
                                placement: "right middle"
                              },
                              slot: "target"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "menu",
                                  class: ((_obj = {}),
                                  (_obj[
                                    "au-theme-background-color--" +
                                      _vm.itemBackgroundColor
                                  ] =
                                    !!_vm.itemBackgroundColor &&
                                    !_vm.isItemActive(item)),
                                  (_obj[
                                    "au-theme-color--" + _vm.itemFontColor
                                  ] =
                                    !!_vm.itemFontColor &&
                                    !_vm.isItemActive(item) &&
                                    item.url),
                                  (_obj[
                                    "au-theme-hover-background-color--" +
                                      (_vm.itemHoverBackgroundColor ||
                                        "primary-bottom")
                                  ] = !_vm.isItemActive(item)),
                                  (_obj[
                                    "au-theme-hover-color--" +
                                      (_vm.itemHoverFontColor || "primary")
                                  ] =
                                    !_vm.isItemActive(item) && item.url),
                                  (_obj[
                                    "au-theme-color--" +
                                      (_vm.itemUnlinkTextColor || "base-7")
                                  ] =
                                    !item.url &&
                                    !_vm.isItemActive(item) &&
                                    !_vm.localCollapse),
                                  (_obj[
                                    "au-theme-color--" +
                                      (_vm.itemActiveFontColor || "primary") +
                                      " au-theme-background-color--" +
                                      (_vm.itemActiveBackgroundColor ||
                                        "primary-bottom")
                                  ] = _vm.isItemActive(item)),
                                  _obj),
                                  style: {
                                    paddingLeft: _vm.calcPaddingLeft(item)
                                  },
                                  attrs: { slot: "target" },
                                  on: {
                                    click: function($event) {
                                      _vm.select(item, i)
                                    }
                                  },
                                  slot: "target"
                                },
                                [
                                  _c("div", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.isItemActive(item),
                                        expression: "isItemActive(item)"
                                      }
                                    ],
                                    staticClass: "active-dec",
                                    class:
                                      "au-theme-background-color--" +
                                      (_vm.itemActiveFontColor || "primary")
                                  }),
                                  _vm._v(" "),
                                  item.icon
                                    ? _c("au-icon", {
                                        staticClass: "menu-icon",
                                        attrs: {
                                          type: item.icon,
                                          "unify-size": ""
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "menu-text",
                                      style: {
                                        marginRight: _vm.hasChildren(item)
                                          ? "16px"
                                          : ""
                                      }
                                    },
                                    [_vm._v(_vm._s(item.text))]
                                  ),
                                  _vm._v(" "),
                                  _vm.hasChildren(item)
                                    ? _c("au-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !_vm.localCollapse,
                                            expression: "!localCollapse"
                                          }
                                        ],
                                        staticClass:
                                          "menu-fold-icon\n                au-theme-color--base-3\n                au-theme-hover-color--primary",
                                        style: {
                                          transform:
                                            "rotate(" +
                                            (item.collapse ? "-90" : "0") +
                                            "deg)",
                                          right: item.collapse ? "12px" : ""
                                        },
                                        attrs: { type: "angle-down" },
                                        nativeOn: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            _vm.toggleCollapse(item)
                                          }
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "au-menu-pop-content",
                                  attrs: { slot: "content" },
                                  slot: "content"
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.text) +
                                      "\n            "
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.hasChildren(item)
                            ? _c(
                                "div",
                                {
                                  staticClass: "au-menu-pop-content",
                                  attrs: { slot: "content" },
                                  slot: "content"
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(item.text) +
                                      "\n          "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.hasChildren(item)
                            ? _c(
                                "au-scroller",
                                {
                                  staticClass:
                                    "au-menu-popover-content au-theme-color--base-3",
                                  attrs: { slot: "content" },
                                  slot: "content"
                                },
                                [
                                  _c("au-menu", {
                                    attrs: {
                                      items: item.children,
                                      collapsable: false,
                                      "is-popover": true,
                                      "popover-ins": _vm.$refs.popover,
                                      "is-top-level": false,
                                      all: _vm.isTopLevel
                                        ? _vm.localItems
                                        : _vm.all,
                                      "background-color": _vm.backgroundColor,
                                      "item-font-color": _vm.itemFontColor,
                                      "item-background-color":
                                        _vm.itemBackgroundColor,
                                      "item-unlink-font-color":
                                        _vm.itemUnlinkTextColor,
                                      "item-hover-font-color":
                                        _vm.itemHoverFontColor,
                                      "item-hover-background-color":
                                        _vm.itemHoverBackgroundColor,
                                      "item-active-font-color":
                                        _vm.itemActiveFontColor,
                                      "item-active-background-color":
                                        _vm.itemActiveBackgroundColor,
                                      "collapse-handlebar-seprator-color":
                                        _vm.collapseHandlebarSepratorColor
                                    },
                                    on: { select: _vm.handlePopSelect }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.hasChildren(item)
                        ? _c("au-menu", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.localCollapse && !item.collapse,
                                expression: "!localCollapse && !item.collapse"
                              }
                            ],
                            attrs: {
                              items: item.children,
                              "is-top-level": false,
                              all: _vm.isTopLevel ? _vm.localItems : _vm.all,
                              "background-color": _vm.backgroundColor,
                              "item-font-color": _vm.itemFontColor,
                              "item-background-color": _vm.itemBackgroundColor,
                              "item-unlink-font-color": _vm.itemUnlinkTextColor,
                              "item-hover-font-color": _vm.itemHoverFontColor,
                              "item-hover-background-color":
                                _vm.itemHoverBackgroundColor,
                              "item-active-font-color": _vm.itemActiveFontColor,
                              "item-active-background-color":
                                _vm.itemActiveBackgroundColor,
                              "collapse-handlebar-seprator-color":
                                _vm.collapseHandlebarSepratorColor
                            },
                            on: { select: _vm.handlePopSelect }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                  var _obj
                })
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isTopLevel
        ? _c(
            "ul",
            _vm._l(_vm.localItems, function(item, i) {
              return _c(
                "li",
                { key: i },
                [
                  _c(
                    "au-popover",
                    {
                      ref: "popover",
                      refInFor: true,
                      attrs: {
                        disabled: !_vm.localCollapse,
                        trigger: _vm.hasChildren(item) ? "click" : "hover",
                        "hide-on-blur": true,
                        placement: _vm.hasChildren(item)
                          ? i < 5 ? "right top" : "right bottom"
                          : "right middle",
                        plain: _vm.hasChildren(item)
                      }
                    },
                    [
                      _c(
                        "au-popover",
                        {
                          ref: "tipPopover",
                          refInFor: true,
                          attrs: {
                            slot: "target",
                            disabled: !_vm.localCollapse,
                            trigger: "hover",
                            placement: "right middle"
                          },
                          slot: "target"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "menu",
                              class: ((_obj = {}),
                              (_obj[
                                "au-theme-background-color--" +
                                  _vm.itemBackgroundColor
                              ] =
                                !!_vm.itemBackgroundColor &&
                                !_vm.isItemActive(item)),
                              (_obj["au-theme-color--" + _vm.itemFontColor] =
                                !!_vm.itemFontColor &&
                                !_vm.isItemActive(item) &&
                                item.url),
                              (_obj[
                                "au-theme-hover-background-color--" +
                                  (_vm.itemHoverBackgroundColor ||
                                    "primary-bottom")
                              ] = !_vm.isItemActive(item)),
                              (_obj[
                                "au-theme-hover-color--" +
                                  (_vm.itemHoverFontColor || "primary")
                              ] =
                                !_vm.isItemActive(item) && item.url),
                              (_obj[
                                "au-theme-color--" +
                                  (_vm.itemUnlinkTextColor || "base-7")
                              ] =
                                !item.url &&
                                !_vm.isItemActive(item) &&
                                !_vm.localCollapse),
                              (_obj[
                                "au-theme-color--" +
                                  (_vm.itemActiveFontColor || "primary") +
                                  " au-theme-background-color--" +
                                  (_vm.itemActiveBackgroundColor ||
                                    "primary-bottom")
                              ] = _vm.isItemActive(item)),
                              _obj),
                              style: {
                                paddingLeft: _vm.calcPaddingLeft(item)
                              },
                              attrs: { slot: "target" },
                              on: {
                                click: function($event) {
                                  _vm.select(item, i)
                                }
                              },
                              slot: "target"
                            },
                            [
                              _c("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.isItemActive(item),
                                    expression: "isItemActive(item)"
                                  }
                                ],
                                staticClass: "active-dec",
                                class:
                                  "au-theme-background-color--" +
                                  (_vm.itemActiveFontColor || "primary")
                              }),
                              _vm._v(" "),
                              item.icon
                                ? _c("au-icon", {
                                    staticClass: "menu-icon",
                                    attrs: { type: item.icon, "unify-size": "" }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "menu-text",
                                  style: {
                                    marginRight: _vm.hasChildren(item)
                                      ? "16px"
                                      : ""
                                  }
                                },
                                [_vm._v(_vm._s(item.text))]
                              ),
                              _vm._v(" "),
                              _vm.hasChildren(item)
                                ? _c("au-icon", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !_vm.localCollapse,
                                        expression: "!localCollapse"
                                      }
                                    ],
                                    staticClass:
                                      "menu-fold-icon\n              au-theme-color--base-3\n              au-theme-hover-color--primary",
                                    style: {
                                      transform:
                                        "rotate(" +
                                        (item.collapse ? "-90" : "0") +
                                        "deg)",
                                      right: item.collapse ? "12px" : ""
                                    },
                                    attrs: { type: "angle-down" },
                                    nativeOn: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        _vm.toggleCollapse(item)
                                      }
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "au-menu-pop-content",
                              attrs: { slot: "content" },
                              slot: "content"
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item.text) +
                                  "\n          "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      !_vm.hasChildren(item)
                        ? _c(
                            "div",
                            {
                              staticClass: "au-menu-pop-content",
                              attrs: { slot: "content" },
                              slot: "content"
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(item.text) +
                                  "\n        "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.hasChildren(item)
                        ? _c(
                            "au-scroller",
                            {
                              staticClass:
                                "au-menu-popover-content au-theme-color--base-3",
                              attrs: { slot: "content" },
                              slot: "content"
                            },
                            [
                              _c("au-menu", {
                                attrs: {
                                  items: item.children,
                                  collapsable: false,
                                  "is-popover": true,
                                  "popover-ins": _vm.$refs.popover,
                                  "is-top-level": false,
                                  all: _vm.isTopLevel
                                    ? _vm.localItems
                                    : _vm.all,
                                  "background-color": _vm.backgroundColor,
                                  "item-font-color": _vm.itemFontColor,
                                  "item-background-color":
                                    _vm.itemBackgroundColor,
                                  "item-unlink-font-color":
                                    _vm.itemUnlinkTextColor,
                                  "item-hover-font-color":
                                    _vm.itemHoverFontColor,
                                  "item-hover-background-color":
                                    _vm.itemHoverBackgroundColor,
                                  "item-active-font-color":
                                    _vm.itemActiveFontColor,
                                  "item-active-background-color":
                                    _vm.itemActiveBackgroundColor,
                                  "collapse-handlebar-seprator-color":
                                    _vm.collapseHandlebarSepratorColor
                                },
                                on: { select: _vm.handlePopSelect }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.hasChildren(item)
                    ? _c("au-menu", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.localCollapse && !item.collapse,
                            expression: "!localCollapse && !item.collapse"
                          }
                        ],
                        attrs: {
                          items: item.children,
                          "is-top-level": false,
                          all: _vm.isTopLevel ? _vm.localItems : _vm.all,
                          "background-color": _vm.backgroundColor,
                          "item-font-color": _vm.itemFontColor,
                          "item-background-color": _vm.itemBackgroundColor,
                          "item-unlink-font-color": _vm.itemUnlinkTextColor,
                          "item-hover-font-color": _vm.itemHoverFontColor,
                          "item-hover-background-color":
                            _vm.itemHoverBackgroundColor,
                          "item-active-font-color": _vm.itemActiveFontColor,
                          "item-active-background-color":
                            _vm.itemActiveBackgroundColor,
                          "collapse-handlebar-seprator-color":
                            _vm.collapseHandlebarSepratorColor
                        },
                        on: { select: _vm.handlePopSelect }
                      })
                    : _vm._e()
                ],
                1
              )
              var _obj
            })
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.collapsable &&
      _vm.isTopLevel &&
      _vm.collapseHandlebarPosition === "bottom"
        ? _c(
            "div",
            {
              staticClass: "collapse-handle-bottom",
              class: ((_obj$2 = {}),
              (_obj$2[
                "au-theme-border-color--" +
                  (_vm.collapseHandlebarSepratorColor || "base-10") +
                  "-important"
              ] = true),
              (_obj$2[
                "au-theme-color--" + (_vm.itemFontColor || "base-3")
              ] = true),
              (_obj$2[
                "au-theme-hover-color--" + (_vm.itemHoverFontColor || "primary")
              ] = true),
              _obj$2),
              on: { click: _vm.toggle }
            },
            [
              _c("au-icon", {
                staticClass: "collapse-handle-icon",
                style: {
                  transform: _vm.localCollapse ? "" : "rotate(180deg)"
                },
                attrs: { type: "angle-double-right", "unify-size": "" }
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
  var _obj
  var _obj$1
  var _obj$2
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e6e8f300", esExports)
  }
}

/***/ }),

/***/ "HpRW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("kM2E");
var aFunction = __webpack_require__("lOnJ");
var ctx = __webpack_require__("+ZMJ");
var forOf = __webpack_require__("NWt+");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "I+QW":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "\n.au-icon {\n  text-align: center;\n}\n", "", {"version":3,"sources":["/Users/awey/Documents/projects/admin-ui/src/admin-ui/src/components/icon/src/icon.vue"],"names":[],"mappings":";AACA;EACE,mBAAmB;CACpB","file":"icon.vue","sourcesContent":["\n.au-icon {\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "Ibhu":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("D2L2");
var toIObject = __webpack_require__("TcQ7");
var arrayIndexOf = __webpack_require__("vFc/")(false);
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "LIJb":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "LV4O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_popover_vue__ = __webpack_require__("DP5d");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_popover_vue__["a"]; });


/***/ }),

/***/ "M6a0":
/***/ (function(module, exports) {



/***/ }),

/***/ "MU5D":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("R9M2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "Mhyx":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("/bQp");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "MmMw":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("EqjI");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "NWt+":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("+ZMJ");
var call = __webpack_require__("msXi");
var isArrayIter = __webpack_require__("Mhyx");
var anObject = __webpack_require__("77Pl");
var toLength = __webpack_require__("QRG4");
var getIterFn = __webpack_require__("3fs2");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "NpIQ":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "O4g8":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "ON07":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
var document = __webpack_require__("7KvD").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "PuBJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "\n.au-scroller {\n  overflow-y: hidden;\n}\n.au-scroller-content {\n  position: relative;\n  width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-transition: top .3s ease-out;\n  transition: top .3s ease-out;\n}\n.au-scroller-content:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.au-scroller-bar-container,\n.au-scroller-bar,\n.au-scroller-bar-core {\n  position: absolute;\n  top: 0;\n}\n.au-scroller-bar-container {\n  top: 10px;\n  right: 2px;\n  width: 12px;\n  height: 100%;\n}\n.au-scroller-bar,\n.au-scroller-bar-core {\n  right: 1px;\n  width: 3px;\n  height: 100%;\n  border-radius: 6px;\n  opacity: .2;\n  -webkit-transition-property: top, width, opacity;\n  transition-property: top, width, opacity;\n  -webkit-transition-duration: .3s;\n          transition-duration: .3s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  cursor: pointer;\n}\n.au-scroller-bar-core {\n  opacity: .4;\n}\n.au-no-select * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n", "", {"version":3,"sources":["/Users/awey/Documents/projects/admin-ui/src/admin-ui/src/components/scroller/src/scroller.vue"],"names":[],"mappings":";AACA;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,OAAO;EACP,QAAQ;EACR,qCAAqC;EACrC,6BAA6B;CAC9B;AACD;EACE,YAAY;EACZ,eAAe;EACf,YAAY;CACb;AACD;;;EAGE,mBAAmB;EACnB,OAAO;CACR;AACD;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;CACd;AACD;;EAEE,WAAW;EACX,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,iDAAiD;EACjD,yCAAyC;EACzC,iCAAiC;UACzB,yBAAyB;EACjC,6CAA6C;UACrC,qCAAqC;EAC7C,gBAAgB;CACjB;AACD;EACE,YAAY;CACb;AACD;EACE,0BAA0B;KACvB,uBAAuB;MACtB,sBAAsB;UAClB,kBAAkB;CAC3B","file":"scroller.vue","sourcesContent":["\n.au-scroller {\n  overflow-y: hidden;\n}\n.au-scroller-content {\n  position: relative;\n  width: 100%;\n  min-height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-transition: top .3s ease-out;\n  transition: top .3s ease-out;\n}\n.au-scroller-content:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.au-scroller-bar-container,\n.au-scroller-bar,\n.au-scroller-bar-core {\n  position: absolute;\n  top: 0;\n}\n.au-scroller-bar-container {\n  top: 10px;\n  right: 2px;\n  width: 12px;\n  height: 100%;\n}\n.au-scroller-bar,\n.au-scroller-bar-core {\n  right: 1px;\n  width: 3px;\n  height: 100%;\n  border-radius: 6px;\n  opacity: .2;\n  -webkit-transition-property: top, width, opacity;\n  transition-property: top, width, opacity;\n  -webkit-transition-duration: .3s;\n          transition-duration: .3s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  cursor: pointer;\n}\n.au-scroller-bar-core {\n  opacity: .4;\n}\n.au-no-select * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "PzxK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("D2L2");
var toObject = __webpack_require__("sB3e");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "QRG4":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("UuGF");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "R9M2":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "RB7c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__("tzU+");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a8e77880_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__("Dk1r");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("u8Bm")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a8e77880_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/admin-ui/src/components/icon/src/icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8e77880", Component.options)
  } else {
    hotAPI.reload("data-v-a8e77880", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "RPLV":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7KvD").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "RY/4":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("R9M2");
var TAG = __webpack_require__("dSzd")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "S5ih":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
/* harmony default export */ __webpack_exports__["a"] = (function (action, element, handler) {
  if (element && element[action + 'EventListener']) {
    element[action + 'EventListener'](isFirefox ? 'DOMMouseScroll' : 'mousewheel', handler, { passive: true });
  }
});

/***/ }),

/***/ "S82l":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "SfB7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("+E39") && !__webpack_require__("S82l")(function () {
  return Object.defineProperty(__webpack_require__("ON07")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "TcQ7":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("MU5D");
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "TmV0":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fZOM");
module.exports = __webpack_require__("FeBl").Object.values;


/***/ }),

/***/ "UuGF":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "VU/8":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "X8DO":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("77Pl");
var dPs = __webpack_require__("qio6");
var enumBugKeys = __webpack_require__("xnc9");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("ON07")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("RPLV").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "ax3d":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("e8AB")('keys');
var uid = __webpack_require__("3Eo+");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "bRrM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var dP = __webpack_require__("evD5");
var DESCRIPTORS = __webpack_require__("+E39");
var SPECIES = __webpack_require__("dSzd")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "dJt8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_icon_vue__ = __webpack_require__("RB7c");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_icon_vue__["a"]; });


/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("e8AB")('wks');
var uid = __webpack_require__("3Eo+");
var Symbol = __webpack_require__("7KvD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "e6n0":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("evD5").f;
var has = __webpack_require__("D2L2");
var TAG = __webpack_require__("dSzd")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "e8AB":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "evD5":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var toPrimitive = __webpack_require__("MmMw");
var dP = Object.defineProperty;

exports.f = __webpack_require__("+E39") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "fZOM":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("kM2E");
var $values = __webpack_require__("mbce")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "fkB2":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "g3KR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__("Gm0U");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e6e8f300_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__("HSee");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("+SQz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e6e8f300_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/admin-ui/src/components/menu/src/menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e6e8f300", Component.options)
  } else {
    hotAPI.reload("data-v-e6e8f300", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "gRE1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("TmV0"), __esModule: true };

/***/ }),

/***/ "h65t":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var defined = __webpack_require__("52gC");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "hJx8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");
module.exports = __webpack_require__("+E39") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "ioQ5":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__("HpRW")('Set');


/***/ }),

/***/ "jlSn":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("PuBJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("03299281", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e4daee0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroller.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e4daee0\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroller.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "kM2E":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var ctx = __webpack_require__("+ZMJ");
var hide = __webpack_require__("hJx8");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "kpb8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__ = __webpack_require__("lHA8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__ = __webpack_require__("/PwX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom_get_element_page_pos__ = __webpack_require__("BcU/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_dom_is_ancestor__ = __webpack_require__("lQrO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_utils_namespace__ = __webpack_require__("G6Xs");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






function getRealZIndex(el) {
  if (!el || el === document) return 0;
  var zIndex = 0;
  zIndex = window.getComputedStyle(el).zIndex;
  zIndex = zIndex === 'auto' || !zIndex ? 0 : parseInt(zIndex);
  zIndex = zIndex + (el.parentNode ? getRealZIndex(el.parentNode) : 0);
  return zIndex;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'au-popover',
  props: {
    trigger: String,
    triangle: {
      type: Boolean,
      default: true
    },
    plain: Boolean,
    placement: {
      type: String,
      default: 'top center'
    },
    disabled: Boolean,
    x: [String, Number],
    y: [String, Number],
    xFix: {
      type: [String, Number],
      default: '0px'
    },
    yFix: {
      type: [String, Number],
      default: '0px'
    },
    hideOnBlur: Boolean,
    beforeShow: {
      type: Function,
      default: function _default() {
        return function () {
          return true;
        };
      }
    }
    // zIndex: [String, Number]
  },
  data: function data() {
    return {
      visible: false,
      originPopSize: {},
      localPlacement: '',
      rootIndex: 0
    };
  },
  mounted: function mounted() {
    this.reconstruct();
    this.addEvents();
    // this.calPos()
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('click', this.handleWindowClick, true);
    // let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    // if (MutationObserver) {
    //   this.observer = new MutationObserver((mutations) => {
    //     console.log(mutations)
    //     this.calPos()
    //   })
    //   let config = { attributes: true, childList: true, subtree: true }
    //   this.observer.observe(this.$refs.pop, config)
    // }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('click', this.handleWindowClick, true);
    this.hide();
    // if (this.observe) this.observer.disconnect()
  },

  watch: {
    trigger: function trigger() {
      this.removeEvents();
      this.addEvents();
    },
    visible: function visible(v) {
      if (v) this.$emit('show');else this.$emit('hide');
    },
    disabled: function disabled(v) {
      // this.reconstruct()
    },
    placement: function placement(v) {
      this.calPos();
    }
  },
  methods: {
    getTarget: function getTarget() {
      var target = this.$slots.target[0].elm;
      var id = target.getAttribute('data-au-popover');
      if (id) {
        // nested popover
        target = __WEBPACK_IMPORTED_MODULE_4__helpers_utils_namespace__["a" /* default */].get('au-popover-' + id).$slots.target[0].elm;
      }
      return target;
    },
    reconstruct: function reconstruct() {
      // if (this.disabled) return
      var target = this.getTarget();
      var pop = this.$refs.pop;
      var id = 'au-popover-' + this._uid;
      var zIndex = getRealZIndex(pop.parentNode) || 9999; // sometimes it will use in a modal or other elements witch has z-index style
      // console.log(zIndex)
      // register popover on root
      pop.setAttribute('data-au-popover', id);
      __WEBPACK_IMPORTED_MODULE_4__helpers_utils_namespace__["a" /* default */].set('au-popover-' + id, this);

      if (target.parentNode === pop) {
        pop.parentNode.insertBefore(target, pop);
        pop.parentNode.removeChild(pop);
        pop.style.zIndex = zIndex;
      }
      // if (pop.parentNode !== document.body) document.body.appendChild(pop)
    },
    addEvents: function addEvents() {
      var target = this.getTarget();
      if (this.trigger === 'click') {
        target.addEventListener('click', this.handleClick);
      } else if (this.trigger === 'hover') {
        target.addEventListener('mouseenter', this.handleMouseover);
        target.addEventListener('mouseleave', this.handleMouseout);
      }
    },
    removeEvents: function removeEvents() {
      var target = this.getTarget();
      target.removeEventListener('click', this.handleClick);
      target.removeEventListener('mouseenter', this.handleMouseover);
      target.removeEventListener('mouseleave', this.handleMouseout);
    },
    handleClick: function handleClick() {
      if (this.trigger === 'click') {
        this.visible ? this.hide() : this.show();
      }
    },

    // handleBlur (e) { // pop blur
    //   if (this.trigger === 'click' && this.visible && this.hideOnBlur) this.hide()
    // },
    handleMouseover: function handleMouseover() {
      this.show();
    },
    handleMouseout: function handleMouseout() {
      if (this.trigger !== 'click' && this.visible) this.hide();
    },
    show: function show() {
      if (this.disabled) return;
      var res = this.beforeShow();
      if (res !== undefined && !res) return;
      this.calPos();
      // this.originPopSize = {
      //   width: window.getComputedStyle(this.$refs.pop).width,
      //   height: window.getComputedStyle(this.$refs.pop).height
      // }
      if (!this.$refs.pop.parentNode) document.body.appendChild(this.$refs.pop);
      if (this.trigger && this.hideOnBlur) this.$refs.pop.focus();
      this.visible = true;
      if (!this.$root._auPopovers) this.$root._auPopovers = {};
      this.$root._auPopovers[this._uid] = this;
      this.rootIndex = this.$root._auPopovers.length - 1;
      // setInterval(this.calPos.bind(this), 500)
    },
    hide: function hide() {
      try {
        this.$refs.pop.parentNode.removeChild(this.$refs.pop);
      } catch (e) {}
      this.visible = false;
      if (this.$root._auPopovers && this.$root._auPopovers[this._uid]) delete this.$root._auPopovers[this._uid];
      // clearInterval(this.calPos.bind(this))
    },
    calPos: function calPos() {
      var pop = this.$refs.pop;
      var target = this.getTarget();
      var content = this.$refs.content;
      if (!target) return;

      // let popElmSize = getElementSize(this.$slots.content[0].elm)
      // this.$refs.pop.style.width = popElmSize.width + 'px'
      // this.$refs.pop.style.height = popElmSize.height + 'px'

      var keys = this.placement.split(/\s+/);
      var xes = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(['top', 'bottom', 'left', 'right']);
      var ys = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(['left', 'center', 'right', 'top', 'middle', 'bottom']);
      if (keys.length !== 2 || !xes.has(keys[0]) || !ys.has(keys[1])) {
        keys = ['top', 'center'];
      }
      this.localPlacement = keys.join(' ');

      if (this.x && this.y) {
        pop.style.left = this.x;
        pop.style.top = this.y;
        return;
      }

      var targetSize = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(target);
      var targetPos = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_get_element_page_pos__["a" /* default */])(target);
      var popSize = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(content);
      var windowSize = {
        width: document.body.clientWidth,
        height: document.body.clientHeight
        // handle screen overflow
      };var targetRect = target.getBoundingClientRect();

      if (keys[0] === 'top') {
        if (targetRect.top - 10 < popSize.height) keys[0] = 'bottom';
      } else if (keys[0] === 'bottom') {
        if (windowSize.height - targetRect.bottom - 10 < popSize.height) keys[0] = 'top';
      } else if (keys[0] === 'left') {
        if (targetRect.left - 10 < popSize.width) keys[0] = 'rigth';
      } else if (keys[0] === 'right') {
        if (windowSize.width - targetRect.right - 10 < popSize.width) keys[0] = 'left';
      }

      if (keys[0] === 'left' || keys[0] === 'right') {
        if (keys[1] === 'bottom') {
          if (targetRect.top - 10 < popSize.height - targetSize.height) keys[1] = 'top';
        } else if (keys[1] === 'top') {
          if (windowSize.height - targetRect.bottom - 10 < popSize.height - targetSize.height) keys[1] = 'bottom';
        } else if (keys[1] === 'middle') {
          var bottomSpace = windowSize.height - targetRect.bottom - 10;
          var topSpace = targetRect.top - 10;
          var halfSize = popSize.height / 2 - targetSize.height;
          var min = Math.min(bottomSpace, topSpace, halfSize);
          var max = Math.max(bottomSpace, topSpace, halfSize);
          if (min !== halfSize && max !== halfSize) {
            if (min === topSpace) keys[1] = 'top';else keys[1] = 'bottom';
          }
        }
      }

      if (keys[0] === 'top' || keys[0] === 'bottom') {
        if (keys[1] === 'right') {
          if (targetRect.left - 10 < popSize.width / (keys[1] === 'center' ? 2 : 1) - targetSize.width) keys[1] = 'left';
        } else if (keys[1] === 'left') {
          if (windowSize.width - targetRect.right - 10 < popSize.width - targetSize.width) keys[1] = 'right';
        } else if (keys[1] === 'center') {
          var leftSpace = targetRect.left - 10;
          var rightSpace = windowSize.width - targetRect.right - 10;
          var _halfSize = popSize.width / 2 - targetSize.width;
          var _min = Math.min(leftSpace, rightSpace, _halfSize);
          var _max = Math.max(leftSpace, rightSpace, _halfSize);
          if (_min !== _halfSize && _max !== _halfSize) {
            if (_min === leftSpace) keys[1] = 'left';else keys[1] = 'right';
          }
        }
      }

      this.localPlacement = keys.join(' ');

      // fix the size bug witch caused by the wordwrap
      // this.$refs.pop.style.width = popSize.width + 'px'
      // this.$refs.pop.style.height = popSize.height + 'px'
      var offset = 10;
      var vertical = {
        x: {
          left: targetPos.left + parseInt(this.xFix),
          center: targetPos.left + targetSize.width / 2 - popSize.width / 2 + parseInt(this.xFix),
          right: targetPos.left + targetSize.width - popSize.width + parseInt(this.xFix)
        },
        y: {
          top: targetPos.top - popSize.height - offset + parseInt(this.yFix),
          bottom: targetPos.top + targetSize.height + offset + parseInt(this.yFix) // do not kown why should add 10 but it works
        }
      };
      var horizontal = {
        x: {
          left: targetPos.left - offset - popSize.width + parseInt(this.xFix),
          right: targetPos.left + targetSize.width + offset + parseInt(this.xFix)
        },
        y: {
          top: targetPos.top + parseInt(this.yFix),
          middle: targetPos.top + targetSize.height / 2 - popSize.height / 2 + parseInt(this.yFix),
          bottom: targetPos.top + targetSize.height - popSize.height + 11 + parseInt(this.yFix) // do not kown why should add 11 but it works
        }
      };
      var res = {};
      if (keys[0] === 'top' || keys[0] === 'bottom') {
        res = {
          x: vertical.x[keys[1]],
          y: vertical.y[keys[0]]
        };
      } else if (keys[0] === 'left' || keys[0] === 'right') {
        res = {
          x: horizontal.x[keys[0]],
          y: horizontal.y[keys[1]]
        };
      }
      pop.style.left = this.x || res.x + 'px';
      pop.style.top = this.y || res.y + 'px';
    },
    handleWindowClick: function handleWindowClick(e) {
      if (this.trigger === 'click' && this.visible && this.hideOnBlur && !Object(__WEBPACK_IMPORTED_MODULE_3__helpers_dom_is_ancestor__["a" /* default */])(e.target, this.$el) && !Object(__WEBPACK_IMPORTED_MODULE_3__helpers_dom_is_ancestor__["a" /* default */])(e.target, this.getTarget())) this.hide();
    },
    handleWindowResize: function handleWindowResize() {
      if (this.visible) this.calPos();
    }
  }
});

/***/ }),

/***/ "lHA8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("pPW7"), __esModule: true };

/***/ }),

/***/ "lOnJ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "lQrO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isAncestor;
function isAncestor(el, ancestor) {
  var parent = el;
  if (parent === ancestor) return true;else if (el.parentNode) return isAncestor(el.parentNode, ancestor);else return false;
}

/***/ }),

/***/ "lktj":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("Ibhu");
var enumBugKeys = __webpack_require__("xnc9");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "lrsZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_scroller_vue__ = __webpack_require__("oddz");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e4daee0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_scroller_vue__ = __webpack_require__("ng1M");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("jlSn")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_scroller_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e4daee0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_scroller_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/admin-ui/src/components/scroller/src/scroller.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e4daee0", Component.options)
  } else {
    hotAPI.reload("data-v-5e4daee0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "m9gC":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__("RY/4");
var from = __webpack_require__("4WTo");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "mbce":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("lktj");
var toIObject = __webpack_require__("TcQ7");
var isEnum = __webpack_require__("NpIQ").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "msXi":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("77Pl");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "mvHQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("qkKv"), __esModule: true };

/***/ }),

/***/ "ng1M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "monitor",
      staticClass: "au-scroller",
      on: {
        mouseenter: _vm.handleMouseenter,
        mouseleave: _vm.handleMouseleave,
        mousemove: _vm.handleScrollerMousemove
      }
    },
    [
      _c(
        "div",
        {
          ref: "content",
          staticClass: "au-scroller-content",
          class: { "au-no-select": _vm.onDrag },
          style: { top: _vm.contentTop + "px" }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: (_vm.mouseenter && _vm.needScroll) || _vm.onDrag,
              expression: "(mouseenter && needScroll) || onDrag"
            }
          ],
          ref: "barContainer",
          staticClass: "au-scroller-bar-container",
          on: {
            mouseenter: _vm.handleBarMouseenter,
            mouseleave: _vm.handleBarMouseleave
          }
        },
        [
          _c("div", {
            ref: "bar",
            staticClass: "au-scroller-bar au-theme-background-color--base-0",
            on: { click: _vm.handleBarClick }
          }),
          _vm._v(" "),
          _c("div", {
            ref: "core",
            staticClass:
              "au-scroller-bar-core au-theme-background-color--base-0",
            style: {
              top: _vm.scrollCoreTop + "px",
              height: _vm.coreHeight + "px"
            },
            on: {
              mousedown: _vm.handleCoreMousedown,
              mouseup: _vm.handleCoreMouseUp
            }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e4daee0", esExports)
  }
}

/***/ }),

/***/ "oNmr":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__("9Bbf")('Set');


/***/ }),

/***/ "oddz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_values__ = __webpack_require__("gRE1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__ = __webpack_require__("/PwX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom_mousewheel_js__ = __webpack_require__("S5ih");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'au-scroller',
  mounted: function mounted() {
    var _this = this;

    this.setPositionCss();
    // this.calcCoreHeight(
    //   getElementSize(this.$refs.monitor).height,
    //   getElementSize(this.$refs.content).height
    // )
    var firstScroll = true;
    Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom_mousewheel_js__["a" /* default */])('add', this.$refs.monitor, function (e) {
      if (firstScroll) {
        _this.handleMouseenter();
        firstScroll = false;
      }
      // if (!this.needScroll) return
      // let direction = e.deltaY || e.detail // chrome,edge / firefox
      var direction = e.deltaY ? e.deltaY : e.detail * 10; // chrome,edge / firefox
      if (!direction) return;
      // this.handleScroll((direction < 0 ? -direction : direction) / direction)
      var prev = _this.contentTop;
      _this.handleScroll(direction);
      var next = _this.contentTop;
      if (_this.stopPropagation || prev !== next) e.stopPropagation();
    });
    window.addEventListener('resize', this.handlerResize);
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handlerResize);
  },

  props: {
    scrollTop: {
      type: [Number, String],
      default: 0
    },
    stopPropagation: Boolean,
    hidePopovers: Boolean
  },
  data: function data() {
    return {
      step: 1,
      contentTop: this.scrollTop,
      scrollCoreTop: 0,
      coreHeight: 0,
      diff: 0,
      onDrag: false,
      onOver: false,
      needScroll: false,
      clock: null,
      mouseenter: false
    };
  },

  watch: {
    scrollTop: function scrollTop(v) {
      if (this.contentTop !== v * -1) this.setContentTop(-v);
    },
    contentTop: function contentTop(v) {
      if (!this.$root._auPopovers) this.$root._auPopovers = {};
      if (this.hidePopovers) __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_values___default()(this.$root._auPopovers).forEach(function (pop) {
        return pop.hide();
      });
      this.$emit('scroll', v * -1 || 0);
    },
    needScroll: function needScroll(v) {
      if (!v) this.contentTop = 0;
    }
  },
  methods: {
    setPositionCss: function setPositionCss() {
      var pos = window.getComputedStyle(this.$refs.monitor).position;
      if (!pos || pos === 'static' || pos === 'inherit') {
        this.$refs.monitor.style.position = 'relative';
      }
    },
    handleScroll: function handleScroll(direction) {
      this.setContentTop(this.contentTop - direction * this.step);
    },
    detectIfNeedScroll: function detectIfNeedScroll() {
      var monitorHeight = this.getMonitorHeight();
      var contentHeight = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.content).height;
      this.needScroll = monitorHeight < contentHeight;
      return {
        needScroll: this.needScroll,
        monitorHeight: monitorHeight,
        contentHeight: contentHeight
      };
    },
    setContentTop: function setContentTop(v) {
      var _detectIfNeedScroll = this.detectIfNeedScroll(),
          needScroll = _detectIfNeedScroll.needScroll,
          monitorHeight = _detectIfNeedScroll.monitorHeight,
          contentHeight = _detectIfNeedScroll.contentHeight;

      if (!needScroll) return;
      var contentTopMin = monitorHeight - contentHeight;
      var contentTop = parseInt(v);

      contentTop = contentTop >= 0 ? 0 : contentTop <= contentTopMin ? contentTopMin : contentTop;
      this.contentTop = contentTop;

      // sync scrollbar
      var scrollTopMax = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.bar).height - Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.core).height;
      var scrollCoreTop = contentTop * monitorHeight / contentHeight * -1;
      this.scrollCoreTop = scrollCoreTop <= 0 ? 0 : scrollCoreTop >= scrollTopMax ? scrollTopMax : scrollCoreTop;
      // fix
      if (this.contentTop <= contentTopMin) this.scrollCoreTop = scrollTopMax;
    },
    getMonitorHeight: function getMonitorHeight() {
      var _window$getComputedSt = window.getComputedStyle(this.$refs.monitor),
          paddingTop = _window$getComputedSt.paddingTop,
          paddingBottom = _window$getComputedSt.paddingBottom,
          borderTopWidth = _window$getComputedSt.borderTopWidth,
          borderBottomWidth = _window$getComputedSt.borderBottomWidth;

      return Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.monitor).height - parseInt(paddingTop) - parseInt(paddingBottom) - parseInt(borderTopWidth) - parseInt(borderBottomWidth);
    },
    calcCoreHeight: function calcCoreHeight(monitor, content) {
      if (content <= monitor) {
        this.needScroll = false;
        this.contentTop = 0;
      } else {
        this.needScroll = true;
        var barHeight = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.barContainer).height;
        this.coreHeight = monitor * barHeight / content;
      }
    },
    setBarHeight: function setBarHeight(monitor) {
      this.$refs.barContainer.style.height = monitor - 20 + 'px';
    },
    handleMouseenter: function handleMouseenter() {
      this.mouseenter = true;
      this.$refs.bar.style.opacity = '.2';
      this.$refs.core.style.opacity = '.4';
      this.$refs.bar.style.borderRadius = '3px';
      this.$refs.core.style.borderRadius = '3px';
      var monitorHeight = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.monitor).height;
      this.setBarHeight(monitorHeight);
      this.calcCoreHeight(monitorHeight, Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.content).height, Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.bar).height);
    },
    handleMouseleave: function handleMouseleave() {
      this.mouseenter = false;
      if (!this.onDrag) {
        this.$refs.bar.style.opacity = '0';
        this.$refs.core.style.opacity = '0';
      }
    },
    handleScrollerMousemove: function handleScrollerMousemove() {
      // this.needScroll = getElementSize(this.$refs.monitor).height < getElementSize(this.$refs.content).height
      // let vm = this
      // console.log('move')
      // if (vm.clock) return
      // else {
      //   vm.clock = setTimeout(function () {
      //     vm.needScroll = getElementSize(vm.$refs.monitor).height < getElementSize(vm.$refs.content).height
      //     clearTimeout(vm.clock)
      //     vm.clock = null
      //   }, 500)
      // }
    },
    handleBarMouseenter: function handleBarMouseenter() {
      this.onOver = true;
      this.$refs.bar.style.width = '8px';
      this.$refs.core.style.width = '8px';
      this.$refs.bar.style.borderRadius = '6px';
      this.$refs.core.style.borderRadius = '6px';
    },
    handleBarMouseleave: function handleBarMouseleave() {
      this.onOver = false;
      if (!this.onDrag) {
        this.$refs.bar.style.width = '3px';
        this.$refs.core.style.width = '3px';
        this.$refs.bar.style.borderRadius = '3px';
        this.$refs.core.style.borderRadius = '3px';
      }
    },
    handleCoreMousedown: function handleCoreMousedown(e) {
      e.preventDefault();
      e.stopPropagation();
      this.onDrag = true;
      this.diff = e.pageY - this.$refs.core.getBoundingClientRect().top;
      window.addEventListener('mousemove', this.handleMousemove);
      window.addEventListener('mouseup', this.handleCoreMouseUp);
      this.$refs.core.style.transitionDuration = '.1s';
      this.$refs.content.style.transitionDuration = '.1s';
    },
    handleMousemove: function handleMousemove(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setScrollCoreTop(e.pageY - this.diff - this.$refs.bar.getBoundingClientRect().top);
    },
    handleCoreMouseUp: function handleCoreMouseUp(e) {
      e.preventDefault();
      e.stopPropagation();
      this.onDrag = false;
      window.removeEventListener('mousemove', this.handleMousemove);
      window.removeEventListener('mouseup', this.handleCoreMouseUp);
      if (!this.onOver) {
        this.$refs.bar.style.width = '3px';
        this.$refs.core.style.width = '3px';
      }
      this.$refs.core.style.transitionDuration = '.3s';
      this.$refs.content.style.transitionDuration = '.3s';
    },
    handleBarClick: function handleBarClick(e) {
      var mouseY = e.pageY;
      var barY = this.$refs.bar.getBoundingClientRect().top;
      var coreHeight = this.coreHeight;

      this.setScrollCoreTop(mouseY - barY - coreHeight / 2);
    },
    setScrollCoreTop: function setScrollCoreTop(v) {
      var _detectIfNeedScroll2 = this.detectIfNeedScroll(),
          needScroll = _detectIfNeedScroll2.needScroll,
          monitorHeight = _detectIfNeedScroll2.monitorHeight,
          contentHeight = _detectIfNeedScroll2.contentHeight;

      if (!needScroll) return;

      var barHeight = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.bar).height;
      var coreHeight = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_element_size__["a" /* default */])(this.$refs.core).height;

      var scrollTopMax = barHeight - coreHeight;
      var contentTopMax = monitorHeight - contentHeight;

      var scrollCoreTop = v;
      scrollCoreTop = scrollCoreTop <= 0 ? 0 : scrollCoreTop >= scrollTopMax ? scrollTopMax : scrollCoreTop;

      var contentTop = scrollCoreTop * contentHeight / barHeight * -1;
      contentTop = contentTop >= 0 ? 0 : contentTop <= contentTopMax ? contentTopMax : contentTop;

      this.scrollCoreTop = scrollCoreTop;
      this.contentTop = scrollCoreTop >= scrollTopMax ? contentTopMax : contentTop;
    },
    handlerResize: function handlerResize() {
      this.setScrollCoreTop(this.scrollCoreTop);
    }
  }
});

/***/ }),

/***/ "oeOm":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("7Doy");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ovkV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_scroller_vue__ = __webpack_require__("lrsZ");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_scroller_vue__["a"]; });


/***/ }),

/***/ "pPW7":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("M6a0");
__webpack_require__("zQR9");
__webpack_require__("+tPU");
__webpack_require__("ttyz");
__webpack_require__("BDhv");
__webpack_require__("oNmr");
__webpack_require__("ioQ5");
module.exports = __webpack_require__("FeBl").Set;


/***/ }),

/***/ "qio6":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var anObject = __webpack_require__("77Pl");
var getKeys = __webpack_require__("lktj");

module.exports = __webpack_require__("+E39") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "qkKv":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("FeBl");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "qo66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7KvD");
var $export = __webpack_require__("kM2E");
var meta = __webpack_require__("06OY");
var fails = __webpack_require__("S82l");
var hide = __webpack_require__("hJx8");
var redefineAll = __webpack_require__("xH/j");
var forOf = __webpack_require__("NWt+");
var anInstance = __webpack_require__("2KxR");
var isObject = __webpack_require__("EqjI");
var setToStringTag = __webpack_require__("e6n0");
var dP = __webpack_require__("evD5").f;
var each = __webpack_require__("ALrJ")(0);
var DESCRIPTORS = __webpack_require__("+E39");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "rjj0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__("tTVk");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "sB3e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "tTVk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "ttyz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("9C8M");
var validate = __webpack_require__("LIJb");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("qo66")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "tzU+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_font_awesome_style_css__ = __webpack_require__("wzUM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_font_awesome_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_font_awesome_style_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'au-icon',
  mounted: function mounted() {
    if (this.unifySize) this.setUnifiedWidth();
  },

  props: {
    type: String,
    custom: String,
    size: String,
    color: String,
    unifySize: Boolean
  },
  watch: {
    size: function size(v) {
      if (this.unifySize) this.$nextTick(this.setUnifiedWidth);
    },
    unifySize: function unifySize(v) {
      if (v) this.$nextTick(this.setUnifiedWidth);
    }
  },
  methods: {
    setUnifiedWidth: function setUnifiedWidth() {
      this.$el.style.width = parseInt(window.getComputedStyle(this.$el).fontSize) + 4 + 'px';
    }
  }
});

/***/ }),

/***/ "u8Bm":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("I+QW");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("1f488866", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a8e77880\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./icon.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a8e77880\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./icon.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "uDO3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "pop",
      staticClass:
        "au-popover au-theme-border-radius--small au-theme-box-shadow--base",
      class: { "au-popover-plain au-theme-border-color--base-10": _vm.plain },
      attrs: { tabindex: _vm._uid }
    },
    [
      _vm._t("target"),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "content",
          class: {
            "au-popover-content": true,
            "au-theme-border-radius--small": true,
            "au-theme-background-color--base-2": !_vm.plain,
            "au-theme-color--base-12": !_vm.plain,
            "au-theme-background-color--base-12": _vm.plain,
            "au-theme-border-color--base-10": _vm.plain,
            "au-theme-color--base-3": _vm.plain
          }
        },
        [_vm._t("content")],
        2
      ),
      _vm._v(" "),
      _c("span", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.triangle,
            expression: "triangle"
          }
        ],
        class: ((_obj = {
          "au-popover-triangle": true,
          "au-theme-background-color--base-2": !_vm.plain,
          "au-theme-background-color--base-12": _vm.plain,
          "au-popover-plain-triangle au-theme-border-color--base-10": _vm.plain
        }),
        (_obj[_vm.localPlacement.split(/\s+/).join("-")] = true),
        _obj)
      })
    ],
    2
  )
  var _obj
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-39184694", esExports)
  }
}

/***/ }),

/***/ "vFc/":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("TcQ7");
var toLength = __webpack_require__("QRG4");
var toAbsoluteIndex = __webpack_require__("fkB2");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "vIB/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("O4g8");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var hide = __webpack_require__("hJx8");
var has = __webpack_require__("D2L2");
var Iterators = __webpack_require__("/bQp");
var $iterCreate = __webpack_require__("94VQ");
var setToStringTag = __webpack_require__("e6n0");
var getPrototypeOf = __webpack_require__("PzxK");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "wzUM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xGkn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("4mcu");
var step = __webpack_require__("EGZi");
var Iterators = __webpack_require__("/bQp");
var toIObject = __webpack_require__("TcQ7");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("vIB/")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "xH/j":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("hJx8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "xnc9":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "zQR9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("h65t")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("vIB/")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ })

/******/ });
});