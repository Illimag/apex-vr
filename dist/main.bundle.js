webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 150;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(173);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AboutComponent = (function () {
    function AboutComponent(app) {
        this.appref = app;
        this.abouttext = "In early 2016, when 20th Century Fox approached us to create a 360 VR ad for the Deadpool film’s Facebook page, " +
            "we were taken into a whole new world of filmmaking. We were already working as advertising filmmakers, " +
            "focused on providing the highest quality video content to our customers ranging from startups to fortune 500 companies. " +
            "Since then, we have worked within this new world to create unique pieces for a number of companies looking for a creative " +
            "new way to present their products and services. We see 360 VR as the perfect way to ensure that your brand stands out, " +
            "so we are excited to now offer our 360 VR services exclusively through Apex 360 VR for customers " +
            "who, like us, value the opportunity to use this innovative new medium to tell their stories.";
        this.aboutinfo = 0;
    }
    AboutComponent.prototype.loaded = function () {
        var _this = this;
        setTimeout(function () { _this.appref.loadstate = "loaded"; }, 1000);
    };
    AboutComponent.prototype.toggleAbout = function (val) {
        this.aboutinfo = val;
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(335),
        styles: [__webpack_require__(326)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApexDifferenceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ApexDifferenceComponent = (function () {
    function ApexDifferenceComponent(app) {
        this.appref = app;
        this.differencetext = "Passionate, forward thinking filmmakers, determined to move the 360 VR " +
            "format forward. Having been on the forefront of this emerging art form, we have been working " +
            "within the community to create a filmmaking language, and push the boundaries " +
            "of what is possible and acceptable within this new medium. As such, " +
            "we have been and continue to use our skills and creativity to create the most " +
            "engaging video experiences for: narratives, advertisements, documentaries and corporate videos.";
    }
    ApexDifferenceComponent.prototype.loaded = function () {
        var _this = this;
        setTimeout(function () { _this.appref.loadstate = "loaded"; }, 1000);
    };
    ApexDifferenceComponent.prototype.ngOnInit = function () {
    };
    return ApexDifferenceComponent;
}());
ApexDifferenceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-apex-difference',
        template: __webpack_require__(336),
        styles: [__webpack_require__(327)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], ApexDifferenceComponent);

var _a;
//# sourceMappingURL=apex-difference.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(30);
/* harmony export (immutable) */ __webpack_exports__["a"] = navAnimations;

function navAnimations() {
    return navAnimate();
}
function navAnimate() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* trigger */])('animateNav', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('loading', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('loaded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('loading => loaded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('300ms ease-in')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('loaded => loading', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('300ms ease-out'))
    ]);
}
//# sourceMappingURL=nav.animations.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(30);
/* harmony export (immutable) */ __webpack_exports__["a"] = visibilityAnimations;

function visibilityAnimations() {
    return infoAnimations();
}
function infoAnimations() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* trigger */])('animateVisible', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('show => hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('300ms ease-in-out')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('hide => show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('300ms ease-in-out'))
    ]);
}
//# sourceMappingURL=visibility.animations.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__apex_difference_apex_difference_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_services_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_expandable_nav_nav_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_form_form_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__portfolio_portfolio_component__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__["a" /* HomePageComponent */]
    },
    {
        path: 'apex-difference',
        component: __WEBPACK_IMPORTED_MODULE_9__apex_difference_apex_difference_component__["a" /* ApexDifferenceComponent */]
    },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_10__services_services_component__["a" /* ServicesComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'portfolio',
        component: __WEBPACK_IMPORTED_MODULE_15__portfolio_portfolio_component__["a" /* PortfolioComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */]
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__apex_difference_apex_difference_component__["a" /* ApexDifferenceComponent */],
            __WEBPACK_IMPORTED_MODULE_10__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_form_form_component__["a" /* LeadFormComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_expandable_nav_nav_component__["a" /* MobileNavComponent */],
            __WEBPACK_IMPORTED_MODULE_15__portfolio_portfolio_component__["a" /* PortfolioComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* PreloadAllModules */] }),
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdRippleModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(30);
/* harmony export (immutable) */ __webpack_exports__["a"] = navLinkAnimations;

function navLinkAnimations() {
    return navLinkAnimate();
}
function navLinkAnimate() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* trigger */])('animateLink', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(-15%)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('inactive => active', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* group */])([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('0.4s ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                    opacity: 1
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('0.5s ease', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                    transform: 'translate3d(0, 0, 0)',
                }))
            ])
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('active => inactive', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* group */])([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('0.3s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                    opacity: 0
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('0.1s 0.3s ease', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                    transform: 'translate3d(15%, 0, 0)'
                }))
            ])
        ])
    ]);
}
//# sourceMappingURL=nav.link.animations.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(30);
/* harmony export (immutable) */ __webpack_exports__["a"] = navAnimations;

