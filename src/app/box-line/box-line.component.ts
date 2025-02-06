import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { AppService, Box } from '../app.service';
import { CommonModule } from '@angular/common';
import { skip } from 'rxjs';

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
 boxesIndexs = [0,1,2,3,4,5,6,7,8,9]
  boxes : Box[] = []

 selected! : number;
 totalScore = 0;

 
 constructor(
  private appService: AppService
) { 

  this.boxes = this.boxesIndexs.map((index) => new Box(index))
  this.appService.selectedBox.next(this.boxes[0])
  this.appService.selectedBox
  // .pipe(skip(1))
  .subscribe(box => {
    this.selected = box.index
    console.log(box);
  })

  this.appService.keyboardStream.subscribe(value => {
    if(value == "") return;

    console.log("key : ", value);
    this.appService.setValueToCurrentBox(value)


    //increment box selection
    let nextBox = this.boxes.find(box => box.index == this.selected+1)
    if(nextBox) this.selectBox(nextBox)

      this.totalScore = this.boxes.reduce((total, box) => total + box.score, 0)

  })
}

selectBox(box: Box){
  this.appService.selectedBox.next(box)
}

clearAll (){
  this.boxes.forEach(box => box.clear())
  this.totalScore = 0
  this.appService.selectedBox.next(this.boxes[0])
}

}