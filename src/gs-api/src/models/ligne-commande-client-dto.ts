/* tslint:disable */
import { ChequeDto } from './cheque-dto';
import { CommandeClientDto } from './commande-client-dto';
export interface LigneCommandeClientDto {
  id?: number;
  cheque?: ChequeDto;
  commandeClient?: CommandeClientDto;
  quantite?: number;
  prixUnitaire?: number;
}
