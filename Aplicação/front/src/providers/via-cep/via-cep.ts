import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ViaCepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ViaCepProvider {

  private defaultUrl: string = 'https://viacep.com.br/ws/';

  constructor(public http: HttpClient) {}

  getAdress(cep:number): Observable<any> {
    return this.http.get(`${this.defaultUrl}/${cep}/json`);
  }

}
