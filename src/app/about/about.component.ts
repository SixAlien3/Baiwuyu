import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private ls: LanguageService) { }

  ngOnInit(): void {
    this.languageM = this.ls.languageM;
    if (this.languageM == "EN") {
      this.about = "关于";
      this.hundredStories = "《百物语》";
      this.text_1 = "为您已故的社交媒体账号提供基于去中心化技术的墓碑、讣告服务。";
      this.text_2 = "在您提交讣告后，一份";
      this.text_3 = "不可篡改的记录";
      this.text_4 = "将会被留在互联网的角落。同时，算法将根据您提交的信息生成一个专属于您的虚拟舍利。";
      this.about_text3 = "我们相信，您已故的社交账号不应该被埋藏在科技巨头安置在海底的服务器中。我们质疑科技巨头对于我们的虚拟二重身所拥有的绝对权力。与之相对，您可以在这里为您的虚拟二重身留下一丝存在过的痕迹。";
      this.about_text5 = "除了被封禁的账号外，任何被永久注销，包括主动弃用的社交账号，都可以在《百物语》中提交您的讣告。";
      this.about_text6 = "前往以太坊查看项目。";

      this.home = "主页";
      this.submission = "提交讣告";
    }else {
      this.about = "About";
      this.hundredStories = "Hundred Stories";
      this.text_1 = "could be considered an obituary/ cemetery service for your virtual avatars based on encryption and decentralization technology.";
      this.text_2 = "On submission of an obituary of yours, an ";
      this.text_3 = "untamperable record";
      this.text_4 = " would be left in the very corner the internet. At the same time, a one-of-a-kind virtual relic will be generated according to the information of your late avatar for your own preservation.";
      this.about_text3 = "This is a statement against Big Tech's power and ownership of our virtual selves. Instead of buried in their inaccessible servers, a trace of existence shall be preserved out there through this project.";
      this.about_text5 = "Except for those whose accounts banned/deleted by the Big Techs, anyone who decided to give up on their virtual avatars permanently, for whatever reason, are also warmly welcomed to submit their obituaries.";
      this.about_text6 = "See the project on Ethereum.";

      this.home = "Home";
      this.submission = "Submission";
    }
  }

  about = "关于";
  languageM = "EN";
  hundredStories = "《百物语》";
  text_1 = "为您已故的社交媒体账号提供基于去中心化技术的墓碑、讣告服务。";
  text_2 = "在您提交讣告后，一份";
  text_3 = "不可篡改的记录";
  text_4 = "将会被留在互联网的角落。同时，算法将根据您提交的信息生成一个专属于您的虚拟舍利。";
  about_text3 = "我们相信，您已故的社交账号不应该被埋藏在科技巨头安置在海底的服务器中。我们质疑科技巨头对于我们的虚拟二重身所拥有的绝对权力。与之相对，您可以在这里为您的虚拟二重身留下一丝存在过的痕迹。";
  about_text5 = "除了被封禁的账号外，任何被永久注销，包括主动弃用的社交账号，都可以在《百物语》中提交您的讣告。";
  about_text6 = "前往以太坊查看项目。";
  home = "主页";
  submission = "提交讣告";

  //about_text1 = "Story of a hundred things (百物语) could be considered an obituary service for your virtual avatars based on encryption and decentralization technology.";
  //about_text2 = "On submission of an obituary of yours, an untamperable record would be left in the very corner the internet. At the same time, a one-of-a-kind virtual relic will be generated according to the information of your late avatar for your own preservation.";
  //about_text4 = "See the project on Ethereum.";
  

  language() {
    if (this.languageM == "EN") 
    {
      this.about = "About";
      this.hundredStories = "Hundred Stories";
      this.text_1 = "could be considered an obituary/ cemetery service for your virtual avatars based on encryption and decentralization technology.";
      this.text_2 = "On submission of an obituary of yours, an ";
      this.text_3 = "untamperable record";
      this.text_4 = " would be left in the very corner the internet. At the same time, a one-of-a-kind virtual relic will be generated according to the information of your late avatar for your own preservation.";
      this.about_text3 = "This is a statement against Big Tech's power and ownership of our virtual selves. Instead of buried in their inaccessible servers, a trace of existence shall be preserved out there through this project.";
      this.about_text5 = "Except for those whose accounts banned/deleted by the Big Techs, anyone who decided to give up on their virtual avatars permanently, for whatever reason, are also warmly welcomed to submit their obituaries.";
      this.about_text6 = "See the project on Ethereum.";

      this.home = "Home";
      this.submission = "Submission";

      this.languageM = "中文";
      this.ls.languageM = "中文";
    }else {
      this.about = "关于";
      this.hundredStories = "《百物语》";
      this.text_1 = "为您已故的社交媒体账号提供基于去中心化技术的墓碑、讣告服务。";
      this.text_2 = "在您提交讣告后，一份";
      this.text_3 = "不可篡改的记录";
      this.text_4 = "将会被留在互联网的角落。同时，算法将根据您提交的信息生成一个专属于您的虚拟舍利。";
      this.about_text3 = "我们相信，您已故的社交账号不应该被埋藏在科技巨头安置在海底的服务器中。我们质疑科技巨头对于我们的虚拟二重身所拥有的绝对权力。与之相对，您可以在这里为您的虚拟二重身留下一丝存在过的痕迹。";
      this.about_text5 = "除了被封禁的账号外，任何被永久注销，包括主动弃用的社交账号，都可以在《百物语》中提交您的讣告。";
      this.about_text6 = "前往以太坊查看项目。";

      this.home = "主页";
      this.submission = "提交讣告";

      this.languageM = "EN";
      this.ls.languageM = "EN";
    }
  }

  goMenu() {
    this.router.navigateByUrl('/menu');
  }
}
