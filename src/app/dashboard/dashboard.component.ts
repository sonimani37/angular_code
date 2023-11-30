import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    response: any;
    allUsers: any[]=[];
    responseMessage: any;
    resp: any;
    userId:any

    constructor(private auth: AuthenticationService,private router: Router) { }

    ngOnInit(): void {
        this.userId = localStorage.getItem('userId');
        this.currentUser(this.userId);
        this.getAllUsers();
    }

    currentUser(userId:any){
        var endPoint = 'getUsers?id=' + userId
        this.auth.sendRequest('get', endPoint, null).subscribe(
            (result: any) => {
                this.response = result;
                if (this.response.success == false) {
                    console.log(this.response);

                } else if (this.response.success == true) {
                    // console.log(this.response);
                }
            })
    }

    getAllUsers(){
        var endPoint = 'getUsers'
        this.auth.sendRequest('get', endPoint, null).subscribe(
            (result: any) => {
                this.resp = result;
                if (this.resp.success == false) {
                    console.log(this.resp);
                } else if (this.resp.success == true) {
                    this.resp.user.forEach((element:any) => {
                        if(element.id != this.userId){
                            this.allUsers.push(element)
                        }
                    });
                }
            })
    }

    chat(userId:any){
        const url: string[] = ['/chat/' + userId];
        this.router.navigate(url);
    }

}
