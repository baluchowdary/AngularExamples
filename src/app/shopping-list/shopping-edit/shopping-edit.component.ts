import { Component, 
  ElementRef, 
  ViewChild
  // EventEmitter, 
  // Output
 } from '@angular/core';
import { Ingredient } from 'src/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef | undefined; 
  @ViewChild('amountInput') amountInputRef: ElementRef | undefined; 
  // @Output()  ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService:ShoppingListService){

  }
  
  onAddItem(){
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}


