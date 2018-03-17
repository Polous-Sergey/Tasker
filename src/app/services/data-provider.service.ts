import {EventEmitter, Injectable, Output} from '@angular/core';
import {TaskModel} from '../models/task.model';
import {RequestService} from './request.service';

@Injectable()
export class DataProviderService {

  constructor(private request: RequestService) {
    this.getInf();
  }
  getInf() {

  }



}
