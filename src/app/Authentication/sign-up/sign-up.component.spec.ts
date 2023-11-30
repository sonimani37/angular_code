import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

fdescribe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
      beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ SignUpComponent ]
        })
        .compileComponents();
      });

      beforeEach(() => {
        fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('should register customer/increase current customer count by 1',()=>{
        let custCount = component.registerCustomer();
        expect(custCount).toEqual(11);
      });

      it('should un-register customer/decrease current customer count by 1',()=>{
        // let custService = new SignUpComponent;
        let custCount = component.unRegisterCustomer();
        expect(custCount).toEqual(10);
      });

  });

//fdescribe - focussed test script
describe("Testing First Jasmine Test Script", () => {
  it('First Test Scrip', () => {
      console.log('I am inside the test script');
      const tax = 10 * 2;
      expect(tax).toBe(20);
  });
});