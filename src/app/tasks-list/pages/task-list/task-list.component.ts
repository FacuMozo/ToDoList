import { Component } from '@angular/core';
import { TaskListService } from 'src/app/services/task-list.service';
import Task from '../../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  
  taskList!: Task[];
  taskListService : TaskListService;

  constructor(taskListService : TaskListService ){
    this.taskListService = taskListService;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.taskList = this.taskListService.getTaskList();
  }
  
  addTask(newTask : string){
    this.taskListService.addTask(newTask);
    this.taskList = this.taskListService.getTaskList();   
  }
  
  deleteTask(deleteTaskId :number){
    this.taskListService.deleteTask(deleteTaskId);
    this.taskList = this.taskListService.getTaskList();
  }

  checkTask(checkTaskId :number){
    this.taskListService.toggleCompleteTask(checkTaskId);
  }
  

}
