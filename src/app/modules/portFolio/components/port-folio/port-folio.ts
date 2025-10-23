import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-port-folio',
  imports: [],
  templateUrl: './port-folio.html',
  styleUrl: './port-folio.css'
})
export class PortFolio implements OnInit{
  username = '';
  roles: string[] = [];

  constructor(private keycloak: KeycloakService) {}

  async ngOnInit() {
    const profile = await this.keycloak.loadUserProfile();
    this.username = profile.username!;
    this.roles = this.keycloak.getUserRoles();

    const token = await this.keycloak.getToken();
  }
}
