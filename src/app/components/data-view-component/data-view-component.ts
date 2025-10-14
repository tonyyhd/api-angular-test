import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { Products } from '../../modules/productExample/model/products';

@Component({
  selector: 'app-data-view-component',
  imports: [DataView, ButtonModule, CommonModule],
  templateUrl: './data-view-component.html',
  styleUrl: './data-view-component.css'
})
export class DataViewComponent<T>{

  @Input() items: Products[] | undefined;

    data = signal<Products[]>([]);

  ngOnInit() {
    // opcional: inicializar la señal si items ya tiene valor
    if (this.items) {
      this.data.set(this.items);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.data.set(this.items ?? []); // actualiza la señal cada vez que cambien los datos
      console.log("patata", this.items);
    }
  }



  // objectKeys(obj: any): string[] {
  //   console.log(obj)
  //   return Object.keys(obj);

  // }

}

