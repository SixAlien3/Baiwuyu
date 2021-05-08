import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Detail, UserJ } from '../detail';
import { RestService} from '../rest.service';
import { DatePipe } from '@angular/common';
import { PolicyService } from '../policy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { LanguageService } from '../language.service';
import 'p5';
declare let p5: any;

@Component({
  selector: 'app-haoxiang',
  templateUrl: './haoxiang.component.html',
  styleUrls: ['./haoxiang.component.css'],
  providers: [DatePipe]
})
export class HaoxiangComponent implements OnInit {

  private dSpeed = 1;
  private dThreshold = 365;
  private restoreRate = 0.3;
  detailList: Detail[] = [];
  detailListF: Detail[] = [];
  detailL : UserJ[] = [];
  languageM = "EN";

  constructor(public rest: RestService, public datepipe: DatePipe, public policyService: PolicyService
    ,public router: Router, public route: ActivatedRoute, private ls: LanguageService) {
      //route.params.subscribe(val => this.ngOnInit()); 
  }

  ngOnInit(): void {
    // this.rest.getUsers().subscribe((resp: any) => {
    //   this.detailList = resp;
    //   this.sortLatest();
    //   this.detailList.forEach(detail => {
    //     //console.log(detail.id + "  "+ detail.referenceTime);
    //   });
    //   this.detailList.forEach(detail => {
    //     this.decay(detail);
    //   }); 
    // });
    this.languageM = this.ls.languageM;
    if (this.languageM == "EN") {
      this.pre_text = "无论什么原因，当您的社交账号被删除或是遗失，它都可以在这个互联网的角落里留下一丝痕迹，一个永久的存档。";
      this.pre_text_pg2 = "为您遗失的社交账号提交一份讣告，我们将为您生成专属的墓碑。";
      this.submitM = "提交";
      this.learnMoreM = "了解更多";
      this.sortM = "排序";
      this.filterM = "筛选";
      this.latestM = "最新";
      this.dateOfDeathM = "死亡时间";
      this.causeFilter = "死因";
      this.platformFilter = "平台";
    }else {
      this.pre_text = "For whatever reason a virtual avatar was lost, it shall have a place at this very corner of the internet.";
      this.pre_text_pg2 = "Submit your obituary for your lost avatar and get exclusive relic generated from the information of your lost avatar.";
      this.submitM = "Submit";
      this.learnMoreM = "Learn More";
      this.sortM = "Sort";
      this.filterM = "Filter";
      this.latestM = "latest";
      this.dateOfDeathM = "date of death";
      this.causeFilter = "cause of death";
      this.platformFilter = "platform";
    }

    if (this.detailList.length == 0) {
      this.policyService.getPolicies().snapshotChanges().pipe(take(1)).subscribe(
        data => {
          this.detailL = [];
          this.detailL = data.map(e => {
            return {
              id: e.payload.doc.id, ...e.payload.doc.data()
            } as UserJ;
          });
          this.detailList = [];
          this.detailL.forEach( user => {
            this.detailList.push(new Detail(user));
        }
        );
        // this.detailList.forEach(detail => {
        //   console.log(detail);
        // });
          this.sortLatest();
          this.causeList = [...new Set(this.detailList.map(item => item.causeS))];
          this.platformList = [...new Set(this.detailList.map(item => item.platform))];
          this.detailList.forEach(detail => {
                this.decay(detail);
              });
        }
      );
    }
  }

  pre_text = "无论什么原因，当您的社交账号被删除或是遗失，它都可以在这个互联网的角落里留下一丝痕迹，一个永久的存档。";
  pre_text_pg2 = "为您遗失的社交账号提交一份讣告，我们将为您生成专属的墓碑。";
  submitM = "提交";
  learnMoreM = "了解更多";
  sortM = "排序";
  filterM = "筛选";
  latestM = "最新";
  dateOfDeathM = "死亡时间";
  causeFilter = "死因";
  platformFilter = "平台";

  language() {
    if (this.languageM == "中文"){
      this.pre_text = "无论什么原因，当您的社交账号被删除或是遗失，它都可以在这个互联网的角落里留下一丝痕迹，一个永久的存档。";
      this.pre_text_pg2 = "为您遗失的社交账号提交一份讣告，我们将为您生成专属的墓碑。";
      this.submitM = "提交";
      this.learnMoreM = "了解更多";
      this.sortM = "排序";
      this.filterM = "筛选";
      this.latestM = "最新";
      this.dateOfDeathM = "死亡时间";
      this.causeFilter = "死因";
      this.platformFilter = "平台";
      this.languageM = "EN";
      this.ls.languageM = "EN";
    }else {
      this.pre_text = "For whatever reason a virtual avatar was lost, it shall have a place at this very corner of the internet.";
      this.pre_text_pg2 = "Submit your obituary for your lost avatar and get exclusive relic generated from the information of your lost avatar.";
      this.submitM = "Submit";
      this.learnMoreM = "Learn More";
      this.sortM = "Sort";
      this.filterM = "Filter";
      this.latestM = "latest";
      this.dateOfDeathM = "date of death";
      this.causeFilter = "cause of death";
      this.platformFilter = "platform";
      this.languageM = "中文";
      this.ls.languageM = "中文";
    }
  }
  
