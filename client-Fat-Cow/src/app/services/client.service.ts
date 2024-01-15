import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../interfaces/client';
import { ClientResult } from '../components/client/client.component';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  clients = new BehaviorSubject<Client[]>([]);
  clients$ = this.clients.asObservable();

  allClients = new BehaviorSubject<ClientResult[]>([]);
  allClients$ = this.allClients.asObservable();

  changeClients(clients: Client[]) {
    this.clients.next(clients)
  }

  getClientResults(id: number): Observable<ClientResult[]> {
    return this.http.get<ClientResult[]>(`http://localhost:3000/client-results/${id}`)
  }

  getAllClientsResults(): void {
    this.http.get<ClientResult[]>(`http://localhost:3000/all-client-results`).subscribe(
      res => {
        this.allClients.next(res)
        console.log(res, this.allClients)
      }
    )
  }

  addClient(client: Client): void {
    this.http.post<Client>('http://localhost:3000/add-client', client).subscribe(res => console.log(res))
  }

  getOnlyClients(): void {
    this.http.get<Client[]>('http://localhost:3000/all-clients').subscribe(
      res => this.clients.next(res)
    )
  }



}
