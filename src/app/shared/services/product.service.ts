import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/produc.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string='https://fakestoreapi.com'

  constructor(private http:HttpClient) { }

public GetAllProducts():Observable<Product[]> {
  return this.http.get<Product[]>(`${this.url}/products`)
}


}
