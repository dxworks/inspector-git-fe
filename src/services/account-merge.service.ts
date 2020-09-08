import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountMergeService {
  private url = 'accountMerge';

  constructor(private api: ApiService) {
  }

  applyChronosMerges(): Observable<void> {
    return this.api.get(`${this.url}/applyChronosMerges`);
  }
}
