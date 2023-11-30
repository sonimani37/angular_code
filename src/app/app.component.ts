import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token:any
  title = 'Observables';

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
  }
}
