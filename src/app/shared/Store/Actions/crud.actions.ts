import { createAction, props } from '@ngrx/store';
import { Product } from '../../interfaces/produc.interfaces';

 const OBTENER_PRODUCTOS = "[prouctos] obtener productos"; // crear las descripciones de las constantes 
 const OBTENER_PRODUCTOS_SUCCESS = "[prouctos] obtener productos success";
 const OBTENER_PRODUCTOS_FAIL = "[prouctos] obtener productos fail";

export const obtenerProductos=createAction(OBTENER_PRODUCTOS)
export const successProductos=createAction(OBTENER_PRODUCTOS_SUCCESS,props<{data:Product[]}>())
export const failProductos=createAction(OBTENER_PRODUCTOS_FAIL,props<{error:any}>())


