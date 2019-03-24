webpackHotUpdate("static\\development\\pages\\index.js",{

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
        className: "jsx-4059561101" + " " + "shadow card bg-dark text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4059561101" + " " + "card-header text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "jsx-4059561101",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4059561101" + " " + "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-4059561101" + " " + "list-group list-group-flush",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, listItems)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4059561101",
        __self: this
      }, ".list-group-item.bg-dark.jsx-4059561101{border-color:#ffffff20;}.card.jsx-4059561101{opacity:0;}.reveal-one.jsx-4059561101{-webkit-animation-delay:.4s;animation-delay:.4s;}.reveal-two.jsx-4059561101{-webkit-animation-delay:.8s;animation-delay:.8s;}.reveal-three.jsx-4059561101{-webkit-animation-delay:1.2s;animation-delay:1.2s;}.reveal.jsx-4059561101{-webkit-animation-name:grow-jsx-4059561101;animation-name:grow-jsx-4059561101;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes grow-jsx-4059561101{0%{opacity:0;-webkit-transform:scale(.9,.9);-ms-transform:scale(.9,.9);transform:scale(.9,.9);}100%{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}@keyframes grow-jsx-4059561101{0%{opacity:0;-webkit-transform:scale(.9,.9);-ms-transform:scale(.9,.9);transform:scale(.9,.9);}100%{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXGNhcmQtZGFyay1hbmltYXRlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQzRCLEFBR2dELEFBR2IsQUFHVSxBQUdBLEFBR0MsQUFHRCxBQVFOLEFBSUEsVUF2QmxCLEFBb0JnQyxBQUlGLGFBM0I5Qix5QkFNQSxBQUdBLEVBR0EsNEJBRzJCLE9BYXZCLE1BSkEseUNBUnNDLG9GQUNkLG9GQUNLLGtFQUNqQyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXG5leHQtd3l2ZXJuXFxjb21wb25lbnRzXFxjYXJkLWRhcmstYW5pbWF0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2xhc3MgQW5pbWF0ZWRDYXJkRGFyayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7b3JkZXJOdW1iZXI6IHByb3BzLm9yZGVyfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAuNVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5wcm9wcy5pZH1gKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcmRlck51bWJlciA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGNsTmFtZSA9IGByZXZlYWwtJHt0aGlzLnN0YXRlLm9yZGVyTnVtYmVyfWA7XHJcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGVudHJpZXMpIHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZW50cnkudGFyZ2V0LmNoaWxkcmVuKS5mb3JFYWNoKGN1ciA9PiBjdXIuY2xhc3NMaXN0LmFkZCgncmV2ZWFsJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtcyA9IHRoaXMucHJvcHMubGlzdEl0ZW1zLm1hcCgoY3VyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBiZy1kYXJrXCIga2V5PXtgbGlzdC1pdGVtLSR7aW5kZXh9YH0+e2N1cn08L2xpPjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJzaGFkb3cgY2FyZCBiZy1kYXJrIHRleHQtd2hpdGVcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogJzQwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtLmJnLWRhcmsgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmMjA7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwtb25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwtdHdvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwtdGhyZWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXZlYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZ3JvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGdyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSwgLjkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRDYXJkRGFyazsiXX0= */\n/*@ sourceURL=C:\\Projects\\next-wyvern\\components\\card-dark-animated.js */"));
    }
  }]);

  return AnimatedCardDark;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimatedCardDark);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_initial_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/initial-display */ "./components/initial-display.js");
/* harmony import */ var _components_slide_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/slide-right */ "./components/slide-right.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_jumbotron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/jumbotron */ "./components/jumbotron.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/page */ "./components/page.js");
/* harmony import */ var _components_card_animated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/card-animated */ "./components/card-animated.js");
/* harmony import */ var _components_card_dark_animated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/card-dark-animated */ "./components/card-dark-animated.js");
var _jsxFileName = "C:\\Projects\\next-wyvern\\pages\\index.js";


//import Link from 'next/link';









