import { Injectable } from '@angular/core';
import {Commentaire} from '../modeles/comment';

@Injectable({
  providedIn: 'root'
})
export class ManagerCommentairesService {
  comment: Commentaire;
  commentList: Commentaire[];
  constructor() {
    this.commentList = [];
  }

  ajouterUnMessage(data: any): void {
    this.comment = new Commentaire(data.user, data.message);
    this.commentList.push(this.comment);
  }

  getMessages(): Commentaire[]{
    return this.commentList;
  }
}
