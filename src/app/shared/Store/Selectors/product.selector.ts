import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromProductReducers from '../Reducer/crud.reducer'

export const productReducers = {
    producto: fromProductReducers.productReducer
}

const obtenerProductosSelector = createFeatureSelector<fromProductReducers.ProductState>('producto');

export const getProductsState = createSelector(obtenerProductosSelector, (state) => {
    return state
})

// export const getProductsStateData = createSelector(obtenerProductosSelector, (state) => {
//     return state.data
// })
