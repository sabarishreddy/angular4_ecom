import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  ingredientSelected: Ingredient;
  constructor() { }

  ngOnInit() {
    this.ingredients = [
      new Ingredient('apple', 10),
      new Ingredient('tomatoes', 5 )
    ];
  }

  addItem(ingredientItem: Ingredient) {
    this.ingredients.push(ingredientItem);
  }
}
