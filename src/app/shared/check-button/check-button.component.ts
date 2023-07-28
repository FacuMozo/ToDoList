import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-button',
  templateUrl: './check-button.component.html',
  styleUrls: ['./check-button.component.scss']
})
export class CheckButtonComponent {

  @Output() checkBtnEvent = new EventEmitter<boolean>();
 
  @Input() checked: boolean = false;

  checkEvent(event : any){
    this.checkBtnEvent.emit(event.target.checked);
  }
}
