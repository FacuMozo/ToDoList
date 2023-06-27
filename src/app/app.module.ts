import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModuleModule } from './core-module/core-module.module';
import { SharedModule } from './shared/shared.module';
import { TasksListModule } from './tasks-list/tasks-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModuleModule,
    TasksListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
