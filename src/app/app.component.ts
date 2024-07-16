import { Component, OnInit, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { agregarProductos, editarProductos, eliminarProducto, obtenerProductos } from './shared/Store/Actions/crud.actions';
import { ProductState } from './shared/Store/Reducer/crud.reducer';
import { getProductsState } from './shared/Store/Selectors/product.selector';
import { Product } from './shared/interfaces/produc.interfaces';
import { ProductService } from './shared/services/product.service';


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

  constructor(public store: Store, private productService: ProductService) {
   
  }


  ngOnInit(): void {


    this.store.select(getProductsState).subscribe(  // escucha todos los cambios ya se edit delete y get el que sea 
      resp => {
        this.productState = resp;
        this.productos = resp.data
        console.log(resp.data.length);

      }
    )

    this.store.dispatch(obtenerProductos()) //  se coloca en el ngOnInit por que carga la tabla de una


  }



  deleteElement(id: number) {

    this.store.dispatch(eliminarProducto({ id: id }))

  }






}