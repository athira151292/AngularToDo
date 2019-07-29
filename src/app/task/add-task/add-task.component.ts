
import { Component, OnInit } from '@angular/core';

import { TaskService } from './../taskService';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})

export class AddTaskComponent implements OnInit {

  public taskName : string;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onAddTask(inputValue) {
    var value = inputValue.value;
    this.taskService.getInputValue.emit(value);
    inputValue.value = "";
  }

}
