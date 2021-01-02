export class Recipe {
  private name: string;
  private desc: string;
  private imgPath: string;

  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
  }

  getDesc(): string {
    return this.desc;
  }

  setDesc(desc: string): void {
    this.desc = desc;
  }

  getImgPath(): string {
    return this.imgPath;
  }

  setImgPath(imgPath: string): void {
    this.imgPath = imgPath;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}
