import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProgramaService} from "../../../../providers/services/programa.service";

@Component({
  selector: 'app-programa-modal',
  templateUrl: './programa-modal.component.html',
  styleUrls: ['./programa-modal.component.css']
})
export class ProgramaModalComponent implements OnInit {

  @Input() title: any;
  @Input() progId: any;
  @Input() item: any;
  formPrograma: FormGroup;
  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private programaService: ProgramaService) {}

  ngOnInit(): void {
    this.formInit();
    if(this.item) {
      this.updateData();
    }
  }

  private formInit(): void {
    const controls = {
      progNombre: ['', [Validators.required]],
      progDescripcion: ['', [Validators.required]],
    };
    this.formPrograma = this.formBuilder.group(controls);
  }

  save(): void {
    this.programaService.add$(this.formPrograma.value).subscribe(response => {
      if(response.success){
        this.activeModal.close({success: true, message: response.message});
      }
    });
  }

  update(): void {
    this.programaService.update$(this.progId, this.formPrograma.value).subscribe(response => {
      if(response.success) {
        this.activeModal.close({success: true, message: response.message});
      }
    });
  }

  private updateData(): void {
    const data = this.item;
    this.formPrograma.patchValue(data);
  }
}
