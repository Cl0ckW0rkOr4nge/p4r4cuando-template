/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/helpers/axios.helper..ts":
/*!**************************************!*\
  !*** ./lib/helpers/axios.helper..ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// import Cookie from 'js-cookie';\n\n\nconst { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\nconst BASE_URL = publicRuntimeConfig.BASE_URL;\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: BASE_URL\n});\ninstance.interceptors.request.use(async (config)=>{\n    const token = await getTokenFromCookie();\n    if (token) {\n        config.headers.Authorization = `Bearer ${token}`;\n    }\n    return config;\n}, (error)=>{\n    if (error.response && error.response.status === 401) {\n        // Redirigir a la página de inicio en caso de un error de autorización, aquí podemos agregar lógica para manejar mejor el error.\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    }\n    return Promise.reject(error);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);\nasync function getTokenFromCookie() {\n    return null;\n// return Cookie.get('token');\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGVscGVycy9heGlvcy5oZWxwZXIuLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMxQixrQ0FBa0M7QUFDRTtBQUNIO0FBRWpDLE1BQU0sRUFBRUcsb0JBQW1CLEVBQUUsR0FBR0Ysa0RBQVNBO0FBQ3pDLE1BQU1HLFdBQVdELG9CQUFvQkMsUUFBUTtBQUU3QyxNQUFNQyxXQUFXTCxvREFBWSxDQUFDO0lBQzVCTyxTQUFTSDtBQUNYO0FBRUFDLFNBQVNHLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQy9CLE9BQU9DLFNBQVc7SUFDaEIsTUFBTUMsUUFBUSxNQUFNQztJQUNwQixJQUFJRCxPQUFPO1FBQ1RELE9BQU9HLE9BQU8sQ0FBQ0MsYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFFSCxNQUFNLENBQUM7SUFDbEQsQ0FBQztJQUNELE9BQU9EO0FBQ1QsR0FDQSxDQUFDSyxRQUFVO0lBQ1QsSUFBSUEsTUFBTUMsUUFBUSxJQUFJRCxNQUFNQyxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLO1FBQ25ELGdJQUFnSTtRQUNoSWhCLHVEQUFXLENBQUM7SUFDZCxDQUFDO0lBQ0QsT0FBT2tCLFFBQVFDLE1BQU0sQ0FBQ0w7QUFDeEI7QUFHRixpRUFBZVgsUUFBUUEsRUFBQztBQUV4QixlQUFlUSxxQkFBcUI7SUFDbEMsT0FBTyxJQUFJO0FBQ1gsOEJBQThCO0FBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWZ1bGxzdGFjay1hcHAtdGVtcGxhdGUvLi9saWIvaGVscGVycy9heGlvcy5oZWxwZXIuLnRzPzMzMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5jb25zdCBCQVNFX1VSTCA9IHB1YmxpY1J1bnRpbWVDb25maWcuQkFTRV9VUkw7XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogQkFTRV9VUkwsXHJcbn0pO1xyXG5cclxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gIGFzeW5jIChjb25maWcpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW5Gcm9tQ29va2llKCk7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9LFxyXG4gIChlcnJvcikgPT4ge1xyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIC8vIFJlZGlyaWdpciBhIGxhIHDDoWdpbmEgZGUgaW5pY2lvIGVuIGNhc28gZGUgdW4gZXJyb3IgZGUgYXV0b3JpemFjacOzbiwgYXF1w60gcG9kZW1vcyBhZ3JlZ2FyIGzDs2dpY2EgcGFyYSBtYW5lamFyIG1lam9yIGVsIGVycm9yLlxyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRva2VuRnJvbUNvb2tpZSgpIHtcclxuICByZXR1cm4gbnVsbDtcclxuICAvLyByZXR1cm4gQ29va2llLmdldCgndG9rZW4nKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRDb25maWciLCJSb3V0ZXIiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiQkFTRV9VUkwiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJnZXRUb2tlbkZyb21Db29raWUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJwdXNoIiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/helpers/axios.helper..ts\n");

/***/ }),

/***/ "./lib/helpers/fetcher.helper.ts":
/*!***************************************!*\
  !*** ./lib/helpers/fetcher.helper.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetcher\": () => (/* binding */ fetcher)\n/* harmony export */ });\n/* harmony import */ var _axios_helper___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios.helper. */ \"./lib/helpers/axios.helper..ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios_helper___WEBPACK_IMPORTED_MODULE_0__]);\n_axios_helper___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst fetcher = (url)=>_axios_helper___WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url).then((resp)=>resp.data);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGVscGVycy9mZXRjaGVyLmhlbHBlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUU3QixNQUFNQyxVQUFVLENBQUNDLE1BQ3RCRiwwREFBUyxDQUFDRSxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWZ1bGxzdGFjay1hcHAtdGVtcGxhdGUvLi9saWIvaGVscGVycy9mZXRjaGVyLmhlbHBlci50cz80MDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICcuL2F4aW9zLmhlbHBlci4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+XHJcbiAgYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcCkgPT4gcmVzcC5kYXRhKTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hlciIsInVybCIsImdldCIsInRoZW4iLCJyZXNwIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/helpers/fetcher.helper.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_helpers_fetcher_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/helpers/fetcher.helper */ \"./lib/helpers/fetcher.helper.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, _lib_helpers_fetcher_helper__WEBPACK_IMPORTED_MODULE_2__]);\n([swr__WEBPACK_IMPORTED_MODULE_1__, _lib_helpers_fetcher_helper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {\n            value: {\n                shouldRetryOnError: false,\n                revalidateOnFocus: false,\n                fetcher: _lib_helpers_fetcher_helper__WEBPACK_IMPORTED_MODULE_2__.fetcher\n            },\n            children: getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Computer\\\\Desktop\\\\p4r4cuando-template\\\\paracuando-template\\\\pages\\\\_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 20\n            }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Computer\\\\Desktop\\\\p4r4cuando-template\\\\paracuando-template\\\\pages\\\\_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0M7QUFDd0I7QUFDekI7QUFNaEIsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBc0IsRUFBRTtJQUN4RSxNQUFNQyxZQUFZRixVQUFVRSxTQUFTLElBQUssRUFBQ0MsT0FBU0EsSUFBRztJQUV2RCxxQkFDRTtrQkFDRSw0RUFBQ04sMENBQVNBO1lBQ1JPLE9BQU87Z0JBQ0xDLG9CQUFvQixLQUFLO2dCQUN6QkMsbUJBQW1CLEtBQUs7Z0JBQ3hCUixPQUFPQSxrRUFBQUE7WUFDVDtzQkFFQ0ksd0JBQVUsOERBQUNGO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUkzQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWZ1bGxzdGFjay1hcHAtdGVtcGxhdGUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuLi9saWIvaGVscGVycy9mZXRjaGVyLmhlbHBlcic7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgTmV4dFBhZ2VXaXRoTGF5b3V0IH0gZnJvbSAnLi9wYWdlJztcclxudHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcclxuICBDb21wb25lbnQ6IE5leHRQYWdlV2l0aExheW91dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzV2l0aExheW91dCkge1xyXG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gKChwYWdlKSA9PiBwYWdlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTV1JDb25maWdcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgc2hvdWxkUmV0cnlPbkVycm9yOiBmYWxzZSxcclxuICAgICAgICAgIHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgIGZldGNoZXIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9XHJcbiAgICAgIDwvU1dSQ29uZmlnPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiU1dSQ29uZmlnIiwiZmV0Y2hlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiLCJ2YWx1ZSIsInNob3VsZFJldHJ5T25FcnJvciIsInJldmFsaWRhdGVPbkZvY3VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();