import {Component} from 'angular2/core';
import {VaadinCharts, DataSeries} from '../../bower_components/vaadin-charts/directives/vaadin-charts';

@Component({
  selector: 'population-chart',
  templateUrl: './app/population-chart/population_chart.component.html',
  directives: [VaadinCharts, DataSeries]
})

export class PopulationChart {

  private femaleData;
  private maleData;

  constructor() {
    this.femaleData = window.getFemaleData();
    this.maleData = window.getMaleData();
  }
}
