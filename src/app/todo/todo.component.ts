import { Component } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  tasks: Task[] = [];
  completedTask: Task[] = [];
  taskDescription: string = '';
  currentId: number = 0;

  public addTask(): void {
    this.tasks.push(new Task(this.currentId, this.taskDescription, false));
    this.currentId++;
    this.taskDescription = '';
  }

  public editTask(index: number): void {
    this.tasks[index].description = prompt('Edit Task', this.tasks[index].description);
  }

  public deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  public completeTask(index: number): void {
    this.tasks[index].completed = true;
    this.completedTask.push(this.tasks.splice(index, 1)[0]);
  }
}
