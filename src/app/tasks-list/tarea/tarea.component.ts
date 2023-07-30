import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../task.model';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {
  
  @Input() task!: Task;
  

  @Output() trashBtnEvent = new EventEmitter<number>();

  @Output() checkBtnEvent = new EventEmitter<number>();


  deleteTask(){    
    this.trashBtnEvent.emit(this.task.getId());
  }
  
  checkEvent(value : boolean){
    // this.task.setComplete(value);
    this.checkBtnEvent.emit(this.task.getId());
  }

  share() {
    if (!("share" in navigator)) {
      alert('Web Share API not supported.');
      return;
    }
  
    navigator.share({
        title: 'Tarea: '+this.task.getTitle(),
        text: this.task.getTitle(),
        url: 'https://todolist-manosalaobra.vercel.app/'
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing:', error));
  }


  performCopy() {
    var selection = window.getSelection();

      navigator.clipboard.writeText(this.task.getTitle())
        .then(() => console.log('Async writeText successful, "' + this.task.getTitle()+ '" written'))
        .catch(err => console.log('Async writeText failed with error: "' + err + '"'));

  }

  
}