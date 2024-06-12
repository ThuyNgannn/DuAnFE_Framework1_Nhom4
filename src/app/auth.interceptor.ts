import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Lấy token từ localStorage
    const token = localStorage.getItem('token');

    // Kiểm tra xem token có tồn tại không
    if (token) {
      // Clone request và thêm token vào tiêu đề "x-auth-token"
      request = request.clone({
        setHeaders: {
          "x-auth-token": `${token}`
        }
      });
    }

    // Chuyển tiếp request tới next handler trong chuỗi interceptor
    return next.handle(request);
  }
}
