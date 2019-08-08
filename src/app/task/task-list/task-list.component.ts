
import { Component, OnInit } from '@angular/core';

import { Task } from './../task.model';

import { TaskService } from './../taskService';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) {
    if(this.taskService.getTask() != null) 
      this.tasks = this.taskService.getTask();
    else 
      this.tasks = [];
  } 

  ngOnInit() {
  }

}
