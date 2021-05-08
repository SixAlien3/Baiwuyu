import { Component, OnInit, Input } from '@angular/core';
import { Detail, UserJ } from '../detail';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PolicyService } from '../policy.service';
import { map } from 'rxjs/operators';
import { LanguageService } from '../language.service';
import 'p5';
declare let p5: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DatePipe]
})
export class DetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router, public datepipe: DatePipe, public policyService: PolicyService,
    private ls: LanguageService) {
   }

  private dSpeed = 1;
  private dThreshold = 365;
  private restoreRate = 0.3;
  //@Input() detail: Detail;
  id: string;

  ngOnInit(): void {
    this.languageM = this.ls.languageM;
    if (this.languageM == "EN") {
      this.text1 = "前往以太坊查看。";
      this.home = "主页";
      this.submission = "提交讣告";
      this.about = "关于";
    }else {
      this.text1 = "view on blockchain.";
      this.home = "Home";
      this.submission = "Submission";
      this.about = "About";
    }
    this.id = this.router.snapshot.paramMap.get('id');
    this.policyService.getOne(this.id).subscribe(
      e => {
        this.detail = new Detail(e);
        this.changeP5();
        
      });
    //this.detail = history.state.data;
    //this.detail = JSON.parse(this.router.snapshot.params['p']);
    //this.detail = history.state as Detail;
  }

  detail: Detail;
  text1 = "前往以太坊查看。";
  languageM = "EN";
  home = "主页";
  submission = "提交讣告";
  about = "关于";

  language() {  
    if (this.languageM == "EN")
    {
      this.text1 = "view on blockchain.";
      this.home = "Home";
      this.submission = "Submission";
      this.about = "About";
      this.languageM = "中文";
      this.ls.languageM = "中文";
    }else {
      this.text1 = "前往以太坊查看。";
      this.home = "主页";
      this.submission = "提交讣告";
      this.about = "关于";
      this.languageM = "EN";
      this.ls.languageM = "EN";
    }
  }

  goMenu() {
    this.route.navigateByUrl('/menu');
  }

  decay(detail: Detail) {
    const sketch = (s: any) => {
      let img;
      let originalImg;
      let currentTime;
      s.preload = () => {
        img = s.loadImage(detail.photo);
        originalImg = s.loadImage(detail.photo);
      }

      s.setup = () => {
        let c = s.createCanvas(img.width/2, img.height/2);
        c.parent("sketch-parent");
        img.resize(img.width/2, img.height/2);
        originalImg.resize(originalImg.width/2, originalImg.height/2);

        // postTime = year()*365 + month()*30 + day();
        //postTime = s.hour()*3600 + s.minute()*60 + s.second();
        //referenceTime = postTime;
        // console.log(referenceTime);
        currentTime = new Date();
        let daysInterval = Math.floor((Date.UTC(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate()) - Date.UTC(detail.referenceTime.getFullYear(), detail.referenceTime.getMonth(), detail.referenceTime.getDate()) ) /(1000 * 60 * 60 * 24));
        let deltaTime = daysInterval * this.dSpeed;
        if (deltaTime > this.dThreshold){
          deltaTime = this.dThreshold;
          detail.referenceTime.setDate(currentTime.getDate()-deltaTime/this.dSpeed);
        }
        //this.changeP5();
        //console.log (deltaTime);
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

  changeP5() {
    console.log("1 "+this.datepipe.transform(this.detail.referenceTime,"YYYY/MM/dd"));
    let currentTime = new Date();
    let daysInterval = Math.floor((Date.UTC(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate()) - Date.UTC(this.detail.referenceTime.getFullYear(), this.detail.referenceTime.getMonth(), this.detail.referenceTime.getDate()) ) /(1000 * 60 * 60 * 24));
    this.detail.referenceTime.setDate(this.detail.referenceTime.getDate()+daysInterval*this.restoreRate);
    // let user = new UserJ();
    // user.id = detail.id;
    // user.username = detail.username;
    // user.platform = detail.platform;
    // user.registerDate = this.datepipe.transform(detail.registerDate,"YYYY/MM/dd");
    // user.deathDate = this.datepipe.transform(detail.deathDate,"YYYY/MM/dd");
    // user.cause = detail.cause;
    // user.obituary = detail.obituary;
    // user.pic = detail.pic;
    // user.photo = detail.photo;
    // user.postTime = this.datepipe.transform(detail.postTime,"YYYY/MM/dd");
    // user.referenceTime = this.datepipe.transform(detail.referenceTime,"YYYY/MM/dd");
    // this.rest.updateUser(detail.id.toString(), user).subscribe((result) => {
    //   console.log(detail.id);
    // }, (err) => {
    //   console.log(err);
    // });
    this.policyService.updatePolicy(this.detail.id+"", {
      referenceTime: this.datepipe.transform(this.detail.referenceTime,"YYYY/MM/dd")
    })
      .then(() => {
        this.decay(this.detail);
        //console.log(this.detail.referenceTime);
          //this.router.navigateByUrl('/details', {state: this.detail});
      })
      .catch(err => console.log(err));
  }

}
