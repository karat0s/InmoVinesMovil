import { ClienteProvider } from './../../providers/cliente/cliente.provider';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login.provider';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email:'';
  public contra:'';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController, 
              public login: LoginProvider, 
              public toast: ToastController,
              public cliente: ClienteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  inicioSesion() {

    this.login.login(this.email, this.contra).subscribe((result) => {
      this.cliente.cliente = result;
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      console.log(err);
      }
    );

  }


}
