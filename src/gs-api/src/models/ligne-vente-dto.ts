/* tslint:disable */
import { VentesDto } from './ventes-dto';
export interface LigneVenteDto {
  id?: number;
  vente?: VentesDto;
  quantite?: number;
  idBanque?: number;
  prixUnitaire?: number;
}
