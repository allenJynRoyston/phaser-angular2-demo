"use strict";
var router_1 = require('@angular/router');
var home_components_1 = require('../../components/home/home.components');
var about_components_1 = require('../../components/about/about.components');
exports.routes = [
    {
        path: '',
        component: home_components_1.HomeComponent
    },
    {
        path: 'alt',
        component: about_components_1.AltComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map