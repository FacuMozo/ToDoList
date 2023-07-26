import { Component, EventEmitter, Input, Output } from '@angular/core';

import { task } from '../task.model';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {
  
  @Input() task!: task;
  

  @Output() trashBtnEvent = new EventEmitter<number>();


  deleteTask(){    
    console.log("tareadeltetask");
    this.trashBtnEvent.emit(this.task.getId());
  }

  checkEvent(value : boolean){
    this.task.setComplete(value);
  }

}