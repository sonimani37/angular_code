import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipes[]= [{
    name:'A Test Recipe',
    description:'This is simply a test',
    imagePath:'https://i.pinimg.com/originals/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg'
  }];
  

  constructor() { }

  ngOnInit(): void {
  }

}
