import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {

  @Input() text: string = '';
  @Input() tachadoBoolan: boolean = false;
  @Input() pointerCursor: boolean = false;

}
