import { Injectable } from '@angular/core';
import { User } from './objects/user';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    register(user: User) {
      return this.http.post(Constants.BASE_URL + `/users/register`, user);
    }

}
