import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {

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
