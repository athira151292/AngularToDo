
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
    
    onCompleted() {
        this.taskService.onCompletedTask.emit(this.task);
    }
    
}