function navAnimations() {
    return navAnimate();
}
function navAnimate() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* trigger */])('navToggle', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('opened', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1,
            transform: 'scale(1.0)'
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('closed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0,
            transform: 'scale(0.0)'
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('closed => opened', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* keyframes */])([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'scale(0.0)', offset: 0 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'scale(1.0)', offset: 0.1 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'scale(1.0)', offset: 1.0 })
            ]))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('opened => closed', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* keyframes */])([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, transform: 'scale(1.0)', offset: 0 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'scale(1.0)', offset: 0.9 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'scale(0.0)', offset: 1.0 })
            ]))
        ])
    ]);
}
//# sourceMappingURL=nav.menu.animations.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_nav_menu_animations__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_nav_link_animations__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MobileNavComponent = (function () {
    function MobileNavComponent(router, activeroute) {
        this.router = router;
        this.activeroute = activeroute;
        this.navEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.navToggled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.initted = false;
        this.navstate = "closed";
        this.routes = [
            { href: "/home", name: "HOME", state: "inactive" },
            { href: "/apex-difference", name: "APEX DIFFERENCE", state: "inactive" },
            { href: "/services", name: "SERVICES", state: "inactive" },
            { href: "/about", name: "ABOUT US", state: "inactive" },
            { href: "/portfolio", name: "PORTFOLIO", state: "inactive" },
            { href: "/contact", name: "CONTACT", state: "inactive" }
        ];
        this.currentroute = this.routes[0].name;
    }
    ;
    MobileNavComponent.prototype.toggleNav = function () {
        this.navstate = this.navstate === 'closed' ? 'opened' : 'closed';
        this.navToggled.emit({ value: this.navstate });
        console.log(this.activeroute.root);
        console.log(this.router);
    };
    ;
    MobileNavComponent.prototype.changeState = function (element, i) {
        var _this = this;
        element[i].state = element[i].state === 'active' ? 'inactive' : 'active';
        i++;
        setTimeout(function () {
            if (i < element.length) {
                _this.changeState(_this.routes, i);
            }
        }, 50);
    };
    ;
    MobileNavComponent.prototype.animateLinks = function () {
        if (!this.initted) {
            this.initted = true;
            return;
        }
        this.changeState(this.routes, 0);
    };
    ;
    MobileNavComponent.prototype.navInit = function (route) {
        var _this = this;
        if (route.name === this.currentroute) {
            this.toggleNav();
            return;
        }
        this.currentroute = route.name;
        this.navEmit.emit({
            value: "loading"
        });
        setTimeout(function () { _this.router.navigateByUrl(route.href); }, 300);
        this.toggleNav();
    };
    ;
    return MobileNavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], MobileNavComponent.prototype, "navEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], MobileNavComponent.prototype, "navToggled", void 0);
MobileNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'mobile-nav',
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_nav_menu_animations__["a" /* navAnimations */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_nav_link_animations__["a" /* navLinkAnimations */])()],
        template: __webpack_require__(338),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], MobileNavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lead; });
var Lead = (function () {
    function Lead(leademail, emailsubject, emailbody, leadname) {
        this.leademail = leademail;
        this.emailsubject = emailsubject;
        this.emailbody = emailbody;
        this.leadname = leadname;
    }
    return Lead;
}());

//# sourceMappingURL=Lead.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Lead__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeadFormComponent = (function () {
    function LeadFormComponent(http) {
        this.http = http;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__Lead__["a" /* Lead */]('', '', '', '');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    LeadFormComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LeadFormComponent.prototype.onSubmit = function () {
        return this.http
            .post("http://localhost:3000/kimpossible", JSON.stringify(this.model), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    return LeadFormComponent;
}());
LeadFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'lead-form',
        template: __webpack_require__(339),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LeadFormComponent);

var _a;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animations_view_overlay_animations__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ContactComponent = (function () {
    function ContactComponent(app) {
        this.navstate = "closed";
        this.appref = app;
        this.contactinfo = 0;
    }
    ContactComponent.prototype.loaded = function () {
        var _this = this;
        setTimeout(function () { _this.appref.loadstate = "loaded"; }, 1000);
    };
    ContactComponent.prototype.toggleShowContent = function () {
        this.navstate = this.navstate === 'closed' ? 'opened' : 'closed';
    };
    ContactComponent.prototype.toggleContact = function (val) {
        this.contactinfo = val;
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(340),
        styles: [__webpack_require__(331)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_animations_view_overlay_animations__["a" /* overlayAnimations */])()]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animations_view_overlay_animations__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HomePageComponent = (function () {
    function HomePageComponent(app) {
        this.navstate = "closed";
        this.appref = app;
    }
    ;
    HomePageComponent.prototype.loaded = function () {
        console.log("loaded");
        this.appref.loadstate = "loaded";
    };
    HomePageComponent.prototype.toggleContent = function () {
        console.log("vrmode");
        this.navstate = this.navstate === 'closed' ? 'opened' : 'closed';
    };
    HomePageComponent.prototype.ngOnInit = function () { };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__(341),
        styles: [__webpack_require__(332)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_animations_view_overlay_animations__["a" /* overlayAnimations */])()]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], HomePageComponent);

var _a;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__(342),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);

