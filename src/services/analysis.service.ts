import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {LocalSystem} from '../model/system';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private url = 'analysis';

  constructor(private api: ApiService) {
  }

  getDetails(): Observable<LocalSystem> {
    return this.api.get(`${this.url}/systemDetails`);
  }
}
