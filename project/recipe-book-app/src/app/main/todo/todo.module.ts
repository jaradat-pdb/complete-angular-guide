import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoDetailComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule {}
