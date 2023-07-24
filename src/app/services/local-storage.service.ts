import { Injectable } from '@angular/core';
import { task } from '../tasks-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveData(key : string, object : string ){
    localStorage.setItem(key, object);
  }

  getData(key: string) : string
  {
    let data = localStorage.getItem(key);
    if (data != null){
      return data;

    }
    return "";
  }

}
