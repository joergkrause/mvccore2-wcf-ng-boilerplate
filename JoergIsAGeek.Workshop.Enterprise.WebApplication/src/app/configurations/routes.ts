import { Routes } from '@angular/router';
import * as Pages from '../pages/index';
import { AuthGuard } from '../guards/authguard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Pages.PageDashboard,
    data: {
      title: 'Dashboard',
      icon: 'fa-dashboard'
    }
  },
  {
    path: 'designer',
    component: Pages.PageDesigner,
    data: {
      title: 'Designer'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'viewer',
    component: Pages.PageViewer,
    data: {
      title: 'Viewer'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'options',
    component: Pages.PageOptions,
    data: {
      title: 'Options'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'datamanager',
    component: Pages.PageDatamanager,
    data: {
      title: 'Data Manager'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: Pages.PageRegistration,
    data: {
      title: 'User Registration'
    }
  },
  {
    path: 'login',
    component: Pages.PageLogin,
    data: {
      title: 'User Login'
    }
  }
];

export default routes;