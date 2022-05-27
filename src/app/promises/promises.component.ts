import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-promises',
	templateUrl: './promises.component.html',
	styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
	brand: any;
	color: any;
	hardDisk: any;
	statuss: any;
	promiseValue: any;
	dellAvail:boolean = false;
	hpAvail:boolean = false;

	constructor() { }

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

	notAvail = {
		brand: 'Not Available',
		statuss: 'Failed'
	}

	ngOnInit(): void {

	}

	DellAvailable() {
		this.dellAvail = true;
		this.hpAvail = false;
		this.status();
	}

	HpAvailable() {
		this.hpAvail = true;
		this.dellAvail = false;
		this.status();

	}

	notAvailable(){
		this.hpAvail = false;
		this.dellAvail = false;
		this.status();
	}

	status(){
		// let buyLaptop = new Promise(function (resolve,reject){
		//   resolve('promise is resolved');
		// });

		let buyLaptop = new Promise((resolve, reject) => {
			// resolve('promise is resolved');
			// reject('promise is reject');

			if (this.dellAvail == true) {
				// setTimeout(() => {
					// resolve('Dell is Purchased');
					resolve(this.dell);
				// }, 3000);

			} else if (this.hpAvail == true) {
				// setTimeout(() => {
					// resolve('Hp is Purchased');
					resolve(this.hp);
				// }, 3000);

			} else {
				// setTimeout(() => {
					// reject('Laptop is not available on store');
					reject(this.notAvail);
				// }, 3000);

			}
		});


		buyLaptop.then(resp => {
			console.log('then code response ->', resp);
			this.promiseValue = resp;
			this.brand = this.promiseValue.brand;
			this.color = this.promiseValue.color;
			this.hardDisk = this.promiseValue.hardDisk;

		}).catch(resp => {
			console.log('catch code response ->', resp)
			this.promiseValue = resp;
			this.brand = this.promiseValue.brand;
			this.statuss = this.promiseValue.statuss;
			this.color = '';
			this.hardDisk = '';

		}).finally(() => {
			console.log('finally code respose');

		})
	}

}
