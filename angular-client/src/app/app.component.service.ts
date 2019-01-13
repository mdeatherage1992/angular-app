import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AppComponentService {
  constructor(private _http: HttpClient) { }
  getData() {
    var proxyUrl = 'http://localhost:8080/',
    userUrl = "http://localhost:3000/areas"
    return this._http.get(proxyUrl + userUrl);
  }
}
