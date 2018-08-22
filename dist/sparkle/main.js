(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headline {\r\n  margin-top: 100px;\r\n}\r\n\r\n.sky {\r\n  height: 1000px;\r\n\r\n}\r\n\r\n.sparkle {\r\n  -webkit-animation-name: sparkle;\r\n          animation-name: sparkle;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-delay:;\r\n          animation-delay:\r\n}\r\n\r\n@-webkit-keyframes sparkle {\r\n    20% {\r\n      -webkit-transform: scale(0.5);\r\n              transform: scale(0.5);\r\n      opacity: 0.5;\r\n    }\r\n  }\r\n\r\n@keyframes sparkle {\r\n    20% {\r\n      -webkit-transform: scale(0.5);\r\n              transform: scale(0.5);\r\n      opacity: 0.5;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"sky\" style=\"text-align:center\">\n  <app-star-group [(renderCount)] = \"renderCount\" ></app-star-group>\n  <app-main-nav-bar></app-main-nav-bar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.renderCount = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "renderCount", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-basic/modal-basic.component */ "./src/app/modal-basic/modal-basic.component.ts");
/* harmony import */ var _main_nav_bar_main_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-nav-bar/main-nav-bar.component */ "./src/app/main-nav-bar/main-nav-bar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _browser_browser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browser/browser.component */ "./src/app/browser/browser.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _star_group_star_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./star-group/star-group.component */ "./src/app/star-group/star-group.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'welcome', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
    { path: 'sign-up', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'recent-snapcards', component: _browser_browser_component__WEBPACK_IMPORTED_MODULE_10__["BrowserComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_6__["ModalBasicComponent"],
                _main_nav_bar_main_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["MainNavBarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _browser_browser_component__WEBPACK_IMPORTED_MODULE_10__["BrowserComponent"],
                _star_group_star_group_component__WEBPACK_IMPORTED_MODULE_15__["StarGroupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ],
            providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_14__["UsersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/browser/browser.component.css":
/*!***********************************************!*\
  !*** ./src/app/browser/browser.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 100px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n\r\n  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));\r\n  -ms-grid-rows: 250px;\r\n      grid-template-rows: 250px;\r\n  grid-column-gap: 30px;\r\n  grid-row-gap: 30px;\r\n}\r\n\r\n.like {\r\n  position: absolute;\r\n  left:125px;\r\n  top:226px;\r\n  padding-bottom: 0px;\r\n  margin-bottom: 0px;\r\n  cursor: pointer;\r\n  color:blue;\r\n}\r\n\r\n.likeThumb {\r\n  width: 25px;\r\n  position:\r\n  absolute;\r\n  top:220px;\r\n  left:153px;\r\n  -webkit-transform: scaleX(-1);\r\n          transform: scaleX(-1);color:blue;\r\n}\r\n\r\n.liked {\r\n  width:98px;\r\n  position:\r\n  absolute;\r\n  left:85px;\r\n  top:228px;\r\n  font-size: .75rem;\r\n  color:blue;\r\n}\r\n\r\n.likedThumb {\r\n  width: 25px;\r\n  position:absolute;\r\n  top:220px;\r\n  left:64px;\r\n  -webkit-transform: scaleX(-1);\r\n          transform: scaleX(-1);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/browser/browser.component.html":
/*!************************************************!*\
  !*** ./src/app/browser/browser.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <div *ngFor=\"let card of recentUserCards; let num = index\">\n      <div *ngIf=\"card.isPublic\" class=\"card\" style=\"width: 13rem; min-height: 250px\">\n        <img *ngIf=\"card.imageLink\" class=\"card-img-top\" style=\"max-height:150px; max-width:150px; margin: 10px auto\" src=\"{{card.imageLink}}\" alt=\"Card image cap\">\n        <div class=\"card-body\" style=\"padding-bottom: 7px;\">\n          <h5 class=\"card-title\">{{card.title}}</h5>\n          <div *ngIf=\"!getLikes(card.id)\">\n            <p class=\"like\" (click)=\"likeSnapCard(card.id, num)\">Like\n            </p>\n            <img class=\"likeThumb\" src=\"https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/svgs/fi-like.svg\" alt=\"likeThumb\" >\n          </div>\n          <div *ngIf=\"getLikes(card.id)\">\n            <p class=\"liked\">You Liked This\n            </p>\n            <img class=\"likedThumb\" src=\"https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/svgs/fi-like.svg\" alt=\"likeThumb\" >\n          </div>\n          <p class=\"card-text like\" style=\"position: absolute; left:181px; bottom:6px; font-weight: bold\">{{card.likes}}</p>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/browser/browser.component.ts":
/*!**********************************************!*\
  !*** ./src/app/browser/browser.component.ts ***!
  \**********************************************/
/*! exports provided: BrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserComponent", function() { return BrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowserComponent = /** @class */ (function () {
    function BrowserComponent(usersService, http) {
        this.usersService = usersService;
        this.http = http;
    }
    BrowserComponent.prototype.ngOnInit = function () {
        this.usersService.recentCards.subscribe(function (newcards) {
            //this.recentUserCards = newcards;
        });
        this.usersService.getAllCards();
    };
    BrowserComponent.prototype.getLikes = function (id) {
        console.log('this.usersService.likedCards', this.usersService.likedCards);
        return this.usersService.likedCards.includes(id);
    };
    BrowserComponent.prototype.likeSnapCard = function (id, index) {
        var _this = this;
        var token = localStorage.getItem('token');
        this.http
            .post('like-snapcard', JSON.stringify({
            id: id,
            email: this.usersService.currentEmail,
        }), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        }).subscribe(function (data) {
            if (data) {
                // this.recentUserCards[index].likes = data.card.likes; //temp
                _this.usersService.likeCard(id);
            }
        });
    };
    BrowserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browser',
            template: __webpack_require__(/*! ./browser.component.html */ "./src/app/browser/browser.component.html"),
            styles: [__webpack_require__(/*! ./browser.component.css */ "./src/app/browser/browser.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BrowserComponent);
    return BrowserComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fields {\r\n  margin:10px auto;\r\n}\r\n\r\n.container {\r\n  margin-top: 100px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n\r\n  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));\r\n  -ms-grid-rows: 250px;\r\n      grid-template-rows: 250px;\r\n  grid-column-gap: 30px;\r\n  grid-row-gap: 30px;\r\n}\r\n\r\n.card-title {\r\n  font-weight: bold;\r\n}\r\n\r\n.headline {\r\n  margin-top: 70px;\r\n  color:white;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n/* The switch - the box around the slider */\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n\r\n.switch input {display:none;}\r\n\r\n/* The slider */\r\n\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc; /* gray background */\r\n  transition: .4s; /* lenght of animation */\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\n\r\n/* if input is checked then slider background color changed to blue via slider class*/\r\n\r\ninput:checked + .slider {\r\n  background-color: #007bff;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #007bff;\r\n}\r\n\r\n/* if input is checked then move object with slider class 26px to right*/\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.toggle {\r\n  -webkit-transform: scale(.7);\r\n          transform: scale(.7);\r\n  position: absolute;\r\n  top: 210px;\r\n  left: -5px;\r\n}\r\n\r\n.public {\r\n  left:75px;\r\n  position: absolute;\r\n  font-size: 1.25rem;\r\n  top:8px;\r\n  font-weight: bold;\r\n}\r\n\r\n.like {\r\n  position: absolute;\r\n  left:147px;\r\n  top:226px;\r\n  padding-bottom: 0px;\r\n  margin-bottom: 0px;\r\n  color:blue;\r\n}\r\n\r\n.likeThumb {\r\n  width: 25px;\r\n  position:\r\n  absolute;\r\n  top:220px;\r\n  left:152px;\r\n  -webkit-transform: scaleX(-1);\r\n          transform: scaleX(-1);color:blue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h1 class=\"headline\">Welcome</h1>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div *ngFor=\"let card of currentUserCards; let num=index\">\n      <div class=\"card\" style=\"width: 13rem; min-height: 250px; max-height: 250px; margin: 10px; float: left;\">\n        <img *ngIf=\"card.imageLink\" class=\"card-img-top\" style=\"max-height:150px; max-width:150px; margin: 10px auto\"src=\"{{card.imageLink}}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{card.title}}</h5>\n          <div class=\"toggle\">\n            <label class=\"switch\">\n              <input type=\"checkbox\" [checked]=\"card.isPublic\" (click)=\"setPublic(card.id,num)\">\n              <span class=\"slider round\"></span>\n            </label>\n            <span class=\"public\">Public</span>\n          </div>\n          <img class=\"likeThumb\" src=\"https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/svgs/fi-like.svg\" alt=\"star\" >\n          <p class=\"card-text like\" style=\"position: absolute; left:181px; bottom:6px; font-weight: bold\">{{card.likes}}\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ngbd-modal-basic></ngbd-modal-basic>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(usersService) {
        this.usersService = usersService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.currentUser = this.usersService.getCurrentUser();
        this.currentUserCards = this.usersService.getUserCards();
    };
    DashboardComponent.prototype.setPublic = function (id, index) {
        this.usersService.toggleCardPublic(id);
        this.currentUserCards[index].isPublic = !this.currentUserCards[index].isPublic;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fields {\r\n  margin:10px auto;\r\n  width: 20%;\r\n\r\n}\r\n\r\n.error {\r\n  margin: auto;\r\n  color: white;\r\n}\r\n\r\n.button {\r\n  background-color: palevioletred;\r\n  border-color: palevioletred;\r\n  color:white;\r\n}\r\n\r\n.inputContainer:nth-child(1) {\r\n  margin-top: 100px\r\n}\r\n\r\n.headline {\r\n  margin-top: 20px;\r\n  font-size: 150px;\r\n  color:white;\r\n  font-family: 'Dancing Script', cursive;\r\n}\r\n\r\n.sub-headline {\r\n  color:violet;\r\n  font-family: 'Roboto', sans-serif;\r\n  text-shadow: 1px 1px 22px palevioletred;\r\n}\r\n\r\n.buttons {\r\n  margin: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sky\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h1 class=\"headline\">Sparkle</h1>\n      <h2 class=\"sub-headline\">Save The Pics You Love</h2>\n    </div>\n  </div>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 inputContainer\">\n        <input class=\"fields form-control\" type=\"text\" placeholder=\"email\" formControlName=\"email\" />\n      </div>\n      <p class=\"error\" *ngIf=\"!loginForm.get('email').valid && loginForm.get('email').touched\" >Please enter email to login</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <input class=\"fields form-control\" type=\"password\" placeholder=\"password\"\n        formControlName=\"password\" />\n      </div>\n      <p class=\"error\" *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter password to login</p>\n    </div>\n    <div class=\"row buttons\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <button class=\"btn button\">Log In</button>\n\n      </div>\n      <p class=\"error\" style=\"margin-top:20px\" *ngIf=\"errorMessage\">{{errorMessage.error}}</p>\n    </div>\n  </form>\n  <div class=\"row buttons\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <a [routerLink]= \"['/sign-up']\">\n        <button class=\"btn button\">\n          Sign Up\n        </button>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, zone) {
        this.userService = userService;
        this.zone = zone;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorMessage = this.userService.getErrorMessage();
    };
    LoginComponent.prototype.onSubmit = function () {
        this.userService.loginUser(this.loginForm.value);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-nav-bar/main-nav-bar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main-nav-bar/main-nav-bar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainNav {\r\n  background-color: #9c1d8d;\r\n}\r\n\r\n.nav-text {\r\n  color: white;\r\n  cursor:pointer;\r\n}"

/***/ }),

/***/ "./src/app/main-nav-bar/main-nav-bar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-nav-bar/main-nav-bar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"loggedIn\" class=\"navbar navbar-expand-md\">\n    <div class=\"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a [routerLink]= \"['/welcome']\" class=\"nav-link\" href=\"#\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]= \"['/recent-snapcards']\" class=\"nav-link\" href=\"#\">Recent SnapCards</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\n        <ul class=\"navbar-nav ml-auto nav-text\">\n            <li class=\"nav-item\" (click)=\"logOut()\">\n                <a class=\"nav-link\">Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/main-nav-bar/main-nav-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-nav-bar/main-nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: MainNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavBarComponent", function() { return MainNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainNavBarComponent = /** @class */ (function () {
    function MainNavBarComponent(usersService) {
        this.usersService = usersService;
    }
    MainNavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.loggedIn.subscribe(function (value) {
            _this.loggedIn = value;
        });
    };
    MainNavBarComponent.prototype.logOut = function () {
        this.usersService.logOut();
    };
    MainNavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav-bar',
            template: __webpack_require__(/*! ./main-nav-bar.component.html */ "./src/app/main-nav-bar/main-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./main-nav-bar.component.css */ "./src/app/main-nav-bar/main-nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], MainNavBarComponent);
    return MainNavBarComponent;
}());



/***/ }),

/***/ "./src/app/modal-basic/modal-basic.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modal-basic/modal-basic.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fields {\r\n  margin:10px auto;\r\n}\r\n\r\n.add-button {\r\n  margin-top: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modal-basic/modal-basic.component.html":
/*!********************************************************!*\
  !*** ./src/app/modal-basic/modal-basic.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">New Snap Card</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup] = \"cardForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <input\n            [ngStyle]=\"{'margin':'10px auto'}\"\n            class=\"fields form-control\"\n            type=\"text\"\n            placeholder=\"title\"\n            formControlName=\"title\"\n          >\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <input\n            [ngStyle]=\"{'margin':'10px auto'}\"\n            class=\"fields form-control\"\n            type=\"text\"\n            placeholder=\"link to picture\"\n            formControlName=\"imageLink\"\n          >\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n          <textarea\n            [ngStyle]=\"{'margin':'10px auto'}\"\n            class=\"fields form-control\"\n            type=\"text\"\n            placeholder=\"Enter description here\"\n            formControlName=\"description\"\n          >\n          </textarea>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onSubmit(); c('Close click')\">Add</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<div class=\"row\" style=\"float:left;\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 offset-md-5 offset-sm-5\">\n    <button class=\"btn btn-lg btn-outline-primary add-button\" [ngStyle]=\"{'height':'10rem'}\" (click)=\"open(content)\"> + Add New Snap Card</button>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/modal-basic/modal-basic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modal-basic/modal-basic.component.ts ***!
  \******************************************************/
/*! exports provided: ModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBasicComponent", function() { return ModalBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalBasicComponent = /** @class */ (function () {
    function ModalBasicComponent(modalService, usersService) {
        this.modalService = modalService;
        this.usersService = usersService;
    }
    ModalBasicComponent.prototype.ngOnInit = function () {
        this.cardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            imageLink: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    };
    ModalBasicComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    ModalBasicComponent.prototype.onSubmit = function () {
        this.usersService.addNewCard(this.cardForm.value);
    };
    ModalBasicComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-basic',
            template: __webpack_require__(/*! ./modal-basic.component.html */ "./src/app/modal-basic/modal-basic.component.html"),
            styles: [__webpack_require__(/*! ./modal-basic.component.css */ "./src/app/modal-basic/modal-basic.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], ModalBasicComponent);
    return ModalBasicComponent;
}());



/***/ }),

/***/ "./src/app/models/card.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/card.model.ts ***!
  \**************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card(title, imageLink, description, likes, id, isPublic) {
        if (isPublic === void 0) { isPublic = false; }
        this.title = title;
        this.imageLink = imageLink;
        this.description = description;
        this.likes = likes;
        this.id = id;
        this.isPublic = isPublic;
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fields {\r\n  margin:10px auto;\r\n\r\n}\r\n\r\n.button {\r\n  background-color: palevioletred;\r\n  border-color: palevioletred;\r\n  color:white;\r\n  margin-top:20px;\r\n}\r\n\r\n.headline {\r\n  padding-top: 50px;\r\n  margin-bottom: 50px;\r\n  color:white;\r\n  font-family: 'Roboto', sans-serif;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8 offset-xs-2 offset-md-2 offset-lg-2 offset-sm-2\">\n  <h1 class=\"headline\"> Create an Account </h1>\n  <form [formGroup] = \"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <input\n          class=\"fields form-control\"\n          type=\"text\"\n          placeholder=\"name\"\n          formControlName=\"username\"\n        >\n      </div>\n      <p style=\"margin-left: 20px\" *ngIf=\"!registerForm.get('username').valid && registerForm.get('username').touched\">Please enter a username.\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <input\n          class=\"fields form-control\"\n          type=\"password\"\n          placeholder=\"password\"\n          formControlName=\"password\"\n        >\n      </div>\n      <p style=\"margin-left: 20px\" *ngIf=\"!registerForm.get('password').valid && registerForm.get('password').touched\">\n        Please enter a password.\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <input\n          class=\"fields form-control\"\n          type=\"email\"\n          placeholder=\"email\"\n          email\n          formControlName=\"email\"\n        >\n      </div>\n      <p style=\"margin-left: 20px\" *ngIf=\"!registerForm.get('email').valid && registerForm.get('email').touched\">\n        Please enter a valid email.\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <input\n          class=\"fields form-control\"\n          type=\"text\"\n          placeholder=\"city\"\n          formControlName=\"city\"\n        >\n        <p style=\"float:left\" *ngIf=\"!registerForm.get('city').valid && registerForm.get('city').touched\"> Please enter a city.\n        </p>\n      </div>\n      <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <input\n          class=\"fields form-control\"\n          type=\"text\"\n          placeholder=\"state\"\n          formControlName=\"state\"\n        >\n        <p style=\"float:left\" *ngIf=\"!registerForm.get('state').valid && registerForm.get('state').touched\" >\n          Please select a state.\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <button class=\"btn button\">Sign Up</button>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <button (click)=\"backToLogin()\" class=\"btn button\">Back to Login</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        if (this.registerForm.valid) {
            this.usersService.addNewUser(this.registerForm.value);
            this.router.navigateByUrl('/');
        }
        else {
            console.log('invalid form');
        }
    };
    RegisterComponent.prototype.backToLogin = function () {
        this.router.navigateByUrl('/');
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_card_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/card.model */ "./src/app/models/card.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = /** @class */ (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
        this.errorMessage = { error: '' };
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userCards = [];
        this.likedCards = [];
        this.recentCards = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stars = 0;
    }
    UsersService.prototype.getErrorMessage = function () {
        return this.errorMessage;
    };
    UsersService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    UsersService.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
    };
    UsersService.prototype.getRecentCards = function () {
        return this.recentCards;
    };
    UsersService.prototype.getStars = function () {
        return this.stars;
    };
    UsersService.prototype.addStars = function () {
        this.stars = this.stars + 1;
    };
    UsersService.prototype.logOut = function () {
        this.loggedIn.next(false);
        this.router.navigateByUrl('/');
    };
    UsersService.prototype.getUserCards = function () {
        return this.userCards;
    };
    UsersService.prototype.loginUser = function (user) {
        var _this = this;
        var email = user.email, password = user.password;
        this.http
            .post('login', JSON.stringify({
            username: email,
            password: password,
        }), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function (result) {
            if (result.user) {
                var token = result.token;
                var _a = result.user, username = _a.username, email_1 = _a.email, cards = _a.cards, cardsLiked = _a.cardsLiked;
                var cardModels_1 = [];
                cards.map(function (card) {
                    cardModels_1.push(new _models_card_model__WEBPACK_IMPORTED_MODULE_4__["Card"](card.title, card.imagelink, card.description, card.likes, card.id, card.isPublic));
                });
                localStorage.setItem('token', token); // JWT token
                _this.loggedIn.next(true);
                _this.currentUser = username;
                _this.currentEmail = email_1;
                _this.userCards = cardModels_1;
                _this.likedCards = cardsLiked || [];
                _this.router.navigateByUrl('/welcome');
            }
            else {
                //invalid username or password
                _this.errorMessage.error = result.error;
            }
        });
    };
    UsersService.prototype.addNewCard = function (card) {
        var _this = this;
        var title = card.title, description = card.description, imageLink = card.imageLink;
        var token = localStorage.getItem('token');
        this.http
            .post('/add-card', JSON.stringify({
            imageLink: imageLink,
            title: title,
            owner: this.currentEmail,
            description: description
        }), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        }).subscribe(function (data) {
            var title = data.title, description = data.description, imageLink = data.imageLink, id = data.id;
            _this.userCards.push(new _models_card_model__WEBPACK_IMPORTED_MODULE_4__["Card"](title, imageLink, description, 0, id));
        });
    };
    UsersService.prototype.likeCard = function (id) {
        this.likedCards.push(id);
    };
    UsersService.prototype.addNewUser = function (user) {
        var _this = this;
        var username = user.username, password = user.password, email = user.email, state = user.state, city = user.city;
        this.http
            .post('/add-user', JSON.stringify({
            username: username,
            password: password,
            state: state,
            city: city,
            email: email,
        }), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        }).subscribe(function (data) {
            var username = data.username, email = data.email, state = data.state, city = data.city, password = data.password, token = data.token;
            localStorage.setItem('token', token); // JWT token
            _this.currentUser = username;
        });
    };
    // get recent cards from all users
    UsersService.prototype.getAllCards = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        this.http
            .get("/recent-cards/" + this.currentEmail, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-access-token': token
            })
        }).subscribe(function (returnedCards) {
            var allCards = [];
            returnedCards.all.map(function (card) {
                allCards.push(new _models_card_model__WEBPACK_IMPORTED_MODULE_4__["Card"](card.title, card.imagelink, card.description, card.likes, card.id, card.ispublic));
            });
            _this.recentCards.next(allCards);
        });
    };
    UsersService.prototype.toggleCardPublic = function (id) {
        var _this = this;
        var token = localStorage.getItem('token');
        this.http
            .post('/toggle-card-public', JSON.stringify({
            id: id
        }), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': token
            })
        }).subscribe(function (data) {
            var isPublic = data.isPublic;
            console.log('this.recentCards', _this.recentCards);
            console.log('typeof this.recentCards', typeof _this.recentCards);
            /*
            const updatedCards = this.recentCards.map(card => {
              if (card.is === id) {
                card.isPublic = isPublic;
              }
            });
            this.recentCards = updatedCards;*/
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/star-group/star-group.component.css":
/*!*****************************************************!*\
  !*** ./src/app/star-group/star-group.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/star-group/star-group.component.html":
/*!******************************************************!*\
  !*** ./src/app/star-group/star-group.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let star of stars;let num = index\">\n    <img src=\"../../assets/star.svg\" [ngStyle]=\"getRandomStar()\">\n</div>\n"

/***/ }),

