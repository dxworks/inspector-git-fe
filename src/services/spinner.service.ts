import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  get spinner(): Observable<boolean> {
    return this._spinner.asObservable();
  }

  private _spinner = new BehaviorSubject(false);

  setShow(state: boolean) {
    this._spinner.next(state);
  }

  constructor() {
  }
}
