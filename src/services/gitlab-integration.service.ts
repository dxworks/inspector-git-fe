import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {SimpleProjectDTO} from '../model/SimpleProjectDTO';

@Injectable({
  providedIn: 'root'
})
export class GitlabIntegrationService {

  constructor(private api: ApiService) {
  }

  private path = 'gitlab';

  private gitlab = 'gitlab';

  getProjects(): Observable<any> {
    return this.api.get(`${this.gitlab}/projects`);
  }

  deleteProject(path: any) {
    return this.api.delete(`${this.gitlab}/delete`, {params: {path}});
  }

  listProjects(credentials: any) {
    return this.api.put(`${this.gitlab}/listProjects`, credentials);
  }

  importProjects(payload: { projects: any; credentials: any }) {
    console.log(payload);
    return this.api.put(`${this.gitlab}/importProjects`, payload);
  }
}
