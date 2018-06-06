import { Inmuebles } from './../../clases/inmuebles';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InmuebleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InmuebleProvider {

  public inmueble:Inmuebles;

  constructor(public http: HttpClient) {
    console.log('Hello InmuebleProvider Provider');
  }

}
