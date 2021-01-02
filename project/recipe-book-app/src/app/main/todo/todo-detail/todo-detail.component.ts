import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../../shared/services/logger/logger.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor(private logger: LoggerService) {
    this.logger.logConstruction(this.constructor.name);
  }

  ngOnInit(): void {
    this.logger.logInitialization(this.constructor.name);
  }
}
