import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trash-button',
  templateUrl: './trash-button.component.html',
  styleUrls: ['./trash-button.component.css']
})
export class TrashButtonComponent {

  @Output() trashBtnEvent = new EventEmitter<boolean>();


  deleteEvent(){
    console.log("Delete event 1");
    this.trashBtnEvent.emit(true);
  }
}
