import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const API_KEY='APIKey123'
    const API_KEY1='ROlEKey'
    return next.handle(request.clone({setHeaders:{API_KEY,API_KEY1}}));
  }
}
