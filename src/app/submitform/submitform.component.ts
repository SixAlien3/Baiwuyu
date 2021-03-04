import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    email:"",
    username:"",
    platform:"",
    dataOfRegister:null,
    dataOfDeath:null,
    causeOfDeath:"",
    obituary:""
  };

  form_text = "If you want to leave an obituary, a \ntrace of your late virtual avatar, \nplease complete and submit the \nfollowing form. We will post your \nobituary as soon as we get your \ninformation, and will notify you \nthrough email.";
  submit_text = "*Your contact information will only \nbe used to contact you on topics \nconcerning your obituary, including \nthe posting of your obituary and \nmissing information of your obituary. \nThe content of your obituary will \nonly be used in this project, but not \nlimited to this website. For details, \nplease reference the \"About\" page.\n"
  onSubmit() {
    alert("submited");
  }
}
