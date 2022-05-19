import { Component, OnInit, ɵɵstylePropInterpolate5 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from '../_alert/alert.service';
import { Detail, UserJ } from '../detail';
import { Router } from '@angular/router';
import '../../assets/smtp.js';
import { LanguageService } from '../language.service';
declare let Email: any;

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent implements OnInit {

  constructor(public alertservice: AlertService, private router: Router, private ls: LanguageService) {
   }

  ngOnInit(): void {
    this.languageM = this.ls.languageM;
    if (this.languageM == "EN") {
      this.email = "邮箱";
      this.username = "用户名";
      this.platform = "平台";
      this.dateOfRegister = "注册日期";
      this.dateOfDeath = "死亡日期";
      this.causeOfDeath = "死因";
      this.obituary = "讣闻";
      this.submit = "提交";
      this.form_text = "如果您希望留下一份讣告，您已故社交账号的一丝痕迹，请填写并提交下方表格。我们将在收到您投稿的第一时间生成您的专属墓碑，上传至区块链并发布。完成后，我们将通过邮件的方式通知您。";
      this.submit_text = "您的邮箱信息仅会被用于联系您关于您的讣告相关的内容，包括讣告的发布或是信息缺损。您讣告内容仅会在此项目中被使用，但不仅限于此网站。详情请查看“关于”页面。";
      this.error_send = "提交出错，请稍后重试";
      this.success_send = "您的投稿已被成功记录。当您的舍利生成，投稿成功发布后，我们将在第一时间通过邮件通知您。</br>感谢投稿，愿您的虚拟二重身安息。";
      this.home = "主页";
      this.submission = "提交讣告";
      this.about = "关于";
    }else {
      this.email = "Email";
      this.username = "Username";
      this.platform = "Platform";
      this.dateOfRegister = "Date of Register";
      this.dateOfDeath = "Date of Death";
      this.causeOfDeath = "Cause of Death";
      this.obituary = "Obituary";
      this.submit = "Submit";
      this.form_text = "If you want to leave an obituary, a trace of your late virtual avatar, please complete and submit the following form. We will post your obituary and generate your unique relic as soon as we get your information, and will notify you through email when it's done.";
      this.submit_text = "*Your contact information will only be used to contact you on topics concerning your obituary, including the posting of your obituary and missing information of your obituary. The content of your obituary will only be used in this project, but not limited to this website. For details,  please reference the \"About\" page.";
      this.success_send = "Your Submission has been successfully recorded.</br>We will contact you through your email as soon as your submission is mined on blockchain and your relic is generated.</br>Thanks for your submission and wish your avatar rest in peace.";
      this.error_send = "It seems there is an error. Please try again.";
      this.home = "Home";
      this.submission = "Submission";
      this.about = "About";
    }
  }

  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };
  user : UserJ = new UserJ();
  useremail = "";

  // change
  success_send = "您的信息已成功提交。";

  email = "邮箱";
  username = "用户名";
  platform = "平台";
  dateOfRegister = "注册日期";
  dateOfDeath = "死亡日期";
  causeOfDeath = "死因";
  obituary = "讣闻";
  submit = "提交";
  form_text = "如果您希望留下一份讣告，您已故社交账号的一丝痕迹，请填写并提交下方表格。我们将在收到您投稿的第一时间生成您的专属墓碑，上传至区块链并发布。完成后，我们将通过邮件的方式通知您。";
  submit_text = "您的邮箱信息仅会被用于联系您关于您的讣告相关的内容，包括讣告的发布或是信息缺损。您讣告内容仅会在此项目中被使用，但不仅限于此网站。详情请查看“关于”页面。";
  error_send = "提交出错，请稍后重试";
  languageM = "EN";
  home = "主页";
  submission = "提交讣告";
  about = "关于";

  language() {
    if (this.languageM == "EN")
    {
      this.email = "Email";
      this.username = "Username";
      this.platform = "Platform";
      this.dateOfRegister = "Date of Register";
      this.dateOfDeath = "Date of Death";
      this.causeOfDeath = "Cause of Death";
      this.obituary = "Obituary";
      this.submit = "Submit";
      this.form_text = "If you want to leave an obituary, a trace of your late virtual avatar, please complete and submit the following form. We will post your obituary and generate your unique relic as soon as we get your information, and will notify you through email when it's done.";
      this.submit_text = "*Your contact information will only be used to contact you on topics concerning your obituary, including the posting of your obituary and missing information of your obituary. The content of your obituary will only be used in this project, but not limited to this website. For details,  please reference the \"About\" page.";
      this.success_send = "Your Submission has been successfully recorded.</br>We will contact you through your email as soon as your submission is mined on blockchain and your relic is generated.</br>Thanks for your submission and wish your avatar rest in peace.";
      this.error_send = "It seems there is an error. Please try again.";
      this.home = "Home";
      this.submission = "Submission";
      this.about = "About";
      this.languageM = "中文";
      this.ls.languageM = "中文";
    }else {
      this.email = "邮箱";
      this.username = "用户名";
      this.platform = "平台";
      this.dateOfRegister = "注册日期";
      this.dateOfDeath = "死亡日期";
      this.causeOfDeath = "死因";
      this.obituary = "讣闻";
      this.submit = "提交";
      this.form_text = "如果您希望留下一份讣告，您已故社交账号的一丝痕迹，请填写并提交下方表格。我们将在收到您投稿的第一时间生成您的专属墓碑，上传至区块链并发布。完成后，我们将通过邮件的方式通知您。";
      this.submit_text = "您的邮箱信息仅会被用于联系您关于您的讣告相关的内容，包括讣告的发布或是信息缺损。您讣告内容仅会在此项目中被使用，但不仅限于此网站。详情请查看“关于”页面。";
      this.error_send = "提交出错，请稍后重试";
      this.success_send = "您的投稿已被成功记录。当您的舍利生成，投稿成功发布后，我们将在第一时间通过邮件通知您。</br>感谢投稿，愿您的虚拟二重身安息。";
      this.home = "主页";
      this.submission = "提交讣告";
      this.about = "关于";
      this.languageM = "EN";
      this.ls.languageM = "EN";
    }
  }

  onSubmit(f: NgForm) {
    this.sendEmail(JSON.stringify(this.user)).then(() => {
      console.log(this.user);
      this.alertservice.success(this.success_send, this.options);
      f.reset();
    },
    () => {
      this.alertservice.error(this.error_send, this.options);
    }); 
  }

  //提交失败的提醒
  sendEmail(content: string) {
    return Email.send({
      // Host: "smtp.elasticemail.com",
      // Username: "qiu963258741@gmail.com",
      // Password: "14B706AA41FE9CCCEF3EF374267E02712800",
      Host: "smtp.elasticemail.com",
      Username: "szsz19970408@gmail.com",
      Password: "B01D4195486B50839886403D9A3416A1A61F",
      To: "zuukiozuukio@gmail.com",
      From: "szsz19970408@gmail.com",
      Subject: "New Obituary Submission",
      Body: "useremail: " + this.useremail + "\ncontent: " + content,
    });
  }

  goMenu() {
    this.router.navigateByUrl('/menu');
  }
}
