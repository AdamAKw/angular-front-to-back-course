import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('userForm') form: any;
  formUser: User = {
    firstName: '',
    lastName: '',
    email: ''
  }


  users: User[];
  isExpanded: boolean = false;

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

  onSubmit({value, valid}: { value: User, valid: boolean | null }) {
    value.isActive = true;
    value.registered = new Date();
    this.users.unshift(value);

    this.form.reset();
  }
}
