import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  constructor(public navCtrl: NavController,public menuCtrl:MenuController) {
    for (let i = 0; i < 3; i++) {
      this.items.push( this.items.length );
    }
  }
 //滑板
  closeMenu(){
    this.menuCtrl.close();
  }
//轮播
  @ViewChild(Slides) slides:Slides;
  
  goToSlide(){
    this.slides.slideTo(2,500);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  //分组按钮
  search:string="infor";
  //信息列表
  itemSelected(item) {
    console.log("Selected Item", item);
  }
  //无限滚动
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  
 
}
