import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';

  tolist = [];
  content = '';

  idx:number;
  getI(ww){
    this.idx = ww;
  }
  addData(){
    this.tolist.push(this.content);
    this.content = '';
  }
  
}
