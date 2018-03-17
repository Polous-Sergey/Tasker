import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../models/task.model';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() task: TaskModel;
  disabled = true;

  edit() {
    this.disabled = false;
  }

  changeStatus() {
    this.task.status = !this.task.status;
  }

  save() {
    this.request.edit(this.task.id, {
      text: this.task.text,
      status: this.task.status
    }).subscribe(
      (data) => {
        console.log(data, 'success');
      },
      (error) => {
        console.log(error, 'error');
      }
    );
    this.disabled = true;
  }

  constructor(private request: RequestService) {
  }

  ngOnInit() {
  }

}
