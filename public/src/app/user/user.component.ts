import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[]= [];

  constructor(
    private _userServices: UserService
  ) { }
    
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._userServices.getUsers()
      .then(users => this.users = users);
  }

  create(user: User){
    this._userServices.create(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

  destroy(user: User){
    this._userServices.destroy(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

  update(user){
    this._userServices.update(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

}
