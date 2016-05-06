System.register(['angular2/core', '../../bower_components/vaadin-charts/directives/vaadin-charts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vaadin_charts_1;
    var PopulationChart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vaadin_charts_1_1) {
                vaadin_charts_1 = vaadin_charts_1_1;
            }],
        execute: function() {
            PopulationChart = (function () {
                function PopulationChart() {
                    this.femaleData = window.getFemaleData();
                    this.maleData = window.getMaleData();
                }
                PopulationChart = __decorate([
                    core_1.Component({
                        selector: 'population-chart',
                        templateUrl: './app/population-chart/population_chart.component.html',
                        directives: [vaadin_charts_1.VaadinCharts, vaadin_charts_1.DataSeries]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PopulationChart);
                return PopulationChart;
            }());
            exports_1("PopulationChart", PopulationChart);
        }
    }
});
//# sourceMappingURL=population_chart.component.js.map