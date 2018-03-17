import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {escape, stringify} from 'querystring';
import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class RequestService {
  private url = 'https://uxcandy.com/~shapoval/test-task-backend/';
  private devToken = '?developer=Evgeny';
  private createUrl = this.url + 'create';
  private editUrl = this.url + '/edit/';
  taskData = [];
  @Output() dataChange = new EventEmitter<{}>();

  constructor(private http: HttpClient) {
    this.get();
  }

  get(page: any = 1, sort_field: string = 'id', sort_direction: string = 'asc') {
    return this.http.get(this.url + this.devToken, {
      params: {
        'page': '' + page,
        'sort_field': sort_field,
        'sort_direction': sort_direction,
      }
    }).subscribe(
      (data: any) => {
        console.log(data);
        this.dataChange.emit(data.message);
      },
      (data) => {
        console.log(data);
      }
    );
  }

  create(data: any) {
    return this.http.post(this.createUrl + this.devToken, data);
  }

  edit(id: number, data: any) {
    data.token = 'beejee';
    for (let prop in data) {
      prop = this.rfc3986EncodeURIComponent(prop);
      data[prop] = this.rfc3986EncodeURIComponent(data[prop]);
    }
    data.signature = Md5.hashStr(stringify(data));
    console.log(data);
    return this.http.post(this.editUrl + id + this.devToken, data);
  }

  rfc3986EncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, escape);
  }
}
