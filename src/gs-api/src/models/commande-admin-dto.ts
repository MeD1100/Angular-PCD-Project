/* tslint:disable */
import { AdminDto } from './admin-dto';
import { LigneCommandeAdminDto } from './ligne-commande-admin-dto';
export interface CommandeAdminDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  admin?: AdminDto;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  ligneCommandeAdmins?: Array<LigneCommandeAdminDto>;
  commandeLivree?: boolean;
}
