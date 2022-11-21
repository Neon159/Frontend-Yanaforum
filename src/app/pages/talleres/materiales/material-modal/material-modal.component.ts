
import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialesService} from "../../../../providers/services/materiales.service";


@Component({
  selector: 'app-material-modal',
  templateUrl: './material-modal.component.html',
  styleUrls: ['./material-modal.component.css']
})
export class MaterialModalComponent implements OnInit {

  @Input() title: any;
  @Input() mateId: any;
  @Input() item: any;
  formMaterial: FormGroup;
  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private materialService: MaterialesService) {}
  ngOnInit(): void {
    this.formInit();
    if(this.item) {
      this.updateData();
    }
  }
  private formInit(): void {
    const controls = {
      mateNombre: ['', [Validators.required]],
      mateDescripcion: ['', [Validators.required]]
    };
    this.formMaterial = this.formBuilder.group(controls);
  }

  save(): void {
    this.materialService.add$(this.formMaterial.value).subscribe(response => {
      if(response.success){
        this.activeModal.close({success: true, message: response.message});
      }
    });
  }

  update(): void {
    this.materialService.update$(this.mateId, this.formMaterial.value).subscribe(response => {
      if(response.success) {
        this.activeModal.close({success: true, message: response.message});
      }
    });
  }

  private updateData(): void {
    const data = this.item;
    this.formMaterial.patchValue(data);
  }
}
