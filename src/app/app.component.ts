import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  recipeSelected ;
  ngOnInit(): void {
    // this.recipeSelected = true;
   }
   constructor(){
    this.recipeSelected = true;
   }
   toggleNav($input){
    console.log($input);
    if ($input == "recipe") {
      this.recipeSelected = true;
    } else {
      this.recipeSelected = false;
    }
  }
}
