import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import * as Pages from './pages/index';
import * as Directives from './directives/removehost';
import * as Component from './components/index';
import * as Svogv from 'svogv';

import * as Ng from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './services/apiservice';
import { EmitterService } from './services/emitterservice';
import currentRoutesConfig from './configurations/routes';

@NgModule({
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
    ApiService, 
    EmitterService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
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
  bootstrap: [Pages.SiteRoot]
}) // {} == new object()
class AppRoot {

}

platformBrowserDynamic().bootstrapModule(AppRoot);