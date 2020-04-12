import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {LocalSystem} from '../model/system';

@Injectable({
  providedIn: 'root'
})
export class LocalSystemService {
  private path = 'localSystems';


  constructor(private api: ApiService) {
  }

  list(): Observable<LocalSystem[]> {
    return this.api.get(this.path);
  }

  load(id: string): Observable<any> {
    return this.api.get(`${this.path}/${id}`);
  }

  delete(id: string): Observable<any> {
    return this.api.delete(`${this.path}/${id}`);
  }

  create(localSystem: LocalSystem): Observable<any> {
    return this.api.post(this.path, localSystem);
  }
}
