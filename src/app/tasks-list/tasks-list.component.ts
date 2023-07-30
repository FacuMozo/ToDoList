import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit{

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
 
