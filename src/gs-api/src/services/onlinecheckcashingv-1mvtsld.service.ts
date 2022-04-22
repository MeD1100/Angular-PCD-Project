/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MvtSldDto } from '../models/mvt-sld-dto';
@Injectable({
  providedIn: 'root',
})
class Onlinecheckcashingv1mvtsldService extends __BaseService {
  static readonly correctionStockNegPath = '/onlinecheckcashing/v1/mvtsld/correctionneg';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  correctionStockNegResponse(body?: MvtSldDto): __Observable<__StrictHttpResponse<MvtSldDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/onlinecheckcashing/v1/mvtsld/correctionneg`,
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
   * @param body undefined
   * @return successful operation
   */
  correctionStockNeg(body?: MvtSldDto): __Observable<MvtSldDto> {
    return this.correctionStockNegResponse(body).pipe(
      __map(_r => _r.body as MvtSldDto)
    );
  }
}

module Onlinecheckcashingv1mvtsldService {
}

export { Onlinecheckcashingv1mvtsldService }