//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ServicesComponent = (function () {
    function ServicesComponent(app) {
        this.appref = app;
        this.services = [
            { "section": "PRE PRODUCTION",
                "switch": 1,
                "offerings": [
                    {
                        "name": "360 Set Design",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/3.+VR+preproduction/7.-VR-preproduction+1+360+set+design.jpeg",
                        "text": "We pay special attention to the set design we provide for your 360 content, as all angles of the scene are captured and play a role in telling your story."
                    },
                    {
                        "name": "360 Location Scouting",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/3.+VR+preproduction/8.-VR-preproduction-2-360-location-scouting.jpeg",
                        "text": "Location scouting is an integral part of the traditional video production process, and 360 content is no exception."
                    },
                    {
                        "name": "Script Writing for 360 VR",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/3.+VR+preproduction/9.-VR-preproduction-3-Script-writing-for-360-VR.jpeg",
                        "text": "Telling a great story is always important no matter what medium you choose. However, when shooting VR content the methods of storytelling are re-invented. We provide a unique perspective on how you can tell your story in virtual reality, whether it's based on fictional or non-fictional content."
                    }
                ]
            },
            { "section": "PRODUCTION",
                "switch": 2,
                "offerings": [
                    {
                        "name": "Moving and Static Camera Rigs",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/1.+VR+prodution/1.+VR+production+1+Moving+and+static+camera+rigs.jpeg",
                        "text": "We specialize in the highest quality live action 360 VR capture for any application. We have invested and mastered camera systems with no blind spots, 8K+ resolutions, and minimal to zero seam lines in our footage."
                    },
                    {
                        "name": "Ariel 360 Video and Photo Capture",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/1.+VR+prodution/2.+VR-production+2+Aerial-360-video-and-photo-capture.jpeg",
                        "text": "Take VR live action capture to new heights with our custom made aerial VR drones. Allowing you to capture incredible bird eye views for any imaginable application."
                    },
                    {
                        "name": "All Weather 360 Photo/Video Capture",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/1.+VR+prodution/3.+VR-production+3+All-Weather-360-photovideo-capture.jpeg",
                        "text": "We’re equipped with VR live action cameras that can capture footage in weather conditions such as snow, jet skiing, and other extreme situations."
                    }
                ]
            },
            { "section": "POST PRODUCTION",
                "switch": 3,
                "offerings": [
                    {
                        "name": "360 Visual Effects",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/2.+VR+post+production/4.+VR-post-production+1-360-Visual-Effects.jpeg",
                        "text": "Take your 360 VR footage to the next level by adding advanced visual elements to your story like text, on screen graphics, advanced tracking, and particle effects."
                    },
                    {
                        "name": "360 Video and Photo Stitching",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/2.+VR+post+production/5.-VR-post-production-2-360-video-and-photo-stitching-services.jpeg",
                        "text": "If you’ve captured VR footage but you’re having problems creating a good stitch, we can help you with our team of video/photo stitching specialists."
                    },
                    {
                        "name": "360 Sound Design",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/2.+VR+post+production/6.-VR-post-production+3-360-sound-design.jpeg",
                        "text": "Create an even more immersive experience for your viewers by adding 360 sound design."
                    }
                ]
            },
            { "section": "LIVE 360 STREAMING",
                "switch": 4,
                "offerings": [
                    {
                        "name": "Live 360 Web Streaming",
                        "img": "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/4.+Live+Streaming/10.+Live+Streaming+-+Live+360+web+streaming",
                        "text": "Apex provides live streaming 360 video for live broadcast applications, wireless client monitors, and any situation where VR content needs to be streamed live."
                    }
                ]
            }
        ];
    }
    ServicesComponent.prototype.loaded = function () {
        var _this = this;
        setTimeout(function () { _this.appref.loadstate = "loaded"; }, 1000);
    };
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__(343),
        styles: [__webpack_require__(333)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], ServicesComponent);

