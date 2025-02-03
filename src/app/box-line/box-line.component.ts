import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-box-line',
  standalone: true,
  imports: [
    BoxComponent
  ],
  templateUrl: './box-line.component.html',
  styleUrl: './box-line.component.scss'
})
export class BoxLineComponent {
 boxes = [0,1,2,3,4,5,7,8,9]
}
