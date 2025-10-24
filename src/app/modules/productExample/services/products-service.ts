import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../model/products';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private Baseurl = environment.apiUrl;
  
  constructor(
    private clienteHttp: HttpClient
  ) { }
    
  getListProducts(): Observable<Products[]>{

    const url = this.Baseurl + "productos";
    // console.log(url);
    return this.clienteHttp.get<Products[]>(url);
  }

  updateProduct(item: Products) {
    const url = `${this.Baseurl}actualizar/producto`;
    return this.clienteHttp.put<Products>(url, item);
  }
  createProduct(item: Products) {
    const url = `${this.Baseurl}crear/producto`;
    return this.clienteHttp.post<Products>(url, item);
  }

  deleteProduct(item:any){
    const url = `${this.Baseurl}borrar/producto?id=${item.idProducto}`;
    return this.clienteHttp.delete<any>(url);

  }

}
