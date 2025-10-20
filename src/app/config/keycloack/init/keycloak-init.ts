import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../../../environments/environment';


export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.client,
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        silentCheckSsoRedirectUri: '',
      },
      bearerExcludedUrls: ['/assets'],
    });
}
