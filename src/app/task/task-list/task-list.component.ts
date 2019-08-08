
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
    if(JSON.parse(localStorage.getItem("task")) != null) 
      this.tasks = this.taskService.getTask();
    else 
      this.tasks = [];
    this.taskService.getInputValue.subscribe(
        (value: string) => {
            let taskId;
            let taskArr = this.tasks;
            let taskLength = taskArr.length;
            if(taskLength != 0) 
              taskId = taskArr[taskLength - 1].id + 1;
            else 
              taskId = 0;
              taskArr.push({name: value,id: taskId,completedStatus: false});
           this.taskService.setTask(taskArr);
        }
    );
    this.taskService.onCompletedTask.subscribe(
      (value: Task) => {
        let taskArr = this.tasks;
        let taskLength = taskArr.length;
        for(let i=0; i<taskLength; i++) {
          if(taskArr[i].id == value.id) {
            taskArr[i].completedStatus = value.completedStatus;
          }
        }
        this.taskService.setTask(taskArr);
      }
    )
    this.taskService.onDeleteTask.subscribe(
      (value: Task) => {
        let taskArr = this.tasks;
        let taskLength = taskArr.length;
        for(let i=0; i<taskLength; i++) {
          if(taskArr[i].id == value.id) {
            taskArr.splice(i, 1);
            this.taskService.setTask(taskArr);
          }
        }
      }
    )
  } 

  ngOnInit() {
  }

}
