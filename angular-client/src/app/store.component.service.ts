import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class StoreComponentService {
  constructor(private _http: HttpClient) { }
  getStore() {
    var proxyUrl = 'http://localhost:8080/',
    userUrl = "http://localhost:3000/stores"
    return this._http.get(proxyUrl + userUrl)
  }
}
