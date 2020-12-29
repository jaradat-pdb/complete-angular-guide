export class Todo {
  private title: string;
  private content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

}