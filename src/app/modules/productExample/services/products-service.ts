import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private Baseurl = "http://localhost:8080/";
  
  constructor(
    private clienteHttp: HttpClient
  ) { }
    
  getListProducts(): Observable<Products[]>{

    const url = this.Baseurl + "productos";
    // console.log(url);
    return this.clienteHttp.get<Products[]>(url);
  }

  deleteProduct(item:any){
    const url = `${this.Baseurl}borrar/producto?id=${item.idProducto}`;
    return this.clienteHttp.delete<any>(url);

  }
  
}
