import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { listComponent } from './TDlist/tdList.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
}

