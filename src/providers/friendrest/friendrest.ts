import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friend } from '../../models/friend.model';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FriendrestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendrestProvider {

  private url="https://raw.githubusercontent.com/604234053CS/teamfriend/master/friend.json";

  constructor(public http: HttpClient) {
    console.log('Hello FriendrestProvider Provider');
  }

  getBookList():Observable<any>
  {
    return this.http.get<Friend>(this.url);
  }getFriendList():Observable<any>
  {
    return this.http.get<Friend>(this.url);
  }

}
