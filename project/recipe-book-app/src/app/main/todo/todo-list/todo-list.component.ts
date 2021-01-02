import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { LoggerService } from '../../../shared/services/logger/logger.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    new Todo('Ex Todo', 'Example of content of a todo.')
  ];

  constructor(logger: LoggerService) {
    logger.log('TRACE', 'Inside TodoListComponent constructor');
  }

  ngOnInit(): void {}

}
