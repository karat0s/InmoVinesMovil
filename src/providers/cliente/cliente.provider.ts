import { Clientes } from './../../clases/clientes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {

  public cliente : Clientes;

  constructor(public http: HttpClient) {
    console.log('Hello ClienteProvider Provider');
  }

}
