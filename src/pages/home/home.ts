import { Clientes } from './../../clases/clientes';
import { Inmuebles } from './../../clases/Inmuebles';
import { ClienteProvider } from './../../providers/cliente/cliente.provider';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login.provider';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inmueble: Inmuebles;
  clientes: Clientes;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loginProvider: LoginProvider,
              public cliente: ClienteProvider) {
  }

  ionViewDidLoad() {

    console.log(this.cliente.cliente);
    this.loginProvider.listInmuebles(this.cliente.cliente.id).subscribe((result) => {
      this.inmueble = result;
      console.log(this.inmueble);
    });
  }

  exit(){
    this.navCtrl.push(LoginPage);
  }

  verIncidencias(id) {
    this.loginProvider.listIncidencias(id).subscribe((result) => {
      console.log(result);
    })
  }



}
