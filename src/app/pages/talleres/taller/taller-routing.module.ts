import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TallerComponent} from "./taller.component";

const routes: Routes = [
  {
    path: '',
    component: TallerComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TallerRoutingModule {
}
