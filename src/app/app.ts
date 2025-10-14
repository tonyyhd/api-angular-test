import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./shared/nav-bar/nav-bar";
import { ProductsComponent } from "./modules/productExample/component/products/products";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('api-angular-test');
}
