import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoAnimal } from './infoAnimal';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ServiceResultService {

  constructor(private http: HttpClient) { }

  addInfoAnimal(infoAnimal: InfoAnimal): Observable<Result> {
    return this.http.post<Result>("http://localhost:3000/nutri-result", infoAnimal)
  }

}
