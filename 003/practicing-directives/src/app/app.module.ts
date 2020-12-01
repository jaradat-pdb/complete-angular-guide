import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarHeaderComponent } from './shared/navbar-header/navbar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    FooterComponent,
    NavbarHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
