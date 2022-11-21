import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TallerComponent } from './taller.component';
import {TallerRoutingModule} from "./taller-routing.module";



@NgModule({
  declarations: [
    TallerComponent
  ],
  imports: [
    CommonModule,
    TallerRoutingModule
  ]
})
export class TallerModule { }
