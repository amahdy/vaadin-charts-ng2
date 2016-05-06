System.register(['angular2/platform/browser', './population_app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, population_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (population_app_component_1_1) {
                population_app_component_1 = population_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(population_app_component_1.PopulationApp);
        }
    }
});
//# sourceMappingURL=main.js.map