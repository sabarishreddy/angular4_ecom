import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
   @HostBinding('class.open') openClass: boolean = false;
  
  constructor() { }

  @HostListener('click') toggleDropdown(eventData: Event){
    console.log("open class" + this.openClass)
    this.openClass = !this.openClass;
  }

  @HostListener('focusout') close(eventData: Event){
    console.log("open class" + this.openClass)
    this.openClass = false;
  }
}
