import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    signinForm!: UntypedFormGroup;
    loading = false;
    submitted = false;
    responseMessage: string = '';
    response: any;

    username = 'Admin'


    constructor(private formBuilder: UntypedFormBuilder, private auth: AuthenticationService, private router: Router) { }

    ngOnInit(): void {
        this.signinForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    checkUserName() {
        return this.username;
    }

    onSubmit() {
        this.submitted = true;
        var endPoint = 'signin'
        this.auth.sendRequest('post', endPoint, this.signinForm.value).subscribe(
        (result: any) => {
            this.response = result;

            if (this.response.success == false) {
                this.responseMessage = this.response.error;                
            } else if (this.response.success == true) {
                this.responseMessage = this.response.successmessage;
                localStorage.setItem('token', this.response['token'])
                localStorage.setItem('user-data', this.response['user']);
                localStorage.setItem('userId', this.response['user']['id'])
                localStorage.setItem('firstname', this.response['user']['firstname'])
                localStorage.setItem('lastname', this.response['user']['lastname'])
                localStorage.setItem('email', this.response['user']['email'])
                localStorage.setItem('contact', this.response['user']['contact'])
                this.router.navigate(["/dashboard"]);
                this.signinForm.reset();
            }
        })
    }

}
