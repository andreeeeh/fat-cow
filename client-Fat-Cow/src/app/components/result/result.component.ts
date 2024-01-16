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

  ngOnInit(): void {
    this.ResultService.result$.subscribe(res => this.result = res)
    // console.log(this.result)
  }

}
