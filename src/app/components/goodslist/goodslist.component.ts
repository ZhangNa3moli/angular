import { Component, OnInit, Input ,Optional} from '@angular/core';
import { Router } from '@angular/router';//1.引入 
import { Http,Jsonp , Headers } from '@angular/http';
import "rxjs/Rx"; //引入Rxjs让异步可控更简单




@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  //2.声明
  constructor(public http:Http,public jsonp:Jsonp,@Optional() public router:Router) {
  }
 // @Input() list:Array<any>;
 headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  list:number[] = [1,2,3,4,5];
  ngOnInit() {  
    // this.http.get('http://datainfo.duapp.com/shopdata/getclass.php').subscribe(data=>{
    //      console.log(JSON.parse(data['_body']));
    //      this.list = JSON.parse(data['_body']);
    //   },err=>{
    //     console.log(err);
    //   });  
    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe( data=>{ 
        console.log(data['_body']);
        this.list = data['_body'];
     },err=>{
      console.log(err);
     });
    //data是往后台传的数据，是一个对象，但是不能直接传，因为往后台传的都是字符串，所以需要JSON.stringify()转换一下
    //  this.http.post( 'http://datainfo.duapp.com/shopdata/getGoods.php',JSON.stringify({}), {headers:this.headers}).filter(data=>{
    //      return data.status == 200;
    //  }).map(data=>data.json()).subscribe(data=>{
    //      console.log(data);
    //  },err=>{
    //      console.log(err);
    //  });
    

  }
  //3.js跳转用navigate方法到其他组件
  goDetail(idx){
    this.router.navigate(['/goodsdetail',idx]);
   //[queryParams:{num:100}]
  }
}
