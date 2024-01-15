import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-flip',
  templateUrl: './result-flip.component.html',
  styleUrl: './result-flip.component.css'
})
export class ResultFlipComponent {
  @Input() flipped = false;
  @Input() title = 'Default Title';
  @Input() dataItems: { label: string; value: string | number }[] = [];

  flip() {
    this.flipped = !this.flipped;
  }
}
