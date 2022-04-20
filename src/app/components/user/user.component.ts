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
      email: 'john@gmail.com'
    }
  }

  getEmail() {
    return this.user.email;
  }

  ngOnInit(): void {
    console.log('do something after initialize')
  }
}
