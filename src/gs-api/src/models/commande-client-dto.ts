/* tslint:disable */
import { ClientDto } from './client-dto';
export interface CommandeClientDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  client?: ClientDto;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  commandeLivree?: boolean;
}
