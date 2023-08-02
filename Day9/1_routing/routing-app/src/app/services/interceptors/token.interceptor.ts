import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticatorService } from '../authenticator.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticatorService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log("Interceptor: ", request.url);
    if (new RegExp('\/api\/').test(request.url)) {
      let token = this.authService.getToken();
      const authReq = request.clone({
        setHeaders: {
          'x-access-token': token ? token: ''
        }
      });
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
  }
}
