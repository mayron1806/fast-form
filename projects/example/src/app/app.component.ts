import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FastFormModule } from '../../../fast-form/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FastFormModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'example';
}
