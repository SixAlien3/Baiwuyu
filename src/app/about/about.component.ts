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

  //about_text1 = "Story of a hundred things (百物语) could be considered an obituary service for your virtual avatars based on encryption and decentralization technology.";
  about_text2 = "On submission of an obituary of yours, an untamperable record would be left in the very corner the internet. At the same time, a one-of-a-kind virtual relic will be generated according to the information of your late avatar for your own preservation.";
  about_text3 = "This is a statement against Big Tech's power and ownership of our virtual selves. Instead of buried in their inaccessible servers, a trace of existence shall be preserved out there through this project.";
  //about_text4 = "See the project on Ethereum.";
  about_text5 = "Except for those whose accounts banned/deleted by the Big Techs, anyone who decided to give up on their virtual avatars permanently, for whatever reason, are also warmly welcomed to submit their obituaries.";

}
