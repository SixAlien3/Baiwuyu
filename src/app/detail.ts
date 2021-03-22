export class Detail {
    username: string;
    platform: string;
    registerDate: Date;
    deathDate: Date;
    cause: string;
    obituary: string;
    pic: string;
    photo: string;
    clickDate: Date;

    constructor() {
        this.username = "";
        this.platform = "";
        this.registerDate = new Date();
        this.deathDate = new Date();
        this.cause = "";
        this.obituary = "";
        this.pic = "";
        this.clickDate = new Date();
        this.photo = "";
    }
}