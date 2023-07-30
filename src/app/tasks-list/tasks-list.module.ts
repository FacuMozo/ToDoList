import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from './tarea/tarea.component';
import { FormAddTareaComponent } from './form-add-tarea/form-add-tarea.component';
import { TasksListComponent } from './tasks-list.component';
import { SharedModule } from '../shared/shared.module';
import { TaskListService } from '../services/task-list.service';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    TareaComponent,
    FormAddTareaComponent,
    TasksListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers:[
    TaskListService
  ],
  exports:[
    TasksListComponent
  ]
})
export class TasksListModule { }
