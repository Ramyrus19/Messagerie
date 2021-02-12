import { Injectable } from '@angular/core';
import {User} from '../modeles/user';
import {Commentaire} from '../modeles/comment';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {
  user: User;
  usersList: User[];
  constructor() {
    this.usersList = [];
  }

  ajouterUser(data: any): void {
    this.user = new User(data.prenom);
    this.usersList.push(this.user);
  }

  getUsers(): User[]{
    return this.usersList;
  }
}
