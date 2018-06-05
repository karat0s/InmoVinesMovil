import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  public email = '';
  public contra = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  inicioSesion() {

    if (this.email.length === 0 || this.contra.length === 0) {

      let alert = this.alertCtrl.create({
        title: 'Campos vacíos',
        message: 'Por favor, rellene correctamente todos los campos antes de iniciar sesión',
        buttons: ['OK']
      });

      alert.present();
    }


  }

}
