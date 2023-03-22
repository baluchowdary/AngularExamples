import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/shared/Ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] =[
        new Ingredient('Banana',5),
        new Ingredient('Apple',10)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());

      }

}