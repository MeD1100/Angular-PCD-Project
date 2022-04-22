/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface ChequeDto {
  id?: number;
  codeCheque?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  idBanque?: number;
  category?: CategoryDto;
}
