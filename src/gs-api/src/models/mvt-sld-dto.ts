/* tslint:disable */
import { ChequeDto } from './cheque-dto';
export interface MvtSldDto {
  id?: number;
  dateSld?: number;
  quantite?: number;
  cheque?: ChequeDto;
  idBanque?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_ADMIN' | 'VENTE';
  typeSld?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
