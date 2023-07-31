import { Component } from '@angular/core';
import Task from '../../task.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {

  public task! : Task  ;
  private descriptionInput: string="";
  private titleInput: string="";


  constructor (private route: ActivatedRoute, private taskListService : TaskListService, private router : Router ){
  
    
  }
  
  
	ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    

    const taskAux = this.taskListService.getTaskById(id);
    if (taskAux != null){
      this.task = taskAux;
      this.descriptionInput = this.task.getDescription();
      this.titleInput = this.task.getTitle();
    }
    // console.log("ID: "+id+" VIEW component data: "+ this.task);
	}


  navigateHome() {

      this.router.navigateByUrl('/tasks');

  }



  performCopy() {
    var selection = window.getSelection();

      navigator.clipboard.writeText(this.task.getTitle())
        .then(() => console.log('Async writeText successful, "' + this.task.getTitle()+ '" written'))
        .catch(err => console.log('Async writeText failed with error: "' + err + '"'));

  }

  updateDescriptionText(textInput: string){
    this.descriptionInput = textInput;
  }
  updateTitleText(textInput: string){
    this.titleInput = textInput;
  }

  editTask(){
    
    const newTask : Task = new Task(this.titleInput, this.descriptionInput, this.task.getComplete(), this.task.getId());
    this.taskListService.editTask(newTask);
  }

  
}
