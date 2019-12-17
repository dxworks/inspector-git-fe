import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IntegrationService} from '../../../../services/integration.service';
import {Integration} from '../../../../model/integration';
import {GitlabIntegrationService} from '../../../../services/gitlab-integration.service';
import {combineLatest, of} from 'rxjs';
import {Project, System} from '../../../../model/system';
import {mergeMap} from 'rxjs/operators';
import {MatHorizontalStepper} from '@angular/material';
import {SystemService} from '../../../../services/system.service';

@Component({
  selector: 'ig-new-system',
  templateUrl: './new-system.component.html',
  styleUrls: ['./new-system.component.scss']
})
export class NewSystemComponent implements OnInit {
  @Output()
  done = new EventEmitter();

  constructor(private integrationService: IntegrationService,
              private gitlabIntegrationService: GitlabIntegrationService,
              private systemService: SystemService) {
  }

  integrationsTableColumns = ['name', 'platform', 'username', 'url', 'selected'];
  projectsTableColumns = ['imported', 'name', 'integrationName', 'webUrl', 'selected'];

  systemName = '';
  systemId = '';
  availableIntegrations: Integration[] = [];
  selectedIntegrations: Integration[] = [];
  availableProjects: Project[] = [];
  selectedProjects: Project[] = [];

  private _gitlab = 'gitlab';

  ngOnInit() {
    this.getIntegrations();
  }

  private getIntegrations() {
    this.integrationService.getIntegrations().subscribe(integrations => this.availableIntegrations = integrations);
  }

  systemMetadataIsSet() {
    return this.systemName.length > 0 && this.systemId.length > 0;
  }

  integrationSelected(row: any) {
    return this.selectedIntegrations.includes(row);
  }

  selectIntegration(checked: boolean, integration: Integration) {
    if (checked) {
      this.selectedIntegrations.push(integration);
    } else {
      this.selectedIntegrations.splice(this.selectedIntegrations.indexOf(integration), 1);
    }
  }

  reset(stepper: MatHorizontalStepper) {
    this.selectedIntegrations = [];
    this.selectedProjects = [];
    this.systemId = '';
    this.systemName = '';
    stepper.reset();
  }

  getProjects() {
    combineLatest(this.selectedIntegrations.map(integration => {
      if (integration.platform === this._gitlab) {
        return this.gitlabIntegrationService.listProjects(integration.name);
      }
      return of();
    })).pipe(mergeMap(data => data)).subscribe(projects => {
      console.log(projects);
      return this.availableProjects = projects;
    });
  }

  onDone(stepper: MatHorizontalStepper) {
    this.reset(stepper);
    this.done.emit();
  }

  projectSelected(project: Project) {
    return this.selectedProjects.includes(project);
  }

  selectProject(checked: boolean, project: Project) {
    if (checked) {
      this.selectedProjects.push(project);
    } else {
      this.selectedProjects.splice(this.selectedProjects.indexOf(project), 1);
    }
  }

  create(stepper: MatHorizontalStepper) {
    const system: System = {
      name: this.systemName,
      systemId: this.systemId,
      projects: this.selectedProjects
    };
    this.systemService.create(system).subscribe(() => stepper.next());
  }
}
