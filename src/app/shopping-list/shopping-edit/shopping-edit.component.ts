import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Input() ingredientSelected:Ingredient;
  constructor() { 
    
  }

  ngOnInit() {
  }

  addItem(name:string, amount:number) {
    let ingredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(ingredient);
  }

}
