import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.scss']
})
export class CheckButtonComponent {

  @Output() checkBtnEvent = new EventEmitter<boolean>();
 

  checkEvent(event : any){
    this.checkBtnEvent.emit(event.target.checked);
  }
}
