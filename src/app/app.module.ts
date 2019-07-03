import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { AllTasksComponent } from './task/all-tasks/all-tasks.component';
import { CompletedTasksComponent } from './task/completed-tasks/completed-tasks.component';
import { ActiveTasksComponent } from './task/active-tasks/active-tasks.component';
import { AddTaskComponent } from './task/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    AllTasksComponent,
    CompletedTasksComponent,
    ActiveTasksComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
