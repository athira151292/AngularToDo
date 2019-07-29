
import { EventEmitter } from '@angular/core';

import { Task } from './task.model';

export class TaskService {
    tasks: Task[] = [
        new Task('Go to gym', 1, true),
        new Task('Buy groceries', 2, false)
      ];

    getInputValue = new EventEmitter<string>();
}