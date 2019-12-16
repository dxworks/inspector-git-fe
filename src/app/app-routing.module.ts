import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {GitlabIntegrationComponent} from './views/gitlab-integration/gitlab-integration.component';
import {SystemsComponent} from './views/systems/systems.component';
import {IntegrationsComponent} from './views/integrations/integrations.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'systems',
        component: SystemsComponent,
        children: []
      },
      {
        path: 'gitlab',
        component: GitlabIntegrationComponent,
        children: []
      },
      {
        path: 'integrations',
        component: IntegrationsComponent,
        children: []
      },
      {
        path: '**',
        redirectTo: 'projects',
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
