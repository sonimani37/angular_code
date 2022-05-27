import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  promises:any = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Data Received')
    }, 3000);
  })

  constructor() { }


  ngOnInit(): void {

    // console.log(this.getData());
    
    // this.getData().then(resp => {
    //   console.log(resp);
    // });

    // this.getData().then(console.log);

    this.getData();
  
  }


  //when we use async keyword before function then it always return a promise
  //async keyword with function always return promsie
  // async  getData(){
  //       return 'Data Received';
  //   }

  async  getData(){
  let response = await this.promises;
    console.log(response);
  
}

}


