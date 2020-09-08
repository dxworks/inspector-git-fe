import {Component, OnInit} from '@angular/core';
import {AnalysisService} from '../../../../services/analysis.service';
import {LocalSystem} from '../../../../model/system';
import {Router} from '@angular/router';
import {AccountMergeService} from "../../../../services/account-merge.service";

@Component({
  selector: 'ig-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.scss']
})
export class AnalyzeComponent implements OnInit {
  script: string;
  displayText: string;
  options: any = {
    maxLines: 100, printMargin: false,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
  };

  systemDescription: LocalSystem;
  themeLight = false;

  log: string;
  files: string[];

  selectedFile: string;

  constructor(private analysisService: AnalysisService,
              private accountMergeService: AccountMergeService,
              private router: Router) {
  }

  ngOnInit() {
    this.script = this.analysisService.getCachedScript();
    this.analysisService.getDetails().subscribe(description => this.systemDescription = description,
      () => this.router.navigateByUrl('/systems'));
  }

  runScript() {
    this.analysisService.runScript(this.script).subscribe(response => {
      this.log = response.log;
      this.files = response.results;
      this.displayText = response.log;
      this.selectedFile = null;
    });
  }

  selectConsole() {
    this.selectedFile = null;
    this.displayText = this.log;
  }

  selectResult(file: string) {
    this.analysisService.getResultFile(this.systemDescription.id, file).subscribe(resultFile => {
      this.selectedFile = resultFile.fileName;
      this.displayText = resultFile.content;
    });
  }

  openResultFile() {
    this.analysisService.openResultFile(this.systemDescription.id, this.selectedFile).subscribe();
  }

  cacheScript() {
    this.analysisService.cacheScript(this.script);
  }

  applyChronosMerges() {
    this.accountMergeService.applyChronosMerges().subscribe();
  }
}
