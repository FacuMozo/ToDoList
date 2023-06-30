import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button/add-button.component';
import { TrashButtonComponent } from './trash-button/trash-button.component';
import { TextInputComponent } from './text-input/text-input.component';
import { CheckBtnComponent } from './check-btn/check-btn.component';
import { LabelComponent } from './label/label.component';



@NgModule({
  declarations: [
    AddButtonComponent,
    TrashButtonComponent,
    TextInputComponent,
    CheckBtnComponent,
    LabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddButtonComponent,
    TrashButtonComponent,
    TextInputComponent,
    CheckBtnComponent,
    LabelComponent
  ]
})
export class SharedModule { }
