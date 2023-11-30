import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  observableName:any = new BehaviorSubject<String>('Testing of BehaviorSubject');

  constructor() { }
}
