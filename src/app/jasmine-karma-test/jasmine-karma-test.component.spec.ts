import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasmineKarmaTestComponent } from './jasmine-karma-test.component';

// let jasmin = new JasmineKarmaTestComponent();


fdescribe('JasmineKarmaTestComponent', () => {
  let component: JasmineKarmaTestComponent;
  let fixture: ComponentFixture<JasmineKarmaTestComponent>;

  let custService: JasmineKarmaTestComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasmineKarmaTestComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(JasmineKarmaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(()=>{      //beforEach is used to initialization
    custService = new JasmineKarmaTestComponent();
  });
  
  // afterEach(()=>{      //Removing the initialization
  //   custService = null;
  // });

  beforeAll(()=>{   //execute only once and  before all the unit test case

  });

  afterAll(()=>{   //after all the unit case have been executed 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing Addition FUnction', ()=>{
    expect(component.addition(10,20)).toBe(30);
  });

  it('check UserName Static', ()=>{
      let usrnme = "Testing";
      expect(usrnme).toEqual('Testing');
    });

  // toBe Compare string ,number and other chracter
  it('Testing String Matcher "toBe" for matcher ===', ()=>{
      let firststr = "Hello World!";
      expect(firststr).toBe('Hello World!');    
  });

  //toEqual compare string ,number as well as Arrays,Objects other Litrals
  it('Testing String Matcher "toEqual" for matcher ==', ()=>{
    let firststr = "Hello World!";
    expect(firststr).toEqual('Hello World!');
  });

 xit('Testing String Matcher "not.toEqual" for matcher ==', ()=>{
    let firststr = "Hello World!";
    expect(firststr).not.toEqual('Hello World!');
  });

  it('Testing String Matcher "toContain" checks hello present in sentence or not', ()=>{
    let firststr = "Hello World! Welcome to the Avengers zone";
    expect(firststr).toContain('Avengers');
  });

  xit('Testing String Matcher "toMatch" matcher is for regular expression', ()=>{
    var message = "This 4 th lane of Underworld";
    //Regular Expression to check String contains numbers
    expect(message).toMatch(/\d+/);
    expect(message).toMatch("Underworld");
  });

  //toBe vs ToEqual
  it('toBe vs ToEqual', ()=>{
    let a = { val:10};
    let b = { val:10};
    // expect(a).toBe(b);    //Expected Object({ val: 10 }) to be Object({ val: 10 }). Tip: To check for deep equality, use .toEqual() instead of .toBe().
    expect(a).toEqual(b);
  });


  //Array
  it('Testing Array using "toEqual", arrays should be equal',()=>{
    let a = [1,2,3];
    expect(a).toEqual([1,2,3]);
  });

  it('Testing Array using "toContain", arrays should be equal',()=>{
    let strArr = ['abc','def','xyz'];
    expect(strArr).toContain('xyz');
  });


  it('should register customer/increase current customer count by 1',()=>{
    let custCount = custService.registerCustomer();
    expect(custCount).toEqual(11);
  });

  it('should un-register customer/decrease current customer count by 1',()=>{
    // let custService = new JasmineKarmaTestComponent;
    let custCount = custService.unRegisterCustomer();
    expect(custCount).toEqual(9);
  });

});


