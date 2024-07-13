import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { editarProductos, obtenerProductos } from './shared/Store/Actions/crud.actions';
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

  constructor(public store: Store, private productService: ProductService) { }

  ngOnInit(): void {

    
    this.store.select(getProductsState).subscribe(  // escucha todos los cambios ya se edit delete y get el que sea 
      resp => {
        console.log(resp);
      }
    )
    
    this.store.dispatch(obtenerProductos()) //  se coloca en el ngOnInit por que carga la tabla de una


  }

  addElement() { }

  editElement() {

    let productoXEditar: Product = {
      category: "Muebles",
      id: 1,
      description: "Silla",
      image: "/img",
      price: 2,
      rating: {
        count: 1,
        rate: 5
      },
      title: "Silla nueva blanca"


    }

    this.store.dispatch(editarProductos({ producto: productoXEditar }))


  }

  deleteElement() {

    //this.store.dispatch(this.deleteElement({id:6}))

  }



}