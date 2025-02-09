import { KeyButton } from "./KeyBoard";

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