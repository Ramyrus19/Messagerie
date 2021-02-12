import { Injectable } from '@angular/core';
import {Commentaire} from '../modeles/comment';
import {ManageUsersService} from './manage-users.service';
import {User} from '../modeles/user';

@Injectable({
  providedIn: 'root'
})
export class ManagerCommentairesService {
  comment: Commentaire;
  commentList: Commentaire[];
  user: User;
  constructor(private usermanager: ManageUsersService) {
    this.commentList = [];
  }

  ajouterUnMessage(data: any): void {
    this.comment = new Commentaire(data.user, data.message);
    this.commentList.push(this.comment);
    this.user = new User(data.user);

    if (!containsObject(this.user.prenom, this.usermanager.getUsers())){
      this.usermanager.ajouterUser(this.user);
    }
  }

  getMessages(): Commentaire[]{
    return this.commentList;
  }
}

function containsObject(obj, list): boolean {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i].prenom === obj) {
      return true;
    }
  }
  return false;
}
