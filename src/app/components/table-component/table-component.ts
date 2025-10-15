
import { Component, EventEmitter, Input, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Products } from '../../modules/productExample/model/products';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-table-component',
  imports: [TableModule, CommonModule, ToastModule, ConfirmDialogModule ],
  providers: [ConfirmationService],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css'
})
export class TableComponent implements OnInit{

  @Input() items: Products[] | undefined;
  @Input() columns: { field: string; header: string; type?: string }[] | undefined;
  @Input() showActions = false;
  @Output() edit = new EventEmitter<Products>();
  @Output() confirmDelete = new EventEmitter<any>();
 
  rowIndex: any;

  data = signal<Products[]>([]);

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {
    if (this.items) {
      this.data.set(this.items);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.data.set(this.items ?? []);
      console.log("tabla", this.items);
    }
  }

  onEdit(item: Products) {
    this.edit.emit(item);
  }

  onDelete(event: Event, item: any) {
    console.log(item);
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      header: 'Borrar',
      message: `¿Seguro que deseas eliminar este registro?`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí, eliminar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.confirmDelete.emit(item);
      }
    });
  }
}

