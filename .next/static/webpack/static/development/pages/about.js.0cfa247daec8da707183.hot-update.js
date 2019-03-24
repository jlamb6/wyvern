webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/card-dark-animated.js":
/*!******************************************!*\
  !*** ./components/card-dark-animated.js ***!
  \******************************************/
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






var _jsxFileName = "C:\\Projects\\next-wyvern\\components\\card-dark-animated.js";



var AnimatedCardDark =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AnimatedCardDark, _React$Component);

  function AnimatedCardDark(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AnimatedCardDark);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AnimatedCardDark).call(this, props));
    _this.state = {
      orderNumber: props.order
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimatedCardDark, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = {
        threshold: .5
      };
      var target = document.querySelector("#".concat(this.props.id));

      if (this.state.orderNumber > 0) {
        var clName = "reveal-".concat(this.state.orderNumber);
        target.classList.add(clName);
      }

      function callback(entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");

            _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(entry.target.children).forEach(function (cur) {
              return cur.classList.add('reveal');
            });

            observer.unobserve(entry.target);
            observer.disconnect();
          }
        });
      }

      var observer = new IntersectionObserver(callback, options);
      observer.observe(target);
    }
  }, {
    key: "render",
    value: function render() {
      var listItems = this.props.listItems.map(function (cur, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "list-group-item bg-dark",
          key: "list-item-".concat(index),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, cur);
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: this.props.id,
        style: {
          marginBottom: '40px'
        },
        className: "jsx-3393737535" + " " + "shadow card bg-dark text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          borderBottomColor: '#ffffff20'
        },
        className: "jsx-3393737535" + " " + "card-header text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "jsx-3393737535",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3393737535" + " " + "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-3393737535" + " " + "list-group list-group-flush",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, listItems)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3393737535",
        __self: this
      }, ".list-group-item.bg-dark.jsx-3393737535{border-color:#ffffff20;}.card.jsx-3393737535{opacity:0;}.reveal-one.jsx-3393737535{-webkit-animation-delay:1s;animation-delay:1s;}.reveal-two.jsx-3393737535{-webkit-animation-delay:1.6s;animation-delay:1.6s;}.reveal-three.jsx-3393737535{-webkit-animation-delay:2.4s;animation-delay:2.4s;}.reveal.jsx-3393737535{-webkit-animation-name:grow-jsx-3393737535;animation-name:grow-jsx-3393737535;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes grow-jsx-3393737535{0%{opacity:0;-webkit-transform:scale(.9,.9);-ms-transform:scale(.9,.9);transform:scale(.9,.9);}100%{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}@keyframes grow-jsx-3393737535{0%{opacity:0;-webkit-transform:scale(.9,.9);-ms-transform:scale(.9,.9);transform:scale(.9,.9);}100%{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXGNhcmQtZGFyay1hbmltYXRlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QzRCLEFBR2dELEFBR2IsQUFHUyxBQUdFLEFBR0EsQUFHRCxBQVFOLEFBSUEsVUF2QmxCLEFBb0JnQyxBQUlGLGFBM0I5Qix1QkFNQSxJQUdBLEFBR0EsNEJBRzJCLE9BYXZCLE1BSkEseUNBUnNDLG9GQUNkLG9GQUNLLGtFQUNqQyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXG5leHQtd3l2ZXJuXFxjb21wb25lbnRzXFxjYXJkLWRhcmstYW5pbWF0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2xhc3MgQW5pbWF0ZWRDYXJkRGFyayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7b3JkZXJOdW1iZXI6IHByb3BzLm9yZGVyfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAuNVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5wcm9wcy5pZH1gKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcmRlck51bWJlciA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGNsTmFtZSA9IGByZXZlYWwtJHt0aGlzLnN0YXRlLm9yZGVyTnVtYmVyfWA7XHJcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGVudHJpZXMpIHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZW50cnkudGFyZ2V0LmNoaWxkcmVuKS5mb3JFYWNoKGN1ciA9PiBjdXIuY2xhc3NMaXN0LmFkZCgncmV2ZWFsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBsaXN0SXRlbXMgPSB0aGlzLnByb3BzLmxpc3RJdGVtcy5tYXAoKGN1ciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYmctZGFya1wiIGtleT17YGxpc3QtaXRlbS0ke2luZGV4fWB9PntjdXJ9PC9saT47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwic2hhZG93IGNhcmQgYmctZGFyayB0ZXh0LXdoaXRlXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc0MHB4J319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7Ym9yZGVyQm90dG9tQ29sb3I6ICcjZmZmZmZmMjAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtLmJnLWRhcmsgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmMjA7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwtb25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJldmVhbC10d28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwtdGhyZWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZ3JvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGdyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSwgLjkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRDYXJkRGFyazsiXX0= */\n/*@ sourceURL=C:\\Projects\\next-wyvern\\components\\card-dark-animated.js */"));
    }
  }]);

  return AnimatedCardDark;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimatedCardDark);

/***/ })

})
//# sourceMappingURL=about.js.0cfa247daec8da707183.hot-update.js.map