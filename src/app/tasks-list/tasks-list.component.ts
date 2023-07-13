import { Component } from '@angular/core';
import { task } from './task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {

  taskList: task[] = [
                        new task( "Tarea 0", "desc tarea 0", false, new Date(), new Date()),
                        new task("Tarea 1", "desc tarea 1", false, new Date(), new Date()),
                        new task( "Tarea 2", "desc tarea 2", false, new Date(), new Date()),
                        new task( "Tarea 3", "desc tarea 3", false, new Date(), new Date()),
                      ];


  addTask(newTask : string){
    console.log("ADD new stask" + newTask);
    
    this.taskList.unshift(new task(newTask, newTask, false,new Date, new Date));
  }

  deleteTask(deleteTaskId :any){
    const index  = this.taskList.findIndex((task) => task.getId() === deleteTaskId);
    
    if (index >= 0 && index < this.taskList.length) {
      this.taskList.splice(index, 1);
    }

  }
  
}
 
