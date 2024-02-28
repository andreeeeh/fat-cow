import { Component } from '@angular/core';
import { Result } from '../../interfaces/result';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  constructor(private ResultService: ResultService) { }
  result?: Result;
  card1?: { label: string, value: number | string }[];
  card2?: { label: string, value: number | string }[];
  card3?: { label: string, value: number | string }[];
  card4?: { label: string, value: number | string }[];

  ngOnInit(): void {
    this.ResultService.result$.subscribe(res => {
      this.result = res;
      this.card1 = [
        { label: 'DWG', value: this.result?.DWG.toFixed(2) + ' Kg' },
        { label: 'dailyPerHead', value: this.result?.dailyPerHeadWeight.toFixed(2) + ' Kg' },
        { label: 'dailyTotal', value: this.result?.dailyTotalWeight.toFixed(2) + ' / ' + this.result?.dailyTotalPack.toFixed(2) },
        { label: 'periodTotal', value: this.result?.periodTotalWeight.toFixed(2) + ' / ' + this.result?.periodTotalPack.toFixed(2) },
        { label: 'monthlyWeightGain', value: this.result?.monthlyWeightGain.toFixed(2) + ' Kg' },
        { label: 'estimatedWeightGain', value: this.result?.estimatedWeightGain.toFixed(2) + ' Kg' },
        { label: 'finalWeight', value: this.result?.finalWeight.toFixed(2) + ' Kg' },
      ];
      this.card4 = [
        { label: 'dailyRecommendation', value: this.result?.dailyRecommendation.toFixed(2) + '' },
        { label: 'periodRecommendation', value: this.result?.periodRecommendation.toFixed(2) + '' },
      ]
      this.card2 = [
        { label: 'dailyCost', value: 'R$ ' + this.result?.dailyCost.toFixed(2) },
        { label: 'monthlyCost', value: 'R$ ' + this.result?.monthlyCost.toFixed(2) },
        { label: 'periodCost', value: 'R$ ' + this.result?.periodCost.toFixed(2) },
      ];
      this.card3 = [
        { label: 'estimatedProfitPerHead', value: 'R$ ' + this.result?.estimatedProfitPerHead.toFixed(2) },
        { label: 'estimatedProfitTotal', value: 'R$ ' + this.result?.estimatedProfitTotal.toFixed(2) },
      ]
    })
  }

}
