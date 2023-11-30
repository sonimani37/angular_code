import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jasmine-karma-test',
  templateUrl: './jasmine-karma-test.component.html',
  styleUrls: ['./jasmine-karma-test.component.css']
})
export class JasmineKarmaTestComponent implements OnInit {

  customerCount = 10;
  constructor() { }
  
  ngOnInit(): void {
  }
  
   addition(num1:number,num2: number){
       return num1 + num2;
   }

   registerCustomer(){
    return ++this.customerCount;
   }

   unRegisterCustomer(){
    return --this.customerCount;
   }
}
