import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

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
