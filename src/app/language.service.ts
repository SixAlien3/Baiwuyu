import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  languageM = "EN";
  
  language() {
    if (this.languageM == "EN") {
      this.languageM = "中文";


    }else {
      this.languageM = "EN";


    }
  }

}
