/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { BanqueDto } from './banque-dto';
export interface UtilisateurDto {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  dateDeNaissance?: number;
  motDePasse?: string;
  adresse?: AdresseDto;
  photo?: string;
  banque?: BanqueDto;
}
