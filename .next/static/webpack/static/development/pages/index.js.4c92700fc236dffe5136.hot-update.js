webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Projects\\next-wyvern\\components\\navbar.js";




var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).call(this, props));
    _this.state = {
      active: props.active
    };
    return _this;
  }
  /*
      componentDidMount() {
          let nav = document.querySelector("#main-nav");
          let navCopy = nav.cloneNode(true);
  
          navCopy.id = "nav-copy";
          navCopy.style.opacity = "0";
          navCopy.style.display = "none";
          nav.parentElement.insertBefore(navCopy, nav);
  
          let options = {
              rootMargin: '0px'
          }
  
          function callback(entries) {
              entries.forEach(entry => {
                  console.log(entry);
                  if(entry.isIntersecting && window.scrollY === 0) {
                      console.log(window.scrollY);
                      this.classList.remove('fixed-top');
                      this.classList.remove('navbar-dark');
                      this.classList.remove('bg-dark');
                  }
                  else if (!entry.isIntersecting) {
                      navCopy.style.display = "";
                      this.classList.add('fixed-top');
                      this.classList.add('navbar-dark');
                      this.classList.add('bg-dark');
                  }
              }, this);
          }
  
          let observer = new IntersectionObserver(callback.bind(nav), options);
          observer.observe(nav);
      }
  */


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        id: "main-nav",
        className: "jsx-2055435724" + " " + "navbar navbar-expand-lg navbar-dark bg-dark sticky-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-2055435724" + " " + "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Wyvern Realty Group")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        className: "jsx-2055435724" + " " + "navbar-toggler",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-2055435724" + " " + "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "navbarSupportedContent",
        className: "jsx-2055435724" + " " + "collapse navbar-collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-2055435724" + " " + "navbar-nav ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-2055435724" + " " + "nav-item active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-2055435724" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Home ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-2055435724" + " " + "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "(current)")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-2055435724" + " " + "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-2055435724" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-2055435724" + " " + "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/our-approach",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-2055435724" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Our Approach"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-2055435724" + " " + "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/offers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-2055435724" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Offers"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-2055435724" + " " + "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-2055435724" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Contact"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2055435724",
        __self: this
      }, ".active.jsx-2055435724{border-bottom:2px solid #ffffffbf;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcbmV4dC13eXZlcm5cXGNvbXBvbmVudHNcXG5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXdCLEFBR3VELGtDQUN0QyIsImZpbGUiOiJDOlxcUHJvamVjdHNcXG5leHQtd3l2ZXJuXFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGFjdGl2ZTogcHJvcHMuYWN0aXZlIH07XHJcbiAgICB9XHJcbi8qXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLW5hdlwiKTtcclxuICAgICAgICBsZXQgbmF2Q29weSA9IG5hdi5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgICAgIG5hdkNvcHkuaWQgPSBcIm5hdi1jb3B5XCI7XHJcbiAgICAgICAgbmF2Q29weS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgbmF2Q29weS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgbmF2LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5hdkNvcHksIG5hdik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICByb290TWFyZ2luOiAnMHB4J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbGJhY2soZW50cmllcykge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgd2luZG93LnNjcm9sbFkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZC10b3AnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1kYXJrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdiZy1kYXJrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZDb3B5LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZml4ZWQtdG9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCduYXZiYXItZGFyaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYmctZGFyaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjay5iaW5kKG5hdiksIG9wdGlvbnMpO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUobmF2KTtcclxuICAgIH1cclxuKi9cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFyayBzdGlja3ktdG9wXCIgaWQ9XCJtYWluLW5hdlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPld5dmVybiBSZWFsdHkgR3JvdXA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vdXItYXBwcm9hY2hcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk91ciBBcHByb2FjaDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vZmZlcnNcIj48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk9mZmVyczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Db250YWN0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmYmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXX0= */\n/*@ sourceURL=C:\\Projects\\next-wyvern\\components\\navbar.js */"));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.4c92700fc236dffe5136.hot-update.js.map