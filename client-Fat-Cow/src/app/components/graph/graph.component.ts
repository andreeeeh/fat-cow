import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ClientResult } from '../client/client.component';
import { BaseChartDirective } from 'ng2-charts';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnChanges {
  @Input() clientResults: ClientResult[] = [];
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  constructor(private translate: TranslateService) { }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [], label: this.translate.instant('valueInvested'), backgroundColor: 'green' },
      { data: [], label: this.translate.instant('estimatedProfit'), backgroundColor: 'lightGreen' }
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
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: this.translate.instant('product')
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
        text: this.translate.instant('profitPerspective')
      }
    }

  };

}
