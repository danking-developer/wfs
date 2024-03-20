"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-is-promise";
exports.ids = ["vendor-chunks/p-is-promise"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-is-promise/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-is-promise/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nconst isObject = value => value !== null &&\n\t(typeof value === 'object' || typeof value === 'function');\n\nmodule.exports = value => (\n\tvalue instanceof Promise ||\n\t(\n\t\tisObject(value) &&\n\t\ttypeof value.then === 'function' &&\n\t\ttypeof value.catch === 'function'\n\t)\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1pcy1wcm9taXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9wLWlzLXByb21pc2UvaW5kZXguanM/NzgxMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzT2JqZWN0ID0gdmFsdWUgPT4gdmFsdWUgIT09IG51bGwgJiZcblx0KHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YWx1ZSA9PiAoXG5cdHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSB8fFxuXHQoXG5cdFx0aXNPYmplY3QodmFsdWUpICYmXG5cdFx0dHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2YgdmFsdWUuY2F0Y2ggPT09ICdmdW5jdGlvbidcblx0KVxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-is-promise/index.js\n");

/***/ })

};
;