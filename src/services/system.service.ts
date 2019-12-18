import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {System} from '../model/system';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  private path = 'system';


  constructor(private api: ApiService) {
  }

  getSystems() {
    return this.api.get(this.path);
  }

  create(system: System) {
    return this.api.post(`${this.path}/create`, system);
  }

  delete(systemId: string) {
    return this.api.delete(this.path, {params: {systemId}});
  }

  analyze(systemId: string) {
    return this.api.get(`${this.path}/analyze`, {params: {systemId}});
  }
}
