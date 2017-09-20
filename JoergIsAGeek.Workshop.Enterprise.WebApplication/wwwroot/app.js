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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// forms handling and validation
var Svogv = require("svogv");
// components
var pages = require("./pages/index");
var directives = require("./directives/removehost");
var components = require("./components/index");
// bootstrap 
var Ng = require("@ng-bootstrap/ng-bootstrap");
// services
var services = require("./services/index");
// router
var routes_1 = require("./configurations/routes");
var AppRoot = (function () {
    function AppRoot() {
    }
    AppRoot = __decorate([
        core_1.NgModule({
            declarations: [
                pages.SiteRoot,
                pages.PageDashboard,
                pages.PageDesigner,
                pages.PageViewer,
                pages.PageDatamanager,
                pages.PageOptions,
                pages.PageRegistration,
                pages.PageLogin,
                components.SiteHeader,
                components.SiteSidebar,
                components.SitePageHeader,
                components.SiteStat,
                components.ModalComponent,
                components.PaginationComponent,
                components.PopOverComponent,
                components.ProgressbarComponent,
                components.AlertComponent,
                components.ButtonsComponent,
                components.CollapseComponent,
                components.DropdownComponent,
                components.TablesComponent,
                components.TabsComponent,
                components.TimepickerComponent,
                components.TooltipComponent,
                components.AppChart,
                Svogv.AcDataGridPagination,
                Svogv.AcAutoForm,
                Svogv.AcAnalogClock,
                Svogv.AcEditor,
                Svogv.AcInfoBox,
                directives.RemoveHost,
                Ng.NgbAccordion,
                Ng.NgbAlert,
                Ng.NgbCarousel,
                Ng.NgbCheckBox,
                Ng.NgbCollapse,
                Ng.NgbPanelContent,
                Ng.NgbTooltip,
                Ng.NgbTab,
                Ng.NgbRating,
                Ng.NgbPagination,
                Ng.NgbProgressbar,
                Ng.NgbTabset,
                Ng.NgbTimepicker
            ],
            providers: [
                services.ApiService,
                services.EmitterService,
                services.AccountService,
                services.UserService,
                services.ConfigService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                { provide: http_1.XHRBackend, useClass: services.AuthenticateXHRBackend },
                Svogv.FormValidatorService,
                Ng.NgbCarouselConfig, Ng.NgbAlertConfig
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.default),
                ng_bootstrap_1.NgbDropdownModule.forRoot()
            ],
            bootstrap: [pages.SiteRoot]
        }) // {} == new object()
    ], AppRoot);
    return AppRoot;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppRoot);
