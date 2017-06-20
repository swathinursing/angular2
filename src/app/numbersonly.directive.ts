import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[numbersonly]'
})
export class NumbersonlyDirective {
  constructor(public el:ElementRef) { }
  
  @HostListener('keypress',['$event']) onKeypress(evt) {
    var regex = new RegExp("[0-9]")
    if(!regex.test(evt.key)){

      event.preventDefault();
    }
   
  }
}