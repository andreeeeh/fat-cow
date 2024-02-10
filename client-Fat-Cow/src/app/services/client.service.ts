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

  clientResults = new BehaviorSubject<ClientResult[]>([]);
  clientResults$ = this.clientResults.asObservable();

  getClientsList(): void {
    this.http.get<Client[]>('http://localhost:3000/all-clients').subscribe(
      res => this.clients.next(res)
    )
  }

  getOneClientResults(id: number): Observable<ClientResult[]> {
    return this.http.get<ClientResult[]>(`http://localhost:3000/client-results/${id}`)
  }

  getAllClientsAndResults(): void {
    this.http.get<ClientResult[]>(`http://localhost:3000/all-client-results`).subscribe(
      res => this.clientResults.next(res))
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:3000/add-client', client)
  }

  deleteOneClient(id: number) {
    return this.http.delete(`http://localhost:3000/delete-client/${id}`)
  }

}
