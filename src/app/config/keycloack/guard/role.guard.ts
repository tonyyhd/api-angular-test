import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const roleGuard: CanActivateFn = async (route, state) => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  const requiredRoles = route.data['roles'];
  const userRoles = keycloak.getUserRoles();

  const hasRole = requiredRoles.some((r: string) => userRoles.includes(r));
  if (!hasRole) {
    await router.navigate(['/unauthorized']);
    return false;
  }

  return true;
};
