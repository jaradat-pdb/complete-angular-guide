import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeListComponent
  ],
  exports: [
    RecipeDetailComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipeModule {}
