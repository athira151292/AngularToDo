
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
        this.completedTasks = this.taskService.getCompletedTask();
        let tasks: Task[] = this.taskService.getTask();
        this.taskService.updateCompletedTasks(tasks);
        this.taskService.getInputValue.subscribe(
            (value: string) => {
                this.completedTasks = this.taskService.getCompletedTask();
            }
        )
        this.taskService.onDelete.subscribe(
            () => {
                this.completedTasks = this.taskService.getCompletedTask();
            }
        )
        this.taskService.onChangeTaskStatus.subscribe(
            () => {
                this.completedTasks = this.taskService.getCompletedTask();
            }
        )
    }
    
}