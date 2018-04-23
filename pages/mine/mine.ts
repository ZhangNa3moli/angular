import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SetPage } from '../set/set';


@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }
  
  //编辑资料
  navCtrl1(){
    this.navCtrl.push(LoginPage);
  }

  //列表
  itemSelected(item) {
    console.log("Selected Item", item);
  }
  //设置
  navCtrl2(){
    this.navCtrl.push(SetPage);
  }
  // navCtrl3(){
  //   this.navCtrl.push(SetPage);
  // }
}
