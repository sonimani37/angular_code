import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-bind',
  templateUrl: './app-bind.component.html',
  styleUrls: ['./app-bind.component.css']
})
export class AppBindComponent implements OnInit {
  bindDeep:boolean = false;
  
  serverElements:{type:string,name:string,content:string}[] = [
    {
    type:'server',
    name:'TestServer',
    content:'Just a test!'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    console.log(serverData);
    
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onSelect(options:string){
 if(options === 'bindingDeep'){
      this.bindDeep = true;
      console.log(this.bindDeep);
    }else{
      this.bindDeep = false;
    }
}

onChangeFirst(){
  this.serverElements[0].name = "changed!!"
}



}
