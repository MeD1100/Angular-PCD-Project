import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanksapiService {

  url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getBanks()
  {
    return this.http.get(this.url);
  }
}
