import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  @Input() public title;
  tasks: Task[] = [
    new Task('Go to gym', 1, true),
    new Task('Buy groceries', 2, false)
  ];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: { [value: string]: SimpleChange }){
    let change: SimpleChange = changes['data']; 
    console.log("yayy"+ this.title);
  }
}
