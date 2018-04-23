import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  item;
  constructor(public navCtrl: NavController,private navParams:NavParams) {
    let name = navParams.get('name');
    this.item = name;
  }
  
}
