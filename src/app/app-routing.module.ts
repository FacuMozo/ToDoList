import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TaskDetailComponent } from './tasks-list/pages/task-detail/task-detail.component';
import { EditTaskComponent } from './tasks-list/pages/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', redirectTo:'/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksListComponent, pathMatch: 'full' },
  // { path: '', component: TasksListComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: 'tasks/:task-id/edit', component: EditTaskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
