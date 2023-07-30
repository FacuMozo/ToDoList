import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements OnInit {

  constructor() { }

  ngOnInit(): void {
      
  }

  saveData(key : string, object : string ){
    window.localStorage.setItem(key, object);
  }

  getData(key: string) : string
  {
    let data = window.localStorage.getItem(key);
    if (data != null){
      return data;
    }
    return "";
  }

}
