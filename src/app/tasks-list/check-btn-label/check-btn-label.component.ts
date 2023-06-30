import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-btn-label',
  templateUrl: './check-btn-label.component.html',
  styleUrls: ['./check-btn-label.component.css']
})
export class CheckBtnLabelComponent {

  @Input() task: string = '';


}
