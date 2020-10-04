import {Component, OnInit} from '@angular/core';
import {LocalSystem} from '../../../../model/system';
import {LocalSystemService} from '../../../../services/local-system.service';
import {SpinnerService} from '../../../../services/spinner.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ig-local-systems',
  templateUrl: './local-systems.component.html',
  styleUrls: ['./local-systems.component.scss']
})
export class LocalSystemsComponent implements OnInit {
  availableSystems: LocalSystem[] = [];
  systemTableColumns = ['name', 'id', 'actions'];

  newSystemForm = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    sources: new FormControl(null, [Validators.required]),
    issues: new FormControl(null),
    remotes: new FormControl(null)
  });

  constructor(private localSystemService: LocalSystemService,
              private spinnerService: SpinnerService,
              private router: Router) {
  }

  ngOnInit() {
    this.getSystems();
  }

  private getSystems() {
    this.spinnerService.setShow(true);
    this.localSystemService.list().subscribe(systems => {
      this.spinnerService.setShow(false);
      return this.availableSystems = systems;
    });
  }

  analyze(system: LocalSystem) {
    this.spinnerService.setShow(true);
    this.localSystemService.load(system.id).subscribe(() => {
        this.spinnerService.setShow(false);
        this.router.navigateByUrl('analyze');
      },
      () => this.spinnerService.setShow(false)
    );
  }

  delete(system: LocalSystem) {
    this.spinnerService.setShow(true);
    this.localSystemService.delete(system.id).subscribe(
      () => {
        this.spinnerService.setShow(false);
        this.getSystems();
      },
      () => this.spinnerService.setShow(false)
    );
  }

  create() {
    this.spinnerService.setShow(true);
    const localSystem: LocalSystem = {
      id: this.newSystemForm.get('id').value,
      name: this.newSystemForm.get('name').value,
      sources: this.getListFromMultiLineInput('sources'),
      issues: this.getListFromMultiLineInput('issues'),
      remotes: this.getListFromMultiLineInput('remotes'),
    };
    this.localSystemService.create(localSystem).subscribe(
      () => {
        this.spinnerService.setShow(false);
        this.router.navigateByUrl('analyze');
      },
      () => this.spinnerService.setShow(false)
    );
  }

  private getListFromMultiLineInput(controlName: string) {
    return this.newSystemForm.get(controlName).value.split('\n').filter(it => it.length > 0);
  }
}
