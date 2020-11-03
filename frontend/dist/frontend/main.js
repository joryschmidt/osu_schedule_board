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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>Schedule Board</header>\n<div class=\"board\">\n  <div class=\"section section--1\">\n    <div class=\"hangars\">\n      <app-hangar [hangar]=\"1\"></app-hangar>\n      <app-hangar [hangar]=\"4\"></app-hangar>\n      <app-hangar [hangar]=\"7\"></app-hangar>\n    </div>\n  </div>\n  \n  <div class=\"section section--2\">\n    <div class=\"hangars\">\n      <app-hangar [hangar]=\"8\"></app-hangar>\n      <app-hangar [hangar]=\"9\"></app-hangar>\n      <app-hangar-requests [planeChange]=\"planeChange\" (requestChanged)=\"requestChangeHandler($event)\"></app-hangar-requests>\n      <app-hangared-aircraft [planeChange]=\"planeChange\" (requestChanged)=\"requestChangeHandler($event)\"></app-hangared-aircraft>\n    </div>\n  </div>\n  \n  <div class=\"section section--3\">\n      <app-transients [planeChange]=\"planeChange\" (requestChanged)=\"requestChangeHandler($event)\"></app-transients>\n      <app-special-notices [(newNoticeBool)]=\"newNoticeBool\"></app-special-notices>\n    <div class=\"controls\">\n      <button class=\"new-request-button board__button\" (click)=\"newFlight()\">New Request</button>\n      <button class=\"new-notice-button board__button\" (click)=\"newNotice()\">New Special Notice</button>\n      \n      <div class=\"generate-report\">\n        <div class=\"generate-report__header\">Reports</div>\n        <input class=\"report-date-input\" type=\"date\" name=\"report-date\" [(ngModel)]=\"date\" />\n        <button class=\"generate-report__button board__button\" (click)=\"generateReport()\">Generate Report</button>\n      </div>\n      \n      <div class=\"logout\">\n        <a class=\"logout__button board__button\" href=\"/logout\">Logout</a>\n        <a class=\"admin__button board__button\" *ngIf=\"isAdmin\" href=\"/admin\">Admin Panel</a>\n      </div>\n      \n      <app-request *ngIf=\"newRequest\" [(newRequest)]=\"newRequest\" (planeChange)=\"planeChangeHandler($event)\"></app-request>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  font-size: 2rem;\n  display: none; }\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); }\n\n@media only screen and (max-width: 37.5em) {\n    .board {\n      display: flex;\n      flex-direction: column; } }\n\n.board__button {\n    margin: .5rem;\n    padding: 1rem;\n    border: none;\n    border-radius: 3px;\n    cursor: pointer;\n    font-family: Roboto, sans-serif; }\n\n.section {\n  margin: 1rem; }\n\n.new-request-button {\n  color: white;\n  background-color: green; }\n\n.new-notice-button {\n  background-color: teal;\n  color: white; }\n\n.generate-report {\n  margin-top: 2rem; }\n\n.generate-report__header {\n    border-bottom: 1px solid black;\n    padding-bottom: .5rem;\n    margin-bottom: .5rem; }\n\n.generate-report__button {\n    background-color: darkorchid;\n    color: white; }\n\n.report-date-input {\n  padding: 1rem;\n  border: none;\n  border-radius: 2px;\n  font-family: Roboto, sans-serif;\n  cursor: pointer; }\n\n.logout {\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n\n.logout__button {\n    background-color: darkcyan;\n    color: white;\n    text-decoration: none;\n    font-size: 1.5rem; }\n\n.admin__button {\n  background-color: #c00;\n  color: white;\n  text-decoration: none;\n  font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDRSxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdmO0VBRUUsYUFBYTtFQUNiLDJEQUEyRCxFQUFBOztBQVp6RDtJQVNKO01BTUksYUFBYTtNQUNiLHNCQUFzQixFQUFBLEVBV3pCOztBQVJDO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwrQkFBK0IsRUFBQTs7QUFJbkM7RUFFRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBVXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQixFQUFBOztBQUVoQjtJQUNFLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsb0JBQW9CLEVBQUE7O0FBR3RCO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVksRUFBQTs7QUFLaEI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFbkI7SUFDRSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTs7QUFLbkI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiByZXNwb25kKCRicmVhaykge1xuICBAaWYgJGJyZWFrID09IGxhcHRvcCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH0gLy8gMTIwMHB4XG4gIH1cbiAgXG4gIEBpZiAkYnJlYWsgPT0gdGFibGV0IHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHsgQGNvbnRlbnQgfSAvLyA5MDBweFxuICB9XG4gIFxuICBAaWYgJGJyZWFrID09IHBob25lIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkgeyBAY29udGVudCB9IC8vIDYwMHB4XG4gIH1cbn1cblxuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYm9hcmQge1xuICAvLyBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcbiAgXG4gIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gICZfX2J1dHRvbiB7XG4gICAgbWFyZ2luOiAuNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLnNlY3Rpb24ge1xuICAvLyB3aWR0aDogMzMlO1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5uZXctcmVxdWVzdC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uc3BlY2lhbC1ub3RpY2VzIHtcbiAgXG4gICZfX2hlYWRlciB7XG4gICAgXG4gIH1cbn1cblxuLm5ldy1ub3RpY2UtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ2VuZXJhdGUtcmVwb3J0IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgXG4gICZfX2hlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yY2hpZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxufVxuXG4ucmVwb3J0LWRhdGUtaW5wdXQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nb3V0IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgXG4gICZfX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuXG4uYWRtaW4ge1xuICAmX19idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuIl19 */"

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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
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
    function AppComponent(data) {
        this.data = data;
        this.title = 'OSU Schedule Board';
        this.newRequest = false;
        this.newNoticeBool = false;
        this.isAdmin = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUser().subscribe(function (res) {
            _this.user = res;
            if (_this.user.admin)
                _this.isAdmin = true;
        });
    };
    AppComponent.prototype.newFlight = function () {
        var _this = this;
        this.newRequest = !this.newRequest;
        // clicking on background will remove new request from screen
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.request__backdrop').on('click', function (event) {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).is('.request__backdrop'))
                    _this.newRequest = !_this.newRequest;
            });
        }, 300);
    };
    AppComponent.prototype.generateReport = function () {
        var _this = this;
        // for style
        if (this.date) {
            // if date is selected, generate report
            this.data.getFlightsByDate(this.date).subscribe(function (response) {
                console.log(response);
                if (response['length'] == 0) {
                    var wind_1 = window.open('', 'Nothing here', 'width=500, height=500');
                    wind_1.document.write("<h2 style=\"font-family: sans-serif\">I got nothing for " + _this.date + ", homie</h2>");
                    return '';
                }
                var date = response[0].date;
                var items = [];
                var wind = window.open('', date, 'width=1000, height=1000');
                // create lines of html from the response
                for (var flight in response) {
                    var tail = response[flight].tail || '';
                    var time = response[flight].time ? "| " + response[flight].time : '';
                    var remarks = response[flight].remarks ? "| " + response[flight].remarks : '';
                    var item = "<p style=\"font-family: sans-serif;\">" + tail + " " + time + " " + remarks + "</p>";
                    items.push(item);
                }
                // write lines to new opened window
                wind.document.write("<h1 style=\"font-family: sans-serif;\">" + date + "</h1>");
                for (var i = 0, end = items.length; i < end; i++) {
                    wind.document.write(items[i]);
                }
            });
        }
        else {
            var wind = window.open('', 'No date, man', 'width=500, height=500');
            wind.document.write('<h2 style="font-family: sans-serif;">You have to select a date if you want a report.</h2>');
        }
    };
    AppComponent.prototype.newNotice = function () {
        var _this = this;
        this.newNoticeBool = !this.newNoticeBool;
        // clicking on background will remove new special notice from screen
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.special-notices__backdrop').on('click', function (event) {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).is('.special-notices__backdrop'))
                    _this.newNoticeBool = !_this.newNoticeBool;
            });
        }, 300);
    };
    AppComponent.prototype.planeChangeHandler = function (aircraft) {
        this.planeChange = aircraft;
    };
    AppComponent.prototype.requestChangeHandler = function (request) {
        this.planeChange = request;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_plane_plane_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/plane/plane.component */ "./src/app/components/plane/plane.component.ts");
