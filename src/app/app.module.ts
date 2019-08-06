import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskItemComponent } from './task/task-list/task-item/task-item.component';
import { ActiveTasksComponent } from './task/task-list/active-tasks/active-tasks.component';
import { CompletedTasksComponent } from './task/task-list/completed-tasks/completed-tasks.component';
import { TaskService } from './task/taskService';

const appRoutes: Routes = [
  { path: '', component: TaskListComponent},
  { path: 'active-tasks', component: ActiveTasksComponent},
  { path: 'completed-tasks', component: CompletedTasksComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskItemComponent,
    ActiveTasksComponent,
    CompletedTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
