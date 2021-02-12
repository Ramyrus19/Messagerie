import { Component, OnInit } from '@angular/core';
import {User} from '../../modeles/user';
import {ActivatedRoute} from '@angular/router';
import {ManageUsersService} from '../../services/manage-users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  prenomRecu: string;
  user: User;
  constructor(private route: ActivatedRoute, private userManager: ManageUsersService) {
    this.prenomRecu = this.route.snapshot.paramMap.get('param');
  }

  ngOnInit(): void {
    console.log(this.userManager.getUsers());
    for (const u of this.userManager.getUsers()) {
      console.log(u);
      if (u.prenom === this.prenomRecu){
        this.user = new User(this.prenomRecu);
      }
    }
  }

}
