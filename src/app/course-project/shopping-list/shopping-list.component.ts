import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[] = [
    {
    name: 'Apples',
    amount: 10
   },
   {
    name: 'Tomatoes',
    amount: 15
   },
]; 
  constructor() { }

  ngOnInit(): void {
  }

}
