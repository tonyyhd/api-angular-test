
import { Component, EventEmitter, Input, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { Products } from '../../../model/products';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products-modal',
  imports: [Dialog, ButtonModule, InputTextModule, AvatarModule, FormsModule],
  templateUrl: './products-modal.html',
  styleUrl: './products-modal.css'
})
export class ProductsModal implements OnInit{


  @Input() item: Products | undefined;
  @Input() visible: boolean = false;
  @Input() isEdit: boolean = false;
  @Output() close = new EventEmitter<void>(); // ⚡ output para avisar al padre
  data = signal<Products | undefined>(undefined);
  @Output() saveProduct = new EventEmitter<Products>();

  formData: Partial<Products> = { descripcion: '', precio: 0, existencia: 0 };

  ngOnInit(): void {
    if (this.item) {
      this.data.set(this.item);
    }
  }


  private initForm() {
    if (this.isEdit && this.item) {
      this.formData = { ...this.item };
    } else {
      this.formData = {descripcion: '', precio: 0, existencia: 0 };
    }
  }

  OnClose(){
    this.close.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item'] && changes['item'].currentValue) {
      this.data.set(changes['item'].currentValue);
      this.initForm();
    }
  }

   save() {
    this.saveProduct.emit(this.formData as Products);
    console.log(this.formData)
    this.OnClose();
  }
 
}
