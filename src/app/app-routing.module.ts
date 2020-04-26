import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {LocalSystemsComponent} from './views/new-ig/local-systems/local-systems.component';
import {AnalyzeComponent} from './views/new-ig/analyze/analyze.component';
import {DocumentationComponent} from './views/documentation/documentation.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'systems',
        component: LocalSystemsComponent,
        children: []
      },
      // {
      //   path: 'gitlab',
      //   component: GitlabIntegrationComponent,
      //   children: []
      // },
      // {
      //   path: 'integrations',
      //   component: IntegrationsComponent,
      //   children: []
      // },
      {
        path: 'analyze',
        component: AnalyzeComponent,
        children: []
      },
      {
        path: 'docs',
        component: DocumentationComponent,
        children: []
      },
      {
        path: '**',
        redirectTo: 'systems',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
