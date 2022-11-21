import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramasComponent } from './programas.component';
import {ProgramasRoutingModule} from "./programas-routing.module";
import {ProgramaService} from "../../../providers/services/programa.service";
import { ProgramaModalComponent } from './programa-modal/programa-modal.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProgramasComponent,
    ProgramaModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProgramasRoutingModule
  ],
  providers: [ProgramaService]
})
export class ProgramasModule { }
