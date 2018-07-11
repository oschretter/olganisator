import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList = [] ;
  constructor() { }

  ngOnInit() {
  }

  addTask(newTask: string) {
      this.taskList.push(newTask);
      console.log(this.taskList);
  }
}
