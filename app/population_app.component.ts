import {Component} from 'angular2/core';
import {PopulationList} from './population-list/population_list.component';

@Component({
    selector: 'population-app',
    template: `
      <population-list></population-list>
    `,
    directives: [PopulationList]
})

export class PopulationApp {

}
