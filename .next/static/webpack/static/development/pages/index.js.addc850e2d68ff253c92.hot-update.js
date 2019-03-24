webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/slide-right.js":
/*!***********************************!*\
  !*** ./components/slide-right.js ***!
  \***********************************/
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






var _jsxFileName = "C:\\Projects\\next-wyvern\\components\\slide-right.js";



var ContainerSlideLeft =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ContainerSlideLeft, _React$Component);

  function ContainerSlideLeft() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContainerSlideLeft);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ContainerSlideLeft).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ContainerSlideLeft, [{
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
        className: "jsx-2720487982" + " " + "shadow main slide-right pt-4 pr-4 pl-4 pb-5 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "jsx-2720487982" + " " + "reveal-2 slide-top mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2720487982" + " " + "reveal-3 slide-right body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.body), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2720487982",
        __self: this
      }, ".reveal.main.jsx-2720487982{color:white;height:auto;padding:10px 20px;margin:40px 0;background:linear-gradient(5deg,#004161fc ,#0f4769e8);}.reveal.body.jsx-2720487982{line-height:1.8rem;font-weight:100;font-size:1.15rem;}.expand-left.jsx-2720487982{-webkit-animation-name:expand-left-jsx-2720487982;animation-name:expand-left-jsx-2720487982;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}.reveal.jsx-2720487982 .reveal.jsx-2720487982{opacity:0;}.reveal.slide-top.jsx-2720487982{-webkit-animation-name:slide-top-jsx-2720487982;animation-name:slide-top-jsx-2720487982;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.reveal.slide-right.jsx-2720487982{-webkit-animation-name:slide-right-jsx-2720487982;animation-name:slide-right-jsx-2720487982;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.reveal.reveal-2.jsx-2720487982{-webkit-animation-delay:.8s;animation-delay:.8s;}.reveal.reveal-3.jsx-2720487982{-webkit-animation-delay:1.4s;animation-delay:1.4s;}@-webkit-keyframes slide-top-jsx-2720487982{0%{-webkit-transform:translate(0,-40px);-ms-transform:translate(0,-40px);transform:translate(0,-40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-top-jsx-2720487982{0%{-webkit-transform:translate(0,-40px);-ms-transform:translate(0,-40px);transform:translate(0,-40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes slide-bottom-jsx-2720487982{0%{-webkit-transform:translate(0,40px);-ms-transform:translate(0,40px);transform:translate(0,40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-bottom-jsx-2720487982{0%{-webkit-transform:translate(0,40px);-ms-transform:translate(0,40px);transform:translate(0,40px);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes slide-right-jsx-2720487982{0%{-webkit-transform:translate(40px,0);-ms-transform:translate(40px,0);transform:translate(40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@keyframes slide-right-jsx-2720487982{0%{-webkit-transform:translate(40px,0);-ms-transform:translate(40px,0);transform:translate(40px,0);opacity:0;}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);opacity:1;}}@-webkit-keyframes expand-left-jsx-2720487982{0%{opacity:0;width:0px;}100%{opacity:1;width:100px;height:66px;}}@keyframes expand-left-jsx-2720487982{0%{opacity:0;width:0px;}100%{opacity:1;width:100px;height:66px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXHNsaWRlLXJpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZ0MsQUFHcUMsQUFPTyxBQUtRLEFBS2pCLEFBR2UsQUFLRSxBQUtQLEFBR0MsQUFJYSxBQUlKLEFBTUcsQUFJSCxBQU1HLEFBSUgsQUFNaEIsQUFHQyxVQXBEbkIsQUFrRGtCLEFBR0UsRUF0RUosT0FPSSxDQTZEaEIsRUFHZ0IsRUF0RUUsVUF1RWxCLENBaEVrQixPQU5KLE1BNEJsQixFQUdBLEdBeEJBLEdBTjBELCtCQXNDeEMsQUFVQSxBQVVBLENBekNRLElBUkEsQUFhQSxJQXNCUixBQVVBLENBZmQsQUFVQSxBQVVBLEVBekJjLE9BV2QsQUFVQSxHQXBCQSxDQWxDSiw4QkFpQmlDLElBUk0sQUFhTiw4REFKakMsSUFLQSxZQWJBIiwiZmlsZSI6IkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXHNsaWRlLXJpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIENvbnRhaW5lclNsaWRlTGVmdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRocmVzaG9sZDogMVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5wcm9wcy5pZH1gKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbGJhY2soZW50cmllcykge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbnRyeS50YXJnZXQuY2hpbGRyZW4pLmZvckVhY2goY3VyID0+IGN1ci5jbGFzc0xpc3QuYWRkKCdyZXZlYWwnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IG1haW4gc2xpZGUtcmlnaHQgcHQtNCBwci00IHBsLTQgcGItNSBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmV2ZWFsLTIgc2xpZGUtdG9wIG1iLTRcIj57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2ZWFsLTMgc2xpZGUtcmlnaHQgYm9keVwiPnt0aGlzLnByb3BzLmJvZHl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwubWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNWRlZywjMDA0MTYxZmMgLCMwZjQ3NjllOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwuYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmV4cGFuZC1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGV4cGFuZC1sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJldmVhbCAucmV2ZWFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJldmVhbC5zbGlkZS10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJldmVhbC5zbGlkZS1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwucmV2ZWFsLTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC44cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJldmVhbC5yZXZlYWwtMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzbGlkZS10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBleHBhbmQtbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAxOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJTbGlkZUxlZnQ7Il19 */\n/*@ sourceURL=C:\\Projects\\next-wyvern\\components\\slide-right.js */"));
    }
  }]);

  return ContainerSlideLeft;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContainerSlideLeft);

/***/ })

})
//# sourceMappingURL=index.js.addc850e2d68ff253c92.hot-update.js.map