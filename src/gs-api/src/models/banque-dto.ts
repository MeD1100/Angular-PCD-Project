/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface BanqueDto {
  id?: number;
  nom?: string;
  description?: string;
  adresse?: AdresseDto;
  photo?: string;
  email?: string;
  numTel?: string;
  steWeb?: string;
}
