import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    JumbotronComponent,
    NavbarComponent,
    SidebarComponent
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
