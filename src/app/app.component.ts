import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {SpinnerService} from '../services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService,
              private spinnerService: SpinnerService) {
  }

  ngOnInit(): void {
    this.spinnerService.spinner.subscribe(on => {
      if (on) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    }, console.log, console.log);
  }
}
