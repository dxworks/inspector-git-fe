import {Component, OnInit} from '@angular/core';
import {AnalysisService} from '../../../../services/analysis.service';

@Component({
  selector: 'ig-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit {
  constructor(private analysisService: AnalysisService) {
  }

  ngOnInit() {
    this.analysisService.getDetails().subscribe(console.log);
  }
}
