import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nbMystere: number;
  nbEssais: number;// nb d'essais autorisés
  nbTentatives: number; // nb d'essais effectué
  proposition: number; // saisie de l'utilisateur
  reponse: string; // message qui sera retourné dans la vue
  min: number; // borne inférieure, ici on prendra 0
  max: number; // borne supérieure, ici on prendra 100

  constructor() { // ici le constructeur initialise les attributs
    this.nbEssais =10;
    this.min=0;
    this.max=100;
    this.nbTentatives=0;
    this.nbMystere = Math.floor( (Math.random()*100));// on génére le nombre mystère
  }

  soumettreProposition(proposition: number)
  {
    if((proposition>this.nbMystere)&&(this.nbTentatives<=this.nbEssais))
    {
      this.nbTentatives++;
      this.reponse='trop grand ' + this.nbTentatives.toString() + ' essais !';
    }
    if((proposition<this.nbMystere)&&(this.nbTentatives<=this.nbEssais))
    {
      this.nbTentatives++;
      this.reponse='trop petit ' + this.nbTentatives.toString() + ' essais !';
    }
    if((proposition==this.nbMystere)&&(this.nbTentatives<=this.nbEssais))
    {
      this.nbTentatives++;
      this.reponse='trouvé en '+ this.nbTentatives.toString() + ' essais !' ;
    }
    if(this.nbTentatives>this.nbEssais)
    {
      this.reponse='Maximum d\'essais atteint';
    }

  }

  razJeu()
  {
    this.nbEssais =10;
    this.min=0;
    this.max=100;
    this.nbTentatives=0;
    this.nbMystere = Math.floor( (Math.random()*100));
    this.proposition = 0;
    this.reponse='';

  }
}
