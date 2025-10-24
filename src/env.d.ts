declare interface Env {
  readonly NODE_ENV: string;
  readonly NG_APP_API_URL: string;
  readonly NG_APP_KEYCLOAK_URL: string;
  readonly NG_APP_KEYCLOAK_REALM: string;
  readonly NG_APP_KEYCLOAK_CLIENT: string;
  [key: string]: any;
}

declare const _NGX_ENV_: Env;