  causeList = [];
  platformList = [];

  sortLatest() {
    console.log("sortlatest");
    this.detailList.sort((a, b) => b.postTime.getTime() - a.postTime.getTime());
  }

  sortDateOfDeath() {
    this.detailList.sort((a, b) => b.deathDate.getTime() - a.deathDate.getTime());
  }

  searchCause = "";
  searchPlatform = "";

  causeOfDeath(cause: string) {
    this.searchCause = cause;
    if (cause === "") {
      if (this.languageM == "中文") {
        this.causeFilter = "cause of death";
      }else {
        this.causeFilter = "死因";
      }   
    }else {
      this.causeFilter = cause;
    }
  }

  platformSearch(p: string) {
    this.searchPlatform = p;
    if (p === "") {
      if (this.languageM == "中文") {
        this.platformFilter = "platform";
      }else {
        this.platformFilter = "平台";
      }     
    }else {
      this.platformFilter = p;
    }
  }

  decay(detail: Detail) {
    const sketch = (s: any) => {
      let img;
      let originalImg;
      let currentTime;
      s.preload = () => {
        img = s.loadImage(detail.pic);
        originalImg = s.loadImage(detail.pic);
      }

      s.setup = () => {
        let c = s.createCanvas(img.width/2, img.height/2);
        c.parent("sketch-parent-"+detail.id);
        img.resize(img.width/2, img.height/2);
        originalImg.resize(originalImg.width/2, originalImg.height/2);

        // postTime = year()*365 + month()*30 + day();
        //postTime = s.hour()*3600 + s.minute()*60 + s.second();
        //referenceTime = postTime;
        // console.log(referenceTime);
        currentTime = new Date();
        let daysInterval = Math.floor((Date.UTC(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate()) - Date.UTC(detail.referenceTime.getFullYear(), detail.referenceTime.getMonth(), detail.referenceTime.getDate()) ) /(1000 * 60 * 60 * 24));
        let deltaTime = daysInterval * this.dSpeed;
        // if (deltaTime > this.dThreshold){
        //   deltaTime = this.dThreshold;
        //   detail.referenceTime.setDate(currentTime.getDate()-deltaTime/this.dSpeed); 
        // }
        //console.log (detail.id + "  "+ deltaTime);
        img.loadPixels();  
        originalImg.loadPixels();

        for(let y = 0; y < img.height; y++) {
          let chance = s.random(this.dThreshold);

          for(let x = 0; x < img.width; x++) {
            let index = (x + y * img.width) * 4;
            
            if (deltaTime > chance){
            img.pixels[index] = s.random(255); // r
            img.pixels[index+1] = s.random(255); // g
            img.pixels[index+2] = s.random(255); // b
            // img.pixels[index+3] = 255; // a
                } else{
            img.pixels[index] = originalImg.pixels[index]; // r
            img.pixels[index+1] = originalImg.pixels[index+1]; // g
            img.pixels[index+2] = originalImg.pixels[index+2]; // b
            img.pixels[index+3] = originalImg.pixels[index+3]; // a
                }
          }
          img.updatePixels();
          s.clear();
          s.image(img, 0, 0);   
        }
      };

      s.draw = () => {
        
      };
    };

    new p5(sketch);
  }

  // changeP5(detail: Detail) {
  //   console.log("1 "+this.datepipe.transform(detail.referenceTime,"YYYY/MM/dd"));
  //   let currentTime = new Date();
  //   let daysInterval = Math.floor((Date.UTC(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate()) - Date.UTC(detail.referenceTime.getFullYear(), detail.referenceTime.getMonth(), detail.referenceTime.getDate()) ) /(1000 * 60 * 60 * 24));
  //   detail.referenceTime.setDate(detail.referenceTime.getDate()+daysInterval*this.restoreRate);
  //   let user = new UserJ();
  //   user.id = detail.id;
  //   user.username = detail.username;
  //   user.platform = detail.platform;
  //   user.registerDate = this.datepipe.transform(detail.registerDate,"YYYY/MM/dd");
  //   user.deathDate = this.datepipe.transform(detail.deathDate,"YYYY/MM/dd");
  //   user.cause = detail.cause;
  //   user.obituary = detail.obituary;
  //   user.pic = detail.pic;
  //   user.photo = detail.photo;
  //   user.postTime = this.datepipe.transform(detail.postTime,"YYYY/MM/dd");
  //   user.referenceTime = this.datepipe.transform(detail.referenceTime,"YYYY/MM/dd");
  //   // this.rest.updateUser(detail.id.toString(), user).subscribe((result) => {
  //   //   console.log(detail.id);
  //   // }, (err) => {
  //   //   console.log(err);
  //   // });
  //   this.policyService.updatePolicy(user.id+"", {
  //     referenceTime: user.referenceTime
  //   })
  //     .then(() => {
  //       console.log(user.referenceTime);
  //         this.router.navigateByUrl('/details', {state: detail});
  //     })
  //     .catch(err => console.log(err));
  // }

}

