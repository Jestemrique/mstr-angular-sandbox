import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  public get isLoggedIn() : boolean {
    let authToken = localStorage.getItem('session_token');
    return authToken !== null ? true : false;
  }
  

}
