import { Component } from '@angular/core';
import { Ingredient } from 'src/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] =[
    new Ingredient('Banana',5),
    new Ingredient('Apple',10)
  ]

  constructor(){}

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
