
import { EventEmitter } from '@angular/core';

import { Task } from './task.model';

export class TaskService {
    getInputValue = new EventEmitter<string>();
    getTask() {
        return JSON.parse(localStorage.getItem("task"));
    }
    setTask(task) {
        localStorage.setItem("task",JSON.stringify(task));
    }
    
}