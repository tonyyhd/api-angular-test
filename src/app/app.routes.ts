import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/productExample/component/products/products';
import { PortFolio } from './modules/portFolio/components/port-folio/port-folio';

export const routes: Routes = [
    { path: 'productos', component: ProductsComponent },
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PortFolio },
];