/* harmony import */ var _components_flight_flight_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/flight/flight.component */ "./src/app/components/flight/flight.component.ts");
/* harmony import */ var _components_request_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/request/request.component */ "./src/app/components/request/request.component.ts");
/* harmony import */ var _components_hangar_hangar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hangar/hangar.component */ "./src/app/components/hangar/hangar.component.ts");
/* harmony import */ var _components_edit_request_edit_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/edit-request/edit-request.component */ "./src/app/components/edit-request/edit-request.component.ts");
/* harmony import */ var _components_hangar_requests_hangar_requests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/hangar-requests/hangar-requests.component */ "./src/app/components/hangar-requests/hangar-requests.component.ts");
/* harmony import */ var _components_transients_transients_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/transients/transients.component */ "./src/app/components/transients/transients.component.ts");
/* harmony import */ var _components_hangared_aircraft_hangared_aircraft_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/hangared-aircraft/hangared-aircraft.component */ "./src/app/components/hangared-aircraft/hangared-aircraft.component.ts");
/* harmony import */ var _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/notice/notice.component */ "./src/app/components/notice/notice.component.ts");
/* harmony import */ var _components_special_notices_special_notices_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/special-notices/special-notices.component */ "./src/app/components/special-notices/special-notices.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_plane_plane_component__WEBPACK_IMPORTED_MODULE_7__["PlaneComponent"],
                _components_request_request_component__WEBPACK_IMPORTED_MODULE_9__["RequestComponent"],
                _components_flight_flight_component__WEBPACK_IMPORTED_MODULE_8__["FlightComponent"],
                _components_hangar_hangar_component__WEBPACK_IMPORTED_MODULE_10__["HangarComponent"],
                _components_edit_request_edit_request_component__WEBPACK_IMPORTED_MODULE_11__["EditRequestComponent"],
                _components_hangar_requests_hangar_requests_component__WEBPACK_IMPORTED_MODULE_12__["HangarRequestsComponent"],
                _components_transients_transients_component__WEBPACK_IMPORTED_MODULE_13__["TransientsComponent"],
                _components_hangared_aircraft_hangared_aircraft_component__WEBPACK_IMPORTED_MODULE_14__["HangaredAircraftComponent"],
                _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_15__["NoticeComponent"],
                _components_special_notices_special_notices_component__WEBPACK_IMPORTED_MODULE_16__["SpecialNoticesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/edit-request/edit-request.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-request/edit-request.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"request__backdrop\">\n  <div class=\"request edit-request\">\n    <h2 class=\"request__header\">Edit Request</h2>\n    <form action=\"/flight/new\" method=\"post\" class=\"request__form\">\n      \n      <div class=\"request__form__left\">\n        <div class=\"request__form__box\">\n          <label for=\"tail\" class=\"request__form__box__label\">Tail</label><input type=\"text\" name=\"tail\" [(ngModel)]=\"aircraft.tail\" class=\"request__form__box__input\" />\n        </div>\n        <div class=\"request__form__box\">\n          <label for=\"date\" class=\"request__form__box__label\">Date</label><input type=\"date\" name=\"date\" [(ngModel)]=\"aircraft.date\" class=\"request__form__box__input\" />\n        </div>\n        <div class=\"request__form__box\">\n          <label for=\"time\" class=\"request__form__box__label\">Time</label><input type=\"text\" name=\"time\" [(ngModel)]=\"aircraft.time\" class=\"request__form__box__input\" maxlength=\"4\" />\n        </div>\n        <input type=\"hidden\" name=\"id\" value=\"aircraft._id\" [(ngModel)]=\"aircraft._id\" />\n        <div class=\"request__form__left__buttons\">\n          <button class=\"request__form__left__buttons request__form__left__buttons--edit btn\" (click)=\"editRequest()\">Submit Changes</button>\n          <button class=\"request__form__left__buttons request__form__left__buttons--discard btn\" (click)=\"discardRequest()\">Discard Changes</button>\n          <button class=\"request__form__left__buttons request__form__left__buttons--completed btn\" (click)=\"completeRequest()\">Request Complete</button>\n        </div>\n      </div>\n      <div class=\"request__form__right\">\n        <div class=\"request__form__right__main\">\n          <div class=\"request__form__box\">\n            <label for=\"remarks\" class=\"request__form__box__label\">Remarks</label>\n            <textarea name=\"remarks\" [(ngModel)]=\"aircraft.remarks\" cols=\"30\" rows=\"10\" class=\"request__form__box__input\"></textarea>\n          </div>\n          <div class=\"request__form__RON\">\n            <label for=\"RON\" class=\"request__form__RON__label\">RON</label>\n            <input type=\"checkbox\" name=\"RON\" [(ngModel)]=\"aircraft.RON\" value=\"true\" class=\"request__form__RON__input\" />\n          </div>\n        </div>\n        <div>\n          <span class=\"request__form__box__header\">Transient Aircraft Hangar</span>\n          <div class=\"request__form__box__radio\">\n            <label for=\"hangared\" class=\"request__form__box__label\">None</label>\n            <input type=\"radio\" value=\"none\" [(ngModel)]=\"aircraft.hangared\" name=\"hangared\" class=\"request__form__box__radio__input\">\n          </div>\n          <div class=\"request__form__box__radio\">\n            <label for=\"hangared\" class=\"request__form__box__label\">Requested</label>\n            <input type=\"radio\" value=\"requested\" [(ngModel)]=\"aircraft.hangared\" name=\"hangared\" class=\"request__form__box__radio__input\">\n          </div>\n          <div class=\"request__form__box__radio\">\n            <label for=\"hangared\" class=\"request__form__box__label\">Hangared</label>\n            <input type=\"radio\" value=\"hangared\" [(ngModel)]=\"aircraft.hangared\" name=\"hangared\" class=\"request__form__box__radio__input\">\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit-request/edit-request.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-request/edit-request.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".request {\n  position: fixed;\n  padding: 5rem;\n  width: 50%;\n  background-color: #ecdfce;\n  top: 30%;\n  left: 20%; }\n  @media only screen and (max-width: 75em) {\n    .request {\n      top: 0;\n      left: 0;\n      margin: 2rem; } }\n  @media only screen and (max-width: 56.25em) {\n    .request {\n      width: 80%; } }\n  @media only screen and (max-width: 37.5em) {\n    .request {\n      padding: 1.5rem; } }\n  .request__backdrop {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.4); }\n  .request__form {\n    display: grid;\n    grid-template-columns: 2fr 5fr; }\n  @media only screen and (max-width: 75em) {\n      .request__form {\n        display: flex;\n        flex-direction: column; } }\n  .request__form__box {\n      margin: 1rem;\n      display: grid; }\n  .request__form__box__label {\n        margin-bottom: .7rem; }\n  .request__form__box__input {\n        padding: .5rem;\n        width: 100%;\n        border: none;\n        border-radius: 2px;\n        font-family: Roboto, sans-serif; }\n  .request__form__box__radio {\n        display: flex;\n        justify-content: space-between;\n        margin: 1rem; }\n  .request__form__RON {\n      margin: 1rem; }\n  .request__form__RON__label {\n        margin: 0 1rem; }\n  .request__form__left__buttons {\n      margin: .5rem 1rem;\n      display: flex;\n      flex-direction: column;\n      width: 85%; }\n  .request__form__left__buttons--edit {\n        background-color: darkgreen;\n        color: white; }\n  .request__form__left__buttons--discard {\n        background-color: firebrick;\n        color: white; }\n  .request__form__left__buttons--completed {\n        background-color: teal;\n        color: white; }\n  .request__form__right {\n      display: grid;\n      grid-template-columns: 2fr 1fr; }\n  @media only screen and (max-width: 75em) {\n        .request__form__right {\n          display: flex;\n          flex-direction: column; } }\n  .btn {\n  padding: .5rem;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2VkaXQtcmVxdWVzdC9lZGl0LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsUUFBUTtFQUNSLFNBQVMsRUFBQTtFQWxCUDtJQVlKO01BU0ksTUFBTTtNQUNOLE9BQU87TUFDUCxZQUFZLEVBQUEsRUE0R2Y7RUEvSEc7SUFRSjtNQWVJLFVBQVUsRUFBQSxFQXdHYjtFQTNIRztJQUlKO01BbUJJLGVBQWUsRUFBQSxFQW9HbEI7RUFqR0M7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUFzQixFQUFBO0VBT3hCO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QixFQUFBO0VBakQ5QjtNQStDRjtRQUtJLGFBQWE7UUFDYixzQkFBc0IsRUFBQSxFQTZFekI7RUExRUM7TUFDRSxZQUFZO01BQ1osYUFBYSxFQUFBO0VBRWI7UUFDRSxvQkFBb0IsRUFBQTtFQUd0QjtRQUNFLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQiwrQkFBK0IsRUFBQTtFQUdqQztRQUNFLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsWUFBWSxFQUFBO0VBUWhCO01BQ0UsWUFBWSxFQUFBO0VBRVo7UUFDRSxjQUFjLEVBQUE7RUFVaEI7TUFDRSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixVQUFVLEVBQUE7RUFHVjtRQUNFLDJCQUEyQjtRQUMzQixZQUFZLEVBQUE7RUFHZDtRQUNFLDJCQUEyQjtRQUMzQixZQUFZLEVBQUE7RUFHZDtRQUNFLHNCQUFzQjtRQUN0QixZQUFZLEVBQUE7RUFLbEI7TUFDRSxhQUFhO01BQ2IsOEJBQThCLEVBQUE7RUEzSGhDO1FBeUhBO1VBS0ksYUFBYTtVQUNiLHNCQUFzQixFQUFBLEVBRXpCO0VBSUw7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtcmVxdWVzdC9lZGl0LXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtaXhpbiByZXNwb25kKCRicmVhaykge1xuICBAaWYgJGJyZWFrID09IGxhcHRvcCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH0gLy8gMTIwMHB4XG4gIH1cbiAgXG4gIEBpZiAkYnJlYWsgPT0gdGFibGV0IHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHsgQGNvbnRlbnQgfSAvLyA5MDBweFxuICB9XG4gIFxuICBAaWYgJGJyZWFrID09IHBob25lIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkgeyBAY29udGVudCB9IC8vIDYwMHB4XG4gIH1cbn1cblxuLnJlcXVlc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDVyZW07XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2RmY2U7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiAyMCU7XG4gIFxuICBAaW5jbHVkZSByZXNwb25kKGxhcHRvcCkge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMnJlbTtcbiAgfVxuICBcbiAgQGluY2x1ZGUgcmVzcG9uZCh0YWJsZXQpIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIFxuICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG4gIFxuICAmX19iYWNrZHJvcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKGJsYWNrLCAwLjQpO1xuICB9XG4gIFxuICAmX19oZWFkZXIge1xuICAgIFxuICB9XG4gIFxuICAmX19mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVmcjtcbiAgICBcbiAgICBAaW5jbHVkZSByZXNwb25kKGxhcHRvcCkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIFxuICAgICZfX2JveCB7XG4gICAgICBtYXJnaW46IDFyZW07XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgXG4gICAgICAmX19sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC43cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmX19pbnB1dCB7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICBcbiAgICAgICZfX3JhZGlvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIFxuICAgICAgICAmX19pbnB1dCB7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJl9fUk9OIHtcbiAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgIFxuICAgICAgJl9fbGFiZWwge1xuICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJl9faW5wdXQge1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJl9fbGVmdCB7XG4gICAgICBcbiAgICAgICZfX2J1dHRvbnMge1xuICAgICAgICBtYXJnaW46IC41cmVtIDFyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgJi0tZWRpdCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi0tZGlzY2FyZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmlyZWJyaWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi0tY29tcGxldGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmX19yaWdodCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgICAgXG4gICAgICBAaW5jbHVkZSByZXNwb25kKGxhcHRvcCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/edit-request/edit-request.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-request/edit-request.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRequestComponent", function() { return EditRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditRequestComponent = /** @class */ (function () {
    function EditRequestComponent(data) {
        this.data = data;
        this.aircraftChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newEditRequestChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.planeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditRequestComponent.prototype.ngOnInit = function () {
        this.aircraftCopy = Object.assign({}, this.aircraft);
    };
    EditRequestComponent.prototype.editRequest = function () {
        var _this = this;
        this.data.updateFlight(this.aircraft).subscribe(function (response) {
            _this.planeChange.emit(_this.aircraft);
            _this.newEditRequestChange.emit(false);
        });
    };
    EditRequestComponent.prototype.discardRequest = function () {
        this.aircraftChange.emit(this.aircraftCopy);
        this.newEditRequestChange.emit(false);
    };
    EditRequestComponent.prototype.completeRequest = function () {
        var _this = this;
        this.data.deleteFlight(this.aircraft._id).subscribe(function (response) {
            _this.planeChange.emit(null);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditRequestComponent.prototype, "aircraft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditRequestComponent.prototype, "aircraftChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EditRequestComponent.prototype, "newEditRequest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditRequestComponent.prototype, "newEditRequestChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditRequestComponent.prototype, "planeChange", void 0);
    EditRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-request',
            template: __webpack_require__(/*! ./edit-request.component.html */ "./src/app/components/edit-request/edit-request.component.html"),
            styles: [__webpack_require__(/*! ./edit-request.component.scss */ "./src/app/components/edit-request/edit-request.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], EditRequestComponent);
    return EditRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/flight/flight.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/flight/flight.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flight\" [ngClass]=\"{  'flight--transient': flight.transient == true, \n                                  'red': displayStyle == 'red', \n                                  'yellow': displayStyle == 'yellow', \n                                  'purple': displayStyle == 'purple', \n                                  'green': displayStyle == 'green'\n}\" (dblclick)=\"editFlight()\">\n  <div class=\"flight__item flight__tail\" *ngIf=\"flight.transient\">{{ flight.tail }}</div>\n  <div class=\"flight__item flight__date\">{{ flight.date | date:'M/d/yy' }}</div>\n  <div class=\"flight__item flight__time\">{{ flight.time }}</div>\n  <div class=\"flight__item flight__remarks\">{{ flight.remarks }}</div>\n</div>\n\n<app-edit-request *ngIf=\"newEditRequest\" [(newEditRequest)]=\"newEditRequest\" [(aircraft)]=\"flight\" (planeChange)=\"planeChangeHandler($event)\"></app-edit-request>\n"

/***/ }),

/***/ "./src/app/components/flight/flight.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/flight/flight.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flight {\n  display: grid;\n  grid-template-columns: 1fr 1fr 5fr;\n  align-items: center;\n  width: 100%;\n  min-height: 2.7rem;\n  padding: 3px; }\n  .flight__item {\n    cursor: pointer;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .flight__item:not(:last-child) {\n      border-right: 1px solid black;\n      text-align: center;\n      padding: 0 0.5rem; }\n  .flight__remarks {\n    padding-left: 4px; }\n  .flight--transient {\n    grid-template-columns: repeat(3, 1fr) 4fr; }\n  .red {\n  background: linear-gradient(to right, #fff5e7, red); }\n  .yellow {\n  background: linear-gradient(to right, #fff5e7, yellow); }\n  .purple {\n  background: linear-gradient(to right, #fff5e7, #df1fdf 110%); }\n  .green {\n  background: linear-gradient(to right, #fff5e7, green 125%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2ZsaWdodC9mbGlnaHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUVaO0lBT0UsZUFBZTtJQUNmLHNCQUFzQjtJQUV0Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBO0VBWmxCO01BRUcsNkJBQTZCO01BQzdCLGtCQUFrQjtNQUNsQixpQkFBaUIsRUFBQTtFQXVCckI7SUFDRSxpQkFBaUIsRUFBQTtFQUduQjtJQUNFLHlDQUF5QyxFQUFBO0VBSTdDO0VBQ0UsbURBQXVFLEVBQUE7RUFHekU7RUFDRSxzREFBMEUsRUFBQTtFQUc1RTtFQUNFLDREQUFnRixFQUFBO0VBR2xGO0VBQ0UsMERBQThFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZsaWdodC9mbGlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxpZ2h0IHtcbiAgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA1ZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyLjdyZW07XG4gIHBhZGRpbmc6IDNweDtcbiAgXG4gICZfX2l0ZW0ge1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIH1cbiAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gICZfX3RhaWwge1xuICAgIFxuICB9XG4gIFxuICAmX190aW1lIHtcbiAgICBcbiAgfVxuICBcbiAgJl9fZGF0ZSB7XG4gICAgXG4gIH1cbiAgXG4gICZfX3JlbWFya3Mge1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICB9XG4gIFxuICAmLS10cmFuc2llbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcikgNGZyO1xuICB9XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGxpZ2h0ZW4oYmxhbmNoZWRhbG1vbmQsIDUlKSwgcmVkKTtcbn1cblxuLnllbGxvdyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGlnaHRlbihibGFuY2hlZGFsbW9uZCwgNSUpLCB5ZWxsb3cpO1xufVxuXG4ucHVycGxlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBsaWdodGVuKGJsYW5jaGVkYWxtb25kLCA1JSksICNkZjFmZGYgMTEwJSk7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGlnaHRlbihibGFuY2hlZGFsbW9uZCwgNSUpLCBncmVlbiAxMjUlKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/flight/flight.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/flight/flight.component.ts ***!
  \*******************************************************/
/*! exports provided: FlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightComponent", function() { return FlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightComponent = /** @class */ (function () {
    // 
    // This component has to let parent component know it must rerender
    //
    function FlightComponent() {
        this.flightDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.requestChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newEditRequest = false;
    }
    FlightComponent.prototype.ngOnInit = function () {
        // remove conditional statement to apply styles to transients
        if (this.based)
            this.displayStyle = this.determineStyle();
    };
    FlightComponent.prototype.editFlight = function () {
        var _this = this;
        this.newEditRequest = !this.newEditRequest;
        // clicking on background will remove edit request from screen
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.request__backdrop').on('click', function (event) {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).is('.request__backdrop'))
                    _this.newEditRequest = !_this.newEditRequest;
            });
        }, 300);
    };
    // changes aircraft without page reload
    FlightComponent.prototype.planeChangeHandler = function (aircraft) {
        if (aircraft) {
            this.flight = aircraft;
            this.ngOnInit();
            this.requestChanged.emit(aircraft);
        }
        else
            this.flightDeleted.emit(true);
    };
    // this method determines if a flight should be given a background color
    FlightComponent.prototype.determineStyle = function () {
        if (this.flight.RON)
            return 'green';
        if (this.flight.date)
            var date = this.flight.date;
        if (this.flight.time)
            var time = this.flight.time;
        if (!date)
            return '';
        var now = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local();
        var diff;
        var year = Number(date.slice(0, 4));
        var month = Number(date.slice(5, 7));
        var day = Number(date.slice(8, 10));
        if (time) {
            var hours = Number(time.slice(0, 2));
            var minutes = Number(time.slice(2, 4));
            date = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local(year, month, day, hours, minutes);
            diff = now.diff(date, 'days').toObject().days;
            // turns red if date is today, there's a time, and it's 30 minutes prior to over
            if (now.plus({ minutes: 30 }) > date && date.day == now.day && diff < 1 && diff > -1)
                return 'red';
        }
        date = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].local(year, month, day);
        diff = now.diff(date, 'days').toObject().days;
        // checks if date is today
        if (diff > -1 && diff < 1 && now.day == date.day)
            return 'yellow';
        // checks if date is specifically tomorrow
        if (diff > -2 && diff < 2 && now.plus({ days: 1 }).day == date.day)
            return 'purple';
        return '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlightComponent.prototype, "flight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FlightComponent.prototype, "based", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FlightComponent.prototype, "flightDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FlightComponent.prototype, "requestChanged", void 0);
    FlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flight',
            template: __webpack_require__(/*! ./flight.component.html */ "./src/app/components/flight/flight.component.html"),
            styles: [__webpack_require__(/*! ./flight.component.scss */ "./src/app/components/flight/flight.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FlightComponent);
    return FlightComponent;
}());



/***/ }),

/***/ "./src/app/components/hangar-requests/hangar-requests.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/hangar-requests/hangar-requests.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hangar-requests\">\n  <div class=\"hangar-requests__header\">Hangar Requests</div>\n  <app-flight *ngFor=\"let flight of flights\" [flight]=\"flight\" (flightDeleted)=\"flightDeleteHandler($event)\" (requestChanged)=\"requestChangeHandler($event)\"></app-flight>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hangar-requests/hangar-requests.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/hangar-requests/hangar-requests.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hangar-requests {\n  min-height: 15rem; }\n  .hangar-requests__header {\n    border-bottom: 1px solid black;\n    padding-bottom: .5rem;\n    margin-bottom: .5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2hhbmdhci1yZXF1ZXN0cy9oYW5nYXItcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUIsRUFBQTtFQUVqQjtJQUNFLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hhbmdhci1yZXF1ZXN0cy9oYW5nYXItcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFuZ2FyLXJlcXVlc3RzIHtcbiAgbWluLWhlaWdodDogMTVyZW07XG4gIFxuICAmX19oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/hangar-requests/hangar-requests.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/hangar-requests/hangar-requests.component.ts ***!
  \*************************************************************************/
/*! exports provided: HangarRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangarRequestsComponent", function() { return HangarRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HangarRequestsComponent = /** @class */ (function () {
    function HangarRequestsComponent(data) {
        this.data = data;
        this.requestChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HangarRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getHangarRequests().subscribe(function (flights) {
            _this.flights = flights;
        });
    };
    HangarRequestsComponent.prototype.flightDeleteHandler = function (deleted) {
        if (deleted)
            this.ngOnInit();
    };
    HangarRequestsComponent.prototype.requestChangeHandler = function (request) {
        this.ngOnInit();
        this.requestChanged.emit(request);
    };
    HangarRequestsComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HangarRequestsComponent.prototype, "planeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HangarRequestsComponent.prototype, "requestChanged", void 0);
    HangarRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hangar-requests',
            template: __webpack_require__(/*! ./hangar-requests.component.html */ "./src/app/components/hangar-requests/hangar-requests.component.html"),
            styles: [__webpack_require__(/*! ./hangar-requests.component.scss */ "./src/app/components/hangar-requests/hangar-requests.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HangarRequestsComponent);
    return HangarRequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/hangar/hangar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/hangar/hangar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hangar\">\n  <div class=\"hangar__header hangar__header--{{ hangar }}\">Hangar {{ hangar }}</div>\n  <app-plane *ngFor=\"let plane of planes\" [plane]=\"plane\"></app-plane>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hangar/hangar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/hangar/hangar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hangar {\n  border: 1px solid black;\n  margin: 1rem; }\n  .hangar__header {\n    padding: 3px;\n    background: linear-gradient(to right, #fff5e7 20%, #b00 95%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2hhbmdhci9oYW5nYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBO0VBRVo7SUFDRSxZQUFZO0lBQ1osNERBQXNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hhbmdhci9oYW5nYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3Itb3N1OiAjYjAwO1xuJGNvbG9yLWdyZXk6ICNlZWU7XG5cbi5oYW5nYXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxcmVtO1xuICBcbiAgJl9faGVhZGVyIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBsaWdodGVuKGJsYW5jaGVkYWxtb25kLCA1JSkgMjAlLCAkY29sb3Itb3N1IDk1JSk7XG4gICAgXG4gICAgJi0tMSB7XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgJi0tNCB7XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgJi0tNyB7XG4gICAgIFxuICAgIH1cbiAgICBcbiAgICAmLS05IHtcbiAgICAgIFxuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/hangar/hangar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/hangar/hangar.component.ts ***!
  \*******************************************************/
/*! exports provided: HangarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangarComponent", function() { return HangarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HangarComponent = /** @class */ (function () {
    function HangarComponent(data) {
        this.data = data;
    }
    HangarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPlanesByHangar(this.hangar).subscribe(function (planes) {
            _this.planes = planes;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HangarComponent.prototype, "hangar", void 0);
    HangarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hangar',
            template: __webpack_require__(/*! ./hangar.component.html */ "./src/app/components/hangar/hangar.component.html"),
            styles: [__webpack_require__(/*! ./hangar.component.scss */ "./src/app/components/hangar/hangar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HangarComponent);
    return HangarComponent;
}());



/***/ }),

/***/ "./src/app/components/hangared-aircraft/hangared-aircraft.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/hangared-aircraft/hangared-aircraft.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hangared-aircraft\">\n  <div class=\"hangared-aircraft__header\">Hangared Aircraft</div>\n  <app-flight *ngFor=\"let flight of flights\" [flight]=\"flight\" (flightDeleted)=\"flightDeleteHandler($event)\" (requestChanged)=\"requestChangeHandler($event)\"></app-flight>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hangared-aircraft/hangared-aircraft.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/hangared-aircraft/hangared-aircraft.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hangared-aircraft {\n  min-height: 15rem; }\n  .hangared-aircraft__header {\n    border-bottom: 1px solid black;\n    padding-bottom: .5rem;\n    margin-bottom: .5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2hhbmdhcmVkLWFpcmNyYWZ0L2hhbmdhcmVkLWFpcmNyYWZ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUE7RUFFakI7SUFDRSw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oYW5nYXJlZC1haXJjcmFmdC9oYW5nYXJlZC1haXJjcmFmdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oYW5nYXJlZC1haXJjcmFmdCB7XG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xuICBcbiAgJl9faGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/hangared-aircraft/hangared-aircraft.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/hangared-aircraft/hangared-aircraft.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HangaredAircraftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangaredAircraftComponent", function() { return HangaredAircraftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HangaredAircraftComponent = /** @class */ (function () {
    function HangaredAircraftComponent(data) {
        this.data = data;
        this.requestChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HangaredAircraftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getHangaredAircraft().subscribe(function (flights) { return _this.flights = flights; });
    };
    HangaredAircraftComponent.prototype.flightDeleteHandler = function (deleted) {
        if (deleted)
            this.ngOnInit();
    };
    HangaredAircraftComponent.prototype.requestChangeHandler = function (request) {
        this.ngOnInit();
        this.requestChanged.emit(request);
    };
    HangaredAircraftComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HangaredAircraftComponent.prototype, "planeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HangaredAircraftComponent.prototype, "requestChanged", void 0);
    HangaredAircraftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hangared-aircraft',
            template: __webpack_require__(/*! ./hangared-aircraft.component.html */ "./src/app/components/hangared-aircraft/hangared-aircraft.component.html"),
            styles: [__webpack_require__(/*! ./hangared-aircraft.component.scss */ "./src/app/components/hangared-aircraft/hangared-aircraft.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HangaredAircraftComponent);
    return HangaredAircraftComponent;
}());



/***/ }),

/***/ "./src/app/components/notice/notice.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/notice/notice.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notice\" (dblclick)=\"editNotice()\">\n  <span class=\"notice__text\">{{ text }}</span> \n</div>\n"

/***/ }),

/***/ "./src/app/components/notice/notice.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/notice/notice.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notice {\n  cursor: pointer;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .notice__text {\n    margin-left: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL25vdGljZS9ub3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBRXRCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7RUFFakI7SUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWNlL25vdGljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpY2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gICZfX3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/notice/notice.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/notice/notice.component.ts ***!
  \*******************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoticeComponent = /** @class */ (function () {
    function NoticeComponent() {
        this.editNoticeBoolChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editNoticeObjChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NoticeComponent.prototype.ngOnInit = function () {
        this.text = this.notice.text;
        this.noticeCopy = this.notice;
    };
    NoticeComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    NoticeComponent.prototype.editNotice = function () {
        var _this = this;
        this.editNoticeObjChange.emit(this.noticeCopy);
        this.editNoticeBoolChange.emit(!this.editNoticeBool);
        // clicking on background will remove edit special notice from screen
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.special-notices__backdrop').on('click', function (event) {
                if (jquery__WEBPACK_IMPORTED_MODULE_1__(event.target).is('.special-notices__backdrop'))
                    _this.editNoticeBoolChange.emit(!_this.editNoticeBool);
            });
        }, 300);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoticeComponent.prototype, "notice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoticeComponent.prototype, "newNoticeObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NoticeComponent.prototype, "editNoticeBool", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NoticeComponent.prototype, "editNoticeBoolChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoticeComponent.prototype, "editNoticeObj", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NoticeComponent.prototype, "editNoticeObjChange", void 0);
    NoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice',
            template: __webpack_require__(/*! ./notice.component.html */ "./src/app/components/notice/notice.component.html"),
            styles: [__webpack_require__(/*! ./notice.component.scss */ "./src/app/components/notice/notice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticeComponent);
    return NoticeComponent;
}());



/***/ }),

/***/ "./src/app/components/plane/plane.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/plane/plane.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"plane\">\n  <div class=\"plane__tail\" (dblclick)=\"newFlight()\">{{ tail }}</div>\n  <div class=\"plane__flights\">\n    <app-flight *ngFor=\"let flight of flights\" [flight]=\"flight\" [based]=\"true\" class=\"app-flight\" (flightDeleted)=\"flightDeleteHandler($event)\"></app-flight>\n  </div>\n</div>\n<app-request *ngIf=\"newRequest\" [(newRequest)]=\"newRequest\" [tail]=\"tail\" (planeChange)=\"planeChangeHandler($event)\"></app-request>\n"

/***/ }),

/***/ "./src/app/components/plane/plane.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/plane/plane.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plane {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  width: 100%;\n  border-top: 1px solid black;\n  cursor: pointer; }\n  .plane__tail {\n    margin: .4rem;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3BsYW5lL3BsYW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtFQU1mO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUV0Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGFuZS9wbGFuZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFuZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgJl9fZmxpZ2h0cyB7XG4gICAgXG4gIH1cbiAgXG4gICZfX3RhaWwge1xuICAgIG1hcmdpbjogLjRyZW07XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/plane/plane.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/plane/plane.component.ts ***!
  \*****************************************************/
/*! exports provided: PlaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaneComponent", function() { return PlaneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaneComponent = /** @class */ (function () {
    function PlaneComponent(data) {
        this.data = data;
        this.newRequest = false;
    }
    PlaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tail = this.plane.tail;
        this.data.getFlightsByTail(this.tail).subscribe(function (flights) { return _this.flights = flights; });
    };
    PlaneComponent.prototype.planeChangeHandler = function (aircraft) {
        this.plane = aircraft;
        this.ngOnInit();
    };
    PlaneComponent.prototype.flightDeleteHandler = function (deleted) {
        if (deleted)
            this.ngOnInit();
    };
    PlaneComponent.prototype.newFlight = function () {
        var _this = this;
        this.newRequest = !this.newRequest;
        // clicking on background will remove new request from screen
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.request__backdrop').on('click', function (event) {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).is('.request__backdrop'))
                    _this.newRequest = !_this.newRequest;
            });
        }, 300);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlaneComponent.prototype, "plane", void 0);
    PlaneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plane',
            template: __webpack_require__(/*! ./plane.component.html */ "./src/app/components/plane/plane.component.html"),
            styles: [__webpack_require__(/*! ./plane.component.scss */ "./src/app/components/plane/plane.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PlaneComponent);
    return PlaneComponent;
}());



