import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, Observable, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.usersUrl;
  }

  getAllUsers() {
    return this.httpClient.get<Array<User>>(this.url).pipe(
      delay(3000),
      retry(3),
      catchError(this._handleError<User[]>('getAllUsers'))
    );
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
}