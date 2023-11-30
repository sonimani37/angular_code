import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})

export class AsyncAwaitComponent implements OnInit {
    resp1:any;
    resp2:any;
    resp: any;

    isJqueryWorking: any;
    dell = {
  		brand: 'Dell Laptop',
  		hardDisk: 'HardDisk is 2 TB',
  		color: 'color is  Black'
  	}

  	hp = {
  		brand: 'Hp Laptop',
  		hardDisk: 'HardDisk is 2 TB',
  		color: 'color is  silver'
  	}

      buyDellLaptop = new Promise((resolve, reject) => {
    // resolve('promise is resolved');
    // reject('promise is reject');
      setTimeout(() => {
        resolve(this.dell);
          }, 3000);
      });

      buyHpLaptop = new Promise((resolve, reject) => {
        // resolve('promise is resolved');
        // reject('promise is reject');
          setTimeout(() => {
            resolve(this.hp);
          }, 3000);
      });

  ngOnInit(): void {

  }


    // Ex -0 : with Promise
  fetch1(){
      this.resp1 = 'Fetching data...'
      this.buyDellLaptop.then(res => {
        console.log(res);
        this.resp1 = JSON.stringify(res);
      })
  }

   // Ex -0 : with with Async/Await

   async fetch2(){
    this.resp2 = 'Fetching2 data...'

    let res = await this.buyHpLaptop;
    console.log(res);
    this.resp2 = JSON.stringify(res);
  }

  fetch3(){
    console.log('This is the example of Async/Await');
    console.log('before calling async Work');
    let a = this.asyncWork();
    console.log('After calling asyncWork()');
    console.log(a);
    a.then(data =>{console.log(data);})
    console.log('Last line of this ts file');
  }

  async asyncWork(){
    console.log('Inside asyncwork function');
    const response = await fetch('https://api.github.com/users')
    console.log('before response');
    this.resp = await response.json();
    console.log('resp resolved');
    return this.resp;
  }
}


// promises:any = new Promise((resolve,reject) => {
//   setTimeout(() => {
//       resolve('Data Received')
//   }, 3000);
// })

// constructor() { }

// ngOnInit(): void {
//   // console.log(this.getData());
//   // this.getData().then(resp => {
//   //   console.log(resp);
//   // });
//   // this.getData().then(console.log);
//   // this.getData();

// }
// //when we use async keyword before function then it always return a promise
// //async keyword with function always return promsie
// // async  getData(){
// //       return 'Data Received';
// //}

// async  getData(){
// let response = await this.promises;
//   console.log(response);
// }

