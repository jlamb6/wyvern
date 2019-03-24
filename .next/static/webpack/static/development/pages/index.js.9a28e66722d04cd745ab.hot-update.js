webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/initial-display.js":
/*!***************************************!*\
  !*** ./components/initial-display.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Projects\\next-wyvern\\components\\initial-display.js";



var InitialDisplay =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InitialDisplay, _React$Component);

  function InitialDisplay() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InitialDisplay);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InitialDisplay).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InitialDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this);
      var options = {
        threshold: .5
      };
      var target = document.querySelector(".reveal.main");

      function callback(entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      }

      var observer = new IntersectionObserver(callback, options);
      observer.observe(target);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2734276067" + " " + "reveal main slide-left grow shadow pt-4 pr-4 pl-4 pb-5 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-2734276067" + " " + "reveal reveal-2 slide-top mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2734276067" + " " + "reveal reveal-3 slide-left body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.props.body), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2734276067",
        __self: this
      }, ".reveal.main.jsx-2734276067{color:white;height:auto;padding:10px 20px;margin:40px 0;background:linear-gradient(5deg,#004161fc ,#0f4769e8);}.reveal.body.jsx-2734276067{line-height:1.8rem;font-weight:100;font-size:1.15rem;}.expand-left.jsx-2734276067{-webkit-animation-name:expand-left-jsx-2734276067;animation-name:expand-left-jsx-2734276067;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}.reveal.jsx-2734276067 .reveal.jsx-2734276067{opacity:0;}.reveal.slide-top.jsx-2734276067{-webkit-animation-name:slide-top-jsx-2734276067;animation-name:slide-top-jsx-2734276067;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.reveal.slide-left.jsx-2734276067{-webkit-animation-name:slide-left-jsx-2734276067;animation-name:slide-left-jsx-2734276067;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.reveal.reveal-2.jsx-2734276067{-webkit-animation-delay:.8s;animation-delay:.8s;}.reveal.reveal-3.jsx-2734276067{-webkit-animation-delay:1.4s;animation-delay:1.4s;}@-webkit-keyframes slide-top-jsx-2734276067{0%{-webkit-transform:translate(0,-40px);-ms-transform:translate(0,-40px);transform:translate(0,-40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-top-jsx-2734276067{0%{-webkit-transform:translate(0,-40px);-ms-transform:translate(0,-40px);transform:translate(0,-40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes slide-bottom-jsx-2734276067{0%{-webkit-transform:translate(0,40px);-ms-transform:translate(0,40px);transform:translate(0,40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-bottom-jsx-2734276067{0%{-webkit-transform:translate(0,40px);-ms-transform:translate(0,40px);transform:translate(0,40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes slide-left-jsx-2734276067{0%{-webkit-transform:translate(-40px,0);-ms-transform:translate(-40px,0);transform:translate(-40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-left-jsx-2734276067{0%{-webkit-transform:translate(-40px,0);-ms-transform:translate(-40px,0);transform:translate(-40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes slide-right-jsx-2734276067{0%{-webkit-transform:translate(40px,0);-ms-transform:translate(40px,0);transform:translate(40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-right-jsx-2734276067{0%{-webkit-transform:translate(40px,0);-ms-transform:translate(40px,0);transform:translate(40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes expand-left-jsx-2734276067{0%{opacity:0;width:0px;}100%{opacity:1;width:100px;height:66px;}}@keyframes expand-left-jsx-2734276067{0%{opacity:0;width:0px;}100%{opacity:1;width:100px;height:66px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXGluaXRpYWwtZGlzcGxheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjRCLEFBR2lDLEFBT08sQUFLUSxBQUtqQixBQUdlLEFBS0MsQUFLTixBQUdDLEFBSWEsQUFJSixBQU1HLEFBSUgsQUFNSSxBQUlKLEFBTUcsQUFJSCxBQU1oQixBQUdDLFVBOURuQixBQTREa0IsQUFHRSxFQWhGSixPQU9JLENBdUVoQixFQUdnQixFQWhGRSxVQWlGbEIsQ0ExRWtCLE9BTkosTUE0QmxCLEVBR0EsR0F4QkEsR0FOMEQsK0JBc0N4QyxBQVVBLEFBVUEsQUFVQSxDQW5EUSxFQUtBLEVBYkEsSUFtQ1IsQUFvQkEsQ0F6QmQsQUFVQSxBQVVBLEFBVUEsRUFuQ2MsQUFvQkEsT0FUZCxBQW9CQSxHQTlCQSxBQW9CQSxDQXRESiw4QkFpQmlDLEVBS0EsRUFiTSw4REFTdkMsRUFLQSxjQWJBIiwiZmlsZSI6IkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXGluaXRpYWwtZGlzcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEluaXRpYWxEaXNwbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAuNVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXZlYWwubWFpblwiKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbGJhY2soZW50cmllcykge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2ZWFsIG1haW4gc2xpZGUtbGVmdCBncm93IHNoYWRvdyBwdC00IHByLTQgcGwtNCBwYi01IG1iLTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXZlYWwgcmV2ZWFsLTIgc2xpZGUtdG9wIG1iLTRcIj57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZlYWwgcmV2ZWFsLTMgc2xpZGUtbGVmdCBib2R5XCI+e3RoaXMucHJvcHMuYm9keX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5yZXZlYWwubWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDVkZWcsIzAwNDE2MWZjICwjMGY0NzY5ZTgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJldmVhbC5ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmV4cGFuZC1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZXhwYW5kLWxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXZlYWwgLnJldmVhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXZlYWwuc2xpZGUtdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmV2ZWFsLnNsaWRlLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmV2ZWFsLnJldmVhbC0yIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC44cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXZlYWwucmV2ZWFsLTMge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDQwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHB4LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGV4cGFuZC1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAxOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5pdGlhbERpc3BsYXk7Il19 */\n/*@ sourceURL=C:\\Projects\\next-wyvern\\components\\initial-display.js */"));
    }
  }]);

  return InitialDisplay;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (InitialDisplay);

/***/ })

})
//# sourceMappingURL=index.js.9a28e66722d04cd745ab.hot-update.js.map