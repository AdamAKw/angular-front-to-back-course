import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  isActive: boolean = true;

  constructor() {
    this.users = [{
      firstName: 'John',
      lastName: 'Smith',
      age: 31,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      },
      isActive: true,
      registered: new Date('01/02/2018 08:30:00')
    }, {
      firstName: 'Luke',
      lastName: 'Doe',
      age: 20,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA',
      },
      isActive: true,
      registered: new Date('01/05/2011 09:31:00')
    }, {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      },
      isActive: false,
      registered: new Date('01/02/2018 08:30:00')
    }];

  }

  ngOnInit(): void {
  }


  setShowExtended(): void {
    this.showExtended = !this.showExtended;
  }
}
