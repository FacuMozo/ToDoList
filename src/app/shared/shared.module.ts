import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { LabelComponent } from './label/label.component';
import { CheckButtonComponent } from './check-button/check-button.component';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    TextInputComponent,
    IconButtonComponent,
    LabelComponent,
    CheckButtonComponent,
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IconButtonComponent,
    TextInputComponent,
    LabelComponent,
    CheckButtonComponent
  ]
})
export class SharedModule { }
