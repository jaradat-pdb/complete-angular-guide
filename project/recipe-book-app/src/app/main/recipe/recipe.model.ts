export class Recipe {
  private name: string;
  private desc: string;
  private imgPath: string;

  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
  }

}
