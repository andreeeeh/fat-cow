import { Component } from '@angular/core';
import { ClientResult } from '../client/client.component';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-sales-control',
  templateUrl: './sales-control.component.html',
  styleUrl: './sales-control.component.css'
})
export class SalesControlComponent {

  constructor(private ClientService: ClientService) { }

  allClientResults: ClientResult[] = []
  dueDate?: number | Date
  twoWeeksToDueDate?: number | Date

  lastPurchase(client: ClientResult) {
    let result = null;
    if (client.Result.length) {
      client.Result.map(el => {
        this.dueDate = new Date(el.createdAt)
        this.dueDate.setDate(this.dueDate.getDate() + el.period)
        this.twoWeeksToDueDate = new Date(el.createdAt)
        this.twoWeeksToDueDate.setDate(this.twoWeeksToDueDate.getDate() + el.period - 14)
        el.notifyClient = this.twoWeeksToDueDate < new Date() ? true : false
        result = el;
      })
    }
    return result;
  }

  ngOnInit() {
    this.ClientService.getAllClientsAndResults();
    this.ClientService.clientResults$.subscribe(res => {
      this.allClientResults = res;
      this.allClientResults.map(client => this.lastPurchase(client));
    })
  }
}
