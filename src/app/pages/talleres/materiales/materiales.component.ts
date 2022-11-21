import { Component, OnInit } from '@angular/core';
import {PersonaService} from "../../../providers/services/persona.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PersonaModalComponent} from "../personas/persona-modal/persona-modal.component";
import Swal from "sweetalert2";
import {MaterialModalComponent} from "./material-modal/material-modal.component";

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  materiales: any = [];
  constructor(private materialService: PersonaService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getMateriales();
  }

  getMateriales(): void {
    this.materialService.getAll$().subscribe(response => {
      this.materiales = response.data || [];
    });
  }

  openModal(): void {
    const modal = this.modalService.open(MaterialModalComponent, {
      size: "lg",
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.title = 'Nuevo';
    modal.result.then(res => {
      if (res.success) {
        Swal.fire({
          title: 'Materiales',
          text: `${res.message}`,
          icon: 'success',
          showConfirmButton: false,
          confirmButtonColor: 'primary',
          timer: 1300
        });
        this.getMateriales();
      }
    });

  }
  openModalEdit(item: any): any {
    const modal = this.modalService.open(MaterialModalComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.id_material = item.mateId;
    modal.componentInstance.item = item;
    modal.componentInstance.title = 'Modificar';
    modal.result.then(res => {
      if (res.success) {
        this.getMateriales();
        Swal.fire({
          title: 'Materiales',
          text: `${res.message}`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1300
        });
      }
    });
  }

  public onDelete(item: any): void {
    const ID = item.mateId;
    const mensaje = '¿ Desea eliminar? : ' + ' ' + item.mateNombre;
    if (ID) {
      Swal.fire({
        title: 'Se eliminará el material',
        text: `${mensaje}`,
        backdrop: true,
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#a82935',
        confirmButtonText: 'Estoy de acuerdo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.materialService.delete$(ID).subscribe(data => {
            if (data.success) {
              Swal.fire({
                title: 'Eliminado',
                text: data.message,
                backdrop: true,
                icon: 'success',
                showConfirmButton: false,
                timer: 1300,
              });
              this.getMateriales();
            }
          });
        }
      });
    }
  }
}
