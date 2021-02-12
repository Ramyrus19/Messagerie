import { Component, OnInit } from '@angular/core';
import {Commentaire} from '../../modeles/comment';
import {ManagerCommentairesService} from '../../services/manager-commentaires.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentList: Commentaire[];
  constructor(private newmessage: ManagerCommentairesService) {
    this.commentList = newmessage.getMessages();
  }

  ngOnInit(): void {
  }

}
