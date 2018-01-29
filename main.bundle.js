webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#page {\r\n    margin: 40px 20px;\r\n}\r\n\r\np {\r\n    color: #FFFFFF;\r\n    font-family: 'Aldrich', sans-serif;\r\n    font-size: 1.4em;\r\n    text-align: center;\r\n}\r\n\r\nspan.web-developer span.web {\r\n    color: #4CAF50;\r\n}\r\n\r\nspan.web-developer span.developer {\r\n    color: #EC407A;\r\n}\r\n\r\nspan.web-developer {\r\n    background-color: #212121;\r\n    padding: 2px 5px;\r\n    font-family: monospace;\r\n    display: block;\r\n}\r\n\r\n#timeline {\r\n    background: #fff;\t\r\n    background: linear-gradient(180deg, transparent, #FFF, transparent);\r\n    background-position: 50%;\r\n    background-repeat: repeat-y;\r\n    background-size: 5px 1px;\r\n}\r\n\r\n.element {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.element:first-child {\r\n    padding-top: 0px;\r\n}\r\n\r\n.year {\r\n    font-size: 1.2em;\r\n    display: table;\r\n    margin: 20px auto 0px;\r\n    background-color: #333;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.text {\r\n    display: block;\r\n    margin: 10px auto;\r\n    background-color: #333;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.element.palermo .text {\r\n    background-image: url('/assets/images/palermo.png');\r\n    padding: 40px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.element.batman .text {\r\n    background-image: url('/assets/images/batman-logo.png');\r\n    padding: 40px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.element.amiga .text {\r\n    background-image: url('/assets/images/amiga.png');\r\n    padding: 40px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.element.slow-internet .text {\r\n    background-image: url('/assets/images/56k.png');\r\n    padding: 40px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.element.html .text {\r\n    background-image: url('/assets/images/html.png');\r\n    padding: 40px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.element.graduate .text {\r\n    background-image: url('/assets/images/graduate.png');\r\n    padding: 40px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.element.work-qwince .text {\r\n    background-image: url('/assets/images/webdeveloper.png');\r\n    padding: 40px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.element.university .text {\r\n    background-image: url('/assets/images/university-palermo.png');\r\n    padding: 40px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.element:last-child {\r\n    padding-bottom: 0px;\r\n}\r\n\r\nspan.code {\r\n    background-color: #212121;\r\n    padding: 2px 5px;\r\n    font-family: monospace;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nspan.code span.html-code {\r\n    color: #4CAF50;\r\n}\r\n\r\nspan.code span.css-code {\r\n    color: #EC407A;\r\n}\r\n\r\nstrong.batman-returns {\r\n    padding: 2px 5px;\r\n    display: table;\r\n    margin: 0 auto;\r\n    text-transform: uppercase;\r\n}\r\n\r\nstrong.batman-returns span.batman-text {\r\n    margin: 0px auto;\r\n    font-size: 1.4em;\r\n}\r\n\r\nstrong.batman-returns span.returns-text {\r\n    margin: 0px auto;\r\n    font-size: 0.8em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div id=\"page\">\r\n    <p style=\"text-align: center\">I'm <strong>Claudio La Barbera</strong> <span class=\"web-developer\"><span class=\"web\">web</span> <span class=\"developer\">developer</span></span> based in Palermo</p>\r\n</div-->\r\n\r\n<div id=\"timeline\">\r\n    <div class=\"element palermo\">\r\n        <p class=\"year\">April 1993</p>\r\n        <p class=\"text\">Born in Palermo</p>\r\n    </div>\r\n    <div class=\"element batman\">\r\n        <p class=\"year\">May 1996</p>\r\n        <p class=\"text\">Watched <strong class=\"batman-returns\"><span class=\"batman-text\">Batman</span><br><span class=\"returns-text\">Returns</span></strong> for the first time</p>\r\n    </div>\r\n    <div class=\"element amiga\">\r\n        <p class=\"year\">September 1996</p>\r\n        <p class=\"text\">Played with <strong>Amiga 600</strong></p>\r\n    </div>\r\n    <div class=\"element slow-internet\">\r\n        <p class=\"year\">December 2000</p>\r\n        <p class=\"text\">Discover the web with <strong>56K</strong></p>\r\n    </div>\r\n    <div class=\"element html\">\r\n        <p class=\"year\">August 2005</p>\r\n        <p class=\"text\">First <span class=\"code\"><span class=\"html-code\">HTML</span>&&<span class=\"css-code\">CSS</span></span> website online</p>\r\n    </div>\r\n    <div class=\"element graduate\">\r\n        <p class=\"year\">September 2012</p>\r\n        <p class=\"text\">Senior High School Degree in <span class=\"code\"><span class=\"html-code\">Information</span>_<span class=\"css-code\">Technology</span></span> at ITIS A. Volta</p>\r\n    </div>\r\n    <div class=\"element work-qwince\">\r\n        <p class=\"year\">October 2012</p>\r\n        <p class=\"text\">Started to work as <span class=\"code\"><span class=\"html-code\">web</span><span class=\"css-code\">developer</span></span> at Qwince</p>\r\n    </div>\r\n    <div class=\"element university\">\r\n        <p class=\"year\">September 2017</p>\r\n        <p class=\"text\">Started to study <span class=\"code\"><span class=\"html-code\">Computer</span>_<span class=\"css-code\">Science</span></span> at University of Palermo</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about-me',
        template: __webpack_require__("../../../../../src/app/about-me/about-me.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-me/about-me.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutMeComponent);

//# sourceMappingURL=about-me.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Anton|Aldrich);", ""]);

// module
exports.push([module.i, "a:link, a:hover, a:visited, a:active {\r\n    text-decoration: none;\r\n}\r\n\r\n#logo-container {\r\n    display: block;\r\n    position: fixed;\r\n    background-color: #212121;\r\n    height: 50px;\r\n    top: 20px;\r\n    left: 90px;\r\n}\r\n\r\n#logo {\r\n    font-family: 'Aldrich', sans-serif;\r\n    color: #FFF;\r\n    font-size: 1.7em;\r\n    margin: 9px 20px;\r\n    padding: 0px;\r\n} \r\n\r\n#logo span {\r\n    color: #a53232;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\r\n\r\n<div class=\"borders\"></div>\r\n\r\n<app-menu-component><</app-menu-component>\r\n\r\n<div id=\"logo-container\">\r\n    <h1 id=\"logo\">the<span>bat</span>claud.<span>io</span></h1>\r\n</div>\r\n\r\n<content>\r\n    <router-outlet></router-outlet>\r\n</content>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
            'background-color': '#212121'
        };
        this.myParams = {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 630
                    }
                },
                "color": {
                    "value": "#e86f6f"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "top-right",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

function packNumbers(arr) {
    var packArray = [];
    var occurrence = 1;
    for (var i in arr) {
        if (arr[i] == packArray[packArray.length - 1]) {
            occurrence++;
        }
        else {
            if (occurrence > 1) {
                packArray[packArray.length - 1] = packArray[packArray.length - 1].toString() + ':' + occurrence.toString();
                occurrence = 1;
            }
            else {
                packArray.push(arr[i]);
            }
        }
    }
    return packArray;
}
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_particle__ = __webpack_require__("../../../../angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_me_about_me_component__ = __webpack_require__("../../../../../src/app/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_me_contact_me_component__ = __webpack_require__("../../../../../src/app/contact-me/contact-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_component_menu_component_component__ = __webpack_require__("../../../../../src/app/menu-component/menu-component.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'about-me', component: __WEBPACK_IMPORTED_MODULE_6__about_me_about_me_component__["a" /* AboutMeComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_7__contact_me_contact_me_component__["a" /* ContactMeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__about_me_about_me_component__["a" /* AboutMeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__contact_me_contact_me_component__["a" /* ContactMeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__menu_component_menu_component_component__["a" /* MenuComponentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular_particle__["a" /* ParticlesModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

// Import ParticlesModule 
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact-me/contact-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono);", ""]);

// module
exports.push([module.i, "#email, #drop-a-line {\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n    font-family: 'Anton', sans-serif;\r\n}\r\n\r\n#email {\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    font-size: 2em;\r\n    font-family: 'Ubuntu Mono', monospace;\r\n}\r\n\r\n#drop-a-line {\r\n    text-transform: lowercase;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    font-size: 1.4em;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.socials {\r\n    list-style-type: none;\r\n    text-align: center;\r\n    margin-left: 0px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.socials li a {\r\n    font-family: 'Anton', sans-serif;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    font-size: 1.4em;\r\n    text-decoration: none;\r\n}\r\n\r\n@media only screen and (min-width: 1440px) {\r\n    #title { font-size: 6em}\r\n    #subtitle { font-size: 4em}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-me/contact-me.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 id=\"drop-a-line\">Drop a line to</h2>\n<h1 id=\"email\">info[at]thebatclaud.io</h1>\n\n<ul class=\"socials\">\n    <li><a href=\"https://www.facebook.com/thebatclaudio\" target=\"_blank\" title=\"Claudio La Barbera on Facebook\">Facebook</a></li>\n    <li><a href=\"https://www.twitter.com/thebatclaudio\" target=\"_blank\" title=\"Claudio La Barbera on Twitter\">Twitter</a></li>\n    <li><a href=\"https://www.instagram.com/thebatclaudio\" target=\"_blank\" title=\"Claudio La Barbera on Instagram\">Instagram</a></li>\n    <li><a href=\"https://www.github.com/thebatclaudio\" target=\"_blank\" title=\"Claudio La Barbera on Github\">Github</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/contact-me/contact-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactMeComponent = (function () {
    function ContactMeComponent() {
    }
    ContactMeComponent.prototype.ngOnInit = function () {
    };
    return ContactMeComponent;
}());
ContactMeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-me',
        template: __webpack_require__("../../../../../src/app/contact-me/contact-me.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-me/contact-me.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactMeComponent);

//# sourceMappingURL=contact-me.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/320.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/375.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/425.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/768.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/1024.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/1440.css"), "");

// module
exports.push([module.i, "#page {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    overflow: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\n    <h1 id=\"title\">Claudio La Barbera</h1>\n    <h2 id=\"subtitle\">Web developer</h2>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu-component/menu-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/320.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/375.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/425.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/768.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/1024.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/1440.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-component/menu-component.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"menu-button\" [ngClass]=\"{'opened': menuOpened }\" (click)=\"menuOpened = !menuOpened;\">\n  <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n</a>\n\n<nav class=\"menu-wrapper\" [ngClass]=\"{'opened': menuOpened }\">\n  <div class=\"icon-list\">\n    <ul class=\"menu-ul\">\n      <li><a routerLink=\"/\" routerLinkActive=\"active\" (click)=\"menuOpened = !menuOpened;\" class=\"link\"><span data-letters=\"HOME\">Home</span></a></li>\n      <li><a routerLink=\"/about-me\" routerLinkActive=\"active\" (click)=\"menuOpened = !menuOpened;\" class=\"link\"><span data-letters=\"ABOUT ME\">About Me</span></a></li>\n      <li><a routerLink=\"/contacts\" routerLinkActive=\"active\" (click)=\"menuOpened = !menuOpened;\" class=\"link\"><span data-letters=\"CONTACTS\">Contacts</span></a></li>\n      <li class=\"blog\"><a href=\"https://www.claudiolabarbera.com\" class=\"link\" target=\"_blank\"><span data-letters=\"BLOG\">Blog</span></a></li>\n    </ul>\n    <ul class=\"social-links-ul\">\n      <li><a href=\"https://www.facebook.com/thebatclaudio\" title=\"Claudio La Barbera on Facebook\" target=\"_blank\" class=\"link\"><span data-letters=\"FACEBOOK\">Facebook</span></a></li>\n      <li><a href=\"https://www.twitter.com/thebatclaudio\" title=\"Claudio La Barbera on Twitter\" target=\"_blank\" class=\"link\"><span data-letters=\"TWITTER\">Twitter</span></a></li>\n      <li><a href=\"https://www.instagram.com/thebatclaudio\" title=\"Claudio La Barbera on Instagram\" target=\"_blank\" class=\"link\"><span data-letters=\"INSTAGRAM\">Instagram</span></a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/menu-component/menu-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponentComponent = (function () {
    function MenuComponentComponent() {
    }
    MenuComponentComponent.prototype.ngOnInit = function () {
    };
    return MenuComponentComponent;
}());
MenuComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-component',
        template: __webpack_require__("../../../../../src/app/menu-component/menu-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu-component/menu-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponentComponent);

//# sourceMappingURL=menu-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/1024.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 1024px) {\r\n    #title { font-size: 6em}\r\n    #subtitle { font-size: 3.6em}\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/1440.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 1440px) {\r\n    #title { font-size: 9em}\r\n    #subtitle { font-size: 4em}\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/320.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#title, #subtitle {\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n    font-family: 'Anton', sans-serif;\r\n}\r\n\r\n#title {\r\n    text-transform: uppercase;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    font-size: 2em;\r\n}\r\n\r\n#subtitle {\r\n    text-transform: lowercase;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    font-size: 1.4em;\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/375.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 375px) {\r\n    #title { font-size: 2.6em}\r\n    #subtitle { font-size: 2em}\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/425.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 425px) {\r\n    #title { font-size: 3em}\r\n    #subtitle { font-size: 2.2em}\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/home/css/768.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 768px) {\r\n    #title { font-size: 5em}\r\n    #subtitle { font-size: 3em}\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/1024.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/1440.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n@media only screen and (min-width: 1440px) {\r\n    a#menu-button {\r\n        background-color: #212121;\r\n        color: #FFF;\r\n        display: block;\r\n        height: 50px;\r\n        width: 50px;\r\n        position: fixed;\r\n        top: 20px;\r\n        left: 20px;\r\n        font-size: 38px;\r\n        text-align: center;\r\n        line-height: 50px;\r\n        z-index: 9999;\r\n        transition: left 300ms, color 300ms;\r\n        cursor: pointer;\r\n    }\r\n\r\n    a#menu-button.opened {\r\n        left: 20px;\r\n        color: #a53232;\r\n        transition: left 300ms, color 300ms;\r\n    }\r\n\r\n    .menu-wrapper {\r\n        background-color: rgba(33,33,33,0.95);;\r\n        position: fixed;\r\n        top: 0px;\r\n        left: 0px;\r\n        z-index: 666;\r\n        width: 0;\r\n        height: 0;\r\n        transition: width 0.4s, height 0.4s, -webkit-transform 0.4s;\r\n        transition: width 0.4s, height 0.4s, transform 0.4s;\r\n        transition: width 0.4s, height 0.4s, transform 0.4s, -webkit-transform 0.4s;\r\n        transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n        overflow: hidden;\r\n    }\r\n\r\n    .menu-wrapper.opened {\r\n        width: 100vw;\r\n        height: 100vh;\r\n        transition: width 0.4s, height 0.4s, -webkit-transform 0.4s;\r\n        transition: width 0.4s, height 0.4s, transform 0.4s;\r\n        transition: width 0.4s, height 0.4s, transform 0.4s, -webkit-transform 0.4s;\r\n        transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n    }\r\n\r\n    .menu-wrapper ul.menu-ul {\r\n        margin: 100px 50px 0px;\r\n        list-style-type: none;\r\n        padding-left: 0px;\r\n        font-family: 'Anton', sans-serif;\r\n    }\r\n\r\n    .menu-wrapper ul.menu-ul li {\r\n        font-size: 4em;\r\n        text-transform: uppercase;\r\n        opacity: 0;\r\n        transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n        transition: opacity 0.4s;\r\n    }\r\n\r\n    .menu-wrapper ul.menu-ul li.blog {\r\n        font-size: 3em;\r\n    }\r\n\r\n    .menu-wrapper.opened ul.menu-ul li {\r\n        opacity: 1;\r\n        transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n        transition: opacity 0.4s;\r\n        transition-delay: 0.4s;\r\n    }\r\n\r\n    /* Kumya */\r\n    .link {\r\n        outline: none;\r\n        text-decoration: none;\r\n        position: relative;\r\n        overflow: hidden;\r\n        padding: 10px 20px;\r\n        line-height: 1;\r\n        color: #FFFFFF;\r\n        display: inline-block;\r\n    }\r\n\r\n    .link:hover {\r\n        color: #a53232;\r\n    }\r\n\r\n    .link::after {\r\n        content: '';\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        top: 0;\r\n        right: 0;\r\n        z-index: -1;\r\n        background: #a53232;\r\n        -webkit-transform: translate3d(101%,0,0);\r\n        transform: translate3d(101%,0,0);\r\n        transition: -webkit-transform 0.5s;\r\n        transition: transform 0.5s;\r\n        transition: transform 0.5s, -webkit-transform 0.5s;\r\n        transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n    }\r\n\r\n    .link:hover::after {\r\n        -webkit-transform: translate3d(0,0,0);\r\n        transform: translate3d(0,0,0);\r\n    }\r\n\r\n    .link span {\r\n        display: block;\r\n        position: relative;\r\n    }\r\n\r\n    .link span::before {\r\n        content: attr(data-letters);\r\n        position: absolute;\r\n        color: #fff;\r\n        left: 0;\r\n        overflow: hidden;\r\n        white-space: nowrap;\r\n        width: 0%;\r\n        transition: width 0.5s;\r\n        transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n    }\r\n\r\n    .link:hover span::before {\r\n        width: 100%;\r\n    }\r\n\r\n    ul.social-links-ul {\r\n        margin: 20px 50px;\r\n        padding-left: 0px;\r\n    }\r\n\r\n    ul.social-links-ul li {\r\n        display: inline-block;\r\n        height: 2.2em;\r\n        width: 2.2em;\r\n        border-radius: 50%;\r\n        background-color: #FFF;\r\n        font-size: 2em;\r\n        text-align: center;\r\n        margin: 0px 5px;\r\n    }\r\n\r\n    ul.social-links-ul li:hover {\r\n        background-color: #a53232;\r\n    }\r\n\r\n    ul.social-links-ul li a:link, ul.social-links-ul li a:active, ul.social-links-ul li a:visited {\r\n        display: block;\r\n        margin-top: 0.5em;\r\n        color: rgba(33,33,33,0.95);\r\n    }\r\n\r\n    ul.social-links-ul li:hover a, ul.social-links-ul li:hover a:hover {\r\n        color: #FFF;\r\n    }\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/320.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a#menu-button {\r\n    background-color: #212121;\r\n    color: #FFF;\r\n    display: block;\r\n    height: 50px;\r\n    width: 50px;\r\n    position: fixed;\r\n    top: 20px;\r\n    left: 20px;\r\n    font-size: 38px;\r\n    text-align: center;\r\n    line-height: 50px;\r\n    z-index: 9999;\r\n    transition: left 300ms, color 300ms;\r\n    cursor: pointer;\r\n}\r\n\r\na#menu-button.opened {\r\n    left: 20px;\r\n    color: #a53232;\r\n    transition: left 300ms, color 300ms;\r\n}\r\n\r\n.menu-wrapper {\r\n    background-color: rgba(33,33,33,0.95);;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: 666;\r\n    width: 0;\r\n    height: 0;\r\n    transition: width 0.4s, height 0.4s, -webkit-transform 0.4s;\r\n    transition: width 0.4s, height 0.4s, transform 0.4s;\r\n    transition: width 0.4s, height 0.4s, transform 0.4s, -webkit-transform 0.4s;\r\n    transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n    overflow: hidden;\r\n    transition-delay: 0.4s;\r\n}\r\n\r\n.menu-wrapper.opened {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    transition: width 0.4s, height 0.4s, -webkit-transform 0.4s;\r\n    transition: width 0.4s, height 0.4s, transform 0.4s;\r\n    transition: width 0.4s, height 0.4s, transform 0.4s, -webkit-transform 0.4s;\r\n    transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.menu-wrapper ul.menu-ul, .menu-wrapper ul.social-links-ul {\r\n    margin: 100px 50px 0px;\r\n    list-style-type: none;\r\n    padding-left: 0px;\r\n    font-family: 'Anton', sans-serif;\r\n}\r\n\r\n.menu-wrapper ul.social-links-ul {\r\n    margin-top: 50px;\r\n}\r\n\r\n.menu-wrapper ul.menu-ul li, .menu-wrapper ul.social-links-ul li {\r\n    font-size: 2.4em;\r\n    text-transform: uppercase;\r\n    opacity: 0;\r\n    transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n    transition: opacity 0.4s;\r\n}\r\n\r\n.menu-wrapper ul.menu-ul li.blog, .menu-wrapper ul.social-links-ul li {\r\n    font-size: 1.8em;\r\n}\r\n\r\n.menu-wrapper.opened ul.menu-ul li, .menu-wrapper.opened ul.social-links-ul li {\r\n    opacity: 1;\r\n    transition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n    transition: opacity 0.4s;\r\n    transition-delay: 0.4s;\r\n}\r\n\r\n/* Kumya */\r\n.link {\r\n\toutline: none;\r\n\ttext-decoration: none;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tpadding: 10px 20px;\r\n\tline-height: 1;\r\n    color: #FFFFFF;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.link:hover {\r\n\tcolor: #a53232;\r\n}\r\n\r\n.link::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tz-index: -1;\r\n\tbackground: #a53232;\r\n\t-webkit-transform: translate3d(101%,0,0);\r\n\ttransform: translate3d(101%,0,0);\r\n\ttransition: -webkit-transform 0.5s;\r\n\ttransition: transform 0.5s;\r\n\ttransition: transform 0.5s, -webkit-transform 0.5s;\r\n\ttransition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}\r\n\r\n.link:hover::after {\r\n\t-webkit-transform: translate3d(0,0,0);\r\n\ttransform: translate3d(0,0,0);\r\n}\r\n\r\n.link span {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n}\r\n\r\n.link span::before {\r\n\tcontent: attr(data-letters);\r\n\tposition: absolute;\r\n\tcolor: #fff;\r\n\tleft: 0;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\twidth: 0%;\r\n\ttransition: width 0.5s;\r\n\ttransition-timing-function: cubic-bezier(0.7,0,0.3,1);\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/375.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/425.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/menu-component/css/768.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map