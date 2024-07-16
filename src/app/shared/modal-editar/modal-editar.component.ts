import { Component, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../interfaces/produc.interfaces';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from '../services/product.service';
import { editarProductos } from '../Store/Actions/crud.actions';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrl: './modal-editar.component.scss'
})
export class ModalEditarComponent implements OnInit{

  @Input() productoXEditar!: Product;


  
  public producForm! : FormGroup


  constructor(public store: Store, private productService: ProductService, private modalService:NgbModal) {

   
  }

  ngOnInit(): void {

    
    this.producForm = new FormGroup({

      title: new FormControl<string>(this.productoXEditar.title ?? '0'),
      price: new FormControl<string>(this.productoXEditar.price + ""),
      description: new FormControl<string>(this.productoXEditar.description ?? '0'),
      category: new FormControl<string>(this.productoXEditar.category ?? '0'),
      image: new FormControl(""),
  
    })
  }


  openVerticallyCentered(content: TemplateRef<any>) {  //para abrir el modal
    this.modalService.open(content, { centered: true });
  }

  
  onsubmit(content: TemplateRef<any>): void {
    
    let nuevoProducto: Product = {
      id: this.productoXEditar.id,
      title: this.producForm.get('title')!.value,
      price: parseInt(this.producForm.get('price')!.value ?? '0'),
      description: this.producForm.get('description')!.value,
      category: this.producForm.get('category')!.value,
      image: "",
    }

    // this.producForm.value;

    this.store.dispatch(editarProductos({ producto: nuevoProducto }))

    this.modalService.dismissAll()

  }

}

