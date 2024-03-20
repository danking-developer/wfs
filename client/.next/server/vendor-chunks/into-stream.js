"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/into-stream";
exports.ids = ["vendor-chunks/into-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/into-stream/index.js":
/*!*******************************************!*\
  !*** ./node_modules/into-stream/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst from = __webpack_require__(/*! from2 */ \"(ssr)/./node_modules/from2/index.js\");\nconst pIsPromise = __webpack_require__(/*! p-is-promise */ \"(ssr)/./node_modules/p-is-promise/index.js\");\n\nconst intoStream = input => {\n\tif (Array.isArray(input)) {\n\t\tinput = input.slice();\n\t}\n\n\tlet promise;\n\tlet iterator;\n\tlet asyncIterator;\n\n\tprepare(input);\n\n\tfunction prepare(value) {\n\t\tinput = value;\n\n\t\tif (\n\t\t\tinput instanceof ArrayBuffer ||\n\t\t\t(ArrayBuffer.isView(input) && !Buffer.isBuffer(input))\n\t\t) {\n\t\t\tinput = Buffer.from(input);\n\t\t}\n\n\t\tpromise = pIsPromise(input) ? input : null;\n\n\t\t// We don't iterate on strings and buffers since slicing them is ~7x faster\n\t\tconst shouldIterate = !promise && input[Symbol.iterator] && typeof input !== 'string' && !Buffer.isBuffer(input);\n\t\titerator = shouldIterate ? input[Symbol.iterator]() : null;\n\n\t\tconst shouldAsyncIterate = !promise && input[Symbol.asyncIterator];\n\t\tasyncIterator = shouldAsyncIterate ? input[Symbol.asyncIterator]() : null;\n\t}\n\n\treturn from(function reader(size, callback) {\n\t\tif (promise) {\n\t\t\t(async () => {\n\t\t\t\ttry {\n\t\t\t\t\tawait prepare(await promise);\n\t\t\t\t\treader.call(this, size, callback);\n\t\t\t\t} catch (error) {\n\t\t\t\t\tcallback(error);\n\t\t\t\t}\n\t\t\t})();\n\n\t\t\treturn;\n\t\t}\n\n\t\tif (iterator) {\n\t\t\tconst object = iterator.next();\n\t\t\tsetImmediate(callback, null, object.done ? null : object.value);\n\t\t\treturn;\n\t\t}\n\n\t\tif (asyncIterator) {\n\t\t\t(async () => {\n\t\t\t\ttry {\n\t\t\t\t\tconst object = await asyncIterator.next();\n\t\t\t\t\tsetImmediate(callback, null, object.done ? null : object.value);\n\t\t\t\t} catch (error) {\n\t\t\t\t\tsetImmediate(callback, error);\n\t\t\t\t}\n\t\t\t})();\n\n\t\t\treturn;\n\t\t}\n\n\t\tif (input.length === 0) {\n\t\t\tsetImmediate(callback, null, null);\n\t\t\treturn;\n\t\t}\n\n\t\tconst chunk = input.slice(0, size);\n\t\tinput = input.slice(size);\n\n\t\tsetImmediate(callback, null, chunk);\n\t});\n};\n\nmodule.exports = intoStream;\n\nmodule.exports.object = input => {\n\tif (Array.isArray(input)) {\n\t\tinput = input.slice();\n\t}\n\n\tlet promise;\n\tlet iterator;\n\tlet asyncIterator;\n\n\tprepare(input);\n\n\tfunction prepare(value) {\n\t\tinput = value;\n\t\tpromise = pIsPromise(input) ? input : null;\n\t\titerator = !promise && input[Symbol.iterator] ? input[Symbol.iterator]() : null;\n\t\tasyncIterator = !promise && input[Symbol.asyncIterator] ? input[Symbol.asyncIterator]() : null;\n\t}\n\n\treturn from.obj(function reader(size, callback) {\n\t\tif (promise) {\n\t\t\t(async () => {\n\t\t\t\ttry {\n\t\t\t\t\tawait prepare(await promise);\n\t\t\t\t\treader.call(this, size, callback);\n\t\t\t\t} catch (error) {\n\t\t\t\t\tcallback(error);\n\t\t\t\t}\n\t\t\t})();\n\n\t\t\treturn;\n\t\t}\n\n\t\tif (iterator) {\n\t\t\tconst object = iterator.next();\n\t\t\tsetImmediate(callback, null, object.done ? null : object.value);\n\t\t\treturn;\n\t\t}\n\n\t\tif (asyncIterator) {\n\t\t\t(async () => {\n\t\t\t\ttry {\n\t\t\t\t\tconst object = await asyncIterator.next();\n\t\t\t\t\tsetImmediate(callback, null, object.done ? null : object.value);\n\t\t\t\t} catch (error) {\n\t\t\t\t\tsetImmediate(callback, error);\n\t\t\t\t}\n\t\t\t})();\n\n\t\t\treturn;\n\t\t}\n\n\t\tthis.push(input);\n\n\t\tsetImmediate(callback, null, null);\n\t});\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW50by1zdHJlYW0vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixhQUFhLG1CQUFPLENBQUMsa0RBQU87QUFDNUIsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQWM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2ludG8tc3RyZWFtL2luZGV4LmpzP2E2NWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgZnJvbSA9IHJlcXVpcmUoJ2Zyb20yJyk7XG5jb25zdCBwSXNQcm9taXNlID0gcmVxdWlyZSgncC1pcy1wcm9taXNlJyk7XG5cbmNvbnN0IGludG9TdHJlYW0gPSBpbnB1dCA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdGlucHV0ID0gaW5wdXQuc2xpY2UoKTtcblx0fVxuXG5cdGxldCBwcm9taXNlO1xuXHRsZXQgaXRlcmF0b3I7XG5cdGxldCBhc3luY0l0ZXJhdG9yO1xuXG5cdHByZXBhcmUoaW5wdXQpO1xuXG5cdGZ1bmN0aW9uIHByZXBhcmUodmFsdWUpIHtcblx0XHRpbnB1dCA9IHZhbHVlO1xuXG5cdFx0aWYgKFxuXHRcdFx0aW5wdXQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fFxuXHRcdFx0KEFycmF5QnVmZmVyLmlzVmlldyhpbnB1dCkgJiYgIUJ1ZmZlci5pc0J1ZmZlcihpbnB1dCkpXG5cdFx0KSB7XG5cdFx0XHRpbnB1dCA9IEJ1ZmZlci5mcm9tKGlucHV0KTtcblx0XHR9XG5cblx0XHRwcm9taXNlID0gcElzUHJvbWlzZShpbnB1dCkgPyBpbnB1dCA6IG51bGw7XG5cblx0XHQvLyBXZSBkb24ndCBpdGVyYXRlIG9uIHN0cmluZ3MgYW5kIGJ1ZmZlcnMgc2luY2Ugc2xpY2luZyB0aGVtIGlzIH43eCBmYXN0ZXJcblx0XHRjb25zdCBzaG91bGRJdGVyYXRlID0gIXByb21pc2UgJiYgaW5wdXRbU3ltYm9sLml0ZXJhdG9yXSAmJiB0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNCdWZmZXIoaW5wdXQpO1xuXHRcdGl0ZXJhdG9yID0gc2hvdWxkSXRlcmF0ZSA/IGlucHV0W1N5bWJvbC5pdGVyYXRvcl0oKSA6IG51bGw7XG5cblx0XHRjb25zdCBzaG91bGRBc3luY0l0ZXJhdGUgPSAhcHJvbWlzZSAmJiBpbnB1dFtTeW1ib2wuYXN5bmNJdGVyYXRvcl07XG5cdFx0YXN5bmNJdGVyYXRvciA9IHNob3VsZEFzeW5jSXRlcmF0ZSA/IGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDogbnVsbDtcblx0fVxuXG5cdHJldHVybiBmcm9tKGZ1bmN0aW9uIHJlYWRlcihzaXplLCBjYWxsYmFjaykge1xuXHRcdGlmIChwcm9taXNlKSB7XG5cdFx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGF3YWl0IHByZXBhcmUoYXdhaXQgcHJvbWlzZSk7XG5cdFx0XHRcdFx0cmVhZGVyLmNhbGwodGhpcywgc2l6ZSwgY2FsbGJhY2spO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdGNhbGxiYWNrKGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChpdGVyYXRvcikge1xuXHRcdFx0Y29uc3Qgb2JqZWN0ID0gaXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBudWxsLCBvYmplY3QuZG9uZSA/IG51bGwgOiBvYmplY3QudmFsdWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChhc3luY0l0ZXJhdG9yKSB7XG5cdFx0XHQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdCA9IGF3YWl0IGFzeW5jSXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0XHRcdHNldEltbWVkaWF0ZShjYWxsYmFjaywgbnVsbCwgb2JqZWN0LmRvbmUgPyBudWxsIDogb2JqZWN0LnZhbHVlKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcblx0XHRcdHNldEltbWVkaWF0ZShjYWxsYmFjaywgbnVsbCwgbnVsbCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2h1bmsgPSBpbnB1dC5zbGljZSgwLCBzaXplKTtcblx0XHRpbnB1dCA9IGlucHV0LnNsaWNlKHNpemUpO1xuXG5cdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBudWxsLCBjaHVuayk7XG5cdH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRvU3RyZWFtO1xuXG5tb2R1bGUuZXhwb3J0cy5vYmplY3QgPSBpbnB1dCA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdGlucHV0ID0gaW5wdXQuc2xpY2UoKTtcblx0fVxuXG5cdGxldCBwcm9taXNlO1xuXHRsZXQgaXRlcmF0b3I7XG5cdGxldCBhc3luY0l0ZXJhdG9yO1xuXG5cdHByZXBhcmUoaW5wdXQpO1xuXG5cdGZ1bmN0aW9uIHByZXBhcmUodmFsdWUpIHtcblx0XHRpbnB1dCA9IHZhbHVlO1xuXHRcdHByb21pc2UgPSBwSXNQcm9taXNlKGlucHV0KSA/IGlucHV0IDogbnVsbDtcblx0XHRpdGVyYXRvciA9ICFwcm9taXNlICYmIGlucHV0W1N5bWJvbC5pdGVyYXRvcl0gPyBpbnB1dFtTeW1ib2wuaXRlcmF0b3JdKCkgOiBudWxsO1xuXHRcdGFzeW5jSXRlcmF0b3IgPSAhcHJvbWlzZSAmJiBpbnB1dFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPyBpbnB1dFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSA6IG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZnJvbS5vYmooZnVuY3Rpb24gcmVhZGVyKHNpemUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKHByb21pc2UpIHtcblx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgcHJlcGFyZShhd2FpdCBwcm9taXNlKTtcblx0XHRcdFx0XHRyZWFkZXIuY2FsbCh0aGlzLCBzaXplLCBjYWxsYmFjayk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGl0ZXJhdG9yKSB7XG5cdFx0XHRjb25zdCBvYmplY3QgPSBpdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRzZXRJbW1lZGlhdGUoY2FsbGJhY2ssIG51bGwsIG9iamVjdC5kb25lID8gbnVsbCA6IG9iamVjdC52YWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGFzeW5jSXRlcmF0b3IpIHtcblx0XHRcdChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0ID0gYXdhaXQgYXN5bmNJdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRcdFx0c2V0SW1tZWRpYXRlKGNhbGxiYWNrLCBudWxsLCBvYmplY3QuZG9uZSA/IG51bGwgOiBvYmplY3QudmFsdWUpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHNldEltbWVkaWF0ZShjYWxsYmFjaywgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wdXNoKGlucHV0KTtcblxuXHRcdHNldEltbWVkaWF0ZShjYWxsYmFjaywgbnVsbCwgbnVsbCk7XG5cdH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/into-stream/index.js\n");

/***/ })

};
;