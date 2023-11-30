import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
  // encapsulation:ViewEncapsulation.Emulated
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck {

@Input('srvElement')  element:any= [];   //if you want to bind to some other property name outside of the component this is(@Input('srvElement') assign an alias)
@Input() name:string = '';

constructor() {
    console.log('constructor called!');
    
   }

   ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log('ngOnChanges called!');
    console.log(changes);
    
   }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(): void {
      console.log('ngDoCheck Called!');
      
  }

}
