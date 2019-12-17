import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Project} from '../model/system';

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
    return this.api.delete(`${this.gitlab}/deleteProject`, {params: {path}});
  }

  listProjects(integrationName: string) {
    return this.api.get(`${this.gitlab}/listProjects`, {params: {integrationName}});
  }

  importProjects(payload: Project[]) {
    return this.api.put(`${this.gitlab}/importProjects`, payload);
  }
}
