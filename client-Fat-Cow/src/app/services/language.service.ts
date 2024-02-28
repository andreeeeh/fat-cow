import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSource = new BehaviorSubject<string>('pt-Br');
  currentLanguage = this.languageSource.asObservable();
  
  constructor() { }

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang)
    this.languageSource.next(lang)
  }
}