/***/ "./src/app/star-group/star-group.component.ts":
/*!****************************************************!*\
  !*** ./src/app/star-group/star-group.component.ts ***!
  \****************************************************/
/*! exports provided: StarGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarGroupComponent", function() { return StarGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarGroupComponent = /** @class */ (function () {
    function StarGroupComponent(usersService) {
        this.usersService = usersService;
        this.stars = [];
        this.hasCreatedStars = false;
        this.starStyles = [];
        this.stars.length = 1;
        this.starStyles.length = 1;
    }
    StarGroupComponent.prototype.ngOnInit = function () {
    };
    StarGroupComponent.prototype.getRandomStar = function () {
        // if (this.usersService.getStars() < 1) {
        this.hasCreatedStars = true;
        this.usersService.addStars();
        var star = {
            position: 'absolute',
            width: (Math.floor(Math.random() * 20) + 10) + 'px',
            left: Math.floor(Math.random() * 100) + '%',
            top: Math.floor(Math.random() * 70) + '%',
            'animation-name': 'sparkle',
            'animation-iteration-count': 'infinite',
            'animation-duration': '1s',
            'animation-delay': (Math.random() * 1) + 's',
        };
        this.starStyles.push(star);
        return star;
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StarGroupComponent.prototype, "renderCount", void 0);
    StarGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star-group',
            template: __webpack_require__(/*! ./star-group.component.html */ "./src/app/star-group/star-group.component.html"),
            styles: [__webpack_require__(/*! ./star-group.component.css */ "./src/app/star-group/star-group.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], StarGroupComponent);
    return StarGroupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chris\Documents\WebDev\Sparkle\sparkle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map