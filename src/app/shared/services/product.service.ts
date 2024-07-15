import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/produc.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string='https://fakestoreapi.com'

  constructor(private http:HttpClient) { 
    // this.deleteProducts(6).subscribe(resp =>{     
    //   console.log(resp);
      
    // })


    
    let productoNuevo: Product = {
      category: "carro",
      id: 1,
      description: "ruedas",
      image: "/img",
      price: 299,
      title: "Scarro nuevo"


    }

     this.addProducts(productoNuevo).subscribe(resp =>{     
      console.log(resp);
      
    })
  }

public GetAllProducts():Observable<Product[]> {
  return this.http.get<Product[]>(`${this.url}/products`)
}


  public updateProducts(producto:Product):Observable<Product> {
    return this.http.put<Product>
                (`${this.url}/products/${producto.id}`,  //url
                  producto)                              // body                            
  }

  public deleteProducts(id:number):Observable<Product> {
    return this.http.delete<Product>
                (`${this.url}/products/${id}`)                                                    
  }

  public addProducts(producto:Product):Observable<Product> {
    return this.http.post<Product>
                (`${this.url}/products`,  JSON.stringify(producto))                              // body                            
  }







}



