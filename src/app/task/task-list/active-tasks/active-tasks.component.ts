
import { Component, OnInit } from '@angular/core';

import { Task } from '../../task.model';

import { TaskService } from './../../taskService';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.css']
})
export class ActiveTasksComponent implements OnInit {

  taskList : Task[] = JSON.parse(localStorage.getItem("task"));

  constructor(private taskService: TaskService) {
    localStorage.setItem("task",JSON.stringify(this.taskList));
    this.taskService.getInputValue.subscribe(
      (value: string) => {
        this.taskList.push({name: value,id: 2,completedStatus: false});
        localStorage.setItem("task",JSON.stringify(this.taskList));
      }
    );
  }

  ngOnInit() {
  }

}
