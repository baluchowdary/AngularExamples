import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
}) 
export class HeaderComponent {
  //We are holding selected value
  @Output() featureSelected = new EventEmitter<string>();

  //We are calling onSelect function from hearHTML
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

}
