import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    token:any = '';
    email:any = '';
    constructor(private router: Router) {

    }

    ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.email = localStorage.getItem('email');    
    }

    logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(["/authentication"]);
    }
}
