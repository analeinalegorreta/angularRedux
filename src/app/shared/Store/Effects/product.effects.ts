import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromProductsActions from '../Actions/crud.actions';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';
//import all requried services or any dependencies

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private ProductService: ProductService) { }

    getProductsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromProductsActions.obtenerProductos),
            mergeMap(() =>
                this.ProductService.GetAllProducts().pipe(
                    map(resp => {
                        return fromProductsActions.successProductos({ data: resp })
                    }),
                    catchError((error) => of(fromProductsActions.failProductos({ error: error })))

                )
            )
        )
    )




    deletProductsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromProductsActions.eliminarProducto),
            mergeMap((accion) =>
    
                this.ProductService.deleteProducts(accion.id).pipe(
                    map(resp => {
                        return fromProductsActions.obtenerProductos()
                    }),
                    catchError((error) => of(fromProductsActions.failEliminarProducto({ error: error })))
    
                )
            )
        )
    )

    editProductsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromProductsActions.editarProductos),
            mergeMap((accion) =>

                this.ProductService.updateProducts(accion.producto).pipe(
                    map(resp => {
                        return fromProductsActions.obtenerProductos()
                    }),
                    catchError((error) => of(fromProductsActions.failEditarProductos({ error: error })))

                )
            )
        )
    )

    addProductsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromProductsActions.agregarProductos),//cual fue la accion que va a disparar la accion asincrona
            mergeMap((accion) =>
    
                this.ProductService.addProducts(accion.producto).pipe( //hace la accion asincrona
                    map(resp => {
                        return fromProductsActions.obtenerProductos() //ejecuta laccion que paso
                    }),
                    catchError((error) => of(fromProductsActions.failAgregarProductos({ error: error })))//ejecuta la ccion que no paso
    
                )
            )
        )
    )












}



