import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ILogin } from "../login/login";
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //TODO: Remove api url from here and set it apart.
  private mstrUrl = 'http://10.23.3.162:8080/MicroStrategyLibrary/api/auth/login';



  
  constructor(private http: HttpClient) { }

  login(userLogin: ILogin): Observable<any> {
    console.log(`username: ${userLogin.username} -- Password: ${userLogin.password}`);
    const headers = { 'content-type': 'application/json', 'accept': 'application/json' };
    const body = JSON.stringify(userLogin);
    const httpOptions: any = {
      headers: headers,
      observe: 'response',
      responseType: 'text'
    }
    return this.http.post<any>(this.mstrUrl, body, httpOptions)
      .pipe(
        tap( data => console.log('All', 'doLogin method called!') ),
        catchError(this.handleError)
      );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
