import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {

  
  obsName:any = '';
  constructor(private auth: AuthService ) {
    this.auth.observableName.subscribe((resp:any) => {
      this.obsName = resp;
    })
  }

  ngOnInit(): void {
  }

  onChange(obsr:any){
    console.log(obsr.value);
    this.auth.observableName.next(obsr.value);
  }

}
