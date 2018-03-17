import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../models/task.model';
import {DataProviderService} from '../../services/data-provider.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() task: TaskModel;
  isAdmin: boolean;

  constructor(private dataProviderService: DataProviderService) { }

  ngOnInit() {
      this.isAdmin = this.dataProviderService.isAmin;
      this.dataProviderService.isLogin
          .subscribe(
              (data: boolean) => {
                this.isAdmin = data;
                console.log('sub');
              }
          );
  }
}
