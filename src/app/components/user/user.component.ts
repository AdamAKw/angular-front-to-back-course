import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
  // styles:[`
  // .red {
  //   color: red;
  // }`]
})
export class UserComponent implements OnInit{
  user: User;

  constructor() {
    console.log('constructor');
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      }
    }
  }

  getAge(): number {
    return this.user.age;
  }

  ngOnInit(): void {
    console.log('do something after initialize')
  }
}
