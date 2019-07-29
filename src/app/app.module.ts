import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { AllTasksComponent } from './task/task-list/all-tasks/all-tasks.component';
import { CompletedTasksComponent } from './task/task-list/completed-tasks/completed-tasks.component';
import { ActiveTasksComponent } from './task/task-list/active-tasks/active-tasks.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskService } from './task/taskService';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    AllTasksComponent,
    CompletedTasksComponent,
    ActiveTasksComponent,
    AddTaskComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
