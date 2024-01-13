import { Component } from '@angular/core';
import { Result } from '../result';
import { ServiceResultService } from '../service-result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  constructor(private serviceResult: ServiceResultService) { }
  result?: Result;

  ngOnInit(): void {
    this.serviceResult.result$.subscribe(res => this.result = res)
    console.log(this.result)
  }

}
