import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoAnimal } from './infoAnimal';
import { BehaviorSubject } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class ServiceResultService {

  constructor(private http: HttpClient) { undefined }

  result = new BehaviorSubject<Result | undefined>(undefined);
  result$ = this.result.asObservable();

  addInfoAnimal(infoAnimal: InfoAnimal): void {
    this.http.post<Result>("http://localhost:3000/nutri-result", infoAnimal)
      .subscribe(res => this.result.next(res))
  }

}
