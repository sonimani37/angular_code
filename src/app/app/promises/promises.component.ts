import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  promiseValue:any;

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }

  hp = {
    brand: 'Hp',
    hardDisk: '2 TB',
    color: 'Black'
  }

  notAvailavle = {
    brand: 'Not Available',
    status: 'Failed'
  }

  DellAvailable(){
        return false;
  }

  HpAvailable(){
        return false;
  }

  ngOnInit(): void {

    // let buyLaptop = new Promise(function (resolve,reject){
    //   resolve('promise is resolved');
    // });

        let buyLaptop = new Promise((resolve,reject) => {
      // resolve('promise is resolved');
        // reject('promise is reject');
          if(this.DellAvailable()){
             setTimeout(() => {
              // resolve('Dell is Purchased');
              resolve(this.dell);
            }, 3000);
        
          }else if (this.HpAvailable()){
             setTimeout(() => {
              // resolve('Hp is Purchased');
              resolve(this.hp);
            }, 3000);
          
          }else{
            setTimeout(() => {
              // reject('Laptop is not available on store');
              reject(this.notAvailavle);
            }, 3000);
            
          }
        
    });


    buyLaptop.then(resp => {
      console.log('then code response ->', resp);
      this.promiseValue = resp;

    }).catch(resp => {
      console.log('catch code response ->', resp)
      this.promiseValue = resp;

    }).finally(() =>{
        console.log('finally code respose');
        
    })
  }


  // myFunction(){
  //   console.log('myFUnction called');
  // }

}
