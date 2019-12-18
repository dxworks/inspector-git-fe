import {Component, OnInit} from '@angular/core';
import {System} from '../../../model/system';
import {SystemService} from '../../../services/system.service';

@Component({
  selector: 'ig-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit {
  availableSystems: System[] = [];
  systemTableColumns = ['name', 'systemId', 'actions'];

  constructor(private systemService: SystemService) {
  }

  ngOnInit() {
    this.getSystems();
  }

  getSystems() {
    this.systemService.getSystems().subscribe(systems => this.availableSystems = systems);
  }

  export(system: System) {

  }

  delete(system: System) {
    this.systemService.delete(system.systemId).subscribe(() => this.getSystems());
  }

  analyze(system: System) {
    this.systemService.analyze(system.systemId).subscribe(console.log);
  }
}
