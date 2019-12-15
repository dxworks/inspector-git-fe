import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LayoutComponent} from './layout/layout.component';
import {ProjectComponent} from './views/project/project.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {GitlabIntegrationComponent} from './views/gitlab-integration/gitlab-integration.component';
import {SpinnerInterceptor} from '../intercetors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProjectComponent,
    GitlabIntegrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
