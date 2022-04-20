import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  formUser: User = {
    firstName: '',
    lastName: '',
    age: undefined,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }


  users: User[];
  isExpanded: boolean = false;

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
      registered: new Date('01/02/2018 08:30:00'),
      hide: false
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
      registered: new Date('01/05/2011 09:31:00'),
      hide: false
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
      registered: new Date('01/02/2018 08:30:00'),
      hide: false
    }];

  }

  ngOnInit(): void {
  }


  setShowExtended(user: User): void {
    user.hide = !user.hide;
  }

  setShowForm() {
    this.isExpanded = !this.isExpanded;
  }

  setExtendIconClasses(user: User): string {
    return user.hide ? 'fa fa-minus' : 'fa fa-plus';
  }

  onSubmit(e: Event) {
    e.preventDefault();
  }

  addUser(): void {
    this.formUser.isActive = true;
    this.formUser.registered = new Date();
    this.users.unshift(this.formUser);


    this.formUser = {
      firstName: '',
      lastName: '',
      age: undefined,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }
}
