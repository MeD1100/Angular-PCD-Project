/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AdminDto } from '../models/admin-dto';
import { BanqueDto } from '../models/banque-dto';
import { CategoryDto } from '../models/category-dto';
import { ChequeDto } from '../models/cheque-dto';
import { LigneCommandeAdminDto } from '../models/ligne-commande-admin-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
import { ClientDto } from '../models/client-dto';
import { CommandeAdminDto } from '../models/commande-admin-dto';
import { CommandeClientDto } from '../models/commande-client-dto';
import { MvtSldDto } from '../models/mvt-sld-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
import { VentesDto } from '../models/ventes-dto';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly findAllPath = '/onlinecheckcashing/v1/admins/all';
  static readonly savePath = '/onlinecheckcashing/v1/admins/create';
  static readonly deletePath = '/onlinecheckcashing/v1/admins/delete/{idAdmins}';
  static readonly findByIdPath = '/onlinecheckcashing/v1/admins/{idAdmin}';
  static readonly save_1Path = '/onlinecheckcashing/v1/banques/create';
  static readonly delete_1Path = '/onlinecheckcashing/v1/banques/delete/{idBanque}';
  static readonly findById_1Path = '/onlinecheckcashing/v1/banques/{idBanque}';
  static readonly save_2Path = '/onlinecheckcashing/v1/categories/create';
  static readonly delete_2Path = '/onlinecheckcashing/v1/categories/delete/{idCategory}';
  static readonly findAllChequeByIdCategoryPath = '/onlinecheckcashing/v1/cheques/filter/category/{idCategory}';
  static readonly findHistoriqueCommandeAdminPath = '/onlinecheckcashing/v1/cheques/historique/commandeadmin/{idCheque}';
  static readonly findHistoriqueCommandeClientPath = '/onlinecheckcashing/v1/cheques/historique/commandeclient/{idCheque}';
  static readonly findHistoriqueVentesPath = '/onlinecheckcashing/v1/cheques/historique/vente/{idCheque}';
  static readonly findByCodeChequePath = '/onlinecheckcashing/v1/cheques/{codeCheque}';
  static readonly findAll_1Path = '/onlinecheckcashing/v1/clients/all';
  static readonly save_3Path = '/onlinecheckcashing/v1/clients/create';
  static readonly delete_3Path = '/onlinecheckcashing/v1/clients/delete/{idClient}';
  static readonly findById_2Path = '/onlinecheckcashing/v1/clients/{idClient}';
  static readonly save_4Path = '/onlinecheckcashing/v1/commandesadmins/create';
  static readonly deleteAdminPath = '/onlinecheckcashing/v1/commandesadmins/delete/cheque/{idCommande}/{idLigneCommande}';
  static readonly updateAdminPath = '/onlinecheckcashing/v1/commandesadmins/update/admin/{idCommande}/{idAdmin}';
  static readonly updateEtatCommandePath = '/onlinecheckcashing/v1/commandesadmins/update/etat/{idCommande}/{etatCommande}';
  static readonly save_5Path = '/onlinecheckcashing/v1/commandesclients/create';
  static readonly delete_4Path = '/onlinecheckcashing/v1/commandesclients/delete/{idCommandeClient}';
  static readonly findAllLignesCommandesClientByCommandeClientIdPath = '/onlinecheckcashing/v1/commandesclients/lignescommande/{idCommande}';
  static readonly updateChequePath = '/onlinecheckcashing/v1/commandesclients/update/cheque/{idCommande}/{idLigneCommande}/{idCheque}';
  static readonly updateEtatCommande_1Path = '/onlinecheckcashing/v1/commandesclients/update/etat/{idCommande}/{etatCommande}';
  static readonly correctionStockPosPath = '/onlinecheckcashing/v1/mvtsld/correctionpos';
  static readonly entreeStockPath = '/onlinecheckcashing/v1/mvtsld/entree';
  static readonly mvtSldChequePath = '/onlinecheckcashing/v1/mvtsld/filter/cheque/{idCheque}';
  static readonly sortieStockPath = '/onlinecheckcashing/v1/mvtsld/sortie';
  static readonly stockReelChequePath = '/onlinecheckcashing/v1/mvtsld/stockreel/{idCheque}';
  static readonly findById_3Path = '/onlinecheckcashing/v1/utilisateur/{idUtilisateur}';
  static readonly findAll_2Path = '/onlinecheckcashing/v1/utilisateurs/all';
  static readonly save_6Path = '/onlinecheckcashing/v1/utilisateurs/create';
  static readonly delete_5Path = '/onlinecheckcashing/v1/utilisateurs/delete/{idUtilisateur}';
  static readonly findAll_3Path = '/onlinecheckcashing/v1/ventes/all';
  static readonly save_7Path = '/onlinecheckcashing/v1/ventes/create';
  static readonly delete_6Path = '/onlinecheckcashing/v1/ventes/delete/{idVente}';
  static readonly findById_4Path = '/onlinecheckcashing/v1/ventes/{idVente}';
  static readonly authenticatePath = 'onlinecheckcashing/v1/auth/authenticate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<AdminDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/admins/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AdminDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<AdminDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<AdminDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveResponse(): __Observable<__StrictHttpResponse<AdminDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/admins/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdminDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save(): __Observable<AdminDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as AdminDto)
    );
  }
  deleteResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/admins/delete/${idAdmins}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  delete(): __Observable<null> {
    return this.deleteResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findByIdResponse(): __Observable<__StrictHttpResponse<AdminDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/admins/${idAdmin}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdminDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById(): __Observable<AdminDto> {
    return this.findByIdResponse().pipe(
      __map(_r => _r.body as AdminDto)
    );
  }

  /**
   * @return successful operation
   */
  save_1Response(): __Observable<__StrictHttpResponse<BanqueDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/banques/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BanqueDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save_1(): __Observable<BanqueDto> {
    return this.save_1Response().pipe(
      __map(_r => _r.body as BanqueDto)
    );
  }
  delete_1Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/banques/delete/${idBanque}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  delete_1(): __Observable<null> {
    return this.delete_1Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findById_1Response(): __Observable<__StrictHttpResponse<BanqueDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/banques/${idBanque}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BanqueDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_1(): __Observable<BanqueDto> {
    return this.findById_1Response().pipe(
      __map(_r => _r.body as BanqueDto)
    );
  }

  /**
   * Cette méthode permet d'enregistrer ou modifier une categorie
   * @return L'objet categorie cree / modifie
   */
  save_2Response(): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Cette méthode permet d'enregistrer ou modifier une categorie
   * @return L'objet categorie cree / modifie
   */
  save_2(): __Observable<CategoryDto> {
    return this.save_2Response().pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Cette méthode permet de supprimer une categorie par ID
   */
  delete_2Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/categories/delete/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Cette méthode permet de supprimer une categorie par ID
   */
  delete_2(): __Observable<null> {
    return this.delete_2Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findAllChequeByIdCategoryResponse(): __Observable<__StrictHttpResponse<Array<ChequeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/cheques/filter/category/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ChequeDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllChequeByIdCategory(): __Observable<Array<ChequeDto>> {
    return this.findAllChequeByIdCategoryResponse().pipe(
      __map(_r => _r.body as Array<ChequeDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueCommandeAdminResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeAdminDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/cheques/historique/commandeadmin/${idCheque}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeAdminDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findHistoriqueCommandeAdmin(): __Observable<Array<LigneCommandeAdminDto>> {
    return this.findHistoriqueCommandeAdminResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeAdminDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueCommandeClientResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/cheques/historique/commandeclient/${idCheque}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findHistoriqueCommandeClient(): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandeClientResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @return successful operation
   */
  findHistoriqueVentesResponse(): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/cheques/historique/vente/${idCheque}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findHistoriqueVentes(): __Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentesResponse().pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * Cette méthode permet de chercher un cheque par son CODE
   * @return Le cheque a ete trouve dans la BDD
   */
  findByCodeChequeResponse(): __Observable<__StrictHttpResponse<ChequeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/cheques/${codeCheque}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChequeDto>;
      })
    );
  }
  /**
   * Cette méthode permet de chercher un cheque par son CODE
   * @return Le cheque a ete trouve dans la BDD
   */
  findByCodeCheque(): __Observable<ChequeDto> {
    return this.findByCodeChequeResponse().pipe(
      __map(_r => _r.body as ChequeDto)
    );
  }

  /**
   * Cette méthode permet de chercher et renvoyer la liste des clients qui existent dans la BDD
   * @return La liste des clients / une liste vide
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<Array<ClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/clients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }
  /**
   * Cette méthode permet de chercher et renvoyer la liste des clients qui existent dans la BDD
   * @return La liste des clients / une liste vide
   */
  findAll_1(): __Observable<Array<ClientDto>> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as Array<ClientDto>)
    );
  }

  /**
   * Cette méthode permet d'enregistrer ou modifier un client
   * @return L'objet client cree / modifie
   */
  save_3Response(): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/clients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Cette méthode permet d'enregistrer ou modifier un client
   * @return L'objet client cree / modifie
   */
  save_3(): __Observable<ClientDto> {
    return this.save_3Response().pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Cette méthode permet de supprimer un client par ID
   */
  delete_3Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/clients/delete/${idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Cette méthode permet de supprimer un client par ID
   */
  delete_3(): __Observable<null> {
    return this.delete_3Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de chercher un client par son ID
   * @return Le client a ete trouve dans la BDD
   */
  findById_2Response(): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/clients/${idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Cette méthode permet de chercher un client par son ID
   * @return Le client a ete trouve dans la BDD
   */
  findById_2(): __Observable<ClientDto> {
    return this.findById_2Response().pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * @return successful operation
   */
  save_4Response(): __Observable<__StrictHttpResponse<CommandeAdminDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeAdminDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save_4(): __Observable<CommandeAdminDto> {
    return this.save_4Response().pipe(
      __map(_r => _r.body as CommandeAdminDto)
    );
  }

  /**
   * @return successful operation
   */
  deleteAdminResponse(): __Observable<__StrictHttpResponse<CommandeAdminDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/delete/cheque/${idCommande}/${idLigneCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeAdminDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  deleteAdmin(): __Observable<CommandeAdminDto> {
    return this.deleteAdminResponse().pipe(
      __map(_r => _r.body as CommandeAdminDto)
    );
  }

  /**
   * @return successful operation
   */
  updateAdminResponse(): __Observable<__StrictHttpResponse<CommandeAdminDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/update/admin/${idCommande}/${idAdmin}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeAdminDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateAdmin(): __Observable<CommandeAdminDto> {
    return this.updateAdminResponse().pipe(
      __map(_r => _r.body as CommandeAdminDto)
    );
  }

  /**
   * @return successful operation
   */
  updateEtatCommandeResponse(): __Observable<__StrictHttpResponse<CommandeAdminDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/update/etat/${idCommande}/${etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeAdminDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateEtatCommande(): __Observable<CommandeAdminDto> {
    return this.updateEtatCommandeResponse().pipe(
      __map(_r => _r.body as CommandeAdminDto)
    );
  }

  /**
   * @return successful operation
   */
  save_5Response(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save_5(): __Observable<CommandeClientDto> {
    return this.save_5Response().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }
  delete_4Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/delete/${idCommandeClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  delete_4(): __Observable<null> {
    return this.delete_4Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findAllLignesCommandesClientByCommandeClientIdResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/lignescommande/${idCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllLignesCommandesClientByCommandeClientId(): __Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLignesCommandesClientByCommandeClientIdResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @return successful operation
   */
  updateChequeResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/update/cheque/${idCommande}/${idLigneCommande}/${idCheque}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateCheque(): __Observable<CommandeClientDto> {
    return this.updateChequeResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  updateEtatCommande_1Response(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/update/etat/${idCommande}/${etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateEtatCommande_1(): __Observable<CommandeClientDto> {
    return this.updateEtatCommande_1Response().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  correctionStockPosResponse(): __Observable<__StrictHttpResponse<MvtSldDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/mvtsld/correctionpos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtSldDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  correctionStockPos(): __Observable<MvtSldDto> {
    return this.correctionStockPosResponse().pipe(
      __map(_r => _r.body as MvtSldDto)
    );
  }

  /**
   * @return successful operation
   */
  entreeStockResponse(): __Observable<__StrictHttpResponse<MvtSldDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/mvtsld/entree`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtSldDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  entreeStock(): __Observable<MvtSldDto> {
    return this.entreeStockResponse().pipe(
      __map(_r => _r.body as MvtSldDto)
    );
  }

  /**
   * @return successful operation
   */
  mvtSldChequeResponse(): __Observable<__StrictHttpResponse<Array<MvtSldDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/mvtsld/filter/cheque/${idCheque}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MvtSldDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  mvtSldCheque(): __Observable<Array<MvtSldDto>> {
    return this.mvtSldChequeResponse().pipe(
      __map(_r => _r.body as Array<MvtSldDto>)
    );
  }

  /**
   * @return successful operation
   */
  sortieStockResponse(): __Observable<__StrictHttpResponse<MvtSldDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/mvtsld/sortie`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtSldDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  sortieStock(): __Observable<MvtSldDto> {
    return this.sortieStockResponse().pipe(
      __map(_r => _r.body as MvtSldDto)
    );
  }

  /**
   * @return successful operation
   */
  stockReelChequeResponse(): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/mvtsld/stockreel/${idCheque}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @return successful operation
   */
  stockReelCheque(): __Observable<number> {
    return this.stockReelChequeResponse().pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * Cette méthode permet de chercher un utilisateur par son ID
   * @return Le utilisateur a ete trouve dans la BDD
   */
  findById_3Response(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/utilisateur/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Cette méthode permet de chercher un utilisateur par son ID
   * @return Le utilisateur a ete trouve dans la BDD
   */
  findById_3(): __Observable<UtilisateurDto> {
    return this.findById_3Response().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Cette méthode permet de chercher et renvoyer la liste des utilisateurs qui existent dans la BDD
   * @return La liste des utilisateurs / une liste vide
   */
  findAll_2Response(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * Cette méthode permet de chercher et renvoyer la liste des utilisateurs qui existent dans la BDD
   * @return La liste des utilisateurs / une liste vide
   */
  findAll_2(): __Observable<Array<UtilisateurDto>> {
    return this.findAll_2Response().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Cette méthode permet d'enregistrer ou modifier un utilisateur
   * @return L'objet utilisateur cree / modifie
   */
  save_6Response(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Cette méthode permet d'enregistrer ou modifier un utilisateur
   * @return L'objet utilisateur cree / modifie
   */
  save_6(): __Observable<UtilisateurDto> {
    return this.save_6Response().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Cette méthode permet de supprimer un utilisateur par ID
   */
  delete_5Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/utilisateurs/delete/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Cette méthode permet de supprimer un utilisateur par ID
   */
  delete_5(): __Observable<null> {
    return this.delete_5Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findAll_3Response(): __Observable<__StrictHttpResponse<Array<VentesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/ventes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VentesDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_3(): __Observable<Array<VentesDto>> {
    return this.findAll_3Response().pipe(
      __map(_r => _r.body as Array<VentesDto>)
    );
  }

  /**
   * @return successful operation
   */
  save_7Response(): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/ventes/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save_7(): __Observable<VentesDto> {
    return this.save_7Response().pipe(
      __map(_r => _r.body as VentesDto)
    );
  }
  delete_6Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/ventes/delete/${idVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  delete_6(): __Observable<null> {
    return this.delete_6Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findById_4Response(): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/ventes/${idVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_4(): __Observable<VentesDto> {
    return this.findById_4Response().pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `onlinecheckcashing/v1/auth/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticate(body?: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }
}

module ApiService {
}

export { ApiService }
