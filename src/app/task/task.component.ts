import { Component } from '@angular/core';

@Component ({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class TaskComponent {

    public value: string;

    constructor() {
    }

    onCreateTask(name) {
        localStorage.setItem("list","{[Title: "+name+",Status: true]}");
        this.value = name;
    }
}