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
var appchart_1 = require("../components/charts/appchart");
var PageDesigner = (function () {
    function PageDesigner(componentFactoryResolver, viewContainerRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.numElements = 0;
    }
    PageDesigner.prototype.ngOnInit = function () {
        this.container = new Array();
    };
    PageDesigner.prototype.clearComponents = function () {
        this.dynamicComponentContainer.clear();
        this.numElements = 0;
    };
    PageDesigner.prototype.addComponent = function () {
        var factory = this.componentFactoryResolver.resolveComponentFactory(appchart_1.AppChart);
        var ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
        // We insert the component into the dom container
        this.dynamicComponentContainer.insert(ref.hostView);
        this.numElements = this.dynamicComponentContainer.length;
        this.currentComponent = ref.instance;
        this.container.push(ref.instance);
    };
    PageDesigner.prototype.saveComponents = function () {
        for (var i = 0; i < this.container.length; i++) {
        }
    };
    __decorate([
        core_1.ViewChild('dynamicComponentContainer', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], PageDesigner.prototype, "dynamicComponentContainer", void 0);
    PageDesigner = __decorate([
        core_1.Component({
            selector: 'page-designer',
            entryComponents: [appchart_1.AppChart],
            template: "\n        <h1>Designer\n        <small>We have {{ numElements }} components</small>\n        </h1>\n        <button (click)=\"addComponent()\" type=\"button\" class=\"btn btn-sm btn-primary\">Add AppChart</button> \n        <button (click)=\"clearComponents()\" type=\"button\" class=\"btn btn-danger\">Remove All</button> \n        <button (click)=\"saveComponents()\" type=\"button\" class=\"btn btn-lg btn-info\">Save</button> \n        <hr />\n        <div >\n          <ng-container #dynamicComponentContainer></ng-container>\n        </div>\n        <hr />\n        <div *ngIf=\"this.currentComponent\">\n        Properties: {{ this.currentComponent.currentValue }} \n        </div>\n        "
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            core_1.ViewContainerRef])
    ], PageDesigner);
    return PageDesigner;
}());
exports.PageDesigner = PageDesigner;
//# sourceMappingURL=pagedesigner.js.map