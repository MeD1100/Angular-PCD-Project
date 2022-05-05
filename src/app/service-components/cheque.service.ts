import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/cheques';

  constructor(private http: HttpClient) { }

  getCheque(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCheque(Cheque: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,Cheque);
  }

  updateCheque(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCheque(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getChequesList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }



}
