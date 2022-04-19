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
  currentClasses = {};
  currentStyles = {};
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
      image: 'https://picsum.photos/600/600',
      isActive: true,
      balance: 100,
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
      image: 'https://picsum.photos/600/600',
      isActive: true,
      balance: 500,
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
      image: 'https://picsum.photos/600/600',
      isActive: false,
      balance: 50,
      registered: new Date('01/02/2018 08:30:00')
    }];

  }

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  private setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.isActive
    }
  }

  setShowExtended(): void {
    this.showExtended = !this.showExtended;
    this.setCurrentStyles();
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px'
    }
  }
}
