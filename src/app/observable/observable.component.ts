import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

    orderStatus:any;
	data:any =  Observable;
    // data: Observable<any> | undefined;   //We indicate that the type may be either a string or undefined.
    // data!: Observable<any>;   // ! symbol to indicate that we are aware that myInput is not initialized in the constructor and we will handle it elsewhere.
  constructor() { }

  ngOnInit(): void {

    this.data = new Observable((observer:any) => {
      console.log(observer);

		setTimeout(() => {
			observer.next("In Progress");
		}, 2000);

		setTimeout(() => {
			observer.next("Processing");
		}, 4000);


		setTimeout(() => {
			observer.next("Observable Completed");
		}, 6000);

		setTimeout(() => {
			observer.error();
		}, 6000);

		setTimeout(() => {
			observer.complete(); //it will no more track for changes
		}, 8000);

		setTimeout(() => {
			observer.next("After Completion");  //it will not process this data as we have completed
		}, 12000);

      
    })
	this.data.subscribe((val:any) => {
		this.orderStatus = val;
	});

  }

}
