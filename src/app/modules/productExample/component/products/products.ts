import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { Products } from '../../model/products';
import { TableComponent } from "../../../../components/table-component/table-component";


@Component({
  selector: 'app-products-component',
  imports: [TableComponent],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {



  products: Products[] = [];

  private productoServicio = inject(ProductsService);


  columns = [
    { field: 'descripcion', header: 'Descripción', type: 'string' },
    { field: 'precio', header: 'Precio', type: 'number' },
    { field: 'existencia', header: 'Existencia', type: 'number'},
    { field: 'acciones', header: 'Acciones', type: 'actions' }
  ];
  showActions = true;



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

  onConfirmDelete(item: any) {
    this.productoServicio.deleteProduct(item).subscribe({
    next: () => {
      console.log('Producto eliminado:', item);
      this.getProducts();
    },
    error: (err) => console.error('Error al borrar producto', err)
  });
  }

}
