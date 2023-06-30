import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-btn',
  templateUrl: './check-btn.component.html',
  styleUrls: ['./check-btn.component.css']
})
export class CheckBtnComponent {

  @Output() checkBtnEvent = new EventEmitter<boolean>();

  

  checkEvent(event : any){
    this.checkBtnEvent.emit(event.target.checked);
  }

}
