import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent {
  
  @Input() task: string = '';
  tachado: boolean = false;

  @Output() trashBtnEvent = new EventEmitter<boolean>();


  deleteTask(){    
    console.log("tareadeltetask");
    this.trashBtnEvent.emit(true);
  }

  checkEvent(value : boolean){
    this.tachado = value;
  }


}
