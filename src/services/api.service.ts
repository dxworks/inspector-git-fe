import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '/inspectorgit/api';

  constructor(private httpClient: HttpClient) {
  }

  public get(path: string, options?: any): Observable<any> {
    return this.httpClient.get(this.getFullURL(path), options);
  }

  public post(path: string, body: any, options?: any): Observable<any> {
    return this.httpClient.post(this.getFullURL(path), body, options);
  }

  public put(path: string, body: any, options?: any): Observable<any> {
    return this.httpClient.put(this.getFullURL(path), body, options);
  }

  public delete(path: string, options?: any): Observable<any> {
    return this.httpClient.delete(this.getFullURL(path), options);
  }

  public patch(path: string, body: any, options?: any): Observable<any> {
    return this.httpClient.patch(this.getFullURL(path), body, options);
  }

  public getFullURL(path: string): string {
    if (path.startsWith('/')) {
      return this.apiUrl + path;
    }

    return this.apiUrl + '/' + path;
  }

}
