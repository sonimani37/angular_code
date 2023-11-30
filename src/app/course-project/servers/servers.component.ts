import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No server was created!';
  serverName:string = 'TestServer';
  serverCreated:boolean = false;
  servers = ['Testserver 0' , 'Testserver 2','Testserver 3'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateserver(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event:Event){
    // this.serverName = event.target.value;      //this is only available because the target is of type input element though this error. we can ecplicitly inform it about the type in TypeScript by adding HTML input element here
    this.serverName = (<HTMLInputElement>event.target).value;    //this event will be HTML input element. 
    
  }

}
