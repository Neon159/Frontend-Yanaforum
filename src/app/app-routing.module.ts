import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./core/main-page/main-page.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [{
      path: '',
      component: DashboardComponent,
      pathMatch: "full"
    },
    {
      path: 'talleres',
      loadChildren: () => import('./pages/talleres/talleres.module')
        .then(m => m.TalleresModule)
    }]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
