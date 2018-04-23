import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PublishPage } from '../publish/publish';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  navCtrl1(){
    this.navCtrl.push(PublishPage);
  }
  navCtrl2(){
    this.navCtrl.push(PublishPage);
  }
  navCtrl3(){
    this.navCtrl.push(PublishPage);
  }
  navCtrl4(){
    this.navCtrl.push(PublishPage);
  }

}
