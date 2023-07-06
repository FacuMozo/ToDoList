import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button/add-button.component';
import { TextInputComponent } from './text-input/text-input.component';
import { IconButtonComponent } from './icon-button/icon-button.component';



@NgModule({
  declarations: [
    AddButtonComponent,
    TextInputComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IconButtonComponent,
    AddButtonComponent,
    TextInputComponent
  ]
})
export class SharedModule { }
