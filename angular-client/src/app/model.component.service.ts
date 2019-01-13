import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ModelComponentService {
  constructor(private _http: HttpClient) { }
  getModel() {
    var proxyUrl = 'http://localhost:8080/',
    userUrl = "http://localhost:3000/models"
    return this._http.get(proxyUrl + userUrl)
  }
}
