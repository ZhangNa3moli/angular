import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }
  tolist:any;

  setItem(a,value){
    localStorage.setItem(a,JSON.stringify(value));
    console.log("set");
  }
  getItem(a){
    this.tolist = localStorage.getItem(a);
    console.log("bb");
    return this.tolist;
    
  }
}
