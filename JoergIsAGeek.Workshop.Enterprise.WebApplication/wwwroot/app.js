"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var Pages = require("./pages/index");
var Directives = require("./directives/removehost");
var Component = require("./components/index");
//import { ApiService } from './services/apiservice';
//import { EmitterService } from './services/emitterservice';
var routes_1 = require("./configurations/routes");
var AppRoot = (function () {
    function AppRoot() {
    }
    AppRoot = __decorate([
        core_1.NgModule({
            declarations: [
                Pages.SiteRoot,
                Pages.PageDashboard,
                Pages.PageDesigner,
                Pages.PageViewer,
                Pages.PageDatamanager,
                Pages.PageOptions,
                Component.SiteHeader,
                Component.SiteSidebar,
                Component.GridComponent,
                Component.ModalComponent,
                Component.PaginationComponent,
                Component.PopOverComponent,
                Component.ProgressbarComponent,
                Component.AlertComponent,
                Component.ButtonsComponent,
                Component.CollapseComponent,
                Component.DatePickerComponent,
                Component.DropdownComponent,
                Component.TablesComponent,
                Component.TabsComponent,
                Component.TimepickerComponent,
                Component.TooltipComponent,
                Directives.RemoveHost
            ],
            providers: [
                //ApiService, 
                //EmitterService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.default)
            ],
            bootstrap: [Pages.SiteRoot]
        }) // {} == new object()
    ], AppRoot);
    return AppRoot;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppRoot);
