import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TalleresComponent} from "./talleres.component";

const routes: Routes = [
  {
    path: '',
    component: TalleresComponent,
    children: [{
      path: 'taller',
      loadChildren: () => import('./taller/taller.module')
        .then(m => m.TallerModule)
      },
      {
        path: 'materiales',
        loadChildren: () => import('./materiales/materiales.module')
          .then(m => m.MaterialesModule)
      },
      {
        path: 'programas',
        loadChildren: () => import('./programas/programas.module')
          .then(m => m.ProgramasModule)
      },
      {
        path: 'personas',
        loadChildren: () => import('./personas/personas.module')
          .then(m => m.PersonasModule)
      }]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalleresRoutingModule {
}
