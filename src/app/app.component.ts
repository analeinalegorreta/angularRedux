import { Component, OnInit, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { agregarProductos, editarProductos, eliminarProducto, obtenerProductos } from './shared/Store/Actions/crud.actions';
import { ProductState } from './shared/Store/Reducer/crud.reducer';
import { getProductsState } from './shared/Store/Selectors/product.selector';
import { Product } from './shared/interfaces/produc.interfaces';

import { ProductService } from './shared/services/product.service';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  productState!: ProductState;

  dtOptions: Config = {
    searching: false,

  };

  public productos: Product[] = []
  private modalService = inject(NgbModal);


  constructor(public store: Store, private productService: ProductService, private activeModal: NgbActiveModal) {
    // this.modalReference = this.modalService.activeInstances;
  }


  public producForm = new FormGroup({

    title: new FormControl<string>(''),
    price: new FormControl<string>(''),
    description: new FormControl<string>(''),
    category: new FormControl<string>(''),
    image: new FormControl(''),

  })


  ngOnInit(): void {


    this.store.select(getProductsState).subscribe(  // escucha todos los cambios ya se edit delete y get el que sea 
      resp => {
        this.productState = resp;
        this.productos = resp.data
        console.log(resp);

      }
    )

    this.store.dispatch(obtenerProductos()) //  se coloca en el ngOnInit por que carga la tabla de una


  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  addElement() {
    //this.store.dispatch(agregarProductos(this.productos))

  }



  editElement() {

    let productoXEditar: Product = {
      category: "Muebles",
      id: 1,
      description: "Silla",
      image: "/img",
      price: 2,
      title: "Silla nueva blanca"


    }

    this.store.dispatch(editarProductos({ producto: productoXEditar }))


  }

  deleteElement(id: number) {

    this.store.dispatch(eliminarProducto({ id: id }))

  }



  onsubmit(): void {


    let producto: Product = {

      title: this.producForm.get('nombreGasto')!.value,
      price: parseInt(this.producForm.get('cantidad')!.value ?? '0'),
      description: this.producForm.get('fechaDelGasto')!.value,
      category: this.producForm.get('fechaDelGasto')!.value,
      image: "",
    }

    // this.producForm.value;
    this.activeModal.close();

  }



}