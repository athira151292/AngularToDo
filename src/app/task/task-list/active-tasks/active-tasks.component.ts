
import { Component } from '@angular/core';

import { TaskService } from './../../taskService';

import { Task } from './../../task.model';

@Component({
    selector: 'app-active-tasks',
    templateUrl: './active-tasks.component.html',
    styleUrls: ['./active-tasks.component.css']
})

export class ActiveTasksComponent {

    activeTasks: Task[] = [];

    constructor(private taskService: TaskService) {
        let tasks: Task[] = this.taskService.getTask();
        this.updateActiveTasks(tasks);
        this.taskService.onCompletedTask.subscribe(
            (value: Task) => {
                console.log(tasks);
                this.taskService.setTask(tasks);
                this.updateActiveTasks(tasks);
            }
        )
    }

    updateActiveTasks(tasks) {
        this.activeTasks=[];
        for(let i=0;i<tasks.length;i++) {
            if(tasks[i].completedStatus === false)
                this.activeTasks.push(tasks[i]);
        }
    }

}