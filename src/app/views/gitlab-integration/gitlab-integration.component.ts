import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Integration} from '../../../model/integration';
import {IntegrationService} from '../../../services/integration.service';

@Component({
  selector: 'ig-gitlab-integration',
  templateUrl: './gitlab-integration.component.html',
  styleUrls: ['./gitlab-integration.component.scss']
})
export class GitlabIntegrationComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('MRI', [Validators.required]),
    token: new FormControl('', [Validators.required]),
    url: new FormControl('https://gitlab.dialogdata.de', [Validators.required])
  });

  availableIntegrations: Integration[];
  integrationTableColumns = ['name', 'username', 'url', 'actions'];

  constructor(private integrationService: IntegrationService) {
  }


  ngOnInit(): void {
    this.getIntegrations();
  }

  getIntegrations() {
    this.integrationService.getIntegrations('gitlab').subscribe(integrations => this.availableIntegrations = integrations);
  }

  create() {
    const integration: Integration = {
      name: this.form.get('name').value,
      platform: 'gitlab',
      username: this.form.get('username').value,
      url: this.form.get('url').value,
      password: this.form.get('token').value
    };
    this.integrationService.createIntegration(integration).subscribe(() => this.getIntegrations());
  }

  delete(integration: Integration) {
    this.integrationService.deleteIntegration(integration.platform, integration.name).subscribe(() => this.getIntegrations());
  }
}
