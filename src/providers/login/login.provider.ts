import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Clientes } from '../../clases/clientes';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  apiUrlLogin = 'http://localhost:8080/admin/clientes/login';
  apiUrlGetDatos = 'http://localhost:8080/admin/cliente/'
  cliente: Clientes;
  user: 'admin1';
  secret: 'adminsecret';

  private requestHeaders: HttpHeaders = new HttpHeaders({
    'Authorization': 'Basic ' + btoa(`${this.user}:${this.secret}`),
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  private requestHeadersGet: HttpHeaders = new HttpHeaders({
    'Authorization': 'Basic ' + btoa(`${this.user}:${this.secret}`)
  });

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

login (email, pass): Observable <any> {

  const body = new HttpParams()
    .set('email', email)
    .set('pass', pass);

  return this.http.post(this.apiUrlLogin, body.toString(),
          {
            headers: this.requestHeaders
          })

  }

listInmuebles (id): Observable <any> {

  return this.http.get(`${this.apiUrlGetDatos}${id}/inmuebles`, {headers:this.requestHeadersGet});
}


}
