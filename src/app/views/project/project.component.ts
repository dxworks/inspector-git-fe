import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SimpleProjectDTO} from '../../../model/SimpleProjectDTO';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  form = new FormGroup({
    username: new FormControl('MRI', [Validators.required]),
    token: new FormControl('t62w38axXpDhg5c8ypsm', [Validators.required]),
    url: new FormControl('https://gitlab.dialogdata.de', [Validators.required])
  });

  repositoriesList: SimpleProjectDTO[];
  cloneList: SimpleProjectDTO[] = [];

  constructor(private httpService: ApiService) {
  }

  sendRemoteRepoInfo() {
    this.httpService.put('listRepositories', this.form.getRawValue())
      .subscribe(data => this.repositoriesList = data as SimpleProjectDTO[]);
  }

  addToDownloadList(repo: SimpleProjectDTO) {
    this.cloneList.push(repo);
  }

  clone() {
    const payload = {
      credentials: this.form.getRawValue(),
      repositories: this.cloneList.map(it => {
        return {url: it.httpUrlToRepo, path: it.path, branch: it.defaultBranch};
      })
    };
    this.httpService.put('cloneRepositories', payload).subscribe(console.log);
  }

  delete(path) {
    this.httpService.delete(`deleteRepository?name=${path}`).subscribe(console.log);
  }

}
