import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { LoggerService } from '../services/logger/logger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private sidebarActive = false;
  @Output() public toggleSidebarEventEmitter = new EventEmitter<boolean>();

  constructor(private logger: LoggerService) {
    this.logger.logConstruction(this.constructor.name);
  }

  ngOnInit(): void {
    this.logger.logInitialization(this.constructor.name);
  }

  toggleSidebar(): void {
    this.sidebarActive = !this.sidebarActive;
    this.logger.debugLog(
      `${this.constructor.name} emitting event sidebarActive=${this.sidebarActive}`
    );
    this.toggleSidebarEventEmitter.emit(this.sidebarActive);
  }
}
