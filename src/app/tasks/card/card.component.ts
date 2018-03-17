import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() task: TaskModel;

  constructor() { }

  ngOnInit() {
  }

}
