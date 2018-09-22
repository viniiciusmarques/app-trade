import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class ConfigsApi{

  constructor() {}

  url(): string {
    // return 'http://localhost:8080/';
    return 'http://localhost:8080/';
  }

  getHeaders() {
    let token = JSON.parse(localStorage.getItem('user')).token;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return httpOptions;
  }

}
