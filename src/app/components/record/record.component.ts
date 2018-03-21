import { Component,Optional ,OnInit ,Input , Output,EventEmitter, } from '@angular/core';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor( ) {

  }

  @Input( ) tolist:Array<any>;
  @Output() getIndex=new EventEmitter();
	

  ngOnInit() {
  }

  comlist = [];
  content = '';

  delData(i){
  	this.tolist.splice(i,1);
  }
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);
  }
  delData2(i){
  	this.comlist.splice(i,1);
  }
  change2(i){
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i,1);
  }

  fn(i){
    //将下标抛出
    this.getIndex.emit(i);
  }

}