var _a;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".page-section {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  background-color: black; }\n\n.overlay {\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n#about .overlay .banner {\n  position: fixed;\n  bottom: 0;\n  height: auto;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(0, 35, 249, 0.5); }\n  #about .overlay .banner #togglebuttons {\n    height: 55px; }\n    #about .overlay .banner #togglebuttons #title {\n      display: inline-block;\n      text-align: center;\n      height: 55px;\n      width: 70%;\n      border-bottom: 2px solid white; }\n      #about .overlay .banner #togglebuttons #title h2 {\n        color: white; }\n    #about .overlay .banner #togglebuttons i {\n      line-height: 50px;\n      color: white; }\n    #about .overlay .banner #togglebuttons #abouttext {\n      pointer-events: all;\n      float: left;\n      width: 15%;\n      height: 55px;\n      text-align: center; }\n    #about .overlay .banner #togglebuttons #aboutteam {\n      pointer-events: all;\n      float: right;\n      width: 15%;\n      height: 55px;\n      text-align: center; }\n  #about .overlay .banner #team {\n    text-align: center; }\n  #about .overlay .banner p {\n    vertical-align: middle;\n    color: white;\n    padding: 25px;\n    padding-top: 0px; }\n  #about .overlay .banner h3 {\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".page-section {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  background-color: black; }\n\n.overlay {\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n#difference .overlay {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );\n  /* IE6-9 */ }\n  #difference .overlay .banner {\n    width: 100%;\n    text-align: center;\n    color: white; }\n    #difference .overlay .banner #title1 {\n      display: inline-block;\n      text-align: center;\n      height: 50px;\n      width: 80%;\n      border-bottom: 2px solid white; }\n    #difference .overlay .banner #title {\n      display: inline-block;\n      text-align: center;\n      height: 50px;\n      width: 80%;\n      padding: 10px;\n      border-bottom: 2px solid white; }\n      #difference .overlay .banner #title h2 {\n        margin: auto;\n        color: white;\n        line-height: 100%;\n        padding-top: 10%;\n        font-size: 30px; }\n    #difference .overlay .banner p {\n      text-align: left;\n      color: white;\n      padding: 25px;\n      margin-top: 0px;\n      padding-top: 10px;\n      font-size: 17px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "#loading {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 20;\n  pointer-events: none;\n  background-color: #0023f9; }\n  #loading div {\n    height: 100%;\n    width: 100%;\n    background: url(https://s3-us-west-1.amazonaws.com/apexvr/Loading.gif) no-repeat center center;\n    background-size: 125px auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 25;\n  pointer-events: none; }\n\n#nav-overlay {\n  pointer-events: none;\n  height: 100%;\n  width: 100%; }\n  #nav-overlay * {\n    margin: 0px;\n    pointer-events: all; }\n  #nav-overlay #nav-bar {\n    height: 70px;\n    background-color: rgba(0, 35, 249, 0.42);\n    box-shadow: 0 25px 40px -20px;\n    opacity: 50%; }\n    #nav-overlay #nav-bar #icon {\n      height: 50px;\n      width: 50px; }\n      #nav-overlay #nav-bar #icon i {\n        margin: auto 10px;\n        color: white; }\n  #nav-overlay #nav-links {\n    height: 100%;\n    height: calc(100% - 50px);\n    width: 100%;\n    background-color: rgba(0, 35, 249, 0.92);\n    box-shadow: 10px 25px 40px -20px;\n    opacity: 50%;\n    z-index: 5 !important; }\n    #nav-overlay #nav-links div {\n      width: auto;\n      z-index: 5 !important; }\n    #nav-overlay #nav-links div h1 {\n      padding: 25px;\n      color: white;\n      cursor: pointer;\n      z-index: 5 !important; }\n\n.menu-btn {\n  display: block;\n  left: 10%;\n  margin: 1em;\n  position: absolute;\n  top: 5%;\n  width: 36px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  .menu-btn:before, .menu-btn:after {\n    background-color: #fff;\n    content: '';\n    display: block;\n    height: 4px;\n    transition: all 200ms ease-in-out; }\n  .menu-btn:before {\n    box-shadow: 0 10px 0 #fff;\n    margin-bottom: 16px; }\n  .menu-btn:hover:before {\n    box-shadow: 0 0 0 #fff;\n    -webkit-transform: translateY(10px) rotate(45deg);\n            transform: translateY(10px) rotate(45deg); }\n  .menu-btn:hover:after {\n    -webkit-transform: translateY(-10px) rotate(-45deg);\n            transform: translateY(-10px) rotate(-45deg); }\n\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  /* Styles */ }\n\n/* Smartphones (landscape) ----------- */\n@media only screen and (min-width: 321px) {\n  /* Styles */ }\n\n/* Smartphones (portrait) ----------- */\n@media only screen and (max-width: 320px) {\n  /* Styles */ }\n\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Styles */ }\n\n/* iPads (landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  /* Styles */ }\n\n/* iPads (portrait) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {\n  /* Styles */ }\n\n/* Desktops and laptops ----------- */\n@media only screen and (min-width: 1224px) {\n  /* Styles */\n  #nav-overlay {\n    pointer-events: none;\n    height: 100%;\n    width: 100%; }\n    #nav-overlay * {\n      margin: 0px;\n      pointer-events: all; }\n    #nav-overlay #nav-bar {\n      height: 70px;\n      background-color: rgba(0, 35, 249, 0.42);\n      box-shadow: 0 25px 40px -20px;\n      opacity: 50%; }\n      #nav-overlay #nav-bar #icon {\n        height: 50px;\n        width: 50px; }\n        #nav-overlay #nav-bar #icon i {\n          margin: auto 10px;\n          color: white; }\n    #nav-overlay #nav-links {\n      height: 100%;\n      height: calc(100% - 50px);\n      width: 25%;\n      background-color: rgba(0, 35, 249, 0.42);\n      box-shadow: 10px 25px 40px -20px;\n      opacity: 50%;\n      z-index: 5 !important; }\n      #nav-overlay #nav-links div {\n        width: auto;\n        z-index: 5 !important; }\n      #nav-overlay #nav-links div h1 {\n        padding: 15px;\n        color: white;\n        cursor: pointer;\n        z-index: 5 !important; } }\n\n/* Large screens ----------- */\n@media only screen and (min-width: 1824px) {\n  /* Styles */\n  #nav-overlay {\n    pointer-events: none;\n    height: 100%;\n    width: 100%; }\n    #nav-overlay * {\n      margin: 0px;\n      pointer-events: all; }\n    #nav-overlay #nav-bar {\n      height: 70px;\n      background-color: rgba(0, 35, 249, 0.42);\n      box-shadow: 0 25px 40px -20px;\n      opacity: 50%; }\n      #nav-overlay #nav-bar #icon {\n        height: 50px;\n        width: 50px; }\n        #nav-overlay #nav-bar #icon i {\n          margin: auto 10px;\n          color: white; }\n    #nav-overlay #nav-links {\n      height: 100%;\n      height: calc(100% - 50px);\n      width: 25%;\n      background-color: rgba(0, 35, 249, 0.42);\n      box-shadow: 10px 25px 40px -20px;\n      opacity: 50%;\n      z-index: 5 !important; }\n      #nav-overlay #nav-links div {\n        width: auto;\n        z-index: 5 !important; }\n      #nav-overlay #nav-links div h1 {\n        padding: 15px;\n        color: white;\n        cursor: pointer;\n        z-index: 5 !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ":host {\n  color: white;\n  margin: 0; }\n  :host button {\n    float: left;\n    margin-bottom: 50px;\n    margin-top: 10px;\n    background-color: #0023f9;\n    pointer-events: all; }\n  :host div {\n    width: 100%; }\n  :host h3 {\n    margin-top: 10px; }\n\ninput, label {\n  display: block;\n  margin-bottom: 3px;\n  padding: 2px; }\n\nlabel {\n  float: left; }\n\ninput, textarea {\n  border: 2px inset white;\n  width: 100%;\n  vertical-align: middle;\n  margin-bottom: 15px;\n  background-color: rgba(0, 0, 139, 0.5);\n  pointer-events: all;\n  font-size: 16px;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".page-section {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  background-color: black; }\n\n.overlay {\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n#contact .overlay .banner {\n  position: fixed;\n  bottom: 0;\n  height: auto;\n  width: 100%;\n  text-align: center;\n  color: white;\n  background-color: rgba(0, 35, 249, 0.5); }\n  #contact .overlay .banner #togglebuttons {\n    height: 55px; }\n    #contact .overlay .banner #togglebuttons #title {\n      display: inline-block;\n      text-align: center;\n      height: 55px;\n      width: 70%;\n      border-bottom: 2px solid white; }\n      #contact .overlay .banner #togglebuttons #title h2 {\n        color: white; }\n    #contact .overlay .banner #togglebuttons i {\n      line-height: 50px; }\n    #contact .overlay .banner #togglebuttons #contactlinks {\n      pointer-events: all;\n      float: left;\n      width: 15%;\n      height: 55px;\n      text-align: center; }\n    #contact .overlay .banner #togglebuttons #contactform {\n      pointer-events: all;\n      float: right;\n      width: 15%;\n      height: 55px;\n      text-align: center; }\n  #contact .overlay .banner #form {\n    width: 70%;\n    padding-left: 15%; }\n    #contact .overlay .banner #form p {\n      vertical-align: middle;\n      color: white;\n      padding: 25px;\n      padding-top: 0px; }\n\n.title {\n  color: white; }\n\n.contactinfo {\n  height: 25px;\n  width: 75%;\n  margin: auto;\n  text-align: left; }\n  .contactinfo p {\n    width: 90%;\n    color: white; }\n  .contactinfo i {\n    padding-right: 5px !important;\n    color: #1400a0; }\n  .contactinfo p, .contactinfo i {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    float: left; }\n\n#info #linked {\n  display: inline-block;\n  width: 75%;\n  margin: auto; }\n  #info #linked button {\n    float: left;\n    pointer-events: all;\n    margin-right: 5px;\n    background-color: #0077B5;\n    color: white; }\n    #info #linked button * {\n      display: inline-block;\n      margin: auto !important;\n      margin-left: 5px;\n      padding: 0; }\n\n#info #sociallinks {\n  margin: 0;\n  padding: 0;\n  padding-bottom: 50px; }\n  #info #sociallinks button {\n    background-color: #0023f9;\n    margin: 5%;\n    pointer-events: all;\n    vertical-align: middle;\n    color: white;\n    padding: 0; }\n    #info #sociallinks button span {\n      margin: auto; }\n  #info #sociallinks i {\n    transition: all .2s ease-in-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".page-section {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  background-color: black; }\n\n.overlay {\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n#home .overlay #home-title {\n  height: 100%;\n  width: 100%;\n  background: url(https://image.ibb.co/eqw27a/logotest.png) no-repeat center center;\n  background-size: 80% auto; }\n\n#home .overlay #finger {\n  height: 100%;\n  width: 100%;\n  background: url(https://image.ibb.co/eMr6JF/finger.png) no-repeat center center;\n  background-size: 25% auto;\n  padding-top: 300px; }\n\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  /* Styles */ }\n\n/* Smartphones (landscape) ----------- */\n@media only screen and (min-width: 321px) {\n  /* Styles */ }\n\n/* Smartphones (portrait) ----------- */\n@media only screen and (max-width: 320px) {\n  /* Styles */ }\n\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Styles */ }\n\n/* iPads (landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  /* Styles */ }\n\n/* iPads (portrait) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {\n  /* Styles */ }\n\n/* Desktops and laptops ----------- */\n@media only screen and (min-width: 1224px) {\n  /* Styles */\n  #home .overlay #home-title {\n    height: 100%;\n    width: 100%;\n    background: url(https://image.ibb.co/eqw27a/logotest.png) no-repeat center center;\n    background-size: 40% auto; } }\n\n/* Large screens ----------- */\n@media only screen and (min-width: 1824px) {\n  /* Styles */\n  #home .overlay #home-title {\n    height: 100%;\n    width: 100%;\n    background: url(https://image.ibb.co/eqw27a/logotest.png) no-repeat center center;\n    background-size: 30% auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".page-section {\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  background-color: black; }\n\n.overlay {\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n#services .overlay {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(0, 35, 249, 0.5); }\n  #services .overlay .banner {\n    position: fixed;\n    width: 100%;\n    text-align: center;\n    color: white;\n    display: inline-block;\n    vertical-align: middle;\n    overflow: scroll;\n    pointer-events: all; }\n    #services .overlay .banner .serve {\n      height: 250px;\n      margin: 0;\n      padding: 0;\n      background-size: cover !important;\n      background-repeat: no-repeat !important;\n      background-position: center center !important; }\n      #services .overlay .banner .serve .info {\n        height: 100%;\n        background-color: rgba(0, 35, 249, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\" id=\"about\">\n  <a-scene embedded (renderstart)=\"loaded()\">\n    <a-assets>\n      <img id=\"about360\" crossorigin=\"anonymous\" src=\"https://s3-us-west-1.amazonaws.com/apexvr/ABOUT+US+POT.jpg\">\n    </a-assets>\n    <a-sky crossorigin=\"anonymous\" src=\"#about360\" rotation=\"0 -130 0\"></a-sky>\n  </a-scene>\n  <div class=\"overlay\">\n    <div class=\"banner\" [ngSwitch]=\"aboutinfo\"  style=\"transition: all .5s ease-in-out;\">\n      <div id=\"togglebuttons\">\n        <div id=\"abouttext\">\n          <i class=\"fa fa-info fa-2x\" (click)=\"toggleAbout(0)\"></i>\n        </div>\n        <div id=\"title\">\n          <h2 *ngSwitchCase=\"0\">INFO</h2>\n          <h2 *ngSwitchCase=\"1\">TEAM</h2>\n        </div>\n        <div id=\"aboutteam\">\n          <i class=\"fa fa-torsos-all fa-2x\" (click)=\"toggleAbout(1)\"></i>\n        </div>\n      </div>\n      <p *ngSwitchCase=\"0\">{{abouttext}}</p>\n      <div *ngSwitchCase=\"1\" id=\"team\">\n        <h3>Theodore Allen</h3>\n        <h3>Franz Erian</h3>\n        <h3>Melissa Camacho</h3>\n        <h3>Evan Weidenkeller</h3>\n        <h3>Aaron Townsend</h3>\n        <h3>Matthew Owens</h3>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\" id=\"difference\">\r\n  <a-scene embedded (renderstart)=\"loaded()\">\r\n    <a-assets>\r\n      <img id=\"difference360\" crossorigin=\"anonymous\" src=\"https://s3-us-west-1.amazonaws.com/apexvr/APEX+DIFFERENCE+POT.jpg\">\r\n    </a-assets>\r\n    <a-sky crossorigin=\"anonymous\" src=\"#difference360\" rotation=\"0 -130 0\"></a-sky>\r\n  </a-scene>\r\n  <div class=\"overlay\">\r\n    <div class=\"banner\">\r\n      <div id=\"title\">\r\n        <h2>WE ARE</h2>\r\n      </div>\r\n\r\n      \r\n      <p>Passionate, forward thinking filmmakers, determined to move the 360 VR \r\n      format forward. Having been on the forefront of this emerging art form, we have been working \r\n      within the community to create a filmmaking language, and push the boundaries of what is possible and acceptable within this new medium.\r\n      \r\n      </p>\r\n\r\n       <p>\r\n       As such, \r\n      we have been and continue to use our skills and creativity to create the most \r\n      engaging video experiences for: narratives, advertisements, documentaries and corporate videos.\r\n      </p>\r\n     <div id=\"title\">\r\n        <h2>APEX DIFFERENCE</h2>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<mobile-nav></mobile-nav>\n<div id=\"loading\" [@animateNav]=\"loadstate\">\n  <div></div>\n</div>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<div id=\"nav-overlay\">\r\n    <div id=\"nav-bar\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"menu-btn\"  (click)=\"toggleNav()\">\r\n  \r\n   \r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n    <nav id=\"nav-links\" [@navToggle]=\"navstate\" (@navToggle.done)=\"animateLinks()\">\r\n      <div *ngFor=\"let route of routes\">\r\n        <h1 [@animateLink]=\"route.state\" (click)=\"navInit(route)\">{{route.name}}</h1>\r\n      </div>\r\n    </nav>\r\n</div>\r\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>DROP US A LINE</h3>\n  <form (ngSubmit)=\"onSubmit()\">\n    <div>\n      <label for=\"name\">YOUR NAME</label>\n      <input type=\"text\" id=\"name\" required [(ngModel)]=\"model.leadname\" name=\"leadname\"/>\n    </div>\n    <div>\n      <label for=\"email\">YOUR EMAIL</label>\n      <input type=\"text\" id=\"email\" required [(ngModel)]=\"model.leademail\" name=\"leademail\"/>\n    </div>\n    <div>\n      <label for=\"subject\">SUBJECT</label>\n      <input type=\"text\" id=\"subject\" [(ngModel)]=\"model.emailsubject\" name=\"emailsubject\"/>\n    </div>\n    <div>\n      <label for=\"body\">MESSAGE</label>\n      <textarea rows=\"5\" type=\"text\" id=\"body\" [(ngModel)]=\"model.emailbody\" name=\"emailbody\"></textarea>\n    </div>\n    <button md-raised-button type=\"submit\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\" id=\"contact\">\n  <a-scene embedded (renderstart)=\"loaded()\" (enter-vr)=\"toggleShowContent()\" (exit-vr)=\"toggleShowContent()\">\n    <a-assets>\n      <img id=\"contact360\" crossorigin=\"anonymous\" src=\"https://s3-us-west-1.amazonaws.com/apexvr/CONTACT+POT.jpg\">\n    </a-assets>\n    <a-sky crossorigin=\"anonymous\" src=\"#contact360\" rotation=\"0 -130 0\"></a-sky>\n  </a-scene>\n  <div class=\"overlay\" [@animateOverlay]=\"navstate\">\n    <div class=\"banner\" [ngSwitch]=\"contactinfo\"  style=\"transition: all .5s ease-in-out;\">\n      <div id=\"togglebuttons\">\n        <div id=\"contactlinks\">\n          <i class=\"fa fa-address-card fa-2x\" (click)=\"toggleContact(0)\"></i>\n        </div>\n        <div id=\"title\">\n          <h2 *ngSwitchCase=\"0\">INFO</h2>\n          <h2 *ngSwitchCase=\"1\">FORM</h2>\n        </div>\n        <div id=\"contactform\">\n          <i class=\"fa fa-clipboard-pencil fa-2x\" (click)=\"toggleContact(1)\"></i>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"0\" id=\"info\">\n        <div>\n          <h3 class=\"title\">OUR CONTACT INFO</h3>\n          <div class=\"contactinfo\">\n            <i class=\"fa fa-home\"></i>\n            <p>San Leandro, CA</p>\n          </div>\n          <div class=\"contactinfo\">\n            <i class=\"fa fa-phone\"></i>\n            <p>(510) 331-6403</p>\n          </div>\n          <div class=\"contactinfo\">\n            <i class=\"fa fa-mail\"></i>\n            <p>contact@polar-production.com</p>\n          </div>\n          <div id=\"linked\">\n            <button md-raised-button>\n              <i class=\"fa fa-linkedin fa-2x\"></i>\n              <p>share</p>\n            </button>\n            <button md-raised-button>\n              <i class=\"fa fa-linkedin fa-2x\"></i>\n              <p>follow</p>\n            </button>\n          </div>\n        </div>\n        <div>\n          <h3 class=\"title\">GET CONNECTED</h3>\n          <div id=\"sociallinks\">\n            <button md-fab>\n              <i class=\"fa fa-facebook\"></i>\n            </button>\n            <button md-fab>\n              <i class=\"fa fa-twitter\"></i>\n            </button>\n            <button md-fab>\n              <i class=\"fa fa-instagram\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"1\" id=\"form\">\n        <lead-form style=\"width: 75%;\"></lead-form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\" id=\"home\">\r\n  <a-scene embedded (renderstart)=\"loaded()\" (enter-vr)=\"toggleContent()\" (exit-vr)=\"toggleContent()\">\r\n    <a-assets>\r\n      <img id=\"home360\" crossorigin=\"anonymous\" src=\"https://s3-us-west-1.amazonaws.com/apexvr/HOME+POT.jpg\">\r\n    </a-assets>\r\n    <a-sky crossorigin=\"anonymous\" src=\"#home360\" rotation=\"0 -130 0\"></a-sky>\r\n  </a-scene>\r\n  <div class=\"overlay\">\r\n    <div id=\"home-title\"></div>\r\n  </div>\r\n  <div class=\"overlay\">\r\n    <div id=\"finger\"></div>\r\n  </div>\r\n  <div class=\"overlay\"></div>\r\n</div>\r\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "\r\n<iframe src=\"https://player.vimeo.com/video/213447230\" width=\"100%\" height=\"100%\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\" id=\"services\">\n  <a-scene (renderstart)=\"loaded()\">\n    <a-assets>\n      <img id=\"service\" crossorigin src=\"https://s3-us-west-1.amazonaws.com/apexvr/SERVICES+POT.jpg\">\n    </a-assets>\n    <a-sky crossorigin=\"anonymous\" src=\"#service\" rotation=\"0 -130 0\"></a-sky>\n  </a-scene>\n  <div class=\"overlay\">\n    <div class=\"banner\">\n      <div *ngFor=\"let offer of services[0].offerings\">\n        <div>\n          <div class=\"serve\" [style.background]=\"'url(' + offer.img + ')'\">\n            <div class=\"info\">\n              <div class=\"title\">\n                <h2>{{offer.name}}</h2>\n              </div>\n              <div class=\"text\">\n                <p>{{offer.text}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_animations_nav_animations__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animations_visibility_animations__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.loadstate = "loading";
        this.whitelogo = "whiteshow";
        this.bluelogo = "bluehide";
        this.routes = [
            { href: "/apex-difference", name: "THE APEX DIFFERENCE", state: "inactive" },
            { href: "/services", name: "SERVICES", state: "inactive" },
            { href: "/about", name: "ABOUT US", state: "inactive" },
            { href: "/portfolio", name: "PORTFOLIO", state: "inactive" },
            { href: "/contact", name: "CONTACT", state: "inactive" }
        ];
        this.home = { href: "/home", name: "HOME", state: "inactive" };
        this.currentroute = this.home.name;
    }
    ;
    AppComponent.prototype.navInit = function (route) {
        var _this = this;
        if (route.name === this.currentroute) {
            return;
        }
        this.currentroute = route.name;
        this.loadstate = "loading";
        setTimeout(function () { _this.router.navigateByUrl(route.href); }, 300);
    };
    ;
    AppComponent.prototype.toggleLogo = function () {
        this.bluelogo = this.bluelogo === 'bluehide' ? 'blueshow' : 'bluehide';
        this.whitelogo = this.whitelogo === 'whitehide' ? 'whiteshow' : 'whitehide';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(337),
        styles: [__webpack_require__(328)],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_animations_nav_animations__["a" /* navAnimations */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_animations_visibility_animations__["a" /* visibilityAnimations */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(30);
/* harmony export (immutable) */ __webpack_exports__["a"] = overlayAnimations;

function overlayAnimations() {
    return overlayAnimate();
}
function overlayAnimate() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* trigger */])('animateOverlay', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('closed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('opened', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('closed => opened', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('300ms ease-in')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* transition */])('opened => closed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* animate */])('300ms ease-out'))
    ]);
}
//# sourceMappingURL=view.overlay.animations.js.map

/***/ })

},[400]);
//# sourceMappingURL=main.bundle.js.map