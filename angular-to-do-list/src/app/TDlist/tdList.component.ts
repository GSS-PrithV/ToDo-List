import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  template: `
        <section>
            <label for="taskInput">
                New Task:
                <input id="taskInput" type="text" [(ngModel)]="newTask" />
            </label>
            <button (click)="addTask()">Add Task</button>
            <h1>Todo List</h1>
            <ul>
                <li *ngFor="let task of tasks">{{task}}</li>
            </ul>
        </section>
  `,
  styleUrl: '../app.component.css'
})
export class listComponent {
    newTask = '';
    tasks: string[] = [];
    addTask(){
        this.tasks.push(this.newTask);
    }
}

