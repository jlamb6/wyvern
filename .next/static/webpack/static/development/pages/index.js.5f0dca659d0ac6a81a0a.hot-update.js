webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/card-animated.js":
/*!*************************************!*\
  !*** ./components/card-animated.js ***!
  \*************************************/
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






var _jsxFileName = "C:\\Projects\\next-wyvern\\components\\card-animated.js";



var AnimatedCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AnimatedCard, _React$Component);

  function AnimatedCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AnimatedCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AnimatedCard).call(this, props));
    _this.state = {
      orderNumber: order
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimatedCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = {
        threshold: .5
      };
      var target = document.querySelector("#".concat(this.props.id));

      if (this.state.orderNumber > 0) {
        var clName = "reveal-".concat(this.state.orderNumber);
        target.classList.add(clname);
      }

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
      var listItems = this.props.listItems.map(function (cur, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "list-group-item",
          key: "list-item-".concat(index),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, cur);
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: this.props.id,
        style: {
          marginBottom: '40px'
        },
        className: "jsx-4259376042" + " " + "shadow card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4259376042" + " " + "card-header text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "jsx-4259376042",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4259376042" + " " + "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-4259376042" + " " + "list-group list-group-flush",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, listItems)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4259376042",
        __self: this
      }, ".card.jsx-4259376042{opacity:0;}.reveal-one.jsx-4259376042{-webkit-animation-delay:.4s;animation-delay:.4s;}.reveal.jsx-4259376042{-webkit-animation-name:grow-jsx-4259376042;animation-name:grow-jsx-4259376042;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes grow-jsx-4259376042{0%{opacity:0;-webkit-transform:scale(.9,.9);-ms-transform:scale(.9,.9);transform:scale(.9,.9);}100%{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}@keyframes grow-jsx-4259376042{0%{opacity:0;-webkit-transform:scale(.9,.9);-ms-transform:scale(.9,.9);transform:scale(.9,.9);}100%{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXGNhcmQtYW5pbWF0ZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkM0QixBQUdtQyxBQUdVLEFBR0EsQUFRTixBQUlBLFVBakJsQixBQWNnQyxBQUlGLHNDQWY5Qiw4QkFHMkIsT0FhdkIsTUFKQSx5Q0FSc0Msb0ZBQ2Qsb0ZBQ0ssa0VBQ2pDIiwiZmlsZSI6IkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXGNhcmQtYW5pbWF0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2xhc3MgQW5pbWF0ZWRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtvcmRlck51bWJlcjogb3JkZXJ9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IC41XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnByb3BzLmlkfWApO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9yZGVyTnVtYmVyID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgY2xOYW1lID0gYHJldmVhbC0ke3RoaXMuc3RhdGUub3JkZXJOdW1iZXJ9YDtcclxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbGJhY2soZW50cmllcykge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbnRyeS50YXJnZXQuY2hpbGRyZW4pLmZvckVhY2goY3VyID0+IGN1ci5jbGFzc0xpc3QuYWRkKCdyZXZlYWwnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdEl0ZW1zID0gdGhpcy5wcm9wcy5saXN0SXRlbXMubWFwKChjdXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXtgbGlzdC1pdGVtLSR7aW5kZXh9YH0+e2N1cn08L2xpPjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJzaGFkb3cgY2FyZFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNDBweCd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJldmVhbC1vbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC40cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJldmVhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBncm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC44cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZ3JvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45LCAuOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZENhcmQ7Il19 */\n/*@ sourceURL=C:\\Projects\\next-wyvern\\components\\card-animated.js */"));
    }
  }]);

  return AnimatedCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimatedCard);

/***/ })

})
//# sourceMappingURL=index.js.5f0dca659d0ac6a81a0a.hot-update.js.map