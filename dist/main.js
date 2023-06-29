/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./toggle.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/toggle.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,500;1,400&display=swap);\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nmain {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\nh1 {\r\n  text-transform: capitalize;\r\n  font-size: 2rem;\r\n}\r\n\r\nheader {\r\n  background: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1rem 1rem;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n.desktop-menu {\r\n  display: none;\r\n}\r\n\r\n.mobile-menu {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #272a31;\r\n  opacity: 0.9;\r\n  backdrop-filter: blur(7px);\r\n  transition: all 1s ease;\r\n  display: none;\r\n}\r\n\r\n.active.mobile-menu {\r\n  display: block;\r\n}\r\n\r\n.mobile-menu ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.mobile-menu ul li {\r\n  margin: 1rem 0;\r\n  color: #fff;\r\n}\r\n\r\n.mobile-menu ul li:hover {\r\n  color: #fff;\r\n}\r\n\r\n.movie-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, 300px);\r\n  gap: 30px;\r\n  justify-content: center;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.movie-card {\r\n  background: #fff;\r\n  display: grid;\r\n  place-items: center;\r\n  border-radius: 8px;\r\n  padding: 1rem 0;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/* .movie-card:hover {\r\n  transform: scale(1.05);\r\n} */\r\n\r\n.movie-card img {\r\n  width: 80%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n}\r\n\r\n.movie-card h3 {\r\n  font-size: 1.2rem;\r\n  margin-top: 1rem;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.movie-card .interactions {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.movie-card .interactions button {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 8px;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.movie-card .interactions button:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.movie-card .interactions button:focus {\r\n  outline: none;\r\n}\r\n\r\n.movie-card .interactions .like {\r\n  color: #f44336;\r\n  background: #ffebee;\r\n  padding: 0.7rem;\r\n  font-size: 1rem;\r\n  border-radius: 8px;\r\n}\r\n\r\n.movie-card .interactions .like:hover {\r\n  background: #ffcdd2;\r\n}\r\n\r\nfooter {\r\n  height: 17vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-top: 1px solid rgb(223, 216, 216);\r\n}\r\n\r\nfooter p {\r\n  margin: 0 auto;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n/* modal */\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  display: none;\r\n  width: 70%;\r\n  height: 90%;\r\n  margin: auto;\r\n  background: rgb(79, 76, 76);\r\n  z-index: 10;\r\n  transition: opacity 0.3s, visibility 0.3s;\r\n  pointer-events: auto;\r\n}\r\n\r\n.close {\r\n  z-index: 99;\r\n  pointer-events: all;\r\n  cursor: pointer;\r\n}\r\n\r\n.movie-card:not(.modal-open) {\r\n  pointer-events: auto;\r\n}\r\n\r\n.my-modal {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: #fff;\r\n  width: 90%;\r\n  height: 95%;\r\n  overflow-y: scroll;\r\n  padding: 20px 0;\r\n  margin: 0 auto;\r\n  border: 1px solid lightgray;\r\n  border-radius: 3rem;\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1000;\r\n}\r\n\r\n.my-modal .modal-cover {\r\n  width: 95%;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.my-modal .headline {\r\n  width: 90%;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.my-modal .headline p {\r\n  font-size: 24px;\r\n}\r\n\r\n.my-modal .body {\r\n  width: 90%;\r\n  height: auto;\r\n  margin: 20px auto;\r\n  border-bottom: 1px solid lightgray;\r\n  padding-bottom: 0.9rem;\r\n}\r\n\r\n.my-modal .img-cover {\r\n  width: 90%;\r\n  height: 55%;\r\n  margin: auto;\r\n  object-fit: cover;\r\n}\r\n\r\n.my-modal .img-cover img {\r\n  width: 98%;\r\n}\r\n\r\n.my-modal .comments {\r\n  width: 90%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.my-modal .add-comment {\r\n  width: 90%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.my-modal .add-comment form {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform input {\r\n  width: 95%;\r\n  margin: 20px 0;\r\n  height: 2rem;\r\n  outline: none;\r\n  border-radius: 5px;\r\n  border: 1px solid grey;\r\n}\r\n\r\nform input::placeholder {\r\n  font-style: italic;\r\n  color: grey;\r\n}\r\n\r\nform textarea {\r\n  height: 4rem;\r\n  width: 95%;\r\n  margin: 20px 0;\r\n  padding: 0;\r\n  border-radius: 20px;\r\n  border: 1px solid grey;\r\n}\r\n\r\n#add-comment-button {\r\n  height: 5vh;\r\n  width: 30%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.modal-container {\r\n  background: #c5c9d0;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\np span {\r\n  font-weight: 300;\r\n}\r\n\r\n.my-modal .footer {\r\n  width: 90%;\r\n  display: flex;\r\n  margin: 0 auto;\r\n  flex-direction: column;\r\n}\r\n\r\n.my-modal .footer .disp {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .my-modal {\r\n    width: 80%;\r\n    overflow-y: auto;\r\n    height: 98%;\r\n    padding: 1rem 0;\r\n  }\r\n\r\n  .my-modal .modal-cover {\r\n    height: 90%;\r\n  }\r\n\r\n  .my-modal .img-cover {\r\n    height: auto;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .my-modal .headline {\r\n    height: 3vh;\r\n    position: relative;\r\n    top: -2rem;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .my-modal .headline p {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .my-modal .img-cover img {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .my-modal .body {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin: 0;\r\n  }\r\n\r\n  .my-modal .desk-cont {\r\n    display: flex;\r\n    width: 95%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .my-modal .add-comment {\r\n    height: auto;\r\n  }\r\n\r\n  form input {\r\n    width: 30%;\r\n    border: 2px solid grey;\r\n  }\r\n\r\n  form textarea {\r\n    height: 25vh;\r\n    border-radius: 1rem;\r\n    padding: 20px;\r\n    border: 2px solid grey;\r\n  }\r\n\r\n  form button {\r\n    width: 3rem;\r\n  }\r\n\r\n  @media only screen and (min-width: 768px) {\r\n    .mobile-menu {\r\n      display: none;\r\n    }\r\n\r\n    .menu-toggle {\r\n      display: none;\r\n    }\r\n\r\n    .desktop-menu {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n    }\r\n\r\n    .counter {\r\n      color: #f44336;\r\n      background: #ffebee;\r\n      padding: 0.2rem;\r\n      font-size: 1rem;\r\n      border-radius: 8px;\r\n    }\r\n\r\n    ul {\r\n      list-style: none;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      gap: 10px;\r\n      text-transform: capitalize;\r\n      margin-top: 1rem;\r\n    }\r\n\r\n    ul li {\r\n      text-decoration: none;\r\n      color: #000;\r\n      padding: 0.5rem 1rem;\r\n      border-radius: 8px;\r\n      cursor: pointer;\r\n      transition: all 0.3s ease-in-out;\r\n    }\r\n\r\n    ul li:hover,\r\n    ul li:focus {\r\n      background: #f5f5f5;\r\n    }\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movie-capstone/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/toggle.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/toggle.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.menu-toggle {\r\n  position: relative;\r\n  height: 10px;\r\n  margin-top: 16px;\r\n  padding: 0 23px;\r\n  cursor: pointer;\r\n  z-index: 999;\r\n}\r\n\r\n.menu-toggle::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2px;\r\n  width: 20px;\r\n  background: #333;\r\n  transform: translateY(13px);\r\n  transition: 0.5s;\r\n}\r\n\r\n.active.menu-toggle::before {\r\n  transform: translateY(2px) rotate(45deg);\r\n  background: #fff;\r\n}\r\n\r\n.menu-toggle::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2px;\r\n  width: 20px;\r\n  background: #333;\r\n  box-shadow: 0 -8px 0 #333;\r\n  transform: translateY(5px);\r\n  transition: 0.5s;\r\n}\r\n\r\n.active.menu-toggle::after {\r\n  transform: translateY(0) rotate(-45deg);\r\n  box-shadow: 0 0 0 #333;\r\n  background: #fff;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movie-capstone/./src/styles/toggle.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://movie-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://movie-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://movie-capstone/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://movie-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://movie-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://movie-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://movie-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://movie-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://movie-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuToggle: () => (/* binding */ menuToggle),\n/* harmony export */   mobileMenu: () => (/* binding */ mobileMenu)\n/* harmony export */ });\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_genre_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/genre.js */ \"./src/modules/genre.js\");\n\n\n// eslint-disable-next-line\n\r\n\nconst mobileMenu = document.querySelector('.mobile-menu');\nconst menuToggle = document.querySelector('.menu-toggle');\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_genre_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\nmenuToggle.addEventListener('click', () => {\n  mobileMenu.classList.toggle('active');\n  menuToggle.classList.toggle('active');\n});\n\n\n\n//# sourceURL=webpack://movie-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMovieComment: () => (/* binding */ addMovieComment),\n/* harmony export */   apiKey: () => (/* binding */ apiKey),\n/* harmony export */   getLikes: () => (/* binding */ getLikes),\n/* harmony export */   getShowDetails: () => (/* binding */ getShowDetails),\n/* harmony export */   getShows: () => (/* binding */ getShows),\n/* harmony export */   getSingleMovieComments: () => (/* binding */ getSingleMovieComments),\n/* harmony export */   postLike: () => (/* binding */ postLike)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\nconst involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst apiKey = 'r2HqEF2mwpkxdwytyGER';\nconst baseAddCommentUrl = `${involvementAPI + apiKey}/comments/`;\nconst getCommentsBaseUrl = `${involvementAPI + apiKey}/comments?item_id=`;\n\nconst getShows = () => fetch('https://api.tvmaze.com/shows').then((res) => res.json());\n\nconst getShowDetails = async (id) => {\n  const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';\n  const detailUrl = `${baseUrl + id}`;\n  const response = await fetch(detailUrl).then((response) => response.json());\n  return response;\n};\n\nconst addMovieComment = async (e) => {\n  if (e.target.classList.contains('add-comment-button')) {\n    const form = e.target.closest('form');\n    const movieId = e.target.getAttribute('data-id');\n    const name = form.querySelector('input').value;\n    const comment = form.querySelector('textarea').value;\n    const commentContainer = form.closest('.modal-cover')\n      .querySelector('.comments')\n      .querySelector('.user-comments');\n    const commentCount = form.closest('.modal-cover')\n      .querySelector('.comments').querySelector('#comment-count');\n\n    const config = {\n      method: 'POST',\n      body: JSON.stringify(\n        {\n          item_id: movieId,\n          username: name,\n          comment,\n        },\n      ),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    };\n\n    if (name !== '' && comment !== '' && movieId !== '') {\n      await fetch(baseAddCommentUrl, config);\n      const commentsUrl = getCommentsBaseUrl + movieId;\n      const allComments = await fetch(commentsUrl);\n      const allCommentsData = await allComments.json();\n\n      commentContainer.innerHTML = '';\n      commentCount.innerHTML = `(${allCommentsData.length})`;\n      allCommentsData.forEach((comment) => {\n        const commentItem = `\n        <div class=\"comment-item\">\n        <p>${`${comment.creation_date} : ${comment.username}`}</p>\n        <p>${comment.comment}</p>\n        </div>\n        <br>\n        `;\n        commentContainer.innerHTML += commentItem;\n      });\n\n      form.querySelector('input').value = '';\n      form.querySelector('textarea').value = '';\n    }\n  }\n};\n\nconst getSingleMovieComments = async (movieId, commentsCont, count) => {\n  const commentsUrl = `${getCommentsBaseUrl}${movieId}`;\n  const counter = count;\n\n  try {\n    const allComments = await fetch(commentsUrl).then();\n    if (allComments.ok) {\n      const allCommentsData = await allComments.json();\n      counter.innerHTML = `(${(0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(allCommentsData)})`;\n      const commentContainer = commentsCont;\n      commentContainer.innerHTML = '';\n      if (allCommentsData.length > 0) {\n        allCommentsData.forEach((comment) => {\n          const commentItem = `\n                <div class=\"comment-item\">\n                <p>${`${comment.creation_date} : ${comment.username}`}</p>\n                <p>${comment.comment}</p>\n                </div>\n                <br>\n                `;\n          commentContainer.innerHTML += commentItem;\n        });\n      }\n    } else {\n      const error = new Error('No comments Yet');\n      error.stack = undefined;\n      throw error;\n    }\n  } catch (error) {\n    if (error instanceof Error && error.message.includes('400')) {\n      const contComm = commentsCont;\n      contComm.innerHTML = error.message;\n    }\n  }\n\n  window.addEventListener('unhandledrejection', (event) => {\n    event.preventDefault();\n  });\n};\n\nconst postLike = async (id, url) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response;\n};\n\nconst getLikes = async (url) => {\n  const response = await fetch(url);\n  return response;\n};\n\n\n\n\n//# sourceURL=webpack://movie-capstone/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = (commentsFromApi) => commentsFromApi.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n//# sourceURL=webpack://movie-capstone/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _handlePopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlePopup.js */ \"./src/modules/handlePopup.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _getlikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getlikes.js */ \"./src/modules/getlikes.js\");\n/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemsCounter.js */ \"./src/modules/itemsCounter.js\");\n\n\n\n\n\n\nconst movieContainer = document.querySelector('.movie-list');\n\n// displayshows function\nconst displayShows = () => {\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getShows)().then((data) => {\n    data.splice(50);\n    (0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data);\n    const shows = data.map((show, index) => `\n      <div class=\"movie-card\" data-id=\"${data[index].externals.thetvdb}\">\n        <img src=\"${show.image.medium}\" alt=\"${show.name}\">\n        <h3 class=\"movie-title\">${show.name}</h3>\n        <div class=\"interactions\">\n          <button class=\"comments\">comment</button>\n          <div>\n            <i class=\"like fa-regular fa-heart\" data-show-id=\"${show.name}\"></i>\n            <span class=\"likes\" data-shows-id=\"${show.name}\"></span>\n          </div>\n        </div>\n        <div class=\"my-modal\">\n        </div>\n      </div>\n    `).join('');\n\n    movieContainer.innerHTML = shows;\n    movieContainer.addEventListener('click', (e) => (0,_handlePopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e));\n\n    const likeBtns = document.querySelectorAll('.like');\n    const likes = document.querySelectorAll('.likes');\n\n    likeBtns.forEach((btn, index) => {\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(btn, index, likes);\n    });\n\n    window.addEventListener('load', () => {\n      (0,_getlikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.likes');\n    });\n  }).catch((err) => {\n    movieContainer.innerHTML = `<h3 class=\"error\">An error occurred: ${err}</h3>`;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);\n\n//# sourceURL=webpack://movie-capstone/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/genre.js":
/*!******************************!*\
  !*** ./src/modules/genre.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _getlikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getlikes.js */ \"./src/modules/getlikes.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\n\n\n// eslint-disable-next-line\n\r\n\nconst movieList = document.querySelector('.movie-list');\nconst filterBtn = document.querySelectorAll('.btn');\nconst allMovies = document.querySelector('#all');\nconst allMoviesMobile = document.querySelector('#all-mobile');\n\nconst filterShows = () => {\n  filterBtn.forEach((btn) => {\n    btn.addEventListener('click', async (e) => {\n      const { genre } = e.currentTarget.dataset;\n      const shows = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getShows)();\n      const filteredShows = shows.filter((show) => show.genres.includes(genre));\n      filteredShows.splice(50);\n      const movies = filteredShows.map((show, index) => `<div class=\"movie-card\" data-id=\"${filteredShows[index].externals.thetvdb}\">\n      <img src=\"${show.image.medium}\" alt=\"${show.name}\">\n      <h3 class=\"movie-title\">${show.name}</h3>\n      <div class=\"interactions\">\n        <button class=\"comments\">comment</button>\n        <div>\n          <i class=\"like fa-regular fa-heart\" data-show-id=\"${show.name}\"></i>\n          <span class=\"likes\" data-shows-id=\"${show.name}\"></span>\n        </div>\n      </div>\n      <div class=\"my-modal\">\n      </div>\n    </div>`).join('');\n      movieList.innerHTML = movies;\n      const likeBtns = document.querySelectorAll('.like');\n      const likes = document.querySelectorAll('.likes');\n\n      likeBtns.forEach((btn, index) => {\n        (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(btn, index, likes);\n      });\n      (0,_getlikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.likes');\n    });\n  });\n};\n\nconst filterMovies = () => {\n  filterShows();\n  allMovies.addEventListener('click', () => {\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_getlikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.likes');\n  });\n  allMoviesMobile.addEventListener('click', () => {\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_getlikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.likes');\n    _index_js__WEBPACK_IMPORTED_MODULE_4__.mobileMenu.classList.remove('active');\n    _index_js__WEBPACK_IMPORTED_MODULE_4__.menuToggle.classList.remove('active');\n  });\n};\n\nif (window.innerWidth < 768) {\n  filterBtn.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      _index_js__WEBPACK_IMPORTED_MODULE_4__.mobileMenu.classList.remove('active');\n      _index_js__WEBPACK_IMPORTED_MODULE_4__.menuToggle.classList.remove('active');\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterMovies);\n\n//# sourceURL=webpack://movie-capstone/./src/modules/genre.js?");

/***/ }),

