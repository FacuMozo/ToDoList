import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-add-tarea',
  templateUrl: './form-add-tarea.component.html',
  styleUrls: ['./form-add-tarea.component.scss']
})
export class FormAddTareaComponent {

  icon="check";

  newTask: string = '';

  @Output() addTareaEvent = new EventEmitter<string>();

  addNewTask() {
    if (this.newTask != ''){
      this.addTareaEvent.emit(this.newTask);
    }
    
  }

  updateInputText(textInput: string){
    this.newTask = textInput;
  }
}
