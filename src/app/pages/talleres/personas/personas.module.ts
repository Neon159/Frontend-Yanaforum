import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas.component';
import {PersonasRoutingModule} from "./personas-routing.module";
import {PersonaService} from "../../../providers/services/persona.service";
import { PersonaModalComponent } from './persona-modal/persona-modal.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PersonasComponent,
    PersonaModalComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PersonaService
  ]
})
export class PersonasModule { }
