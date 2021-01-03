import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private sidebarActive = false;
  @Output() public toggleSidebarEventEmitter = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.sidebarActive = !this.sidebarActive;
    this.toggleSidebarEventEmitter.emit(this.sidebarActive);
  }
}
