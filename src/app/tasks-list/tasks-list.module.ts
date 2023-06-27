import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea/tarea.component';
import { FormAddTareaComponent } from './form-add-tarea/form-add-tarea.component';
import { CheckBtnLabelComponent } from './check-btn-label/check-btn-label.component';
import { TasksListComponent } from './tasks-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TareaComponent,
    FormAddTareaComponent,
    CheckBtnLabelComponent,
    TasksListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    TasksListComponent
  ]
})
export class TasksListModule { }
