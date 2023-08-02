import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.accountUrl;
  }
  
  login(username:string, password:string) {
    return this.httpClient.post<any>(`${this.url}`, {username, password}).pipe(
      map((response: any) => {
        if(response && response.token) {
          sessionStorage.setItem('bfl-token', response.token);
        }
        return response;
      }),
      retry(3),
      catchError(this._handleError<any>('login'))
    )
  }

  private _handleError<T>(operation = "operation", result?: T) {
    return (err: HttpErrorResponse): Observable<T> => {
      console.log(`${operation} failed: ${err.message}`);
      switch (err.status) {
        case 403:
          return throwError(() => err.error.message);
        case 500:
          return throwError(() => err.statusText);
        default:
          return throwError(() => "Connection Error, please try again later...");
      }
    }
  }

  getToken() {
    return sessionStorage.getItem('bfl-token');
  }

  logout() {
    sessionStorage.removeItem('bfl-token');
  }
}
