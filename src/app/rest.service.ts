import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
//import { map } from 'rxjs/operators';
import { Detail, UserJ } from './detail'

//const endpoint = 'http://localhost:3001/';
const endpoint = 'https://us-central1-restnodejs-92880.cloudfunctions.net/RestNodeJsApi';
//const endpoint = 'http://localhost:5000/restnodejs-92880/us-central1/RestNodeJsApi';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<any> {
  //   return this.http.get<UserJ[]>(endpoint + '/users').pipe(
  //     map(users => users.map(userj => new Detail(userj))),
  //     catchError(this.handleError)
  //   );
  // }

  // addUser(user: any): Observable<any> {
  //   return this.http.post(endpoint + '/users', user).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // updateUser(id: string, user: UserJ): Observable<any> {
  //   return this.http.put<UserJ>(endpoint + '/users/' + id, user).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // deleteUser(id: string): Observable<any> {
  //   return this.http.delete<UserJ>(endpoint + '/users/' + id).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(error: HttpErrorResponse): any {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // } 

}
