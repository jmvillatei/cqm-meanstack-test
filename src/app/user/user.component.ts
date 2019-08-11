import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[]= [
    new User(1, 'jose', 'alcatara', 'jose@gmail.com'),
    new User(2, 'juan', 'malco', 'jose@gmail.com'),
    new User(3, 'jose', 'morales', 'jose@gmail.com')
  ];

  constructor(
    private _userServices: UserService
  ) { }
    
  ngOnInit() {
    //this.getUsers();
  }

  getUsers(){
    //this._userServices.getUsers()
    //  .then(users => this.users = users);
  }

  create(user: User){
    this.users.push(user);
  }

  destroy(user: User){
    const i = this.users.indexOf(user);
    this.users.splice(i, 1);
  }

}
