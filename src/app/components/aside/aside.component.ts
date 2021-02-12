import { Component, OnInit } from '@angular/core';
import {User} from '../../modeles/user';
import {ManageUsersService} from '../../services/manage-users.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  userList: User[];

  constructor(private usermanager: ManageUsersService) {
    this.userList = usermanager.getUsers();
  }

  ngOnInit(): void {
  }

}
