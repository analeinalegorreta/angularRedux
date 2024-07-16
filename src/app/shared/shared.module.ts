import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditarComponent } from './modal-editar/modal-editar.component';



@NgModule({
  declarations: [
    ModalComponent,
    ModalEditarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ModalComponent,
    ModalEditarComponent
  ]
})
export class SharedModule { }
