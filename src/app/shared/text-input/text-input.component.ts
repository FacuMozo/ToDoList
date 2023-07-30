import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  
  @Input() disabled: boolean = false;
  @Input() value: string = "";

  @Output() textInputEvent = new EventEmitter<string>();

  updateInputText(textInput: string){
    this.textInputEvent.emit(textInput); 
  }
}
