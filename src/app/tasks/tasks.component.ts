import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../services/data-provider.service';
import {RequestService} from '../services/request.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass'],
  providers: []
})
export class TasksComponent implements OnInit {
  tasks = [];
  pages: number;

  constructor(private dataProviderService: DataProviderService,
              private request: RequestService) {
    this.request.get();
  }


  ngOnInit() {
    this.request.dataChange
      .subscribe(
        (data: any) => {
          this.tasks = data.tasks;
          this.pages = data.total_task_count / 3;
        }
      );
  }

// this.dataProviderService.getInf().subscribe(
//   (data: any) => {
//     console.log(data);
//     this.tasks = data.message.tasks;
//     this.pages = + data.message.total_task_count / 3;
//   },
//   (error) => {
//     console.log(error);
//   }
// );
}


