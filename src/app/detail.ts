import { data } from "jquery";

export class UserJ {
    id : number;
    username: string;
    platform: string;
    registerDate: string;
    registerDateS: string;
    deathDate: string;
    deathDateS: string;
    cause: string;
    causeS: string;
    obituary: string;
    pic: string;
    photo: string;
    postTime: string;
    referenceTime: string;
    blockchain: string;
  };

export class Detail {
    id : number;
    username: string;
    platform: string;
    registerDate: Date;
    registerDateS: string;
    deathDate: Date;
    deathDateS: string;
    cause: string;
    causeS: string;
    obituary: string;
    pic: string;
    photo: string;
    postTime: Date;
    referenceTime: Date;
    blockchain: string;

    constructor(args: UserJ) {
      this.id = args.id;
      this.username = args.username;
      this.platform = args.platform;
      this.registerDate = new Date(args.registerDate);
      this.registerDateS = args.registerDateS;
      this.deathDate = new Date(args.deathDate);
      this.deathDateS = args.deathDateS;
      this.cause = args.cause;
      this.causeS = args.causeS;
      this.obituary =  args.obituary;
      this.pic = args.pic;
      this.photo = args.photo;
      this.postTime = new Date(args.postTime);
      this.referenceTime = new Date(args.referenceTime);
      this.blockchain = args.blockchain;
    };

  };