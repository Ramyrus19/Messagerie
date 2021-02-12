import { Component, OnInit } from '@angular/core';
import {ManagerCommentairesService} from '../../services/manager-commentaires.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  container: string;
  constructor(private newmessage: ManagerCommentairesService) { }

  ngOnInit(): void {
    this.container = 'container';
  }

  onSubmit(data): void {
    this.newmessage.ajouterUnMessage(data);
  }

}
