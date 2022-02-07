import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(
    private ngxLoader: NgxUiLoaderService
  ) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = sessionStorage.getItem("token");
    if (token) {
        const authReq = httpRequest.clone({
            headers: httpRequest.headers.set('authorization',token)
        });
        httpRequest = authReq;
        // this.ngxLoader.start();
    }
    return next.handle(httpRequest).pipe(
      tap(
          event => this.handleResponse(httpRequest, event),
          error => this.handleError(httpRequest, error)
      )
    );
  }

  handleResponse(httpRequest: HttpRequest<any>, event:any) {
      // this.ngxLoader.stop();
      //console.log('Handling response for ', req.url, event);
      if (event instanceof HttpResponse) {
          // console.log('Request for ', req.url,
          //      ' Response Status ', event.status,
          //      ' With body ', event.body);
      }
  }

  handleError(httpRequest: HttpRequest<any>, error:any) {
    // this.ngxLoader.stop();
    if (error.status == 400 || error.status == 401 || error.status == 404|| error.status == 500){
        sessionStorage.clear();
        setTimeout(() => {
          //window.location.href =environment.redirect_link;
        }, 1000);
    }
  }

}
