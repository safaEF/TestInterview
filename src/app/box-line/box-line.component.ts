import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { KeyBoardComponent } from '../key-board/key-board.component';

@Component({
  selector: 'app-box-line',
  standalone: true,
  imports: [
    BoxComponent,
    CommonModule,
    KeyBoardComponent
  ],
  templateUrl: './box-line.component.html',
  styleUrl: './box-line.component.scss'
})
export class BoxLineComponent {
 boxes = [0,1,2,3,4,5,7,8,9]
 selected : number = 0;


 
 constructor(
  private appService: AppService
) { 
}

selectBox(box: number){
  this.appService.selectedBox = box;
  this.selected = box
  console.log(box);
  
}

}