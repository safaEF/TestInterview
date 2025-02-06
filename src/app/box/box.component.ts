import { Component, Input } from '@angular/core';
import { AppService, Box } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent {
  
@Input() box! : Box;

  constructor(private appService : AppService){
    console.log(this.box);
  }
}
