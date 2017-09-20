import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, XHRBackend } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// forms handling and validation
import * as Svogv from 'svogv';
// components
import * as pages from './pages/index';
import * as directives from './directives/removehost';
import * as components from './components/index';
// bootstrap 
import * as Ng from '@ng-bootstrap/ng-bootstrap';
// services
import * as services from './services/index';
// router
import currentRoutesConfig from './configurations/routes';

@NgModule({
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
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: XHRBackend, useClass: services.AuthenticateXHRBackend },
    Svogv.FormValidatorService,
    Ng.NgbCarouselConfig, Ng.NgbAlertConfig
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(currentRoutesConfig),
    NgbDropdownModule.forRoot()
  ],
  bootstrap: [pages.SiteRoot]
}) // {} == new object()
class AppRoot {

}

platformBrowserDynamic().bootstrapModule(AppRoot);