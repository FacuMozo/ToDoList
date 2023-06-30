import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {


  taskList: string[] = ['Tarea 1','Tarea 2', 'Tarea 3', 'Tarea 4'];

  addTask(newTask : string){
    this.taskList.unshift(newTask);
  }

  deleteTask(deleteTask :any){
    console.log("delete"+ deleteTask.value)
    const index = this.taskList.indexOf(deleteTask, 0);
    if (index > -1) {
      this.taskList.splice(index, 1);
    }
  }
}
