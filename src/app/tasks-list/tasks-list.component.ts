import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {


  taskList: string[] = ['Tarea 1','Tarea 2', 'Tarea 3', 'Tarea 4'];

  newTasks: string[] = [];

  addTask(newTask : string){
    this.newTasks.push(newTask);
  }
}
