export class Todo {
  private content: string;

  constructor(public title: string, content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

}
