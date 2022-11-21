import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalleresComponent } from './talleres.component';
import {TalleresRoutingModule} from "./talleres-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TalleresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TalleresRoutingModule
  ]
})
export class TalleresModule { }
