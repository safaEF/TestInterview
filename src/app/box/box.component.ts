import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
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
  
@Input() index: number = 0;
}
