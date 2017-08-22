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
var Pages = require("./pages/index");
var Directives = require("./directives/removehost");
var Component = require("./components/index");
var Svogv = require("svogv");
var Ng = require("@ng-bootstrap/ng-bootstrap");
var apiservice_1 = require("./services/apiservice");
var emitterservice_1 = require("./services/emitterservice");
var routes_1 = require("./configurations/routes");
var AppRoot = (function () {
    function AppRoot() {
    }
    return AppRoot;
}());
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
            Component.SitePageHeader,
            Component.SiteStat,
            Component.GridComponent,
            Component.ModalComponent,
            Component.PaginationComponent,
            Component.PopOverComponent,
            Component.ProgressbarComponent,
            Component.AlertComponent,
            Component.ButtonsComponent,
            Component.CollapseComponent,
            Component.DropdownComponent,
            Component.TablesComponent,
            Component.TabsComponent,
            Component.TimepickerComponent,
            Component.TooltipComponent,
            Component.AppChart,
            Svogv.AcDataGridPagination, Svogv.AcAutoForm, Svogv.AcAnalogClock, Svogv.AcEditor, Svogv.AcInfoBox,
            Directives.RemoveHost,
            Ng.NgbAccordion, Ng.NgbAlert, Ng.NgbCarousel, Ng.NgbCheckBox, Ng.NgbCollapse, Ng.NgbPanelContent, Ng.NgbTooltip, Ng.NgbTab, Ng.NgbRating, Ng.NgbPagination, Ng.NgbProgressbar, Ng.NgbTabset, Ng.NgbTimepicker
        ],
        providers: [
            apiservice_1.ApiService,
            emitterservice_1.EmitterService,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
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
        bootstrap: [Pages.SiteRoot]
    }) // {} == new object()
], AppRoot);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppRoot);
//# sourceMappingURL=app.js.map