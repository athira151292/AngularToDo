
import { Component } from '@angular/core';

import { TaskService } from './../../taskService';

import { Task } from './../../task.model';

@Component({
    selector: 'app-completed-tasks',
    templateUrl: './completed-tasks.component.html',
    styleUrls: ['./completed-tasks.component.css']
})

export class CompletedTasksComponent {
    completedTasks: Task[] = [];

    constructor(private taskService: TaskService) {
        let tasks: Task[] = this.taskService.getTask();
        this.updateCompletedTasks(tasks);
        this.taskService.onCompletedTask.subscribe(
            (value: Task) => {
                console.log(tasks);
                this.taskService.setTask(tasks);
                this.updateCompletedTasks(tasks);
            }
        )
        this.taskService.onDeleteTask.subscribe(
            (value: Task) => {
              let taskLength = tasks.length;
              for(let i=0; i<taskLength; i++) {
                if(tasks[i].id == value.id) {
                    tasks.splice(i, 1);
                  this.taskService.setTask(tasks);
                }
              }
              this.updateCompletedTasks(tasks);
            }
        )
    }

    updateCompletedTasks(tasks) {
        this.completedTasks = [];
        for(let i=0;i<tasks.length;i++) {
            if(tasks[i].completedStatus === true)
                this.completedTasks.push(tasks[i]);
        }
    }
    
}