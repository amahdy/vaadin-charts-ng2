import {Component} from 'angular2/core';
import {PopulationList} from './population-list/population_list.component';
import {PopulationChart} from './population-chart/population_chart.component';

@Component({
    selector: 'population-app',
    template: `
      <population-list></population-list>
      <population-chart></population-chart>
    `,
    directives: [PopulationList, PopulationChart]
})

export class PopulationApp {

}
