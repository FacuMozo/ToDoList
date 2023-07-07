import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {

  taskList: string[] = ['Tarea 1','Tarea 2', 'Tarea 3', 'Tarea 4'];

  addTask(newTask : string){
    this.taskList.unshift(newTask);
  }

  deleteTask(deleteTask :any){
    console.log("indice "+ deleteTask)
    if (deleteTask >= 0 && deleteTask < this.taskList.length) {
      this.taskList.splice(deleteTask, 1);
    }

  }
  
}
 
