import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ServiceClientService } from '../service-client.service';
import { Result } from '../result';
export interface ClientResult extends Client { Result: Result[] }[]


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  constructor(private serviceClient: ServiceClientService) { }

  clients: Client[] = []
  allResults: Result[] = []
  clientResults: ClientResult[] = []
  selectedClient: number = 0;

  filterByClient(id: number): void {
    this.selectedClient = id;
    this.serviceClient.getClientResults(id);
  };

  deleteOneResult(id: number): void {
    this.serviceClient.deleteOneResult(id).subscribe(res => {
      // this.clientResults = this.clientResults[0].Result.filter(res => res.id !== id)
      console.log(res)
    })
    // this.filterByClient(this.selectedClient)
  }


  ngOnInit() {
    this.serviceClient.clients$.subscribe(res => this.clients = res);
    this.serviceClient.clientResult$.subscribe(res => this.clientResults = res)
  }


}
