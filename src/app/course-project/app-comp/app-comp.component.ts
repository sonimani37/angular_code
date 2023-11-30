import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-comp',
  templateUrl: './app-comp.component.html',
  styleUrls: ['./app-comp.component.css']
})
export class AppCompComponent implements OnInit {
  loadedFeature = 'recipe';
  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(feature:string){
      this.loadedFeature = feature;
  }

}