/**
 * everything after LAYOUT are the children of the components
 */

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    curPage: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Wyvern Realty Group"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
    integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col md-ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_jumbotron__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: 'Find your dream home',
    lead: 'We are here to help you acheive your dreams',
    body: 'Contact us to start the search for your dream home today! We will be right by your side throught the whole buying process.',
    btnTitle: 'Contact Us Today!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper",
    style: {
      background: 'url(https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
      paddingBottom: '80px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "display-4 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Our Approach"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "font-weight-light font-italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "A New Home Listing Experience"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    style: {
      marginTop: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-12 col-lg-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_initial_display__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: 'msg-one',
    title: 'A Different Real Estate Experience',
    body: 'Here at Wyvern Real Estate Group we strive to offer you a Real Estate experience like no other. Our unique approach  to handling payment and service allows you to get what you want without paying us a traditional commission, and therefore saving you money!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-12 col-lg-8 ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_slide_right__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "msg-two",
    title: 'Times Have Changed',
    body: 'Gone are the days when Real Estate Agents would have to search through large books of listings to find you a home or go to great lengths to get your home shown. Just like in many other industries, the Internet has made almost every aspect of a Real Estate Agents job easier. From getting your home noticed, to managing documents, almost every step can be be done from the Agents home. Here at Wyvern Real Estate Group we saw how much easier our job has become, and because of that we decided to create a better way to do Real Estate, a way that saves you money!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper",
    style: {
      backgroundColor: 'white',
      paddingBottom: '80px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "display-4 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Our Services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "font-weight-light font-italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Comprehensive Home Buying And Selling Operations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    style: {
      marginTop: '60px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-5 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "shadow card bg-dark text-white",
    style: {
      marginBottom: '40px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-header text-center",
    style: {
      borderBottomColor: '#ffffff20'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Selling")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2293250193" + " " + "list-group list-group-flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2293250193",
    __self: this
  }, ".list-group-item.bg-dark.jsx-2293250193{border-color:#ffffff20;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRm9ELEFBQ2tELHVCQUFDIiwiZmlsZSI6IkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBJbml0aWFsRGlzcGxheSBmcm9tICcuLi9jb21wb25lbnRzL2luaXRpYWwtZGlzcGxheSc7XHJcbmltcG9ydCBTbGlkZVJpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGUtcmlnaHQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gJy4uL2NvbXBvbmVudHMvanVtYm90cm9uJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcclxuaW1wb3J0IEFuaW1hdGVkQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkLWFuaW1hdGVkXCI7XHJcbmltcG9ydCBBbmltYXRlZENhcmREYXJrIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQtZGFyay1hbmltYXRlZFwiO1xyXG5cclxuLyoqXHJcbiAqIGV2ZXJ5dGhpbmcgYWZ0ZXIgTEFZT1VUIGFyZSB0aGUgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudHNcclxuICovXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICAgIDxMYXlvdXQgY3VyUGFnZT0nSG9tZSc+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiPjwvbWV0YT5cclxuICAgICAgICAgICAgPHRpdGxlPld5dmVybiBSZWFsdHkgR3JvdXA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMS9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC01MG9CVUhFbXZwUSsxbFc0eTU3UFRGbWhDYVhwME1MNWQ2ME0xTTd1SDIrbnFVaXZ6SWViaG5kT0pLMjhhbnZmXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWQtbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPEp1bWJvdHJvbiBcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0ZpbmQgeW91ciBkcmVhbSBob21lJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgbGVhZD17J1dlIGFyZSBoZXJlIHRvIGhlbHAgeW91IGFjaGVpdmUgeW91ciBkcmVhbXMnfSBcclxuICAgICAgICAgICAgICAgICAgICBib2R5PXsnQ29udGFjdCB1cyB0byBzdGFydCB0aGUgc2VhcmNoIGZvciB5b3VyIGRyZWFtIGhvbWUgdG9kYXkhIFdlIHdpbGwgYmUgcmlnaHQgYnkgeW91ciBzaWRlIHRocm91Z2h0IHRoZSB3aG9sZSBidXlpbmcgcHJvY2Vzcy4nfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ0blRpdGxlPXsnQ29udGFjdCBVcyBUb2RheSEnfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhZ2U+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTYzMDc2NTM3ODAtNDJlZTc3N2Q0ODMzP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDUwJnE9ODApJywgXHJcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICc4MHB4JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogJ2ZpeGVkJ1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgbXQtNVwiPk91ciBBcHByb2FjaDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1saWdodCBmb250LWl0YWxpY1wiPkEgTmV3IEhvbWUgTGlzdGluZyBFeHBlcmllbmNlPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsRGlzcGxheSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsnbXNnLW9uZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0EgRGlmZmVyZW50IFJlYWwgRXN0YXRlIEV4cGVyaWVuY2UnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9eydIZXJlIGF0IFd5dmVybiBSZWFsIEVzdGF0ZSBHcm91cCB3ZSBzdHJpdmUgdG8gb2ZmZXIgeW91IGEgUmVhbCBFc3RhdGUgZXhwZXJpZW5jZSBsaWtlIG5vIG90aGVyLiBPdXIgdW5pcXVlIGFwcHJvYWNoICB0byBoYW5kbGluZyBwYXltZW50IGFuZCBzZXJ2aWNlIGFsbG93cyB5b3UgdG8gZ2V0IHdoYXQgeW91IHdhbnQgd2l0aG91dCBwYXlpbmcgdXMgYSB0cmFkaXRpb25hbCBjb21taXNzaW9uLCBhbmQgdGhlcmVmb3JlIHNhdmluZyB5b3UgbW9uZXkhJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTggbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVSaWdodCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXNnLXR3b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1RpbWVzIEhhdmUgQ2hhbmdlZCd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keT17J0dvbmUgYXJlIHRoZSBkYXlzIHdoZW4gUmVhbCBFc3RhdGUgQWdlbnRzIHdvdWxkIGhhdmUgdG8gc2VhcmNoIHRocm91Z2ggbGFyZ2UgYm9va3Mgb2YgbGlzdGluZ3MgdG8gZmluZCB5b3UgYSBob21lIG9yIGdvIHRvIGdyZWF0IGxlbmd0aHMgdG8gZ2V0IHlvdXIgaG9tZSBzaG93bi4gSnVzdCBsaWtlIGluIG1hbnkgb3RoZXIgaW5kdXN0cmllcywgdGhlIEludGVybmV0IGhhcyBtYWRlIGFsbW9zdCBldmVyeSBhc3BlY3Qgb2YgYSBSZWFsIEVzdGF0ZSBBZ2VudHMgam9iIGVhc2llci4gRnJvbSBnZXR0aW5nIHlvdXIgaG9tZSBub3RpY2VkLCB0byBtYW5hZ2luZyBkb2N1bWVudHMsIGFsbW9zdCBldmVyeSBzdGVwIGNhbiBiZSBiZSBkb25lIGZyb20gdGhlIEFnZW50cyBob21lLiBIZXJlIGF0IFd5dmVybiBSZWFsIEVzdGF0ZSBHcm91cCB3ZSBzYXcgaG93IG11Y2ggZWFzaWVyIG91ciBqb2IgaGFzIGJlY29tZSwgYW5kIGJlY2F1c2Ugb2YgdGhhdCB3ZSBkZWNpZGVkIHRvIGNyZWF0ZSBhIGJldHRlciB3YXkgdG8gZG8gUmVhbCBFc3RhdGUsIGEgd2F5IHRoYXQgc2F2ZXMgeW91IG1vbmV5ISd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmdCb3R0b206ICc4MHB4J319PlxyXG4gICAgICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgbXQtNVwiPk91ciBTZXJ2aWNlczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1saWdodCBmb250LWl0YWxpY1wiPkNvbXByZWhlbnNpdmUgSG9tZSBCdXlpbmcgQW5kIFNlbGxpbmcgT3BlcmF0aW9uczwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnNjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyBjYXJkIGJnLWRhcmsgdGV4dC13aGl0ZVwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIHRleHQtY2VudGVyXCIgc3R5bGU9e3tib3JkZXJCb3R0b21Db2xvcjogJyNmZmZmZmYyMCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNlbGxpbmc8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2AubGlzdC1ncm91cC1pdGVtLmJnLWRhcmsgeyBib3JkZXItY29sb3I6ICNmZmZmZmYyMDsgfWB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYmctZGFya1wiPkRvY3VtZW50IE1hbmFnZW1lbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBiZy1kYXJrXCI+TWFya2V0IEFuYWx5c2lzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYmctZGFya1wiPk1MUyBMaXN0aW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYmctZGFya1wiPk9wZW4gSG91c2VzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gYmctZGFya1wiPkFkdmVydGlzaW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkQ2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17J2NhcmQtdHdvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0J1eWluZyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1zPXtbJ0RvY3VtZW50IE1hbmFnZW1lbnQnLCAnSG91c2UgU2VhcmNoZXMnLCAnQ29uc3VsdGluZyBIb3VycycsICdIb21lIFNob3dpbmdzJywgJ0FjY2VzcyB0byBMZW5kZXJzJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkQ2FyZERhcmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17J2NhcmQtb25lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnU2VsbGluZyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtcz17WydEb2N1bWVudCBNYW5hZ2VtZW50JywgJ01hcmtldCBBbmFseXNpcycsICdNTFMgTGlzdGluZycsICdPcGVuIEhvdXNlcycsICdBZHZlcnRpc2luZyddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3VybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNDUyNzQ4OTk4Ni0zZTMzOTRjYTU2OWM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwNTAmcT04MCknLCBcclxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzgwcHgnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRBdHRhY2htZW50OiAnZml4ZWQnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20nXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=C:\\Projects\\next-wyvern\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2293250193" + " " + "list-group-item bg-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Document Management"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2293250193" + " " + "list-group-item bg-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Market Analysis"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2293250193" + " " + "list-group-item bg-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "MLS Listing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2293250193" + " " + "list-group-item bg-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Open Houses"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2293250193" + " " + "list-group-item bg-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Advertising"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-5 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_card_animated__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: 'card-two',
    title: 'Buying',
    order: 1,
    listItems: ['Document Management', 'House Searches', 'Consulting Hours', 'Home Showings', 'Access to Lenders'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_card_dark_animated__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: 'card-one',
    title: 'Selling',
    order: 0,
    listItems: ['Document Management', 'Market Analysis', 'MLS Listing', 'Open Houses', 'Advertising'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper",
    style: {
      background: 'url(https://images.unsplash.com/photo-1534527489986-3e3394ca569c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
      paddingBottom: '80px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'bottom'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_page__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.63cf940d2dedb2c03ef1.hot-update.js.map