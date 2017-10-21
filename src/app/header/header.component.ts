import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output('navSelect') emitNavSelect: EventEmitter<string> = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  recipeClicked(){
    this.emitNavSelect.emit("recipe");
  }

  shoppingClicked() {
    this.emitNavSelect.emit("shopping");
  }

}
