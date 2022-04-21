import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from "rxjs";

@Injectable()
export class UsersDataServiceService {
  users: User[];
  constructor() {
    this.users = [{
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@gmail.com',
      isActive: true,
      registered: new Date('01/02/2018 08:30:00'),
      hide: false
    }, {
      firstName: 'Luke',
      lastName: 'Doe',
      email: 'Luke@gmail.com',
      isActive: true,
      registered: new Date('01/05/2011 09:31:00'),
      hide: false
    }, {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohnDoe@gmail.com',
      isActive: false,
      registered: new Date('01/02/2018 08:30:00'),
      hide: false
    }];
  }

  public getUsers(): Observable<User[]> {
    return of(this.users);
  }

  public addUser(user: User) {
    this.users.unshift(user);
  }
}
