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
    this.dueDate = new Date(client.Result[0].createdAt)
    this.dueDate.setDate(this.dueDate.getDate() + client.Result[0].period)
    this.twoWeeksToDueDate = new Date(client.Result[0].createdAt)
    this.twoWeeksToDueDate.setDate(this.twoWeeksToDueDate.getDate() + client.Result[0].period - 14)
    client.Result[0].notifyClient = this.twoWeeksToDueDate < new Date() ? true : false
    // console.log(client.Result[0].notifyClient)
    // console.log(this.twoWeeksToDueDate)
    // console.log(this.dueDate)
    // client.Result[0].expired = this.dueDate < new Date() ? false : true
    // console.log(client.Result[0].expired)
  }

  ngOnInit() {
    this.ClientService.getAllClients();
    this.ClientService.allClients$.subscribe(res => {
      this.allClientResults = res;
      this.allClientResults.map(client => this.lastPurchase(client));
    })
  }
}
