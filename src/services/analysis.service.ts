import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {LocalSystem, ResultFile, ScriptResponse} from '../model/system';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private url = 'analysis';

  private loadedSystemNameSubject = new BehaviorSubject<string>(null);
  private code: string;

  constructor(private api: ApiService) {
    this.getDetails().subscribe();
  }

  cacheScript(code: string) {
    this.code = code;
  }

  getCachedScript(): string {
    return this.code || '';
  }

  loadedSystemName(): Observable<string> {
    return this.loadedSystemNameSubject.asObservable();
  }

  getDetails(): Observable<LocalSystem> {
    return this.api.get(`${this.url}/systemDetails`)
      .pipe(tap(response => this.loadedSystemNameSubject.next((response as LocalSystem).name)));
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
