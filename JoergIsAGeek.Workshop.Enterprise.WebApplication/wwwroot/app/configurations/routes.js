"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pages = require("../pages/index");
var routes = [
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
        }
    },
    {
        path: 'viewer',
        component: Pages.PageViewer,
        data: {
            title: 'Viewer'
        }
    },
    {
        path: 'options',
        component: Pages.PageOptions,
        data: {
            title: 'Options'
        }
    },
    {
        path: 'datamanager',
        component: Pages.PageDatamanager,
        data: {
            title: 'Data Manager'
        }
    }
];
exports.default = routes;
//# sourceMappingURL=routes.js.map