import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  
  recipes: Recipe[] = [
    new Recipe('kollu-recipe','kollu-recipe-description',
    '/assets/img/recepeImg.jpeg'),
    new Recipe('kollu-recipe2','kollu-recipe-description2',
    '/assets/img/recipeImg2.jpeg')

  ]
}
