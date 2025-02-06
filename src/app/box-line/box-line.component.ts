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

 selected : number = 0;


 
 constructor(
  private appService: AppService
) { 

  this.boxes = this.boxesIndexs.map((index) => new Box(index))

  this.appService.selectedBox.pipe(
    skip(1)
  ).subscribe(box => {
    this.selected = box.index
    console.log(box);
  })
}

selectBox(box: Box){
  this.appService.selectedBox.next(box)
  
}

}