import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KeyButton } from './key-board/KeyBoard';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 selectedBox : BehaviorSubject<Box> = new BehaviorSubject<any>(null);

  keyboardStream : BehaviorSubject<string> = new BehaviorSubject<string>("");
 
  constructor() { }
}



export class Box {
  index : number;
  value : string;
  score : number;

  constructor(index: number){
    this.index = index
    this.value = "";
    this.score = 0
  }

  setValue(key : KeyButton){
    this.value = key.value
    this.score = key.score
  }

  clear(){
    this.value = "";
    this.score = 0
  }
}