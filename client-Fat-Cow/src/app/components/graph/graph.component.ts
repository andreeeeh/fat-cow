import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ClientResult } from '../client/client.component';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnChanges {
  @Input() clientResults: ClientResult[] = [];
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;


  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [], label: 'Value invested in feed', backgroundColor: 'green' },
      { data: [], label: 'Estimated profit', backgroundColor: 'lightGreen' }
    ]
  };

  ngOnChanges() {
    if (this.clientResults[0].Result) {
      this.barChartData.labels = this.clientResults[0].Result.map(res => res.name);
      this.barChartData.datasets[0].data = this.clientResults[0].Result.map(res => res.periodCost);
      this.barChartData.datasets[1].data = this.clientResults[0].Result.map(res => res.estimatedProfitTotal);
      this.chart?.update();
    }
  }
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Products'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'R$'
        },
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Profit Perspective'
      }
    }

  };

}
