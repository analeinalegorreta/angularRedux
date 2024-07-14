import { createAction, props } from '@ngrx/store';
import { Product } from '../../interfaces/produc.interfaces';

// OBTENER

 const OBTENER_PRODUCTOS = "[prouctos] obtener productos"; // crear las descripciones de las constantes 
 const OBTENER_PRODUCTOS_SUCCESS = "[prouctos] obtener productos success";
 const OBTENER_PRODUCTOS_FAIL = "[prouctos] obtener productos fail";

export const obtenerProductos=createAction(OBTENER_PRODUCTOS)
export const successProductos=createAction(OBTENER_PRODUCTOS_SUCCESS,props<{data:Product[]}>())
export const failProductos=createAction(OBTENER_PRODUCTOS_FAIL,props<{error:any}>())


//EDITAR
const EDITAR_PRODUCTOS = "[prouctos] editar productos";
const EDITAR_PRODUCTOS_FAIL = "[prouctos] editar productos fail";

export const editarProductos=createAction(EDITAR_PRODUCTOS, props<{producto:Product}>()) // lleva producto ya que el id va en el body 
export const failEditarProductos=createAction(EDITAR_PRODUCTOS_FAIL,props<{error:any}>())

//AGREGAR
const AGREGAR_PRODUCTOS = "[prouctos] editar productos";
const AGREGAR_PRODUCTOS_FAIL = "[prouctos] editar productos fail";

export const agregarProductos=createAction(AGREGAR_PRODUCTOS, props<{producto:Product}>()) 
export const failAgregarProductos=createAction(AGREGAR_PRODUCTOS_FAIL,props<{error:any}>())

//ELIMINAR

const ELIMINAR_PRODUCTOS = "[prouctos] eliminar productos";
const ELIMINAR_PRODUCTOS_FAIL = "[prouctos] eliminar productos fail";

export const eliminarProducto=createAction(ELIMINAR_PRODUCTOS, props<{id:number}>())
export const failEliminarProducto=createAction(ELIMINAR_PRODUCTOS_FAIL,props<{error:any}>())