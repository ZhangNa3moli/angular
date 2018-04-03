import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import "rxjs/Rx"; //引入Rxjs让异步可控更简单
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public http:Http,private alertCtrl: AlertController) {
    
  } 
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  presentAlert1() {
    let alert = this.alertCtrl.create({
      title: '用户名错误',
      subTitle: 'data为0用户不存在',
      buttons: ['ok']
    });
    alert.present();
  }
  presentAlert2() {
    let alert = this.alertCtrl.create({
      title: '密码错误',
      subTitle: 'data为2用户名与密码不符',
      buttons: ['ok']
    });
    alert.present();
  }

    btn(){
       this.http.post( 'http://datainfo.duapp.com/shopdata/userinfo.php', {status:'login',userID:'account',password:'userpsd'},{headers:this.headers}).subscribe(data=>{
         console.log(data);
         if(data['_body']==0){
          this.presentAlert1();
         }
         if(data['_body']==2){
          this.presentAlert2();
         }
         else{
           //跳转首页
         }
        },err=>{
            console.log(err);
     });
   }
        
}
