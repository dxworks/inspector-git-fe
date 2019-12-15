import {Component, OnInit} from '@angular/core';
import {GitlabIntegrationService} from '../../../services/gitlab-integration.service';
import {SimpleProjectDTO} from '../../../model/SimpleProjectDTO';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gitlab-integration',
  templateUrl: './gitlab-integration.component.html',
  styleUrls: ['./gitlab-integration.component.scss']
})
export class GitlabIntegrationComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('MRI', [Validators.required]),
    token: new FormControl('t62w38axXpDhg5c8ypsm', [Validators.required]),
    url: new FormControl('https://gitlab.dialogdata.de', [Validators.required])
  });

  private projects: any;
  remoteProjects: SimpleProjectDTO[];
  downloadList: SimpleProjectDTO[] = [];
  listProjectsTabOpen = false;

  constructor(private integrationService: GitlabIntegrationService) {
  }

  getProjects() {
    this.integrationService.getProjects().subscribe(projects => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  addToDownloadList(project: SimpleProjectDTO) {
    this.downloadList.push(project);
  }

  delete(project: any) {
    this.integrationService.deleteProject(project.path).subscribe(console.log);
  }

  listProjects() {
    this.listProjectsTabOpen = false;
    this.integrationService.listProjects(this.form.getRawValue())
      .subscribe(data => this.remoteProjects = data as SimpleProjectDTO[]);
  }

  downloadProjects() {
    const payload = {
      credentials: this.form.getRawValue(),
      projects: this.downloadList.map(it => {
        return {
          name: it.name,
          path: it.path,
          branch: it.defaultBranch,
          integrationPath: 'gitlab',
          repositoryHttpUrl: it.httpUrlToRepo,
          webUrl: it.webUrl,
          pullRequestsEnabled: false
        };
      })
    };
    this.integrationService.importProjects(payload).subscribe(console.log);
  }
}
