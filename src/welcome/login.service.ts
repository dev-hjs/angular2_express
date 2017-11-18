import { Injectable } from '@angular/core';
import {CommonServiceService} from '../app/common/common-service.service'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {User} from'../app/user/user';

@Injectable()
export class LoginService extends CommonServiceService{
  private loginUrl:string="api/users/login";

  constructor(protected _http:Http) {
    super(_http);
  }
  
  login(searchUser:User): Observable<User[]> {
    let paramStr:string  = '?user=' + JSON.stringify(searchUser);
    return super.getJson(this.loginUrl+paramStr);
  }
}