import {Component} from 'angular2/core';
import {VaadinGrid} from '../../bower_components/vaadin-grid/directives/vaadin-grid';

@Component({
  selector: 'population-list',
  templateUrl: './app/population-list/population_list.component.html',
  directives: [VaadinGrid]
})

export class PopulationList {

  constructor() {
    this.population = this.population.bind(this);
  }

  private population(params, callback) {
    const url = './api/population';

    window.getJSON(url, (data) => {
      callback(data, 21);
    });
  }
}
