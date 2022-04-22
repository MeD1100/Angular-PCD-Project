/* tslint:disable */
import { ChequeDto } from './cheque-dto';
import { CommandeAdminDto } from './commande-admin-dto';
export interface LigneCommandeAdminDto {
  id?: number;
  cheque?: ChequeDto;
  commandeAdmin?: CommandeAdminDto;
  quantite?: number;
  prixunitaire?: number;
}
