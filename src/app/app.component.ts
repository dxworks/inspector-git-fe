import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {SpinnerInterceptor} from '../intercetors/spinner.interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService,
              private spinnerInterceptor: SpinnerInterceptor) {
  }

  ngOnInit(): void {
    console.log('sub');
    this.spinnerInterceptor.spinner.subscribe(state => {
      console.log(state);
      if (state.on) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
