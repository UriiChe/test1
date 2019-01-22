import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string = 'https://example.api.com'
  constructor(private _http: HttpClient) { }

  sendUser(user){
    return this._http.post(this.url, {
      body: {
        'email': user.email,
        'password': user.password
      }
    })
  }

}
