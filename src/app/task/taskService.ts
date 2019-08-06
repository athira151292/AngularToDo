
import { EventEmitter } from '@angular/core';

import { Task } from './task.model';

export class TaskService {
    getTask() {
        return JSON.parse(localStorage.getItem("task"));
    }
    setTask(task) {
        localStorage.setItem("task",JSON.stringify(task));
    }
    getInputValue = new EventEmitter<string>();
    onCompletedTask = new EventEmitter<Task>();
}