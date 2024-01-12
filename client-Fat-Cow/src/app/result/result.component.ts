import { Component, Input } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @Input() result?: Result;
  @Input() name?: string;
}
