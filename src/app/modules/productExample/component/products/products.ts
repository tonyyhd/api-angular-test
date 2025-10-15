import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { Products } from '../../model/products';
import { TableComponent } from "../../../../components/table-component/table-component";
import { ProductsModal } from "../modals/products-modal/products-modal";
import { Button } from "primeng/button";


@Component({
  selector: 'app-products-component',
  imports: [TableComponent, ProductsModal, Button],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {




  products: Products[] = [];
  selectedProduct: Products | undefined;

  /*Tabla Config*/
  private productoServicio = inject(ProductsService);
  columns = [
    { field: 'descripcion', header: 'Descripción', type: 'string' },
    { field: 'precio', header: 'Precio', type: 'number' },
    { field: 'existencia', header: 'Existencia', type: 'number'},
    { field: 'acciones', header: 'Acciones', type: 'actions' }
  ];
  showActions = true;

  /*Modal Config*/
  isEdit: boolean = false;
  showModal: boolean = false;

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.productoServicio.getListProducts().subscribe({
      next: (res) => {
      this.products = res;
    },
    error: (error) => {
      console.error("Error al obtener los productos", error);
    }
  });
  }

  onConfirmDelete(item: any) {
    this.productoServicio.deleteProduct(item).subscribe({
    next: () => {
      this.getProducts();
    },
    error: (err) => console.error('Error al borrar producto', err)
  });
  }

  onEditItems(item: any) {
    this.selectedProduct = item;
    this.isEdit= true;
    this.showModal= true;
  }

  onCreateItem() {
    this.isEdit= false;
    this.showModal= true;
  }

  onSaveItem(item:any){
    if (this.isEdit==true){
      this.productoServicio.updateProduct(item).subscribe({
      next: () => {
        this.getProducts();
      },
      error: (err: any) => console.error('Error al borrar producto', err)
    });
    }
    else {
      this.productoServicio.createProduct(item).subscribe({
      next: () => {
        this.getProducts();
      },
      error: (err: any) => console.error('Error al borrar producto', err)
    });
    }
  }

}
