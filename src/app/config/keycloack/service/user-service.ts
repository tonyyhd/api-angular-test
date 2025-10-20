import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, from, interval, switchMap } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private keycloak = inject(KeycloakService);

  private userSubject = new BehaviorSubject<UserInterface | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    this.initUser();
  }

  private async initUser() {
    try {
      await this.loadUserProfile();
      this.startTokenRefresh();
    } catch (err) {
      console.error('Error inicializando usuario Keycloak:', err);
      this.userSubject.next(null);
    }
  }

  private async loadUserProfile() {
    const profile = await this.keycloak.loadUserProfile();
    const roles = this.keycloak.getUserRoles();
    this.userSubject.next({ ...profile, roles });
  }

  async getToken(): Promise<string> {
    return this.keycloak.getToken();
  }

  logout(redirectUri: string = window.location.origin) {
    this.keycloak.logout(redirectUri);
  }

  private startTokenRefresh() {
    const refreshInterval = 30;
    interval(refreshInterval * 1000)
      .pipe(switchMap(() => from(this.keycloak.updateToken(refreshInterval))))
      .subscribe({
        next: (refreshed) => {
          if (refreshed) console.log('Token renovado automáticamente');
        },
        error: (err) => console.error('Error renovando token', err),
      });
  }
}
