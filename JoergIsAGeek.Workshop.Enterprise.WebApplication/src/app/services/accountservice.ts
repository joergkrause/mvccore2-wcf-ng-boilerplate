import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { AccountInfo } from '../viewmodels/accountinfo'; 
import { ConfigService } from './configservice';

import {BaseService} from './baseservice';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class AccountService extends BaseService {

  baseUrl: string = ''; 

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.apiURI;
  }

  getUserDetails(): Observable<AccountInfo> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let authToken = localStorage.getItem('auth_token');
      headers.append('Authorization', `Bearer ${authToken}`);
  
    return this.http.get(this.baseUrl + "/account/user",{headers})
      .map(response => response.json() as AccountInfo)
      .catch(this.handleError);
  }  
}
