import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string = '';
  isUsernameEmpty: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  updateUsername(event: Event): void {
    this.username = (<HTMLInputElement> event.target).value;
    if(!!this.username && this.username !== '') {
      this.isUsernameEmpty = false;
    } else {
      this.isUsernameEmpty = true;
    }
  }

  resetUsername(): void {
    this.username = '';
    this.isUsernameEmpty = true;
  }
}
