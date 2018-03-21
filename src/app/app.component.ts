import { Component } from '@angular/core';
import { LocalstorageService } from '../app/services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  obj = new LocalstorageService();
  tolist = [];
  content = '';
  i=0;


  idx:number;
  getI(ww){
    this.idx = ww;
  }
  addData(){
    this.i++;
    this.tolist.push(this.content);
    this.obj.setItem(this.i,this.content);
    this.content = '';
  }
  
}