/***/ "./src/modules/getlikes.js":
/*!*********************************!*\
  !*** ./src/modules/getlikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nconst displayLikes = (element) => {\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_api_js__WEBPACK_IMPORTED_MODULE_0__.apiKey}/likes/`)\n    .then((response) => response.json())\n    .then((res) => {\n      const likes = document.querySelectorAll(element);\n      likes.forEach((like) => {\n        const showId = like.getAttribute('data-shows-id');\n        const showLikes = res.find((item) => item.item_id === showId);\n        like.textContent = showLikes ? showLikes.likes : '0';\n      });\n    })\n    .catch((err) => err);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikes);\n\n//# sourceURL=webpack://movie-capstone/./src/modules/getlikes.js?");

/***/ }),

/***/ "./src/modules/handlePopup.js":
/*!************************************!*\
  !*** ./src/modules/handlePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nconst showModal = async (e) => {\n  if (e.target.classList.contains('comments')) {\n    const btn = e.target;\n    const movieCard = btn.closest('.movie-card');\n    const id = movieCard.getAttribute('data-id');\n    const modal = movieCard.querySelector('.my-modal');\n    modal.style.display = 'block';\n\n    document.querySelector('body').style.overflow = 'hidden';\n\n    const details = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getShowDetails)(id);\n    const {\n      name, type, language, summary,\n      averageRuntime, image,\n    } = details;\n\n    modal.innerHTML = `\n        <div class=\"headline\">\n                  <h3>IMovies</h3>\n                  <h3 class=\"close\">&times;</h3>\n              </div>\n              <div class=\"modal-cover\">\n                  <div class=\"desk-cont\">\n                  <div class=\"img-cover\">\n                      <img src=\"${image.original}\">\n                  </div>\n                  <div class=\"body\">\n                  <h4> SUMMARY </h4>\n                      <p>${summary}</p>\n                  </div>\n                  </div>\n                  <div class=\"footer\">\n                    <div class=\"disp\">\n                      <p>TITLE: <span> ${name} </span></p>\n                      <p>RUNTIME: <span> ${averageRuntime} </span>minutes</p>\n                    </div>\n                    <div class=\"disp\">\n                      <p>LANGUAGE: <span> ${language} </span> </p>\n                      <p>TYPE: <span> ${type} </span> </p>\n                    </div>\n                  </div>\n                  <div class=\"comments\">\n                      <h4>COMMENTS <span id=\"comment-count\">(0)</span> </h4>\n                      <div class=\"user-comments\">\n                      <p>No comment yet</p>\n                      </div>\n                  </div>\n                  <div class=\"add-comment\">\n                      <h4>Add A Comment</h4>\n                      <form action=\"#\">\n                          <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your name\">\n                          <textarea type=\"text\" name=\"comment\" id=\"add-comment\" rows = \"30\"></textarea>\n                          <button type=\"button\" data-id=${id} class=\"add-comment-button\" id=\"add-comment-button\">Comment</button>\n                      </form>\n                  </div>\n                </div>\n        `;\n    modal.addEventListener('click', (e) => (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addMovieComment)(e));\n    const modalImage = modal.querySelector('.img-cover img');\n\n    modalImage.addEventListener('load', async () => {\n      const commentsContainer = modal.querySelector('.user-comments');\n      const commentCount = modal.querySelector('#comment-count');\n      await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getSingleMovieComments)(id, commentsContainer, commentCount);\n    });\n  }\n\n  if (e.target.classList.contains('close')) {\n    const closingBtn = e.target;\n    const modal = closingBtn.closest('.my-modal');\n    modal.style.display = 'none';\n    document.querySelector('body').style.overflow = 'scroll';\n\n    e.stopPropagation();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModal);\n\n\n//# sourceURL=webpack://movie-capstone/./src/modules/handlePopup.js?");

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countItems = (items) => {\n  const counter = document.querySelector('.counter');\n  if (items.length === 0) {\n    counter.textContent = '0';\n    return;\n  }\n  counter.textContent = items.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);\n\n//# sourceURL=webpack://movie-capstone/./src/modules/itemsCounter.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nfunction handleLikeButtonClick(btn, index, likes) {\n  btn.addEventListener('click', () => {\n    const showId = btn.getAttribute('data-show-id');\n\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(showId, `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_api_js__WEBPACK_IMPORTED_MODULE_0__.apiKey}/likes/`)\n      .then(() => (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_api_js__WEBPACK_IMPORTED_MODULE_0__.apiKey}/likes/`))\n      .then((response) => response.json())\n      .then((res) => {\n        likes[index].textContent = res.find((item) => item.item_id === showId).likes;\n      })\n      .catch((err) => err);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleLikeButtonClick);\n\n//# sourceURL=webpack://movie-capstone/./src/modules/likes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;