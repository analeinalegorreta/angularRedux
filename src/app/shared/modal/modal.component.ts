import { Component, inject, TemplateRef } from '@angular/core';
import { Product } from '../interfaces/produc.interfaces';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from '../services/product.service';
import { agregarProductos } from '../Store/Actions/crud.actions';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  
  public producForm = new FormGroup({

    title: new FormControl<string>(''),
    price: new FormControl<string>(''),
    description: new FormControl<string>(''),
    category: new FormControl<string>(''),
    image: new FormControl(''),

  })


  constructor(public store: Store, private productService: ProductService, private modalService:NgbModal) {
   
  }


  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  
  onsubmit(content: TemplateRef<any>): void {

    let nuevoProducto: Product = {

      title: this.producForm.get('title')!.value,
      price: parseInt(this.producForm.get('price')!.value ?? '0'),
      description: this.producForm.get('description')!.value,
      category: this.producForm.get('category')!.value,
      image: "",
    }

    // this.producForm.value;

    this.store.dispatch(agregarProductos({ producto: nuevoProducto }))

    this.modalService.dismissAll()

  }

}
