import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Detail } from '../detail';
import '../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user : Detail = new Detail();
  useremail = "";

  form_text = "If you want to leave an obituary, a trace of your late virtual avatar, please complete and submit the following form. We will post your obituary and generate your unique relic as soon as we get your information, and will notify you through email when it's done.";
  submit_text = "*Your contact information will only be used to contact you on topics concerning your obituary, including the posting of your obituary and missing information of your obituary. The content of your obituary will only be used in this project, but not limited to this website. For details,  please reference the \"About\" page.";
  
  onSubmit() {
    alert("submited");
    //this.saveJson(this.user);
    this.sendEmail(JSON.stringify(this.user));
  }

  //提交失败的提醒
  sendEmail(content: string) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "qiu963258741@gmail.com",
      Password: "14B706AA41FE9CCCEF3EF374267E02712800",
      To: "qzhu5@saic.edu",
      From: "qiu963258741@gmail.com",
      Subject: "send email for jar",
      Body: content,
    })
    .then(function () {
      alert("sent successfually")
    }); 
  }
}