/***/ }),

/***/ "./src/app/components/request/request.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/request/request.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"request__backdrop\">\n  <div class=\"request\">\n    <h2 class=\"request__header\">New Request</h2>\n    <form class=\"request__form\">\n      \n      <div class=\"request__form__left\">\n        <div class=\"request__form__box\">\n          <label for=\"tail\" class=\"request__form__box__label\">Tail</label><input type=\"text\" name=\"tail\" [(ngModel)]=\"aircraft.tail\" class=\"request__form__box__input\" />\n        </div>\n        <div class=\"request__form__box\">\n          <label for=\"date\" class=\"request__form__box__label\">Date</label><input type=\"date\" name=\"date\" [(ngModel)]=\"aircraft.date\" class=\"request__form__box__input\" />\n        </div>\n        <div class=\"request__form__box\">\n          <label for=\"time\" class=\"request__form__box__label\">Time</label><input type=\"text\" name=\"time\" [(ngModel)]=\"aircraft.time\" class=\"request__form__box__input\" maxlength=\"4\" />\n        </div>\n        <div class=\"request__form__left__buttons\">\n          <button class=\"request__form__left__buttons--submit btn\" (click)=\"submitRequest()\">Submit</button>\n          <button class=\"request__form__left__buttons--discard btn\" (click)=\"discardRequest()\">Discard</button>\n        </div>\n      </div>\n      <div class=\"request__form__right\">\n        <div class=\"request__form__right__main\">\n          <div class=\"request__form__box\">\n            <label for=\"remarks\" class=\"request__form__box__label\">Remarks</label>\n            <textarea name=\"remarks\" [(ngModel)]=\"aircraft.remarks\" cols=\"30\" rows=\"10\" class=\"request__form__box__input\"></textarea>\n          </div>\n          <div class=\"request__form__RON\">\n            <label for=\"RON\" class=\"request__form__RON__label\">RON</label>\n            <input type=\"checkbox\" name=\"RON\" [(ngModel)]=\"aircraft.RON\" value=\"true\" class=\"request__form__RON__input\" />\n          </div>\n        </div>\n        <div>\n          <span class=\"request__form__box__header\">Transient Aircraft Hangar</span>\n          <div class=\"request__form__box__radio\">\n            <label for=\"hangared\" class=\"request__form__box__label\">None</label>\n            <input type=\"radio\" value=\"none\" [(ngModel)]=\"aircraft.hangared\" name=\"hangared\" class=\"request__form__box__radio__input\">\n          </div>\n          <div class=\"request__form__box__radio\">\n            <label for=\"hangared\" class=\"request__form__box__label\">Requested</label>\n            <input type=\"radio\" value=\"requested\" [(ngModel)]=\"aircraft.hangared\" name=\"hangared\" class=\"request__form__box__radio__input\">\n          </div>\n          <div class=\"request__form__box__radio\">\n            <label for=\"hangared\" class=\"request__form__box__label\">Hangared</label>\n            <input type=\"radio\" value=\"hangared\" [(ngModel)]=\"aircraft.hangared\" name=\"hangared\" class=\"request__form__box__radio__input\">\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/request/request.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/request/request.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".request {\n  position: fixed;\n  padding: 5rem;\n  width: 50%;\n  background-color: #ecdfce;\n  top: 30%;\n  left: 20%;\n  border-radius: 4px; }\n  @media only screen and (max-width: 75em) {\n    .request {\n      top: 0;\n      left: 0;\n      margin: 2rem; } }\n  @media only screen and (max-width: 56.25em) {\n    .request {\n      width: 80%; } }\n  @media only screen and (max-width: 37.5em) {\n    .request {\n      padding: 1.5rem; } }\n  .request__backdrop {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.4); }\n  .request__form {\n    display: grid;\n    grid-template-columns: 2fr 5fr; }\n  @media only screen and (max-width: 75em) {\n      .request__form {\n        display: flex;\n        flex-direction: column; } }\n  .request__form__box {\n      margin: 1rem;\n      display: grid; }\n  .request__form__box__label {\n        margin-bottom: .7rem; }\n  .request__form__box__input {\n        padding: .5rem;\n        width: 100%;\n        border: none;\n        border-radius: 2px;\n        font-family: Roboto, sans-serif; }\n  .request__form__box__radio {\n        display: flex;\n        justify-content: space-between;\n        margin: 1rem; }\n  .request__form__RON {\n      margin: 1rem; }\n  .request__form__RON__label {\n        margin: 0 1rem; }\n  .request__form__left__buttons {\n      margin-left: 1rem; }\n  .request__form__left__buttons--submit {\n        background-color: darkgreen;\n        color: white;\n        margin-right: 3px; }\n  .request__form__left__buttons--discard {\n        background-color: firebrick;\n        color: white; }\n  .request__form__right {\n      display: grid;\n      grid-template-columns: 2fr 1fr; }\n  @media only screen and (max-width: 75em) {\n        .request__form__right {\n          display: flex;\n          flex-direction: column; } }\n  .btn {\n  padding: 1rem;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  font-family: Roboto, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQixFQUFBO0VBbkJoQjtJQVlKO01BVUksTUFBTTtNQUNOLE9BQU87TUFDUCxZQUFZLEVBQUEsRUFzR2Y7RUExSEc7SUFRSjtNQWdCSSxVQUFVLEVBQUEsRUFrR2I7RUF0SEc7SUFJSjtNQW9CSSxlQUFlLEVBQUEsRUE4RmxCO0VBM0ZDO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUCw4QkFBc0IsRUFBQTtFQU94QjtJQUNFLGFBQWE7SUFDYiw4QkFBOEIsRUFBQTtFQWxEOUI7TUFnREY7UUFLSSxhQUFhO1FBQ2Isc0JBQXNCLEVBQUEsRUF1RXpCO0VBcEVDO01BQ0UsWUFBWTtNQUNaLGFBQWEsRUFBQTtFQUViO1FBQ0Usb0JBQW9CLEVBQUE7RUFHdEI7UUFDRSxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsK0JBQStCLEVBQUE7RUFHakM7UUFDRSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLFlBQVksRUFBQTtFQVNoQjtNQUNFLFlBQVksRUFBQTtFQUVaO1FBQ0UsY0FBYyxFQUFBO0VBVWhCO01BQ0UsaUJBQWlCLEVBQUE7RUFFakI7UUFDRSwyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLGlCQUFpQixFQUFBO0VBR25CO1FBQ0UsMkJBQTJCO1FBQzNCLFlBQVksRUFBQTtFQUtsQjtNQUNFLGFBQWE7TUFDYiw4QkFBOEIsRUFBQTtFQXJIaEM7UUFtSEE7VUFLSSxhQUFhO1VBQ2Isc0JBQXNCLEVBQUEsRUFFekI7RUFLTDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwrQkFBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVxdWVzdC9yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHJlc3BvbmQoJGJyZWFrKSB7XG4gIEBpZiAkYnJlYWsgPT0gbGFwdG9wIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHsgQGNvbnRlbnQgfSAvLyAxMjAwcHhcbiAgfVxuICBcbiAgQGlmICRicmVhayA9PSB0YWJsZXQge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkgeyBAY29udGVudCB9IC8vIDkwMHB4XG4gIH1cbiAgXG4gIEBpZiAkYnJlYWsgPT0gcGhvbmUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcuNWVtKSB7IEBjb250ZW50IH0gLy8gNjAwcHhcbiAgfVxufVxuXG4ucmVxdWVzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogNXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZGZjZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDIwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBcbiAgQGluY2x1ZGUgcmVzcG9uZChsYXB0b3ApIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IDJyZW07XG4gIH1cbiAgXG4gIEBpbmNsdWRlIHJlc3BvbmQodGFibGV0KSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICBcbiAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuICBcbiAgJl9fYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYShibGFjaywgMC40KTtcbiAgfVxuICBcbiAgJl9faGVhZGVyIHtcbiAgICBcbiAgfVxuICBcbiAgJl9fZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnI7XG4gICAgXG4gICAgQGluY2x1ZGUgcmVzcG9uZChsYXB0b3ApIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICBcbiAgICAmX19ib3gge1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIFxuICAgICAgJl9fbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuN3JlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJl9faW5wdXQge1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmX19yYWRpbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICBcbiAgICAgICAgJl9faW5wdXQge1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgJl9fUk9OIHtcbiAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgIFxuICAgICAgJl9fbGFiZWwge1xuICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJl9faW5wdXQge1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJl9fbGVmdCB7XG4gICAgICBcbiAgICAgICZfX2J1dHRvbnMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgXG4gICAgICAgICYtLXN1Ym1pdCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi0tZGlzY2FyZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmlyZWJyaWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmX19yaWdodCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgICAgXG4gICAgICBAaW5jbHVkZSByZXNwb25kKGxhcHRvcCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/request/request.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/request/request.component.ts ***!
  \*********************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_airplane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/airplane */ "./src/app/models/airplane.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestComponent = /** @class */ (function () {
    function RequestComponent(data) {
        this.data = data;
        this.aircraft = new _models_airplane__WEBPACK_IMPORTED_MODULE_2__["Airplane"]();
        this.newRequestChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.planeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RequestComponent.prototype.ngOnInit = function () {
        if (this.tail)
            this.aircraft.tail = this.tail;
    };
    RequestComponent.prototype.submitRequest = function () {
        var _this = this;
        this.data.newFlight(this.aircraft).subscribe(function (response) {
            _this.planeChange.emit(_this.aircraft);
            _this.newRequestChange.emit(false);
        });
    };
    RequestComponent.prototype.discardRequest = function () {
        this.aircraft = new _models_airplane__WEBPACK_IMPORTED_MODULE_2__["Airplane"]();
        this.newRequestChange.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RequestComponent.prototype, "tail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RequestComponent.prototype, "newRequest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RequestComponent.prototype, "newRequestChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RequestComponent.prototype, "planeChange", void 0);
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/components/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.scss */ "./src/app/components/request/request.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/components/special-notices/special-notices.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/special-notices/special-notices.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"special-notices\">\n  <div class=\"special-notices__header\">Special Notices</div>\n  <app-notice *ngFor=\"let notice of notices\" [notice]=\"notice\" [(editNoticeBool)]=\"editNoticeBool\" [(editNoticeObj)]=\"editNoticeObj\"></app-notice>\n</div>\n\n<div class=\"special-notices__backdrop\" *ngIf=\"newNoticeBool\">\n  <div class=\"new-notice\">\n    <div class=\"new-notice__header\">New Special Notice</div>\n    <form class=\"new-notice__form\">\n      <textarea name=\"text\" [(ngModel)]=\"newNoticeObj.text\" placeholder=\"Text...\" class=\"new-notice__form__input\"></textarea>\n      <div class=\"new-notice__buttons\">\n        <button class=\"new-notice__form__button form__button new-notice__form__button--submit\" (click)=\"submitNewNotice()\">Submit</button>\n        <button class=\"new-notice__form__button form__button new-notice__form__button--discard new-notice-discard\" (click)=\"discardNotice()\">Discard</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"special-notices__backdrop\" *ngIf=\"editNoticeBool\">\n  <div class=\"edit-notice\">\n    <div class=\"edit-notice__header\">Edit Special Notice</div>\n    <form class=\"edit-notice__form\">\n      <textarea name=\"text\" [(ngModel)]=\"editNoticeObj.text\" placeholder=\"Text...\" class=\"edit-notice__form__input\"></textarea>\n      <div class=\"edit-notice__buttons\">\n        <button class=\"edit-notice__form__button form__button edit-notice__form__button--submit\" (click)=\"submitEditNotice()\">Submit Changes</button>\n        <button class=\"edit-notice__form__button form__button edit-notice__form__button--discard discard\" (click)=\"discardEditNotice()\">Discard Changes</button>\n        <button class=\"edit-notice__form__button form__button edit-notice__form__button--delete\" (click)=\"deleteNotice()\">Delete Notice</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/special-notices/special-notices.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/special-notices/special-notices.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".special-notices {\n  min-height: 15rem; }\n  .special-notices__header {\n    border-bottom: 1px solid black;\n    padding-bottom: .5rem;\n    margin-bottom: .5rem; }\n  .special-notices__backdrop {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.4); }\n  .new-notice {\n  position: fixed;\n  padding: 5rem;\n  width: 32%;\n  background-color: #ecdfce;\n  top: 30%;\n  left: 40%; }\n  @media only screen and (max-width: 75em) {\n    .new-notice {\n      width: 65%;\n      left: 25%; } }\n  @media only screen and (max-width: 37.5em) {\n    .new-notice {\n      top: 0;\n      left: 0;\n      width: 90%;\n      margin: 2rem;\n      padding: 3rem; } }\n  .new-notice__header {\n    margin-bottom: .5rem; }\n  .new-notice__form__input {\n    border: none;\n    width: 100%;\n    height: 30rem;\n    font-family: 'Roboto', sans-serif;\n    padding: .5rem; }\n  @media only screen and (max-width: 37.5em) {\n      .new-notice__form__input {\n        font-size: 1.2rem; } }\n  .new-notice__form__button {\n    color: white;\n    width: 25%; }\n  @media only screen and (max-width: 37.5em) {\n      .new-notice__form__button {\n        width: auto; } }\n  .new-notice__form__button--submit {\n      background-color: darkgreen; }\n  .new-notice__form__button--discard {\n      background-color: firebrick; }\n  .new-notice__buttons {\n    margin-top: .5rem; }\n  @media only screen and (max-width: 37.5em) {\n      .new-notice__buttons {\n        display: flex;\n        flex-direction: column; } }\n  .edit-notice {\n  position: fixed;\n  padding: 5rem;\n  width: 32%;\n  background-color: #ecdfce;\n  top: 30%;\n  left: 40%; }\n  @media only screen and (max-width: 75em) {\n    .edit-notice {\n      width: 65%;\n      left: 25%; } }\n  @media only screen and (max-width: 37.5em) {\n    .edit-notice {\n      top: 0;\n      left: 0;\n      width: 90%;\n      margin: 2rem;\n      padding: 3rem; } }\n  .edit-notice__header {\n    margin-bottom: .5rem; }\n  .edit-notice__form__input {\n    border: none;\n    width: 100%;\n    height: 30rem;\n    font-family: 'Roboto', sans-serif;\n    padding: .5rem; }\n  @media only screen and (max-width: 37.5em) {\n      .edit-notice__form__input {\n        font-size: 1.2rem; } }\n  .edit-notice__form__button {\n    color: white;\n    width: 25%; }\n  @media only screen and (max-width: 37.5em) {\n      .edit-notice__form__button {\n        width: auto; } }\n  .edit-notice__form__button--submit {\n      background-color: darkgreen; }\n  .edit-notice__form__button--discard {\n      background-color: firebrick; }\n  .edit-notice__form__button--delete {\n      background-color: teal; }\n  .edit-notice__buttons {\n    margin-top: .5rem; }\n  @media only screen and (max-width: 37.5em) {\n      .edit-notice__buttons {\n        display: flex;\n        flex-direction: column; } }\n  .form__button {\n  margin: .5rem;\n  padding: .8rem;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3NwZWNpYWwtbm90aWNlcy9zcGVjaWFsLW5vdGljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDRSxpQkFBaUIsRUFBQTtFQUVqQjtJQUNFLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsb0JBQW9CLEVBQUE7RUFHdEI7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUFzQixFQUFBO0VBSTFCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixTQUFTLEVBQUE7RUFyQ1A7SUErQko7TUFTSSxVQUFVO01BQ1YsU0FBUyxFQUFBLEVBd0RaO0VBekZHO0lBdUJKO01BY0ksTUFBTTtNQUNOLE9BQU87TUFDUCxVQUFVO01BQ1YsWUFBWTtNQUNaLGFBQWEsRUFBQSxFQWdEaEI7RUE3Q0M7SUFDRSxvQkFBb0IsRUFBQTtFQUtwQjtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxjQUFjLEVBQUE7RUF2RGhCO01Ba0RBO1FBUUksaUJBQWlCLEVBQUEsRUFFcEI7RUFFRDtJQUNFLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFoRVo7TUE4REE7UUFLSSxXQUFXLEVBQUEsRUFVZDtFQVBDO01BQ0UsMkJBQTJCLEVBQUE7RUFHN0I7TUFDRSwyQkFBMkIsRUFBQTtFQU1qQztJQUNFLGlCQUFpQixFQUFBO0VBbEZqQjtNQWlGRjtRQUlJLGFBQWE7UUFDYixzQkFBc0IsRUFBQSxFQUV6QjtFQUdIO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixTQUFTLEVBQUE7RUF6R1A7SUFtR0o7TUFTSSxVQUFVO01BQ1YsU0FBUyxFQUFBLEVBOERaO0VBbktHO0lBMkZKO01BY0ksTUFBTTtNQUNOLE9BQU87TUFDUCxVQUFVO01BQ1YsWUFBWTtNQUNaLGFBQWEsRUFBQSxFQXNEaEI7RUFuREM7SUFDRSxvQkFBb0IsRUFBQTtFQUtwQjtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxjQUFjLEVBQUE7RUEzSGhCO01Bc0hBO1FBUUksaUJBQWlCLEVBQUEsRUFFcEI7RUFFRDtJQUNFLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFwSVo7TUFrSUE7UUFLSSxXQUFXLEVBQUEsRUFpQmQ7RUFkQztNQUVFLDJCQUEyQixFQUFBO0VBRzdCO01BRUUsMkJBQTJCLEVBQUE7RUFHN0I7TUFFRSxzQkFBc0IsRUFBQTtFQUs1QjtJQUNFLGlCQUFpQixFQUFBO0VBNUpqQjtNQTJKRjtRQUlJLGFBQWE7UUFDYixzQkFBc0IsRUFBQSxFQUV6QjtFQUdIO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BlY2lhbC1ub3RpY2VzL3NwZWNpYWwtbm90aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiByZXNwb25kKCRicmVhaykge1xuICBAaWYgJGJyZWFrID09IGxhcHRvcCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH0gLy8gMTIwMHB4XG4gIH1cbiAgXG4gIEBpZiAkYnJlYWsgPT0gdGFibGV0IHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHsgQGNvbnRlbnQgfSAvLyA5MDBweFxuICB9XG4gIFxuICBAaWYgJGJyZWFrID09IHBob25lIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3LjVlbSkgeyBAY29udGVudCB9IC8vIDYwMHB4XG4gIH1cbn1cblxuLnNwZWNpYWwtbm90aWNlcyB7XG4gIG1pbi1oZWlnaHQ6IDE1cmVtO1xuICBcbiAgJl9faGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICB9XG4gIFxuICAmX19iYWNrZHJvcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKGJsYWNrLCAwLjQpO1xuICB9XG59XG5cbi5uZXctbm90aWNlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiA1cmVtO1xuICB3aWR0aDogMzIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNkZmNlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNDAlO1xuICBcbiAgQGluY2x1ZGUgcmVzcG9uZChsYXB0b3ApIHtcbiAgICB3aWR0aDogNjUlO1xuICAgIGxlZnQ6IDI1JTtcbiAgfVxuICBcbiAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gIH1cbiAgXG4gICZfX2hlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIH1cbiAgXG4gICZfX2Zvcm0ge1xuICAgIFxuICAgICZfX2lucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMHJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgXG4gICAgICBAaW5jbHVkZSByZXNwb25kKHBob25lKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmX19idXR0b24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIFxuICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi0tc3VibWl0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLS1kaXNjYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmlyZWJyaWNrO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuICBcbiAgJl9fYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgXG4gICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG59XG5cbi5lZGl0LW5vdGljZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogNXJlbTtcbiAgd2lkdGg6IDMyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZGZjZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDQwJTtcbiAgXG4gIEBpbmNsdWRlIHJlc3BvbmQobGFwdG9wKSB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBsZWZ0OiAyNSU7XG4gIH1cbiAgXG4gIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICB9XG4gIFxuICAmX19oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICB9XG4gIFxuICAmX19mb3JtIHtcbiAgICBcbiAgICAmX19pbnB1dCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMzByZW07XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgIFxuICAgICAgQGluY2x1ZGUgcmVzcG9uZChwaG9uZSkge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBcbiAgICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG4gICAgICBcbiAgICAgICYtLXN1Ym1pdCB7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG4gICAgICB9XG4gICAgICBcbiAgICAgICYtLWRpc2NhcmQge1xuICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmlyZWJyaWNrO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLS1kZWxldGUge1xuICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gICZfX2J1dHRvbnMge1xuICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIFxuICAgIEBpbmNsdWRlIHJlc3BvbmQocGhvbmUpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybV9fYnV0dG9uIHtcbiAgbWFyZ2luOiAuNXJlbTtcbiAgcGFkZGluZzogLjhyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/special-notices/special-notices.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/special-notices/special-notices.component.ts ***!
  \*************************************************************************/
/*! exports provided: SpecialNoticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialNoticesComponent", function() { return SpecialNoticesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecialNoticesComponent = /** @class */ (function () {
    function SpecialNoticesComponent(data) {
        this.data = data;
        this.newNoticeBool = false;
        this.newNoticeBoolChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editNoticeBool = false;
    }
    SpecialNoticesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getAllNotices().subscribe(function (notices) { return _this.notices = notices; });
        this.newNoticeObj = {};
        this.editNoticeObj = {};
    };
    SpecialNoticesComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.data.getAllNotices().subscribe(function (notices) { return _this.notices = notices; });
    };
    SpecialNoticesComponent.prototype.reload = function () {
    };
    // New Notice Methods
    SpecialNoticesComponent.prototype.submitNewNotice = function () {
        var _this = this;
        this.data.submitNotice(this.newNoticeObj).subscribe(function (response) {
            _this.notices = _this.notices.concat([response]);
            _this.newNoticeObj = {};
            _this.newNoticeBool = false;
            _this.newNoticeBoolChange.emit(false);
        });
    };
    SpecialNoticesComponent.prototype.discardNotice = function () {
        this.newNoticeObj = {};
        this.newNoticeBool = false;
        this.newNoticeBoolChange.emit(false);
    };
    // Edit Notice Methods
    SpecialNoticesComponent.prototype.submitEditNotice = function () {
        var _this = this;
        this.data.editNotice(this.editNoticeObj).subscribe(function (response) {
            _this.editNoticeBool = false;
        });
    };
    SpecialNoticesComponent.prototype.discardEditNotice = function () {
        this.editNoticeObj = {};
        this.editNoticeBool = !this.editNoticeBool;
    };
    SpecialNoticesComponent.prototype.deleteNotice = function () {
        var _this = this;
        this.data.deleteNotice(this.editNoticeObj._id).subscribe(function (response) {
            _this.ngOnInit();
            _this.editNoticeObj = {};
            _this.editNoticeBool = !_this.editNoticeBool;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SpecialNoticesComponent.prototype, "newNoticeBool", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpecialNoticesComponent.prototype, "newNoticeBoolChange", void 0);
    SpecialNoticesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-special-notices',
            template: __webpack_require__(/*! ./special-notices.component.html */ "./src/app/components/special-notices/special-notices.component.html"),
            styles: [__webpack_require__(/*! ./special-notices.component.scss */ "./src/app/components/special-notices/special-notices.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SpecialNoticesComponent);
    return SpecialNoticesComponent;
}());



/***/ }),

/***/ "./src/app/components/transients/transients.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/transients/transients.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"transients\">\n  <div class=\"transients__header\">Transients</div>\n  <app-flight *ngFor=\"let flight of flights\" [flight]=\"flight\" (flightDeleted)=\"flightDeleteHandler($event)\" (requestChanged)=\"requestChangeHandler($event)\"></app-flight>\n</div>\n"

/***/ }),

/***/ "./src/app/components/transients/transients.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/transients/transients.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transients {\n  min-height: 15rem; }\n  .transients__header {\n    border-bottom: 1px solid black;\n    padding-bottom: .5rem;\n    margin-bottom: .5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9vc3Vfc2NoZWR1bGVfYm9hcmQvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3RyYW5zaWVudHMvdHJhbnNpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBO0VBRWpCO0lBQ0UsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNpZW50cy90cmFuc2llbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zaWVudHMge1xuICBtaW4taGVpZ2h0OiAxNXJlbTtcbiAgXG4gICZfX2hlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/transients/transients.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/transients/transients.component.ts ***!
  \***************************************************************/
/*! exports provided: TransientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransientsComponent", function() { return TransientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransientsComponent = /** @class */ (function () {
    function TransientsComponent(data) {
        this.data = data;
        this.requestChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TransientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getTransientFlights().subscribe(function (flights) {
            if (Array.isArray(flights))
                flights = flights.filter(function (flight) { return !flight.hangared || flight.hangared == 'none'; });
            _this.flights = flights;
        });
    };
    TransientsComponent.prototype.flightDeleteHandler = function (deleted) {
        if (deleted)
            this.ngOnInit();
    };
    TransientsComponent.prototype.requestChangeHandler = function (request) {
        this.ngOnInit();
        this.requestChanged.emit(request);
    };
    TransientsComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransientsComponent.prototype, "planeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TransientsComponent.prototype, "requestChanged", void 0);
    TransientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transients',
            template: __webpack_require__(/*! ./transients.component.html */ "./src/app/components/transients/transients.component.html"),
            styles: [__webpack_require__(/*! ./transients.component.scss */ "./src/app/components/transients/transients.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TransientsComponent);
    return TransientsComponent;
}());



/***/ }),

/***/ "./src/app/models/airplane.ts":
/*!************************************!*\
  !*** ./src/app/models/airplane.ts ***!
  \************************************/
/*! exports provided: Airplane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airplane", function() { return Airplane; });
var Airplane = /** @class */ (function () {
    function Airplane() {
        this.tail = '';
    }
    return Airplane;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getAllFlights = function () {
        return this.http.get('/flight/all');
    };
    DataService.prototype.getFlightsByTail = function (tail) {
        return this.http.get('/flight/tail/' + tail);
    };
    DataService.prototype.getFlightsByDate = function (date) {
        return this.http.get('/flight/date/' + date);
    };
    DataService.prototype.newFlight = function (flightData) {
        return this.http.post('/flight/new', flightData);
    };
    DataService.prototype.updateFlight = function (flightData) {
        return this.http.put('/flight', flightData);
    };
    DataService.prototype.deleteFlight = function (id) {
        return this.http.delete('/flight/' + id);
    };
    DataService.prototype.getTransientFlights = function () {
        return this.http.get('/flight/transient');
    };
    DataService.prototype.getHangarRequests = function () {
        return this.http.get('/flight/requested');
    };
    DataService.prototype.getHangaredAircraft = function () {
        return this.http.get('/flight/hangared');
    };
    DataService.prototype.getPlanesByHangar = function (hangar) {
        return this.http.get('/plane/hangar/' + hangar);
    };
    DataService.prototype.getAllNotices = function () {
        return this.http.get('/notice');
    };
    DataService.prototype.submitNotice = function (notice) {
        return this.http.post('/notice', notice);
    };
    DataService.prototype.editNotice = function (notice) {
        return this.http.put('/notice', notice);
    };
    DataService.prototype.deleteNotice = function (id) {
        return this.http.delete('/notice/' + id);
    };
    DataService.prototype.getUser = function () {
        return this.http.get('/getUser');
    };
    DataService.prototype.logout = function () {
        return this.http.get('/logout');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/environment/osu_schedule_board/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map