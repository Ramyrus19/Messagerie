import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  constructor() { }

  affiche(): void{
    console.log('J\'ai utilisé mon servcie !');
  }

  ajouterUnPrenom(prenom: string): void{
    console.log(prenom);
  }
}
