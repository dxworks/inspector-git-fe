import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptor implements HttpInterceptor {
  spinner = new BehaviorSubject({on: false});

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.next({on: true});
    console.log('hello');
    return next.handle(req).pipe(tap(() => this.spinner.next({on: false})));
  }
}
