import { Component, OnInit } from '@angular/core';
import { Detail } from '../detail';

@Component({
  selector: 'app-haoxiang',
  templateUrl: './haoxiang.component.html',
  styleUrls: ['./haoxiang.component.css']
})
export class HaoxiangComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.sortLatest();
  }

  showList = false;
  pre_text = "For whatever reason a virtual avatar was lost, it shall have a place at this very corner of the internet.";
  pre_text_pg2 = "Submit your obituary for your lost avatar and get exclusive relic generated from the information of your lost avatar.";

  detailList: Detail[] = [
    {
      username: "好想打麻将鸦",
      platform: "微博",
      registerDate: new Date("2018/09/01"),
      deathDate: new Date("2020/10/01"),
      cause: "主动停用",
      obituary: "伯邑考，呕吐物里有没有你的梦境？",
      pic: " assets/label1.png",
      clickDate: new Date(),
      photo: " assets/photo.png"
    },
    {
      username: "username2",
      platform: "豆瓣",
      // date的格式不能改成用-
      registerDate: new Date("2018/09/02"),
      deathDate: new Date("2020/10/02"),
      cause: "其他",
      obituary: "obituary2",
      pic: " assets/label1.png",
      clickDate: new Date(),
      photo: " assets/photo.png"
    },
    {
      username: "username3",
      platform: "微博",
      registerDate: new Date("2018/09/03"),
      deathDate: new Date("2020/10/05"),
      cause: "其他",
      obituary: "obituary3",
      pic: " assets/label1.png",
      clickDate: new Date(),
      photo: " assets/photo.png"
    },
    {
      username: "username4",
      platform: "豆瓣",
      registerDate: new Date("2018/09/04"),
      deathDate: new Date("2020/10/04"),
      cause: "主动停用",
      obituary: "obituary4",
      pic: " assets/label1.png",
      clickDate: new Date(),
      photo: " assets/photo.png"
    },
    {
      username: "username5",
      platform: "微博",
      registerDate: new Date("2018/08/20"),
      deathDate: new Date("2020/10/10"),
      cause: "主动停用",
      obituary: "obituary5",
      pic: " assets/label1.png",
      clickDate: new Date(),
      photo: " assets/photo.png"
    },
  ];
  
  causeList = [...new Set(this.detailList.map(item => item.cause))];
  platformList = [...new Set(this.detailList.map(item => item.platform))];

  sortLatest() {
    this.detailList.sort((a, b) => a.registerDate.getTime() - b.registerDate.getTime());
  }

  sortDateOfDeath() {
    this.detailList.sort((a, b) => a.deathDate.getTime() - b.deathDate.getTime());
  }

  searchCause = "";
  searchPlatform = "";
  causeFilter = "cause of death";
  platformFilter = "platform";

  causeOfDeath(cause: string) {
    this.searchCause = cause;
    if (cause === "") {
      this.causeFilter = "cause of death";
    }else {
      this.causeFilter = cause;
    }
  }

  platformSearch(p: string) {
    this.searchPlatform = p;
    if (p === "") {
      this.platformFilter = "platform";
    }else {
      this.platformFilter = p;
    }
  }
}
