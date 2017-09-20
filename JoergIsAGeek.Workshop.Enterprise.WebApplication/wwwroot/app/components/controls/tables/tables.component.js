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
var svogv_1 = require("svogv");
var TablesComponent = (function () {
    function TablesComponent(router) {
        this.router = router;
        console.log('Machine ctor');
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    TablesComponent.prototype.editMachine = function (data) {
        this.router.navigate(['/machine/edit', data.id]);
    };
    TablesComponent.prototype.addMachine = function () {
        this.router.navigate(['/machine/new']);
    };
    TablesComponent.prototype.removeMachine = function (data) {
        this.router.navigate(['/machine/delete', data.id]);
    };
    TablesComponent.prototype.showModal = function (data) {
        this.currentData = data;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", svogv_1.AcDataGridModel)
    ], TablesComponent.prototype, "data", void 0);
    TablesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-tables',
            templateUrl: './tables.component.html',
            styleUrls: ['./tables.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TablesComponent);
    return TablesComponent;
}());
exports.TablesComponent = TablesComponent;
//# sourceMappingURL=tables.component.js.map