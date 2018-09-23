import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ConfigsApi } from '../ConfigsApi';

@Injectable()
export class UserProvider {

  private url:string = this.configs.url();
  private httpOptions;

  constructor(
    public http: HttpClient,
    private fileTransfer: FileTransfer,
    private configs: ConfigsApi
  ) {
    this.httpOptions = this.configs.getHeaders();
  }

  authenticate(data: any): Observable<any> {
    return this.http.post(`${this.url}users/login`, data);
  }

  user(): Observable<any> {
    return this.http.get(`${this.url}users`, this.httpOptions);
  }

  deactive(): Observable<any> {
    return this.http.delete(`${this.url}users`, this.httpOptions);
  }

  register(data: any, image): Promise<any> {
    const targetPath = image;
    const options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: 'multipart/form-data',
      params: data
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    return fileTransfer.upload(targetPath,`${this.url}users/register`, options);
  }

  loginFacebook(token:string): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'access_token': token
      })
    };

    return this.http.post(`${this.url}users/login/facebook/`, null, httpOptions);
  }

}
