import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about_text = "Not Real Obituary is a platform of \nbituaries for social media accounts \nthat are \"dead\".\n"
  + "For whatever reason your social \nmedia account was banned or \nabandoned, you can always leave an \nobituary for your late online avatar \nhere. Even if the server of the social \nmedia platforms erased all your data, \nthis tiny corner of the internet would \nstill hold the trace of existence of \nyour virtual avatar.\n"
  + "Our virtual avatars are the extension \nof our social life on the internet. \nTheir death deserve to be mourned, \nbe known and be documented.\n"
  + "Not Real Obituary project does not \nstop here at this website. We are still \nexploring more possibilities to \ndocument the death and existence \nof the late virtual avatars.. The\n"
  + "possibilities include but are limited \nto: virtual cemetery, virtual funeral, \nundeletable records based on block \nchain.";

}
