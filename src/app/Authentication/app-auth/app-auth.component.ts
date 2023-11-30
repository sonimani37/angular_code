import { Component, OnInit } from '@angular/core';

interface Food {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-app-auth',
    templateUrl: './app-auth.component.html',
    styleUrls: ['./app-auth.component.css'],
    // standalone: true,
    // imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule],
})

export class AppAuthComponent implements OnInit {
    signup: boolean = false;
    signin: boolean = false;

    foods: Food[] = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
    ];

    constructor() { }

    ngOnInit(): void {

    }

    onSelect(authType: string) {
        if (authType === 'signup') {
            this.signup = true;
            this.signin = false;

        } else if (authType === 'signin') {
            this.signup = false;
            this.signin = true;
        }
    }

}
