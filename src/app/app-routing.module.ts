import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TaskDetailComponent } from './tasks-list/pages/task-detail/task-detail.component';
import { EditTaskComponent } from './tasks-list/pages/edit-task/edit-task.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { loggedGuard } from './guards/logged.guard';
import { TaskListComponent } from './tasks-list/pages/task-list/task-list.component';
import { SettingsComponent } from './tasks-list/pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'tasks', 
  //   loadChildren: () => import('./tasks-list/tasks-list.module').then(m => m.TasksListModule),
  //   canActivate: [loggedGuard]  
  // },
  { path: 'tasks', component: TasksListComponent, canActivate: [loggedGuard],children:[
    
    { path: '', component: TaskListComponent },
    { path: 'settings', component: SettingsComponent },
    { path: ':id', component: TaskDetailComponent },
    { path: ':id/edit', component: EditTaskComponent },
  ] },
  
  { path: '**', component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
