System.register(['angular2/core', '../../bower_components/vaadin-grid/directives/vaadin-grid'], function(exports_1, context_1) {
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
    var core_1, vaadin_grid_1;
    var PopulationList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vaadin_grid_1_1) {
                vaadin_grid_1 = vaadin_grid_1_1;
            }],
        execute: function() {
            PopulationList = (function () {
                function PopulationList() {
                    this.population = this.population.bind(this);
                }
                PopulationList.prototype.population = function (params, callback) {
                    var url = './api/population';
                    window.getJSON(url, function (data) {
                        callback(data, 21);
                    });
                };
                PopulationList = __decorate([
                    core_1.Component({
                        selector: 'population-list',
                        templateUrl: './app/population-list/population_list.component.html',
                        directives: [vaadin_grid_1.VaadinGrid]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PopulationList);
                return PopulationList;
            }());
            exports_1("PopulationList", PopulationList);
        }
    }
});
//# sourceMappingURL=population_list.component.js.map