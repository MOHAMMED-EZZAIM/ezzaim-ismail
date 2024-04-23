import {Voiture} from "./voiture.model";
import {Client} from "../communModel/client.model";
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
}
