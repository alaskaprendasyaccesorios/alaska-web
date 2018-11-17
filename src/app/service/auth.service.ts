import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'POST') {
        console.log("enviando")
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });
      return next.handle(request);
    }    
    return next.handle(request);
  }
}
