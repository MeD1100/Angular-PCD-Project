/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ChequeDto } from '../models/cheque-dto';
@Injectable({
  providedIn: 'root',
})
class Onlinecheckcashingv1chequesService extends __BaseService {
  static readonly findAllPath = '/onlinecheckcashing/v1/cheques/all';
  static readonly savePath = '/onlinecheckcashing/v1/cheques/create';
  static readonly deletePath = '/onlinecheckcashing/v1/cheques/delete/{idCheque}';
  static readonly findByIdPath = '/onlinecheckcashing/v1/cheques/{idCheque}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Cette méthode permet de chercher et renvoyer la liste des cheques qui existent dans la BDD
   * @return La liste des cheques / une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ChequeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/cheques/all`,
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
   * Cette méthode permet de chercher et renvoyer la liste des cheques qui existent dans la BDD
   * @return La liste des cheques / une liste vide
   */
  findAll(): __Observable<Array<ChequeDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ChequeDto>)
    );
  }

  /**
   * Cette méthode permet d'enregistrer ou modifier un cheque
   * @param body undefined
   * @return L'objet cheque cree / modifie
   */
  saveResponse(body?: ChequeDto): __Observable<__StrictHttpResponse<ChequeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/cheques/create`,
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
   * Cette méthode permet d'enregistrer ou modifier un cheque
   * @param body undefined
   * @return L'objet cheque cree / modifie
   */
  save(body?: ChequeDto): __Observable<ChequeDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ChequeDto)
    );
  }

  /**
   * Cette méthode permet de supprimer un cheque par ID
   * @param idCheque undefined
   */
  deleteResponse(idCheque: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/onlinecheckcashing/v1/cheques/delete/${idCheque}`,
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
   * Cette méthode permet de supprimer un cheque par ID
   * @param idCheque undefined
   */
  delete(idCheque: number): __Observable<null> {
    return this.deleteResponse(idCheque).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Cette méthode permet de chercher un cheque par son ID
   * @param idCheque undefined
   * @return Le cheque a ete trouve dans la BDD
   */
  findByIdResponse(idCheque: number): __Observable<__StrictHttpResponse<ChequeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/onlinecheckcashing/v1/cheques/${idCheque}`,
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
   * Cette méthode permet de chercher un cheque par son ID
   * @param idCheque undefined
   * @return Le cheque a ete trouve dans la BDD
   */
  findById(idCheque: number): __Observable<ChequeDto> {
    return this.findByIdResponse(idCheque).pipe(
      __map(_r => _r.body as ChequeDto)
    );
  }
}

module Onlinecheckcashingv1chequesService {
}

export { Onlinecheckcashingv1chequesService }
