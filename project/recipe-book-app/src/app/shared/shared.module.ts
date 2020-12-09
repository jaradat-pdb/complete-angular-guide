import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    JumbotronComponent,
    NavbarComponent
  ],
  exports: [
    JumbotronComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
