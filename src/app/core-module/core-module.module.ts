import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { TasksListModule } from '../tasks-list/tasks-list.module';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    NavbarComponent,
    
  ]
})
export class CoreModuleModule { }
