import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../models/User';
import {UsersDataServiceService} from "../../services/users-data-service.service";

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


  isExpanded: boolean = false;

  constructor(private dataUsersServices: UsersDataServiceService) {
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
    this.dataUsersServices.addUser(value);
    this.form.reset();
  }
  get users() :User[] {
    return this.dataUsersServices.getUsers();
  }
}
