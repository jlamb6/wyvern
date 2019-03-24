webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/initial-display.js":
/*!***************************************!*\
  !*** ./components/initial-display.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\Projects\\next-wyvern\\components\\initial-display.js";



var InitialDisplay =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InitialDisplay, _React$Component);

  function InitialDisplay() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InitialDisplay);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(InitialDisplay).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InitialDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this);
      var options = {
        threshold: 1
      };
      var target = document.querySelector("#".concat(this.props.id));

      function callback(entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");

            _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(entry.target.children).forEach(function (cur) {
              return cur.classList.add('reveal');
            });
          }
        });
      }

      var observer = new IntersectionObserver(callback, options);
      observer.observe(target);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: this.props.id,
        className: "jsx-2912394380" + " " + "main slide-left shadow pt-4 pr-4 pl-4 pb-5 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "jsx-2912394380" + " " + "reveal-2 slide-top mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2912394380" + " " + "reveal-3 slide-left body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, this.props.body), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2912394380",
        __self: this
      }, ".reveal.main.jsx-2912394380{color:white;height:auto;padding:10px 20px;margin:40px 0;background:linear-gradient(5deg,#004161fc ,#0f4769e8);}.reveal.body.jsx-2912394380{line-height:1.8rem;font-weight:100;font-size:1.15rem;}.reveal.jsx-2912394380,div.jsx-2912394380,h3.jsx-2912394380{opacity:0;}.reveal.slide-top.jsx-2912394380{-webkit-animation-name:slide-top-jsx-2912394380;animation-name:slide-top-jsx-2912394380;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.reveal.slide-left.jsx-2912394380{-webkit-animation-name:slide-left-jsx-2912394380;animation-name:slide-left-jsx-2912394380;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.reveal.reveal-2.jsx-2912394380{-webkit-animation-delay:.8s;animation-delay:.8s;}.reveal.reveal-3.jsx-2912394380{-webkit-animation-delay:1.4s;animation-delay:1.4s;}@-webkit-keyframes slide-top-jsx-2912394380{0%{-webkit-transform:translate(0,-40px);-ms-transform:translate(0,-40px);transform:translate(0,-40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-top-jsx-2912394380{0%{-webkit-transform:translate(0,-40px);-ms-transform:translate(0,-40px);transform:translate(0,-40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes slide-bottom-jsx-2912394380{0%{-webkit-transform:translate(0,40px);-ms-transform:translate(0,40px);transform:translate(0,40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-bottom-jsx-2912394380{0%{-webkit-transform:translate(0,40px);-ms-transform:translate(0,40px);transform:translate(0,40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes slide-left-jsx-2912394380{0%{-webkit-transform:translate(-40px,0);-ms-transform:translate(-40px,0);transform:translate(-40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-left-jsx-2912394380{0%{-webkit-transform:translate(-40px,0);-ms-transform:translate(-40px,0);transform:translate(-40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes slide-right-jsx-2912394380{0%{-webkit-transform:translate(40px,0);-ms-transform:translate(40px,0);transform:translate(40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-right-jsx-2912394380{0%{-webkit-transform:translate(40px,0);-ms-transform:translate(40px,0);transform:translate(40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes expand-left-jsx-2912394380{0%{opacity:0;width:0px;}100%{opacity:1;width:100px;height:66px;}}@keyframes expand-left-jsx-2912394380{0%{opacity:0;width:0px;}100%{opacity:1;width:100px;height:66px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXGluaXRpYWwtZGlzcGxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCLEFBR2lDLEFBT08sQUFLVCxBQUdlLEFBS0MsQUFLTixBQUdDLEFBSWEsQUFJSixBQU1HLEFBSUgsQUFNSSxBQUlKLEFBTUcsQUFJSCxBQU1oQixBQUdDLFVBOURuQixBQTREa0IsQUFHRSxFQTNFSixPQU9JLENBa0VoQixFQUdnQixFQTNFRSxVQTRFbEIsQ0FyRWtCLE9BTkosTUF1QmxCLEVBR0EsR0FuQkEsR0FOMEQsK0JBaUN4QyxBQVVBLEFBVUEsQUFVQSxDQW5EUSxFQUtBLE1Bc0JSLEFBb0JBLENBekJkLEFBVUEsQUFVQSxBQVVBLEVBbkNjLEFBb0JBLE9BVGQsQUFvQkEsR0E5QkEsQUFvQkEsQ0FqREosOEJBWWlDLEVBS0EsZ0VBSmpDLEVBS0EiLCJmaWxlIjoiQzpcXFByb2plY3RzXFxuZXh0LXd5dmVyblxcY29tcG9uZW50c1xcaW5pdGlhbC1kaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5pdGlhbERpc3BsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDFcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMucHJvcHMuaWR9YCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGVudHJpZXMpIHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZW50cnkudGFyZ2V0LmNoaWxkcmVuKS5mb3JFYWNoKGN1ciA9PiBjdXIuY2xhc3NMaXN0LmFkZCgncmV2ZWFsJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJtYWluIHNsaWRlLWxlZnQgc2hhZG93IHB0LTQgcHItNCBwbC00IHBiLTUgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJldmVhbC0yIHNsaWRlLXRvcCBtYi00XCI+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2ZWFsLTMgc2xpZGUtbGVmdCBib2R5XCI+e3RoaXMucHJvcHMuYm9keX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5yZXZlYWwubWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDVkZWcsIzAwNDE2MWZjICwjMGY0NzY5ZTgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJldmVhbC5ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJldmVhbCwgZGl2LCBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXZlYWwuc2xpZGUtdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmV2ZWFsLnNsaWRlLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmV2ZWFsLnJldmVhbC0yIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC44cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXZlYWwucmV2ZWFsLTMge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDQwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHB4LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGV4cGFuZC1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAxOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5pdGlhbERpc3BsYXk7Il19 */\n/*@ sourceURL=C:\\Projects\\next-wyvern\\components\\initial-display.js */"));
    }
  }]);

  return InitialDisplay;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (InitialDisplay);

/***/ })

})
//# sourceMappingURL=index.js.1cefa089238ce6f3cb16.hot-update.js.map