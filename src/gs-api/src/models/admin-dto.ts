/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface AdminDto {
  id?: number;
  nom?: string;
  prenom?: string;
  adresse?: AdresseDto;
  idBanque?: number;
  photo?: string;
  mail?: string;
  numTel?: string;
  rib?: string;
}
