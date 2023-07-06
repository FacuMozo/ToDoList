import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-add-tarea',
  templateUrl: './form-add-tarea.component.html',
  styleUrls: ['./form-add-tarea.component.css']
})
export class FormAddTareaComponent {

  listaTareasAdd: string[] = [];

  newTask: string = '';

  @Output() addTareaEvent = new EventEmitter<string>();

  addNewTask() {
    if (this.newTask != ''){
      this.listaTareasAdd.push(this.newTask);
      this.addTareaEvent.emit(this.newTask);
    }
    
  }

  updateInputText(textInput: string){
    this.newTask = textInput;
  }

}
