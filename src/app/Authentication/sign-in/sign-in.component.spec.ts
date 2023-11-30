import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInComponent } from './sign-in.component';

import { UntypedFormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';


fdescribe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModule ,BrowserModule,CommonModule,UntypedFormBuilder,FormsModule, ReactiveFormsModule],
      declarations: [ SignInComponent],
      providers: [ AuthenticationService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('check function Hello ',()=>{
  //   let firststr = "Hello World!";
  //   expect(firststr).toBe('Hello World!');  
  // })

  // it('check Name', ()=>{
  //   expect(component.checkUserName()).toBe('Admin');
  // })

  // it('check UserName Static', ()=>{
  //   let usrnme = "Testing";
  //   expect(usrnme).toEqual('Testing');
  // })
  
 
});
