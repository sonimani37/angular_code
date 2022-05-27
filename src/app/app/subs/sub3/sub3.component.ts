import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sub3',
  templateUrl: './sub3.component.html',
  styleUrls: ['./sub3.component.css']
})
export class Sub3Component implements OnInit {

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
