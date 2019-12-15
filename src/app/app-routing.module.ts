import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ProjectComponent} from './views/project/project.component';
import {GitlabIntegrationComponent} from './views/gitlab-integration/gitlab-integration.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'projects',
        component: ProjectComponent,
        children: []
      },
      {
        path: 'gitlab',
        component: GitlabIntegrationComponent,
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
