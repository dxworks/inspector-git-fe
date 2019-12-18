import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {System} from '../../../model/system';
import {SystemService} from '../../../services/system.service';

@Component({
  selector: 'ig-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private systemService: SystemService) { }

  ngOnInit() {
    // this.route.paramMap.subscribe()
  }

}
