
import { EventEmitter } from '@angular/core';

import { Task } from './task.model';

export class TaskService {
    private tasks: Task[] = JSON.parse(localStorage.getItem("task"));
    private completedTasks: Task[];
    private activeTasks: Task[];
    getInputValue = new EventEmitter<string>();
    onDelete = new EventEmitter();
    onChangeTaskStatus = new EventEmitter();
    getTask() {
        return this.tasks;
    }
    getCompletedTask() {
        let tasks = this.tasks;
        this.completedTasks = [];
        for(let i=0;i<tasks.length;i++) {
            if(tasks[i].completedStatus === true)
                this.completedTasks.push(tasks[i]);
        }
        return this.completedTasks;
    }
    getActiveTasks() {
        let tasks = this.tasks;
        this.activeTasks = [];
        for(let i=0;i<tasks.length;i++) {
            if(tasks[i].completedStatus === false)
                this.activeTasks.push(tasks[i]);
        }
        return this.activeTasks;
    }
    setTask(task) {
        localStorage.setItem("task",JSON.stringify(task));
    }
    updateCompletedTasks(tasks) {
        this.completedTasks = [];
        for(let i=0;i<tasks.length;i++) {
            if(tasks[i].completedStatus === true)
                this.completedTasks.push(tasks[i]);
        }
    }
    updateActiveTasks(tasks) {
        this.activeTasks=[];
        for(let i=0;i<tasks.length;i++) {
            if(tasks[i].completedStatus === false)
                this.activeTasks.push(tasks[i]);
        }
    }
    onChangeStatus() {
        this.setTask(this.tasks);
        this.updateCompletedTasks(this.tasks);
        this.updateActiveTasks(this.tasks);
    }
    onDeleteTask(task) {
        let taskLength = this.tasks.length;
        for(let i=0; i<taskLength; i++) {
        if(this.tasks[i].id == task.id) {
            this.tasks.splice(i, 1);
            this.setTask(this.tasks);
        }
        }
        this.updateActiveTasks(this.tasks);
    }
    onTaskAdded(name) {
        let taskId;
        let taskArr = this.tasks;
        let taskLength = taskArr.length;
        if(taskLength != 0) 
            taskId = taskArr[taskLength - 1].id + 1;
        else 
            taskId = 0;
            taskArr.push({name: name,id: taskId,completedStatus: false});
        this.setTask(taskArr);
        this.updateCompletedTasks(taskArr);
        this.updateActiveTasks(taskArr);
    }
}