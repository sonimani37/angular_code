import { BindingParser } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    textColor = 'blue'
    imgUrl = "text.png";
    imgAlt = 'This is the missing image text';
    buttonDisabled = false;
    titlePropertyBinding = 'title Property Binding ';
    colVal = 4;
    username:any = 'Two Way Data Binding';

    isUserLoggedIn = true;

    title = 'This is the testing of Interpolation';
    title1 = 'This is the testing of Property Binding';
    title2 = 'This is the testing of Attribute Binding';
    title3 = 'This is the testing of Event Binding';
    title4 = 'This is the testing of Two way  Binding';

    user_object = {
      'firstName': 'Data',
      'lastName': 'Binding'
    };


    contacts = [
      {
        'firstName': 'steffen',
        'lastName': 'rose',
        'contactId': 1234
      },

      {
        'firstName': 'Mark',
        'lastName': 'Hender',
        'contactId': 5678
      },

      {
        'firstName': 'jonas',
        'lastName': 'john',
        'contactId': 91011
      },
    ]
    user_age = 24;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('clicked');
    
  }

  hightLightBGColor(){
      console.log('HightLighted');
      
  }

  inputBox(){
      console.log('This is input Box');
      
  }

  onClickButton(){
    this.buttonDisabled = true;
  }

}

1.
//[ngClass]="expression"   // property binding
//[attr.className]="c1"   //attribute binding

// 2. some attributes are not natively supported for elements
    // ->[colspan]="colval"  //error
    // ->[attr.colspan]="colval"  //working

//  3. Angular encourages to use property Binding but there are some usecases we have to use 
//  attribute binding

// 4. //a property you know that is exist but it's known to the DOM(Document Object Model).
// the document object model doesn't know that this is the property that is why this gives us error
