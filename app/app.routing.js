"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map