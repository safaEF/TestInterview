import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-key-board',
  standalone: true,
  imports: [],
  templateUrl: './key-board.component.html',
  styleUrl: './key-board.component.scss',
})
export class KeyBoardComponent {
  frontList = [".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<"]
  backList  = [".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<", ".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<", ".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<"]
  otherList = [".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<"]

  constructor(
    private appService: AppService
  ) { }

  // update the keyBoardStream with the new value 
  setValueToStream(value : string){
    this.appService.keyboardStream.set(value)
  }
}

