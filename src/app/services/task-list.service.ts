import { Injectable, OnInit } from '@angular/core';
import { Task } from '../tasks-list/task.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskListService implements OnInit{

  taskList! : Task[] ;

  // localStorageService : LocalStorageService;

  constructor(private localStorageService : LocalStorageService) { 
    // this.getTaskList();
    this.taskList=[]
    let data =  this.localStorageService.getData("tasks");
    if (data != null){
      let parsedData= JSON.parse(data);
      let taskArray : Task[] = [];
      for (let i = 0; i <parsedData.length ; i++){
        let newTask = new Task(parsedData[i].title, parsedData[i].description,  parsedData[i].complete, parsedData[i]._id);
        taskArray.push( newTask)
      }
      this.taskList = taskArray;
      if( Task.getLastId() == 0){
        Task.setLastId(this.findLastId());
      }
    }
    console.log("TASADAA "+this.taskList)
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    // this.getTaskList();
  }
  
  getTaskList() : Task[]{
    // let data =  this.localStorageService.getData("tasks");
    // if (data != null){
    //   let parsedData= JSON.parse(data);
    //   let taskArray : task[] = [];
    //   for (let i = 0; i <parsedData.length ; i++){
    //     let newTask = new task(parsedData[i].title, parsedData[i].description,  parsedData[i].complete, parsedData[i]._id);
    //     taskArray.push( newTask)
    //   }
    //   this.taskList = taskArray;
    //   if( task.getLastId() == 0){
    //     task.setLastId(this.findLastId());
    //   }
    // }
     return this.taskList;
    
  }

  findLastId(): number{
    let max = -1;
    for (let i = 0 ; i < this.taskList.length; i++){
      if (this.taskList[i].getId() > max){
        max = this.taskList[i].getId();
      }
    }
    return max;
  }

  setTaskList(){
  
    this.localStorageService.saveData("tasks" , JSON.stringify(this.taskList));
    
  }

  addTask(newTask : string){

    this.taskList.unshift(new Task(newTask,newTask, false,-1));
    this.setTaskList();
  }

  deleteTask(deleteTaskId :number){
    const index  = this.taskList.findIndex((task) => task.getId() === deleteTaskId);
    if (index >= 0 && index < this.taskList.length) {
      this.taskList.splice(index, 1);
    }
    this.setTaskList();
    
  }
  
  editTask(editTask: Task){
    const index  = this.getIndexById(editTask.getId());
    if (index >= 0 && index < this.taskList.length) {
      this.taskList[index] = editTask;
    }
    this.setTaskList();
  }

  toggleCompleteTask(editTaskId : number){
    const index  = this.getIndexById(editTaskId);
    if (index >= 0 && index < this.taskList.length) {
      this.taskList[index].setComplete(!this.taskList[index].getComplete());
      this.setTaskList();
    }
  }

  getIndexById( id: number): number{
    return this.taskList.findIndex((task) => task.getId() === id);
  }
 
  getTaskById(id: number): Task | null {
    const index = this.getIndexById(id)
    if (index >= 0 && index < this.taskList.length){
        console.log("TASK BY ID = "+id+ ", "+this.taskList[index])
        return this.taskList[index];
      }
    
    return null;
  }
}
