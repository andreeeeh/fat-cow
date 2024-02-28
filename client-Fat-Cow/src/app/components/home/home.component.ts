import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  lang: string = '';

  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'pt-BR';
    this.translateService.use(this.lang);
    this.languageService.changeLanguage(this.lang)
  }

  ChangeLang(lang: string) {
    alert(lang)
    this.translateService.use(lang)
    this.languageService.changeLanguage(lang)
  }
}