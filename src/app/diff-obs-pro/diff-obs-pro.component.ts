import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-diff-obs-pro',
  templateUrl: './diff-obs-pro.component.html',
  styleUrls: ['./diff-obs-pro.component.css']
})
export class DiffObsProComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  myObservable:  any;
  myPromise:any;

  mySubscription = new Subscription;

  create(){
    this.myObservable = new Observable<string>(observer => {
      console.log("observable has created");
      // observer.next("observable has emitted 0");
      // observer.next("observable has emitted 1");
      // observer.next("observable has emitted 2");
      // observer.next("observable has emitted 3");

      // setInterval(() => {
      //   observer.next("Observable is emitting data");
      // },1000)


      // setTimeout(() => {
      //    observer.next("Observable is emitting data");
      // },5000)

      // observer.next("observable has emitted 0");
    });


    this.myPromise = new Promise<string>(resolve => {
      console.log("Promise has created");
      // resolve("Promise has emitted 0")
      // resolve("Promise has emitted 1")
      // resolve("Promise has emitted 2")
      // resolve("Promise has emitted 3")

      // setInterval(() => {
      //   resolve("Promise is emitting data");
      // },1000);

      // setTimeout(() => {
      //   resolve("Promise is emitting data");
      // },5000)

      // resolve("Promise has emitted 0")
    });


    // this.myPromise.then(data => {
    //   console.log(data);
    // });
    // this.myObservable.subscribe(data => {
    //   console.log(data);
    // });
    // setTimeout(() => {
    //   this.myObservable.subscribe(data => {
    //     console.log(data);
    //   });
    // }, 0);

  }

  execute(){
    this.mySubscription =  this.myObservable.subscribe((resp: any) => {
      console.log(resp);
    })

    this.myPromise.then((data:any) => {
        console.log(data);
      })
  }

  cancel(){
    this.mySubscription.unsubscribe();
  }

  ngOnDestroy(){
    // this.myObservable.unsubscribe();
  }
}