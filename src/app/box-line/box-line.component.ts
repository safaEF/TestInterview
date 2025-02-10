import { Component, effect } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { skip } from 'rxjs';
import { Box } from '../models/Box';

@Component({
  selector: 'app-box-line',
  standalone: true,
  imports: [
    BoxComponent,
    CommonModule
  ],
  templateUrl: './box-line.component.html',
  styleUrl: './box-line.component.scss'
})
export class BoxLineComponent {
  boxesIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  boxes: Box[] = [];
  selected!: number;
  totalScore = 0;

  constructor(private appService: AppService) {
    this.boxes = this.boxesIndexs.map((index) => new Box(index));
    this.appService.selectedBox.set(this.boxes[0]);

    effect(() => {
      const box = this.appService.selectedBox();
      if (box) {
        this.selected = box.index;
        console.log(box);
      }
    }, { allowSignalWrites: true });

    // Effect to handle keyboard input and update the selected box 
    effect(() => {
      const value = this.appService.keyboardStream();
      if (value === "") return;

      console.log("key: ", value);
      this.appService.setValueToCurrentBox(value);

      // Increment box selection
      let nextBox = this.boxes.find(box => box.index === this.selected + 1);
      if (nextBox) this.selectBox(nextBox);

      this.totalScore = this.boxes.reduce((total, box) => total + box.score, 0);
      
      // Clear the keyboard stream after processing
      this.appService.keyboardStream.set("");
    }, { allowSignalWrites: true });
  }

  // update the selectedBox in the service
  selectBox(box: Box) {
    this.appService.selectedBox.set(box);
  }

  clearAll() {
    this.boxes.forEach(box => box.clear());
    this.totalScore = 0;
    this.appService.selectedBox.set(this.boxes[0]);
  }
}