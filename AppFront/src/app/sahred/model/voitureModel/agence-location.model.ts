import {Voiture} from "./voiture.model";
import {Client} from "../communModel/client.model";
<<<<<<< HEAD
import {Paiement} from "../communModel/paiement.model";

export class AgenceLocation {

  iceAgLoc: number;
  raisonSocialAg: string;
  adresse: string;
  numTelephone: number;
  numCompteBkAgLoc: number;
  usernameAgenceLoc: string;
  password: string;
  RCAgLoc: number;
  voitureDtos: Voiture;
  clientDtos: Client;
  paiementDtos: Paiement;

  constructor() {
    this.iceAgLoc = 0;
    this.raisonSocialAg = "";
    this.adresse = "";
    this.numTelephone = 0;
    this.numCompteBkAgLoc = 0;
    this.usernameAgenceLoc = "";
    this.password = "";
    this.RCAgLoc = 0;
    this.voitureDtos = [];
    this.clientDtos = [];
    this.paiementDtos =[];
  }
=======
import {Appartement} from "../appartemetModel/appartement.model";


export  class AgenceLocation {

  // ref: string;
  // DateDebut: string;
  // HeureDebut: string;
  // DateFin: string;
  // HeureFin: string;
  // LieuPrise: string;
  // LieuRetour: string;
  // Description: string;
  // voiture: Voiture;
  // client: Client;
  // appartement: Appartement;
  //
  //
  //
  // constructor() {
  //   this.ref = '';
  //   this.DateDebut = '';
  //   this.HeureDebut = '';
  //   this.DateFin = '';
  //   this.HeureFin = '';
  //   this.LieuPrise = '';
  //   this.LieuRetour = '';
  //   this.Description = '';
  //   this.voiture = new Voiture();
  //   this.client = new Client();
  //   this.appartement = new Appartement();
  // }
>>>>>>> a037c8adb055cf55ab5de2502abbe117127c5ab5
}
