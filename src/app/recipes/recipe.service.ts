import { Ingredient } from "src/shared/Ingredient.model";
import { Recipe } from "./recipe-list/recipe.model";

export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe('kollu-recipe','kollu-recipe-description',
        '/assets/img/recepeImg.jpeg',
        [
          new Ingredient('meat', 1),
          new Ingredient('French Fries', 20),
        ]),
        new Recipe('kollu-recipe2','kollu-recipe-description2',
        '/assets/img/recipeImg2.jpeg',
        [
          new Ingredient('buns',2),
          new Ingredient('Meat', 1)
        ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}