import { Component, OnInit } from '@angular/core';
import {DataProviderService} from '../services/data-provider.service';
import {TaskModel} from '../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
    providers: [DataProviderService]
})
export class TasksComponent implements OnInit {
  tasks: TaskModel[] = [];

  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit() {
    this.tasks = this.dataProviderService.taskData;
  }

}
