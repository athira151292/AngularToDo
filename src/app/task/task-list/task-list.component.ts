import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() public title: string;
  public showTab: string = "tab1";

  constructor() {
  }

  ngOnInit() {
  }

  changeTab(tab) {
      switch(tab) {
          case "tab1": {
              this.showTab = "tab1";
              break;
          }
          case "tab2": {
              this.showTab = "tab2";
              break;
          }
          case "tab3": {
              this.showTab = "tab3";
              break;
          }
      }
  }

}
