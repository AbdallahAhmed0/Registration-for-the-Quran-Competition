import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://www.ahbabkhatamelmorsalen.com',
      'Access-Control-Allow-Methods': 'POST' // Add other methods as needed
    });

    const modifiedRequest = request.clone({ headers });
    return next.handle(modifiedRequest);
  }
}
