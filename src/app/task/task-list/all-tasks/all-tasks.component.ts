
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

import { Task } from '../../task.model';

import { TaskService } from './../../taskService';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})

export class AllTasksComponent implements OnInit {

  @Input() public title;
  tasks: Task[] = JSON.parse(localStorage.getItem("task"));

  constructor(private taskService : TaskService) {
    localStorage.setItem("task",JSON.stringify(this.tasks));
    this.taskService.getInputValue.subscribe(
      (value: string) => {
        this.tasks.push({name: value,id: 2,completedStatus: false});
        localStorage.setItem("task",JSON.stringify(this.tasks));
      }
    );
   }

  ngOnInit() {
  }

}
