import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button/add-button.component';
import { TrashButtonComponent } from './trash-button/trash-button.component';
import { TextInputComponent } from './text-input/text-input.component';



@NgModule({
  declarations: [
    AddButtonComponent,
    TrashButtonComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddButtonComponent,
    TrashButtonComponent,
    TextInputComponent
  ]
})
export class SharedModule { }
