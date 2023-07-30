import { Component } from '@angular/core';
import Task from '../../task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {

  public task! : Task  ;

  constructor (private route: ActivatedRoute, private taskListService : TaskListService, private router : Router ){
  
    
  }
  
	ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const taskAux = this.taskListService.getTaskById(id);
    if (taskAux != null){
      this.task = taskAux;
    }
    console.log("VIEW component data: "+ this.task);
  
	}


  navigateHome() {

      this.router.navigateByUrl('/tasks');

  }
  navigateEditTask() {

      this.router.navigateByUrl('/tasks/'+this.task.getId()+'/edit');

  }


  performCopy() {
    var selection = window.getSelection();

      navigator.clipboard.writeText(this.task.getTitle())
        .then(() => console.log('Async writeText successful, "' + this.task.getTitle()+ '" written'))
        .catch(err => console.log('Async writeText failed with error: "' + err + '"'));

  }



}
