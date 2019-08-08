
import { Component, Input, OnInit } from '@angular/core';

import { Task } from './../../task.model';

import { TaskService } from './../../taskService';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
    @Input() task: Task;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
    }
    
    onStatusChange() {
        this.taskService.onChangeStatus();
        this.taskService.onChangeTaskStatus.emit();
    }

    onDelete() {
        this.taskService.onDeleteTask(this.task);
        this.taskService.onDelete.emit();
    }
    
}