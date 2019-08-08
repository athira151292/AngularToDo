
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
        this.activeTasks = this.taskService.getActiveTasks();
        let tasks: Task[] = this.taskService.getTask();
        this.taskService.updateActiveTasks(tasks);
        this.taskService.getInputValue.subscribe(
            (value: string) => {
                this.activeTasks = this.taskService.getActiveTasks();
            }
        )
        this.taskService.onDelete.subscribe(
            () => {
                this.activeTasks = this.taskService.getActiveTasks();
            }
        )
        this.taskService.onChangeTaskStatus.subscribe(
            () => {
                this.activeTasks = this.taskService.getActiveTasks();
            }
        )
    }
}