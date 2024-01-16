import { Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';
import { ClientService } from '../../services/client.service';
import { Result } from '../../interfaces/result';
import { ResultService } from '../../services/result.service';
export interface ClientResult extends Client { Result: Result[] }[]


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  constructor(private ClientService: ClientService, private ResultService: ResultService) { }

  clients: Client[] = []
  clientResults: ClientResult[] = []
  selectedClient: number = 0;
  showClient: boolean = false;

  filterByClient(id: number): void {
    this.selectedClient = id;
    this.showClient = !this.showClient;
    this.ClientService.getClientResults(id).subscribe(res => this.clientResults = res.slice())
  }

  deleteOneResult(id: number): void {
    this.ResultService.deleteOneResult(id).subscribe(res => {
      const updatedResults = [...this.clientResults];
      updatedResults[0].Result = this.clientResults[0].Result.filter(res => res.id !== id)
      this.clientResults = updatedResults;
    })
  }

  ngOnInit() {
    this.ClientService.getOnlyClients();
    this.ClientService.clients$.subscribe(res => {
      this.clients = res
      // console.log(this.clients)
    })
    this.ClientService.allClients$.subscribe(res => this.clientResults = res);
  }

}
