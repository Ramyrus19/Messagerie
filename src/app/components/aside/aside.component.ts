import { Component, OnInit } from '@angular/core';
import {User} from '../../modeles/user';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  userList: User[];

  constructor() {
    this.userList = [];
    this.userList.push(new User('Paul'));
    this.userList.push(new User('Jean'));
  }

  ngOnInit(): void {
  }

}
