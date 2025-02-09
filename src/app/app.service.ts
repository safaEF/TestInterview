import { Injectable, signal } from '@angular/core';
import { Box } from './models/Box';
import { KeyScore } from './models/KeyScore';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  selectedBox = signal<Box | null>(null);
  keyboardStream = signal<string>("");
  
  constructor() { }

  setValueToCurrentBox(value: string) {
    const currentBox = this.selectedBox();
    if (currentBox) {
      currentBox.setValue({
        value: value,
        score: KeyScore[value as any] as any
      });
      this.selectedBox.set(currentBox);
    }
  }
}



