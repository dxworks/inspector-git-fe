import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Integration} from '../model/integration';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {
  private path = 'integration';


  constructor(private api: ApiService) {
  }

  createIntegration(integration: Integration) {
    return this.api.post(`${this.path}/create`, integration);
  }

  deleteIntegration(platform: string, name: string) {
    return this.api.delete(`${this.path}/deleteIntegration`, {params: {platform, name}});
  }

  getIntegrations(platform?: string) {
    platform = platform || '';
    return this.api.get(`${this.path}/${platform}`);
  }
}
