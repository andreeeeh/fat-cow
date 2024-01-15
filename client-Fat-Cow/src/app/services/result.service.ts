import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoAnimal } from '../interfaces/infoAnimal';
import { BehaviorSubject } from 'rxjs';
import { Result } from '../interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { undefined }

  result = new BehaviorSubject<Result | undefined>(undefined);
  result$ = this.result.asObservable();

  addInfoAnimal(infoAnimal: InfoAnimal): void {
    this.http.post<Result>("http://localhost:3000/nutri-result", infoAnimal)
      .subscribe(res => this.result.next(res))
  }

  deleteOneResult(id: number) {
    return this.http.delete(`http://localhost:3000/delete-result/${id}`)

  }

}
