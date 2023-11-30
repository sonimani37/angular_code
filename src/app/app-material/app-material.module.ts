import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SignInComponent } from '../Authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../Authentication/sign-up/sign-up.component';
import { AppAuthComponent } from '../Authentication/app-auth/app-auth.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        // AppAuthComponent,
        // SignUpComponent,
        // SignInComponent
    ],
    imports: [
        NgbModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule
    ],

    exports: [
        MatToolbarModule, MatCardModule, MatIconModule
    ],
})
export class AppMaterialModule { }
