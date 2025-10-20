import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';
import { UserService } from '../../config/keycloack/service/user-service';
import { Button, ButtonModule } from "primeng/button";

@Component({
  selector: 'app-nav-bar',
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, ButtonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
  standalone: true,
})
export class NavBar implements OnInit{

    items: MenuItem[] | undefined;



    constructor(
        private router: Router,
        public userService: UserService
    ) {}
    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['']);
                    }
            },
            {
                label: 'Mis Proyectos',
                icon: 'pi pi-search',
                badge: '1',
                items: [
                    {
                        label: 'Produtos CRUD',
                        icon: 'pi pi-bolt',
                        shortcut: 'Productos',
                        command: () => {
                            this.router.navigate(['/productos']);
                        }
                    }
                ],
            },
        ];
    }
}
