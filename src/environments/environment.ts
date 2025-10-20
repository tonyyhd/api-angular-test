export const environment = {
  production: false,
  apiUrl: _NGX_ENV_['NG_APP_API_URL'],
  keycloak: {
    url: _NGX_ENV_['NG_APP_KEYCLOAK_URL'],
    realm: _NGX_ENV_['NG_APP_KEYCLOAK_REALM'],
    client: _NGX_ENV_['NG_APP_KEYCLOAK_CLIENT']
  }
};