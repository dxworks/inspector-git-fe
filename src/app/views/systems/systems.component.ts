import { Component, OnInit } from '@angular/core';
import {System} from '../../../model/system';

@Component({
  selector: 'ig-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit {
  availableSystems: System[];

  constructor() { }

  ngOnInit() {
  }

}
