"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var NavItem = (function () {
    function NavItem(path, title, icon) {
        this.path = path;
        this.title = title;
        this.icon = icon;
    }
    return NavItem;
}());
var SiteSidebar = (function () {
    function SiteSidebar(router) {
        this.router = router;
        this.isActive = false;
        this.showMenu = '';
    }
    SiteSidebar.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SiteSidebar.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SiteSidebar.prototype.ngOnInit = function () {
        var _this = this;
        this.routerNavigation = new Array();
        this.router.config
            .filter(function (value) { return !value.redirectTo; })
            .filter(function (value) { return value.path.indexOf(':') === -1; })
            .forEach(function (value) {
            return _this.routerNavigation.push(new NavItem(value.path, value.data["title"], value.data["icon"]));
        });
    };
    SiteSidebar = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'site-sidebar',
            templateUrl: './sidebar.html',
            styleUrls: ['./sidebar.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SiteSidebar);
    return SiteSidebar;
}());
exports.SiteSidebar = SiteSidebar;
//# sourceMappingURL=sidebar.js.map