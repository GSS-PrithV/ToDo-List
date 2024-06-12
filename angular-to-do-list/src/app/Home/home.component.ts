import { Component, EventEmitter, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  template: `
        <h1>{{title}}</h1>
        <p>Welcome to the Home page</p>
  `,
  styleUrl: '../app.component.css'
})
export class homeComponent {
    @Output() titleEvent = new EventEmitter<string>();
    title = 'home';
    constructor() {
        this.titleEvent.emit(this.title);
    }
}

