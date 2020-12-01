import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit, AfterViewInit {
  jumbotronCreated: boolean;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.jumbotronCreated = true;
  }

  getBtnColor(): string {
    return this.jumbotronCreated === true ? 'green' : 'red';
  }
}
