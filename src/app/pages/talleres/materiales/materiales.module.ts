import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialesComponent } from './materiales.component';
import {MaterialesRoutingModule} from "./materiales-routing.module";
import { MaterialModalComponent } from './material-modal/material-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PersonaService} from "../../../providers/services/persona.service";



@NgModule({
  declarations: [
    MaterialesComponent,
    MaterialModalComponent
  ],
  imports: [
    CommonModule,
    MaterialesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PersonaService
  ]
})
export class MaterialesModule { }
