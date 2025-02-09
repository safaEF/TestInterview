import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Box } from './models/Box';
import { KeyScore } from './models/KeyScore';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 selectedBox : BehaviorSubject<Box> = new BehaviorSubject<any>(null);

  keyboardStream : BehaviorSubject<string> = new BehaviorSubject<string>("");
 
  constructor() { }

  setValueToCurrentBox(value : string){
    this.selectedBox.value.setValue({
      value : value,
      score :  (KeyScore[value as any] as any)
    })
  }
}



