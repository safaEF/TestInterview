import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxLineComponent } from './box-line/box-line.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BoxLineComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Test';
}
