import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {GitlabIntegrationComponent} from './views/gitlab-integration/gitlab-integration.component';
import {SystemsComponent} from './views/systems/systems.component';
import {IntegrationsComponent} from './views/integrations/integrations.component';
import {ExploreComponent} from './views/explore/explore.component';
import {LocalSystemsComponent} from "./views/new-ig/local-systems/local-systems.component";
import {AnalyzeComponent} from "./views/new-ig/analyze/analyze.component";


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
