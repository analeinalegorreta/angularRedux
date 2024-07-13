import { Action, createReducer, on } from '@ngrx/store';
import * as fromProductsActions from '../Actions/crud.actions';
import { Product } from '../../interfaces/produc.interfaces';

export interface ProductState {
    data: Product[];
    loading: boolean;
    error: any;
};

export const initialState: ProductState = {
    data: [],
    loading: false,
    error: "",
};

export const productReducer = createReducer(
    initialState,
    on(fromProductsActions.obtenerProductos, (state) => {
        return {
            ...state,
            loading: true,

        }
    }),
    on(fromProductsActions.successProductos, (state, action) => {
        return {
            ...state,
            data: action.data,
            loading: false,

        }
    }),
    on(fromProductsActions.failProductos, (state, action) => {
        return {
            ...state,
            data: [],
            loading: false,
            error: action.error,

        }
    })
);
