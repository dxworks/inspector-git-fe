import {Component, OnInit} from '@angular/core';
import {AnalysisService} from '../../services/analysis.service';


@Component({
  selector: 'ig-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  loadedSystemName: string;

  constructor(private analysisService: AnalysisService) {

  }

  ngOnInit(): void {
    this.analysisService.loadedSystemName().subscribe(name => this.loadedSystemName = name);
  }
}
