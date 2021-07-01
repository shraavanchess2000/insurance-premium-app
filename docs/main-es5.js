function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center-text\">\r\n  <h1>Welcome to the Insurance Premium Application!</h1>\r\n  <h5 class=\"padding-top-3-percent\">View premiums of an existing employee by clicking on \"View Employee Premiums\".</h5>\r\n  <h5 class=\"padding-top-1-percent\">Preview premiums of a potential employee by clicking on \"Preview Premiums\".</h5>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Insurance Premium Application</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/view-employee-premiums']\">View Employee Premiums</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/preview-premiums']\">Preview Premiums</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/preview-premiums/preview-premiums.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preview-premiums/preview-premiums.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreviewPremiumsPreviewPremiumsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center-text padding-bottom-1-percent\">\r\n  <h1 id=\"tableLabel\">Preview Premiums</h1>\r\n\r\n  <p>Preview premiums and resulting net pay of a potential employee.</p>\r\n\r\n  <form #idForm=\"ngForm\" (ngSubmit)=\"onSubmit(); idForm.reset()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"employeeNameInput\" class=\"row justify-content-center padding-top-1-percent\">Enter Name of Potential Employee.</label>\r\n      <div class=\"row justify-content-center\">\r\n        <input type=\"text\" id=\"employeeNameInput\" placeholder=\"Employee Name\" size=\"50\" required [(ngModel)]=\"employeeNameInput\" name=\"employeeNameInput\">\r\n      </div>\r\n      <label for=\"numberOfDependentsWithNamesStartingWithA\" class=\"row justify-content-center padding-top-3-percent\">Enter Number of Dependents Whose Names Start With 'A'.</label>\r\n      <div class=\"row justify-content-center\">\r\n        <input type=\"text\" id=\"numberOfDependentsWithNamesStartingWithA\" placeholder=\"Number of Dependents Whose Names Start With 'A'\" size=\"50\" pattern=\"^[1-9]+[0-9]*$\" required [(ngModel)]=\"numberOfDependentsWithNamesStartingWithA\" name=\"numberOfDependentsWithNamesStartingWithA\">\r\n      </div>\r\n      <label for=\"numberOfOtherDependents\" class=\"row justify-content-center padding-top-3-percent\">Enter Number of Other Dependents.</label>\r\n      <div class=\"row justify-content-center\">\r\n        <input type=\"text\" id=\"numberOfOtherDependents\" placeholder=\"Number of Other Dependents\" size=\"50\" pattern=\"^[1-9]+[0-9]*$\" required [(ngModel)]=\"numberOfOtherDependents\" name=\"numberOfOtherDependents\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center padding-bottom-1-percent\">\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!idForm.form.valid\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<p *ngIf=\"loadingMessage\"><em>{{ loadingMessage }}</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"premiumsCost && netPay\">\r\n  <thead>\r\n    <tr>\r\n      <th>Name of Employee</th>\r\n      <th>Cost of Premiums per Year</th>\r\n      <th>Net Pay per Year</th>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>{{ employeeName }}</td>\r\n      <td>{{ premiumsCost }}</td>\r\n      <td>{{ netPay }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-employee-premiums/view-employee-premiums.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-employee-premiums/view-employee-premiums.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewEmployeePremiumsViewEmployeePremiumsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center-text padding-bottom-1-percent\">\r\n  <h1 id=\"tableLabel\">View Employee Premiums</h1>\r\n\r\n  <p>View premiums and resulting net pay of an existing employee.</p>\r\n\r\n  <form #idForm=\"ngForm\" (ngSubmit)=\"onSubmit(); idForm.reset()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"employeeId\" class=\"row justify-content-center\">Enter Employee ID.</label>\r\n      <div class=\"row justify-content-center\">\r\n        <input type=\"text\" id=\"employeeId\" aria-describedby=\"employeeIdNote\" placeholder=\"Employee ID\" size=\"36\" pattern=\"^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$\" required [(ngModel)]=\"employeeId\" name=\"employeeId\">\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <small id=\"employeeIdNote\" class=\"form-text text-muted\">Employee ID must be a valid GUID.</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center padding-bottom-1-percent\">\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!idForm.form.valid\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<p *ngIf=\"loadingMessage\"><em>{{ loadingMessage }}</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"employee\">\r\n  <thead>\r\n    <tr>\r\n      <th>Name of Employee</th>\r\n      <th>Cost of Premiums per Year</th>\r\n      <th>Net Pay per Year</th>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>{{ employee.firstName }} {{ employee.middleName }} {{ employee.lastName }}</td>\r\n      <td>{{ premiumsCost }}</td>\r\n      <td>{{ netPay }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"employeeNotFoundMessage\">\r\n  <tbody>\r\n    <tr>\r\n      <td>{{ employeeNotFoundMessage }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _view_employee_premiums_view_employee_premiums_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./view-employee-premiums/view-employee-premiums.component */
    "./src/app/view-employee-premiums/view-employee-premiums.component.ts");
    /* harmony import */


    var _preview_premiums_preview_premiums_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./preview-premiums/preview-premiums.component */
    "./src/app/preview-premiums/preview-premiums.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _view_employee_premiums_view_employee_premiums_component__WEBPACK_IMPORTED_MODULE_8__["ViewEmployeePremiumsComponent"], _preview_premiums_preview_premiums_component__WEBPACK_IMPORTED_MODULE_9__["PreviewPremiumsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        pathMatch: 'full'
      }, {
        path: 'preview-premiums',
        component: _preview_premiums_preview_premiums_component__WEBPACK_IMPORTED_MODULE_9__["PreviewPremiumsComponent"]
      }, {
        path: 'view-employee-premiums',
        component: _view_employee_premiums_view_employee_premiums_component__WEBPACK_IMPORTED_MODULE_8__["ViewEmployeePremiumsComponent"]
      }])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);
    };

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.css":
  /*!*************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavMenuComponent = /*#__PURE__*/function () {
      function NavMenuComponent() {
        _classCallCheck(this, NavMenuComponent);

        this.isExpanded = false;
      }

      _createClass(NavMenuComponent, [{
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-nav-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./nav-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./nav-menu.component.css */
      "./src/app/nav-menu/nav-menu.component.css"))["default"]]
    })], NavMenuComponent);
    /***/
  },

  /***/
  "./src/app/preview-premiums/preview-premiums.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/preview-premiums/preview-premiums.component.ts ***!
    \****************************************************************/

  /*! exports provided: PreviewPremiumsComponent */

  /***/
  function srcAppPreviewPremiumsPreviewPremiumsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewPremiumsComponent", function () {
      return PreviewPremiumsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_employee_insurance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/employee-insurance.service */
    "./src/app/services/employee-insurance.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PreviewPremiumsComponent = /*#__PURE__*/function () {
      function PreviewPremiumsComponent(employeeInsuranceService) {
        _classCallCheck(this, PreviewPremiumsComponent);

        this.employeeInsuranceService = employeeInsuranceService;
        this.grossAmountPerPaycheck = 2000;
      }

      _createClass(PreviewPremiumsComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          this.loadingMessage = "Loading...";

          var _this$employeeInsuran = this.employeeInsuranceService.calculatePremiumsForPotentialEmployee(this.employeeNameInput, this.numberOfDependentsWithNamesStartingWithA, this.numberOfOtherDependents, this.grossAmountPerPaycheck);

          var _this$employeeInsuran2 = _slicedToArray(_this$employeeInsuran, 2);

          this.premiumsCost = _this$employeeInsuran2[0];
          this.netPay = _this$employeeInsuran2[1];
          this.employeeName = this.employeeNameInput;
          this.loadingMessage = null;
        }
      }]);

      return PreviewPremiumsComponent;
    }();

    PreviewPremiumsComponent.ctorParameters = function () {
      return [{
        type: _services_employee_insurance_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeInsuranceService"]
      }];
    };

    PreviewPremiumsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-preview-premiums',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./preview-premiums.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/preview-premiums/preview-premiums.component.html"))["default"]
    }), __metadata("design:paramtypes", [_services_employee_insurance_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeInsuranceService"]])], PreviewPremiumsComponent);
    /***/
  },

  /***/
  "./src/app/services/employee-insurance.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/employee-insurance.service.ts ***!
    \********************************************************/

  /*! exports provided: EmployeeInsuranceService */

  /***/
  function srcAppServicesEmployeeInsuranceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeInsuranceService", function () {
      return EmployeeInsuranceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EmployeeInsuranceService = /*#__PURE__*/function () {
      function EmployeeInsuranceService(httpClient, baseUrl) {
        _classCallCheck(this, EmployeeInsuranceService);

        this.httpClient = httpClient;
        this.baseUrl = baseUrl;
      }

      _createClass(EmployeeInsuranceService, [{
        key: "getEmployee",
        value: function getEmployee(id) {
          return this.httpClient.get(this.baseUrl + 'employee/' + id);
        }
      }, {
        key: "calculatePremiumsForExistingEmployee",
        value: function calculatePremiumsForExistingEmployee(employee) {
          var premiumsCost;
          var employeeFullName = employee.firstName + employee.middleName + employee.lastName;

          if (employeeFullName.startsWith("A")) {
            premiumsCost = 1000 * 0.9;
          } else {
            premiumsCost = 1000;
          }

          for (var i = 0; i < employee.dependentsOnInsurance.length; i++) {
            var employeeDependentFullName = employee.dependentsOnInsurance[i].firstName + employee.dependentsOnInsurance[i].middleName + employee.dependentsOnInsurance[i].lastName;

            if (employeeDependentFullName.startsWith("A")) {
              premiumsCost = premiumsCost + 500 * 0.9;
            } else {
              premiumsCost = premiumsCost + 500;
            }
          }

          var netPay = employee.grossAmountPerPaycheck * 26 - premiumsCost;
          return [premiumsCost, netPay];
        }
      }, {
        key: "calculatePremiumsForPotentialEmployee",
        value: function calculatePremiumsForPotentialEmployee(employeeName, numberOfDependentsWithNamesStartingWithA, numberOfOtherDependents, grossAmountPerPaycheck) {
          var premiumsCost;

          if (employeeName.startsWith("A")) {
            premiumsCost = 1000 * 0.9;
          } else {
            premiumsCost = 1000;
          }

          premiumsCost = premiumsCost + 500 * 0.9 * numberOfDependentsWithNamesStartingWithA;
          premiumsCost = premiumsCost + 500 * numberOfOtherDependents;
          var netPay = grossAmountPerPaycheck * 26 - premiumsCost;
          return [premiumsCost, netPay];
        }
      }]);

      return EmployeeInsuranceService;
    }();

    EmployeeInsuranceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    EmployeeInsuranceService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])], EmployeeInsuranceService);
    /***/
  },

  /***/
  "./src/app/view-employee-premiums/view-employee-premiums.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/view-employee-premiums/view-employee-premiums.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ViewEmployeePremiumsComponent */

  /***/
  function srcAppViewEmployeePremiumsViewEmployeePremiumsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewEmployeePremiumsComponent", function () {
      return ViewEmployeePremiumsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_employee_insurance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/employee-insurance.service */
    "./src/app/services/employee-insurance.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ViewEmployeePremiumsComponent = /*#__PURE__*/function () {
      function ViewEmployeePremiumsComponent(employeeInsuranceService) {
        _classCallCheck(this, ViewEmployeePremiumsComponent);

        this.employeeInsuranceService = employeeInsuranceService;
      }

      _createClass(ViewEmployeePremiumsComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.loadingMessage = "Loading...";
          this.employeeInsuranceService.getEmployee(this.employeeId).subscribe(function (result) {
            _this.employee = result;

            if (!_this.employee) {
              _this.employeeNotFoundMessage = "Employee with given ID was not found.";
            } else {
              _this.employeeNotFoundMessage = null;

              var _this$employeeInsuran3 = _this.employeeInsuranceService.calculatePremiumsForExistingEmployee(_this.employee);

              var _this$employeeInsuran4 = _slicedToArray(_this$employeeInsuran3, 2);

              _this.premiumsCost = _this$employeeInsuran4[0];
              _this.netPay = _this$employeeInsuran4[1];
            }

            _this.loadingMessage = null;
          });
        }
      }]);

      return ViewEmployeePremiumsComponent;
    }();

    ViewEmployeePremiumsComponent.ctorParameters = function () {
      return [{
        type: _services_employee_insurance_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeInsuranceService"]
      }];
    };

    ViewEmployeePremiumsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-view-employee-premiums',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./view-employee-premiums.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-employee-premiums/view-employee-premiums.component.html"))["default"]
    }), __metadata("design:paramtypes", [_services_employee_insurance_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeInsuranceService"]])], ViewEmployeePremiumsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Repos\InsurancePremiumApp\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map