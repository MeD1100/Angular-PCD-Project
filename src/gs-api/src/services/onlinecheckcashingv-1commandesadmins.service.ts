/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeAdminDto } from '../models/commande-admin-dto';
import { LigneCommandeAdminDto } from '../models/ligne-commande-admin-dto';
@Injectable({
  providedIn: 'root',
})
class Onlinecheckcashingv1commandesadminsService extends __BaseService {
  static readonly findAllPath = '/onlinecheckcashing/v1/commandesadmins/all';
  static readonly deletePath = '/onlinecheckcashing/v1/commandesadmins/delete/{idCommandeAdmin}';
  static readonly findAllLignesCommandesAdminByCommandeAdminIdPath = '/onlinecheckcashing/v1/commandesadmins/lignescommande/{idCommande}';
  static readonly updateChequePath = '/onlinecheckcashing/v1/commandesadmins/update/cheque/{idCommande}/{idLigneCommande}/{idCheque}';
  static readonly updateQuantiteCommandePath = '/onlinecheckcashing/v1/commandesadmins/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdPath = '/onlinecheckcashing/v1/commandesadmins/{idCommandeAdmin}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeAdminDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeAdminDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeAdminDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeAdminDto>)
    );
  }

  /**
   * @param idCommandeAdmin undefined
   */
  deleteResponse(idCommandeAdmin: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/delete/${idCommandeAdmin}`,
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
   * @param idCommandeAdmin undefined
   */
  delete(idCommandeAdmin: number): __Observable<null> {
    return this.deleteResponse(idCommandeAdmin).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesAdminByCommandeAdminIdResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneCommandeAdminDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/lignescommande/${idCommande}`,
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
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesAdminByCommandeAdminId(idCommande: number): __Observable<Array<LigneCommandeAdminDto>> {
    return this.findAllLignesCommandesAdminByCommandeAdminIdResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeAdminDto>)
    );
  }

  /**
   * @param params The `Onlinecheckcashingv1commandesadminsService.UpdateChequeParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idCheque`:
   *
   * @return successful operation
   */
  updateChequeResponse(params: Onlinecheckcashingv1commandesadminsService.UpdateChequeParams): __Observable<__StrictHttpResponse<CommandeAdminDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/update/cheque/${params.idCommande}/${params.idLigneCommande}/${params.idCheque}`,
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
   * @param params The `Onlinecheckcashingv1commandesadminsService.UpdateChequeParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idCheque`:
   *
   * @return successful operation
   */
  updateCheque(params: Onlinecheckcashingv1commandesadminsService.UpdateChequeParams): __Observable<CommandeAdminDto> {
    return this.updateChequeResponse(params).pipe(
      __map(_r => _r.body as CommandeAdminDto)
    );
  }

  /**
   * @param params The `Onlinecheckcashingv1commandesadminsService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: Onlinecheckcashingv1commandesadminsService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<CommandeAdminDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
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
   * @param params The `Onlinecheckcashingv1commandesadminsService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: Onlinecheckcashingv1commandesadminsService.UpdateQuantiteCommandeParams): __Observable<CommandeAdminDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeAdminDto)
    );
  }

  /**
   * @param idCommandeAdmin undefined
   * @return successful operation
   */
  findByIdResponse(idCommandeAdmin: number): __Observable<__StrictHttpResponse<CommandeAdminDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/commandesadmins/${idCommandeAdmin}`,
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
   * @param idCommandeAdmin undefined
   * @return successful operation
   */
  findById(idCommandeAdmin: number): __Observable<CommandeAdminDto> {
    return this.findByIdResponse(idCommandeAdmin).pipe(
      __map(_r => _r.body as CommandeAdminDto)
    );
  }
}

module Onlinecheckcashingv1commandesadminsService {

  /**
   * Parameters for updateCheque
   */
  export interface UpdateChequeParams {
    idLigneCommande: number;
    idCommande: number;
    idCheque: number;
  }

  /**
   * Parameters for updateQuantiteCommande
   */
  export interface UpdateQuantiteCommandeParams {
    quantite: number;
    idCommande: number;
    etatCommande: number;
  }
}

export { Onlinecheckcashingv1commandesadminsService }
