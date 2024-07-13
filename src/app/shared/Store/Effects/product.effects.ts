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
}