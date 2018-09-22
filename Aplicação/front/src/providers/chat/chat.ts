import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigsApi } from '../ConfigsApi';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider extends ConfigsApi {

  constructor(
    public http: HttpClient
  ) {
    super();
  }

  getChats(): Observable<any> {
    return this.http.get(`${this.url()}messages`, this.getHeaders());
  }

  getChat(room): Observable<any> {
    return this.http.get(`${this.url()}messages/${room}`, this.getHeaders());
  }

}
