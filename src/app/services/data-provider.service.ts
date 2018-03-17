import {EventEmitter, Injectable, Output} from '@angular/core';
import {TaskModel} from '../models/task.model';
import {RequestService} from './request.service';

@Injectable()
export class DataProviderService {
  isLogin = new EventEmitter<boolean>();
  isAmin = false;
  constructor(private request: RequestService) {
    this.getInf();
  }
  getInf() {

  }



}
