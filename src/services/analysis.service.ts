import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {ScriptResponse, LocalSystem, ResultFile} from '../model/system';

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

  runScript(script: string): Observable<ScriptResponse> {
    return this.api.post(`${this.url}/groovy`, {script});
  }

  getResultFile(systemId: string, fileName: string): Observable<ResultFile> {
    return this.api.post(`${this.url}/results`, {systemId, fileName});
  }

  openResultFile(systemId: string, fileName: string) {
    return this.api.post(`${this.url}/results/open`, {systemId, fileName});
  }
}
