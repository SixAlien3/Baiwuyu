import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private location: Location, private ls: LanguageService) {
   }

  ngOnInit(): void {
    this.languageM = this.ls.languageM;
    if(this.languageM == "EN") {
      this.home = "主页";
      this.submit = "提交讣告";
      this.about = "关于";
    }else {
      this.home = "Home";
      this.submit = "Submit";
      this.about = "About";
    }
  }

  home = "主页";
  submit = "提交讣告";
  about = "关于";
  languageM = "EN";

  goBack() {
    this.location.back();
  }

  language() {
    if (this.languageM == "EN") {
      this.home = "Home";
      this.submit = "Submit";
      this.about = "About";
      this.languageM = "中文";
      this.ls.languageM = "中文";
    }else {
      this.home = "主页";
      this.submit = "提交讣告";
      this.about = "关于";
      this.languageM = "EN";
      this.ls.languageM = "EN";
    }
  }
}
