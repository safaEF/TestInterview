import { Component } from '@angular/core';

@Component({
  selector: 'app-key-board',
  standalone: true,
  imports: [],
  templateUrl: './key-board.component.html',
  styleUrl: './key-board.component.scss'
})
export class KeyBoardComponent {
  frontList = [".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<"]
  backList  = [".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<", ".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<", ".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<"]
  otherList = [".-0", ".-<", ".1", ".2", ".3", ".4", ".--o", ".--<"]

  constructor() { }
}


export enum KeyButton {
  '.-0' = 0.7,
  '.-<' = 0.5,
  '.1' = 2.5,
  '.2' = 0.4,
  '.3' = 1.5,
  '.4' = 0.3,
  '.--o' = 0.8,
  '.--<' = 1.2
}