import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cheque } from '../../pages/profile/articles/articles/cheque';

@Injectable({
  providedIn: 'root'
})
export class AddChequeService {

  baseUrl = "http://localhost:9191/cheques";

  constructor(private httpClient: HttpClient) { }

  addCheque(cheque?: Cheque): Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl}`, cheque);
  }
}
