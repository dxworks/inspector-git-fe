import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LayoutComponent} from './layout/layout.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {GitlabIntegrationComponent} from './views/gitlab-integration/gitlab-integration.component';
import {SpinnerInterceptor} from '../interceptors/spinner.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SystemComponent} from './views/system/system.components';
import {SystemsComponent} from './views/systems/systems.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatStepperModule,
  MatTableModule
} from '@angular/material';
import {IntegrationsComponent} from './views/integrations/integrations.component';
import {NewSystemComponent} from './views/systems/new-system/new-system.component';
import {ExploreComponent} from './views/explore/explore.component';
import {LocalSystemsComponent} from './views/new-ig/local-systems/local-systems.component';
import {AnalyzeComponent} from './views/new-ig/analyze/analyze.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MonacoEditorModule} from 'ngx-monaco-editor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GitlabIntegrationComponent,
    SystemComponent,
    SystemsComponent,
    IntegrationsComponent,
    NewSystemComponent,
    ExploreComponent,
    LocalSystemsComponent,
    AnalyzeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatStepperModule,
    MatCheckboxModule,
    FormsModule,
    MatTooltipModule,
    MonacoEditorModule.forRoot()
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
