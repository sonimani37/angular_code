import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-directives',
	templateUrl: './directives.component.html',
	styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
	switchValue: number = 0;

	constructor() { }

	ngOnInit(): void {
	}

	title = 'DIRECTIVES'

	styleClassVariable = 'class3';
	classWithConditions = 'class4';

	styledynamicVariable = 'cyan'
	styledynamicVariable1 = 'black'

	username = 'ngModelDirective'

	isvalid: boolean = false;
	isvalid1: boolean = false;



	getClassName() {
		return 'class1';
	}

	onClick() {
		this.isvalid = true;
	}

	onClick1() {
		this.isvalid1 = true;
	}

	onClicked(){
		this.switchValue = 3;
	}

	products = [
		{name: 'Laptop', id: 'pro01', price:10000 },
		{name: 'Mouse', id: 'pro02', price:10000 },
		{name: 'Keyboard', id: 'pro03', price:10000 },
		{name: 'hardDisk', id: 'pro04', price:10000 },
		{name: 'Monitor', id: 'pro05', price:10000 },
	]

}
