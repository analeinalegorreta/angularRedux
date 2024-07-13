import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataTablesModule } from 'angular-datatables'; 
import { Config } from 'datatables.net';
import { obtenerProductos } from './shared/Store/Actions/crud.actions';
import { ProductState } from './shared/Store/Reducer/crud.reducer';
import { getProductsState } from './shared/Store/Selectors/product.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 productState!:ProductState;

  dtOptions: Config = {
    searching: false,
    
  };

  constructor(public store:Store) { }

  ngOnInit(): void {
  
    this.store.dispatch(obtenerProductos())
    this.store.select(getProductsState).subscribe(
      resp=>{
        console.log(resp);
        
      }
    )
  }

  addElement(){}

  editElement(){}

  deleteElement(){}



}