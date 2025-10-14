import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { Products } from '../../model/products';
import { DataViewComponent } from "../../../../components/data-view-component/data-view-component";


@Component({
  selector: 'app-products-component',
  imports: [DataViewComponent],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];

  private productoServicio = inject(ProductsService);

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.productoServicio.getListProducts().subscribe({
      next: (res) => {
      this.products = res;
      console.log(this.products);
    },
    error: (error) => {
      console.error("Error al obtener los productos", error);
    }
  });
}




}
