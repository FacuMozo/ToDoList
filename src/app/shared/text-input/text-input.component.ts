import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {

  @Output() textInputEvent = new EventEmitter<string>();

  updateInputText(textInput: string){
    this.textInputEvent.emit(textInput); 
  }
}
