import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from './client';
import { InfoAnimal } from './infoAnimal';
import { Result } from './result';
import { ClientResult } from './client/client.component';
@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {

  constructor(private http: HttpClient) { }

  clients = new BehaviorSubject<Client[]>([{ id: 1, name: "Andre" }, { id: 2, name: "Luis" }]);
  clients$ = this.clients.asObservable();

  changeClients(clients: Client[]) {
    this.clients.next(clients)
  }

  clientResult = new BehaviorSubject<ClientResult[]>([]);
  clientResult$ = this.clientResult.asObservable();

  getClientResults(id: number) {
    return this.http.get<ClientResult[]>(`http://localhost:3000/client-results/${id}`)
      .subscribe(res => this.clientResult.next(res))
  }

  deleteOneResult(id: number) {
    return this.http.delete(`http://localhost:3000/delete-result/${id}`)

  }

}
