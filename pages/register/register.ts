import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AgreementPage } from '../agreement/agreement';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
   agree:boolean;
   updateAgree(){
     console.log('Agree new state:'+this.agree);
   }

   navCtrl1(){
    
  }
  navCtrl2(){
    this.navCtrl.push(LoginPage);
  }
  navCtrl3(){
    this.navCtrl.push(AgreementPage);
  }
}
