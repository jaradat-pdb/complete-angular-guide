import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FrameModule } from './frame/frame.module';
import { SharedModule } from './shared/shared.module';

import { RecipeModule } from './main/recipe/recipe.module';
import { TodoModule } from './main/todo/todo.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FrameModule,
    RecipeModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
