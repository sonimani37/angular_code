import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  // newServerContent = '';

//EventEmiiter is an objest in the Angular Framework which allows you to emit your own events.
@Output()  serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
@Output('bpCreated')  blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();


 //@ViewChild(CockpitComponent,{static:true}) serverContentInput;   // using Component in @viewchild()
 @ViewChild('serverContentInput',{static:true}) serverContentInput!:ElementRef<any>;    // using template or DOM element in @viewchild() and this is of element ref so we can set this type Element ref a refrence to that element element ref needs to be imported from at the angular core.
  constructor() { }

  ngOnInit(): void {
  }

  //----------------------------------------------Using Two way Binding------------------------
  // onAddServer() {
  //   this.serverCreated.emit({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }


  //--------------------------------------------- Using template Refernece------------------------
  // onAddServer(nameInput:HTMLInputElement) {
  //   console.log(nameInput);
  //   console.log(nameInput.value);
    
  //   this.serverCreated.emit({
  //     serverName:nameInput.value,
  //     serverContent: newServerContent
  //   });
  // }

  // onAddBlueprint(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: contentInput.value
  //   });
  // }

    //----------------------------------------- Using @viewChild--------------------------------------
    onAddServer(nameInput:HTMLInputElement) {
      console.log(this.serverContentInput);
      console.log(nameInput.value);
      
      this.serverCreated.emit({
        serverName:nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
    }
  
    onAddBlueprint(nameInput:HTMLInputElement) {
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        serverContent:this.serverContentInput.nativeElement.value
      });
    }

}
