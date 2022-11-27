"use strict";
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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPostIds\": () => (/* binding */ getAllPostIds),\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData),\n/* harmony export */   \"getSortedPostsData\": () => (/* binding */ getSortedPostsData)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);\n([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"posts\");\nfunction getSortedPostsData() {\n    // Get file names under /posts\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    const allPostsData = fileNames.map((fileName)=>{\n        // Remove \".md\" from file name to get id\n        const id = fileName.replace(/\\.md$/, \"\");\n        // Read markdown file as string\n        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n        // Use gray-matter to parse the post metadata section\n        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n        // Combine the data with the id\n        return {\n            id,\n            ...matterResult.data\n        };\n    });\n    // Sort posts by date\n    return allPostsData.sort(({ date: b  }, { date: a  })=>{\n        if (a < b) {\n            return 1;\n        } else if (a > b) {\n            return -1;\n        } else {\n            return 0;\n        }\n    });\n}\nfunction getAllPostIds() {\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    // Returns an array that looks like this:\n    // [\n    //   {\n    //     params: {\n    //       id: 'ssg-ssr'\n    //     }\n    //   },\n    //   {\n    //     params: {\n    //       id: 'pre-rendering'\n    //     }\n    //   }\n    // ]\n    return fileNames.map((fileName)=>{\n        return {\n            params: {\n                id: fileName.replace(/\\.md$/, \"\")\n            }\n        };\n    });\n}\nasync function getPostData(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n    // Use gray-matter to parse the post metadata section\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    // Use remark to convert markdown into HTML string\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).process(matterResult.content);\n    const contentHtml = processedContent.toString();\n    // Combine the data with the id and contentHtml\n    return {\n        id,\n        contentHtml,\n        ...matterResult.data\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLElBQUk7S0FDckIsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcG9zdHMuanM/ZjRhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCB7IHJlbWFyayB9IGZyb20gXCJyZW1hcmtcIjtcbmltcG9ydCBodG1sIGZyb20gXCJyZW1hcmstaHRtbFwiO1xuXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInBvc3RzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGVkUG9zdHNEYXRhKCkge1xuICAvLyBHZXQgZmlsZSBuYW1lcyB1bmRlciAvcG9zdHNcbiAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBmaWxlTmFtZXMubWFwKChmaWxlTmFtZSkgPT4ge1xuICAgIC8vIFJlbW92ZSBcIi5tZFwiIGZyb20gZmlsZSBuYW1lIHRvIGdldCBpZFxuICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgXCJcIik7XG5cbiAgICAvLyBSZWFkIG1hcmtkb3duIGZpbGUgYXMgc3RyaW5nXG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGZpbGVOYW1lKTtcbiAgICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsIFwidXRmOFwiKTtcblxuICAgIC8vIFVzZSBncmF5LW1hdHRlciB0byBwYXJzZSB0aGUgcG9zdCBtZXRhZGF0YSBzZWN0aW9uXG4gICAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XG5cbiAgICAvLyBDb21iaW5lIHRoZSBkYXRhIHdpdGggdGhlIGlkXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgLi4ubWF0dGVyUmVzdWx0LmRhdGEsXG4gICAgfTtcbiAgfSk7XG4gIC8vIFNvcnQgcG9zdHMgYnkgZGF0ZVxuICByZXR1cm4gYWxsUG9zdHNEYXRhLnNvcnQoKHsgZGF0ZTogYiB9LCB7IGRhdGU6IGEgfSkgPT4ge1xuICAgIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdElkcygpIHtcbiAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xuXG4gIC8vIFJldHVybnMgYW4gYXJyYXkgdGhhdCBsb29rcyBsaWtlIHRoaXM6XG4gIC8vIFtcbiAgLy8gICB7XG4gIC8vICAgICBwYXJhbXM6IHtcbiAgLy8gICAgICAgaWQ6ICdzc2ctc3NyJ1xuICAvLyAgICAgfVxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgcGFyYW1zOiB7XG4gIC8vICAgICAgIGlkOiAncHJlLXJlbmRlcmluZydcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIF1cbiAgcmV0dXJuIGZpbGVOYW1lcy5tYXAoKGZpbGVOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgXCJcIiksXG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGEoaWQpIHtcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGAke2lkfS5tZGApO1xuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsIFwidXRmOFwiKTtcblxuICAvLyBVc2UgZ3JheS1tYXR0ZXIgdG8gcGFyc2UgdGhlIHBvc3QgbWV0YWRhdGEgc2VjdGlvblxuICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICAvLyBVc2UgcmVtYXJrIHRvIGNvbnZlcnQgbWFya2Rvd24gaW50byBIVE1MIHN0cmluZ1xuICBjb25zdCBwcm9jZXNzZWRDb250ZW50ID0gYXdhaXQgcmVtYXJrKClcbiAgICAudXNlKGh0bWwpXG4gICAgLnByb2Nlc3MobWF0dGVyUmVzdWx0LmNvbnRlbnQpO1xuICBjb25zdCBjb250ZW50SHRtbCA9IHByb2Nlc3NlZENvbnRlbnQudG9TdHJpbmcoKTtcblxuICAvLyBDb21iaW5lIHRoZSBkYXRhIHdpdGggdGhlIGlkIGFuZCBjb250ZW50SHRtbFxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGNvbnRlbnRIdG1sLFxuICAgIC4uLm1hdHRlclJlc3VsdC5kYXRhLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsIm1hdHRlciIsInJlbWFyayIsImh0bWwiLCJwb3N0c0RpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0U29ydGVkUG9zdHNEYXRhIiwiZmlsZU5hbWVzIiwicmVhZGRpclN5bmMiLCJhbGxQb3N0c0RhdGEiLCJtYXAiLCJmaWxlTmFtZSIsImlkIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwibWF0dGVyUmVzdWx0IiwiZGF0YSIsInNvcnQiLCJkYXRlIiwiYiIsImEiLCJnZXRBbGxQb3N0SWRzIiwicGFyYW1zIiwiZ2V0UG9zdERhdGEiLCJwcm9jZXNzZWRDb250ZW50IiwidXNlIiwiY29udGVudCIsImNvbnRlbnRIdG1sIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/posts */ \"./lib/posts.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_posts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function getStaticProps({ params  }) {\n    const postData = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPostData)(params.id);\n    return {\n        props: {\n            postData\n        }\n    };\n}\nasync function getStaticPaths() {\n    const paths = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__.getAllPostIds)();\n    return {\n        paths,\n        fallback: false\n    };\n}\nfunction Post({ postData  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: postData.title\n                }, void 0, false, {\n                    fileName: \"/Users/boris/Code/dyankov/pages/posts/[id].js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/boris/Code/dyankov/pages/posts/[id].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            postData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/boris/Code/dyankov/pages/posts/[id].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            postData.date,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/boris/Code/dyankov/pages/posts/[id].js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/boris/Code/dyankov/pages/posts/[id].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/boris/Code/dyankov/pages/posts/[id].js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkQ7QUFDaEM7QUFFdEIsZUFBZUcsY0FBYyxDQUFDLEVBQUVDLE1BQU0sR0FBRSxFQUFFO0lBQy9DLE1BQU1DLFFBQVEsR0FBRyxNQUFNSix1REFBVyxDQUFDRyxNQUFNLENBQUNFLEVBQUUsQ0FBQztJQUM3QyxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMRixRQUFRO1NBQ1Q7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVNLGVBQWVHLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxLQUFLLEdBQUdULHlEQUFhLEVBQUU7SUFDN0IsT0FBTztRQUNMUyxLQUFLO1FBQ0xDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7QUFDSixDQUFDO0FBRWMsU0FBU0MsSUFBSSxDQUFDLEVBQUVOLFFBQVEsR0FBRSxFQUFFO0lBQ3pDLHFCQUNFLDhEQUFDTyxLQUFHOzswQkFDRiw4REFBQ1Ysa0RBQUk7MEJBQ0gsNEVBQUNXLE9BQUs7OEJBQUVSLFFBQVEsQ0FBQ1EsS0FBSzs7Ozs7d0JBQVM7Ozs7O29CQUMxQjtZQUNOUixRQUFRLENBQUNRLEtBQUs7MEJBQ2YsOERBQUNDLElBQUU7Ozs7b0JBQUc7WUFDTFQsUUFBUSxDQUFDVSxJQUFJOzBCQUNkLDhEQUFDRCxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDRixLQUFHO2dCQUFDSSx1QkFBdUIsRUFBRTtvQkFBRUMsTUFBTSxFQUFFWixRQUFRLENBQUNhLFdBQVc7aUJBQUU7Ozs7O29CQUFJOzs7Ozs7WUFDOUQsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9baWRdLmpzPzc5NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tIFwiLi4vLi4vbGliL3Bvc3RzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdERhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0RGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3REYXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7cG9zdERhdGEudGl0bGV9XG4gICAgICA8YnIgLz5cbiAgICAgIHtwb3N0RGF0YS5kYXRlfVxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRBbGxQb3N0SWRzIiwiZ2V0UG9zdERhdGEiLCJIZWFkIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwb3N0RGF0YSIsImlkIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siLCJQb3N0IiwiZGl2IiwidGl0bGUiLCJiciIsImRhdGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnRIdG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();