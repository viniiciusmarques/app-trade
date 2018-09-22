import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ConfigsApi } from '../ConfigsApi';

@Injectable()
export class UserProvider {

  private url:string = this.configs.url();

  constructor(
    public http: HttpClient,
    private fileTransfer: FileTransfer,
    private configs: ConfigsApi
  ) {}

  authenticate(data: any): Observable<any> {
    return this.http.post(`${this.url}users/login`, data);
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
