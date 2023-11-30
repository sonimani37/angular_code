import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    signupForm!: UntypedFormGroup;
    loading = false;
    submitted = false;
    response: any;
    responseMessage: any;
    customerCount: any;


    constructor(
        private formBuilder: UntypedFormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private auth: AuthenticationService) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            contact: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.signupForm.value);
        var endPoint = 'signup'
        this.auth.sendRequest('post', endPoint, this.signupForm.value)
        .subscribe((result: any) => {
            this.response = result;
            // this.auth.setLoader(false);
            console.log(this.response);
            if (this.response.success == false) {
                console.log(this.response);

            } else if (this.response.success == true) {
                console.log(this.response);
                this.responseMessage = this.response.successmessage;
                this.signupForm.reset();
                setTimeout(() => {
                    this.responseMessage = '';
                    this.router.navigate(['signin']);
                }, 3000);
            }
        })
    }

    registerCustomer() {
        return ++this.customerCount;
    }

    unRegisterCustomer() {
        return --this.customerCount;
    }

}
