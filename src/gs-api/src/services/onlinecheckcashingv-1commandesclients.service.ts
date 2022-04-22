/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeClientDto } from '../models/commande-client-dto';
@Injectable({
  providedIn: 'root',
})
class Onlinecheckcashingv1commandesclientsService extends __BaseService {
  static readonly findAllPath = '/onlinecheckcashing/v1/commandesclients/all';
  static readonly deleteClientPath = '/onlinecheckcashing/v1/commandesclients/delete/cheque/{idCommande}/{idLigneCommande}';
  static readonly updateClientPath = '/onlinecheckcashing/v1/commandesclients/update/client/{idCommande}/{idClient}';
  static readonly updateQuantiteCommandePath = '/onlinecheckcashing/v1/commandesclients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdPath = '/onlinecheckcashing/v1/commandesclients/{idCommandeClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeClientDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeClientDto>)
    );
  }

  /**
   * @param params The `Onlinecheckcashingv1commandesclientsService.DeleteClientParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteClientResponse(params: Onlinecheckcashingv1commandesclientsService.DeleteClientParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/delete/cheque/${params.idCommande}/${params.idLigneCommande}`,
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
   * @param params The `Onlinecheckcashingv1commandesclientsService.DeleteClientParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteClient(params: Onlinecheckcashingv1commandesclientsService.DeleteClientParams): __Observable<CommandeClientDto> {
    return this.deleteClientResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param params The `Onlinecheckcashingv1commandesclientsService.UpdateClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `idClient`:
   *
   * @return successful operation
   */
  updateClientResponse(params: Onlinecheckcashingv1commandesclientsService.UpdateClientParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/update/client/${params.idCommande}/${params.idClient}`,
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
   * @param params The `Onlinecheckcashingv1commandesclientsService.UpdateClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `idClient`:
   *
   * @return successful operation
   */
  updateClient(params: Onlinecheckcashingv1commandesclientsService.UpdateClientParams): __Observable<CommandeClientDto> {
    return this.updateClientResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param params The `Onlinecheckcashingv1commandesclientsService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: Onlinecheckcashingv1commandesclientsService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
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
   * @param params The `Onlinecheckcashingv1commandesclientsService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: Onlinecheckcashingv1commandesclientsService.UpdateQuantiteCommandeParams): __Observable<CommandeClientDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findByIdResponse(idCommandeClient: number): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/commandesclients/${idCommandeClient}`,
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
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findById(idCommandeClient: number): __Observable<CommandeClientDto> {
    return this.findByIdResponse(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }
}

module Onlinecheckcashingv1commandesclientsService {

  /**
   * Parameters for deleteClient
   */
  export interface DeleteClientParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateClient
   */
  export interface UpdateClientParams {
    idCommande: number;
    idClient: number;
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

export { Onlinecheckcashingv1commandesclientsService }
