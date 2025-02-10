import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Box } from '../models/Box';

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

  constructor(){}
}
