import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RequestService {
  url = 'https://uxcandy.com/~shapoval/test-task-backend/';
  createUrl = this.url + 'create';

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(this.url + '?developer=Evgeny');
  }

  create(data: any) {
    return this.http.post(this.createUrl + '?developer=Evgeny', data
    );
  }
}
