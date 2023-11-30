import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.color = "green"
    // element.nativeElement.style.display = "none"
   }

}
