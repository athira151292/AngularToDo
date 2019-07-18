import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public taskName : string;
  @Output() public taskEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  addTask(name) {
    this.taskEvent.emit(name.value);
    this.taskName = name.value;
    name.value = "";
  }

}
