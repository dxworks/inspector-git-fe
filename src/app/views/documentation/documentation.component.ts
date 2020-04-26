import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'ig-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  documentationUrl = 'http://localhost:6061/inspectorgit/documentation/index.html';
  private urlSafe: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.documentationUrl);
  }

}
